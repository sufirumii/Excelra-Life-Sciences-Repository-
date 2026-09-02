// Theme Deep-Dives — researched induction briefings for the seven Orientation
// themes. Written so a new joiner from ANY domain can genuinely understand
// each function: what it is, why it exists, how it works end to end, who does
// it, which standards govern it, where it struggles, and where AI fits in.
// Images are real web-researched visuals stored in /public/excelra/themes.

export interface DeepDiveStage {
  name: string;
  desc: string;
}

export interface DeepDiveTerm {
  t: string;
  d: string;
}

export interface DeepDivePerson {
  role: string;
  desc: string;
}

export interface DeepDiveStandard {
  name: string;
  desc: string;
}

export interface ThemeDeepDive {
  id: string;
  headline: string;
  standfirst: string;
  heroImage: string;
  heroCaption: string;
  heroCredit: string;
  intro: string[];
  whyMatters: { title: string; desc: string }[];
  stages: DeepDiveStage[];
  stagesNote: string;
  inlineImage: { src: string; caption: string; credit: string };
  terms: DeepDiveTerm[];
  people: DeepDivePerson[];
  standards: DeepDiveStandard[];
  challenges: string[];
  ai: string[];
  fact: string;
  excelra: string;
  sources: string[];
  readMinutes: number;
}

