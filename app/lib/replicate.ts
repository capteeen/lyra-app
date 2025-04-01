'use server';

import Replicate from 'replicate';

// Initialize Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || '',
});

// Models
const MODELS = {
  IMAGE_GENERATION: 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
  VIDEO_GENERATION: 'anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351',
  TEXT_TO_SPEECH: 'suno-ai/bark:b76242b40d67c76ab6742e987628a2a9ac019e11d56ab96c4e91ce03b79b2787',
  IMAGE_EDITING: 'stability-ai/stable-diffusion-img2img:15a3689ee13b0d2616e98820eca31d4c3abcd36672df6afce5cb6feb1d66087d',
} as const;

// Type definitions
export interface GenerationResponse {
  status: 'success' | 'error';
  output?: string[];
  error?: string;
}

// Image generation
export async function generateImage(prompt: string, style: string = 'realistic', size: string = '1024x1024'): Promise<GenerationResponse> {
  try {
    const dimensions = size.split('x').map(Number);
    const output = await replicate.run(MODELS.IMAGE_GENERATION, {
      input: {
        prompt,
        width: dimensions[0],
        height: dimensions[1],
        refine: 'expert_ensemble_refiner',
        scheduler: 'K_EULER',
        style_preset: style.toLowerCase(),
      }
    }) as string[];

    return { status: 'success', output };
  } catch (error) {
    console.error('Image generation error:', error);
    return { status: 'error', error: 'Failed to generate image' };
  }
}

// Video generation
export async function generateVideo(prompt: string, duration: number = 5, resolution: string = '1080p'): Promise<GenerationResponse> {
  try {
    const [width, height] = resolution === '1080p' ? [1920, 1080] : 
                           resolution === '720p' ? [1280, 720] : [854, 480];
    
    const output = await replicate.run(MODELS.VIDEO_GENERATION, {
      input: {
        prompt,
        video_length: duration,
        width,
        height,
        fps: 24,
      }
    }) as string[];

    return { status: 'success', output };
  } catch (error) {
    console.error('Video generation error:', error);
    return { status: 'error', error: 'Failed to generate video' };
  }
}

// Text to speech
export async function generateSpeech(text: string, voice: string = 'en_female', speed: number = 1): Promise<GenerationResponse> {
  try {
    const output = await replicate.run(MODELS.TEXT_TO_SPEECH, {
      input: {
        text,
        voice,
        speed_scale: speed,
      }
    }) as string[];

    return { status: 'success', output };
  } catch (error) {
    console.error('Speech generation error:', error);
    return { status: 'error', error: 'Failed to generate speech' };
  }
}

// Image editing
export async function editImage(
  image: string,
  prompt: string,
  enhancementLevel: number = 50,
  aspectRatio: string = 'original'
): Promise<GenerationResponse> {
  try {
    const strength = enhancementLevel / 100; // Convert to 0-1 range
    const output = await replicate.run(MODELS.IMAGE_EDITING, {
      input: {
        image,
        prompt,
        strength,
        guidance_scale: 7.5,
      }
    }) as string[];

    return { status: 'success', output };
  } catch (error) {
    console.error('Image editing error:', error);
    return { status: 'error', error: 'Failed to edit image' };
  }
} 