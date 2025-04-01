import { NextResponse } from 'next/server';
import { generateImage } from '@/lib/replicate';

export async function POST(req: Request) {
  try {
    const { prompt, style, size } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const result = await generateImage(prompt, style, size);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
} 