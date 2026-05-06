import { useState, useMemo, useCallback } from "react";

const DATA = {
  Aptitude: {
    Arithmetic: {
      "Problems on Trains": {}, "Time and Distance": {}, "Height and Distance": {},
      "Time and Work": {}, "Simple Interest": {}, "Compound Interest": {},
      "Profit and Loss": {}, "Partnership": {}, "Percentage": {}, "Problems on Ages": {},
      "Calendar": {}, "Clock": {}, "Average": {}, "Area": {}, "Volume and Surface Area": {},
      "Permutation and Combination": {}, "Numbers": {}, "Problems on Numbers": {},
      "HCF and LCM": {}, "Decimal Fraction": {}, "Simplification": {},
      "Square Root and Cube Root": {}, "Surds and Indices": {}, "Ratio and Proportion": {},
      "Chain Rule": {}, "Pipes and Cistern": {}, "Boats and Streams": {},
      "Alligation or Mixture": {}, "Logarithm": {}, "Races and Games": {},
      "Stocks and Shares": {}, "Probability": {}, "True Discount": {}, "Banker's Discount": {},
    },
    "Data Interpretation": {
      "Table Charts": {}, "Bar Charts": {}, "Pie Charts": {}, "Line Charts": {},
      "Caselet DI": {}, "Mixed DI Sets": {}, "Radar / Spider Charts": {},
      "Venn Diagram Based DI": {}, "Missing Data / Missing Table": {}, "Data Sufficiency DI": {},
      "Arithmetic DI (Word Problem based)": {}, "Percentage Based DI": {},
      "Ratio & Proportion Based DI": {}, "Profit & Loss Based DI": {},
      "Time & Work / Pipe & Cistern Based DI": {}, "Investment / Growth Based DI": {},
      "Multiple Table DI": {}, "Combination of Charts (Table + Graph, Pie + Bar, etc.)": {},
      "Line + Bar Mixed Graph": {}, "Cumulative Bar / Stacked Bar Charts": {},
      "Box Plot": {}, "Histogram": {}, "Scatter Plot": {}, "Data Comparison": {},
      "Case Study Based DI": {}, "Puzzle Based DI": {},
    },
    "Verbal Ability": {
      "Spotting Errors": {}, "Synonyms": {}, "Antonyms": {}, "Selecting Words": {},
      "Spellings": {}, "Sentence Formation": {}, "Ordering of Words": {},
      "Sentence Correction": {}, "Sentence Improvement": {}, "Completing Statements": {},
      "Ordering of Sentences": {}, "Paragraph Formation": {}, "Cloze Test": {},
      "Reading Comprehension": {}, "One Word Substitution": {}, "Idioms and Phrases": {},
      "Voice Change": {}, "Speech Change": {}, "Verbal Analogies": {},
    },
    "Logical Reasoning": {
      General: {
        "Number Series": {}, "Letter Series": {}, "Analogies": {}, "Classification": {},
        "Coding-Decoding": {}, "Logical Games": {}, "Statement and Assumption": {},
        "Statement and Conclusion": {}, "Cause and Effect": {}, "Theme Detection": {},
        "Logical Deduction": {}, "Input-Output": {}, "Inequalities": {},
        "Alpha-Numeric Series": {}, "Ranking and Order": {}, "Mathematical Operations": {},
        "Puzzle Test": {}, "Critical Reasoning": {}, "Decision Making": {},
        "Assertion and Reason": {}, "Course of Action": {}, "Arguments": {},
        "Sequential Output Tracing": {}, "Verification of Truth Statements": {}, "Odd Man Out": {},
      },
      "Verbal Reasoning": {
        "Blood Relations": {}, "Syllogism": {}, "Seating Arrangement": {},
        "Direction Sense": {}, "Venn Diagrams": {}, "Data Sufficiency": {},
        "Arithmetic Reasoning": {}, "Statement and Argument": {},
        "Statement and Course of Action": {}, "Logical Venn Diagrams (Advanced)": {},
        "Eligibility Test": {}, "Analytical Reasoning": {}, "Evaluating Inferences": {},
        "Strong & Weak Arguments": {}, "Paragraph Based Questions": {},
        "Assumption-Based Questions": {},
      },
      "Non-Verbal Reasoning": {
        "Mirror Images": {}, "Water Images": {}, "Paper Folding": {}, "Paper Cutting": {},
        "Embedded Figures": {}, "Figure Matrix": {}, "Pattern Completion": {},
        "Cubes and Dice": {}, "Series Completion (Figure Series)": {},
        "Classification of Figures": {}, "Analogy (Figure Analogy)": {}, "Dot Situation": {},
        "Shape Construction": {}, "Grouping of Figures": {}, "Image Analysis": {}, "Rule Detection": {},
      },
    },
  },
  "IT Jobs": {
    "Programming Languages": {
      "C Programming": {}, "C++": {}, Java: {}, Python: {}, JavaScript: {},
      TypeScript: {}, "Go (Golang)": {}, Kotlin: {}, Swift: {}, Rust: {},
      "C#": {}, PHP: {}, Ruby: {}, Scala: {}, Dart: {}, "R Programming": {},
      MATLAB: {}, Perl: {}, "Shell Scripting (Bash)": {}, SQL: {}, Solidity: {}, Julia: {},
    },
    "Coding & DSA": {
      Arrays: {}, Strings: {}, "Linked List": {}, "Stacks and Queues": {},
      Trees: {}, Graphs: {}, "Dynamic Programming": {}, "Greedy Algorithms": {}, Backtracking: {},
    },
    "Web Development": {
      HTML: {}, CSS: {}, JavaScript: {}, React: {}, "Node.js": {},
      Angular: {}, Vue: {}, Django: {}, "Spring boot": {}, "Rest Api": {},
      Database: {}, SQL: {}, Joins: {}, Normalization: {}, Transactions: {}, Indexing: {},
    },
  },
  "Government Exams": {
    "Engineering / Technical": {
      "Major Exams": { GATE: {}, "Engineering Services Examination": {} },
      "Research & Technical Organizations": {
        "ISRO Scientist": {}, "DRDO Scientist": {}, "BARC OCES/DGFS": {},
        "Hindustan Aeronautics Limited": {}, "Bharat Electronics Limited": {},
      },
      "PSU Jobs": { ONGC: {}, BHEL: {}, IOCL: {}, GAIL: {}, PGCIL: {}, NTPC: {}, NHPC: {} },
    },
    "Civil Services / Administrative": {
      UPSC: {
        "Civil Services Examination": {}, "Indian Forest Service": {},
        "Engineering Services Examination (ESE/IES)": {}, "Combined Medical Services (CMS)": {},
        "CAPF (Assistant Commandant)": {}, "Combined Defence Services (CDS)": {}, "NDA / NA": {},
      },
      "State PSC": {
        APPSC: { "Group 1": {}, "Group 2": {}, "Group 3": {}, "Group 4": {} },
        TGPSC: { "Group 1": {}, "Group 2": {}, "Group 3": {}, "Group 4": {} },
        TSPSC: {}, TNPSC: {}, KPSC: {},
      },
    },
    SSC: {
      "SSC CGL": {}, "SSC CHSL": {}, "SSC JE": {}, "SSC CPO": {}, "SSC MTS": {},
      "SSC Stenographer Grade C & D": {}, "SSC MTS / Havaldar": {},
    },
    Banking: {
      IBPS: { PO: {}, Clerk: {}, RRB: {}, SO: {} },
      SBI: { PO: {}, Clerk: {} },
      NABARD: { "Grade A": {}, "Grade B": {} },
      "RBI Grade B": { General: {}, DEPR: {}, DSIM: {} },
    },
    "Finance / Regulatory": { "RBI Grade B": {}, "SEBI Grade A": {}, IRDAI: {}, SIDBI: {} },
    Defence: {
      CDS: {}, "NDA / NA": {}, AFCAT: {},
      "Indian Army": { "Technical Entry": {}, "Agniveer GD": {}, "Agniveer Technical": {}, "Agniveer Clerk": {}, "Agniveer Tradesman": {} },
      "Indian Navy": { "Sailor / Agniveer SSR": {}, "Agniveer AA": {}, "Agniveer MR": {} },
      "Indian Air Force": {},
      "Indian Coast Guard": { "Navik GD": {}, "Navik DB": {}, Yantrik: {}, "Assistant Commandant": {} },
    },
    Railways: {
      RRB: {
        NTPC: {}, "Group D": {}, ALP: {}, JE: {}, RPF: {},
        Paramedical: { "Staff Nurse": {}, Pharmacist: {}, "Lab Assistant": {}, ANM: {}, Physiotherapist: {}, Dietician: {}, Radiographer: {} },
        "IRTS / IRAS / IRPS / IRSS": {},
      },
    },
    Aviation: { "DGCA CPL": {}, ATPL: {}, "AAI ATC": {} },
    Insurance: {
      LIC: { AAO: {}, ADO: {}, Assistant: {} },
      NIACL: {}, OICL: {}, UIIC: {}, NICL: {}, "Oriental Insurance AO": {},
    },
    "IT / Computer Govt Jobs": { NIC: {}, CDAC: {}, NTRO: {} },
    "Teaching / Research": {
      "UGC NET": {}, "CSIR NET": {},
      "PhD Entrances": { IIT: {}, IISc: {} },
      "CTET / TET": { "Primary Teacher (Class I-V)": {}, "Upper Primary Teacher (Class VI-VIII)": {} },
      KVS: { PRT: {}, TGT: {}, PGT: {}, Librarian: {} },
      NVS: {},
      DSSSB: { TGT: {}, PGT: {}, PRT: {} },
      "TS DSC / TRT": { SGT: {}, SA: {}, PGT: {}, "Language Pandit": {} },
      "AP DSC / TET": { SGT: {}, SA: {}, PGT: {}, "Language Pandit": {} },
    },
    "Medical / Health": {
      "UPSC CMS": {},
      ESIC: { "Medical Officer": {}, "Staff Nurse": {} },
      "AIIMS / NORCET": { "Nursing Officer": {} },
      "TS Health Dept": { "Staff Nurse": {}, ANM: {}, "Lab Technician": {}, Pharmacist: {} },
      "AP Health Dept": { ANM: {}, "Staff Nurse": {}, "Lab Technician": {}, Pharmacist: {} },
    },
    "Power / Energy": { NTPC: {}, PGCIL: {}, NHPC: {}, "State Electricity Boards": {} },
    "Police / Paramilitary": {
      CRPF: {}, BSF: {}, CISF: {},
      TSLPRB: { "Sub-Inspector": {}, Constable: {} },
      "IB ACIO": {}, "UPSC CAPF AC": {},
    },
    Postal: { "Postal Assistant / Sorting Assistant": {}, "Gramin Dak Sevak (GDS)": {} },
    Judiciary: { "AP Judicial Services": {}, "TS Judicial Services": {} },
    "Other Govt Exams": { FCI: {}, AAI: {}, DDA: {}, EPFO: {} },
  },
  Branches: {
    CSE: {
      "Operating Systems": {}, DBMS: {}, "Computer Networks": {}, OOPs: {},
      "Computer Architecture / Computer Organization": {}, "Microprocessors and Microcontrollers": {},
      "Compiler Design": {}, "Theory of Computation (TOC / Automata Theory)": {},
      "Software Engineering": {}, "System Design (Low Level + High Level)": {},
      "Design Patterns": {}, "Linux / Unix Operating System": {},
      "Cloud Computing (AWS, Azure basics)": {}, "Cyber Security / Information Security": {},
      "Artificial Intelligence (Basics)": {}, "Machine Learning (Fundamentals)": {},
      "Big Data & Hadoop": {}, "Distributed Systems": {}, "Computer Graphics": {},
      "Formal Language and Automata": {}, "Web Technologies (Servlets, JSP, etc.)": {}, "Middleware Technologies": {},
    },
    ECE: {
      "Digital Electronics": {}, "Analog Electronics": {}, "Signals and Systems": {},
      "Communication Systems": {}, VLSI: {}, "Electromagnetic Theory (EMT)": {},
      "Control Systems": {}, "Microprocessors and Microcontrollers": {},
      "Digital Signal Processing (DSP)": {}, "Embedded Systems": {}, "VLSI Design (Advanced)": {},
      "Analog and Digital Communication (Advanced)": {}, "Wireless Communication": {},
      "Antenna and Wave Propagation": {}, "Optical Communication": {}, "Microwave Engineering": {},
      "Radar and Satellite Communication": {}, "IoT (Internet of Things)": {}, "Robotics (Basics)": {},
      "Power Electronics": {}, "Electronic Devices and Circuits": {}, "Network Theory / Circuit Theory": {},
      "Verilog / VHDL": {}, "FPGA Design": {}, "PCB Design": {},
    },
    EEE: {
      "Electrical Circuits": {}, "Power Systems": {}, "Control Systems": {}, "Electrical Machines": {},
      "Power Electronics": {}, "Electrical Drives": {}, "Renewable Energy Systems (Solar, Wind)": {},
      "High Voltage Engineering": {}, "Switchgear and Protection": {}, "Power System Analysis": {},
      "Digital Electronics (for EEE)": {}, "Analog Electronics": {}, "Signals and Systems": {},
      "Electromagnetic Fields (EMF)": {}, "Electrical Measurements and Instrumentation": {},
      "Microprocessors and Microcontrollers": {}, "Embedded Systems": {},
      "Industrial Automation (PLC, SCADA)": {}, "Smart Grid Technology": {},
      "Electric Vehicles (EV Technology)": {}, "Utilization of Electrical Energy": {},
      "Illumination Engineering": {}, "Energy Auditing and Management": {},
    },
    Mechanical: {
      Thermodynamics: {}, "Fluid Mechanics": {}, "Strength of Materials": {},
      "Manufacturing Processes": {}, "Heat Transfer": {},
      "Theory of Machines (Kinematics & Dynamics of Machinery)": {}, "Machine Design": {},
      "Engineering Mechanics (Statics & Dynamics)": {}, "Refrigeration and Air Conditioning": {},
      "Internal Combustion Engines": {}, "Automobile Engineering": {}, Mechatronics: {},
      Robotics: {}, "Industrial Engineering": {}, "Operations Research": {},
      "Production Planning and Control": {}, "Material Science / Engineering Materials": {},
      "CAD / CAM / CAE": {}, "Finite Element Analysis (FEA)": {}, "CNC Machines and Programming": {},
      "Metrology and Measurements": {}, "Quality Control (Six Sigma, TQM)": {},
      "Welding Technology": {}, "Power Plant Engineering": {},
    },
    Civil: {
      "Structural Analysis": {}, "Geotechnical Engineering": {}, "Environmental Engineering": {},
      "Construction Management": {}, "Surveying (including Advanced Surveying)": {},
      "Transportation Engineering / Highway Engineering": {}, "Water Resources Engineering": {},
      "Hydraulics and Hydraulic Machines": {}, "Irrigation Engineering": {},
      "Reinforced Concrete Design (RCC)": {}, "Steel Structure Design": {},
      "Foundation Engineering": {}, "Earthquake Engineering": {}, "Concrete Technology": {},
      "Building Materials and Construction": {}, "Estimation and Costing": {},
      "Project Management": {}, "Urban Planning": {}, "Traffic Engineering": {},
      "Bridge Engineering": {}, "Tunnel Engineering": {}, "Pre-stressed Concrete": {},
      "GIS and Remote Sensing": {},
    },
    "Aerospace Engineering": {
      "Engineering Mathematics": {},
      "Flight Mechanics": {},
      "Aerodynamics": {},
      "Structures": {},
      "Propulsion": {},
      "Space Dynamics": {}
    },

    "AI & ML": {
      "Engineering Mathematics": {},
      "Linear Algebra": {},
      "Probability and Statistics": {},
      "Optimization": {},
      "Machine Learning": {},
      "Deep Learning": {},
      "Natural Language Processing": {},
      "Computer Vision": {},
      "Artificial Intelligence": {},
      "Reinforcement Learning": {}
    },

    "Biomedical Engineering": {
      "Engineering Mathematics": {},
      "Signals and Systems": {},
      "Biomedical Instrumentation": {},
      "Medical Imaging": {},
      "Biomaterials": {},
      "Biomechanics": {},
      "Human Anatomy and Physiology": {},
      "Bioinformatics": {}
    },

    "Chemical Engineering": {
      "Engineering Mathematics": {},
      "Process Calculations": {},
      "Fluid Mechanics": {},
      "Heat Transfer": {},
      "Mass Transfer": {},
      "Chemical Reaction Engineering": {},
      "Thermodynamics": {},
      "Process Control": {},
      "Plant Design and Economics": {}
    },

    "Cloud Computing": {
      "Distributed Systems": {},
      "Virtualization": {},
      "Cloud Architecture": {},
      "Networking": {},
      "Storage Systems": {},
      "Security in Cloud": {},
      "Microservices": {},
      "Containerization (Docker, Kubernetes)": {}
    },

    "Cyber Security": {
      "Cryptography": {},
      "Network Security": {},
      "Application Security": {},
      "Ethical Hacking": {},
      "Digital Forensics": {},
      "Malware Analysis": {},
      "Security Protocols": {}
    },

    "Data Science": {
      "Statistics": {},
      "Probability": {},
      "Data Analysis": {},
      "Machine Learning": {},
      "Data Visualization": {},
      "Big Data": {},
      "Data Mining": {},
      "Python for Data Science": {}
    },

    "Industrial Engineering": {
      "Engineering Mathematics": {},
      "Operations Research": {},
      "Production Planning": {},
      "Quality Control": {},
      "Supply Chain Management": {},
      "Inventory Control": {},
      "Project Management": {}
    },

    "Marine Engineering": {
      "Applied Mechanics": {},
      "Fluid Mechanics": {},
      "Thermodynamics": {},
      "Marine Machinery": {},
      "Naval Architecture": {},
      "Heat Transfer": {}
    },

    "Metallurgical Engineering": {
      "Engineering Mathematics": {},
      "Thermodynamics": {},
      "Physical Metallurgy": {},
      "Mechanical Metallurgy": {},
      "Manufacturing Processes": {},
      "Materials Science": {},
      "Phase Transformations": {}
    },

    "Mining Engineering": {
      "Engineering Mathematics": {},
      "Mine Development": {},
      "Rock Mechanics": {},
      "Surface Mining": {},
      "Underground Mining": {},
      "Mine Ventilation": {},
      "Mineral Processing": {},
      "Mining Machinery": {}
    }

  },
  "Competitive Exams": {
    GATE: {}, CAT: {}, GRE: {}, "TOEFL / IELTS": {}, GMAT: {},
    "UPSC Civil Services": {}, "State PSC Exams": {}, "SSC CGL": {}, "IBPS PO / SBI PO": {},
    "RBI Grade B Officer": {}, CDS: {}, AFCAT: {}, "ISRO Scientist/Engineer Exam": {},
    "DRDO Scientist/Engineer Exam": {}, BARC: {}, "PSU Exams through GATE": {},
    "LIC AAO": {}, "NIC Scientist Exam": {}, "IES / ESE": {}, "Indian Railway Exams": {},
  },
  "Company Specific": {
    "Mass Recruiters": { TCS: {}, Infosys: {}, Wipro: {}, "Tech Mahindra": {}, HCL: {} },
    "Product Companies": {
      Amazon: {}, Google: {}, Microsoft: {}, Adobe: {}, Salesforce: {},
      Oracle: {}, SAP: {}, ServiceNow: {}, Atlassian: {}, Cisco: {},
      VMware: {}, Intuit: {}, PayPal: {}, Uber: {}, Apple: {}, Meta: {},
      Netflix: {}, LinkedIn: {}, Snowflake: {}, Databricks: {}, Zoho: {},
      Freshworks: {}, Chargebee: {}, Razorpay: {}, PhonePe: {}, Groww: {},
      Cred: {}, Meesho: {}, Swiggy: {}, Zomato: {}, Flipkart: {}, Myntra: {},
    },
    "Service Companies": {
      Accenture: {}, Capgemini: {}, "HCL Technologies": {}, Cognizant: {},
      LTIMindtree: {}, IBM: {}, Deloitte: {}, EY: {}, PwC: {}, Genpact: {},
      Mphasis: {}, Coforge: {}, "Persistent Systems": {}, Virtusa: {},
      "Hexaware Technologies": {}, "Tata Elxsi": {}, Birlasoft: {}, "KPIT Technologies": {},
      "Zensar Technologies": {}, "Syntel / Atos": {}, "Sonata Software": {}, "NTT DATA": {},
      CGI: {}, Microland: {}, Infogain: {}, "Happiest Minds": {}, Cyient: {},
      eClerx: {}, "Firstsource Solutions": {}, Teleperformance: {}, "Allsec Technologies": {},
      "Xchanging Solutions": {}, "3i Infotech": {}, "Intellect Design Arena": {},
      "Tata Technologies": {}, "ITC Infotech": {}, "Cybage Digital": {},
      "Ness Digital Engineering": {}, "Bahwan CyberTek": {}, "Sopra Steria": {},
      "DXC Technology": {}, Bristlecone: {},
    },
  },
};

