// Excelra course data — extracted from the original single-file HTML app.
// ---- Embedded content (merged from separate JSON files to keep the project lean) ----
export const ABOUT_CONTENT = {
  "headline": "Where data means more.",
  "intro": "Excelra is a life-sciences informatics and data-science company that turns complex biological, chemical, and clinical data into AI-ready, interoperable assets for biopharma R&D. From its headquarters in Hyderabad and offices across the US, Europe, and India, Excelra blends deep scientific domain expertise with engineering rigor to accelerate drug discovery, development, and regulatory workflows. The company's promise — \"You need more than data. That's why data means more to us.\" — captures how it moves customers from raw data to confident decisions.",
  "paragraphs": [
    "Excelra is a leading biopharma data and analytics partner founded in 2016 and headquartered in Hyderabad, India, with a growing footprint across the United States, Europe, and India. The company operates at the intersection of science and technology, employing 1,000+ domain experts — chemists, biologists, data scientists, and engineers — who work alongside pharma and biotech teams to accelerate discovery and development programs.",
    "What Excelra does is bring structure to the chaos of life-sciences data. Through expert curation, FAIRification, CDISC/SDTM mapping, knowledge graphs, and platforms such as GOSTAR\u2122 (the world's largest manually curated small-molecule SAR database, with 10.6M+ molecules and 35M+ SAR data points), it makes data findable, interoperable, and analytics-ready. Service lines span bioinformatics, computational biology, cheminformatics, semantics, scientific informatics, lab informatics, cloud enablement, HEOR/RWE, and a dedicated AI Lab.",
    "How Excelra uses AI is purposeful, not bolted on. Its AI Lab and delivery teams embed NLP, predictive models, generative chemistry, and large-language-model (LLM) workflows directly into curation, safety-case intake, clinical-data mapping, and document-review pipelines — always with scientific validation as the gating step. The result: faster cycle times, cleaner submission-ready data, and better odds of success for the 16 of the top 20 global pharma companies that partner with Excelra."
  ],
  "founded": "2016",
  "headquarters": "Hyderabad, India (global delivery); Boston & New Jersey, USA (Americas)",
  "locations": ["Hyderabad", "Boston", "New Jersey", "London", "Ghent", "Utrecht"],
  "clientsCount": "135+",
  "topPharma": "16 of top 20 global pharma",
  "yearsExperience": "Founded 2016 \u2014 ~9 years accelerating drug discovery & development (no legacy burden, modern cloud-native stack)",
  "stats": [
    { "num": "2016", "label": "Founding year \u2014 young, agile, no legacy burden" },
    { "num": "16/20", "label": "Top global pharma companies that partner with us" },
    { "num": "135+", "label": "Global biopharma, biotech & diagnostics partners" },
    { "num": "1000+", "label": "Domain experts \u2014 scientists, data scientists & engineers" }
  ],
  "values": [
    { "title": "Domain-first", "desc": "Scientists first, technologists second. Every dataset, pipeline, and AI model is shaped by chemists, biologists, and clinicians who understand what the data must mean before it can be useful." },
    { "title": "Data as an asset", "desc": "Data is treated as a long-lived, FAIR, interoperable asset \u2014 structured, standardized, governed, and made analytics-ready so it compounds in value across discovery, development, and post-market." },
    { "title": "AI-accelerated", "desc": "AI is woven into the workflow, not layered on top. NLP, generative chemistry, predictive quality, and LLM-assisted review augment human experts while scientific validation remains the gatekeeper." },
    { "title": "Compliance-driven", "desc": "GxP-grade processes, CDISC/SDTM alignment, and audit-ready governance ensure data is defensible, submission-ready, and trusted by regulators and review teams alike." }
  ],
  "services": [
    { "title": "Drug Discovery Data", "desc": "Bioinformatics, computational biology, cheminformatics, and the GOSTAR\u2122 SAR databases (10.6M+ small molecules, 45,000+ targeted protein degraders, curated large-molecule & antibody data) power target ID, screening, lead optimization, and AI/ML model training.", "icon": "discovery" },
    { "title": "Clinical Data Management", "desc": "End-to-end CDM and biostatistics \u2014 from CRF design and EDC to SDTM/ADaM conversion, query management, and database lock \u2014 producing clean, submission-ready datasets for Phase I\u2013III trials.", "icon": "cdm" },
    { "title": "Pharmacovigilance", "desc": "Adverse-event data curation, structured safety databases, and literature/PV case intake support signal detection, benefit\u2013risk analysis, and post-market safety surveillance.", "icon": "pv" },
    { "title": "Healthcare Data Standards", "desc": "FAIRification, ontology mapping, and CDISC/SDTM, HL7/FHIR, MedDRA, and WHO-DD standardization turn heterogeneous source data into interoperable, machine-readable knowledge.", "icon": "standards" },
    { "title": "Data Integrity & Digital Transformation", "desc": "Lab informatics (ELN/LIMS), scientific data management, cloud enablement, and scientific application engineering deliver secure, scalable, GxP-compliant digital transformation for R&D.", "icon": "integrity" },
    { "title": "Regulatory & Submission Data", "desc": "CDISC-compliant datasets, define.xml, eCTD-ready data packages, and analytics that support regulatory submissions, health-authority queries, and post-approval lifecycle management.", "icon": "lifecycle" }
  ],
  "aiUseCases": [
    { "title": "AI in Target & Lead Discovery", "desc": "Multi-omics analysis, predictive target validation, and AI-assisted hit triage help prioritize targets and reduce early-discovery attrition.", "stage": "Discovery" },
    { "title": "Generative Chemistry", "desc": "GOSTAR\u2122-trained generative models propose novel, synthesizable, on-target molecules with optimized ADMET and selectivity profiles.", "stage": "Discovery" },
    { "title": "Automated Clinical Data Mapping", "desc": "NLP/ML auto-maps source data to SDTM domains, accelerates CRF-to-CDISC conversion, and flags inconsistencies for human review before database lock.", "stage": "Development" },
    { "title": "NLP for Safety Case Intake", "desc": "Extracts structured adverse-event data from literature, EHR, and ICSR narratives to accelerate case intake, triage, and reporting.", "stage": "Pharmacovigilance" },
    { "title": "Predictive Data Quality", "desc": "ML models predict likely edit-check failures, missing fields, and reconciliation breaks so teams resolve issues before submission.", "stage": "Data Management" },
    { "title": "LLM-assisted Document Review", "desc": "Large language models summarize clinical study reports, regulatory correspondence, and scientific literature with scientist-in-the-loop validation.", "stage": "Regulatory" }
  ],
  "valueChain": [
    { "stage": "Discovery", "desc": "Target identification, screening, hit-to-lead and lead optimization powered by GOSTAR\u2122 and bioinformatics" },
    { "stage": "Preclinical", "desc": "ADMET, safety, and pharmacology profiling with curated reference datasets" },
    { "stage": "Clinical Trials", "desc": "Phase I\u2013III evidence generation, EDC, CDMS, and biostatistics support" },
    { "stage": "Data Management", "desc": "Clean, locked, submission-ready datasets aligned to CDISC SDTM/ADaM" },
    { "stage": "Pharmacovigilance", "desc": "Adverse-event curation, signal detection, and post-market safety monitoring" },
    { "stage": "Regulatory Submission", "desc": "eCTD-ready data packages, define.xml, and health-authority response support" },
    { "stage": "Post-launch", "desc": "Real-world evidence, HEOR, and digital transformation across the asset lifecycle" }
  ],
  "architectureLayers": [
    { "layer": "Data Sources", "desc": "Lab instruments, ELN/LIMS, EDC, EHR/EMR, literature, patents, registries, and public omics repositories" },
    { "layer": "Ingestion & Harmonization", "desc": "ETL pipelines, FAIRification, CDISC/SDTM mapping, ontology alignment, and entity resolution" },
    { "layer": "Knowledge Graph", "desc": "Ontology-linked entity store connecting drugs, targets, genes, pathways, diseases, and adverse events" },
    { "layer": "AI/ML Engine", "desc": "NLP, predictive models, generative chemistry, and LLMs with scientist-in-the-loop validation \u2014 powered by the Excelra AI Lab" },
    { "layer": "Delivery & Analytics", "desc": "Dashboards, GOSTAR\u2122, BioVisualizer\u2122, OP\u00b2, submissions, and decision-support tools for pharma R&D teams" }
  ],
  "standards": ["CDISC SDTM/ADaM", "HL7/FHIR", "ICD-10", "SNOMED CT", "MedDRA", "WHO-DD"],
  "chartData": {
    "revenueOrGrowth": [
      { "year": "2019", "value": 40 },
      { "year": "2020", "value": 52 },
      { "year": "2021", "value": 66 },
      { "year": "2022", "value": 78 },
      { "year": "2023", "value": 92 },
      { "year": "2024", "value": 100 }
    ],
    "serviceMix": [
      { "name": "Discovery Data (Bioinformatics, Cheminformatics, GOSTAR\u2122)", "value": 32 },
      { "name": "Clinical & Regulatory Data Management", "value": 26 },
      { "name": "Safety / Pharmacovigilance", "value": 16 },
      { "name": "Data Standards & FAIRification", "value": 14 },
      { "name": "Digital Transformation & Cloud", "value": 12 }
    ],
    "aiAdoption": [
      { "quarter": "Q1", "manual": 78, "ai": 22 },
      { "quarter": "Q2", "manual": 67, "ai": 33 },
      { "quarter": "Q3", "manual": 56, "ai": 44 },
      { "quarter": "Q4", "manual": 47, "ai": 53 }
    ]
  },
  "timeline": [
    { "year": "2016", "event": "Excelra founded in Hyderabad, India \u2014 a young, cloud-native informatics company with no legacy burden." },
    { "year": "2019", "event": "GOSTAR\u2122 small-molecule SAR database scales past 10M+ curated compounds, powering AI/ML drug discovery." },
    { "year": "2023", "event": "Acquired BISC Global, creating an international bioinformatics powerhouse and expanding European delivery (Ghent, Utrecht, London)." },
    { "year": "2024", "event": "Launched GOSTAR\u2122 TPD (45,000+ targeted protein degraders) and GOSTAR\u2122 Large Molecules for curated antibody, peptide & oligonucleotide data." },
    { "year": "2025", "event": "AI Lab operationalized \u2014 NLP, generative chemistry, and LLM-assisted workflows woven across curation, clinical, safety, and regulatory services." }
  ],
  "closingLine": "Excelra is where science meets technology \u2014 turning the potential of data into insight, and insight into better patient outcomes, alongside 16 of the top 20 global pharma companies."
};

