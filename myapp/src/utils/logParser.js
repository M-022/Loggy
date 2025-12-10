export function parseUploadedText(text) {
  const lines = text.split(/\r?\n/);
  const newLogs = [];
  let count = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    let obj = null;
    // Try JSON/JSONL
    if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
      try {
        const parsed = JSON.parse(trimmed);
        obj = {
          id: "u-" + Date.now() + "-" + count,
          timestamp: parsed.timestamp || parsed.time || parsed["@timestamp"] || new Date().toISOString(),
          level: (parsed.level || parsed.severity || "INFO").toString().toUpperCase(),
          source: parsed.source || parsed.app || parsed.logger || "uploaded.jsonl",
          category: parsed.category || parsed.type || "Uploaded",
          message: parsed.message || parsed.msg || trimmed,
          tags: []
        };
      } catch {
        // fall back to free-form
      }
    }

    if (!obj) {
      // Very simple syslog-like parse: "timestamp level source message..."
      const m = trimmed.match(/^(\S+\s+\d+\s+\d+:\d+:\d+|\d{4}-\d{2}-\d{2}T\S+Z?)?\s*(INFO|WARN|ERROR|CRITICAL|ALERT)?\s*([^:]+)?:?\s*(.*)$/i);
      let ts = new Date().toISOString();
      let level = "INFO";
      let source = "uploaded.log";
      let msg = trimmed;
      if (m) {
        if (m[1]) ts = m[1];
        if (m[2]) level = m[2].toUpperCase();
        if (m[3]) source = m[3].trim() || source;
        if (m[4]) msg = m[4];
      }
      obj = {
        id: "u-" + Date.now() + "-" + count,
        timestamp: ts,
        level,
        source,
        category: "Uploaded",
        message: msg,
        tags: []
      };
    }

    newLogs.push(obj);
    count++;
  }

  return newLogs;
}
