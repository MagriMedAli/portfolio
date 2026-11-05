export type CardTheme = "ink" | "forest" | "paper" | "lime";

export interface Project {
  id: string;
  title: string;
  tag: string;
  badge?: string;
  description: string;
  stack: string[];
  features: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
  theme: CardTheme;
}

// Shown in this order as stacking cards. Themes cycle so neighbours never match.
export const projects: Project[] = [
  {
    id: "tarantino-cine-cafe",
    title: "Tarantino Ciné Café",
    tag: "Website + AI assistant",
    badge: "Live",
    description:
      "A cinema-themed website for a café in Monastir with an AI assistant built in. Guests browse the menu, check events, book a table, and ask the chat about prices, hours or karaoke nights — it answers by searching the real menu and the café's knowledge base.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion", "Supabase", "n8n", "Groq", "Gemini embeddings", "Netlify Functions"],
    features: [
      "AI chat with menu search + RAG",
      "Table reservations in Supabase",
      "Admin page for the team",
      "FR / EN, events & gallery",
    ],
    repoUrl: "https://github.com/MagriMedAli/Trantino-cine-cafe",
    liveUrl: "https://tarantino-cinecafe.netlify.app/",
    image: "/projects/tarantino.jpg",
    theme: "ink",
  },
  {
    id: "catrina-latte",
    title: "Catrina Latte",
    tag: "Brand website",
    badge: "Latest",
    description:
      "A bilingual (FR / EN) single-page site for a Mexican-inspired café in Monastir. An intro where a hand-drawn cup fills with coffee, a pinned scroll story through a day at the café from 07:00 to 01:00, and the signature drinks as flippable Lotería cards.",
    stack: ["React", "TypeScript", "Vite", "Framer Motion", "Sharp"],
    features: [
      "Animated coffee-cup intro",
      "Pinned day-to-night scroll story",
      "Live “Open now” badge (Tunis time)",
      "Automated image pipeline",
    ],
    repoUrl: "https://github.com/MagriMedAli/catrina-latte",
    image: "/projects/catrina-latte.jpg",
    theme: "lime",
  },
  {
    id: "flowdesk-ai-sales-agent",
    title: "FlowDesk AI Sales Agent",
    tag: "RAG + CRM agent",
    description:
      "A chatbot that answers product and pricing questions from a company's own documents, spots buying intent, and creates the contact and deal in HubSpot after the customer confirms their details.",
    stack: ["n8n", "Groq", "Pinecone", "HubSpot", "RAG"],
    features: [
      "RAG answers grounded in a knowledge base",
      "7-intent classification from the full conversation",
      "Confirmation before any CRM action",
      "HubSpot contact and deal creation",
    ],
    repoUrl: "https://github.com/MagriMedAli/flowdesk-ai-agent",
    image: "/projects/flowdesk-1.png",
    theme: "forest",
  },
  {
    id: "ai-lead-qualification-agent",
    title: "QualiBook",
    tag: "AI lead qualification",
    description:
      "A WhatsApp agent for a real estate agency. It talks to new leads, asks qualifying questions one at a time, remembers each lead so a conversation can resume later, and books the meeting in Google Calendar.",
    stack: ["n8n", "Google Gemini", "PostgreSQL", "WhatsApp Cloud API", "Next.js"],
    features: [
      "Multi-turn conversation with memory per lead",
      "AI extracts budget, area, intent and timeline",
      "Books meetings in Google Calendar",
      "Admin dashboard to follow leads",
    ],
    repoUrl: "https://github.com/MagriMedAli/QualiBook",
    image: "/projects/qualibook.png",
    theme: "paper",
  },
  {
    id: "ai-support-ticket-triage",
    title: "AI Ticket Triage",
    tag: "Customer support automation",
    description:
      "Reads incoming support emails, scores its own confidence, and replies automatically only when it is sure. Uncertain tickets go to a human on Telegram first, so the AI never makes promises it shouldn't.",
    stack: ["n8n", "Google Gemini", "PostgreSQL", "Gmail", "Telegram Bot API"],
    features: [
      "Confidence-based routing",
      "Classification by category and urgency",
      "Human-in-the-loop review on Telegram",
      "Ticket state in PostgreSQL",
    ],
    repoUrl: "https://github.com/MagriMedAli/TriageAigit",
    image: "/projects/support.png",
    theme: "ink",
  },
  {
    id: "whatsapp-order-automation",
    title: "WhatsApp Order Bot",
    tag: "Conversational commerce",
    description:
      "An AI ordering system on WhatsApp that understands customer messages, checks product availability, manages customers, creates orders and sends confirmations automatically.",
    stack: ["n8n", "Google Gemini", "FastAPI", "Python", "PostgreSQL", "WhatsApp Cloud API", "Docker"],
    features: [
      "Natural-language orders with intent detection",
      "Live product availability checks",
      "Customer and order creation via REST APIs",
      "WhatsApp confirmations",
    ],
    repoUrl: "https://github.com/MagriMedAli/WhatsApp-order-automation-system",
    image: "/projects/whatsapp-order.jpg",
    theme: "lime",
  },
  {
    id: "ai-cv-extractor",
    title: "AI CV Extractor",
    tag: "Recruiting pipeline",
    description:
      "Watches a Gmail inbox for PDF resumes, extracts structured candidate information with AI, and stores it in PostgreSQL ready for recruiting.",
    stack: ["n8n", "Gmail", "Google Gemini", "PostgreSQL", "Python"],
    features: [
      "Gmail attachment monitoring",
      "Automatic PDF processing",
      "AI extraction to structured JSON",
      "Candidate storage with error logging",
    ],
    repoUrl: "https://github.com/MagriMedAli/CVextractor",
    image: "/projects/cv-extractor.png",
    theme: "forest",
  },
  {
    id: "price-stock-tracker",
    title: "Price & Stock Tracker",
    tag: "Monitoring system",
    description:
      "Collects product prices and availability from e-commerce websites on a schedule and stores the results, so changes can be tracked over time.",
    stack: ["Python", "Playwright", "BeautifulSoup", "PostgreSQL"],
    features: [
      "Automated product monitoring",
      "Dynamic website scraping",
      "Price and stock change detection",
      "Database persistence",
    ],
    repoUrl: "https://github.com/MagriMedAli/stockchecker",
    image: "/projects/price-tracker.png",
    theme: "paper",
  },
  {
    id: "telegram-expense-logger",
    title: "Telegram Expense Bot",
    tag: "Personal finance bot",
    description:
      "Record expenses by just texting a Telegram bot. It extracts the amount, category and details from natural messages and stores them as structured data.",
    stack: ["n8n", "Telegram Bot API", "Google Sheets API", "Python"],
    features: [
      "Telegram message processing",
      "Automatic expense extraction",
      "Structured storage for tracking",
      "Workflow automation",
    ],
    repoUrl: "https://github.com/MagriMedAli/telegram-expense-bot",
    image: "/projects/telegram-expense.png",
    theme: "ink",
  },
];
