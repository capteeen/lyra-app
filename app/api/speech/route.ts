import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text, voice, speed } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Map voice selection to OpenAI voices
    const voiceMap: { [key: string]: string } = {
      en_female: 'nova',
      en_male: 'echo',
      en_neutral: 'onyx',
      en_alloy: 'alloy',
      en_fable: 'fable',
      en_shimmer: 'shimmer'
    };

    const selectedVoice = voiceMap[voice] || 'alloy';

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: selectedVoice,
      input: text,
      speed: speed
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    const base64Audio = buffer.toString('base64');
    const audioUrl = `data:audio/mp3;base64,${base64Audio}`;

    return NextResponse.json({ 
      url: audioUrl,
      duration: buffer.length / (16000 * 2) // Approximate duration in seconds
    });
  } catch (error: any) {
    console.error('Speech generation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate speech' },
      { status: 500 }
    );
  }
} 