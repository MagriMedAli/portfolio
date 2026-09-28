export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  stack: string[];
  features: string[];
  repoUrl: string;
  image: string;
}

// Edit repoUrl below once each repository is public.
export const projects: Project[] = [
      {
    id: "flowdesk-ai-sales-agent",
    title: "FlowDesk AI Sales & Support Agent",
    tag: "RAG + CRM agent",
    description:
      "A chatbot that answers product and pricing questions from a company's own documents, spots buying intent, and creates the contact and deal in HubSpot after the customer confirms their details.",
    stack: ["n8n", "Pinecone", "HubSpot", "RAG"], // add the LLM you used in the final version
    features: [
      "RAG answers grounded in a knowledge base",
      "7-intent classification from the full conversation",
      "Multi-turn lead qualification with confirmation before any CRM action",
      "HubSpot contact and deal creation",
    ],
    repoUrl: "https://github.com/MagriMedAli/QualiBook",
    image: "/projects/flowdesk-1.png",
  },
  {
    id: "ai-lead-qualification-agent",
    title: "AI Lead Qualification Agent",
    tag: "Conversational AI agent",
    description:
      "A WhatsApp agent for a real estate agency. It talks to new leads, asks qualifying questions one at a time, and saves what it learns per lead so a conversation can resume later.",
    stack: ["n8n", "Google Gemini", "PostgreSQL", "WhatsApp Cloud API"],
    features: [
      "Multi-turn conversation with memory per lead",
      "AI extracts budget, area, intent and timeline",
      "Lead state saved in PostgreSQL",
      "Admin dashboard to follow leads",
    ],
    repoUrl: "https://github.com/MagriMedAli/flowdesk-ai-agent",
    image: "/projects/qualibook.png",
  },
    
  {
    id: "ai-support-ticket-triage",
    title: "AI Support Ticket Triage",
    tag: "Customer support automation",
    description:
      "An AI support system that reads incoming emails, scores its own confidence, and replies automatically only when it is sure. Uncertain tickets go to a human on Telegram first, so the AI never makes promises it shouldn't.",
    stack: ["n8n", "Google Gemini", "PostgreSQL", "Gmail", "Telegram Bot API"],
    features: [
      "Confidence-based routing (auto-reply or human review)",
      "AI ticket classification by category and urgency",
      "Human-in-the-loop review through Telegram",
      "Ticket logging and state in PostgreSQL",
    ],
    repoUrl: "https://github.com/MagriMedAli/TriageAigit",
    image: "/projects/support.png",
  },
  {
    id: "whatsapp-order-automation",
    title: "AI WhatsApp Order Automation",
    tag: "Conversational commerce",
    description:
      "An AI-powered WhatsApp ordering system that understands customer messages, checks product availability, manages customers, creates orders, and sends confirmations automatically.",
    stack: ["n8n", "Google Gemini", "FastAPI", "Python", "PostgreSQL", "WhatsApp Cloud API", "Docker"],
    features: [
      "Natural-language order processing",
      "AI intent detection",
      "Product availability checking",
      "Automatic customer creation",
      "Order creation through REST APIs",
      "Product catalog responses",
      "WhatsApp confirmations",
      "PostgreSQL persistence",
    ],
    repoUrl: "https://github.com/MagriMedAli/WhatsAPP-order-automation-system", // TODO: replace with repo URL
    image: "/projects/whatsapp-order.jpg",
  },
  {
    id: "ai-cv-extractor",
    title: "AI CV Extractor",
    tag: "Recruiting pipeline",
    description:
      "An automated CV processing pipeline that receives PDF resumes, extracts structured candidate information using AI, and stores the results in PostgreSQL.",
    stack: ["n8n", "Gmail", "Google Gemini", "PostgreSQL", "Python"],
    features: [
      "Gmail attachment monitoring",
      "Automatic PDF processing",
      "AI-powered information extraction",
      "Structured JSON output",
      "PostgreSQL candidate storage",
      "Error logging",
    ],
    repoUrl: "https://github.com/MagriMedAli/CVextractor", // TODO: replace with repo URL
    image: "/projects/cv-extractor.png",
  },
  {
    id: "price-stock-tracker",
    title: "E-commerce Price & Stock Tracker",
    tag: "Monitoring system",
    description:
      "An automated monitoring system that collects product prices and availability from e-commerce websites and stores the results for tracking.",
    stack: ["Python", "Playwright", "PostgreSQL", "Web Scraping"],
    features: [
      "Automated product monitoring",
      "Dynamic website scraping",
      "Price tracking",
      "Stock availability detection",
      "Database persistence",
    ],
    repoUrl: "https://github.com/MagriMedAli/stockchecker", // TODO: replace with repo URL
    image: "/projects/price-tracker.png",
  },
  {
    id: "telegram-expense-logger",
    title: "Telegram Expense Logger",
    tag: "Personal finance bot",
    description:
      "A Telegram bot that allows users to record expenses through natural messages and automatically stores structured expense data.",
    stack: ["Python", "Telegram Bot API", "n8n", "PostgreSQL"],
    features: [
      "Telegram message processing",
      "Automatic expense extraction",
      "Structured database storage",
      "Workflow automation",
    ],
    repoUrl: "https://github.com/MagriMedAli/telegram-expense-bot", // TODO: replace with repo URL
    image: "/projects/telegram-expense.png",
  },
];
