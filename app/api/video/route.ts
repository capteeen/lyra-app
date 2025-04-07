import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

type ReplicateOutput = string | string[] | { [key: string]: any } | null;

async function initiateVideoGeneration(prompt: string) {
  try {
    console.log('Initiating video generation with prompt:', prompt);
    
    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt,
          fps: 24,
          num_frames: 24,
          width: 576,
          height: 320,
          guidance_scale: 17.5,
          num_inference_steps: 50,
          negative_prompt: "bad quality, worse quality, low quality, blurry, ugly, duplicate, error"
        }
      }
    ) as ReplicateOutput;

    console.log('Generation completed, raw output:', output);

    // Handle different output formats
    let videoUrl: string | undefined;
    if (Array.isArray(output)) {
      videoUrl = output[0];
    } else if (typeof output === 'string') {
      videoUrl = output;
    } else if (output && typeof output === 'object') {
      const outputObj = output as { [key: string]: any };
      videoUrl = outputObj.url || outputObj.output || outputObj[0];
    }

    if (!videoUrl || typeof videoUrl !== 'string') {
      throw new Error('Invalid video URL format received from API');
    }

    // Validate URL format
    try {
      new URL(videoUrl);
    } catch {
      throw new Error('Invalid URL format received from API');
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
    
    // Clean error message for client
    let errorMessage = 'Failed to generate video';
    if (error.response?.status === 404) {
      errorMessage = 'Video generation service unavailable';
    } else if (error.message.includes('Invalid URL')) {
      errorMessage = 'Invalid response from video service';
    } else if (error.message.includes('pattern')) {
      errorMessage = 'Video format error - please try again';
    }

    throw new Error(errorMessage);
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.REPLICATE_API_TOKEN) {
      throw new Error('REPLICATE_API_TOKEN is not configured');
    }

    const body = await req.json();
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
      { 
        status: 'error',
        error: error.message || 'Failed to generate video'
      },
      { status: error.response?.status || 500 }
    );
  }
}

// No longer need GET endpoint since Replicate handles the generation synchronously 