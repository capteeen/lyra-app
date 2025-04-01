import { NextResponse } from 'next/server';
import { generateImage, generateVideo, generateSpeech, editImage } from '@/lib/replicate';

export async function POST(req: Request) {
  try {
    const { type, ...params } = await req.json();

    let result;
    switch (type) {
      case 'image':
        result = await generateImage(params.prompt, params.style, params.size);
        break;
      case 'video':
        result = await generateVideo(params.prompt, params.duration, params.resolution);
        break;
      case 'speech':
        result = await generateSpeech(params.text, params.voice, params.speed);
        break;
      case 'edit':
        result = await editImage(params.image, params.prompt, params.enhancementLevel, params.aspectRatio);
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid generation type' },
          { status: 400 }
        );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Generation failed' },
      { status: 500 }
    );
  }
} 