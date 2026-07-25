export interface Project {
  name: string;
  language: string;
  description: { en: string; tr: string };
  repoUrl: string;
}

export const projects: Project[] = [
  {
    name: "3D_Platform_Game",
    language: "C#",
    description: {
      en: "A 3D platformer built in Unity.",
      tr: "Unity ile geliştirilen 3D platform oyunu.",
    },
    repoUrl: "https://github.com/soyleremo3/3D_Platform_Game",
  },
  {
    name: "Card_Game_2D",
    language: "C#",
    description: {
      en: "A 2D card game built in Unity.",
      tr: "Unity ile geliştirilen 2D kart oyunu.",
    },
    repoUrl: "https://github.com/soyleremo3/Card_Game_2D",
  },
  {
    name: "Team_Sirius_2026",
    language: "Java",
    description: {
      en: "FRC robotics team — swerve-drive mechanism code.",
      tr: "FRC robotik takımı — swerve-drive mekanizması kodu.",
    },
    repoUrl: "https://github.com/soyleremo3/Team_Sirius_2026",
  },
];
