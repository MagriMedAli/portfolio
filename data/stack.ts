export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "AI & Automation",
    items: ["n8n", "OpenAI", "Google Gemini", "AI APIs"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Tools",
    items: ["Docker", "Git", "GitHub", "VS Code"],
  },
];
