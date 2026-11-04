export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "AI & Automation",
    items: ["n8n", "OpenAI", "Google Gemini", "Groq", "RAG / Pinecone"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Tools",
    items: ["Docker", "Git", "Playwright"],
  },
];