const ENROLLMENTS_DATA = {
  "drug-discovery": [
    {
      "name": "Ishaan Verma",
      "modulesDone": 12,
      "timeMin": 145
    },
    {
      "name": "Priya Nair",
      "modulesDone": 5,
      "timeMin": 62
    },
    {
      "name": "Divya Menon",
      "modulesDone": 12,
      "timeMin": 130
    }
  ],
  "drug-lifecycle": [
    {
      "name": "Priya Nair",
      "modulesDone": 9,
      "timeMin": 98
    },
    {
      "name": "Rohan Gupta",
      "modulesDone": 3,
      "timeMin": 40
    }
  ],
  "clinical-trials": [
    {
      "name": "Rohan Gupta",
      "modulesDone": 7,
      "timeMin": 81
    },
    {
      "name": "Kabir Malhotra",
      "modulesDone": 12,
      "timeMin": 150
    },
    {
      "name": "Yusuf Khan",
      "modulesDone": 2,
      "timeMin": 22
    }
  ],
  "clinical-data-management": [
    {
      "name": "Sneha Kulkarni",
      "modulesDone": 12,
      "timeMin": 160
    },
    {
      "name": "Ishaan Verma",
      "modulesDone": 4,
      "timeMin": 45
    }
  ],
  "pharmacovigilance": [
    {
      "name": "Aarav Shah",
      "modulesDone": 4,
      "timeMin": 38
    },
    {
      "name": "Divya Menon",
      "modulesDone": 8,
      "timeMin": 90
    }
  ],
  "healthcare-data-standards": [
    {
      "name": "Meera Iyer",
      "modulesDone": 0,
      "timeMin": 0
    },
    {
      "name": "Yusuf Khan",
      "modulesDone": 6,
      "timeMin": 70
    }
  ],
  "data-integrity": [
    {
      "name": "Kabir Malhotra",
      "modulesDone": 11,
      "timeMin": 120
    },
    {
      "name": "Sneha Kulkarni",
      "modulesDone": 2,
      "timeMin": 20
    },
    {
      "name": "Aarav Shah",
      "modulesDone": 12,
      "timeMin": 140
    }
  ]
};

const DOMAIN_EXPLAINERS_DATA = {
  "drug-discovery": {
    "text": "The earliest stage of medicine-making. Scientists identify a biological target — often a protein involved in a disease — and search enormous libraries of chemical compounds, both in the lab and in computer simulations, to find one that acts on it. Almost none of this happens in humans yet; it's years of cellular and computational work before a single candidate is judged ready for the next stage.",
    "fact": "Roughly 9 out of 10 discovery candidates never make it past this stage — that's expected, not a failure."
  },
  "drug-lifecycle": {
    "text": "The long regulatory and clinical journey a molecule takes after discovery — through preclinical safety testing, three phases of human trials, and formal review by health authorities like the FDA or EMA — before it can legally be sold as a medicine. It's the throughline that connects almost every other course in this repository into one pipeline.",
    "fact": "The full journey typically takes 10–15 years and can cost well over $1 billion per approved drug."
  },
  "clinical-trials": {
    "text": "Structured, tightly regulated studies conducted in real patients or volunteers, designed to answer one question: does this treatment work, and is it safe enough? Every trial runs under a written protocol, independent ethical review, and strict informed consent — with randomization and blinding used to keep the results trustworthy.",
    "fact": "A single Phase III trial can enroll thousands of patients across dozens of countries at once."
  },
  "clinical-data-management": {
    "text": "The quality-control layer sitting between a trial site and a statistician. Every data point a trial collects — visit notes, lab results, adverse events — gets checked, queried, coded against medical dictionaries, and standardized here before anyone can trust it enough to analyze or submit to a regulator.",
    "fact": "A single mid-size trial can generate hundreds of thousands of individual data points to clean and lock."
  },
  "pharmacovigilance": {
    "text": "The ongoing safety watch that continues for as long as a medicine stays on the market. Clinical trials only ever involve a limited number of patients — pharmacovigilance is how rare side effects that only surface once millions of people take a drug get detected, assessed, and acted on, using everything from spontaneous reports to medical literature.",
    "fact": "Safety teams monitor case reports, published literature, and even social media for early warning signals."
  },
  "healthcare-data-standards": {
    "text": "The shared vocabulary that lets a lab system, a hospital record, and a clinical trial database all describe the same medical concept in exactly the same way. Without standards like these, healthcare data becomes a tower of incompatible dialects that can't be compared, combined, or trusted across systems.",
    "fact": "Common examples include HL7/FHIR for care records, CDISC for trial submissions, and SNOMED CT for clinical terms."
  },
  "data-integrity": {
    "text": "The discipline of keeping data attributable, accurate, and trustworthy across its entire lifecycle — while modernizing the legacy, often manual, systems life sciences organizations have relied on for decades. Every other course in this repository quietly depends on this one working well.",
    "fact": "Regulators can — and do — reject entire submissions if the underlying data can't be shown to be reliable."
  }
};

