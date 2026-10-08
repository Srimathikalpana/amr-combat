export interface StatItem {
  id: string;
  value: string;
  label: string;
  detail: string;
  highlightColor: "teal" | "rose" | "emerald";
  trend?: string;
}

export interface DeepDiveSection {
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface FloatingCardData {
  id: string;
  badge: string;
  badgeColor: "teal" | "rose" | "amber";
  iconName: "ShieldAlert" | "Biohazard" | "Bug" | "Flame" | "AlertTriangle";
  title: string;
  subtitle: string;
  previewSummary: string;
  diagramType: "mechanism" | "pathogen" | "transmission";
  deepDive: {
    overview: string;
    sections: DeepDiveSection[];
    keyTakeaway: string;
    clinicalAlert?: string;
    statsCallout?: {
      value: string;
      caption: string;
    };
  };
}

export const STATS_DATA: StatItem[] = [
  {
    id: "direct-deaths",
    value: "1.27 Million+",
    label: "Annual Deaths Directly Attributable",
    detail: "Direct global deaths caused by resistant bacterial infections every year.",
    highlightColor: "rose",
    trend: "Surpassing HIV/AIDS and Malaria combined",
  },
  {
    id: "projected-2050",
    value: "10 Million",
    label: "Projected Annual Deaths by 2050",
    detail: "Projected annual deaths worldwide by 2050 if AMR remains unaddressed.",
    highlightColor: "teal",
    trend: "Estimated $100 Trillion economic loss",
  },
  {
    id: "preventable",
    value: "100% Preventable",
    label: "Behavioral & Policy Opportunity",
    detail: "Driven by misuse—stoppable through education, hygiene, and responsible prescribing.",
    highlightColor: "emerald",
    trend: "Actionable through global stewardship",
  },
];

export const FLOATING_CARDS: FloatingCardData[] = [
  {
    id: "what-is-amr",
    badge: "Core Concept",
    badgeColor: "teal",
    iconName: "ShieldAlert",
    title: "What is AMR?",
    subtitle: "The Biochemical Breakdown of Medication Efficacy",
    previewSummary:
      "When standard medicines lose their power against mutating pathogens.",
    diagramType: "mechanism",
    deepDive: {
      overview:
        "Antimicrobial Resistance (AMR) happens when micro-organisms—such as bacteria, viruses, fungi, and parasites—change over time and stop responding to the medicines designed to kill them.",
      sections: [
        {
          title: "Definition & Scope",
          content:
            "Antimicrobial Resistance (AMR) happens when micro-organisms—such as bacteria, viruses, fungi, and parasites—change over time and stop responding to the medicines designed to kill them. While resistance occurs naturally through genetic mutation, clinical antimicrobial overpressure has accelerated this timeline from millennia into mere decades.",
        },
        {
          title: "Cascade Consequences",
          content:
            "As a result, standard treatments become ineffective, infections persist inside the body, and the risk of spreading severe illness to others increases drastically. Everyday procedures like minor surgeries, cesarean sections, chemotherapy, and organ transplants become life-threatening due to infection vulnerability.",
        },
      ],
      keyTakeaway:
        "Pathogens evolve resistance mechanisms through natural selection accelerated by pharmaceutical pressure.",
      statsCallout: {
        value: "4.95M",
        caption: "Infections worldwide associated with AMR in a single year",
      },
    },
  },
  {
    id: "what-are-superbugs",
    badge: "The Pathogen",
    badgeColor: "rose",
    iconName: "Biohazard",
    title: "What are Superbugs?",
    subtitle: "Multidrug-Resistant Strains Threatening Modern Care",
    previewSummary: "Not physically larger, but medically impenetrable.",
    diagramType: "pathogen",
    deepDive: {
      overview:
        "Superbugs are strains of bacteria, fungi, or viruses that have adapted to survive exposure to multiple antimicrobial drugs—especially standard first-line and last-resort antibiotics.",
      sections: [
        {
          title: "Core Explanation",
          content:
            "Superbugs are strains of bacteria, fungi, or viruses that have adapted to survive exposure to multiple antimicrobial drugs—especially standard first-line and last-resort antibiotics. Examples include MRSA (Methicillin-resistant Staphylococcus aureus), Carbapenem-resistant Enterobacteriaceae (CRE), and drug-resistant Tuberculosis.",
        },
        {
          title: "How They Differ",
          content:
            "They aren't 'stronger' in terms of physical size or speed, but they have developed natural defense enzymes, altered cell wall targets, or genetic mutations that render regular medications completely useless. Many produce beta-lactamases or employ multidrug efflux pumps to physically pump antibiotics out of their cells.",
        },
        {
          title: "Clinical Risk",
          content:
            "When an infection from a multidrug-resistant superbug strikes, clinicians are left with few to no viable antibiotic choices. Patients require highly toxic, expensive reserve antibiotics or face prolonged hospitalization with severe mortality risks.",
        },
      ],
      keyTakeaway:
        "Superbugs dismantle the safety net of modern surgery and oncology by eliminating reliable empirical antibiotic coverage.",
      clinicalAlert:
        "WHO Tier 1 Critical Priority Pathogens: Acinetobacter baumannii, Pseudomonas aeruginosa, and Enterobacterales (carbapenem-resistant).",
      statsCallout: {
        value: "ESKAPE",
        caption: "Six notorious pathogens causing the majority of hospital AMR deaths",
      },
    },
  },
  {
    id: "how-do-they-form",
    badge: "Primary Drivers",
    badgeColor: "amber",
    iconName: "Flame",
    title: "How Do Superbugs Form?",
    subtitle: "Systemic Misuse Accelerating Evolution",
    previewSummary:
      "Human habits and systemic misuse accelerating resistance.",
    diagramType: "transmission",
    deepDive: {
      overview:
        "The emergence of superbugs is not purely random—it is predominantly fueled by four systemic human behaviors that artificially select resistant strains.",
      sections: [
        {
          title: "Overuse & Misuse",
          content:
            "Taking antibiotics for viral infections like colds, coughs, or the seasonal flu where they have zero therapeutic effect. This eliminates harmless symbiotic flora and leaves surviving mutated microbes free to proliferate without bacterial competition.",
        },
        {
          title: "Incomplete Courses",
          content:
            "Stopping a prescription early once symptoms subside allows partially exposed, surviving bacteria to mutate and build immunity. Only the most susceptible bacteria are killed, leaving the resilient stragglers to reproduce.",
        },
        {
          title: "Over-the-Counter Buying",
          content:
            "Purchasing or dispensing antibiotics without a qualified doctor’s diagnostic prescription. Self-medication often leads to sub-therapeutic dosing, incorrect spectrum selection, and recurrent resistant reservoirs.",
        },
        {
          title: "Agricultural Usage",
          content:
            "Excessive prophylactic and growth-promoting antibiotic usage in livestock and commercial food farming. More than 70% of medically important antimicrobials in some regions enter the animal food chain and runoff into water tables.",
        },
      ],
      keyTakeaway:
        "Resistance is an ecological cycle: misuse in clinics, communities, and animal agriculture recirculates into the human microbiome.",
      statsCallout: {
        value: "73%",
        caption: "Of global antimicrobials are consumed in animal food production",
      },
    },
  },
];

export const STEWARDSHIP_RULES = [
  {
    id: 1,
    title: "Prescription Only",
    description: "Never demand or take antibiotics without a verified prescription from a registered medical professional.",
    icon: "FileCheck",
  },
  {
    id: 2,
    title: "Complete the Protocol",
    description: "Always complete the full prescribed dosage even if you begin feeling healthier ahead of schedule.",
    icon: "Clock",
  },
  {
    id: 3,
    title: "Never Share or Reuse",
    description: "Never share leftover medications with family or save expired pills for future illnesses.",
    icon: "ShieldX",
  },
  {
    id: 4,
    title: "Preventative Hygiene",
    description: "Practice rigorous hand washing, keep vaccinations updated, and prepare food safely to stop infections early.",
    icon: "Sparkles",
  },
];

export const SURVEILLANCE_RESOURCES = [
  {
    name: "WHO GLASS",
    description: "Global Antimicrobial Resistance and Use Surveillance System",
    url: "https://www.who.int/initiatives/glass",
  },
  {
    name: "CDC AMR Threat Report",
    description: "Centers for Disease Control & Prevention Antimicrobial Threats",
    url: "https://www.cdc.gov/drugresistance",
  },
  {
    name: "CARB-X Coalition",
    description: "Global partnership supporting novel antibacterial R&D",
    url: "https://carb-x.org",
  },
  {
    name: "One Health Global",
    description: "Integrated cross-sector human, animal & environmental approach",
    url: "https://www.who.int/health-topics/one-health",
  },
];
