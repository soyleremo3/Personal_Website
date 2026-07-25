export interface CardFact {
  id: number;
  tag: string;
  text: { en: string; tr: string };
}

export const cardFacts: CardFact[] = [
  {
    id: 1,
    tag: "REC 01",
    text: {
      en: "I built a 3D platformer and a 2D card game in Unity.",
      tr: "Unity'de bir 3D platform oyunu ve bir 2D kart oyunu yaptım.",
    },
  },
  {
    id: 2,
    tag: "REC 02",
    text: {
      en: "I rewrote the swerve-drive code for an FRC robotics team.",
      tr: "Bir FRC robotik takımı için swerve-drive kodunu yeniden yazdım.",
    },
  },
  {
    id: 3,
    tag: "REC 03",
    text: {
      en: "I make AI-generated interactive horror videos on YouTube — that's actually where the idea for these cards came from.",
      tr: "YouTube'da yapay zeka destekli interaktif korku videoları yapıyorum — aslında bu kartların fikri de oradan geldi.",
    },
  },
  {
    id: 4,
    tag: "REC 04",
    text: {
      en: "Before I write a line of code, I ask one question: do people actually need this?",
      tr: "Bir satır kod yazmadan önce tek bir soru sorarım: insanların buna gerçekten ihtiyacı var mı?",
    },
  },
  {
    id: 5,
    tag: "REC 05",
    text: {
      en: "I rarely say 'done.' I usually think: this can be better.",
      tr: "Nadiren 'bitti' derim. Genelde şöyle düşünürüm: bu daha iyi olabilir.",
    },
  },
  {
    id: 6,
    tag: "REC 06",
    text: {
      en: "Long-term goal: build something people actually use — and keep learning game dev along the way.",
      tr: "Uzun vadeli hedef: insanların gerçekten kullandığı bir şey inşa etmek — bu süreçte oyun geliştirmeyi de öğrenmeye devam etmek.",
    },
  },
];
