import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function initiateVideoGeneration(prompt: string) {
  try {
    console.log('Initiating video generation with prompt:', prompt);
    
    const output = await replicate.run(
      "kwaivgi/kling-v1.6-standard",
      {
        input: {
          prompt: prompt,
          num_frames: 24,
          fps: 8,
          guidance_scale: 7.5,
          num_inference_steps: 25,
          negative_prompt: "blurry, low quality, distorted"
        }
      }
    );

    console.log('Generation completed, output:', output);

    if (!output) {
      throw new Error('No output received from the API');
    }

    return { 
      status: 'completed',
      url: output,
      message: 'Video generation completed'
    };
  } catch (error: any) {
    console.error('Video generation error details:', {
      error: error.message,
      stack: error.stack,
      cause: error.cause
    });
    throw new Error(`Failed to generate video: ${error.message}`);
  }
}

export async function POST(req: Request) {
  try {
    console.log('Received POST request');
    const body = await req.json();
    console.log('Request body:', body);

    const { prompt } = body;

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
      { error: error.message || 'Failed to generate video' },
      { status: 500 }
    );
  }
}

// No longer need GET endpoint since Replicate handles the generation synchronously 