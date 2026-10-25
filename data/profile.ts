import type { Localized } from "@/lib/dictionary";

export const SITE_URL = "https://emrullahsoylerpersonalwebsite.vercel.app";
export const FULL_NAME = "Emrullah Söyler";
export const EMAIL = "emrullahsoy82@gmail.com";

export const socialLinks = {
  github: "https://github.com/soyleremo3",
  linkedin: "https://www.linkedin.com/in/emrullah-soyler-032442421/",
  kaggle: "https://www.kaggle.com/emrullahsyler",
} as const;

export interface LogEntry {
  date: string;
  project: string;
  slug: string;
  text: Localized;
}

/** Dated results pulled from the repositories' changelogs and experiment logs. */
export const labLog: LogEntry[] = [
  {
    date: "2026-10-24",
    project: "Basketball APP",
    slug: "basketball-app",
    text: {
      en: "v2.45.2 — detection model selected; 134 of 157 real makes detected after pipeline tuning.",
      tr: "v2.45.2 — tespit modeli seçildi; hat ayarından sonra 157 gerçek isabetin 134'ü yakalandı.",
      de: "v2.45.2 — Erkennungsmodell ausgewählt; nach dem Pipeline-Tuning 134 von 157 echten Treffern erkannt.",
    },
  },
  {
    date: "2026-10-24",
    project: "AI & Machine Learning",
    slug: "ai-machine-learning",
    text: {
      en: "CS50P week 2 finished: extensions, interpreter and meal problem sets.",
      tr: "CS50P 2. hafta bitti: extensions, interpreter ve meal problem setleri.",
      de: "CS50P Woche 2 abgeschlossen: Aufgaben extensions, interpreter und meal.",
    },
  },
  {
    date: "2026-10-16",
    project: "Kahvehane",
    slug: "kahvehane-midnight-tiles",
    text: {
      en: "Version 0.8 — tutorial verified in TR and EN on 11 screen sizes.",
      tr: "0.8 sürümü — öğretici TR ve EN olarak 11 ekran boyutunda doğrulandı.",
      de: "Version 0.8 — Tutorial auf TR und EN auf 11 Bildschirmgrößen geprüft.",
    },
  },
  {
    date: "2026-08-13",
    project: "Monopoly Champion Agent",
    slug: "monopoly-champion-agent",
    text: {
      en: "Experiment 033 — the 80-game PPO champion passed its promotion gate.",
      tr: "Deney 033 — 80 oyunluk PPO şampiyonu terfi kapısını geçti.",
      de: "Experiment 033 — der 80-Spiele-PPO-Champion hat sein Promotion-Gate bestanden.",
    },
  },
  {
    date: "2026-08-05",
    project: "ARC-AGI-3 agent",
    slug: "arc-agi-3",
    text: {
      en: "Kaggle notebook pipeline finished: play locally, submit with one command.",
      tr: "Kaggle notebook hattı tamamlandı: yerelde oyna, tek komutla gönder.",
      de: "Kaggle-Notebook-Pipeline fertig: lokal spielen, mit einem Befehl einreichen.",
    },
  },
];

