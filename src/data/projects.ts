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
    logo_url: "https://via.placeholder.com/150x150?text=QiTaah+Logo",
    banner_url:
      "https://emamirealty.com/wp-content/uploads/2023/07/The-Future-of-Real-Estate-Emerging-Technologies-and-Trends.png",
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
  }
];
