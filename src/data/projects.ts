import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'python-file-integrity-checker',
    title: 'Python File Integrity Checker',
    summary: 'A defensive utility demonstrating how cryptographic file hashes (SHA-256) detect unauthorized or unexpected modifications in local files.',
    category: 'python',
    status: 'Learning Project',
    technologies: ['Python 3', 'hashlib', 'pathlib', 'JSON Logging'],
    safetyNotice: 'Defensive utility designed exclusively for local filesystem integrity verification. No system modifications or intrusive operations.',
    objectives: [
      'Understand cryptographic hash algorithms (SHA-256 and MD5 comparison).',
      'Generate baseline hash manifests for local directory snapshots.',
      'Alert when monitored files have been created, modified, or deleted without authorization.'
    ],
    learningOutcomes: [
      'Gained hands-on experience with Python standard library cryptographic modules.',
      'Understood how integrity checking fits into host-based intrusion detection principles.',
      'Learned structured JSON logging for forensic audit trails.'
    ],
    lessonsLearned: [
      'Hashing large files requires stream chunking (e.g., 64KB blocks) to prevent high memory consumption.',
      'Operating system file permission differences between Linux and Windows affect attribute tracking.'
    ]
  },
  {
    id: 'password-strength-education-tool',
    title: 'Password Strength Education Tool',
    summary: 'An educational client-side tool calculating password entropy, length considerations, and common dictionary vulnerabilities to teach defensive credential hygiene.',
    category: 'web-security',
    status: 'Learning Project',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Entropy Estimation'],
    safetyNotice: '100% Client-Side. Evaluates inputs strictly in local browser memory without collecting, transmitting, or logging entered strings.',
    objectives: [
      'Demonstrate the mathematical relationship between character set size, length, and entropy bits.',
      'Highlight common anti-patterns like predictable sequences, repeated letters, and simple leetspeak substitutions.',
      'Educate users on passphrase construction vs. short complex passwords.'
    ],
    learningOutcomes: [
      'Deepened understanding of authentication security guidelines (NIST SP 800-63B).',
      'Practiced implementing real-time regex parsing without computational lag.',
      'Created clear visual indicators that explain WHY a password might be vulnerable.'
    ],
    lessonsLearned: [
      'Length contributes far more effectively to combinatorial entropy than forcing arbitrary symbol rotations.',
      'User education succeeds when feedback is clear, constructive, and explains the underlying math.'
    ]
  },
  {
    id: 'network-security-learning-lab',
    title: 'Network Security Learning Lab',
    summary: 'A documented virtualized lab environment for understanding TCP/IP fundamentals, subnetting, defensive traffic analysis, and firewall packet filtering.',
    category: 'networking',
    status: 'Lab Experiment',
    technologies: ['Linux (Ubuntu/Debian)', 'Wireshark', 'iptables / UFW', 'VirtualBox'],
    safetyNotice: 'Conducted in an isolated private host-only virtual network. Designed for defensive monitoring and traffic study.',
    objectives: [
      'Configure isolated host-only subnets to simulate internal client and defensive server nodes.',
      'Capture and inspect DNS, ARP, and HTTP/HTTPS handshakes using packet sniffing tools.',
      'Write stateful packet inspection rules using Linux iptables and UFW to deny suspicious ingress traffic.'
    ],
    learningOutcomes: [
      'Mastered the 3-way TCP handshake (SYN, SYN-ACK, ACK) and connection termination sequences.',
      'Understood how unencrypted protocols expose sensitive payloads over local networks.',
      'Practiced writing least-privilege host firewall policies.'
    ],
    lessonsLearned: [
      'Proper virtual network segregation prevents unintended packet leakage to the host machine.',
      'Analyzing packet captures reinforces conceptual OSI model textbook theory with physical wire-level bytes.'
    ]
  },
  {
    id: 'secure-portfolio-website',
    title: 'Secure Portfolio Website',
    summary: 'A modern, responsive personal portfolio demonstrating secure frontend engineering, strict input validation, accessible controls, and resilient architecture.',
    category: 'web-security',
    status: 'In Progress',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    safetyNotice: 'Follows OWASP defensive guidelines: strict client-side validation, zero eval/unsafe innerHTML, sanitized mail routing, and honeypot spam mitigation.',
    objectives: [
      'Build a modern, accessible interface with semantic HTML and WCAG AA contrast compliance.',
      'Implement defensive contact form validation with honeypot fields to mitigate automated bots.',
      'Architect modular components with strict TypeScript types and clean state separation.'
    ],
    learningOutcomes: [
      'Mastered component-driven architecture and responsive design patterns.',
      'Understood Content Security Policy (CSP) headers and frontend sanitization principles.',
      'Designed an accessible light and dark mode with persistent user preferences.'
    ],
    lessonsLearned: [
      'Security-by-design applies equally to frontend interfaces through strict input schemas and zero unvetted dependencies.',
      'Clean accessibility directly enhances usability for every visitor.'
    ]
  },
  {
    id: 'cybersecurity-awareness-guide',
    title: 'Cybersecurity Awareness Guide',
    summary: 'A structured educational reference breaking down common cyber threats: phishing techniques, credential stuffing, public Wi-Fi risks, and multi-factor authentication hygiene.',
    category: 'tools',
    status: 'Project Concept',
    technologies: ['Markdown', 'Interactive Quizzes', 'HTML/CSS', 'Security Education'],
    safetyNotice: 'Purely educational resource highlighting safe digital habits and defensive awareness for students and non-technical peers.',
    objectives: [
      'Translate technical security concepts into actionable everyday defense practices.',
      'Provide realistic side-by-side examples of deceptive email headers and phishing red flags.',
      'Guide peers on setting up authenticator applications over insecure SMS 2FA.'
    ],
    learningOutcomes: [
      'Strengthened technical communication and security awareness skills.',
      'Mapped human-factor risks to corresponding technical defensive controls.',
      'Created engaging interactive quiz components to reinforce learning.'
    ],
    lessonsLearned: [
      'Social engineering remains the primary initial access vector; human training is as vital as perimeter firewalls.',
      'Clear, empathetic guidance works better than fear-based warnings.'
    ]
  },
  {
    id: 'python-network-port-scanner',
    title: 'Authorized Local Port Auditing Utility',
    summary: 'A safe, educational Python utility that connects to specified local loopback sockets (127.0.0.1) to verify listening ports and examine banner strings.',
    category: 'python',
    status: 'Learning Project',
    technologies: ['Python 3', 'socket', 'argparse', 'Multi-threading'],
    safetyNotice: 'Strictly restricted to localhost (127.0.0.1) and user-specified owned test virtual machines. For educational comprehension of socket programming.',
    objectives: [
      'Understand low-level socket connections and TCP port states (open, closed, filtered).',
      'Implement socket timeout handling and error recovery in Python.',
      'Practice defensive network hygiene by identifying unnecessary running daemon services.'
    ],
    learningOutcomes: [
      'Gained deep familiarity with the Python `socket` module and network socket lifecycles.',
      'Understood how services broadcast banner information upon connection.',
      'Learned concurrent execution using Python threading queues for controlled batching.'
    ],
    lessonsLearned: [
      'Proper socket closing is essential to avoid resource leaks in the operating system.',
      'Defensive auditing should always be preceded by explicit permission and bounded scope.'
    ]
  }
];
