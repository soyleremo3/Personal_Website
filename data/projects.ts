export interface Project {
  name: string;
  language: string;
  description: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    name: "3D_Platform_Game",
    language: "C#",
    description: "A 3D platformer built in Unity.",
    repoUrl: "https://github.com/soyleremo3/3D_Platform_Game",
  },
  {
    name: "Card_Game_2D",
    language: "C#",
    description: "A 2D card game built in Unity.",
    repoUrl: "https://github.com/soyleremo3/Card_Game_2D",
  },
  {
    name: "Team_Sirius_2026",
    language: "Java",
    description: "FRC robotics team — swerve-drive mechanism code.",
    repoUrl: "https://github.com/soyleremo3/Team_Sirius_2026",
  },
];
