export const SAMPLE_LOGS = [
  {
    id: "s1",
    timestamp: "2025-12-10T13:31:02Z",
    level: "WARN",
    source: "auth.log",
    category: "Authentication",
    message: "Failed password for invalid user admin from 203.0.113.42 port 45210 ssh2",
    tags: ["Suspicious"]
  },
  {
    id: "s2",
    timestamp: "2025-12-10T13:31:08Z",
    level: "WARN",
    source: "auth.log",
    category: "Authentication",
    message: "Failed password for invalid user root from 203.0.113.42 port 45212 ssh2",
    tags: ["Suspicious", "Brute-force"]
  },
  {
    id: "s3",
    timestamp: "2025-12-10T13:31:23Z",
    level: "INFO",
    source: "nginx",
    category: "Web",
    message: '200 GET /index.html 192.0.2.10 "Mozilla/5.0"',
    tags: []
  },
  {
    id: "s4",
    timestamp: "2025-12-10T13:31:27Z",
    level: "ERROR",
    source: "nginx",
    category: "Web",
    message: '500 POST /api/login 198.51.100.77 "sqlmap/1.6.12" payload="\' OR 1=1--"',
    tags: ["Suspicious", "SQLi"]
  },
  {
    id: "s5",
    timestamp: "2025-12-10T13:31:40Z",
    level: "INFO",
    source: "windows-event",
    category: "Authentication",
    message: "Audit Success: User logon. Account Name: HANIN-LAPTOP\\\\yasmin, Logon Type: 2, Source Network Address: ::1",
    tags: ["Benign"]
  },
  {
    id: "s6",
    timestamp: "2025-12-10T13:32:05Z",
    level: "ALERT",
    source: "ids",
    category: "Network",
    message: "Multiple authentication failures for user 'service-account' from 203.0.113.42 detected within 60 seconds (threshold=5)",
    tags: ["Suspicious", "Investigate"]
  },
  {
    id: "s7",
    timestamp: "2025-12-10T13:33:20Z",
    level: "CRITICAL",
    source: "cloud-audit",
    category: "IAM",
    message: "IAM policy updated: user 'temp-admin' attached role 'AdministratorAccess' from unknown IP 198.51.100.99",
    tags: ["Suspicious", "Privilege escalation"]
  },
  {
    id: "s8",
    timestamp: "2025-12-10T13:35:00Z",
    level: "INFO",
    source: "vpn",
    category: "Remote Access",
    message: "VPN connection established: user=doctor.miller, ip=10.10.10.54, location=GBR",
    tags: []
  }
];
