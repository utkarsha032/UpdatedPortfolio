import React from "react";

export const experiences = [
  {
    title: "Research Intern",
    company: "University College London",
    date: "Jul 2025 – Present · Remote",
    points: [
      "Built an LLM Recommender System for Finance for risk forecasting, earnings-call summarization, and sentiment analysis.",
      "Developed embeddings-based retrieval, unsupervised clustering, and explainability modules for model discovery and selection."
    ]
  },
  {
    title: "Mentee — TI WiSH’25 (Hardware Track)",
    company: "Texas Instruments",
    date: "May – Jun 2025",
    points: [
      "Selected among top 150 students nationwide for a 4-week embedded systems mentorship program.",
      "Designed a Smart Streetlight System with microcontrollers, LDR sensors, RF modules, and op-amp comparators for automated control and remote monitoring.",
      "Won 1st Prize in program hackathon; received pre-internship offer for Summer 2026 (Analog Engineering)."
    ]
  }
];

export default function Experience() {
  return (
    <section className="xp-section">
      <h1 className="sectionTitle">Experience</h1>
      <div className="xp-grid">
        {experiences.map((x) => (
          <article className="xp-card" key={`${x.title}-${x.company}`}>
            <div className="xp-head">
              <h2 className="xp-role">{x.title}</h2>
              <span className="xp-time">{x.date}</span>
            </div>
            <div className="xp-org">{x.company}</div>
            <ul className="xp-list">
              {x.points.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
