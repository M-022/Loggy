export function applyFilters(logs, filters) {
  const { searchText, level, tag, onlyTagged } = filters;
  const taggedCounts = { Suspicious: 0 };

  let filtered = logs.filter(l => {
    if (level !== "ALL" && l.level !== level) return false;
    if (onlyTagged && (!l.tags || l.tags.length === 0)) return false;
    if (tag !== "ALL") {
      if (!l.tags || !l.tags.includes(tag)) return false;
    }
    if (searchText) {
      const hay = (
        (l.message || "") +
        " " + (l.source || "") +
        " " + (l.category || "") +
        " " + (l.level || "") +
        " " + (l.tags || []).join(" ")
      ).toLowerCase();
      if (!hay.includes(searchText.toLowerCase())) return false;
    }
    if (l.tags && l.tags.includes("Suspicious")) {
      taggedCounts.Suspicious++;
    }
    return true;
  });

  return { filtered, taggedCounts };
}

export function calculateStats(logs) {
  let suspiciousCount = 0;
  logs.forEach(log => {
    if (log.tags && log.tags.includes("Suspicious")) {
      suspiciousCount++;
    }
  });
  return { suspiciousCount };
}
