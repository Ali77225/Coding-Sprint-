
import {
  Flame,
  Bomb,
  Swords,
  RefreshCcw,
  Users,
  GraduationCap,
  Layers,
  type LucideIcon,
} from "lucide-react"


export type Topic = {
  title: string
  wikiTitle: string
  intro: string
}

export type SubTopic = {
  id: string
  title: string
}

export type Module = {
  id: number
  title: string
  icon: LucideIcon
  topicId: string
  subTopics: SubTopic[]
}

export type CardContent = {
  body: string
  quiz: {
    question: string
    answers: string[]
    correctIndex: number
  }[]
}


export const TOPICS: Record<string, Topic> = {
  "premiere-guerre-mondiale": {
    title: "Première Guerre Mondiale",
    wikiTitle: "Première_Guerre_mondiale",
    intro: "La Première Guerre mondiale est un conflit armé qui a opposé de 1914 à 1918 deux camps : les Alliés et les Empires centraux, causant plus de 18 millions de morts.",
  },
}


export const MODULES: Record<string, Module[]> = {
  "premiere-guerre-mondiale": [
    {
      id: 1,
      title: "Déclenchement",
      icon: Flame,
      topicId: "premiere-guerre-mondiale",
      subTopics: [
        { id: "Antagonismes", title: "Antagonismes entre puissances européennes" },
        { id: "Alliances", title: "Systèmes d'alliances" },
        { id: "Stratégies", title: "Stratégies et course aux armements" },
        { id: "Sarajevo", title: "Attentat de Sarajevo" },
      ],
    },
    {
      id: 2,
      title: "Entrée en guerre",
      icon: Bomb,
      topicId: "premiere-guerre-mondiale",
      subTopics: [
        { id: "mobilisation", title: "La mobilisation générale" },
        { id: "invasion-belgique", title: "L'invasion de la Belgique" },
      ],
    },
  ],
}

// Clé = "topicId-subTopicId"
export const CARD_CONTENT: Record<string, CardContent> = {

  "premiere-guerre-mondiale-Antagonismes": {
    body: "Au tournant du XXe siècle, l'impérialisme européen fragilise la paix. La conférence de Berlin (1885) avait partagé l'Afrique, mais l'Allemagne, arrivée tardivement, se sent lésée par la France et le Royaume-Uni. L'empereur Guillaume II multiplie les provocations au Maroc (1905 et 1911). Parallèlement, la rivalité économique s'intensifie : l'industrie allemande surpasse ses voisins. Les nations se figent dans deux blocs : la Triple-Entente (France, Royaume-Uni, Russie) et la Triple-Alliance (Allemagne, Autriche-Hongrie, Italie).",
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
          "Le refus de l'Allemagne de commercer avec le reste de l'Europe",
        ],
        correctIndex: 1,
      },
      {
        question: "Quels pays composaient la 'Triple-Entente' en 1914 ?",
        answers: [
          "Allemagne, Autriche, Italie",
          "France, Royaume-Uni, Russie",
          "Belgique, France, Espagne",
          "Italie, Empire Ottoman, Bulgarie",
        ],
        correctIndex: 1,
      },
    ],
  },

  "premiere-guerre-mondiale-Sarajevo": {
    body: "L'étincelle survient le 28 juin 1914 quand l'archiduc François-Ferdinand est assassiné par Gavrilo Princip à Sarajevo. Cet attentat déclenche une série de réactions en chaîne entre les grandes puissances européennes qui mène directement à la déclaration de guerre.",
    quiz: [
      {
        question: "Dans quelle ville l'archiduc a-t-il été assassiné ?",
        answers: ["Sarajevo", "Belgrade", "Vienne", "Berlin"],
        correctIndex: 0,
      },
    ],
  },

}