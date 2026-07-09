const projects = [
  {
    title: "M-Pesa Paylink",
    slug: "mpesa-paylink",
    description: "A self-hosted M-Pesa payment link generator with STK Push, webhook callbacks, and automatic PDF receipt generation.",
    overview: "A self-hosted M-Pesa payment link generator built with Node.js, Express, SQLite and React — featuring STK Push integration, Daraja API webhook callbacks, and automatic PDF receipt generation.",
    features: [
      "Generate shareable payment links for clients",
      "Trigger M-Pesa STK Push prompts directly to customer phones",
      "Handle Daraja API webhook callbacks automatically",
      "Generate and store PDF receipts on successful payment",
      "Track payment status in real time",
      "SQLite database for lightweight local storage"
    ],
    stack: {
      Frontend: ["React", "Axios", "React Router"],
      Backend: ["Node.js", "Express", "SQLite"],
      Payment: ["Safaricom Daraja API", "M-Pesa STK Push"],
      Other: ["ngrok", "dotenvx", "PDFKit"]
    },
    github: "https://github.com/bennah995/mpesa-paylink"
  },
  {
    title: "WhatsApp CRM",
    slug: "whatsapp-crm",
    description: "Multi-channel CRM unifying WhatsApp, web dashboard and USSD on a single PostgreSQL database.",
    overview: "A production-level CRM system that unifies WhatsApp messaging, a web dashboard, and USSD into a single PostgreSQL database. Built with Redis for USSD session management and a React frontend for the dashboard.",
    features: [
      "Unified inbox for WhatsApp, web and USSD channels",
      "USSD session management with Redis",
      "React dashboard for managing contacts and conversations",
      "PostgreSQL as single source of truth across all channels",
      "REST API backend with Node.js and Express"
    ],
    stack: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Node.js", "Express"],
      Database: ["PostgreSQL", "Redis"],
      Other: ["Africa's Talking USSD", "WhatsApp Business API"]
    },
    github: "https://github.com/bennah995/whatsapp-crm"
  },
  {
    title: "EcoRank",
    slug: "ecorank",
    description: "Gamified environmental action app built solo at the Build for Earth Nairobi Hackathon 2026.",
    overview: "Built 100% solo at the Build for Earth Nairobi Hackathon 2026. EcoRank gamifies environmental action — users log eco-friendly activities and earn points on a leaderboard. Designed, built and presented in under 48 hours.",
    features: [
      "Log eco-friendly actions and earn points",
      "Real-time leaderboard across participants",
      "Category-based action tracking",
      "Built and shipped solo under 48 hours",
      "Presented at Build for Earth Nairobi 2026"
    ],
    stack: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Coming soon..."],
      Database: ["Coming soon..."],
      Other: ["Vite"]
    },
    github: "https://github.com/bennah995/ecorank"
  }
]

export default projects;