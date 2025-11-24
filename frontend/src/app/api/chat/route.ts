import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// This API route is OPTIONAL and requires users to provide their own API keys
// The terminal works perfectly without it using the local AI system

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { messages, model = 'gpt-3.5-turbo' } = await req.json();

    // Check if API key is configured
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'External AI not configured',
          message:
            'No API key found. The terminal uses local AI by default. ' +
            'To enable external AI, add OPENAI_API_KEY to your environment variables.',
          useLocal: true,
        },
        { status: 200 }
      );
    }

    // System prompt for portfolio context
    const systemPrompt = `You are a helpful AI assistant integrated into Mads Hermansen's portfolio website.

Context:
- Mads is a Full Stack Developer from Norway
- Currently pursuing MSc in Software Systems at NTNU
- Teaching Assistant at NTNU
- Studied abroad at Tokyo University of Marine Science and Technology
- Skills: React, Next.js, TypeScript, Node.js, React Native, Express, MySQL
- Hobbies: Calisthenics, hanging with friends
- Passionate about web development, discovering new technologies, and collaborative learning

Respond conversationally and helpfully. Keep responses concise but informative. You can be friendly and slightly humorous while maintaining professionalism.`;

    const result = await streamText({
      model: openai(model),
      system: systemPrompt,
      messages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json(
      {
        error: 'Failed to process request',
        message: 'Falling back to local AI',
        useLocal: true,
      },
      { status: 500 }
    );
  }
}
