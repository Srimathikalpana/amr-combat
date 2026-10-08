export interface QuizOption {
  key: "A" | "B" | "C" | "D";
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctKey: "A" | "B" | "C" | "D";
  explanation: string;
  category: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Do antibiotics kill viruses like the common cold or flu?",
    category: "Viral vs. Bacterial",
    options: [
      {
        key: "A",
        text: "Yes, antibiotics cure all viral and bacterial infections.",
      },
      {
        key: "B",
        text: "No, antibiotics only work against bacterial infections, not viral infections.",
      },
      {
        key: "C",
        text: "Yes, but only if taken at high doses.",
      },
      {
        key: "D",
        text: "Only when combined with fever medicine.",
      },
    ],
    correctKey: "B",
    explanation:
      "Antibiotics specifically target and kill bacteria (or stop their growth). Colds, coughs, and flu are caused by viruses, so antibiotics have no effect on them.",
  },
  {
    id: 2,
    question:
      "What happens if you stop taking antibiotics early because you start feeling better?",
    category: "Prescription Adherence",
    options: [
      {
        key: "A",
        text: "It saves money and prevents side effects.",
      },
      {
        key: "B",
        text: "It is safe as long as symptoms are gone.",
      },
      {
        key: "C",
        text: 'Surviving bacteria can adapt, mutate, and become resistant "superbugs."',
      },
      {
        key: "D",
        text: "Your body automatically finishes killing the remaining bacteria.",
      },
    ],
    correctKey: "C",
    explanation:
      "Stopping treatment early leaves behind the strongest bacteria, which can mutate, rebuild the infection, and become resistant to that antibiotic in the future.",
  },
  {
    id: 3,
    question:
      "Is it okay to use leftover antibiotics from a previous illness if you have similar symptoms again?",
    category: "Self-Medication Risk",
    options: [
      {
        key: "A",
        text: "Yes, if it worked before, it will work again.",
      },
      {
        key: "B",
        text: "Yes, to avoid visiting a doctor again.",
      },
      {
        key: "C",
        text: "No, because different illnesses require different treatments, and self-medication promotes resistance.",
      },
      {
        key: "D",
        text: "Yes, provided the medicine hasn't expired.",
      },
    ],
    correctKey: "C",
    explanation:
      "Symptoms can be deceptive. Taking leftover antibiotics without a doctor's diagnosis can lead to incorrect treatment, dangerous side effects, and increased antimicrobial resistance.",
  },
  {
    id: 4,
    question:
      "How can healthy individuals help prevent the spread of Antimicrobial Resistance?",
    category: "Prevention & Hygiene",
    options: [
      {
        key: "A",
        text: "Practice regular handwashing with soap and water.",
      },
      {
        key: "B",
        text: "Keep vaccinations up to date.",
      },
      {
        key: "C",
        text: "Never share prescribed antibiotics with others.",
      },
      {
        key: "D",
        text: "All of the above.",
      },
    ],
    correctKey: "D",
    explanation:
      "Infection prevention through hygiene and vaccines reduces the overall need for antibiotics, directly lowering the chances of resistant superbugs developing.",
  },
  {
    id: 5,
    question: 'What is a "Superbug"?',
    category: "Microbial Threat",
    options: [
      {
        key: "A",
        text: "A beneficial bacteria that strengthens immunity.",
      },
      {
        key: "B",
        text: "A strain of bacteria or pathogen that has developed resistance to multiple antibiotics.",
      },
      {
        key: "C",
        text: "A newly discovered virus transmitted by insects.",
      },
      {
        key: "D",
        text: "A type of probiotic supplement.",
      },
    ],
    correctKey: "B",
    explanation:
      "Superbugs are micro-organisms (like bacteria or fungi) that have grown resistant to standard treatments, making standard infections difficult or impossible to treat.",
  },
];