export const THEME_DEEP_DIVES: Record<string, ThemeDeepDive> = {
  "drug-discovery": {
    id: "drug-discovery",
    headline: "Finding the one molecule worth a decade of work",
    standfirst:
      "Drug discovery is where every medicine begins — the search for a biological target and a chemical that can act on it. It is the most uncertain, most data-hungry, and most computationally driven stage of the entire pharmaceutical value chain.",
    heroImage: "/excelra/themes/drug-discovery-hero.jpg",
    heroCaption:
      "High-throughput screening: a multichannel pipette loading a 96-well plate so thousands of candidate compounds can be tested against a disease target at once.",
    heroCredit: "Photo: web research · laboratory automation",
    intro: [
      "Every medicine on a pharmacy shelf started here. Drug discovery is the earliest stage of medicine-making: scientists first identify a biological target — usually a protein or enzyme that plays a role in a disease — and then search enormous libraries of chemical compounds for one that interacts with that target in the right way. Almost none of this work involves patients; it happens in laboratories, in cell cultures, and increasingly inside computers.",
      "The search is brutal in its attrition. A single screening campaign can test over a million compounds, and a medicinal chemistry team may spend years refining 'hits' into 'leads' — tweaking molecular structures to improve potency, selectivity, and safety signals. Roughly nine out of ten candidates that enter this stage will not survive it, and that is considered normal, not failure. Discovery is designed to kill weak candidates cheaply, before they can become expensive failures later.",
      "What makes modern discovery different is data. Genome-scale biology gives researchers thousands of potential targets, robotic screening generates millions of experimental results, and computational chemistry simulates how molecules behave long before they are synthesized. Teams that can organize, curate, and learn from this data discover faster — which is exactly why data-focused companies like Excelra exist in this space.",
    ],
    whyMatters: [
      {
        title: "It sets the ceiling for everything after",
        desc: "No amount of good development, trials, or regulatory work can fix a poorly validated target. The quality of discovery decisions echoes through the next 10–15 years of a molecule's life.",
      },
      {
        title: "It is where most attrition happens",
        desc: "The infamous '90% failure rate' of drugs is concentrated here. Understanding why candidates fail — efficacy, toxicity, ADMET issues — explains the entire shape of the industry's economics.",
      },
      {
        title: "It is the most data-intensive stage",
        desc: "Genomics, proteomics, screening assays, SAR datasets, chemical databases — discovery runs on structured scientific data, which is why informatics partners are embedded in it.",
      },
    ],
    stages: [
      {
        name: "Target identification",
        desc: "Scientists pinpoint the biological molecule — a receptor, enzyme, or gene product — that drives the disease and could plausibly be acted on by a drug.",
      },
      {
        name: "Target validation",
        desc: "The target is tested in cells and animal models to confirm that modulating it actually changes the disease state. Most target hypotheses fail here, which is cheap and intentional.",
      },
      {
        name: "Hit discovery / screening",
        desc: "Libraries of hundreds of thousands to millions of compounds are screened — robotically in wet-lab high-throughput screening (HTS) or virtually with docking simulations — to find 'hits' that bind the target.",
      },
      {
        name: "Hit-to-lead",
        desc: "Hits are clustered, confirmed, and triaged. Medicinal chemists synthesize analogs of the most promising series and check that activity holds up outside the original assay.",
      },
      {
        name: "Lead optimization",
        desc: "Lead structures are iteratively refined to balance potency, selectivity, and early ADMET (absorption, metabolism, toxicity) properties. Structure–activity relationship (SAR) data guides every change.",
      },
      {
        name: "Candidate selection",
        desc: "One optimized molecule is chosen as the preclinical candidate, documented in a data package, and handed over to the development organization for safety testing and first-in-human work.",
      },
    ],
    stagesNote:
      "A typical journey from target to selected candidate takes 3–6 years and produces terabytes of experimental and computational data along the way.",
    inlineImage: {
      src: "/excelra/themes/drug-discovery-screening.jpg",
      caption:
        "How compounds are screened today: target-based assays, phenotypic screens, transporter and GPCR assays, protein degradation approaches, and multiplexed screens — each generating large, structured datasets.",
      credit: "Graphic: Technology Networks (web research)",
    },
    terms: [
      {
        t: "Target",
        d: "The biological molecule (usually a protein) whose activity a drug is designed to increase, block, or modify.",
      },
      {
        t: "Hit",
        d: "A compound showing the desired activity in a primary screen — interesting, but far from a medicine.",
      },
      {
        t: "Lead compound",
        d: "A validated hit family member with improved potency and early safety properties, used as the template for optimization.",
      },
      {
        t: "SAR",
        d: "Structure–activity relationship: the mapped relationship between a molecule's chemical structure and its biological effect — the core dataset of medicinal chemistry.",
      },
      {
        t: "HTS",
        d: "High-throughput screening: robotic testing of massive compound libraries against a target, often in 96-, 384-, or 1536-well plates.",
      },
      {
        t: "ADMET",
        d: "Absorption, Distribution, Metabolism, Excretion, Toxicity — the profile that predicts how a compound behaves in a living body.",
      },
    ],
    people: [
      {
        role: "Target biology / genomics scientists",
        desc: "Identify and validate disease targets using genetics, cell biology, and disease models.",
      },
      {
        role: "Medicinal chemists",
        desc: "Design, synthesize, and refine candidate molecules, guided by SAR data.",
      },
      {
        role: "Computational / in-silico chemists",
        desc: "Run virtual screens, docking simulations, and QSAR models to prioritize what gets made and tested.",
      },
      {
        role: "Data curators & informaticians",
        desc: "Structure screening results, chemical properties, and published SAR into databases the whole discovery organization can query — a core Excelra strength.",
      },
    ],
    standards: [
      {
        name: "IUPAC / InChI chemical identifiers",
        desc: "Standard representations so the same molecule is described identically across every database and publication.",
      },
      {
        name: "SDF / Molfile formats",
        desc: "The workhorse file formats for storing and exchanging chemical structures and their annotations.",
      },
      {
        name: "Assay annotation standards (e.g., BioAssay Ontology)",
        desc: "Shared vocabularies that make screening results comparable across campaigns, sites, and vendors.",
      },
      {
        name: "Public knowledgebases (ChEMBL, PubChem, PDB)",
        desc: "Curated public SAR, compound, and protein-structure resources that commercial databases like GOSTAR™ extend with manually curated literature data.",
      },
    ],
    challenges: [
      "Data volumes explode faster than teams can curate them — screening, omics, and imaging data often sit in silos that don't talk to each other.",
      "SAR knowledge is scattered across patents, journals, and internal reports; extracting it reliably still needs human scientific judgment.",
      "Novel modalities (degraders, biologics, RNA drugs) break the assumptions of classic small-molecule datasets and workflows.",
    ],
    ai: [
      "Machine-learning models now propose molecules with desired properties and predict ADMET liabilities before synthesis, cutting late-stage surprises.",
      "Generative chemistry and structure-prediction tools (e.g., AlphaFold-class models) are reshaping how targets and binders are found.",
      "AI still needs curated, high-quality training data — which is why data curation and standardized SAR databases remain foundational.",
    ],
    fact: "Roughly 9 out of 10 discovery candidates never make it past this stage — that's expected, not a failure. The pipeline is designed to filter early and cheaply.",
    excelra:
      "Excelra's flagship GOSTAR™ database curates 10.6M+ small molecules and 35M+ SAR data points from patents and literature, and GOSTAR™ TPD tracks 45,000+ degraders — giving discovery chemists the structured evidence base modern screening and AI models depend on.",
    sources: [
      "Nature Reviews Drug Discovery — attrition analyses",
      "ChEMBL / PubChem documentation on bioassay data standards",
      "Excelra GOSTAR™ product literature (excelra.com)",
    ],
    readMinutes: 6,
  },

  "drug-lifecycle": {
    id: "drug-lifecycle",
    headline: "Ten to fifteen years from molecule to medicine",
    standfirst:
      "The drug development lifecycle is the full regulated journey a molecule takes after discovery: preclinical safety testing, three phases of human trials, formal review by health authorities, and lifelong monitoring after approval. Every function in this repository lives somewhere along this line.",
    heroImage: "/excelra/themes/drug-lifecycle-hero.jpg",
    heroCaption:
      "From candidate to shelf: approved molecules are manufactured at scale under strict GMP conditions — but reaching that line takes a decade of gated, evidence-building work.",
    heroCredit: "Photo: web research · pharmaceutical manufacturing",
    intro: [
      "Discovery hands over a promising candidate molecule; development turns it into an approvable medicine. That transformation is one of the most regulated industrial processes on earth. Before any human can receive an experimental drug, it must pass preclinical testing — laboratory and animal studies checking safety, dosing, and biological activity — and the results are compiled into an Investigational New Drug (IND) application that a regulator must accept.",
      "Human testing then proceeds through three escalating phases: Phase I checks safety and dosing in a small group of healthy volunteers (typically 20–100 people), Phase II explores whether the drug works and refines the dose in a few hundred patients, and Phase III confirms efficacy and monitors rarer side effects in hundreds to thousands of patients, often across many countries. Success at every gate leads to a formal marketing application — an NDA in the US or a BLA for biologics — which regulators like the FDA or EMA review for a year or more.",
      "Approval is not the end. Phase IV studies and routine pharmacovigilance watch the medicine in the real world for as long as it stays on the market, and manufacturing, labeling, and supply all remain under continuous regulatory control. The full journey typically takes 10–15 years and can cost well over $1 billion per approved drug — a figure that explains why the industry is obsessive about efficiency, data quality, and avoiding late-stage failure.",
    ],
    whyMatters: [
      {
        title: "It is the map of the industry",
        desc: "Almost every role in a life sciences company — and every course in this repository — attaches to a specific gate on this timeline. Knowing the map tells you who depends on your work and when.",
      },
      {
        title: "It explains the industry's economics",
        desc: "Massive upfront cost, long timelines, high failure rates, and a finite patent window after approval — this is why药品 pricing, exclusivity, and 'patent cliff' conversations dominate boardrooms.",
      },
      {
        title: "Regulators gate every transition",
        desc: "The FDA, EMA, and other agencies do not just judge the final product; they must approve each transition — IND, phase moves, filing, approval — making regulatory strategy a core discipline.",
      },
    ],
    stages: [
      {
        name: "Preclinical",
        desc: "Laboratory and animal studies establish pharmacology, toxicology, and manufacturing feasibility — the safety evidence required before human dosing.",
      },
      {
        name: "IND filing",
        desc: "The Investigational New Drug application packages all preclinical data, the trial plan, and manufacturing information for regulatory review. Human trials may begin only once it is cleared.",
      },
      {
        name: "Phase I",
        desc: "First-in-human testing in a small group of healthy volunteers (or patients for oncology): safety, tolerability, pharmacokinetics, and safe dosing ranges.",
      },
      {
        name: "Phase II",
        desc: "A few hundred patients test whether the drug shows the intended effect and help identify the right dose and regimen for confirmatory testing.",
      },
      {
        name: "Phase III",
        desc: "Large, often global, confirmatory trials in hundreds to thousands of patients generate the statistical evidence of efficacy and safety that submissions are built on.",
      },
      {
        name: "NDA / BLA filing",
        desc: "The formal marketing application — hundreds of thousands of pages of data, analyses, and manufacturing detail — is assembled and submitted to health authorities.",
      },
      {
        name: "Approval",
        desc: "Regulators review the evidence (including site inspections); approval grants the license to market, with a label defining approved use.",
      },
      {
        name: "Phase IV",
        desc: "Post-marketing studies and routine safety surveillance continue for the drug's commercial life, sometimes uncovering new uses or new risks.",
      },
    ],
    stagesNote:
      "Each arrow on this timeline is a regulatory gate — teams plan years ahead for the data package each gate demands.",
    inlineImage: {
      src: "/excelra/themes/drug-lifecycle-preclinical.jpg",
      caption:
        "Inside the preclinical phase: disease target selection, compound screening, lead optimization, and efficacy/safety/formulation work — the last scientific gateway before first-in-human trials.",
      credit: "Graphic: Nature (web research)",
    },
    terms: [
      {
        t: "IND",
        d: "Investigational New Drug application — the regulatory request that allows an experimental drug to be given to humans.",
      },
      {
        t: "NDA / BLA",
        d: "New Drug Application (small molecules) / Biologics License Application (biologics) — the submissions that request permission to market a medicine.",
      },
      {
        t: "Patent cliff",
        d: "The sharp revenue drop when patents expire and generic/biosimilar competition enters — the commercial clock that hangs over every development decision.",
      },
      {
        t: "Orphan drug designation",
        d: "Special regulatory status for drugs targeting rare diseases, granting incentives like extended exclusivity and fee waivers.",
      },
      {
        t: "Label",
        d: "The regulator-approved description of what a drug treats, how it is dosed, and what risks must be communicated — legally binding for marketing and use.",
      },
      {
        t: "Fast Track",
        d: "An FDA designation that accelerates review for drugs addressing serious conditions and filling unmet needs.",
      },
    ],
    people: [
      {
        role: "Development project managers",
        desc: "Orchestrate the cross-functional plan across every gate, keeping preclinical, clinical, regulatory, and manufacturing work synchronized.",
      },
      {
        role: "Regulatory affairs leads",
        desc: "Own the strategy and documentation for IND/NDA/BLA interactions and maintain the dialogue with health authorities.",
      },
      {
        role: "Nonclinical / toxicology scientists",
        desc: "Generate the preclinical safety package that justifies first-in-human exposure.",
      },
      {
        role: "Clinical operations & biostatistics teams",
        desc: "Design and run the Phase I–III program and turn raw trial data into the statistical evidence reviewers evaluate.",
      },
    ],
    standards: [
      {
        name: "ICH guidelines (E6, M3, Q-series)",
        desc: "The harmonized global rulebook for clinical safety reporting, nonclinical study design, and quality — followed by regulators worldwide.",
      },
      {
        name: "GLP / GCP / GMP",
        desc: "Good Laboratory, Clinical, and Manufacturing Practice — the quality systems governing each lifecycle stage.",
      },
      {
        name: "eCTD submission format",
        desc: "The electronic Common Technical Document structure every major regulator requires for marketing applications.",
      },
      {
        name: "CTD Modules 2–5",
        desc: "The standardized sections (quality, nonclinical, clinical) that organize the entire evidence package for review.",
      },
    ],
    challenges: [
      "Timelines keep slipping: protocol complexity and patient recruitment difficulties push development costs higher every decade.",
      "The evidence package spans dozens of systems and vendors; keeping data consistent from preclinical to filing is a massive information-management challenge.",
      "Regulatory expectations evolve mid-program (new safety guidance, expedited pathways), forcing teams to replan without losing momentum.",
    ],
    ai: [
      "Predictive toxicology and in-silico screening reduce the animal and human studies needed before critical gates.",
      "AI-assisted protocol design and site selection shorten Phase II–III timelines; synthetic control arms are being explored for rare diseases.",
      "Machine learning helps assemble and quality-check the enormous eCTD submission package, flagging inconsistencies before regulators do.",
    ],
    fact: "The full journey typically takes 10–15 years and can cost well over $1 billion per approved drug — and most of that cost is sunk into candidates that never make it.",
    excelra:
      "Excelra supports clients across this whole arc — from discovery-stage SAR data (GOSTAR™) to clinical and regulatory data services — so the evidence chain from molecule to approval stays connected and inspectable.",
    sources: [
      "FDA — The Drug Development Process (step-by-step overview)",
      "EMA — From laboratory to patient: the medicine development timeline",
      "Tufts CSDD — cost and duration of new drug development studies",
    ],
    readMinutes: 7,
  },

  "clinical-trials": {
    id: "clinical-trials",
    headline: "Testing in humans — carefully, ethically, statistically",
    standfirst:
      "Clinical trials are structured, tightly regulated studies in real patients or volunteers that answer one question: does this treatment work, and is it safe enough? They are the only accepted way to turn a biological hypothesis into medical practice.",
    heroImage: "/excelra/themes/clinical-trials-hero.jpg",
    heroCaption:
      "Investigator and participants: trials depend on informed, willing patients and clinicians following a written protocol to the letter.",
    heroCredit: "Photo: web research · clinical research",
    intro: [
      "A clinical trial is not informal experimentation — it is a meticulously designed experiment. Everything is fixed in advance by a protocol: who can enroll, what tests are done, how treatment is assigned, and what will be measured to decide success or failure. An independent ethics committee must approve the protocol before any patient is approached, and every participant signs informed consent — an ongoing conversation, not a one-time signature.",
      "To keep results trustworthy, trials use randomization (chance decides who gets the investigational treatment vs. a comparator), blinding (patients and often investigators don't know who receives what), and pre-defined endpoints (the measurements that will judge the drug, chosen before data is seen). These design choices exist because human judgment is surprisingly easy to bias, and regulators will only accept evidence that has ruled out wishful thinking.",
      "Running a trial is a global logistics operation: sites are selected and initiated in multiple countries, patients are recruited and followed for months or years, adverse events are recorded continuously, and monitoring teams verify that the data at every site matches the source records. A single Phase III trial can enroll thousands of patients across dozens of countries at once — generating both the evidence for approval and enormous volumes of clinical data that downstream teams (like the clinical data managers you'll meet next) must tame.",
    ],
    whyMatters: [
      {
        title: "They are the currency of medical proof",
        desc: "Regulators approve, guidelines recommend, and insurers reimburse based on trial evidence. No trial, no medicine — however promising the science.",
      },
      {
        title: "Ethics is engineered into the design",
        desc: "Consent, independent review, and the duty to monitor safety continuously make trials a model of research ethics — and a legal obligation, not a courtesy.",
      },
      {
        title: "They generate the industry's most valuable data",
        desc: "Every data point a trial collects is potential regulatory evidence, which is why data quality and integrity are enforced so fiercely at this stage.",
      },
    ],
    stages: [
      {
        name: "Protocol design",
        desc: "Scientists and biostatisticians fix the trial's question, population, endpoints, and analysis plan in a binding document approved by ethics committees.",
      },
      {
        name: "Site selection & startup",
        desc: "Hospitals and clinics are evaluated, contracts signed, staff trained, and regulatory approvals secured before the first patient can be screened.",
      },
      {
        name: "Recruitment & consent",
        desc: "Eligible patients are identified, fully informed, and enrolled — one of the hardest, slowest steps; slow recruitment is the number-one cause of delayed trials.",
      },
      {
        name: "Randomization & treatment",
        desc: "Enrolled participants are randomized (and usually blinded) to investigational product or comparator, then dosed per protocol.",
      },
      {
        name: "Data collection & monitoring",
        desc: "Visits, labs, and adverse events are recorded; independent monitors verify data against source documents and watch safety accumulating in real time.",
      },
      {
        name: "Trial closeout",
        desc: "Last patient out, final visits completed, sites closed, and the database cleaned and locked for analysis.",
      },
      {
        name: "Statistical analysis & CSR",
        desc: "The pre-planned analyses are executed and compiled into the Clinical Study Report — the document regulators read to judge the evidence.",
      },
    ],
    stagesNote:
      "Phases I → III take 6–7 years on average; each trial may involve hundreds of staff across sites, CROs, and the sponsor's own teams.",
    inlineImage: {
      src: "/excelra/themes/clinical-trials-consent.jpg",
      caption:
        "Informed consent in practice: the investigator explains purpose, risks, and alternatives in plain language — and participation can be withdrawn at any time, without consequence.",
      credit: "Photo: web research · patient consultation",
    },
    terms: [
      {
        t: "Protocol",
        d: "The binding master plan of a trial — objectives, design, eligibility, procedures, and statistics. Deviating from it is a compliance finding.",
      },
      {
        t: "Informed consent",
        d: "The documented process by which a participant voluntarily agrees to join after understanding the study's risks and purpose.",
      },
      {
        t: "Randomization",
        d: "Assigning participants to treatment groups by chance, eliminating selection bias in who receives the investigational drug.",
      },
      {
        t: "Blinding",
        d: "Concealing treatment assignment from participants, staff, or assessors so expectations cannot influence outcomes.",
      },
      {
        t: "Endpoint",
        d: "The pre-defined measurement (e.g., tumor shrinkage, symptom score) used to judge whether the treatment worked.",
      },
      {
        t: "Adverse event (AE)",
        d: "Any unfavorable symptom or illness occurring during the trial — recorded whether or not it seems related to the drug.",
      },
    ],
    people: [
      {
        role: "Sponsor / clinical team",
        desc: "The company (or CRO on its behalf) that designs, funds, and oversees the trial and owns the data.",
      },
      {
        role: "Principal investigator & site staff",
        desc: "The physician at each site who is legally responsible for patient care, protocol adherence, and ethical conduct.",
      },
      {
        role: "Ethics committee / IRB",
        desc: "The independent body that protects participants by approving protocols, consent materials, and any amendments.",
      },
      {
        role: "Monitors & clinical research associates",
        desc: "Field professionals who verify site conduct, check source data, and keep the trial inspection-ready.",
      },
    ],
    standards: [
      {
        name: "ICH-GCP (E6 R3)",
        desc: "Good Clinical Practice — the international quality standard for designing, running, and documenting trials.",
      },
      {
        name: "Declaration of Helsinki",
        desc: "The ethical foundation for research with humans: participant welfare above all other interests.",
      },
      {
        name: "CDISC (CDASH / SDTM)",
        desc: "Standard formats for collecting and submitting clinical data so regulators can review it efficiently.",
      },
      {
        name: "ClinicalTrials.gov / CTIS registration",
        desc: "Mandatory public registration of trial designs and results — transparency enforced by law in many regions.",
      },
    ],
    challenges: [
      "Recruitment: around 80% of trials miss enrollment timelines; diverse, representative participation remains an industry-wide struggle.",
      "Protocol complexity keeps rising — more procedures, more visits, more data per patient — burdening sites and increasing error risk.",
      "Decentralized elements (wearables, home nursing, telehealth) add novel data types that traditional trial systems weren't built for.",
    ],
    ai: [
      "AI matches eligible patients to trials from electronic health records, attacking the recruitment bottleneck directly.",
      "Risk-based monitoring models focus human reviewers on the sites and data most likely to hide real problems.",
      "Natural-language processing drafts protocols and extracts eligibility criteria, compressing weeks of start-up paperwork.",
    ],
    fact: "A single Phase III trial can enroll thousands of patients across dozens of countries at once — and every one of those patients' data points must be accounted for.",
    excelra:
      "Excelra's clinical data teams work one step behind trials like these — standardizing, coding, and validating the data they generate so sponsors can submit confidently. The next card explains exactly how.",
    sources: [
      "FDA — Inside Clinical Trials / ICH-GCP guidance",
      "NIH ClinicalTrials.gov — trial design primer",
      "Tufts CSDD — protocol complexity & recruitment studies",
    ],
    readMinutes: 7,
  },

  "clinical-data-management": {
    id: "clinical-data-management",
    headline: "Turning raw trial data into trustworthy evidence",
    standfirst:
      "Clinical Data Management (CDM) is the quality-control layer between a trial site and a statistician. Every data point a trial collects — visit notes, lab results, adverse events — gets checked, queried, coded, and standardized here before anyone can trust it enough to analyze or submit to a regulator.",
    heroImage: "/excelra/themes/cdm-hero.jpg",
    heroCaption:
      "Data review in practice: CDM teams work through trial databases visit by visit, resolving inconsistencies before a single analysis is run.",
    heroCredit: "Photo: web research · data review meeting",
    intro: [
      "When a nurse at a trial site types a patient's blood pressure into an electronic case report form (eCRF), that number is not yet evidence — it is raw data with a long way to go. Clinical Data Management is the discipline that gets it there. CDM teams design the data-collection instruments, build validation logic into the database, and then run the daily cycle of checking incoming data, raising queries to sites, and reconciling discrepancies until the dataset is clean.",
      "A large part of the work is medical coding: translating free-text terms like 'stomach pain' or 'heart attack' into standardized dictionary terms (MedDRA for adverse events, WHO Drug for medications) so that millions of records become countable, comparable categories. Another core task is SAE reconciliation — cross-checking the safety database against the clinical database so that every serious adverse event appears identically in both.",
      "The stage ends with database lock: a formal, audited moment when the cleaned dataset is frozen and handed to biostatistics for analysis. Nothing moves downstream until CDM certifies the data. A single mid-size trial can generate hundreds of thousands of individual data points, and regulators inspect CDM work routinely — an undocumented change or an unexplained discrepancy can jeopardize an entire submission. That is why CDM runs on standards (CDISC's CDASH and SDTM), validation documentation, and audit trails for every edit.",
    ],
    whyMatters: [
      {
        title: "Analysis is only as good as the data underneath",
        desc: "A brilliant statistical analysis of dirty data still produces the wrong answer. CDM is why regulators trust the numbers in a submission at all.",
      },
      {
        title: "It protects years of trial investment",
        desc: "Data issues discovered late can force re-analysis or re-submission. Rigorous CDM is cheap insurance for a billion-dollar program.",
      },
      {
        title: "It is a data-craft profession",
        desc: "CDM blends medicine, logic, and data engineering — and it is one of the most globally outsourced, process-mature functions in our industry.",
      },
    ],
    stages: [
      {
        name: "CRF / eCRF design",
        desc: "The data-collection forms are designed (per CDASH standards) so every visit, lab, and event is captured consistently and completely.",
      },
      {
        name: "Database build & validation",
        desc: "The trial database is constructed with edit checks — automatic rules that flag impossible values like a systolic pressure of 5 or a visit before consent.",
      },
      {
        name: "Data entry / capture",
        desc: "Site data flows in from eCRFs, labs, and devices; CDM tracks receipt, completeness, and consistency daily.",
      },
      {
        name: "Data cleaning & queries",
        desc: "Discrepancies become queries sent to sites: 'Please confirm the date' / 'Value differs from source — please correct.' Every issue is documented and resolved.",
      },
      {
        name: "Medical coding",
        desc: "Free-text terms are coded to MedDRA and WHO Drug dictionaries, turning narrative text into analyzable categories.",
      },
      {
        name: "SAE reconciliation",
        desc: "The safety and clinical databases are compared record by record so every serious adverse event matches in both.",
      },
      {
        name: "Database lock",
        desc: "After final quality checks, the database is frozen with full audit documentation — no more changes, deliberately.",
      },
      {
        name: "Transfer for analysis",
        desc: "The locked data is converted to SDTM standard datasets and handed to biostatistics for the official analysis.",
      },
    ],
    stagesNote:
      "CDM runs in parallel with the entire trial — cleaning from the first patient in, so the lock is a formality rather than a crisis.",
    inlineImage: {
      src: "/excelra/themes/cdm-audit.jpg",
      caption:
        "Audit trail review — a real CDM activity: modern platforms surface every data change (who, when, why) so reviewers can confirm nothing was altered without explanation.",
      credit: "Screenshot: Medidata Clinical Data Studio (web research)",
    },
    terms: [
      {
        t: "CRF / eCRF",
        d: "(Electronic) Case Report Form — the structured form through which each site reports every observation about a participant.",
      },
      {
        t: "Query / DCF",
        d: "A formal question raised about data (Data Clarification Form) that the site must answer or correct — the daily currency of data cleaning.",
      },
      {
        t: "Edit check",
        d: "An automated validation rule in the database that flags missing, out-of-range, or inconsistent values at the moment of entry.",
      },
      {
        t: "Medical coding",
        d: "Mapping free-text clinical terms to standard dictionaries (MedDRA, WHO Drug) so data becomes countable and comparable.",
      },
      {
        t: "Database lock",
        d: "The controlled, documented freezing of the final dataset before statistical analysis — a regulatory milestone.",
      },
      {
        t: "SDV",
        d: "Source Data Verification — checking that what the database says matches the patient's actual medical records.",
      },
    ],
    people: [
      {
        role: "Data managers",
        desc: "Own the data plan, database specification, cleaning progress, and the final lock for each study.",
      },
      {
        role: "Coders / medical reviewers",
        desc: "Translate narrative terms into dictionary codes and review medically ambiguous entries.",
      },
      {
        role: "Database programmers / build specialists",
        desc: "Configure eCRFs, edit checks, and data flows in platforms like Medidata Rave or Veeva.",
      },
      {
        role: "Outsourced CDM service teams",
        desc: "Specialist providers (like Excelra) that scale coding, cleaning, and reconciliation capacity for sponsors worldwide.",
      },
    ],
    standards: [
      {
        name: "CDISC CDASH",
        desc: "The standard for how data-collection forms are structured, so collection aligns with submission formats from day one.",
      },
      {
        name: "CDISC SDTM",
        desc: "The standard in which locked data must be delivered to regulators — every submission dataset follows it.",
      },
      {
        name: "MedDRA & WHO Drug dictionaries",
        desc: "The controlled vocabularies for adverse events and medications, updated twice yearly and version-controlled per study.",
      },
      {
        name: "21 CFR Part 11 / Annex 11",
        desc: "The electronic-records regulations requiring validated systems, audit trails, and controlled electronic signatures.",
      },
    ],
    challenges: [
      "Data volume and variety are exploding — wearables, imaging, and patient-reported apps now feed the same database as traditional CRFs.",
      "Manual review doesn't scale: query cycles between sites and data managers remain the slowest loop in the whole trial.",
      "Standards evolve (SDTM updates, dictionary releases), so legacy studies must be managed carefully to stay submission-ready.",
    ],
    ai: [
      "Machine learning pre-fills probable codes and flags anomalies, letting human coders focus on genuinely ambiguous cases.",
      "Intelligent query triage predicts which discrepancies matter, cutting query volumes dramatically.",
      "NLP reads clinical narratives to extract events and inconsistencies that structured checks miss.",
    ],
    fact: "A single mid-size trial can generate hundreds of thousands of individual data points — every one of them checked, queried, coded, and locked before analysis.",
    excelra:
      "Clinical data services are one of Excelra's core delivery lines: teams of coders, data reviewers, and standards specialists support sponsors' CDM workloads end to end — this is a very common first assignment for new joiners.",
    sources: [
      "SCDM — Society for Clinical Data Management, Good Clinical Data Management Practices",
      "CDISC — CDASH & SDTM implementation guides",
      "FDA guidance — electronic systems and records in clinical investigations",
    ],
    readMinutes: 7,
  },

  pharmacovigilance: {
    id: "pharmacovigilance",
    headline: "Keeping medicines safe for as long as they exist",
    standfirst:
      "Pharmacovigilance (PV) is the ongoing safety watch that continues for as long as a medicine stays on the market. Clinical trials only ever involve a limited number of patients — PV is how rare side effects that surface only once millions of people take a drug are detected, assessed, and acted on.",
    heroImage: "/excelra/themes/pv-hero.jpg",
    heroCaption:
      "Signal hunting: safety teams scrutinize reports, literature, and databases — searching for the rare pattern that trials could never have seen.",
    heroCredit: "Photo: web research · safety surveillance",
    intro: [
      "Before approval, a drug may have been studied in a few thousand carefully selected patients. After approval, it will be taken by millions — including the elderly, pregnant women, children, and people on five other medications. Rare adverse reactions (those occurring in fewer than 1 in 10,000 patients) are statistically almost invisible in trials, so detecting them requires a permanent, global monitoring system. That system is pharmacovigilance.",
      "The engine of PV is the individual case safety report (ICSR): when a doctor, pharmacist, or patient reports a suspected reaction, it enters a formal workflow — intake, triage, coding to MedDRA, medical review, causality assessment, and, where required, expedited reporting to regulators (within 15 days for serious unexpected events in most jurisdictions). Millions of these cases flow into global databases like the FDA's FAERS and the WHO's VigiBase every year.",
      "Individual cases matter most in aggregate. Safety teams continuously run signal detection — statistical and clinical analysis of case clusters, literature, and increasingly real-world data — to determine whether a reported reaction is a true drug effect. A validated signal can change a label, trigger a risk-management plan, prompt a targeted study, or in extreme cases lead to withdrawal. PV is therefore not paperwork: it is the system that quietly decides whether a medicine's benefits continue to outweigh its harms.",
    ],
    whyMatters: [
      {
        title: "Trials can never see the full safety picture",
        desc: "With rare risks, only population-scale exposure reveals the truth. PV is the safety net that makes approval of new medicines responsible at all.",
      },
      {
        title: "It is a strict legal obligation",
        desc: "Companies must run continuous surveillance and report serious events within fixed deadlines — failures bring fines, restrictions, or criminal liability.",
      },
      {
        title: "It protects patients and the product",
        desc: "Early detection turns potential crises into managed label updates. Trust in a medicine — and its market — depends on visible, credible safety stewardship.",
      },
    ],
    stages: [
      {
        name: "AE intake",
        desc: "Reports arrive from every direction — call centers, field staff, regulators, literature, patient apps — and are captured with source documents.",
      },
      {
        name: "Case triage & entry",
        desc: "Cases are checked for seriousness and validity, prioritized, and entered into the safety database as structured ICSRs.",
      },
      {
        name: "Medical review & coding",
        desc: "Safety physicians review the narrative, code events to MedDRA, and ensure the story of each case is medically coherent.",
      },
      {
        name: "Causality assessment",
        desc: "For each event: could this drug plausibly have caused it? Standardized criteria (temporal relationship, dechallenge, alternatives) produce the assessed relatedness.",
      },
      {
        name: "Regulatory reporting",
        desc: "Serious unexpected cases are submitted to authorities on strict clocks (commonly 15 days); periodic summary reports (PSUR/PBRER) update the benefit-risk picture.",
      },
      {
        name: "Signal detection",
        desc: "Aggregate analysis of case data, statistics, literature, and real-world evidence to find new or changing risks worth formal evaluation.",
      },
      {
        name: "RMP updates",
        desc: "Risk Management Plans are revised — additional studies, targeted surveillance, or controlled-access programs reduce the newly identified risks.",
      },
    ],
    stagesNote:
      "Speed matters: a serious unexpected case typically has a 15-day regulatory clock from first awareness — which is why PV teams run 24/7 follow-the-sun.",
    inlineImage: {
      src: "/excelra/themes/pv-signals.jpg",
      caption:
        "From case to signal: individual reports are the raw material; validated signals emerge only when patterns survive statistical and clinical scrutiny.",
      credit: "Illustration: web research · drug safety concept",
    },
    terms: [
      {
        t: "ADR",
        d: "Adverse Drug Reaction — a harmful event judged causally related to the drug (as opposed to any adverse event, related or not).",
      },
      {
        t: "ICSR",
        d: "Individual Case Safety Report — the structured record of one patient's suspected reaction, the workhorse unit of PV.",
      },
      {
        t: "Signal",
        d: "Information suggesting a new causal association (or a change in a known one) that is judged sufficiently strong to warrant verification and action.",
      },
      {
        t: "Causality assessment",
        d: "The structured medical judgment of how plausibly the drug caused the event in a specific patient.",
      },
      {
        t: "PSUR / PBRER",
        d: "The periodic report evaluating a product's global benefit-risk balance for regulators.",
      },
      {
        t: "RMP",
        d: "Risk Management Plan — the documented strategy for minimizing a product's known and potential risks.",
      },
    ],
    people: [
      {
        role: "Drug safety physicians",
        desc: "Medical doctors who review cases, assess causality, and own the scientific safety narrative.",
      },
      {
        role: "Case processing specialists",
        desc: "Teams that intake, triage, enter, and follow up cases against tight quality and timing SLAs — a major Excelra service line.",
      },
      {
        role: "Signal management / epidemiology experts",
        desc: "Analyze aggregate data, run statistical disproportionality analyses, and evaluate real-world evidence.",
      },
      {
        role: "PV compliance & regulatory leads",
        desc: "Ensure every report, clock, and submission meets global regulations and survives audits and inspections.",
      },
    ],
    standards: [
      {
        name: "MedDRA",
        desc: "The medical dictionary for regulatory activities — the mandatory coding language for adverse events worldwide.",
      },
      {
        name: "ICH E2 series (E2B, E2D)",
        desc: "The harmonized rules for electronic case exchange (E2B format) and signal management (E2D).",
      },
      {
        name: "GVP modules",
        desc: "The EU's Good Pharmacovigilance Practices — the detailed rulebook for every PV process.",
      },
      {
        name: "WHO VigiBase / FDA FAERS",
        desc: "The global and US safety databases into which national reports flow and from which global signals emerge.",
      },
    ],
    challenges: [
      "Case volume grows every year (more products, more channels, patient direct reporting), while quality expectations tighten.",
      "Literature and social media monitoring must scale: a case published in a journal anywhere in the world is a reporting obligation.",
      "Distinguishing true signals from noise is hard — and both over- and under-reaction carry real costs for patients.",
    ],
    ai: [
      "NLP automates intake: extracting patient, drug, and event details from free text and trimming case-processing time.",
      "AI triage prioritizes serious cases and drafts follow-up questions, protecting regulatory clocks.",
      "Machine-learning signal detection combines spontaneous reports with EHR and claims data to reduce false positives.",
    ],
    fact: "Safety teams monitor case reports, published literature, and even social media for early warning signals — and serious unexpected cases usually carry a 15-day reporting deadline.",
    excelra:
      "Pharmacovigilance case processing and literature surveillance are flagship Excelra services — our teams process safety cases for global pharma around the clock, combining medical reviewers with AI-assisted intake.",
    sources: [
      "WHO — Pharmacovigilance & VigiBase overview",
      "ICH E2B(R3) and E2D guidelines",
      "FDA FAERS public dashboard documentation",
    ],
    readMinutes: 7,
  },

  "healthcare-data-standards": {
    id: "healthcare-data-standards",
    headline: "One language for health data, everywhere",
    standfirst:
      "Healthcare data standards are the shared vocabulary that lets a lab system, a hospital record, and a clinical trial database all describe the same medical concept in exactly the same way. Without them, health data is a tower of incompatible dialects.",
    heroImage: "/excelra/themes/hds-hero.jpg",
    heroCaption:
      "Interoperability by design: devices, hospital systems, clouds, and AI pipelines only work together when everyone speaks the same data language.",
    heroCredit: "Illustration: web research · connected health",
    intro: [
      "A hospital lab writes 'sodium 140 mmol/L', a trial database stores 'NA_SERUM 140', and a wearable exports 'na_level: 140'. All three mean the same thing — and to a computer, none of them match. Healthcare data standards fix this by defining both the structure of messages (how data is packaged and exchanged) and the terminology (which codes name which concepts). They are the invisible infrastructure underneath modern healthcare and life sciences.",
      "The standards landscape has a place for every job. HL7 v2 messages still move the majority of hospital data between systems; HL7 FHIR is the modern, API-first standard powering apps, wearables, and national health networks. CDISC standards (CDASH, SDTM, ADaM) govern how clinical trial data is collected and submitted to regulators. SNOMED CT provides the deep clinical vocabulary, LOINC names laboratory tests, ICD-10 classifies diseases for billing and epidemiology, and MedDRA codes safety events. Each solves a different piece of the puzzle, and professionals are expected to know which standard belongs where.",
      "The payoff of standards is interoperability: systems that can exchange and use information without bespoke translation for every pair. That is what allows a patient's record to follow them between hospitals, a trial result to be reviewed by any regulator, and AI models to learn from data pooled across institutions. The cost of ignoring standards is equally concrete — data silos, failed integrations, submission rejections, and unsafe ambiguity in clinical communication.",
    ],
    whyMatters: [
      {
        title: "Standards make data portable and reusable",
        desc: "The same data that ran a trial can, in standard form, feed meta-analyses, real-world studies, and regulatory review without re-entry or translation.",
      },
      {
        title: "Regulators literally require them",
        desc: "FDA and EMA submissions must arrive in CDISC format; hospital interoperability rules (e.g., US information-blocking rules) push FHIR adoption by law.",
      },
      {
        title: "They are the foundation AI stands on",
        desc: "Models trained on inconsistently named concepts learn noise. Standards are what turn scattered institutional data into usable, learnable corpora.",
      },
    ],
    stages: [
      {
        name: "Data origination",
        desc: "Data is born in source systems — EHRs, lab instruments, devices, eCRFs — each with local naming conventions and formats.",
      },
      {
        name: "Terminology mapping",
        desc: "Local codes are mapped to standard vocabularies (SNOMED CT, LOINC, MedDRA, ICD-10) with documented, reviewable crosswalks.",
      },
      {
        name: "Conformance validation",
        desc: "Structured data is validated against the standard's rules (profiles, implementation guides) to catch deviations before they propagate.",
      },
      {
        name: "Exchange / integration",
        desc: "Validated data moves between systems via the right transport — HL7 v2 messages, FHIR APIs, or CDISC submission datasets.",
      },
      {
        name: "Downstream analytics & submission",
        desc: "Standardized data feeds dashboards, research databases, AI pipelines, and regulatory submissions — one source, many uses.",
      },
    ],
    stagesNote:
      "The pattern is always the same: capture locally, name universally, validate mechanically, exchange freely.",
    inlineImage: {
      src: "/excelra/themes/hds-ranking.jpg",
      caption:
        "Interoperability has become a measured national priority — countries now compete (and are ranked) on how connected their healthcare systems are.",
      credit: "Graphic: web research · 2025 interoperability index",
    },
    terms: [
      {
        t: "HL7 / FHIR",
        d: "Health Level Seven — the family of exchange standards; FHIR is its modern API-based generation, built around modular 'resources'.",
      },
      {
        t: "CDISC",
        d: "Clinical Data Interchange Standards Consortium — the standards family (CDASH, SDTM, ADaM) governing clinical trial data.",
      },
      {
        t: "SNOMED CT",
        d: "The most comprehensive clinical terminology — hundreds of thousands of concepts covering diseases, findings, procedures, organisms.",
      },
      {
        t: "LOINC",
        d: "The universal coding system for laboratory tests and observations ('sodium, serum' has exactly one LOINC code).",
      },
      {
        t: "ICD-10",
        d: "The WHO's disease classification — the language of diagnosis coding, billing, and epidemiology.",
      },
      {
        t: "Interoperability",
        d: "The ability of different systems to exchange data and actually use it — the ultimate purpose all these standards serve.",
      },
    ],
    people: [
      {
        role: "Standards / terminology specialists",
        desc: "Build and maintain the mappings between local codes and standard vocabularies — meticulous, high-stakes work.",
      },
      {
        role: "Integration engineers",
        desc: "Implement HL7/FHIR interfaces between hospital, lab, and research systems.",
      },
      {
        role: "Clinical data standards leads (sponsors)",
        desc: "Define the CDISC strategy for every study and own submission dataset quality.",
      },
      {
        role: "Data standards service teams",
        desc: "Specialist providers (like Excelra) that perform mapping, SDTM conversion, and conformance validation at scale.",
      },
    ],
    standards: [
      {
        name: "HL7 FHIR R4/R5",
        desc: "The API-first exchange standard — resources like Patient, Observation, MedicationRequest that apps can query directly.",
      },
      {
        name: "CDISC SDTM / ADaM",
        desc: "The required structure for trial data submission datasets (SDTM) and analysis datasets (ADaM).",
      },
      {
        name: "SNOMED CT / LOINC / ICD-10",
        desc: "The core clinical terminologies: concepts (SNOMED), lab tests (LOINC), diagnoses (ICD-10).",
      },
      {
        name: "FHIR Implementation Guides (e.g., US Core, IPS)",
        desc: "Country- and use-case-specific profiles that tell implementers exactly how to use FHIR resources consistently.",
      },
    ],
    challenges: [
      "Adoption is uneven: legacy HL7 v2 interfaces will coexist with FHIR for decades, keeping mapping skills essential.",
      "Terminology drift — dictionaries update, codes are deprecated — silently breaks integrations unless governance is continuous.",
      "Mapping at scale is labor-intensive and error-prone, which is exactly why curation specialists and automation coexist here.",
    ],
    ai: [
      "NLP suggests terminology mappings automatically, with humans reviewing — turning month-long mapping projects into weeks.",
      "LLMs now read implementation guides and draft conformant FHIR resources or validation rules.",
      "AI-assisted SDTM mapping (a proven Excelra use case) accelerates trial submission datasets while keeping human oversight.",
    ],
    fact: "Common examples: HL7/FHIR for care records, CDISC for trial submissions, SNOMED CT for clinical terms, LOINC for lab tests — each with a specific job, none interchangeable.",
    excelra:
      "Excelra's clinical and standards teams live in this space daily — SDTM mapping, terminology curation, and FHIR-era data engineering for global clients. If you join a data services team, this is home turf.",
    sources: [
      "HL7 International — FHIR overview & implementation guides",
      "CDISC — standards portfolio documentation",
      "WHO — ICD-10 and SNOMED CT collaboration materials",
    ],
    readMinutes: 6,
  },

  "data-integrity": {
    id: "data-integrity",
    headline: "Data you can defend — in any audit, anywhere",
    standfirst:
      "Data integrity is the discipline of keeping data attributable, accurate, and trustworthy across its entire lifecycle — while modernizing the legacy, often manual systems life sciences organizations have relied on for decades. Every other theme in this repository quietly depends on this one.",
    heroImage: "/excelra/themes/di-hero.jpg",
    heroCaption:
      "Modern data platforms promise speed — but in regulated life sciences, 'modern' only counts if every record remains attributable, complete, and defensible.",
    heroCredit: "Graphic: web research · analytics platforms",
    intro: [
      "When a regulator inspects a life sciences company, one question sits above all others: can you prove your data is reliable? Not 'is it impressive' or 'is it fast' — can you show who recorded every value, when, why it changed, and that nothing was quietly deleted? Data integrity is the discipline that makes the answer yes. Its framework is ALCOA+ — data must be Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, and Available.",
      "These principles are enforced through regulation: FDA's 21 CFR Part 11 and the EU Annex 11 define what electronic records and signatures must look like, requiring validated systems, audit trails, and controlled access. A data-integrity failure is not a technical footnote — regulators can, and do, reject entire submissions, import-alert manufacturing sites, and issue warning letters over unexplainable data. Every laboratory result, trial record, and safety case in the other six themes must pass this bar.",
      "The modern challenge is that most organizations are mid-transformation: decades of spreadsheets, paper logs, and home-grown databases are being moved to cloud platforms, automated pipelines, and AI-assisted workflows. Modernization done right improves integrity (fewer manual errors, better audit trails, built-in validation). Done carelessly, it creates new risks — unvalidated AI outputs, ungoverned data copies, shadow analytics. That balance between modernizing fast and staying defensible is the defining tension of this field, and the reason companies invest in governance frameworks, data lineage, and validated migration playbooks.",
    ],
    whyMatters: [
      {
        title: "It is the license to operate",
        desc: "Regulators treat unverifiable data as no data. Integrity failures can void studies, shut plants, and sink submissions worth billions.",
      },
      {
        title: "Every function depends on it",
        desc: "Discovery databases, trial locks, safety cases, standards mappings — all six other themes assume the data underneath is provably sound.",
      },
      {
        title: "Transformation is happening now",
        desc: "Cloud, automation, and AI adoption all pass through data-integrity review, making this skill set one of the most in-demand in the industry.",
      },
    ],
    stages: [
      {
        name: "Data creation",
        desc: "Records are captured at the moment of work, in validated systems, with attributed identity and timestamps — never on loose paper destined for later transcription.",
      },
      {
        name: "Processing",
        desc: "Data moves through transformations that are specified, validated, and versioned, so every change is repeatable and explainable.",
      },
      {
        name: "Review & QC",
        desc: "Humans and rules review records and audit trails — second-person verification, anomaly checks, audit-trail review — before data is used for decisions.",
      },
      {
        name: "Storage / archival",
        desc: "Records are retained for their legal lifetime in readable, tamper-evident form, with backups and disaster recovery that are themselves tested.",
      },
      {
        name: "Retrieval / reporting",
        desc: "Years later, records must be findable and understandable — for an audit, a submission, or a safety investigation — with lineage intact.",
      },
    ],
    stagesNote:
      "The lifecycle never truly ends: a record created today must still be retrievable and defensible 15 years from now.",
    inlineImage: {
      src: "/excelra/themes/di-cloud.jpg",
      caption:
        "Modernization with governance: cloud platforms, automated pipelines, and validated integrations replace manual, paper-based flows — with every hop documented.",
      credit: "Illustration: web research · cloud data integration",
    },
    terms: [
      {
        t: "ALCOA+",
        d: "Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available — the universal integrity checklist.",
      },
      {
        t: "Audit trail",
        d: "The system-generated, un-editable log of who changed what, when, and why — the single most inspected artifact in regulated data.",
      },
      {
        t: "21 CFR Part 11",
        d: "The FDA regulation making electronic records and signatures trustworthy equivalents of paper ones.",
      },
      {
        t: "Data lineage",
        d: "The documented path of data from origin through every transformation — how you answer 'where did this number come from?'",
      },
      {
        t: "CSV / CSA",
        d: "Computer System Validation (and its modern risk-based successor, Computer Software Assurance) — proving a system does what it claims, with evidence.",
      },
      {
        t: "Data governance",
        d: "The organizational system of owners, policies, and stewardship that keeps integrity rules alive after the project team moves on.",
      },
    ],
    people: [
      {
        role: "Data governance leads",
        desc: "Define ownership, policies, and quality metrics; arbitrate when speed and control collide.",
      },
      {
        role: "Quality / validation specialists",
        desc: "Validate systems and migrations, review audit trails, and represent data controls in audits and inspections.",
      },
      {
        role: "Data engineers & migration teams",
        desc: "Build the modern pipelines — with lineage, validation, and integrity checks engineered in, not bolted on.",
      },
      {
        role: "Digital transformation program managers",
        desc: "Run the multi-year modernization roadmaps, balancing AI ambition against regulatory defensibility.",
      },
    ],
    standards: [
      {
        name: "ALCOA+ / MHRA & WHO data-integrity guidance",
        desc: "The foundational expectations documents every regulated data process is measured against.",
      },
      {
        name: "FDA 21 CFR Part 11 / EU Annex 11",
        desc: "The electronic-records and electronic-signature regulations in the US and EU.",
      },
      {
        name: "GxP quality frameworks",
        desc: "GLP/GCP/GMP all embed data-integrity obligations specific to each lifecycle stage.",
      },
      {
        name: "Data governance & lineage tooling (e.g., catalogs, lineage graphs)",
        desc: "The emerging technical standards for documenting ownership, classification, and flow of enterprise data.",
      },
    ],
    challenges: [
      "Legacy estate: decades of spreadsheets and unsupported systems hold data that must be migrated without losing a single traceable detail.",
      "Shadow data: easy cloud storage creates uncontrolled copies that escape governance until someone needs 'the official' number.",
      "AI introduces new integrity questions — model versioning, training-data provenance, human oversight — regulators are only now codifying.",
    ],
    ai: [
      "Automated audit-trail review flags suspicious patterns (repeated re-tests, back-dated entries) far faster than human sampling.",
      "AI-assisted migration mapping accelerates legacy modernization while keeping lineage documented end to end.",
      "Governed-AI frameworks (model validation, explainability logs) are becoming the newest frontier of data-integrity practice.",
    ],
    fact: "Regulators can — and do — reject entire submissions if the underlying data can't be shown to be reliable. Data integrity is never optional paperwork; it is the product's proof of trust.",
    excelra:
      "Excelra's OP² cloud platform and data-governance practice exist precisely to modernize legacy scientific data without losing defensibility — trusted by 16 of the top 20 pharma companies.",
    sources: [
      "MHRA — 'GXP' Data Integrity Guidance and Definitions",
      "FDA — 21 CFR Part 11 electronic records guidance",
      "WHO — guideline on data integrity (Annex 4)",
    ],
    readMinutes: 7,
  },
};
