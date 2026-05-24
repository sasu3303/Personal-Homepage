/**
 * terminal.js — Interactive Terminal Component
 * A custom command-line interface that lets visitors explore
 * Sanjay's profile by typing commands.
 */

const COMMANDS = {
  help: {
    description: "List all available commands",
    execute() {
      const lines = [
        "Available commands:",
        "",
        "  about       — Who is Sanjay?",
        "  skills      — Technical skill set",
        "  experience  — Work history overview",
        "  projects    — Notable projects",
        "  education   — Academic background",
        "  contact     — How to reach me",
        "  certs       — Certifications",
        "  fun         — A random fun fact",
        "  clear       — Clear the terminal",
        "  help        — Show this help menu",
        "",
        'Type a command and press Enter. Try "about" to start!',
      ];
      return lines.map((line) => ({ text: line, type: "response" }));
    },
  },

  about: {
    description: "About Sanjay",
    execute() {
      return [
        {
          text: "Hi, I'm Sanjay Sundar BV!",
          type: "success",
        },
        {
          text: "A Computer Science graduate student at Northeastern University,",
          type: "response",
        },
        {
          text: "passionate about full-stack development, AI/ML, and building",
          type: "response",
        },
        {
          text: "scalable enterprise solutions. Based in Boston, MA.",
          type: "response",
        },
        {
          text: "",
          type: "response",
        },
        {
          text: "Currently pursuing my Master's degree and open for Co-op starting Jan 2027.",
          type: "accent",
        },
      ];
    },
  },

  skills: {
    description: "Technical skills",
    execute() {
      return [
        { text: "Languages:   Java, Python, SQL", type: "success" },
        {
          text: "Databases:   MySQL, PostgreSQL, MongoDB, SOQL",
          type: "success",
        },
        {
          text: "Frameworks:  Spring Boot, React.js, Node.js",
          type: "success",
        },
        {
          text: "Platforms:   Salesforce Lightning, Unity ML-Agents",
          type: "success",
        },
        {
          text: "Tools:       Git, IntelliJ IDEA, VS Code, TensorFlow, PyTorch",
          type: "success",
        },
      ];
    },
  },

  experience: {
    description: "Work experience",
    execute() {
      return [
        {
          text: "Software Developer — TVS Credit Services (Jun 2024 – Nov 2025)",
          type: "accent",
        },
        {
          text: "  Spearheaded Cross-Sell Personal Loan Portfolio in Salesforce.",
          type: "response",
        },
        {
          text: "  Directed training for call center agents and vendor coordination.",
          type: "response",
        },
        { text: "", type: "response" },
        {
          text: "Graduate Engineer Trainee — TVS Credit (Feb 2024 – May 2024)",
          type: "accent",
        },
        {
          text: "  Engineered backend logic for Loan Origination Services.",
          type: "response",
        },
        { text: "", type: "response" },
        {
          text: "Cybersecurity Intern — Infotech Consultancy (May 2023 – Jul 2023)",
          type: "accent",
        },
        {
          text: "  Executed penetration testing using Nmap, OWASP ZAP, Burp Suite.",
          type: "response",
        },
      ];
    },
  },

  projects: {
    description: "Notable projects",
    execute() {
      return [
        { text: "1. Nexus Gaming Hub", type: "success" },
        { text: "   Full-stack gaming platform — React, Node.js, MySQL, RBAC.", type: "response" },
        { text: "", type: "response" },
        { text: "2. Conditional GANs for Image Translation", type: "success" },
        { text: "   ML research — U-Net + PatchGAN, 95% accuracy, 5 datasets.", type: "response" },
        { text: "", type: "response" },
        { text: "3. Respiratio — Disease Prediction App", type: "success" },
        { text: "   ML app predicting diseases from symptoms with frontend UI.", type: "response" },
        { text: "", type: "response" },
        { text: "4. Autonomous Parking Simulation", type: "success" },
        { text: "   3D RL agent using PPO in Unity ML-Agents + Blender.", type: "response" },
        { text: "", type: "response" },
        { text: "5. Home-Service-Management", type: "success" },
        { text: "   Full-stack service booking app — like Swiggy for household workers.", type: "response" },
        { text: "", type: "response" },
        { text: "6. Airbnb SF Listings", type: "success" },
        { text: "   JS + DOM page fetching 50 SF listings with live search and filters.", type: "response" },
        { text: "", type: "response" },
        { text: "7. Inventory Management System", type: "success" },
        { text: "   Java desktop app with MySQL — products, orders, customers.", type: "response" },
        { text: "", type: "response" },
        { text: "8. Voting System", type: "success" },
        { text: "   Java desktop app — election creation, voter registration, results.", type: "response" },
        { text: "", type: "response" },
        { text: "  -> See all projects: sasu3303.github.io/Personal-Homepage/projects.html", type: "accent" },
      ];
    },
  },

  education: {
    description: "Education",
    execute() {
      return [
        { text: "Northeastern University, Boston, MA", type: "success" },
        {
          text: "  M.S. Computer Science — Expected May 2028",
          type: "response",
        },
        { text: "", type: "response" },
        {
          text: "PSG College of Technology, Coimbatore, India",
          type: "success",
        },
        {
          text: "  B.E. Computer Science Engineering — GPA: 7.36/10.0 — May 2024",
          type: "response",
        },
      ];
    },
  },

  contact: {
    description: "Contact information",
    execute() {
      return [
        {
          text: "Email:    sanjaysundar.bv@gmail.com",
          type: "success",
        },
        {
          text: "LinkedIn: linkedin.com/in/sanjaysundarbv/",
          type: "success",
        },
        { text: "GitHub:   github.com/sasu3303", type: "success" },
        { text: "Location: Boston, MA", type: "response" },
      ];
    },
  },

  certs: {
    description: "Certifications",
    execute() {
      return [
        {
          text: "Salesforce Certified Agentforce Specialist (Nov 2025)",
          type: "success",
        },
        {
          text: "Salesforce Certified AI Associate (Oct 2024)",
          type: "success",
        },
      ];
    },
  },

  fun: {
    description: "Random fun fact",
    execute() {
      const facts = [
        "I once trained an AI to park cars better than I can!",
        "My first line of code was in C — and I still have nightmares about pointers.",
        "I've debugged Salesforce workflows at 3 AM. Coffee is my co-pilot.",
        "I built a GAN that translates Google Maps to street views. Maps will never look the same.",
        "Fun fact: I moved from Chennai to Boston — the weather was a bit of a shock.",
        "I believe every good project starts with a great schema design.",
        "My terminal is my happy place. Clearly, you feel the same way!",
      ];
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      return [{ text: randomFact, type: "warning" }];
    },
  },

  clear: {
    description: "Clear terminal",
    execute() {
      return null; // Special case handled in initTerminal
    },
  },
};

