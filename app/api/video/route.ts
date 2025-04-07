import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Updated to use Luma Ray Flash model
const MODEL_VERSION = "luma/ray-flash-2-540p";

// Initiate video generation and return prediction ID
async function initiateVideoGeneration(prompt: string) {
  try {
    console.log('Initiating video generation with prompt:', prompt);

    const prediction = await replicate.predictions.create({
      version: MODEL_VERSION,
      input: {
        prompt: prompt
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
      if (!output || typeof output !== 'string') {
        throw new Error('Invalid output format received');
      }

      return {
        status: 'success',
        url: output,
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
      throw new Error('REPLICATE_API_TOKEN is not configured');
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
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const result = await initiateVideoGeneration(prompt);
    console.log('Generation result:', result);
    
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Video generation error:', {
      error: error.message,
      stack: error.stack
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