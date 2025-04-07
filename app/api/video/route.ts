import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const MODEL_VERSION = "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351";

type ReplicateOutput = string | string[] | { url?: string; output?: string } | null;

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
    }) as ReplicateOutput;

    console.log('Generation output:', output);

    if (!output) {
      throw new Error('No output received from video generation');
    }

    // Handle different output formats
    let videoUrl: string;
    if (Array.isArray(output)) {
      if (output.length === 0) {
        throw new Error('Empty output array received');
      }
      videoUrl = output[0];
    } else if (typeof output === 'string') {
      videoUrl = output;
    } else if (typeof output === 'object') {
      const outputObj = output as { url?: string; output?: string; [key: string]: any };
      videoUrl = outputObj.url || outputObj.output || outputObj[0];
    } else {
      throw new Error('Unexpected output format received');
    }

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
      cause: error.cause,
      response: error.response
    });

    // Handle different types of errors
    let errorMessage = 'Failed to generate video';
    
    if (error.response) {
      try {
        // Try to read the response as text first
        const text = await error.response.text();
        try {
          // Try to parse as JSON if possible
          const data = JSON.parse(text);
          errorMessage = data.error || data.message || text;
        } catch {
          // If not JSON, use the text directly
          errorMessage = text;
        }
      } catch {
        // If can't read response, use status text
        errorMessage = error.response.statusText || 'API error occurred';
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