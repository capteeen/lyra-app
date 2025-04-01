import { NextResponse } from 'next/server';
import { generateVideo } from '@/lib/replicate';

export async function POST(req: Request) {
  try {
    const { prompt, duration, resolution } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const result = await generateVideo(prompt, duration, resolution);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Video generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate video' },
      { status: 500 }
    );
  }
} 