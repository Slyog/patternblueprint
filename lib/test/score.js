import { testQuestions } from './questions';
import { patternModes } from './modes';

export function calculatePatternScore(answers) {
  const weights = { 0: 1, 1: 2, 2: 3 };
  let score = 0;

  if (answers && typeof answers === 'object') {
    testQuestions.forEach((question) => {
      const selected = answers[question.id];
      if (!selected) return;

      const idx = question.options?.indexOf(selected);
      if (idx === -1 || idx === undefined) return;

      const weight = weights[idx] ?? 0;
      score += weight;
    });
  }

  // Determine mode based on thresholds (highest threshold <= score)
  const sortedModes = [...patternModes].sort((a, b) => a.threshold - b.threshold);
  let matchedMode = sortedModes[0];

  for (const mode of sortedModes) {
    if (score >= mode.threshold) {
      matchedMode = mode;
    }
  }

  return {
    mode: matchedMode?.name ?? "Prototype Mode",
    description: matchedMode?.description ?? "",
    score,
  };
}