/**
 * Initialize the interactive terminal component.
 * Sets up input handling, command processing, and output rendering.
 */
export function initTerminal() {
  const terminalBody = document.querySelector(".terminal-body");
  const terminalInput = document.querySelector(".terminal-input");

  if (!terminalBody || !terminalInput) return;

  // Render welcome message on load
  const welcomeLines = [
    { text: "Welcome to Sanjay's Interactive Terminal!", type: "success" },
    {
      text: 'Type "help" to see available commands.',
      type: "response",
    },
    { text: "", type: "response" },
  ];
  renderOutput(terminalBody, welcomeLines);

  // Focus input when clicking terminal body
  terminalBody.addEventListener("click", () => {
    terminalInput.focus();
  });

  // Handle command entry
  terminalInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const command = terminalInput.value.trim().toLowerCase();
    terminalInput.value = "";

    if (!command) return;

    // Echo the command
    renderOutput(terminalBody, [
      { text: `visitor@sanjay:~$ ${command}`, type: "command" },
    ]);

    if (command === "clear") {
      // Remove all output lines except the input row
      const outputLines = terminalBody.querySelectorAll(".terminal-output-line");
      outputLines.forEach((line) => line.remove());
      return;
    }

    if (COMMANDS[command]) {
      const result = COMMANDS[command].execute();
      if (result) {
        renderOutput(terminalBody, result);
      }
    } else {
      renderOutput(terminalBody, [
        {
          text: `Command not found: ${command}. Type "help" for available commands.`,
          type: "warning",
        },
      ]);
    }

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  });
}

/**
 * Render an array of output lines to the terminal body element.
 * @param {HTMLElement} container - The terminal body element
 * @param {Array<{text: string, type: string}>} lines - Lines to render
 */
function renderOutput(container, lines) {
  const inputRow = container.querySelector(".terminal-input-row");

  lines.forEach((line) => {
    const div = document.createElement("div");
    div.classList.add("terminal-output-line");
    div.classList.add(`terminal-output-line-${line.type}`);
    div.textContent = line.text;
    container.insertBefore(div, inputRow);
  });
}
