import { 
  Flame, 
  Bomb, 
  Swords, 
  RefreshCcw, 
  Users, 
  GraduationCap, 
  Layers, 
  type LucideIcon 
} from 'lucide-react';
export type SubTopic = {
  id: string;     
  title: string;   
}

export type Module = {
  id: number;
  title: string;
  icon: LucideIcon;
  topicId: string;
  subTopics: SubTopic[]; 
}

export type CardContent = {
  body: string
  quiz: {
    question: string
    answers: string[]
    correctIndex: number
  }[] 
}

// --- ÉTAPE 1 & 2 : LES THÈMES ET LEURS MODULES ---
export const MODULES: Record<string, Module[]> = {
  "premiere-guerre-mondiale": [
    { 
      id: 1, 
      title: "Déclenchement", 
      icon: Flame, 
      topicId: "Première Guerre mondiale",
      subTopics: [
        { id: "Antagonismes", title: "Antagonismes entre puissances européennes" },
        { id: "Alliances", title: "Systèmes d'alliances" },
        { id: "Stratégies", title: "Stratégies et course aux armements" },
        { id: "Sarajevo", title: "Attentat de Sarajevo" }
      ]
    },
    { 
      id: 2, 
      title: "Entrée en guerre", 
      icon: Bomb, 
      topicId: "premiere-guerre-mondiale",
      subTopics: [
        { id: "mobilisation", title: "La mobilisation générale" },
        { id: "invasion-belgique", title: "L'invasion de la Belgique" }
      ]
    }
  ],
};

// --- ÉTAPE 4 : LE CONTENU FINAL (BODY + QUIZ) ---
// La clé est construite ainsi : "topicId-subTopicId"
export const CARD_CONTENT: Record<string, CardContent> = {
  // Thématiques du module "Déclenchement"
  "premiere-guerre-mondiale-Antagonismes": {
    body: "Au tournant du XXe siècle, l'impérialisme européen fragilise la paix. La conférence de Berlin (1885) avait partagé l'Afrique, mais l'Allemagne, arrivée tardivement, se sent lésée par la France et le Royaume-Uni. L'empereur Guillaume II, influencé par ses officiers prussiens, multiplie les provocations au Maroc (1905 et 1911) pour obtenir des matières premières. Parallèlement, la rivalité économique s'intensifie : l'industrie allemande surpasse ses voisins et inonde les marchés français et britanniques. Enfin, la France s'inquiète de sa stagnation démographique face à une Allemagne de plus en plus peuplée. Pour se protéger, les nations se figent dans deux blocs opposés : la Triple-Entente (France, Royaume-Uni, Russie) et la Triple-Alliance (Allemagne, Autriche-Hongrie, Italie).",
    quiz: [
      {
        question: "Quel événement de 1885 a organisé le partage de l'Afrique entre les puissances ?",
        answers: ["Le traité de Versailles", "La conférence de Berlin", "Le congrès de Vienne", "Les accords d'Agadir"],
        correctIndex: 1,
      },
      {
        question: "Quelle était la principale inquiétude économique des États européens face à l'Allemagne ?",
        answers: [
          "La chute de la monnaie allemande", 
          "L'inondation des marchés par les produits industriels allemands", 
          "Le manque de charbon en Allemagne",
          "Le refus de l'Allemagne de commercer avec le reste de l'Europe"
        ],
        correctIndex: 1,
      },
      {
        question: "Quels pays composaient la 'Triple-Entente' en 1914 ?",
        answers: [
          "Allemagne, Autriche, Italie", 
          "France, Royaume-Uni, Russie", 
          "Belgique, France, Espagne",
          "Italie, Empire Ottoman, Bulgarie"
        ],
        correctIndex: 1,
      }
    ]
  },
  "premiere-guerre-mondiale-Alliances": {
    body: "L'étincelle survient le 28 juin 1914 quand l'archiduc François-Ferdinand est assassiné par Gavrilo Princip.",
    quiz: [
      {
    question: "Dans quelle ville l'archiduc a-t-il été assassiné ?",
    answers: ["Sarajevo", "Belgrade", "Vienne", "Berlin"],
    correctIndex: 0,
  }
    ],
    },
}