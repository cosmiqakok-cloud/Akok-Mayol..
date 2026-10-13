/**
 * AKOK MAYOL - CYBERSECURITY STUDENT PORTFOLIO
 * Standalone Client Script (Vanilla JS - Zero Build Step)
 */

// Data: Projects
const projectsData = [
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
    technologies: ['Vanilla JS', 'Semantic HTML5', 'CSS3', 'GitHub Pages'],
    safetyNotice: 'Follows OWASP defensive guidelines: strict client-side validation, zero eval/unsafe innerHTML, sanitized mail routing, and honeypot spam mitigation.',
    objectives: [
      'Build a modern, accessible interface with semantic HTML and WCAG AA contrast compliance.',
      'Implement defensive contact form validation with honeypot fields to mitigate automated bots.',
      'Architect modular components with zero heavy build dependencies.'
    ],
    learningOutcomes: [
      'Mastered lightweight vanilla architecture and responsive design patterns.',
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
      'Created engaging educational reference modules to reinforce learning.'
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

// Initial Learning Goals
const initialGoals = [
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

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouting();
  initNavbar();
  initFeaturedProjects();
  initProjectsView();
  initGoals();
  initContactForm();
  initHeroVisualNodes();
  initFooter();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const saved = localStorage.getItem('akok_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('akok_portfolio_theme', isDark ? 'dark' : 'light');
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const sunIcon = document.getElementById('theme-sun-icon');
  const moonIcon = document.getElementById('theme-moon-icon');
  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

/* --------------------------------------------------------------------------
   ROUTING (Hash-Based for Zero Build Step & GitHub Pages)
   -------------------------------------------------------------------------- */
const validRoutes = ['home', 'about', 'projects', 'skills', 'contact'];

function initRouting() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  let hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (!hash || hash === '') hash = 'home';

  const pages = document.querySelectorAll('.page-view');
  pages.forEach(p => p.classList.remove('active'));

  if (validRoutes.includes(hash)) {
    const targetPage = document.getElementById(`page-${hash}`);
    if (targetPage) targetPage.classList.add('active');
  } else {
    const page404 = document.getElementById('page-404');
    if (page404) page404.classList.add('active');
  }

  // Update active navigation links
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const linkRoute = link.getAttribute('data-route');
    if (linkRoute === hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile drawer if open
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) drawer.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* --------------------------------------------------------------------------
   NAVBAR & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('menu-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }
}

/* --------------------------------------------------------------------------
   HERO INTERACTIVE NODES
   -------------------------------------------------------------------------- */
function initHeroVisualNodes() {
  const nodes = document.querySelectorAll('.orbit-node');
  nodes.forEach(node => {
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = node.classList.contains('active');
      nodes.forEach(n => n.classList.remove('active'));
      if (!isActive) node.classList.add('active');
    });
  });

  document.addEventListener('click', () => {
    nodes.forEach(n => n.classList.remove('active'));
  });
}

/* --------------------------------------------------------------------------
   PROJECT RENDERING & MODAL
   -------------------------------------------------------------------------- */
function createProjectCardHTML(project) {
  const tagsHTML = project.technologies.slice(0, 3)
    .map((tech, i, arr) => `<span>${tech}</span>${i < arr.length - 1 ? '<span class="project-tag-sep">·</span>' : ''}`)
    .join('');

  return `
    <article class="project-card">
      <div>
        <div class="project-card-header">
          <span class="project-meta-kicker">${escapeHTML(project.category.replace('-', ' '))}</span>
          <span class="project-status">${escapeHTML(project.status)}</span>
        </div>
        <h3 class="project-title">${escapeHTML(project.title)}</h3>
        <p class="project-summary">${escapeHTML(project.summary)}</p>
        <div class="project-tags">
          ${tagsHTML}
          ${project.technologies.length > 3 ? `<span class="project-tag-sep">·</span><span>+${project.technologies.length - 3}</span>` : ''}
        </div>
      </div>
      <div class="project-card-footer">
        <span class="text-xs" style="color: var(--secondary-text)">Learning Case Study</span>
        <button type="button" class="project-view-btn" data-project-id="${escapeHTML(project.id)}">
          <span>View Details</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </button>
      </div>
    </article>
  `;
}

function initFeaturedProjects() {
  const container = document.getElementById('home-featured-projects-grid');
  if (!container) return;
  const featured = projectsData.slice(0, 3);
  container.innerHTML = featured.map(createProjectCardHTML).join('');
  attachProjectModalTriggers(container);
}

function initProjectsView() {
  const container = document.getElementById('all-projects-grid');
  const searchInput = document.getElementById('project-search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const emptyState = document.getElementById('projects-empty-state');

  let currentCategory = 'all';
  let searchQuery = '';

  function render() {
    if (!container) return;
    const filtered = projectsData.filter(p => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      container.innerHTML = filtered.map(createProjectCardHTML).join('');
      attachProjectModalTriggers(container);
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  render();
}

function attachProjectModalTriggers(container) {
  const buttons = container.querySelectorAll('.project-view-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === id);
      if (project) openProjectModal(project);
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  document.getElementById('modal-cat-status').innerText = `${project.category.replace('-', ' ')} · ${project.status}`;
  document.getElementById('modal-title').innerText = project.title;
  document.getElementById('modal-summary').innerText = project.summary;
  document.getElementById('modal-safety').innerText = project.safetyNotice;

  // Tech tags
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = project.technologies.map(t =>
    `<span style="padding: 0.2rem 0.5rem; border-radius: 0.35rem; background: var(--tag-bg); border: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.75rem;">${escapeHTML(t)}</span>`
  ).join('');

  // Objectives
  const objContainer = document.getElementById('modal-objectives');
  objContainer.innerHTML = project.objectives.map(o =>
    `<li style="margin-bottom: 0.35rem; font-size: 0.85rem; color: var(--secondary-text);">${escapeHTML(o)}</li>`
  ).join('');

  // Outcomes
  const outContainer = document.getElementById('modal-outcomes');
  outContainer.innerHTML = project.learningOutcomes.map(o =>
    `<li style="margin-bottom: 0.35rem; font-size: 0.85rem; color: var(--secondary-text);">${escapeHTML(o)}</li>`
  ).join('');

  // Lessons
  const lesContainer = document.getElementById('modal-lessons');
  lesContainer.innerHTML = project.lessonsLearned.map(l =>
    `<li style="margin-bottom: 0.35rem; font-size: 0.85rem; color: var(--secondary-text);">${escapeHTML(l)}</li>`
  ).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Attach close listeners
  const closeBtn = document.getElementById('modal-close-btn');
  const footerCloseBtn = document.getElementById('modal-footer-close');

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtn.onclick = closeModal;
  footerCloseBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', handleEsc);
    }
  };
  window.addEventListener('keydown', handleEsc);
}

/* --------------------------------------------------------------------------
   INTERACTIVE LEARNING GOALS
   -------------------------------------------------------------------------- */
function initGoals() {
  const container = document.getElementById('goals-list-container');
  const countSpan = document.getElementById('goals-metric-text');
  const fillBar = document.getElementById('goals-progress-fill');
  const addForm = document.getElementById('add-goal-form');
  const toggleAddBtn = document.getElementById('toggle-add-goal-btn');
  const cancelAddBtn = document.getElementById('cancel-add-goal-btn');

  let goals = initialGoals;
  const saved = localStorage.getItem('akok_learning_goals');
  if (saved) {
    try { goals = JSON.parse(saved); } catch (e) { goals = initialGoals; }
  }

  function saveAndRender() {
    localStorage.setItem('akok_learning_goals', JSON.stringify(goals));
    render();
  }

  function render() {
    if (!container) return;
    const completed = goals.filter(g => g.completed).length;
    const total = goals.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    if (countSpan) countSpan.innerText = `${completed} / ${total} (${pct}%)`;
    if (fillBar) fillBar.style.width = `${pct}%`;

    container.innerHTML = goals.map(g => `
      <div class="goal-item ${g.completed ? 'completed' : ''}">
        <div class="goal-left">
          <input type="checkbox" class="goal-checkbox" data-goal-id="${escapeHTML(g.id)}" ${g.completed ? 'checked' : ''}>
          <div>
            <div style="display: flex; align-items: center;">
              <span class="goal-title">${escapeHTML(g.title)}</span>
              <span class="goal-tag">${escapeHTML(g.category)}</span>
            </div>
            <p style="font-size: 0.75rem; color: var(--secondary-text); margin-top: 0.2rem;">${escapeHTML(g.targetDescription)}</p>
          </div>
        </div>
        <button type="button" class="delete-goal-btn" data-goal-id="${escapeHTML(g.id)}" title="Delete goal" style="color: #94a3b8; font-size: 0.8rem; padding: 0.25rem;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
        </button>
      </div>
    `).join('');

    // Attach listeners
    container.querySelectorAll('.goal-checkbox').forEach(chk => {
      chk.addEventListener('change', () => {
        const id = chk.getAttribute('data-goal-id');
        const goal = goals.find(g => g.id === id);
        if (goal) {
          goal.completed = chk.checked;
          saveAndRender();
        }
      });
    });

    container.querySelectorAll('.delete-goal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-goal-id');
        goals = goals.filter(g => g.id !== id);
        saveAndRender();
      });
    });
  }

  if (toggleAddBtn && addForm) {
    toggleAddBtn.addEventListener('click', () => {
      addForm.style.display = 'block';
      toggleAddBtn.style.display = 'none';
    });
  }

  if (cancelAddBtn && addForm && toggleAddBtn) {
    cancelAddBtn.addEventListener('click', () => {
      addForm.style.display = 'none';
      toggleAddBtn.style.display = 'inline-flex';
    });
  }

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('new-goal-title')?.value.trim();
      const cat = document.getElementById('new-goal-cat')?.value || 'Cybersecurity';
      const desc = document.getElementById('new-goal-desc')?.value.trim() || 'Custom academic milestone target.';

      if (title) {
        goals.push({
          id: `goal-${Date.now()}`,
          title,
          category: cat,
          targetDescription: desc,
          completed: false
        });
        saveAndRender();
        addForm.reset();
        addForm.style.display = 'none';
        if (toggleAddBtn) toggleAddBtn.style.display = 'inline-flex';
      }
    });
  }

  render();
}

