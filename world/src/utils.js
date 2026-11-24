export function normalizeQuality(score) {
  if (score === undefined || score === null || isNaN(Number(score))) return 9.0;
  const num = Number(score);
  return num > 10 ? num / 10 : num;
}

export function formatQualityScore(score) {
  const norm = normalizeQuality(score);
  return norm.toFixed(1);
}
