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
      en: "I trained a Monopoly champion from scratch: my 80-game PPO agent beat every opponent family it faced — 32, 64 and 128 games.",
      tr: "Sıfırdan bir Monopoly şampiyonu eğittim: 80 oyunluk PPO ajanım karşılaştığı tüm rakip ailelerini yendi — 32, 64 ve 128 oyunluk.",
      de: "Ich habe einen Monopoly-Champion von Grund auf trainiert: Mein 80-Spiele-PPO-Agent schlug jede Gegnerfamilie — 32, 64 und 128 Spiele.",
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
      en: "I get big results from lean hardware: I train detection models on Google Colab and built a video upscaler that takes 360p to 1080p on a laptop.",
      tr: "Sade donanımdan büyük sonuçlar çıkarırım: tespit modellerimi Google Colab'de eğitiyorum ve bir dizüstünde 360p'yi 1080p'ye çıkaran bir video büyütücü geliştirdim.",
      de: "Ich hole viel aus schlanker Hardware heraus: Erkennungsmodelle trainiere ich auf Google Colab, und ich habe einen Video-Upscaler gebaut, der auf einem Laptop 360p auf 1080p bringt.",
    },
  },
];
