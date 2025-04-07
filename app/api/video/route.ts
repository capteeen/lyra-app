import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const MODEL_VERSION = "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351";

// Initiate video generation and return prediction ID
async function initiateVideoGeneration(prompt: string) {
  try {
    console.log('Initiating video generation with prompt:', prompt);

    const prediction = await replicate.predictions.create({
      version: MODEL_VERSION,
      input: {
        prompt,
        video_length: 4,
        width: 1024,
        height: 576,
        fps: 24,
        guidance_scale: 17.5,
        num_inference_steps: 50
      }
    });

    console.log('Prediction created:', prediction);

    return {
      status: 'pending',
      id: prediction.id,
      message: 'Video generation started'
    };
  } catch (error: any) {
    console.error('Video generation error details:', {
      error: error.message,
      stack: error.stack,
      cause: error.cause,
      response: error.response
    });

    throw new Error(error.message || 'Failed to start video generation');
  }
}

// Check video generation status
async function checkVideoStatus(predictionId: string) {
  try {
    const prediction = await replicate.predictions.get(predictionId);
    console.log('Checking prediction status:', prediction.status);

    if (prediction.status === 'succeeded') {
      const output = prediction.output;
      if (!output || !Array.isArray(output) || output.length === 0) {
        throw new Error('Invalid output format received');
      }

      const videoUrl = output[0];
      if (!videoUrl || typeof videoUrl !== 'string') {
        throw new Error('No valid video URL in output');
      }

      return {
        status: 'success',
        url: videoUrl,
        message: 'Video generation completed'
      };
    } else if (prediction.status === 'failed') {
      throw new Error(prediction.error || 'Video generation failed');
    }

    // Still processing
    return {
      status: 'pending',
      id: predictionId,
      message: 'Video is still generating'
    };
  } catch (error: any) {
    console.error('Status check error:', error);
    throw new Error(error.message || 'Failed to check video status');
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json(
        { 
          status: 'error',
          error: 'REPLICATE_API_TOKEN is not configured'
        },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { prompt, predictionId } = body;

    // If predictionId is provided, check status of existing prediction
    if (predictionId) {
      const result = await checkVideoStatus(predictionId);
      return NextResponse.json(result);
    }

    // Otherwise, start new video generation
    if (!prompt) {
      return NextResponse.json(
        { 
          status: 'error',
          error: 'Prompt is required'
        },
        { status: 400 }
      );
    }

    const result = await initiateVideoGeneration(prompt);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Video generation error:', {
      error: error.message,
      stack: error.stack,
      response: error.response
    });
    
    return NextResponse.json(
      { 
        status: 'error',
        error: error.message || 'Failed to generate video'
      },
      { status: error.response?.status || 500 }
    );
  }
}

// No longer need GET endpoint since Replicate handles the generation synchronously 