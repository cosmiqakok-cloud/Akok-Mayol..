import { SkillCategory, LearningGoal } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    category: 'Cybersecurity Fundamentals',
    description: 'Foundational concepts and principles underpinning defensive security architecture and threat awareness.',
    icon: 'Shield',
    skills: [
      {
        name: 'Security Principles (CIA Triad)',
        description: 'Applying Confidentiality, Integrity, and Availability concepts to system evaluation and data protection.',
        status: 'Foundational Knowledge'
      },
      {
        name: 'Threat Awareness & Attack Vectors',
        description: 'Recognizing common attack surfaces including malware types, social engineering, MITM, and credential abuse.',
        status: 'Currently Learning'
      },
      {
        name: 'Authentication Fundamentals',
        description: 'Understanding password hashing, salted hashes, multi-factor authentication (MFA), and session management.',
        status: 'Foundational Knowledge'
      },
      {
        name: 'Security Awareness & Hygiene',
        description: 'Educating users on phishing prevention, endpoint updates, safe browsing, and device encryption.',
        status: 'Practicing'
      },
      {
        name: 'Defensive Security Concepts',
        description: 'Principles of defense-in-depth, least privilege, zero trust basics, and security monitoring.',
        status: 'Currently Learning'
      }
    ]
  },
  {
    category: 'Programming & Scripting',
    description: 'Writing scripts to automate tasks, parse system records, and analyze security datasets.',
    icon: 'Code',
    skills: [
      {
        name: 'Python Fundamentals',
        description: 'Core syntax, variables, data types, type conversions, and standard input/output handling.',
        status: 'Practicing'
      },
      {
        name: 'Data Structures (Lists, Dicts, Sets)',
        description: 'Working with arrays, key-value mappings, and unique sets for filtering logs and managing records.',
        status: 'Practicing'
      },
      {
        name: 'Control Flow (Conditions & Loops)',
        description: 'Writing conditional branches, while/for loops, and list comprehensions to automate repetitive checks.',
        status: 'Practicing'
      },
      {
        name: 'Modular Functions & Modules',
        description: 'Structuring clean, reusable functions, exception handling with try/except, and standard library modules.',
        status: 'Practicing'
      },
      {
        name: 'File Operations & Cryptography',
        description: 'Reading/writing files safely, handling JSON formats, and utilizing the hashlib library for hash calculation.',
        status: 'Currently Learning'
      }
    ]
  },
  {
    category: 'Networking & Systems',
    description: 'Understanding computer network architecture, protocol layers, and operating system management.',
    icon: 'Network',
    skills: [
      {
        name: 'Networking Fundamentals & OSI Model',
        description: 'Understanding the 7 layers of OSI and 4 layers of TCP/IP, packet headers, and encapsulation.',
        status: 'Foundational Knowledge'
      },
      {
        name: 'IP Addressing & Subnetting',
        description: 'IPv4 classification, CIDR notation, private vs. public address spaces, and local default gateways.',
        status: 'Foundational Knowledge'
      },
      {
        name: 'Operating System Fundamentals',
        description: 'Process management, memory allocation, filesystem hierarchies, and privilege levels in modern OSes.',
        status: 'Foundational Knowledge'
      },
      {
        name: 'Linux Command-Line Basics',
        description: 'Navigation, permission management (chmod, chown), process inspection (ps, top), and package management.',
        status: 'Practicing'
      },
      {
        name: 'Basic Network Diagnostics',
        description: 'Using standard utilities such as ping, traceroute, netstat, ss, and nslookup to diagnose connectivity.',
        status: 'Practicing'
      }
    ]
  },
  {
    category: 'Web Development & Security',
    description: 'Building accessible web interfaces and understanding client-side attack surfaces and mitigations.',
    icon: 'Globe',
    skills: [
      {
        name: 'Semantic HTML5 & Accessibility',
        description: 'Writing structured markup with appropriate ARIA roles, semantic landmarks, and WCAG compliance.',
        status: 'Practicing'
      },
      {
        name: 'Modern CSS & Responsive Design',
        description: 'Flexbox, CSS Grid, media queries, mobile-first design, and utility styling with Tailwind CSS.',
        status: 'Practicing'
      },
      {
        name: 'JavaScript Fundamentals',
        description: 'DOM manipulation, asynchronous fetch APIs, event listeners, and client-side form validation.',
        status: 'Practicing'
      },
      {
        name: 'Web Security Principles',
        description: 'Understanding OWASP Top 10 basics: Cross-Site Scripting (XSS), SQLi prevention, and HTTPS encryption.',
        status: 'Currently Learning'
      }
    ]
  },
  {
    category: 'Professional Skills',
    description: 'Essential analytical and collaborative competencies for effective teamwork and academic growth.',
    icon: 'Users',
    skills: [
      {
        name: 'Analytical Problem Solving',
        description: 'Breaking down complex technical issues into methodical steps and root cause hypotheses.',
        status: 'Familiar'
      },
      {
        name: 'Technical Communication & Documentation',
        description: 'Writing concise lab notes, technical project summaries, and explaining security terms clearly.',
        status: 'Practicing'
      },
      {
        name: 'Teamwork & Collaborative Learning',
        description: 'Participating in university study groups, pair programming, and peer review sessions.',
        status: 'Familiar'
      },
      {
        name: 'Microsoft Office & Productivity Tools',
        description: 'Drafting reports in Microsoft Word, structuring data in Excel, and preparing academic slide decks in PowerPoint.',
        status: 'Familiar'
      }
    ]
  }
];

export const initialLearningGoals: LearningGoal[] = [
  {
    id: 'goal-1',
    title: 'Complete CompTIA Security+ Syllabus Modules',
    category: 'Cybersecurity',
    targetDescription: 'Review core domains: general security concepts, threats, vulnerabilities, and security architecture.',
    completed: true
  },
  {
    id: 'goal-2',
    title: 'Build Python Port Scanner & Banner Grabber',
    category: 'Programming',
    targetDescription: 'Write a clean multi-threaded Python utility for authorized local loopback port auditing.',
    completed: true
  },
  {
    id: 'goal-3',
    title: 'Deepen Linux Administration Skills',
    category: 'Systems',
    targetDescription: 'Master shell scripting, cron jobs, log file inspection with grep/awk, and systemd service management.',
    completed: false
  },
  {
    id: 'goal-4',
    title: 'Configure Virtualized Active Directory Lab',
    category: 'Networking',
    targetDescription: 'Set up an isolated domain controller and client workstation to study group policies and Kerberos tickets.',
    completed: false
  },
  {
    id: 'goal-5',
    title: 'Study Digital Forensics Fundamentals',
    category: 'Forensics',
    targetDescription: 'Learn memory dump acquisition techniques, chain of custody rules, and timeline analysis tools.',
    completed: false
  },
  {
    id: 'goal-6',
    title: 'Contribute to Local Tech Community Workshops',
    category: 'Community',
    targetDescription: 'Share basic cybersecurity hygiene advice with fellow University of Juba students.',
    completed: false
  }
];
