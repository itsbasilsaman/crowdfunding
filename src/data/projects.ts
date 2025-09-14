// src/data/projects.ts
export interface Project {
  id: number;
  name: string;
  description: string;
  goal: number;
  raised: number;
  category: string;
  funding_stage: string;
  timeline: string;
  team: string;
  risks: string;
  status: string;
  logo_url: string;
  banner_url: string;
  report_text: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "QiTaah",
    description:
      "A revolutionary software application featuring free ERP and CRM with patented Spider Web and Spider Mapping technologies for real estate, offering thousands of customizable filters and an integrated escrow system. Fully developed with 457,000 AED invested, now raising 250,000 AED immediately for Seed funding to launch on October 2, 2025. Funds will secure licenses and operations with low costs (<1000 AED/month). Offers 5% shares with royalty returns in Series A Part 2. Invested money returns in 45 days for QiTaah only, with annual dividends based on shares held.",
    goal: 250000,
    raised: 0,
    category: "Tech",
    funding_stage: "Seed",
    timeline: "12 months from October 2, 2025",
    team:
      "Asif Azad (CEO, B-Tech Mechanical, M-Tech Mechatronics, AI expert), Rajila Beevi Kaseenkunju (Co-founder, major shareholder), Sabeel Basheer (Dentist, Seed investor)",
    risks: "Market competition",
    status: "Live",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Light_bulb_icon.svg",
    banner_url:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    report_text: `TOP SECRET & CONFIDENTIAL

QiTaah Project Report

Prepared by Asif Azad

August 15, 2025

Contact: +971581677917 | Email: ceo@frshar.com

Revolutionizing Innovation with AI-Driven Technology

Executive Summary: This document is TOP SECRET & CONFIDENTIAL. QiTaah is a software application with Spider Mapping technology for real estate, poised to transform the industry in the UAE and beyond. With 457,000 AED invested and 250,000 AED sought immediately for Seed funding, it offers 5% shares with royalty returns. Invested funds return in 45 days with annual dividends.

Background: Developed by Asif Azad and Rajila Beevi Kaseenkunju, QiTaah leverages proprietary Spider Web and Spider Mapping technologies.

Market Research: Identifies gaps in existing platforms, positioning QiTaah as a revolutionary alternative.

Key Innovations: Spider Web Technology, Spider Mapping Technology, thousands of filters, and an integrated escrow system.

Partners: Asif Azad, Rajila Beevi Kaseenkunju, Sabeel Basheer.

Funding: 250,000 AED sought for launch with low operating costs.

Launch Plan: Launch on October 2, 2025, targeting users with a robust network.

Conclusion: QiTaah invites investors to join this ready-to-launch project with guaranteed returns.`
  },
  {
    id: 2,
    name: "Green Oasis Farms",
    description:
      "A sustainable vertical farming startup using hydroponics and solar energy to grow organic vegetables in urban areas. Raising 150,000 AED for expansion and new technology integration.",
    goal: 150000,
    raised: 20000,
    category: "Agriculture",
    funding_stage: "Pre-Seed",
    timeline: "18 months",
    team: "Layla Hassan (Founder), Omar Al-Farsi (CTO)",
    risks: "Climate adaptation, market education",
    status: "Live",
  logo_url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Green_leaves_icon.png",
  banner_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    report_text: `Green Oasis Farms is revolutionizing urban agriculture with vertical farming and renewable energy. The team is seeking 150,000 AED to expand operations and integrate new hydroponic systems. Investors will benefit from a growing demand for local, organic produce.`
  },
  {
    id: 3,
    name: "EduSpark",
    description:
      "An edtech platform providing AI-powered personalized learning for K-12 students. Raising 300,000 AED to scale content and launch in new regions.",
    goal: 300000,
    raised: 50000,
    category: "Education",
    funding_stage: "Seed",
    timeline: "12 months",
    team: "Sara Al-Mansoori (CEO), John Kim (Lead Developer)",
    risks: "Content localization, tech adoption",
    status: "Live",
  logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Light_bulb_icon.svg",
  banner_url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    report_text: `EduSpark leverages AI to deliver personalized learning experiences for students. The platform is raising 300,000 AED to expand its curriculum and reach more learners across the region.`
  },
  {
    id: 4,
    name: "MedLink",
    description:
      "A telemedicine platform connecting patients with doctors for remote consultations. Raising 200,000 AED for app development and marketing.",
    goal: 200000,
    raised: 40000,
    category: "HealthTech",
    funding_stage: "Seed",
    timeline: "10 months",
    team: "Dr. Ahmed Youssef (Founder), Fatima Noor (COO)",
    risks: "Regulatory compliance, user trust",
    status: "Live",
  logo_url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Medical_icon.png",
  banner_url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    report_text: `MedLink is making healthcare accessible through telemedicine. The team is seeking 200,000 AED to enhance the platform and reach more patients in remote areas.`
  },
  {
    id: 5,
    name: "EcoMove",
    description:
      "A green mobility startup offering electric scooter rentals in major cities. Raising 100,000 AED for fleet expansion and smart docking stations.",
    goal: 100000,
    raised: 15000,
    category: "Mobility",
    funding_stage: "Seed",
    timeline: "8 months",
    team: "Mohammed Al-Sabah (CEO), Lina Park (COO)",
    risks: "Urban regulations, hardware maintenance",
    status: "Live",
  logo_url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Electric_scooter_icon.png",
  banner_url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    report_text: `EcoMove is transforming city transport with eco-friendly electric scooters. The company is raising 100,000 AED to expand its fleet and deploy smart docking stations.`
  }
];
