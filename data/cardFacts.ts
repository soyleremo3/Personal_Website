import type { Localized } from "@/lib/dictionary";

export interface CardFact {
  id: number;
  /** Playing-card rank shown on the face-down side. */
  rank: string;
  text: Localized;
}

export const cardFacts: CardFact[] = [
  {
    id: 1,
    rank: "A",
    text: {
      en: "I label my own training data — 377 frames of my own shots so far.",
      tr: "Eğitim verimi kendim etiketliyorum — şu ana kadar kendi şutlarımdan 377 kare.",
      de: "Ich labele meine Trainingsdaten selbst — bisher 377 Bilder meiner eigenen Würfe.",
    },
  },
  {
    id: 2,
    rank: "2",
    text: {
      en: "I rewrote the swerve-drive code for my FRC robotics team, Team Sirius.",
      tr: "FRC robotik takımım Team Sirius'un swerve-drive kodunu yeniden yazdım.",
      de: "Ich habe den Swerve-Drive-Code für mein FRC-Robotikteam, Team Sirius, neu geschrieben.",
    },
  },
  {
    id: 3,
    rank: "3",
    text: {
      en: "My Monopoly agent's worst result sits right next to its best: it won 0 of 16 against an outside benchmark.",
      tr: "Monopoly ajanımın en kötü sonucu en iyisinin hemen yanında duruyor: dış bir benchmark'a karşı 16 oyunun 0'ını kazandı.",
      de: "Das schlechteste Ergebnis meines Monopoly-Agenten steht direkt neben dem besten: 0 von 16 Spielen gegen einen externen Benchmark gewonnen.",
    },
  },
  {
    id: 4,
    rank: "4",
    text: {
      en: "Before I write a line of code, I ask one question: do people actually need this?",
      tr: "Bir satır kod yazmadan önce tek bir soru sorarım: insanların buna gerçekten ihtiyacı var mı?",
      de: "Bevor ich eine Zeile Code schreibe, frage ich: Brauchen Menschen das wirklich?",
    },
  },
  {
    id: 5,
    rank: "5",
    text: {
      en: "I rarely say \"done\". I usually think: this can be better.",
      tr: "Nadiren \"bitti\" derim. Genelde şöyle düşünürüm: bu daha iyi olabilir.",
      de: "Ich sage selten „fertig“. Meistens denke ich: Das geht noch besser.",
    },
  },
  {
    id: 6,
    rank: "6",
    text: {
      en: "I don't have a dedicated GPU. Heavy training runs on free Google Colab, and my video upscaler runs on integrated graphics.",
      tr: "Harici bir ekran kartım yok. Ağır eğitimler ücretsiz Google Colab'de çalışıyor, video büyütücüm de entegre grafikte.",
      de: "Ich habe keine dedizierte GPU. Aufwendiges Training läuft auf dem kostenlosen Google Colab, mein Video-Upscaler auf integrierter Grafik.",
    },
  },
];
