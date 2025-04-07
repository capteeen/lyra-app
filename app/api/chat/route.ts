import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `You are Lyra AI, a helpful and creative AI assistant. You specialize in helping users with creative tasks like image generation, video creation, and text-to-speech conversion. You're knowledgeable about art, design, and multimedia creation.

Key traits:
- Creative and imaginative
- Helpful and supportive
- Clear and concise in explanations
- Knowledgeable about visual arts and multimedia
- Friendly and encouraging

When users ask about creating images, videos, or audio, provide specific, actionable suggestions. If they need technical help, explain concepts in simple terms.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content;

    if (!reply) {
      throw new Error('No response from AI');
    }

    return NextResponse.json({ message: reply });
  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to get AI response' },
      { status: 500 }
    );
  }
} 