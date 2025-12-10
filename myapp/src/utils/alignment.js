// Alignment logic: Elphaba (bad) vs Glinda (good)
const BAD_INDICATOR_TAGS = [
  "Suspicious",
  "Investigate",
  "SQLi",
  "Brute-force",
  "Privilege escalation"
];

const GOOD_INDICATOR_TAGS = [
  "Benign"
];

export function getAlignment(log) {
  const tags = log.tags || [];
  const level = (log.level || "").toUpperCase();

  const isBad =
    BAD_INDICATOR_TAGS.some(t => tags.includes(t)) ||
    ["ERROR", "CRITICAL", "ALERT"].includes(level);

  const isGood =
    !isBad && GOOD_INDICATOR_TAGS.some(t => tags.includes(t));

  if (isBad) {
    return { label: "Elphaba", kind: "elphaba" };
  }
  if (isGood) {
    return { label: "Glinda", kind: "glinda" };
  }
  return null;
}
