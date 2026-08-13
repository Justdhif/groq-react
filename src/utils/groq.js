import { Groq } from "groq-sdk";

const GROQ_API = import.meta.env.VITE_GROQ_API;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

export const requestToGroq = async (content) => {
  const reply = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content,
      },
    ],
    model: "llama-3.1-8b-instant",
  });

  return reply.choices[0].message.content;
};