/* --------------------------------------------------------------------------
   CONTACT FORM VALIDATION & MAILTO FALLBACK
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fallbackBox = document.getElementById('contact-fallback-box');
  const fallbackLink = document.getElementById('contact-fallback-link');
  const submitBtn = document.getElementById('contact-submit-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear prior errors
    document.querySelectorAll('.form-error').forEach(el => el.innerText = '');

    const fullName = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();
    const consent = document.getElementById('contact-consent')?.checked;
    const honeypot = document.getElementById('contact-hp')?.value.trim();

    // Bot detection
    if (honeypot) return;

    let valid = true;
    if (!fullName) {
      document.getElementById('error-name').innerText = 'Full name is required.';
      valid = false;
    }
    if (!email) {
      document.getElementById('error-email').innerText = 'Email address is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('error-email').innerText = 'Please provide a valid email format.';
      valid = false;
    }
    if (!subject) {
      document.getElementById('error-subject').innerText = 'Subject is required.';
      valid = false;
    }
    if (!message) {
      document.getElementById('error-message').innerText = 'Message text is required.';
      valid = false;
    } else if (message.length < 15) {
      document.getElementById('error-message').innerText = 'Please provide at least 15 characters.';
      valid = false;
    }
    if (!consent) {
      document.getElementById('error-consent').innerText = 'Consent checkbox is required.';
      valid = false;
    }

    if (!valid) return;

    // Loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Validating & Dispatching...</span>';
    }

    // Prepare mailto fallback link directly for standalone static hosting
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
    const mailtoBody = encodeURIComponent(`From: ${fullName} (${email})\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:cosmiqakok@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      if (fallbackBox && fallbackLink) {
        fallbackLink.href = mailtoUrl;
        fallbackBox.style.display = 'block';
        fallbackBox.scrollIntoView({ behavior: 'smooth' });
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          <span>Send Message</span>
        `;
      }
    }, 400);
  });
}

/* --------------------------------------------------------------------------
   FOOTER
   -------------------------------------------------------------------------- */
function initFooter() {
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) yearSpan.innerText = new Date().getFullYear();

  const topBtn = document.getElementById('back-to-top-btn');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Security Helper: escapeHTML
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
