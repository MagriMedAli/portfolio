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
    repoUrl: "https://github.com/MagriMedAli/-order-automation-system", // TODO: replace with repo URL
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