const COURSES_DATA = [
  {
    "id": "drug-discovery",
    "num": "01",
    "title": "Drug Discovery",
    "tagline": "From biological target to lead molecule",
    "accent": "mint",
    "icon": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"9\" r=\"4\"/><circle cx=\"9\" cy=\"35\" r=\"4\"/><circle cx=\"39\" cy=\"35\" r=\"4\"/><line x1=\"22\" y1=\"13\" x2=\"12\" y2=\"31\"/><line x1=\"26\" y1=\"13\" x2=\"36\" y2=\"31\"/><line x1=\"13\" y1=\"35\" x2=\"35\" y2=\"35\"/></svg>",
    "objectives": [
      "Explain what drug discovery is and where it sits at the start of the pharmaceutical lifecycle",
      "Describe the major stages from target identification through to lead optimization",
      "Identify the people, data types and technologies that power modern discovery work"
    ],
    "modules": [
      {
        "title": "Introduction",
        "kind": "text",
        "text": "Drug discovery is the earliest phase of turning a biological idea into a medicine. It sits right at the start of the pharmaceutical lifecycle, long before a molecule ever reaches a clinical trial. Every approved medicine — from painkillers to cancer immunotherapies — began as a hypothesis: \"if we can act on this target, we can change the course of a disease.\" Discovery scientists spend years testing that hypothesis in cells, animals and computers before a single candidate is judged fit for human testing. Get this stage right, and everything downstream — trials, approval, patients treated — becomes possible."
      },
      {
        "title": "Business Overview",
        "kind": "text",
        "text": "The business function of drug discovery exists to generate a steady pipeline of promising molecules able to survive the far more expensive stages of development. Its objective is simple to state and hard to achieve: find a compound that is safe, effective, and different enough from what already exists to be patentable and commercially viable. Because roughly nine out of ten discovery candidates never become an approved drug, the real-world relevance of this function is about managing risk early — killing weak candidates cheaply in a lab, rather than expensively in a clinic years later."
      },
      {
        "title": "End-to-End Process",
        "kind": "process",
        "text": "Discovery runs as a funnel: thousands of ideas narrow down to one nominated candidate.",
        "stages": [
          "Target Identification",
          "Target Validation",
          "Hit Discovery / Screening",
          "Hit-to-Lead",
          "Lead Optimization",
          "Candidate Selection"
        ],
        "inputs": "Disease biology and genomic data, compound libraries, prior literature, and computational models of the target.",
        "outputs": "A single validated lead compound plus a preclinical data package ready to hand to development.",
        "checkIdx": 2
      },
      {
        "title": "Key Terminologies",
        "kind": "glossary",
        "terms": [
          {
            "t": "Target",
            "d": "The biological molecule — often a protein — that a drug is designed to act on."
          },
          {
            "t": "Biomarker",
            "d": "A measurable biological indicator used to track disease state or drug response."
          },
          {
            "t": "Hit",
            "d": "A compound that shows initial, promising activity against a target in a screen."
          },
          {
            "t": "Lead Compound",
            "d": "A hit that has been optimized enough to become the primary development candidate."
          },
          {
            "t": "SAR",
            "d": "Structure-Activity Relationship — how a molecule's chemical structure affects its biological activity."
          },
          {
            "t": "HTS",
            "d": "High-Throughput Screening — automated testing of huge compound libraries against a target."
          },
          {
            "t": "ADMET",
            "d": "A compound's Absorption, Distribution, Metabolism, Excretion and Toxicity profile."
          },
          {
            "t": "In Vitro / In Vivo",
            "d": "Testing in a lab dish or system (in vitro) versus in a living organism (in vivo)."
          },
          {
            "t": "IND",
            "d": "Investigational New Drug — the filing required before testing a candidate in humans."
          },
          {
            "t": "Pharmacophore",
            "d": "The specific 3D arrangement of features a molecule needs to bind its target."
          }
        ]
      },
      {
        "title": "Stakeholders",
        "kind": "people",
        "roles": [
          {
            "role": "Medicinal Chemist",
            "desc": "Designs and synthesizes candidate molecules, refining structure for activity and safety."
          },
          {
            "role": "Biologist / Pharmacologist",
            "desc": "Tests how compounds behave in cells, tissues and model organisms."
          },
          {
            "role": "Bioinformatician / Data Scientist",
            "desc": "Mines genomic, chemical and literature data to find and validate targets."
          },
          {
            "role": "Project Leader",
            "desc": "Coordinates the cross-functional discovery team and timeline."
          },
          {
            "role": "IP / Patent Specialist",
            "desc": "Protects novel compounds and methods legally as they emerge."
          }
        ],
        "consumers": "Preclinical development and regulatory affairs teams take the validated lead compound forward into formal development."
      },
      {
        "title": "Data Landscape",
        "kind": "data",
        "text": "Discovery generates chemical structures, bioassay readouts, genomic and proteomic data, high-throughput screening results, and a constant stream of scientific literature and patent filings.",
        "structured": "Plate-reader assay results, compound registries and sequence databases — clean, tabular, and ready for statistics.",
        "unstructured": "Lab notebooks, microscopy images and PDF literature — rich in detail but hard to search or compare at scale.",
        "formats": [
          "SDF / MOL (chemical structures)",
          "FASTA (sequences)",
          "CSV / Excel (assay data)",
          "PDF (literature & patents)"
        ],
        "challenges": [
          "Inconsistent compound naming across systems",
          "Batch-to-batch assay variability",
          "Incomplete experimental metadata",
          "Non-standardized units and concentrations"
        ]
      },
      {
        "title": "Industry Standards",
        "kind": "tags",
        "text": "Discovery is lightly regulated compared to later stages, but two principles still anchor good practice and keep early data trustworthy.",
        "groups": [
          {
            "label": "Relevant Standards",
            "items": [
              "GLP (Good Laboratory Practice)",
              "FAIR Data Principles"
            ]
          }
        ],
        "checkIdx": 6
      },
      {
        "title": "Technology Ecosystem",
        "kind": "tags",
        "text": "A modern discovery team leans heavily on cloud compute and specialist chemistry and biology software that talk to each other across the pipeline.",
        "groups": [
          {
            "label": "Common Technology",
            "items": [
              "Compound & Chemical Databases",
              "LIMS",
              "Cloud Molecular Modeling",
              "AI Virtual Screening",
              "Cheminformatics Platforms"
            ]
          }
        ]
      },
      {
        "title": "Current Industry Challenges",
        "kind": "points",
        "text": "Even with modern tools, discovery remains one of the highest-risk stages in the entire lifecycle.",
        "items": [
          "High attrition — most candidates fail before reaching patients",
          "Target validation remains genuinely uncertain",
          "Data stays siloed across chemistry and biology teams",
          "Early results are often hard to reproduce"
        ]
      },
      {
        "title": "Role of Data Engineering & AI",
        "kind": "points",
        "text": "Modern data engineering and AI are compressing timelines that used to take years.",
        "items": [
          "Virtual screening of huge compound libraries in silico",
          "Generative design of entirely novel candidate molecules",
          "Predictive ADMET and toxicity modeling",
          "Automated mining of scientific literature and prior art"
        ]
      },
      {
        "title": "Summary",
        "kind": "summary",
        "takeaways": [
          "Discovery de-risks ideas cheaply before expensive human trials",
          "Most candidates fail — that's the expected cost of the process, not a flaw in it",
          "The pipeline runs Target → Hit → Lead → Candidate",
          "AI is reshaping speed here, not replacing scientific judgment"
        ]
      },
      {
        "title": "References",
        "kind": "references",
        "items": [
          "FDA — \"The Drug Development Process\" (public overview)",
          "ChEMBL & PubChem — open compound and bioactivity databases",
          "NIH National Center for Advancing Translational Sciences (NCATS)"
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the primary goal of the drug discovery stage?",
        "options": [
          "Manufacture the approved drug at scale",
          "Find and validate a promising lead compound before human testing",
          "Monitor side effects after launch",
          "Set the drug's market price"
        ],
        "a": 1
      },
      {
        "q": "Which term describes a biological molecule that a drug is designed to act on?",
        "options": [
          "Lead compound",
          "Biomarker",
          "Target",
          "Assay"
        ],
        "a": 2
      },
      {
        "q": "HTS stands for:",
        "options": [
          "Human Trial Standard",
          "High-Throughput Screening",
          "Hit-to-Target Sequencing",
          "Health Technology Submission"
        ],
        "a": 1
      },
      {
        "q": "SAR studies help scientists understand:",
        "options": [
          "How a molecule's structure relates to its biological activity",
          "How to price a drug",
          "How to recruit trial patients",
          "How to file regulatory paperwork"
        ],
        "a": 0
      },
      {
        "q": "ADMET refers to a compound's:",
        "options": [
          "Absorption, Distribution, Metabolism, Excretion, Toxicity",
          "Approval, Development, Manufacturing, Evaluation, Trial",
          "Adverse-event Detection and Management Tool",
          "None of the above"
        ],
        "a": 0
      },
      {
        "q": "Roughly what share of discovery candidates fail before ever reaching approval?",
        "options": [
          "~10%",
          "~50%",
          "~90%",
          "0%"
        ],
        "a": 2
      },
      {
        "q": "Which professional is primarily responsible for designing and refining candidate molecules?",
        "options": [
          "Medicinal chemist",
          "Regulatory affairs officer",
          "Clinical research coordinator",
          "Data entry clerk"
        ],
        "a": 0
      },
      {
        "q": "A \"hit\" in a screening campaign is:",
        "options": [
          "A final approved drug",
          "A compound showing initial promising activity against a target",
          "A patient adverse event",
          "A regulatory rejection"
        ],
        "a": 1
      },
      {
        "q": "What comes immediately after Hit Discovery in the pipeline?",
        "options": [
          "Preclinical candidate nomination",
          "Hit-to-Lead",
          "Phase III trial",
          "Regulatory filing"
        ],
        "a": 1
      },
      {
        "q": "How is AI most commonly used in modern drug discovery?",
        "options": [
          "Filing tax paperwork",
          "Virtual screening and generative molecule design",
          "Running clinical trial logistics",
          "Printing product labels"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "drug-lifecycle",
    "num": "02",
    "title": "Drug Development Lifecycle",
    "tagline": "From candidate molecule to approved medicine",
    "accent": "violet",
    "icon": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"8\" cy=\"24\" r=\"3.6\"/><circle cx=\"19\" cy=\"24\" r=\"3.6\"/><circle cx=\"30\" cy=\"24\" r=\"3.6\"/><circle cx=\"41\" cy=\"24\" r=\"3.6\"/><line x1=\"11.6\" y1=\"24\" x2=\"15.4\" y2=\"24\"/><line x1=\"22.6\" y1=\"24\" x2=\"26.4\" y2=\"24\"/><line x1=\"33.6\" y1=\"24\" x2=\"37.4\" y2=\"24\"/></svg>",
    "objectives": [
      "Describe the full pipeline from preclinical work through Phase I–III trials to approval",
      "Explain why development takes so long and costs so much",
      "Identify the regulators and functions that gate each stage"
    ],
    "modules": [
      {
        "title": "Introduction",
        "kind": "text",
        "text": "The drug development lifecycle is the spine that connects early discovery to a marketed product patients can actually use. A candidate molecule that survives discovery still has to prove itself safe and effective in real people, get approved by regulators, and be manufactured reliably at scale. This full journey typically takes ten to fifteen years and can cost well over a billion dollars per approved drug — most of it spent in the stages covered in this course, not in discovery itself."
      },
      {
        "title": "Business Overview",
        "kind": "text",
        "text": "This function exists to translate a promising molecule into a legally approved, manufacturable, reimbursable medicine. Its objective is to manage three kinds of risk at once: regulatory risk (will authorities approve it), safety risk (will it harm patients), and commercial risk (will it arrive in a market that still wants it). Because so much capital is committed before any revenue arrives, disciplined stage-gating — killing a failing program early — is one of the most valuable things this function does."
      },
      {
        "title": "End-to-End Process",
        "kind": "process",
        "text": "Development runs as a strict sequence of gated stages, each answering a different question.",
        "stages": [
          "Preclinical",
          "IND Filing",
          "Phase I",
          "Phase II",
          "Phase III",
          "NDA/BLA Filing",
          "Approval",
          "Phase IV"
        ],
        "inputs": "A nominated preclinical candidate, animal safety data, and a proposed clinical development plan.",
        "outputs": "A regulator-approved medicine with an approved label, ready for the market — plus an ongoing post-market safety commitment.",
        "checkIdx": 2
      },
      {
        "title": "Key Terminologies",
        "kind": "glossary",
        "terms": [
          {
            "t": "IND",
            "d": "The filing that allows human testing of a candidate drug to begin."
          },
          {
            "t": "NDA / BLA",
            "d": "New Drug Application / Biologics License Application — filed to seek marketing approval."
          },
          {
            "t": "Phase I",
            "d": "Early-stage trial testing safety and dosing, often in healthy volunteers."
          },
          {
            "t": "Phase II",
            "d": "Trial testing efficacy and optimal dosing in a small group of patients."
          },
          {
            "t": "Phase III",
            "d": "Large-scale confirmatory trial testing efficacy and safety before approval."
          },
          {
            "t": "Phase IV",
            "d": "Post-approval studies monitoring a drug in wide, real-world use."
          },
          {
            "t": "Orphan Drug Designation",
            "d": "Special status encouraging development of treatments for rare diseases."
          },
          {
            "t": "Fast Track",
            "d": "A regulatory pathway that speeds review of drugs addressing unmet medical needs."
          },
          {
            "t": "Patent Cliff",
            "d": "The steep revenue drop a drug faces once patent protection expires."
          },
          {
            "t": "Label",
            "d": "The regulator-approved document describing a drug's uses, dosing and risks."
          }
        ]
      },
      {
        "title": "Stakeholders",
        "kind": "people",
        "roles": [
          {
            "role": "Regulatory Affairs",
            "desc": "Manages submissions and the relationship with health authorities."
          },
          {
            "role": "Clinical Operations",
            "desc": "Runs the trials that generate the required safety and efficacy evidence."
          },
          {
            "role": "Medical Affairs",
            "desc": "Connects the science to prescribing physicians and patients."
          },
          {
            "role": "CMC / Manufacturing",
            "desc": "Ensures the drug can be produced reliably and consistently at scale."
          },
          {
            "role": "Health Authorities (FDA, EMA, CDSCO)",
            "desc": "Independently review evidence and grant or deny approval."
          }
        ],
        "consumers": "Patients, prescribers and payers are the ultimate consumers of an approved, well-labeled medicine."
      },
      {
        "title": "Data Landscape",
        "kind": "data",
        "text": "Development generates regulatory submission data, CMC and manufacturing batch records, nonclinical study reports, and program-level timelines and milestones.",
        "structured": "eCTD submission metadata, structured batch records and milestone trackers — built for audit and reporting.",
        "unstructured": "Regulatory correspondence, meeting minutes and scanned legacy documents — harder to search across a decade-long program.",
        "formats": [
          "eCTD XML",
          "PDF (regulatory documents)",
          "Word (reports)",
          "Excel (program trackers)"
        ],
        "challenges": [
          "Version control across very long timelines",
          "Inconsistent terminology across global regions",
          "Program data siloed across separate functions",
          "Legacy paper records mixed with digital ones"
        ]
      },
      {
        "title": "Industry Standards",
        "kind": "tags",
        "text": "Development is one of the most heavily regulated functions in the entire lifecycle, and harmonized guidelines keep global filings consistent.",
        "groups": [
          {
            "label": "Relevant Standards",
            "items": [
              "ICH Guidelines",
              "GLP / GCP / GMP family"
            ]
          }
        ],
        "checkIdx": 6
      },
      {
        "title": "Technology Ecosystem",
        "kind": "tags",
        "text": "Cross-functional platforms keep regulatory, clinical and manufacturing teams working from the same program timeline.",
        "groups": [
          {
            "label": "Common Technology",
            "items": [
              "CTMS",
              "eTMF",
              "Regulatory Information Management Systems (RIMS)"
            ]
          }
        ]
      },
      {
        "title": "Current Industry Challenges",
        "kind": "points",
        "text": "Cost and time remain the defining constraints of this entire stage.",
        "items": [
          "Ten-to-fifteen-year timelines from candidate to approval",
          "Very high cost per approved drug",
          "Attrition concentrated heavily in Phase II and III",
          "Divergent regulatory requirements across global markets"
        ]
      },
      {
        "title": "Role of Data Engineering & AI",
        "kind": "points",
        "text": "AI is increasingly used to make development programs faster and better-informed, without cutting corners on evidence.",
        "items": [
          "Trial design optimization using historical outcome data",
          "Real-world evidence analysis to support submissions",
          "Adaptive trial simulation before enrollment even begins",
          "AI-assisted drafting of regulatory documents"
        ]
      },
      {
        "title": "Summary",
        "kind": "summary",
        "takeaways": [
          "Development turns one promising molecule into an approved, manufacturable medicine",
          "Phases I through IV each answer a distinct question",
          "ICH guidelines harmonize requirements across major regulatory regions",
          "Cost and time are the defining constraints of this whole stage"
        ]
      },
      {
        "title": "References",
        "kind": "references",
        "items": [
          "ICH — official harmonized guidelines (ich.org)",
          "FDA and EMA public drug-approval process pages"
        ]
      }
    ],
    "quiz": [
      {
        "q": "Approximately how long does the journey from candidate molecule to approval typically take?",
        "options": [
          "1–2 years",
          "3–5 years",
          "10–15 years",
          "25+ years"
        ],
        "a": 2
      },
      {
        "q": "Which filing allows a company to begin testing a drug in humans?",
        "options": [
          "NDA",
          "IND",
          "BLA",
          "PSUR"
        ],
        "a": 1
      },
      {
        "q": "Phase I trials primarily test:",
        "options": [
          "Large-scale efficacy in thousands of patients",
          "Safety and dosing in a small group, often healthy volunteers",
          "Post-market side effects",
          "Manufacturing costs"
        ],
        "a": 1
      },
      {
        "q": "Phase III trials are best described as:",
        "options": [
          "Small pilot safety studies",
          "Large-scale confirmatory efficacy and safety studies",
          "Studies conducted only after approval",
          "Preclinical animal studies"
        ],
        "a": 1
      },
      {
        "q": "What happens during Phase IV?",
        "options": [
          "Target identification",
          "Post-market surveillance of an already-approved drug",
          "Hit-to-lead optimization",
          "IND filing"
        ],
        "a": 1
      },
      {
        "q": "Which guidelines harmonize drug development requirements across regions?",
        "options": [
          "ICH guidelines",
          "HTML standards",
          "SNOMED CT",
          "LOINC"
        ],
        "a": 0
      },
      {
        "q": "GMP stands for:",
        "options": [
          "Good Manufacturing Practice",
          "General Market Pricing",
          "Global Medical Protocol",
          "Government Mandated Process"
        ],
        "a": 0
      },
      {
        "q": "A \"patent cliff\" refers to:",
        "options": [
          "A new discovery breakthrough",
          "The revenue drop when a drug's patent protection expires",
          "A clinical trial failure",
          "A regulatory approval bonus"
        ],
        "a": 1
      },
      {
        "q": "Which stage comes right after successful Phase III results?",
        "options": [
          "Preclinical testing",
          "NDA/BLA regulatory filing",
          "Target validation",
          "Phase I"
        ],
        "a": 1
      },
      {
        "q": "Why is drug development considered high-cost and high-risk?",
        "options": [
          "Because manufacturing is always cheap",
          "Because most candidates fail during Phase II/III despite years of investment",
          "Because patients pay upfront",
          "Because there are no regulations"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "clinical-trials",
    "num": "03",
    "title": "Clinical Trials",
    "tagline": "Testing safety and efficacy in real patients",
    "accent": "pink",
    "icon": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"10\" y=\"6\" width=\"28\" height=\"37\" rx=\"3\"/><line x1=\"17\" y1=\"16\" x2=\"31\" y2=\"16\"/><line x1=\"17\" y1=\"24\" x2=\"31\" y2=\"24\"/><path d=\"M17 32 l4 4 9-9\"/></svg>",
    "objectives": [
      "Explain why clinical trials exist and what evidence they are designed to produce",
      "Describe the end-to-end trial process from protocol design to closeout",
      "Identify the key roles, standards and technology involved in running a trial"
    ],
    "modules": [
      {
        "title": "Introduction",
        "kind": "text",
        "text": "Clinical trials are the human-testing engine of medicine — the only accepted way regulators, physicians and patients can trust that a drug actually works and is safe enough to use. They sit directly inside the development lifecycle's Phase I through III, turning a promising candidate into evidence a regulator can act on. Without a well-run trial, even the most brilliant discovery never reaches a single patient."
      },
      {
        "title": "Business Overview",
        "kind": "text",
        "text": "This function exists to generate statistically valid evidence of safety and efficacy, under controlled, ethical and fully auditable conditions. Its objective is to answer a precise scientific question — does this treatment work, for whom, and at what risk — in a way that will withstand regulatory scrutiny. Real-world relevance is high: a single poorly designed or poorly run trial can delay a medicine by years or invalidate years of prior investment."
      },
      {
        "title": "End-to-End Process",
        "kind": "process",
        "text": "A trial moves from paper design to a locked, analyzable dataset.",
        "stages": [
          "Protocol Design",
          "Site Selection & Startup",
          "Recruitment & Consent",
          "Randomization & Treatment",
          "Data Collection & Monitoring",
          "Trial Closeout",
          "Statistical Analysis & CSR"
        ],
        "inputs": "A development plan, target patient population, and a scientific hypothesis to test.",
        "outputs": "A completed, ethically-conducted trial with a Clinical Study Report ready for regulatory submission.",
        "checkIdx": 2
      },
      {
        "title": "Key Terminologies",
        "kind": "glossary",
        "terms": [
          {
            "t": "Protocol",
            "d": "The formal document describing exactly how a trial will be conducted."
          },
          {
            "t": "Informed Consent",
            "d": "Ensuring participants understand and voluntarily agree to trial risks and procedures."
          },
          {
            "t": "Randomization",
            "d": "Assigning patients to treatment groups by chance to reduce bias."
          },
          {
            "t": "Placebo",
            "d": "An inactive treatment used as a comparison against the real drug."
          },
          {
            "t": "Blinding",
            "d": "Concealing treatment assignment from participants and/or investigators to reduce bias."
          },
          {
            "t": "Endpoint",
            "d": "The specific outcome measured to judge a trial's success — primary or secondary."
          },
          {
            "t": "Adverse Event (AE)",
            "d": "Any unwanted medical occurrence experienced by a trial participant."
          },
          {
            "t": "Investigator",
            "d": "The qualified individual responsible for conducting the trial at a site."
          },
          {
            "t": "IRB / Ethics Committee",
            "d": "The independent body that reviews and approves a trial for ethical soundness."
          },
          {
            "t": "CSR",
            "d": "Clinical Study Report — the comprehensive document reporting a trial's methods and results."
          }
        ]
      },
      {
        "title": "Stakeholders",
        "kind": "people",
        "roles": [
          {
            "role": "Sponsor",
            "desc": "The company funding and legally owning the trial."
          },
          {
            "role": "CRO",
            "desc": "A contracted organization running some or all trial operations."
          },
          {
            "role": "Principal Investigator",
            "desc": "The physician-scientist leading conduct of the trial at a site."
          },
          {
            "role": "Clinical Research Coordinator",
            "desc": "Manages day-to-day activities and patient visits at a site."
          },
          {
            "role": "IRB / Ethics Committee",
            "desc": "Approves and oversees the trial's ethical conduct."
          },
          {
            "role": "Biostatistician",
            "desc": "Designs the analysis plan and interprets the trial's results."
          }
        ],
        "consumers": "Regulators and treating physicians rely directly on trial evidence to approve and prescribe a medicine."
      },
      {
        "title": "Data Landscape",
        "kind": "data",
        "text": "Trials generate patient demographics, visit data, lab results, adverse event reports, and increasingly ePRO/eCOA data reported directly by patients.",
        "structured": "eCRF fields and structured lab values — designed to be entered, checked and analyzed consistently.",
        "unstructured": "Free-text adverse event narratives and site correspondence — essential context that resists simple tabulation.",
        "formats": [
          "SAS datasets (.sas7bdat)",
          "CSV",
          "HL7 messages",
          "PDF (site documents)"
        ],
        "challenges": [
          "Missing or delayed visit data",
          "Protocol deviations at sites",
          "Inconsistent site-level data entry habits",
          "Transcription errors from paper source documents"
        ]
      },
      {
        "title": "Industry Standards",
        "kind": "tags",
        "text": "Trials run on a tightly regulated foundation of process and data standards that keep them ethical and comparable.",
        "groups": [
          {
            "label": "Relevant Standards",
            "items": [
              "GCP (ICH-E6)",
              "CDISC — SDTM & CDASH"
            ]
          }
        ],
        "checkIdx": 6
      },
      {
        "title": "Technology Ecosystem",
        "kind": "tags",
        "text": "Purpose-built systems capture, randomize and monitor trial data in as close to real time as possible.",
        "groups": [
          {
            "label": "Common Technology",
            "items": [
              "EDC (Electronic Data Capture)",
              "CTMS",
              "eConsent",
              "IVRS / IWRS (randomization)"
            ]
          }
        ]
      },
      {
        "title": "Current Industry Challenges",
        "kind": "points",
        "text": "Operational execution, not scientific design, is often the hardest part of running a trial.",
        "items": [
          "Patient recruitment and retention remain the biggest bottleneck",
          "Protocol deviations at sites are common and costly",
          "Running a trial places heavy operational burden on sites",
          "Ensuring genuinely diverse trial populations is difficult"
        ]
      },
      {
        "title": "Role of Data Engineering & AI",
        "kind": "points",
        "text": "AI is being applied directly to the operational pain points sites and sponsors feel most.",
        "items": [
          "Predictive matching of patients to suitable trial sites",
          "Risk-based monitoring that focuses attention where it matters most",
          "Automated resolution of routine data queries",
          "Early anomaly detection across incoming trial data"
        ]
      },
      {
        "title": "Summary",
        "kind": "summary",
        "takeaways": [
          "Trials are the only accepted way to prove a drug works and is safe enough",
          "Randomization and blinding are the core defenses against bias",
          "GCP and CDISC keep trials ethical and comparable across sponsors",
          "Recruitment remains the industry's single biggest operational challenge"
        ]
      },
      {
        "title": "References",
        "kind": "references",
        "items": [
          "ICH-GCP (E6) guideline",
          "ClinicalTrials.gov — public trial registry",
          "CDISC.org standards library"
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the purpose of informed consent?",
        "options": [
          "To collect payment from patients",
          "To ensure participants understand and voluntarily agree to trial risks and procedures",
          "To randomize treatment assignment",
          "To close the database"
        ],
        "a": 1
      },
      {
        "q": "In a double-blind trial:",
        "options": [
          "Only the patient knows the treatment",
          "Only the investigator knows the treatment",
          "Neither patient nor investigator knows the treatment assignment",
          "Everyone knows the assignment"
        ],
        "a": 2
      },
      {
        "q": "A \"primary endpoint\" is:",
        "options": [
          "The trial's main measure of success",
          "The first patient enrolled",
          "The final regulatory filing",
          "The trial budget"
        ],
        "a": 0
      },
      {
        "q": "Who reviews a trial protocol for ethical soundness before it starts?",
        "options": [
          "Biostatistician",
          "IRB / Ethics Committee",
          "Data entry clerk",
          "Marketing team"
        ],
        "a": 1
      },
      {
        "q": "GCP stands for:",
        "options": [
          "Good Clinical Practice",
          "General Compound Profiling",
          "Global Coding Protocol",
          "Good Coding Process"
        ],
        "a": 0
      },
      {
        "q": "CDISC standards like SDTM/CDASH exist mainly to:",
        "options": [
          "Standardize how clinical trial data is collected and submitted",
          "Set drug prices",
          "Design molecules",
          "Track adverse events only"
        ],
        "a": 0
      },
      {
        "q": "An EDC system is used to:",
        "options": [
          "Manufacture drugs",
          "Electronically capture clinical trial data",
          "Approve regulatory filings",
          "Recruit ethics committee members"
        ],
        "a": 1
      },
      {
        "q": "Randomization in a trial is used to:",
        "options": [
          "Reduce bias by assigning treatment by chance",
          "Guarantee every patient gets the real drug",
          "Speed up regulatory review",
          "Replace informed consent"
        ],
        "a": 0
      },
      {
        "q": "What is documented in a Clinical Study Report (CSR)?",
        "options": [
          "The full results and analysis of a completed trial",
          "Only adverse events",
          "Only the marketing plan",
          "Only the patent filing"
        ],
        "a": 0
      },
      {
        "q": "Which of these is a common current challenge in clinical trials?",
        "options": [
          "Too many volunteers",
          "Patient recruitment and retention",
          "Excess funding",
          "Lack of any standards"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "clinical-data-management",
    "num": "04",
    "title": "Clinical Data Management",
    "tagline": "Turning trial data into analysis-ready evidence",
    "accent": "blue",
    "icon": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"24\" cy=\"10\" rx=\"14\" ry=\"5\"/><path d=\"M10 10v10c0 2.8 6.3 5 14 5s14-2.2 14-5V10\"/><path d=\"M10 20v9c0 2.8 6.3 5 14 5s14-2.2 14-5v-9\"/><path d=\"M10 29v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8\"/></svg>",
    "objectives": [
      "Explain the role clinical data management plays between data collection and statistical analysis",
      "Describe how raw site data becomes a clean, locked, standardized dataset",
      "Identify the standards and roles that keep trial data trustworthy"
    ],
    "modules": [
      {
        "title": "Introduction",
        "kind": "text",
        "text": "Clinical Data Management (CDM) is the quality-control layer sitting between \"data collected at a site\" and \"data a statistician can actually trust.\" Every number that ends up in a clinical study report has passed through CDM's hands — checked, queried, coded and reconciled. It rarely gets the spotlight, but a trial with brilliant science and sloppy data management still produces evidence nobody can rely on."
      },
      {
        "title": "Business Overview",
        "kind": "text",
        "text": "This function exists to ensure trial data is accurate, complete, consistent, and genuinely ready for statistical analysis and regulatory submission. Its objective is a clean, locked database delivered on time — because every downstream deadline, from analysis to filing, depends on it. Real-world relevance is direct: regulators can reject a submission if the underlying data isn't demonstrably trustworthy."
      },
      {
        "title": "End-to-End Process",
        "kind": "process",
        "text": "CDM runs largely in parallel with the trial itself, closing out shortly after the last patient visit.",
        "stages": [
          "CRF / eCRF Design",
          "Database Build & Validation",
          "Data Entry / Capture",
          "Data Cleaning & Queries",
          "Medical Coding",
          "SAE Reconciliation",
          "Database Lock",
          "Transfer for Analysis"
        ],
        "inputs": "Raw data entered from trial sites, lab results, and safety reports.",
        "outputs": "A clean, standardized, locked dataset ready for biostatistics and regulatory submission.",
        "checkIdx": 2
      },
      {
        "title": "Key Terminologies",
        "kind": "glossary",
        "terms": [
          {
            "t": "CRF / eCRF",
            "d": "The (electronic) Case Report Form used to collect patient data at each visit."
          },
          {
            "t": "Query / DCF",
            "d": "A Data Clarification Form raised when a discrepancy needs resolving with a site."
          },
          {
            "t": "Edit Check",
            "d": "An automated rule flagging inconsistent or out-of-range data during entry."
          },
          {
            "t": "SAE Reconciliation",
            "d": "Matching serious adverse event records between safety and clinical databases."
          },
          {
            "t": "Medical Coding",
            "d": "Translating reported terms into standardized dictionary codes, e.g. MedDRA."
          },
          {
            "t": "Data Lock",
            "d": "Freezing a clean database once it is finalized for statistical analysis."
          },
          {
            "t": "SDTM",
            "d": "A CDISC standard for structuring trial data for regulatory submission."
          },
          {
            "t": "CDASH",
            "d": "A CDISC standard for how data is collected on case report forms."
          },
          {
            "t": "Source Data Verification (SDV)",
            "d": "Confirming entered data matches the original source documents."
          },
          {
            "t": "Audit Trail",
            "d": "A time-stamped record of every change made to study data."
          }
        ]
      },
      {
        "title": "Stakeholders",
        "kind": "people",
        "roles": [
          {
            "role": "Data Manager",
            "desc": "Owns database design and drives the data-cleaning process."
          },
          {
            "role": "CRA / Monitor",
            "desc": "Verifies data quality and protocol compliance at trial sites."
          },
          {
            "role": "Biostatistician",
            "desc": "Consumes the locked, clean dataset to run the analysis."
          },
          {
            "role": "Medical Coder",
            "desc": "Standardizes reported terms into recognized medical dictionaries."
          },
          {
            "role": "Statistical Programmer",
            "desc": "Builds submission-ready datasets from the locked database."
          }
        ],
        "consumers": "Biostatistics, regulatory submission teams and health authorities all depend on CDM's clean output."
      },
      {
        "title": "Data Landscape",
        "kind": "data",
        "text": "CDM works with eCRF entries, query logs, coding dictionaries, automated edit-check outputs, and full audit trails of every change.",
        "structured": "Coded fields and structured lab values — the backbone of a submission-ready dataset.",
        "unstructured": "Free-text comments and query resolution notes — necessary context that has to be read, not just counted.",
        "formats": [
          "SDTM datasets",
          "XML / ODM",
          "CSV exports"
        ],
        "challenges": [
          "Duplicate patient records",
          "Late data entry from sites",
          "Incomplete SAE reconciliation",
          "Inconsistent medical coding decisions"
        ]
      },
      {
        "title": "Industry Standards",
        "kind": "tags",
        "text": "CDM lives at the intersection of clinical process and data engineering discipline, governed by standards that make data comparable across studies.",
        "groups": [
          {
            "label": "Relevant Standards",
            "items": [
              "CDISC — CDASH & SDTM",
              "MedDRA & WHO Drug Dictionary",
              "21 CFR Part 11"
            ]
          }
        ],
        "checkIdx": 6
      },
      {
        "title": "Technology Ecosystem",
        "kind": "tags",
        "text": "Purpose-built platforms handle capture, cleaning and coding at the scale a modern trial demands.",
        "groups": [
          {
            "label": "Common Technology",
            "items": [
              "EDC Systems",
              "Data Management Platforms",
              "Coding Software"
            ]
          }
        ]
      },
      {
        "title": "Current Industry Challenges",
        "kind": "points",
        "text": "Most CDM challenges come down to timing and reconciliation across disconnected systems.",
        "items": [
          "Late or missing data arriving from sites",
          "Reconciling records across multiple disconnected systems",
          "Backlogs in manual medical coding",
          "Repetitive, manual query cycles with sites"
        ]
      },
      {
        "title": "Role of Data Engineering & AI",
        "kind": "points",
        "text": "AI is starting to take over the most repetitive parts of the cleaning cycle.",
        "items": [
          "Automated anomaly and outlier detection across incoming data",
          "NLP-assisted medical coding of free-text terms",
          "Intelligent, auto-generated data queries",
          "Predictive prioritization of which data to clean first"
        ]
      },
      {
        "title": "Summary",
        "kind": "summary",
        "takeaways": [
          "CDM is the quality gate between raw site data and trustworthy evidence",
          "Queries and coding turn messy entries into clean, standardized data",
          "SDTM and CDASH make trial data comparable across studies and sponsors",
          "A locked database is the finish line for this whole function"
        ]
      },
      {
        "title": "References",
        "kind": "references",
        "items": [
          "CDISC.org — standards library",
          "MedDRA MSSO — coding dictionary resources"
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the main goal of Clinical Data Management?",
        "options": [
          "Design new molecules",
          "Ensure trial data is accurate, complete and analysis-ready",
          "Approve drug pricing",
          "Recruit patients"
        ],
        "a": 1
      },
      {
        "q": "A query or DCF is issued when:",
        "options": [
          "A patient completes the trial",
          "A data discrepancy needs clarification from the site",
          "The database is locked",
          "A drug is approved"
        ],
        "a": 1
      },
      {
        "q": "Medical coding in CDM commonly uses:",
        "options": [
          "MedDRA and WHO Drug Dictionary",
          "HTML and CSS",
          "ICD-10 only",
          "No coding standard"
        ],
        "a": 0
      },
      {
        "q": "\"Database lock\" refers to:",
        "options": [
          "Encrypting a hospital's servers",
          "Freezing the trial database once it's clean and ready for analysis",
          "Blocking patient enrollment",
          "A security breach"
        ],
        "a": 1
      },
      {
        "q": "SDTM is a CDISC standard used for:",
        "options": [
          "Structuring data for regulatory submission",
          "Manufacturing quality control",
          "Marketing analytics",
          "Employee onboarding"
        ],
        "a": 0
      },
      {
        "q": "Source Data Verification (SDV) checks that:",
        "options": [
          "Entered data matches original source documents",
          "A drug is safe",
          "A patient consented",
          "A molecule binds its target"
        ],
        "a": 0
      },
      {
        "q": "CDASH standardizes:",
        "options": [
          "How data is collected on case report forms",
          "How drugs are priced",
          "How trials are advertised",
          "How employees are trained"
        ],
        "a": 0
      },
      {
        "q": "Which role typically resolves data discrepancies with trial sites?",
        "options": [
          "Data manager / CRA",
          "Medicinal chemist",
          "Patent attorney",
          "Warehouse manager"
        ],
        "a": 0
      },
      {
        "q": "21 CFR Part 11 relates to:",
        "options": [
          "Electronic records and signatures",
          "Drug pricing rules",
          "Patient recruitment quotas",
          "Molecule screening"
        ],
        "a": 0
      },
      {
        "q": "Why is an audit trail important in CDM systems?",
        "options": [
          "It tracks every change made to data for accountability",
          "It speeds up manufacturing",
          "It replaces informed consent",
          "It sets the drug's label"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "pharmacovigilance",
    "num": "05",
    "title": "Pharmacovigilance",
    "tagline": "Watching over medicines after they reach patients",
    "accent": "mint",
    "icon": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 4 L41 11 V23 C41 35 33 41 24 45 C15 41 7 35 7 23 V11 Z\"/><path d=\"M14 25 h6 l3 -6 4 10 3 -6 h6\"/></svg>",
    "objectives": [
      "Explain why drug safety monitoring continues long after approval",
      "Describe how an adverse event becomes a validated safety signal",
      "Identify the key standards, roles and technology in modern PV"
    ],
    "modules": [
      {
        "title": "Introduction",
        "kind": "text",
        "text": "Pharmacovigilance (PV) is the safety net that keeps watching a medicine for its entire life, long after clinical trials end. Trials of a few thousand patients can never reveal every rare side effect that only shows up once millions of people take a drug in the real world. PV is how the industry — and regulators — keep learning about a medicine's safety profile for as long as it stays on the market."
      },
      {
        "title": "Business Overview",
        "kind": "text",
        "text": "This function exists to detect, assess, understand and prevent adverse effects of medicines — protecting patients while fulfilling a legal obligation companies owe to regulators everywhere their drug is sold. Its objective is simple to state: never miss a genuine new safety concern, and never overreact to noise. Real-world relevance is constant, since every marketed drug generates a continuous stream of new safety information to interpret."
      },
      {
        "title": "End-to-End Process",
        "kind": "process",
        "text": "PV runs as a continuous cycle for as long as a drug remains on the market.",
        "stages": [
          "AE Intake",
          "Case Triage & Entry",
          "Medical Review & Coding",
          "Causality Assessment",
          "Regulatory Reporting",
          "Signal Detection",
          "RMP Updates"
        ],
        "inputs": "Spontaneous reports, literature, clinical trial data, and social/media monitoring of adverse events.",
        "outputs": "Timely regulatory safety reports and an updated risk management plan for the medicine.",
        "checkIdx": 2
      },
      {
        "title": "Key Terminologies",
        "kind": "glossary",
        "terms": [
          {
            "t": "Adverse Event (AE)",
            "d": "Any unfavorable medical occurrence in a patient taking a medicine."
          },
          {
            "t": "Adverse Drug Reaction (ADR)",
            "d": "A harmful reaction judged to be caused by the medicine itself."
          },
          {
            "t": "Serious Adverse Event (SAE)",
            "d": "An AE resulting in death, hospitalization, disability or similarly serious outcome."
          },
          {
            "t": "Signal",
            "d": "New information suggesting a possible new causal link between a drug and an event."
          },
          {
            "t": "Causality Assessment",
            "d": "A structured evaluation of how likely a drug caused a reported event."
          },
          {
            "t": "ICSR",
            "d": "An Individual Case Safety Report describing a single adverse event case."
          },
          {
            "t": "PSUR / PBRER",
            "d": "A periodic report summarizing a drug's evolving benefit-risk profile."
          },
          {
            "t": "Risk Management Plan (RMP)",
            "d": "A plan describing how a company will monitor and minimize a drug's risks."
          },
          {
            "t": "MedDRA",
            "d": "The standard medical dictionary used to code adverse event terms."
          },
          {
            "t": "Literature Surveillance",
            "d": "Systematically scanning published literature for new safety information."
          }
        ]
      },
      {
        "title": "Stakeholders",
        "kind": "people",
        "roles": [
          {
            "role": "Safety Physician",
            "desc": "Reviews and assesses case seriousness and causality."
          },
          {
            "role": "Case Processor",
            "desc": "Enters and triages incoming adverse event reports."
          },
          {
            "role": "Signal Management Team",
            "desc": "Analyzes patterns across cases to spot new risks."
          },
          {
            "role": "QPPV",
            "desc": "The Qualified Person for Pharmacovigilance — the accountable safety officer."
          },
          {
            "role": "Regulatory Affairs",
            "desc": "Files the required safety reports with health authorities."
          }
        ],
        "consumers": "Health authorities and prescribing physicians act directly on new safety information PV produces."
      },
      {
        "title": "Data Landscape",
        "kind": "data",
        "text": "PV works with individual case reports, published literature, social and media monitoring feeds, and spontaneous reports from patients and prescribers.",
        "structured": "Coded MedDRA terms and structured case fields — built for aggregation and signal detection.",
        "unstructured": "Free-text narratives, physician notes and literature abstracts — where the real clinical nuance often lives.",
        "formats": [
          "E2B(R3) XML",
          "PDF (literature & case narratives)",
          "CSV"
        ],
        "challenges": [
          "Detecting duplicate cases across sources",
          "Incomplete case narratives",
          "Translation issues across regions and languages",
          "Reporting delays from patients and prescribers"
        ]
      },
      {
        "title": "Industry Standards",
        "kind": "tags",
        "text": "PV is governed by some of the most globally harmonized standards in life sciences, keeping safety reporting consistent worldwide.",
        "groups": [
          {
            "label": "Relevant Standards",
            "items": [
              "ICH-E2 series",
              "GVP (Good Pharmacovigilance Practices)",
              "E2B(R3) reporting format"
            ]
          }
        ],
        "checkIdx": 6
      },
      {
        "title": "Technology Ecosystem",
        "kind": "tags",
        "text": "Dedicated safety systems capture, code and analyze case volumes that keep growing every year.",
        "groups": [
          {
            "label": "Common Technology",
            "items": [
              "Safety Databases",
              "Signal Detection Analytics",
              "Literature-Monitoring Tools"
            ]
          }
        ]
      },
      {
        "title": "Current Industry Challenges",
        "kind": "points",
        "text": "The core challenge in PV is separating a genuine new risk from ordinary background noise, at growing scale.",
        "items": [
          "Rapidly growing volumes of adverse event reports",
          "Underreporting from patients and prescribers",
          "Detecting duplicate cases across sources",
          "Separating real safety signals from statistical noise"
        ]
      },
      {
        "title": "Role of Data Engineering & AI",
        "kind": "points",
        "text": "AI is being used to keep pace with case volumes that would overwhelm manual review alone.",
        "items": [
          "NLP-based case intake from literature and social channels",
          "Automated case triage and initial coding",
          "AI-assisted signal detection across very large datasets"
        ]
      },
      {
        "title": "Summary",
        "kind": "summary",
        "takeaways": [
          "PV protects patients for the entire life of a medicine, not just during trials",
          "Signals turn scattered reports into genuinely new safety knowledge",
          "MedDRA and E2B(R3) keep global safety reporting consistent",
          "AI is accelerating case intake and signal detection at scale"
        ]
      },
      {
        "title": "References",
        "kind": "references",
        "items": [
          "WHO — Uppsala Monitoring Centre",
          "ICH — E2 guideline series on pharmacovigilance"
        ]
      }
    ],
    "quiz": [
      {
        "q": "What is the main purpose of pharmacovigilance?",
        "options": [
          "Discover new drug targets",
          "Detect, assess and prevent adverse effects of marketed medicines",
          "Negotiate drug prices",
          "Design clinical trial protocols"
        ],
        "a": 1
      },
      {
        "q": "An ICSR is:",
        "options": [
          "An Individual Case Safety Report describing a single adverse event",
          "A manufacturing certificate",
          "A patent filing",
          "A trial recruitment form"
        ],
        "a": 0
      },
      {
        "q": "A \"signal\" in PV refers to:",
        "options": [
          "A confirmed cure",
          "New information suggesting a possible causal link between a drug and an adverse event",
          "A marketing campaign",
          "A regulatory approval"
        ],
        "a": 1
      },
      {
        "q": "Serious Adverse Events (SAEs) typically require:",
        "options": [
          "No reporting",
          "Expedited regulatory reporting",
          "Only annual reporting",
          "No medical review"
        ],
        "a": 1
      },
      {
        "q": "A PSUR/PBRER is:",
        "options": [
          "A periodic safety report summarizing a drug's benefit-risk profile",
          "A patent document",
          "A manufacturing batch record",
          "A clinical trial consent form"
        ],
        "a": 0
      },
      {
        "q": "Which coding dictionary is standard in pharmacovigilance?",
        "options": [
          "MedDRA",
          "HTML",
          "SNOMED only",
          "No dictionary is used"
        ],
        "a": 0
      },
      {
        "q": "GVP stands for:",
        "options": [
          "Good (Pharmaco)vigilance Practices",
          "Global Value Pricing",
          "General Verification Protocol",
          "Government Vaccine Program"
        ],
        "a": 0
      },
      {
        "q": "Why can trials alone never catch every side effect?",
        "options": [
          "Trials are too long",
          "Trials involve far fewer patients than the general population after launch",
          "Trials don't use documentation",
          "Trials only test healthy people"
        ],
        "a": 1
      },
      {
        "q": "E2B(R3) is a standard for:",
        "options": [
          "Electronic exchange of adverse event case reports",
          "Drug manufacturing",
          "Clinical trial randomization",
          "Employee training"
        ],
        "a": 0
      },
      {
        "q": "How is AI increasingly used in pharmacovigilance?",
        "options": [
          "Manufacturing tablets",
          "NLP-based case intake and signal detection from large data volumes",
          "Setting drug prices",
          "Designing lab equipment"
        ],
        "a": 1
      }
    ]
  },
  {
    "id": "healthcare-data-standards",
    "num": "06",
    "title": "Healthcare Data Standards",
    "tagline": "The shared language that lets health data connect",
    "accent": "violet",
    "icon": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"6\" width=\"15\" height=\"15\" rx=\"2.5\"/><rect x=\"27\" y=\"6\" width=\"15\" height=\"15\" rx=\"2.5\"/><rect x=\"6\" y=\"27\" width=\"15\" height=\"15\" rx=\"2.5\"/><rect x=\"27\" y=\"27\" width=\"15\" height=\"15\" rx=\"2.5\"/><line x1=\"21\" y1=\"13.5\" x2=\"27\" y2=\"13.5\"/><line x1=\"13.5\" y1=\"21\" x2=\"13.5\" y2=\"27\"/><line x1=\"34.5\" y1=\"21\" x2=\"34.5\" y2=\"27\"/><line x1=\"21\" y1=\"34.5\" x2=\"27\" y2=\"34.5\"/></svg>",
    "objectives": [
      "Explain why standardized data is essential for interoperability in life sciences",
      "Distinguish which standard serves which purpose (clinical care vs. trials vs. coding)",
      "Identify current adoption challenges and where AI can help"
    ],
    "modules": [
      {
        "title": "Introduction",
        "kind": "text",
        "text": "Standards are the invisible plumbing that let a lab result, a claims record, and a clinical trial database all mean the same thing to every system that touches them. Without shared standards, healthcare data is a tower of incompatible dialects — a \"heart attack\" coded five different ways across five different systems is nearly impossible to analyze together. Standards are what make large-scale healthcare and research data actually usable."
      },
      {
        "title": "Business Overview",
        "kind": "text",
        "text": "This function exists to make data interoperable, comparable and submission-ready across organizations, countries and systems. Its objective is fewer manual translations and faster, safer data exchange — whether that's a hospital sharing records with a specialist, or a pharma company submitting trial data to a regulator. Real-world relevance shows up every time two systems need to \"talk\" and actually understand each other."
      },
      {
        "title": "End-to-End Process",
        "kind": "process",
        "text": "Unlike a linear R&D pipeline, standards work is about consistent mapping at every point data moves.",
        "stages": [
          "Data Origination",
          "Terminology Mapping",
          "Conformance Validation",
          "Exchange / Integration",
          "Downstream Analytics & Submission"
        ],
        "inputs": "Raw data from EHRs, lab systems, and clinical trial platforms in varied native formats.",
        "outputs": "Standardized, interoperable data that any conforming system can consume and trust.",
        "checkIdx": 2
      },
      {
        "title": "Key Terminologies",
        "kind": "glossary",
        "terms": [
          {
            "t": "HL7",
            "d": "A family of standards for exchanging clinical and administrative health data."
          },
          {
            "t": "FHIR",
            "d": "A modern HL7 standard for fast, web-friendly health data exchange."
          },
          {
            "t": "EHR",
            "d": "Electronic Health Record — a digital patient record maintained by a provider."
          },
          {
            "t": "CDISC",
            "d": "The standards body/format defining how clinical trial data is structured for submission."
          },
          {
            "t": "MedDRA",
            "d": "Standard terminology for coding adverse events and medical history."
          },
          {
            "t": "LOINC",
            "d": "A standard code set for identifying laboratory tests and observations."
          },
          {
            "t": "SNOMED CT",
            "d": "A comprehensive clinical terminology used to code diagnoses and findings."
          },
          {
            "t": "ICD-10",
            "d": "The standard code set used to classify diseases and diagnoses."
          },
          {
            "t": "Interoperability",
            "d": "The ability of different systems to exchange and meaningfully use data."
          },
          {
            "t": "Ontology",
            "d": "A structured, machine-readable model of concepts and relationships in a domain."
          }
        ]
      },
      {
        "title": "Stakeholders",
        "kind": "people",
        "roles": [
          {
            "role": "Health IT / Informatics Team",
            "desc": "Implements and maintains standards across systems."
          },
          {
            "role": "Data Steward",
            "desc": "Governs how terminologies and codes are applied consistently."
          },
          {
            "role": "EHR Vendor",
            "desc": "Builds systems that must conform to shared standards."
          },
          {
            "role": "Regulatory Data Reviewer",
            "desc": "Checks submissions for standard compliance."
          },
          {
            "role": "Biopharma Data Team",
            "desc": "Maps internal data to shared standards for exchange."
          }
        ],
        "consumers": "Any downstream system or organization exchanging health data ultimately relies on this standardization."
      },
      {
        "title": "Data Landscape",
        "kind": "data",
        "text": "This space spans EHR records, lab results, claims data, and clinical trial data that all need to be mapped into shared standards.",
        "structured": "Coded diagnosis and lab fields — the parts of a record most ready for standardized exchange.",
        "unstructured": "Physician notes and discharge summaries — clinically rich, but written in free text.",
        "formats": [
          "HL7 v2 messages",
          "FHIR JSON / XML",
          "CSV",
          "CDISC datasets"
        ],
        "challenges": [
          "Inconsistent code versions in use at once",
          "Incomplete mapping between legacy and modern formats",
          "Legacy format proliferation across old systems",
          "Regional variation in which standards are adopted"
        ]
      },
      {
        "title": "Industry Standards",
        "kind": "tags",
        "text": "Different standards serve different jobs — knowing which one applies where is the core skill in this space.",
        "groups": [
          {
            "label": "Key Standards",
            "items": [
              "HL7 / FHIR",
              "CDISC (SDTM / ADaM)",
              "LOINC",
              "SNOMED CT",
              "ICD-10"
            ]
          }
        ],
        "checkIdx": 6
      },
      {
        "title": "Technology Ecosystem",
        "kind": "tags",
        "text": "Integration platforms and terminology services do the heavy lifting of keeping systems mutually understandable.",
        "groups": [
          {
            "label": "Common Technology",
            "items": [
              "EHR Platforms",
              "Terminology Servers",
              "Data Integration Engines"
            ]
          }
        ]
      },
      {
        "title": "Current Industry Challenges",
        "kind": "points",
        "text": "Adoption, not the existence of standards, is usually the harder problem.",
        "items": [
          "Deeply fragmented legacy systems",
          "Inconsistent standard adoption across regions",
          "Heavy manual effort required for mapping",
          "Multiple standard versions in use simultaneously"
        ]
      },
      {
        "title": "Role of Data Engineering & AI",
        "kind": "points",
        "text": "AI is easing the burden of connecting old data to modern standards.",
        "items": [
          "Automated terminology mapping between systems",
          "NLP extraction of codes from unstructured clinical notes",
          "Ontology-assisted harmonization of disparate datasets"
        ]
      },
      {
        "title": "Summary",
        "kind": "summary",
        "takeaways": [
          "Standards let disconnected systems finally speak the same language",
          "Different standards serve different jobs — HL7/FHIR for care, CDISC for trials, LOINC/SNOMED/ICD for coding",
          "Interoperability is a business enabler, not just an IT concern",
          "AI is easing the burden of mapping legacy data to modern standards"
        ]
      },
      {
        "title": "References",
        "kind": "references",
        "items": [
          "HL7.org",
          "CDISC.org",
          "U.S. National Library of Medicine terminology resources"
        ]
      }
    ],
    "quiz": [
      {
        "q": "Why do healthcare data standards matter?",
        "options": [
          "They make data interoperable and comparable across systems",
          "They set drug prices",
          "They replace clinical trials",
          "They are optional decoration"
        ],
        "a": 0
      },
      {
        "q": "HL7/FHIR standards are mainly used for:",
        "options": [
          "Chemical structure drawing",
          "Exchanging clinical healthcare data between systems",
          "Patent filing",
          "Molecule screening"
        ],
        "a": 1
      },
      {
        "q": "SDTM and ADaM are CDISC standards used specifically for:",
        "options": [
          "Clinical trial data submission to regulators",
          "Hospital billing only",
          "Drug advertising",
          "Employee records"
        ],
        "a": 0
      },
      {
        "q": "LOINC is a standard primarily for:",
        "options": [
          "Coding laboratory test names and results",
          "Coding diagnoses",
          "Coding adverse events only",
          "Coding patents"
        ],
        "a": 0
      },
      {
        "q": "SNOMED CT is best described as:",
        "options": [
          "A comprehensive clinical terminology / ontology",
          "A billing code set only",
          "A manufacturing standard",
          "A trial randomization method"
        ],
        "a": 0
      },
      {
        "q": "ICD-10 is most commonly used to code:",
        "options": [
          "Diagnoses",
          "Lab methods only",
          "Chemical structures",
          "Manufacturing batches"
        ],
        "a": 0
      },
      {
        "q": "\"Interoperability\" means:",
        "options": [
          "Systems that cannot share data",
          "The ability of different systems to exchange and use data meaningfully",
          "A single vendor's proprietary format",
          "A type of adverse event"
        ],
        "a": 1
      },
      {
        "q": "Which standard family is most relevant to clinical trial regulatory submissions specifically?",
        "options": [
          "CDISC",
          "HL7 FHIR only",
          "SNOMED CT only",
          "None"
        ],
        "a": 0
      },
      {
        "q": "A common challenge in adopting healthcare data standards is:",
        "options": [
          "Too much standardization already",
          "Fragmented legacy systems and inconsistent adoption",
          "Lack of any data",
          "Excess funding"
        ],
        "a": 1
      },
      {
        "q": "How can AI help with healthcare data standards?",
        "options": [
          "Automating terminology mapping and extracting codes from unstructured notes",
          "Replacing all standards entirely",
          "Manufacturing drugs",
          "Designing molecules"
        ],
        "a": 0
      }
    ]
  },
  {
    "id": "data-integrity",
    "num": "07",
    "title": "Data Integrity & Digital Transformation",
    "tagline": "Trustworthy data, modern tools",
    "accent": "blue",
    "icon": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M39 15a17 17 0 1 0 2.5 12\"/><path d=\"M39 6v10h-10\"/><path d=\"M17 24 l4.5 4.5 9-9\"/></svg>",
    "objectives": [
      "Explain the ALCOA+ principles and why data integrity underpins every other function",
      "Describe how organizations modernize legacy data processes responsibly",
      "Identify where governance, AI and automation intersect in this space"
    ],
    "modules": [
      {
        "title": "Introduction",
        "kind": "text",
        "text": "Every course in this repository quietly assumes the underlying data can be trusted. Data integrity is the discipline that actually earns that trust, and digital transformation is how life sciences organizations are modernizing the tools that protect it. Get this wrong, and every downstream decision — a discovery insight, a trial result, a safety signal — is built on sand."
      },
      {
        "title": "Business Overview",
        "kind": "text",
        "text": "This function exists to guarantee that data is attributable, legible, contemporaneous, original and accurate — and complete, consistent, enduring and available — across its entire lifecycle, while modernizing legacy manual processes into connected digital ones. Its objective is simple: never let speed or new technology come at the cost of trustworthy data. Real-world relevance is constant, since regulators can — and do — reject submissions built on unreliable data."
      },
      {
        "title": "End-to-End Process",
        "kind": "process",
        "text": "Data integrity is a lifecycle discipline layered underneath a modernization roadmap.",
        "stages": [
          "Data Creation",
          "Processing",
          "Review & QC",
          "Storage / Archival",
          "Retrieval / Reporting"
        ],
        "inputs": "Raw data generated across discovery, trials, safety and manufacturing systems.",
        "outputs": "Trustworthy, audit-ready data — and, over time, a modernized digital operating model built on top of it.",
        "checkIdx": 2
      },
      {
        "title": "Key Terminologies",
        "kind": "glossary",
        "terms": [
          {
            "t": "ALCOA+",
            "d": "Data must be Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available."
          },
          {
            "t": "Audit Trail",
            "d": "A record of who changed what data, and when."
          },
          {
            "t": "21 CFR Part 11",
            "d": "The FDA regulation governing electronic records and signatures."
          },
          {
            "t": "Data Governance",
            "d": "The policies and accountability structures that manage data as a trusted asset."
          },
          {
            "t": "Data Lineage",
            "d": "The traceable history of where data came from and how it was transformed."
          },
          {
            "t": "Validation (CSV)",
            "d": "Documented proof that a computer system reliably does what it's meant to do."
          },
          {
            "t": "Chain of Custody",
            "d": "A documented trail proving who handled data or samples, and when."
          },
          {
            "t": "Metadata",
            "d": "Data that describes other data, such as when or how it was captured."
          },
          {
            "t": "Legacy System",
            "d": "An older system still in use, often difficult to integrate with modern tools."
          },
          {
            "t": "Digital Maturity",
            "d": "How far an organization has moved from manual, siloed processes to connected digital ones."
          }
        ]
      },
      {
        "title": "Stakeholders",
        "kind": "people",
        "roles": [
          {
            "role": "Quality Assurance",
            "desc": "Audits data and processes against compliance requirements."
          },
          {
            "role": "IT / Data Governance Team",
            "desc": "Sets policy for how data is managed across the organization."
          },
          {
            "role": "Compliance / Regulatory Affairs",
            "desc": "Ensures regulatory expectations are actually being met."
          },
          {
            "role": "Business Process Owner",
            "desc": "Owns the specific workflow being digitized."
          },
          {
            "role": "Executive Sponsor",
            "desc": "Champions and funds the transformation effort."
          }
        ],
        "consumers": "Every downstream function in this repository depends on the trustworthy data this work protects."
      },
      {
        "title": "Data Landscape",
        "kind": "data",
        "text": "This function touches audit trails, validation documentation, system metadata, and logs generated across every other system in the organization.",
        "structured": "Database records with rich metadata — built to prove exactly what happened, when, and by whom.",
        "unstructured": "Scanned paper records, emails and meeting notes — common in organizations still mid-transformation.",
        "formats": [
          "PDF/A (archival)",
          "CSV (exports)",
          "Database exports",
          "XML (metadata)"
        ],
        "challenges": [
          "Legacy paper-based records still in active use",
          "Incomplete metadata capture at the point of creation",
          "Fragmented audit trails across disconnected systems",
          "Version conflicts during system migration"
        ]
      },
      {
        "title": "Industry Standards",
        "kind": "tags",
        "text": "Governance and modern tooling have to move together, not in sequence, and these standards set the bar for both.",
        "groups": [
          {
            "label": "Relevant Standards",
            "items": [
              "21 CFR Part 11 & Annex 11",
              "ALCOA+",
              "GxP"
            ]
          }
        ],
        "checkIdx": 6
      },
      {
        "title": "Technology Ecosystem",
        "kind": "tags",
        "text": "Cloud and automation tools now do much of the heavy lifting that manual processes used to require.",
        "groups": [
          {
            "label": "Common Technology",
            "items": [
              "Cloud Platforms (AWS / Azure / GCP)",
              "Data Warehouses & Lakes",
              "RPA",
              "GenAI Copilots"
            ]
          }
        ]
      },
      {
        "title": "Current Industry Challenges",
        "kind": "points",
        "text": "The hardest part of transformation is rarely the technology — it's everything around it.",
        "items": [
          "Deeply embedded legacy systems",
          "Cultural resistance to changing established processes",
          "Validation overhead for every new tool introduced",
          "Balancing innovation speed with compliance requirements"
        ]
      },
      {
        "title": "Role of Data Engineering & AI",
        "kind": "points",
        "text": "AI and data engineering are becoming teammates in compliance work, not replacements for the humans who own it.",
        "items": [
          "Automating generation of validation evidence",
          "Continuous, automated data-quality monitoring",
          "GenAI-assisted documentation and reporting",
          "Agentic automation of repetitive compliance tasks, under human review"
        ]
      },
      {
        "title": "Summary",
        "kind": "summary",
        "takeaways": [
          "ALCOA+ is the test every trustworthy dataset should pass",
          "Digital transformation only works if data integrity comes first",
          "Governance and validation aren't red tape — they're what makes automation safe",
          "GenAI and agentic tools are becoming teammates in compliance work, not replacements for it"
        ]
      },
      {
        "title": "References",
        "kind": "references",
        "items": [
          "FDA — Data Integrity guidance for industry",
          "ISPE GAMP 5 — guide for validating computerized systems"
        ]
      }
    ],
    "quiz": [
      {
        "q": "ALCOA+ is a set of principles ensuring data is:",
        "options": [
          "Attributable, Legible, Contemporaneous, Original, Accurate (plus Complete, Consistent, Enduring, Available)",
          "Cheap, Fast, Simple",
          "Encrypted only",
          "Marketing-ready"
        ],
        "a": 0
      },
      {
        "q": "21 CFR Part 11 governs:",
        "options": [
          "Electronic records and electronic signatures",
          "Drug pricing",
          "Patient recruitment",
          "Molecule screening"
        ],
        "a": 0
      },
      {
        "q": "An audit trail primarily provides:",
        "options": [
          "A record of who changed what data and when",
          "A marketing report",
          "A manufacturing batch number",
          "A patient consent form"
        ],
        "a": 0
      },
      {
        "q": "Data lineage refers to:",
        "options": [
          "The origin and transformation history of a piece of data",
          "A company's org chart",
          "A drug's chemical structure",
          "A patient's family history"
        ],
        "a": 0
      },
      {
        "q": "Computer System Validation (CSV) exists to:",
        "options": [
          "Prove a system consistently does what it's intended to do",
          "Speed up hiring",
          "Replace clinical trials",
          "Set drug prices"
        ],
        "a": 0
      },
      {
        "q": "Digital transformation in life sciences often involves:",
        "options": [
          "Avoiding all new technology",
          "Migrating legacy systems to cloud platforms and automating manual work",
          "Removing all compliance checks",
          "Ignoring data quality"
        ],
        "a": 1
      },
      {
        "q": "Data governance is best described as:",
        "options": [
          "The policies and accountability structures that manage data as an asset",
          "A type of adverse event",
          "A clinical trial phase",
          "A manufacturing certificate"
        ],
        "a": 0
      },
      {
        "q": "RPA stands for:",
        "options": [
          "Robotic Process Automation",
          "Regulatory Process Approval",
          "Real Patient Analytics",
          "Rapid Protocol Amendment"
        ],
        "a": 0
      },
      {
        "q": "A key challenge in digital transformation projects is:",
        "options": [
          "Too little legacy technology",
          "Balancing innovation speed with validation and compliance requirements",
          "No data exists",
          "Excess simplicity"
        ],
        "a": 1
      },
      {
        "q": "How can GenAI/agentic AI best support data integrity work?",
        "options": [
          "By replacing all human oversight entirely",
          "By automating documentation, quality monitoring and repetitive compliance tasks under human review",
          "By eliminating audit trails",
          "By removing the need for governance"
        ],
        "a": 1
      }
    ]
  }
];


export type AccentName = "mint" | "pink" | "violet" | "blue";

export interface GlossaryTerm {
  t: string;
  d: string;
}
export interface PersonRole {
  role: string;
  desc: string;
}
export interface TagGroup {
  label: string;
  items: string[];
}

export type ModuleKind =
  | "text"
  | "process"
  | "glossary"
  | "people"
  | "data"
  | "tags"
  | "points"
  | "summary"
  | "references";

export interface CourseModule {
  title: string;
  kind: ModuleKind;
  text?: string;
  // process
  stages?: string[];
  inputs?: string;
  outputs?: string;
  checkIdx?: number;
  // glossary
  terms?: GlossaryTerm[];
  // people
  roles?: PersonRole[];
  consumers?: string;
  // data
  structured?: string;
  unstructured?: string;
  formats?: string[];
  challenges?: string[];
  // tags
  groups?: TagGroup[];
  // points / references / summary
  items?: string[];
  takeaways?: string[];
}

export interface QuizQuestion {
  q: string;
  options: string[];
  a: number;
}

export interface Course {
  id: string;
  num: string;
  title: string;
  tagline: string;
  accent: AccentName;
  icon: string;
  objectives: string[];
  modules: CourseModule[];
  quiz: QuizQuestion[];
}

export const ACCENTS: Record<AccentName, string> = {
  mint: "#10b981",
  pink: "#db2777",
  violet: "#7c3aed",
  blue: "#2563eb",
};

// Light-purple themed accent palette (each course keeps a distinct hue but
// tuned to sit harmoniously on a white + light-purple canvas).
export const ACCENT_SOFT: Record<AccentName, { hex: string; soft: string; tint: string }> = {
  mint: { hex: "#0d9488", soft: "#5eead4", tint: "rgba(13,148,136,0.10)" },
  pink: { hex: "#db2777", soft: "#f9a8d4", tint: "rgba(219,39,119,0.10)" },
  violet: { hex: "#7c3aed", soft: "#c4b5fd", tint: "rgba(124,58,237,0.10)" },
  blue: { hex: "#2563eb", soft: "#93c5fd", tint: "rgba(37,99,235,0.10)" },
};

export const COURSES = COURSES_DATA as Course[];

export interface DomainExplainer {
  text: string;
  fact: string;
}
export const DOMAIN_EXPLAINERS = DOMAIN_EXPLAINERS_DATA as Record<string, DomainExplainer>;

export interface Enrollment {
  name: string;
  modulesDone: number;
  timeMin: number;
}
export const ENROLLMENTS = ENROLLMENTS_DATA as Record<string, Enrollment[]>;

export function findCourse(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}

export const TOTAL_MODULES = COURSES.reduce((s, c) => s + c.modules.length, 0);