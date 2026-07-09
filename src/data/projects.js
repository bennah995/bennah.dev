const projects = [
  {
    title: "M-Pesa Paylink",
    slug: "mpesa-paylink",
    description: "A payment integration tool built on Safaricom's Daraja API. Supports STK push with real transaction validation.",
    longDescription: "Built a full M-Pesa STK push integration using Safaricom's Daraja API. Handles OAuth token generation, initiates payment prompts to the user's phone, and validates real transactions. Tested with a live KES 1 payment.",
    stack: ["Node.js", "Express", "M-Pesa API"],
    github: "https://github.com/bennah995/mpesa-paylink"
  },
  {
    title: "WhatsApp CRM",
    slug: "whatsapp-crm",
    description: "Multi-channel CRM unifying WhatsApp, web dashboard and USSD on a single PostgreSQL database.",
    longDescription: "A production-level CRM system that unifies WhatsApp messaging, a web dashboard, and USSD into a single PostgreSQL database. Built with Redis for USSD session management and a React frontend for the dashboard.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/bennah995/YOUR-REPO-NAME"
  },
  {
    title: "EcoRank",
    slug: "ecorank",
    description: "Gamified environmental action app built solo at the Build for Earth Nairobi Hackathon 2026.",
    longDescription: "Built 100% solo at the Build for Earth Nairobi Hackathon 2026. EcoRank gamifies environmental action — users log eco-friendly activities and earn points on a leaderboard. Designed, built and presented in under 48 hours.",
    stack: ["React", "React Router", "Lucide React", "CSS", "Local Storage"],
    github: "https://github.com/bennah995/Eco-Rank"
  }
]

export default projects;