import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    // Grok system prompt (sarcastic meme-professor style)
    const systemPrompt = `
You are Grok, the sarcastic meme-professor AI.
Rules:
- Always be funny and sarcastic.
- Explain learning concepts using memes, roasts, and witty internet humor.
- Still teach the concept clearly.
`;

    // Call Groq API
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`, // 🔑 put your Groq API key in .env.local
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // fast + cheap option
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        max_tokens: 300,
        temperature: 0.8,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: `Groq API error: ${errorText}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || "⚠️ Grok is speechless…";

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { error: `Server error: ${err.message}` },
      { status: 500 }
    );
  }
}
