import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const MODEL_VERSION = "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351";

async function initiateVideoGeneration(prompt: string) {
  try {
    console.log('Initiating video generation with prompt:', prompt);

    const output = await replicate.run(MODEL_VERSION, {
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

    console.log('Generation output:', output);

    if (!output || !Array.isArray(output) || output.length === 0) {
      throw new Error('Invalid output format received');
    }

    const videoUrl = output[0];
    if (!videoUrl || typeof videoUrl !== 'string') {
      throw new Error('No valid video URL in output');
    }

    // Validate URL format
    try {
      new URL(videoUrl);
    } catch {
      throw new Error('Invalid URL format received');
    }

    return {
      status: 'success',
      url: videoUrl,
      message: 'Video generation completed'
    };
  } catch (error: any) {
    console.error('Video generation error details:', {
      error: error.message,
      stack: error.stack,
      cause: error.cause
    });

    // Handle different types of errors
    let errorMessage = 'Failed to generate video';
    
    if (error.response) {
      try {
        const errorBody = await error.response.json();
        errorMessage = errorBody.error || errorMessage;
      } catch {
        errorMessage = error.response.statusText || errorMessage;
      }
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error.message) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
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
    const { prompt } = body;

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