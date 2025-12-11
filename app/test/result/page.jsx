"use client";
import { useEffect, useState } from "react";
import { calculatePatternScore } from "../../../lib/test/score";

export default function TestResultPage() {
  const [answers, setAnswers] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pb_test_answers");
    if (stored) {
      setAnswers(JSON.parse(stored));
    }
    setVisible(true);
  }, []);

  const result = calculatePatternScore(answers);
  const interpretations = {
    "Vector Mode": "Your thinking favors directional processing and goal-driven pattern compression.",
    "Field Mode": "Your cognition distributes attention across contextual layers and maintains broad pattern awareness.",
    "Drift Mode": "Your mind generates associative flow, conceptual divergence, and high creative variability.",
    "Anchor Mode": "Your thinking stabilizes patterns, maintains structure, and optimizes for predictable reasoning."
  };

  return (
    <div className="pb-page">
      <main className="pb-page-content">
        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl" style={{ maxWidth: '720px' }}>
            <h1 className="pb-h1 mt-10 mb-6">Blueprint Test Result</h1>
            <p className="pb-body pb-text-secondary">
              This page shows your Blueprint Pattern Profile based on the 10-question test.
            </p>
          </div>
        </div>

        <div className="pb-section py-4">
          <div className="pb-container max-w-2xl leading-relaxed" style={{ maxWidth: '720px' }}>
            <div className={visible ? "opacity-100 transition-opacity duration-400 ease-out" : "opacity-0"}>
              <div className="mt-12 space-y-6">
                <h2 className="pb-h2 text-xl font-semibold mt-8 mb-3">Mode: {result.mode}</h2>
                <p className="pb-body leading-relaxed">Score: {result.score}</p>
                <p className="pb-body mt-2 leading-relaxed">{result.description}</p>
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="pb-h2 text-lg font-semibold mt-6 mb-2">Interpretation</h3>
                <p className="pb-body leading-relaxed">
                  {interpretations[result.mode] || "No interpretation available."}
                </p>
                <p className="pb-body mt-2 leading-relaxed">
                  {result.mode === "Vector Mode" && "Vector Thinker — recognizes patterns quickly and thinks in multidimensional structures."}
                  {result.mode === "Anchor Mode" && "Linear Thinker — thinks step-by-step with stability and structure."}
                  {(result.mode === "Field Mode" || result.mode === "Drift Mode") && "Mixed Thinker — switches between modes based on context."}
                </p>
                <p className="pb-body mt-4 leading-relaxed">
                  Explore the Manifest or Theory to understand how these thinking patterns connect to the Blueprint Principle.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-section-sm">
          <div className="pb-container pb-text-center max-w-2xl" style={{ maxWidth: '720px' }}>
            <p className="pb-caption pb-text-tertiary">© 2025 PatternBlueprint</p>
          </div>
        </section>
      </main>
    </div>
  );
}