export interface ExperienceItem {
  period: string;
  org: string;
  role: Localized;
  text: Localized;
  slug?: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "2026-10",
    org: "Madlen",
    role: {
      en: "Growth Intern case study",
      tr: "Growth Intern vaka çalışması",
      de: "Fallstudie Growth Intern",
    },
    text: {
      en: "Competitor research, a value proposition and Kalem, a Next.js app with three AI tools for students and teachers.",
      tr: "Rakip analizi, değer önerisi ve öğrenciler ile öğretmenler için üç yapay zeka aracı içeren Next.js uygulaması Kalem.",
      de: "Wettbewerbsanalyse, ein Wertversprechen und Kalem, eine Next.js-App mit drei KI-Werkzeugen für Schüler und Lehrkräfte.",
    },
    slug: "kalem-madlen-case-study",
  },
  {
    period: "2026-10 —",
    org: "Harvard CS50P (edX)",
    role: {
      en: "Introduction to Programming with Python",
      tr: "Python ile Programlamaya Giriş",
      de: "Einführung in die Programmierung mit Python",
    },
    text: {
      en: "Working through the course and committing every problem set in public.",
      tr: "Kursu ilerletiyor ve her problem setini herkese açık olarak commit'liyorum.",
      de: "Ich arbeite den Kurs durch und committe jede Aufgabe öffentlich.",
    },
    slug: "ai-machine-learning",
  },
  {
    period: "2026-07 — 2026-09",
    org: "Exposure",
    role: {
      en: "Mobile app developer",
      tr: "Mobil uygulama geliştirici",
      de: "Entwickler der mobilen App",
    },
    text: {
      en: "Built the native iOS members app for the startup — sign-in, directory, jobs, weekly matching, events and push notifications. Releasing soon.",
      tr: "Girişim için native iOS üye uygulamasını geliştirdim — giriş, rehber, iş ilanları, haftalık eşleşme, etkinlikler ve push bildirimleri. Yakında yayında.",
      de: "Die native iOS-Mitglieder-App für das Startup gebaut — Anmeldung, Verzeichnis, Jobs, wöchentliches Matching, Events und Push-Benachrichtigungen. Erscheint bald.",
    },
    slug: "exposure-members-app",
  },
  {
    period: "2026-08",
    org: "Exposure AI Academy",
    role: {
      en: "Participant",
      tr: "Katılımcı",
      de: "Teilnehmer",
    },
    text: {
      en: "Weekend case study: evaluating voice-AI customer-service agents with the open OpenVoiceCS-Bench benchmark — task success, policy compliance, privacy and tool use.",
      tr: "Hafta sonu vaka çalışması: sesli yapay zeka müşteri hizmetleri ajanlarını açık OpenVoiceCS-Bench benchmark'ı ile değerlendirme — görev başarısı, kurallara uyum, gizlilik ve araç kullanımı.",
      de: "Wochenend-Fallstudie: Bewertung von Voice-KI-Kundenservice-Agenten mit dem offenen Benchmark OpenVoiceCS-Bench — Aufgabenerfolg, Regelkonformität, Datenschutz und Tool-Nutzung.",
    },
  },
  {
    period: "2026-08",
    org: "ARC Prize 2026 · Kaggle",
    role: {
      en: "Competitor",
      tr: "Yarışmacı",
      de: "Teilnehmer",
    },
    text: {
      en: "Built an offline LLM agent for ARC-AGI-3, the interactive reasoning benchmark.",
      tr: "Etkileşimli akıl yürütme benchmark'ı ARC-AGI-3 için internetsiz bir LLM ajanı geliştirdim.",
      de: "Einen Offline-LLM-Agenten für ARC-AGI-3 gebaut, den interaktiven Reasoning-Benchmark.",
    },
    slug: "arc-agi-3",
  },
  {
    period: "2026-01 — 2026-02",
    org: "FRC Team Sirius #9468",
    role: {
      en: "Programmer",
      tr: "Yazılımcı",
      de: "Programmierer",
    },
    text: {
      en: "Rewrote the swerve-drive code, added AprilTag alignment with Limelight and built the autonomous routines and driver dashboard for the 2026 season.",
      tr: "2026 sezonu için swerve-drive kodunu yeniden yazdım, Limelight ile AprilTag hizalama ekledim, otonom rutinleri ve sürücü panelini geliştirdim.",
      de: "Für die Saison 2026 den Swerve-Drive-Code neu geschrieben, AprilTag-Ausrichtung mit Limelight ergänzt sowie die autonomen Routinen und das Fahrer-Dashboard gebaut.",
    },
    slug: "team-sirius-2026",
  },
  {
    period: "2025-06",
    org: "Unity & C#",
    role: {
      en: "Where it started",
      tr: "Başlangıç noktası",
      de: "Der Anfang",
    },
    text: {
      en: "Started with game development in Unity — platformers, card games and an island adventure — before moving towards AI.",
      tr: "Yapay zekaya geçmeden önce Unity'de oyun geliştirmeyle başladım — platform oyunları, kart oyunları ve bir ada macerası.",
      de: "Angefangen habe ich mit Spieleentwicklung in Unity — Plattformer, Kartenspiele und ein Inselabenteuer —, bevor ich mich der KI zugewandt habe.",
    },
  },
];

export interface SkillGroup {
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "AI & machine learning", tr: "Yapay zeka & makine öğrenmesi", de: "KI & Machine Learning" },
    items: [
      "Python",
      "PyTorch",
      "Object detection",
      "Model export & quantization (FP16, INT8, TFLite)",
      "Reinforcement learning (PPO, DDQN, MCTS)",
      "LLM agents with vLLM",
      "Speech-to-text",
      "Kaggle & Google Colab",
    ],
  },
  {
    title: { en: "Mobile & web", tr: "Mobil & web", de: "Mobil & Web" },
    items: [
      "TypeScript",
      "React Native & Expo",
      "Next.js & React",
      "Tailwind CSS",
      "Zustand",
      "SQLite & IndexedDB",
      "Supabase",
      "FastAPI",
    ],
  },
  {
    title: { en: "Games & systems", tr: "Oyun & sistem", de: "Spiele & Systeme" },
    items: ["Unity", "C#", "C++20 & Win32", "Java & WPILib", "PySide6", "FFmpeg"],
  },
  {
    title: { en: "How I work", tr: "Nasıl çalışırım", de: "Arbeitsweise" },
    items: [
      "Git & GitHub Actions CI",
      "Jest, pytest & Unity Test Runner",
      "Pre-registered experiments",
      "Written decision logs",
      "Claude Code as a teammate",
    ],
  },
];

export const techMarquee = [
  "Python",
  "PyTorch",
  "Computer vision",
  "vLLM",
  "TypeScript",
  "React Native",
  "Expo",
  "Next.js",
  "FastAPI",
  "Supabase",
  "Unity",
  "C#",
  "C++",
  "Java",
  "WPILib",
  "Google Colab",
  "Kaggle",
];
