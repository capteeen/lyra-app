import { NextResponse } from 'next/server';
import { generateSpeech } from '@/lib/replicate';

export async function POST(req: Request) {
  try {
    const { text, voice, speed } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const result = await generateSpeech(text, voice, speed);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Speech generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate speech' },
      { status: 500 }
    );
  }
} 