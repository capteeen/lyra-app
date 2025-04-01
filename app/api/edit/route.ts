import { NextResponse } from 'next/server';
import { editImage } from '@/lib/replicate';

export async function POST(req: Request) {
  try {
    const { image, prompt, enhancementLevel, aspectRatio } = await req.json();

    if (!image || !prompt) {
      return NextResponse.json(
        { error: 'Image and prompt are required' },
        { status: 400 }
      );
    }

    const result = await editImage(image, prompt, enhancementLevel, aspectRatio);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Image editing error:', error);
    return NextResponse.json(
      { error: 'Failed to edit image' },
      { status: 500 }
    );
  }
} 