// ─── Utilities ───────────────────────────────────────────────────────────────

function isLeaf(v) {
  return !v || typeof v !== "object" || Object.keys(v).length === 0;
}

function countLeaves(obj) {
  if (isLeaf(obj)) return 1;
  return Object.values(obj).reduce((s, v) => s + (isLeaf(v) ? 1 : countLeaves(v)), 0);
}

function nodeMatches(key, val, q) {
  if (!q) return true;
  if (key.toLowerCase().includes(q)) return true;
  if (!isLeaf(val)) return Object.entries(val).some(([k, v]) => nodeMatches(k, v, q));
  return false;
}

function getAtPath(path) {
  let cur = DATA;
  for (const k of path) { cur = cur[k]; if (!cur) return null; }
  return cur;
}

function Highlight({ text, query }) {
  if (!query) return <span>{text}</span>;
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return <span>{text}</span>;
  return (
    <span>
      {text.slice(0, idx)}
      <mark style={{ background: "#fde68a", borderRadius: 2, padding: "0 1px", color: "inherit" }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </span>
  );
}

// ─── Sidebar Tree Node ────────────────────────────────────────────────────────

function TreeNode({ nodeKey, value, depth, query, globalExpand, selectedPath, onSelect }) {
  const leaf = isLeaf(value);
  const [open, setOpen] = useState(depth < 1);
  const myPath = selectedPath.slice(0, depth + 1);
  const isSelected = selectedPath[depth] === nodeKey && selectedPath.length === depth + 1;

  const prevExpand = useState(null);
  if (globalExpand !== prevExpand[0]) {
    prevExpand[1](globalExpand);
    if (globalExpand !== null && !leaf) setOpen(globalExpand);
  }

  if (query && !nodeMatches(nodeKey, value, query)) return null;
  if (query) {
    // auto-open if query
  }

  const children = leaf ? [] : Object.entries(value).filter(([k, v]) => nodeMatches(k, v, query));
  const effectiveOpen = query ? true : open;

  const handleClick = () => {
    if (!leaf) setOpen((o) => !o);
    onSelect([...Array(depth).fill(null).map((_, i) => selectedPath[i]).filter(Boolean), nodeKey]);
  };

  const accent = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"][depth % 7];

  return (
    <div style={{ margin: 0 }}>
      <div
        onClick={handleClick}
        style={{
          display: "flex", alignItems: "center", gap: 5,
          padding: `5px 8px 5px ${8 + depth * 14}px`,
          borderRadius: 6, cursor: "pointer", userSelect: "none",
          background: isSelected ? "#ede9fe" : "transparent",
          transition: "background .12s",
        }}
        onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = "#f5f3ff"; }}
        onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = "transparent"; }}
      >
        {leaf ? (
          <span style={{ width: 12, flexShrink: 0 }} />
        ) : (
          <svg width="10" height="10" viewBox="0 0 10 10" style={{ flexShrink: 0, transition: "transform .15s", transform: effectiveOpen ? "rotate(90deg)" : "none" }}>
            <path d="M3 2l4 3-4 3" stroke={isSelected ? "#6366f1" : "#9ca3af"} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        <svg width="14" height="14" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
          {leaf ? (
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" stroke={isSelected ? "#6366f1" : "#9ca3af"} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke={isSelected ? accent : "#9ca3af"} strokeWidth="1.5" fill={isSelected ? "#ede9fe" : "none"} strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
        <span style={{
          fontSize: 12, flex: 1, lineHeight: 1.35, wordBreak: "break-word",
          color: isSelected ? "#4f46e5" : "#374151",
          fontWeight: isSelected ? 500 : depth === 0 ? 600 : 400,
        }}>
          <Highlight text={nodeKey} query={query} />
        </span>
        {!leaf && (
          <span style={{ fontSize: 10, color: "#9ca3af", flexShrink: 0, background: "#f3f4f6", padding: "1px 5px", borderRadius: 8 }}>
            {countLeaves(value)}
          </span>
        )}
      </div>
      {!leaf && effectiveOpen && children.length > 0 && (
        <div style={{ borderLeft: `1.5px solid #e5e7eb`, marginLeft: 8 + depth * 14 + 5 }}>
          {children.map(([k, v]) => (
            <TreeNode
              key={k} nodeKey={k} value={v} depth={depth + 1}
              query={query} globalExpand={globalExpand}
              selectedPath={selectedPath} onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Card Grid ───────────────────────────────────────────────────────────

function FolderIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
        stroke={color} strokeWidth="1.5" fill={color + "18"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"
        stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARD_COLORS = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6"];

function MainGrid({ path, query, onNavigate }) {
  const val = path.length === 0 ? DATA : getAtPath(path);

  if (!val) return null;

  if (isLeaf(val)) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 200, gap: 10, color: "#9ca3af" }}>
        <FileIcon />
        <p style={{ fontSize: 13, color: "#6b7280" }}>{path[path.length - 1]}</p>
      </div>
    );
  }

  const entries = Object.entries(val).filter(([k, v]) => nodeMatches(k, v, query));

  if (entries.length === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 200, gap: 10 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#d1d5db" strokeWidth="1.5"/><path d="m21 21-4.35-4.35" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <p style={{ fontSize: 13, color: "#9ca3af" }}>No results for &ldquo;{query}&rdquo;</p>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
      {entries.map(([k, v], i) => {
        const leaf = isLeaf(v);
        const color = CARD_COLORS[i % CARD_COLORS.length];
        return (
          <div
            key={k}
            onClick={() => !leaf && onNavigate([...path, k])}
            style={{
              background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10,
              padding: "14px 12px", cursor: leaf ? "default" : "pointer",
              transition: "all .15s", position: "relative", overflow: "hidden",
            }}
            onMouseEnter={(e) => { if (!leaf) { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 0 0 3px ${color}18`; } }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ marginBottom: 8 }}>{leaf ? <FileIcon /> : <FolderIcon color={color} />}</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#1f2937", lineHeight: 1.4, wordBreak: "break-word" }}>
              <Highlight text={k} query={query} />
            </div>
            {!leaf && (
              <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>
                {countLeaves(v)} topics
              </div>
            )}
            {leaf && (
              <div style={{ fontSize: 10, color: "#d1d5db", marginTop: 4 }}>topic</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb({ path, onNavigate }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap", minHeight: 22 }}>
      <span
        onClick={() => onNavigate([])}
        style={{ fontSize: 12, color: "#6366f1", cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: 2 }}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9,22 9,12 15,12 15,22" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Home
      </span>
      {path.map((seg, i) => {
        const isLast = i === path.length - 1;
        return (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M3 2l4 3-4 3" stroke="#d1d5db" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span
              onClick={() => !isLast && onNavigate(path.slice(0, i + 1))}
              style={{
                fontSize: 12, color: isLast ? "#1f2937" : "#6366f1",
                fontWeight: isLast ? 500 : 400,
                cursor: isLast ? "default" : "pointer",
              }}
            >
              {seg}
            </span>
          </span>
        );
      })}
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function FolderExplorer() {
  const [query, setQuery] = useState("");
  const [selectedPath, setSelectedPath] = useState([]);
  const [globalExpand, setGlobalExpand] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const q = query.toLowerCase().trim();

  const totalTopics = useMemo(() => countLeaves(DATA), []);
  const rootEntries = useMemo(
    () => Object.entries(DATA).filter(([k, v]) => nodeMatches(k, v, q)),
    [q]
  );

  const handleExpand = useCallback((val) => {
    setGlobalExpand({ val, ts: Date.now() });
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Inter', system-ui, sans-serif", background: "#f9fafb", overflow: "hidden" }}>

      {/* ── Sidebar ── */}
      <div style={{
        width: sidebarOpen ? 280 : 0, minWidth: sidebarOpen ? 280 : 0,
        background: "#fff", borderRight: "1px solid #e5e7eb",
        display: "flex", flexDirection: "column", overflow: "hidden",
        transition: "width .2s, min-width .2s",
      }}>
        {/* Header */}
        <div style={{ padding: "16px 14px 12px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>E-Prep Explorer</div>
              <div style={{ fontSize: 10, color: "#9ca3af" }}>{totalTopics.toLocaleString()} topics</div>
            </div>
          </div>

          {/* Search */}
          <div style={{ position: "relative", marginTop: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)" }}>
              <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="1.5" />
              <path d="m21 21-4.35-4.35" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics..."
              style={{
                width: "100%", padding: "7px 28px 7px 28px",
                fontSize: 12, background: "#f9fafb",
                border: "1px solid #e5e7eb", borderRadius: 7,
                color: "#111827", outline: "none", fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 13, padding: 0, lineHeight: 1 }}
              >✕</button>
            )}
          </div>

          {/* Expand / Collapse */}
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {[["Expand all", true], ["Collapse all", false]].map(([label, val]) => (
              <button
                key={label}
                onClick={() => handleExpand(val)}
                style={{
                  flex: 1, padding: "5px 0", fontSize: 11, background: "none",
                  border: "1px solid #e5e7eb", borderRadius: 6, color: "#6b7280",
                  cursor: "pointer", fontFamily: "inherit",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f3ff"; e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.color = "#6366f1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#6b7280"; }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tree */}
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 4px" }}>
          {rootEntries.map(([k, v]) => (
            <TreeNode
              key={k} nodeKey={k} value={v} depth={0}
              query={q}
              globalExpand={globalExpand ? globalExpand.val : null}
              selectedPath={selectedPath}
              onSelect={setSelectedPath}
            />
          ))}
          {rootEntries.length === 0 && (
            <div style={{ textAlign: "center", padding: "32px 12px", color: "#9ca3af", fontSize: 12 }}>
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>

      {/* ── Main Panel ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "12px 20px", display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            style={{ background: "none", border: "1px solid #e5e7eb", borderRadius: 6, padding: "5px 7px", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
          <Breadcrumb path={selectedPath} onNavigate={setSelectedPath} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {/* Stats row at root */}
          {selectedPath.length === 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 18 }}>
              {[
                ["Categories", Object.keys(DATA).length],
                ["Total Topics", totalTopics.toLocaleString()],
                ["Subcategories", Object.values(DATA).reduce((s, v) => s + Object.keys(v).length, 0)],
              ].map(([label, value]) => (
                <div key={label} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 20, fontWeight: 600, color: "#111827" }}>{value}</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          )}
          <MainGrid path={selectedPath} query={q} onNavigate={setSelectedPath} />
        </div>
      </div>
    </div>
  );
}