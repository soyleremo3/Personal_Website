import type { Localized } from "@/lib/dictionary";

export type Category = "ai" | "mobile" | "web" | "games" | "tools" | "robotics";
export type Status = "active" | "research" | "shipped" | "upcoming" | "learning" | "prototype";
export type Motif =
  | "court"
  | "arcgrid"
  | "board"
  | "curve"
  | "swerve"
  | "phone"
  | "browser"
  | "track"
  | "tiles"
  | "terminal";

export interface Metric {
  value: string;
  label: Localized;
}

export interface Project {
  slug: string;
  name: string;
  /** GitHub repository name under soyleremo3. */
  repo: string;
  visibility: "public" | "private";
  featured?: boolean;
  category: Category;
  status: Status;
  /** "YYYY-MM" of the first and latest commit. */
  started: string;
  updated: string;
  commits: number;
  stack: string[];
  motif: Motif;
  liveUrl?: string;
  summary: Localized;
  overview: Localized;
  highlights: Localized[];
  metrics?: Metric[];
  /** Forward-looking note on what comes next. */
  note?: Localized;
}

export const GITHUB_USER = "soyleremo3";

export function repoUrl(project: Project) {
  return `https://github.com/${GITHUB_USER}/${project.repo}`;
}

export const projects: Project[] = [
  {
    slug: "basketball-app",
    name: "Basketball APP",
    repo: "Basketball-APP-v2",
    visibility: "private",
    featured: true,
    category: "ai",
    status: "active",
    started: "2026-08",
    updated: "2026-10",
    commits: 1911,
    stack: [
      "TypeScript",
      "React Native",
      "Expo SDK 57",
      "Python",
      "Object detection",
      "TFLite",
      "Google Colab",
      "SQLite",
      "Jest",
      "GitHub Actions",
    ],
    motif: "court",
    summary: {
      en: "An on-device computer-vision shot tracker: point a phone at the hoop and get makes, misses and FG% in real time.",
      tr: "Cihaz üzerinde çalışan bilgisayarlı görü şut takipçisi: telefonu potaya çevir, isabet, ıska ve FG% anında gelsin.",
      de: "Ein Wurf-Tracker mit Computer Vision direkt auf dem Gerät: Handy auf den Korb richten und Treffer, Fehlwürfe und FG% in Echtzeit sehen.",
    },
    overview: {
      en: "A shot tracker built by a basketball player. The phone watches the rim, a detector finds the ball, rim and net, and a pure-TypeScript pipeline decides make or miss, then turns the session into stats, drills and streaks. Version 2 is a from-scratch rebuild in its own repository: the polished app first, then the detection engine one verified piece at a time. Every model or pipeline change has to pass a written gate before it counts, and the camera frames never leave the phone.",
      tr: "Bir basketbolcunun yaptığı şut takipçisi. Telefon çemberi izler, bir dedektör topu, çemberi ve fileyi bulur; saf TypeScript ile yazılmış bir hat isabet mi ıska mı olduğuna karar verir ve antrenmanı istatistiğe, drill'lere ve serilere dönüştürür. Versiyon 2, kendi reposunda sıfırdan yeniden yazıldı: önce cilalı uygulama, sonra tespit motoru, her parçası doğrulanarak. Her model veya hat değişikliği sayılmadan önce yazılı bir kontrolden geçmek zorunda ve kamera görüntüleri telefondan hiç çıkmıyor.",
      de: "Ein Wurf-Tracker, gebaut von einem Basketballspieler. Das Handy beobachtet den Ring, ein Detektor findet Ball, Ring und Netz, und eine Pipeline in reinem TypeScript entscheidet Treffer oder Fehlwurf und macht aus dem Training Statistiken, Drills und Serien. Version 2 ist ein kompletter Neubau in einem eigenen Repository: zuerst die ausgereifte App, dann die Erkennung, Stück für Stück verifiziert. Jede Änderung an Modell oder Pipeline muss ein schriftlich festgelegtes Kriterium bestehen, und die Kamerabilder verlassen nie das Handy.",
    },
    highlights: [
      {
        en: "Trained and compared two object-detection models on 377 frames I labelled from my own footage; the selected one reached 0.862 mAP50.",
        tr: "Kendi çekimlerimden etiketlediğim 377 kare ile iki nesne tespit modeli eğitip karşılaştırdım; seçilen model 0.862 mAP50'ye ulaştı.",
        de: "Zwei Objekterkennungsmodelle auf 377 selbst gelabelten Bildern aus eigenen Aufnahmen trainiert und verglichen; das ausgewählte erreichte 0,862 mAP50.",
      },
      {
        en: "Exported FP32, FP16 and dynamic-range INT8 models (2.4–5.3 MB) and verified the compressed ones stay within 0.01 mAP of FP32.",
        tr: "FP32, FP16 ve dinamik INT8 modeller (2,4–5,3 MB) çıkardım; sıkıştırılmış modellerin FP32'ye 0,01 mAP yakınlıkta kaldığını doğruladım.",
        de: "FP32-, FP16- und dynamische INT8-Modelle (2,4–5,3 MB) exportiert und geprüft, dass die komprimierten Varianten weniger als 0,01 mAP von FP32 abweichen.",
      },
      {
        en: "On 347 labelled real shots, the tuned pipeline catches 134 of 157 makes and calls only 8 of 190 misses a make; reported FG% 45.9% against a true 45.2%.",
        tr: "Etiketli 347 gerçek şutta, ayarlanmış hat 157 isabetin 134'ünü yakalıyor ve 190 ıskanın sadece 8'ini isabet sayıyor; ölçülen FG% %45,9, gerçek değer %45,2.",
        de: "Auf 347 gelabelten echten Würfen erkennt die abgestimmte Pipeline 134 von 157 Treffern und wertet nur 8 von 190 Fehlwürfen als Treffer; gemessene FG% 45,9 % bei tatsächlich 45,2 %.",
      },
      {
        en: "A full app around it: live, drills, history, trends, calibration and profile screens, a 24-drill catalog, on-device SQLite history, portrait and landscape layouts.",
        tr: "Etrafında tam bir uygulama: canlı, drill, geçmiş, trend, kalibrasyon ve profil ekranları, 24 drill'lik katalog, cihaz üzerinde SQLite geçmişi, dikey ve yatay düzenler.",
        de: "Eine vollständige App drumherum: Live-, Drill-, Verlaufs-, Trend-, Kalibrierungs- und Profilansichten, ein Katalog mit 24 Drills, SQLite-Verlauf auf dem Gerät, Hoch- und Querformat.",
      },
      {
        en: "My own tooling: browser labelling tools, Colab training notebooks, CI on every push (typecheck, lint, 133 test files, expo-doctor), a Claude Code skill and a daily QA robot.",
        tr: "Kendi araçlarım: tarayıcıda etiketleme araçları, Colab eğitim notebook'ları, her push'ta CI (typecheck, lint, 133 test dosyası, expo-doctor), bir Claude Code skill'i ve günlük QA robotu.",
        de: "Eigene Werkzeuge: Labeling-Tools im Browser, Colab-Trainings-Notebooks, CI bei jedem Push (Typecheck, Lint, 133 Testdateien, expo-doctor), ein Claude-Code-Skill und ein täglicher QA-Roboter.",
      },
    ],
    metrics: [
      { value: "85%", label: { en: "of real makes detected (134/157)", tr: "gerçek isabet yakalandı (134/157)", de: "echter Treffer erkannt (134/157)" } },
      { value: "0.862", label: { en: "mAP50 of the selected detector", tr: "seçilen dedektörün mAP50 değeri", de: "mAP50 des ausgewählten Detektors" } },
      { value: "v2.45.2", label: { en: "latest release", tr: "son sürüm", de: "aktuelles Release" } },
      { value: "1,911", label: { en: "commits across v1 and v2", tr: "v1 ve v2'de commit", de: "Commits in v1 und v2" } },
    ],
    note: {
      en: "The detector is selected and the pipeline is tuned on real shots. Next up: connecting the model to the live camera and bringing real-time tracking to every court.",
      tr: "Dedektör seçildi ve hat gerçek şutlarla ayarlandı. Sıradaki adım: modeli canlı kameraya bağlamak ve gerçek zamanlı takibi her sahaya taşımak.",
      de: "Der Detektor ist ausgewählt und die Pipeline an echten Würfen abgestimmt. Als Nächstes: das Modell mit der Live-Kamera verbinden und Echtzeit-Tracking auf jeden Platz bringen.",
    },
  },
  {
    slug: "arc-agi-3",
    name: "ARC-AGI-3 agent",
    repo: "ARC-AGI-3",
    visibility: "public",
    featured: true,
    category: "ai",
    status: "research",
    started: "2026-08",
    updated: "2026-08",
    commits: 29,
    stack: ["Python", "vLLM", "Open-weight LLM", "Kaggle", "Jupyter", "Make"],
    motif: "arcgrid",
    summary: {
      en: "An LLM agent for the ARC Prize 2026 Kaggle competition that plays unseen puzzle games offline on a single GPU.",
      tr: "ARC Prize 2026 Kaggle yarışması için, hiç görmediği bulmaca oyunlarını tek GPU'da internetsiz oynayan bir LLM ajanı.",
      de: "Ein LLM-Agent für den Kaggle-Wettbewerb ARC Prize 2026, der unbekannte Puzzlespiele offline auf einer einzigen GPU spielt.",
    },
    overview: {
      en: "ARC-AGI-3 tests whether an agent can work out the rules of games it has never seen. My agent serves an open-weight large language model through vLLM inside Kaggle's offline notebook, reads each frame and answers with one JSON action per step. The score punishes every real action — squared — but not thinking, so the agent is built to understand first and act less, inside a hard 9-hour budget.",
      tr: "ARC-AGI-3, bir ajanın hiç görmediği oyunların kurallarını çözüp çözemeyeceğini ölçer. Ajanım, Kaggle'ın internetsiz notebook'unda açık ağırlıklı büyük bir dil modelini vLLM ile çalıştırıyor, her kareyi okuyor ve her adımda tek bir JSON aksiyonu döndürüyor. Puanlama her gerçek aksiyonu karesiyle cezalandırıyor ama düşünmeyi cezalandırmıyor; bu yüzden ajan, 9 saatlik kesin bütçe içinde önce anlayıp daha az hareket edecek şekilde kuruldu.",
      de: "ARC-AGI-3 prüft, ob ein Agent die Regeln von Spielen herausfinden kann, die er nie gesehen hat. Mein Agent betreibt ein großes Open-Weight-Sprachmodell über vLLM in Kaggles Offline-Notebook, liest jedes Bild und antwortet pro Schritt mit genau einer JSON-Aktion. Die Wertung bestraft jede echte Aktion — quadratisch —, aber nicht das Nachdenken. Deshalb ist der Agent darauf ausgelegt, erst zu verstehen und weniger zu handeln, innerhalb eines festen Budgets von 9 Stunden.",
    },
    highlights: [
      {
        en: "A 2,500-line agent that manages the vLLM server itself: startup retries with memory back-off, clean teardown, per-game and global time budgets, adaptive token budgets.",
        tr: "vLLM sunucusunu kendisi yöneten 2.500 satırlık ajan: bellek azaltarak yeniden başlatma, temiz kapatma, oyun başına ve genel zaman bütçeleri, uyarlanabilir token bütçesi.",
        de: "Ein Agent mit 2.500 Zeilen, der den vLLM-Server selbst verwaltet: Neustarts mit reduziertem Speicher, sauberes Beenden, Zeitbudgets pro Spiel und insgesamt, adaptive Token-Budgets.",
      },
      {
        en: "Reflection memory: after each game the agent records rules it confirmed, and shares the ones that generalise across games while filtering game-specific ones.",
        tr: "Yansıma hafızası: ajan her oyundan sonra doğruladığı kuralları kaydediyor; oyunlar arasında genellenebilenleri paylaşıp oyuna özgü olanları eliyor.",
        de: "Reflexionsgedächtnis: Nach jedem Spiel hält der Agent bestätigte Regeln fest, teilt die verallgemeinerbaren mit anderen Spielen und filtert spielspezifische heraus.",
      },
      {
        en: "A local loop that plays every game with the real engine on my laptop, then builds and pushes the Kaggle notebook with one command.",
        tr: "Her oyunu dizüstü bilgisayarımda gerçek oyun motoruyla oynatan, ardından Kaggle notebook'unu tek komutla oluşturup gönderen yerel bir döngü.",
        de: "Eine lokale Schleife, die jedes Spiel mit der echten Engine auf meinem Laptop spielt und dann das Kaggle-Notebook mit einem Befehl baut und hochlädt.",
      },
      {
        en: "A research report comparing five open-source ARC agents and a step-by-step integration plan grounded in the scoring formula and Kaggle's offline limits.",
        tr: "Beş açık kaynak ARC ajanını karşılaştıran bir araştırma raporu ve puanlama formülüne ve Kaggle'ın internetsiz kısıtlarına dayanan adım adım bir entegrasyon planı.",
        de: "Ein Forschungsbericht, der fünf Open-Source-ARC-Agenten vergleicht, und ein schrittweiser Integrationsplan auf Basis der Wertungsformel und der Offline-Grenzen von Kaggle.",
      },
    ],
    metrics: [
      { value: "1 GPU", label: { en: "offline, no internet during scoring", tr: "internetsiz, puanlama sırasında", de: "offline, ohne Internet bei der Wertung" } },
      { value: "2,558", label: { en: "lines in the agent", tr: "satırlık ajan", de: "Zeilen im Agenten" } },
      { value: "9 h", label: { en: "hard runtime budget", tr: "kesin çalışma bütçesi", de: "festes Laufzeitbudget" } },
    ],
  },
  {
    slug: "monopoly-champion-agent",
    name: "Monopoly Champion Agent",
    repo: "monopoly-champion-agent",
    visibility: "public",
    featured: true,
    category: "ai",
    status: "research",
    started: "2026-08",
    updated: "2026-08",
    commits: 129,
    stack: ["Python", "PyTorch", "PPO", "DDQN", "MCTS / PUCT", "Google Colab", "pytest"],
    motif: "board",
    summary: {
      en: "Reinforcement-learning research to train a Monopoly agent that wins in general — run like a lab, with pre-registered experiments and statistical gates.",
      tr: "Genel olarak kazanan bir Monopoly ajanı eğitmek için pekiştirmeli öğrenme araştırması — önceden kayda geçirilmiş deneyler ve istatistiksel kapılarla, bir laboratuvar gibi yürütüldü.",
      de: "Reinforcement-Learning-Forschung für einen Monopoly-Agenten, der allgemein gewinnt — geführt wie ein Labor, mit vorregistrierten Experimenten und statistischen Kriterien.",
    },
    overview: {
      en: "The goal is an agent that wins against many opponents, not one. On top of a reference engine I trained DDQN, an AlphaZero-style MonopolyZero with PUCT search, and pure PPO agents, and treated every result like a lab result: fixed seeds, held-out evaluation seeds, seat rotation, Wilson confidence intervals and GO/KILL criteria written down before each run.",
      tr: "Amaç, tek bir rakibe değil pek çok rakibe karşı kazanan bir ajan. Bir referans oyun motorunun üzerine DDQN, PUCT aramalı AlphaZero tarzı MonopolyZero ve saf PPO ajanları eğittim; her sonucu bir laboratuvar sonucu gibi ele aldım: sabit seed'ler, eğitimde hiç kullanılmamış değerlendirme seed'leri, koltuk rotasyonu, Wilson güven aralıkları ve her koşudan önce yazılan GO/KILL kriterleri.",
      de: "Ziel ist ein Agent, der gegen viele Gegner gewinnt, nicht gegen einen. Auf einer Referenz-Engine habe ich DDQN, ein MonopolyZero im AlphaZero-Stil mit PUCT-Suche und reine PPO-Agenten trainiert und jedes Ergebnis wie ein Laborergebnis behandelt: feste Seeds, zurückgehaltene Evaluations-Seeds, Sitzrotation, Wilson-Konfidenzintervalle und GO/KILL-Kriterien, die vor jedem Lauf festgelegt wurden.",
    },
    highlights: [
      {
        en: "35 logged experiments, from engine smoke tests to a promotion gate where the 80-game PPO champion beat its 32-, 64- and 128-game opponent families.",
        tr: "Motor duman testlerinden, 80 oyunluk PPO şampiyonunun 32, 64 ve 128 oyunluk rakip ailelerini yendiği terfi kapısına kadar 35 kayıtlı deney.",
        de: "35 protokollierte Experimente, von Smoke-Tests der Engine bis zu einem Promotion-Gate, bei dem der 80-Spiele-PPO-Champion seine Gegnerfamilien mit 32, 64 und 128 Spielen schlug.",
      },
      {
        en: "Found a reproducibility gap in the reference engine (hash seeding across processes), fixed it, and proved bit-exact checkpoint reproducibility with torch.equal.",
        tr: "Referans motorda bir tekrarlanabilirlik açığı (süreçler arası hash seed) buldum, düzelttim ve torch.equal ile checkpoint'lerin bit düzeyinde aynı olduğunu kanıtladım.",
        de: "Eine Lücke in der Reproduzierbarkeit der Referenz-Engine gefunden (Hash-Seeding über Prozesse), behoben und bitgenaue Reproduzierbarkeit der Checkpoints mit torch.equal nachgewiesen.",
      },
      {
        en: "Three RL methods — DDQN, MonopolyZero with PUCT search and PPO — compared head to head, and PPO came out as the clear winner.",
        tr: "Üç RL yöntemi — DDQN, PUCT aramalı MonopolyZero ve PPO — doğrudan karşılaştırıldı ve PPO açık ara kazanan oldu.",
        de: "Drei RL-Methoden — DDQN, MonopolyZero mit PUCT-Suche und PPO — direkt verglichen, mit PPO als klarem Sieger.",
      },
      {
        en: "Strict data rules: the strongest outside agent is evaluation-only — never a teacher, a label source or a fallback.",
        tr: "Katı veri kuralları: en güçlü dış ajan yalnızca değerlendirme için — asla öğretmen, etiket kaynağı veya yedek değil.",
        de: "Strenge Datenregeln: Der stärkste externe Agent dient nur zur Evaluation — nie als Lehrer, Labelquelle oder Fallback.",
      },
    ],
    metrics: [
      { value: "35", label: { en: "pre-registered or logged experiments", tr: "önceden kayıtlı veya loglanmış deney", de: "vorregistrierte oder protokollierte Experimente" } },
      { value: "3", label: { en: "RL methods compared", tr: "karşılaştırılan RL yöntemi", de: "verglichene RL-Methoden" } },
      { value: "129", label: { en: "commits", tr: "commit", de: "Commits" } },
    ],
  },
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    repo: "AI-Machine_Learning",
    visibility: "public",
    featured: true,
    category: "ai",
    status: "learning",
    started: "2026-10",
    updated: "2026-10",
    commits: 41,
    stack: ["Python", "Pygame", "Harvard CS50P"],
    motif: "curve",
    summary: {
      en: "My long-term, public learning log for AI and machine learning — starting with Harvard's CS50P and my own experiments.",
      tr: "Yapay zeka ve makine öğrenmesi için uzun vadeli, herkese açık öğrenme günlüğüm — Harvard CS50P ve kendi denemelerimle başlıyor.",
      de: "Mein langfristiges, öffentliches Lernprotokoll für KI und Machine Learning — beginnend mit Harvards CS50P und eigenen Experimenten.",
    },
    overview: {
      en: "I learn in public. This repository follows my path from Python foundations towards machine learning: every Harvard CS50P problem set is committed as I finish it, next to a workspace for my own small programs. I already build working ML systems; here I keep deepening the theory behind them, one problem set at a time.",
      tr: "Herkesin önünde öğreniyorum. Bu repo, Python temellerinden makine öğrenmesine giden yolumu takip ediyor: Harvard CS50P'nin her problem setini bitirdikçe commit'liyorum, yanında da kendi küçük programlarım için bir çalışma alanı var. Çalışan makine öğrenmesi sistemleri zaten kuruyorum; burada onların arkasındaki teoriyi her seferinde bir problem setiyle daha da derinleştiriyorum.",
      de: "Ich lerne öffentlich. Dieses Repository begleitet meinen Weg von den Python-Grundlagen hin zu Machine Learning: Jede Aufgabe aus Harvards CS50P committe ich, sobald sie fertig ist, daneben liegt ein Arbeitsbereich für eigene kleine Programme. Funktionierende ML-Systeme baue ich bereits; hier vertiefe ich die Theorie dahinter, Aufgabe für Aufgabe.",
    },
    highlights: [
      {
        en: "CS50P weeks 1–2 complete: functions, variables and conditionals, from einstein.py and tip.py to bank, deep, extensions, interpreter and meal.",
        tr: "CS50P 1–2. haftalar tamam: fonksiyonlar, değişkenler ve koşullar; einstein.py ve tip.py'dan bank, deep, extensions, interpreter ve meal'e kadar.",
        de: "CS50P Woche 1–2 abgeschlossen: Funktionen, Variablen und Bedingungen, von einstein.py und tip.py bis bank, deep, extensions, interpreter und meal.",
      },
      {
        en: "My own workspace: basketball shooting-percentage calculators and a Pygame basketball prototype.",
        tr: "Kendi çalışma alanım: basketbol şut yüzdesi hesaplayıcıları ve Pygame ile bir basketbol prototipi.",
        de: "Eigener Arbeitsbereich: Rechner für Basketball-Trefferquoten und ein Basketball-Prototyp mit Pygame.",
      },
      {
        en: "Committed on the day of the work, so the history shows real progress rather than a polished dump.",
        tr: "Çalıştığım gün commit'leniyor; böylece geçmiş, cilalanmış bir döküm değil gerçek ilerlemeyi gösteriyor.",
        de: "Am Tag der Arbeit committet, sodass der Verlauf echten Fortschritt zeigt statt eines polierten Uploads.",
      },
    ],
    metrics: [
      { value: "11", label: { en: "CS50P problems solved", tr: "CS50P problemi çözüldü", de: "CS50P-Aufgaben gelöst" } },
      { value: "41", label: { en: "commits in October", tr: "Ekim'de commit", de: "Commits im Oktober" } },
    ],
  },
  {
    slug: "team-sirius-2026",
    name: "Team Sirius 2026",
    repo: "Team_Sirius_2026",
    visibility: "public",
    featured: true,
    category: "robotics",
    status: "shipped",
    started: "2026-01",
    updated: "2026-02",
    commits: 1,
    stack: ["Java", "WPILib", "PathPlanner", "REVLib", "navX2", "Limelight", "React", "TypeScript", "Vite"],
    motif: "swerve",
    summary: {
      en: "Swerve-drive robot code and a custom driver dashboard for FRC Team Sirius #9468 in the 2026 REBUILT season.",
      tr: "FRC Team Sirius #9468 için 2026 REBUILT sezonunda swerve-drive robot kodu ve özel sürücü paneli.",
      de: "Swerve-Drive-Robotercode und ein eigenes Fahrer-Dashboard für das FRC-Team Sirius #9468 in der Saison 2026 REBUILT.",
    },
    overview: {
      en: "Robot code for my FIRST Robotics Competition team. I rewrote the swerve-drive base for MK4i modules with NEO motors and a navX2 gyro, added Limelight AprilTag auto-alignment, and built the autonomous routines in PathPlanner. The drivers get a web dashboard I wrote that reads the robot's state live over NetworkTables.",
      tr: "FIRST Robotics Competition takımımın robot kodu. MK4i modüller, NEO motorlar ve navX2 jiroskop için swerve-drive şasesini yeniden yazdım, Limelight ile AprilTag'e otomatik hizalama ekledim ve otonom rutinleri PathPlanner'da kurdum. Sürücüler, robotun durumunu NetworkTables üzerinden canlı okuyan, benim yazdığım bir web paneli kullanıyor.",
      de: "Robotercode für mein Team in der FIRST Robotics Competition. Ich habe die Swerve-Drive-Basis für MK4i-Module mit NEO-Motoren und navX2-Gyro neu geschrieben, eine AprilTag-Ausrichtung mit Limelight ergänzt und die autonomen Routinen in PathPlanner gebaut. Die Fahrer nutzen ein von mir geschriebenes Web-Dashboard, das den Roboterzustand live über NetworkTables liest.",
    },
    highlights: [
      {
        en: "Field-oriented swerve drive: module kinematics, gyro integration and a joystick drive command.",
        tr: "Sahaya göre yönlenen swerve-drive: modül kinematiği, jiroskop entegrasyonu ve joystick sürüş komutu.",
        de: "Feldorientierter Swerve Drive: Modulkinematik, Gyro-Integration und ein Joystick-Fahrbefehl.",
      },
      {
        en: "AlignToTag: three PID controllers — distance, strafe and rotation — driven by Limelight AprilTag data.",
        tr: "AlignToTag: Limelight AprilTag verisiyle çalışan üç PID kontrolcü — mesafe, yanal kayma ve dönüş.",
        de: "AlignToTag: drei PID-Regler — Abstand, seitliche Bewegung und Rotation — gespeist mit AprilTag-Daten der Limelight.",
      },
      {
        en: "17 PathPlanner autonomous routines for different start positions.",
        tr: "Farklı başlangıç konumları için 17 PathPlanner otonom rutini.",
        de: "17 autonome PathPlanner-Routinen für verschiedene Startpositionen.",
      },
      {
        en: "A React + TypeScript driver dashboard (Vite, Tailwind) with drive and autonomous widgets over NetworkTables 4.",
        tr: "NetworkTables 4 üzerinden sürüş ve otonom widget'ları olan React + TypeScript sürücü paneli (Vite, Tailwind).",
        de: "Ein Fahrer-Dashboard mit React und TypeScript (Vite, Tailwind) mit Fahr- und Autonom-Widgets über NetworkTables 4.",
      },
    ],
    metrics: [
      { value: "#9468", label: { en: "FRC team number", tr: "FRC takım numarası", de: "FRC-Teamnummer" } },
      { value: "17", label: { en: "autonomous routines", tr: "otonom rutin", de: "autonome Routinen" } },
      { value: "3", label: { en: "PID loops for tag alignment", tr: "hizalama için PID döngüsü", de: "PID-Regler zur Ausrichtung" } },
    ],
  },

  {
    slug: "topi-desktop-pet",
    name: "Topi",
    repo: "topi-desktop-pet",
    visibility: "public",
    category: "tools",
    status: "shipped",
    started: "2026-10",
    updated: "2026-10",
    commits: 1,
    stack: ["Python", "PySide6", "Win32 API"],
    motif: "terminal",
    summary: {
      en: "A basketball-headed desktop pet that lives in the corner of the screen, reacts to what you're doing and keeps your notes.",
      tr: "Ekranın köşesinde yaşayan, ne yaptığına göre tepki veren ve notlarını tutan, basketbol topu kafalı bir masaüstü pet.",
      de: "Ein Desktop-Haustier mit Basketball-Kopf, das in der Bildschirmecke lebt, auf deine Tätigkeit reagiert und deine Notizen speichert.",
    },
    overview: {
      en: "Topi is a small character in a number 3 jersey. Drag it anywhere, click to write a note, pick a mood — coding, studying, basketball — and it animates to match. It falls asleep when you're away and wakes up when you return.",
      tr: "Topi, 3 numaralı formalı küçük bir karakter. İstediğin yere sürükle, not yazmak için tıkla, bir durum seç — kod, ders, basketbol — animasyonu ona göre değişsin. Bilgisayardan uzaklaşınca uyur, dönünce uyanır.",
      de: "Topi ist eine kleine Figur im Trikot mit der Nummer 3. Zieh sie irgendwohin, klick für eine Notiz, wähl eine Stimmung — Coden, Lernen, Basketball — und die Animation passt sich an. Wenn du weg bist, schläft Topi ein, und wacht wieder auf, wenn du zurückkommst.",
    },
    highlights: [
      {
        en: "A state machine picks the animation; temporary states (thinking, celebrating, sleeping) layer over the chosen one.",
        tr: "Animasyonu bir durum makinesi seçiyor; geçici durumlar (düşünme, kutlama, uyuma) seçilen durumun üzerine biniyor.",
        de: "Eine Zustandsmaschine wählt die Animation; temporäre Zustände (Nachdenken, Feiern, Schlafen) legen sich über den gewählten.",
      },
      {
        en: "Global hotkeys and idle detection through two small Win32 calls; uses about 2% of one CPU core at its busiest.",
        tr: "İki küçük Win32 çağrısıyla global kısayollar ve boşta kalma tespiti; en hareketli anında tek çekirdeğin yaklaşık %2'sini kullanıyor.",
        de: "Globale Tastenkürzel und Leerlauferkennung über zwei kleine Win32-Aufrufe; braucht im aktivsten Zustand etwa 2 % eines CPU-Kerns.",
      },
      {
        en: "Offline and private: no admin rights, no registry writes, data in plain JSON files.",
        tr: "İnternetsiz ve gizli: yönetici izni yok, kayıt defterine yazma yok, veriler düz JSON dosyalarında.",
        de: "Offline und privat: keine Adminrechte, keine Registry-Einträge, Daten in einfachen JSON-Dateien.",
      },
    ],
  },
  {
    slug: "kesit",
    name: "Kesit",
    repo: "kesit",
    visibility: "public",
    category: "tools",
    status: "shipped",
    started: "2026-10",
    updated: "2026-10",
    commits: 3,
    stack: ["C#", ".NET 10", "WPF", "Win32 API", "Windows OCR"],
    motif: "terminal",
    summary: {
      en: "A fast screenshot and annotation tool for Windows 11: capture a region or window, mark it up, blur what's private, copy or save.",
      tr: "Windows 11 için hızlı bir ekran görüntüsü & işaretleme aracı: bölge ya da pencere yakala, işaretle, gizli yerleri pikselleştir, kopyala ya da kaydet.",
      de: "Ein schnelles Screenshot- & Markierungs-Tool für Windows 11: Bereich oder Fenster aufnehmen, markieren, Privates verpixeln, kopieren oder speichern.",
    },
    overview: {
      en: "Press Print Screen, the screen freezes, drag a region — or click a window to grab it with its real borders. The editor adds arrows, boxes, text, numbered steps and pixelation, and the built-in Windows OCR copies any text in the image, Turkish included, without the internet.",
      tr: "Print Screen'e bas, ekran donsun, bir alan seç — ya da bir pencereye tıklayıp onu gerçek sınırlarıyla yakala. Düzenleyici ok, kutu, metin, numaralı adım ve pikselleştirme ekliyor; Windows'un yerleşik OCR'ı da görüntüdeki yazıyı, Türkçe dahil, internetsiz kopyalıyor.",
      de: "Print Screen drücken, der Bildschirm friert ein, Bereich aufziehen — oder ein Fenster anklicken und mit seinen echten Rändern aufnehmen. Der Editor ergänzt Pfeile, Rahmen, Text, nummerierte Schritte und Verpixelung, und die eingebaute Windows-OCR kopiert jeden Text im Bild, auch Türkisch, ohne Internet.",
    },
    highlights: [
      {
        en: "Region, window, full-screen, active-window and delayed capture, with a magnifier, pixel coordinates and a colour picker while selecting.",
        tr: "Bölge, pencere, tam ekran, aktif pencere ve gecikmeli yakalama; seçim sırasında büyüteç, piksel koordinatı ve renk kodu.",
        de: "Bereichs-, Fenster-, Vollbild-, Aktivfenster- und verzögerte Aufnahme, mit Lupe, Pixelkoordinaten und Farbwähler bei der Auswahl.",
      },
      {
        en: "Pixel-exact on multi-monitor setups from 100% to 300% scaling (Per-Monitor DPI v2); all screens captured in about 100–200 ms.",
        tr: "%100–%300 ölçekli çok monitörlü sistemlerde piksel hassasiyeti (Per-Monitor DPI v2); tüm ekranlar yaklaşık 100–200 ms'de yakalanıyor.",
        de: "Pixelgenau auf Multi-Monitor-Systemen mit 100 % bis 300 % Skalierung (Per-Monitor DPI v2); alle Bildschirme in etwa 100–200 ms aufgenommen.",
      },
      {
        en: "Pin a capture as an always-on-top window, unlimited undo/redo, and Fluent styling with light, dark and system themes.",
        tr: "Yakalamayı her zaman üstte duran bir pencere olarak sabitleme, sınırsız geri al/yinele ve açık, koyu & sistem temalı Fluent tasarım.",
        de: "Aufnahmen als Fenster immer im Vordergrund anheften, unbegrenztes Rückgängig/Wiederholen und Fluent-Design mit hellem, dunklem & System-Theme.",
      },
      {
        en: "0% CPU while idle in the tray, no admin rights, no registry writes, and an end-to-end smoke test that drives every tool.",
        tr: "Sistem tepsisinde boştayken %0 işlemci, yönetici izni yok, kayıt defterine yazma yok ve tüm araçları çalıştıran uçtan uca test.",
        de: "0 % CPU im Leerlauf im Infobereich, keine Adminrechte, keine Registry-Einträge und ein End-to-End-Test, der jedes Werkzeug durchläuft.",
      },
    ],
  },
  {
    slug: "defter",
    name: "Defter",
    repo: "defter",
    visibility: "public",
    category: "tools",
    status: "shipped",
    started: "2026-10",
    updated: "2026-10",
    commits: 1,
    stack: ["TypeScript", "Electron", "React", "CodeMirror 6", "Excalidraw", "Mermaid", "KaTeX"],
    motif: "terminal",
    summary: {
      en: "An Obsidian-style local notebook for ideas, lessons, code and drawings — linked Markdown notes, a graph view and built-in sketching.",
      tr: "Fikirler, ders notları, kod & çizimler için Obsidian tarzı yerel bir defter — bağlantılı Markdown notları, grafik görünümü ve yerleşik çizim.",
      de: "Ein lokales Notizbuch im Obsidian-Stil für Ideen, Unterricht, Code & Zeichnungen — verlinkte Markdown-Notizen, Graphansicht und eingebautes Zeichnen.",
    },
    overview: {
      en: "Notes stay on the computer as plain .md files, so the same folder opens in Obsidian too. [[Links]], backlinks and a graph connect them; Excalidraw drawings, Mermaid diagrams and KaTeX maths live right inside the notes, and everything exports to PDF or a single HTML file.",
      tr: "Notlar bilgisayarda düz .md dosyaları olarak duruyor; aynı klasör Obsidian'da da açılıyor. [[Bağlantılar]], geri bağlantılar ve grafik notları birbirine bağlıyor; Excalidraw çizimleri, Mermaid şemaları ve KaTeX matematiği notların içinde yaşıyor, her şey PDF'e ya da tek dosya HTML'e aktarılabiliyor.",
      de: "Notizen bleiben als einfache .md-Dateien auf dem Rechner, derselbe Ordner öffnet sich also auch in Obsidian. [[Links]], Backlinks und ein Graph verbinden sie; Excalidraw-Zeichnungen, Mermaid-Diagramme und KaTeX-Formeln stehen direkt in den Notizen, und alles lässt sich als PDF oder einzelne HTML-Datei exportieren.",
    },
    highlights: [
      {
        en: "CodeMirror 6 editor with live formatting, code highlighting in 100+ languages, side-by-side preview and safe renames that update every link.",
        tr: "Canlı biçimlendirmeli CodeMirror 6 editörü, 100+ dilde kod renklendirme, yan yana önizleme ve tüm bağlantıları güncelleyen güvenli yeniden adlandırma.",
        de: "CodeMirror-6-Editor mit Live-Formatierung, Code-Highlighting in über 100 Sprachen, Vorschau nebeneinander und sicherem Umbenennen, das jeden Link aktualisiert.",
      },
      {
        en: "Made for lessons: KaTeX maths, tables, callouts, task lists, daily notes, templates and Turkish-aware fuzzy search across every note.",
        tr: "Ders için: KaTeX matematik, tablolar, callout kutuları, görev listeleri, günlük not, şablonlar ve tüm notlarda Türkçe karakter duyarsız bulanık arama.",
        de: "Für den Unterricht: KaTeX-Mathematik, Tabellen, Callouts, Aufgabenlisten, Tagesnotizen, Vorlagen und eine unscharfe Suche über alle Notizen, die türkische Zeichen versteht.",
      },
      {
        en: "Hardened Electron: context isolation, sandbox, strict CSP, a custom defter:// protocol and file access limited to the chosen vault.",
        tr: "Güçlendirilmiş Electron: contextIsolation, sandbox, sıkı CSP, özel defter:// protokolü ve seçilen kasa klasörüyle sınırlı dosya erişimi.",
        de: "Gehärtetes Electron: Context Isolation, Sandbox, strikte CSP, ein eigenes defter://-Protokoll und Dateizugriff nur im gewählten Vault.",
      },
      {
        en: "Fully offline with atomic saves; heavy libraries load on demand, so it idles at about 0.2% CPU.",
        tr: "Tamamen internetsiz, atomik kayıtlarla; ağır kütüphaneler gerektiğinde yükleniyor, böylece boşta yaklaşık %0,2 işlemci kullanıyor.",
        de: "Komplett offline mit atomaren Speichervorgängen; schwere Bibliotheken laden bei Bedarf, im Leerlauf etwa 0,2 % CPU.",
      },
    ],
  },
  {
    slug: "atolye",
    name: "Atölye",
    repo: "atolye",
    visibility: "public",
    category: "tools",
    status: "shipped",
    started: "2026-10",
    updated: "2026-10",
    commits: 1,
    stack: ["TypeScript", "Electron", "React", "CodeMirror 6", "Excalidraw", "Mermaid"],
    motif: "terminal",
    summary: {
      en: "A local workspace for developers: linked notes, code snippets, a Kanban board, an HTTP client and twelve developer tools in one app.",
      tr: "Yazılımcılar için yerel bir çalışma alanı: bağlantılı notlar, kod parçaları, Kanban panosu, HTTP istemcisi ve tek uygulamada on iki geliştirici aracı.",
      de: "Ein lokaler Arbeitsbereich für Entwickler: verlinkte Notizen, Code-Snippets, ein Kanban-Board, ein HTTP-Client und zwölf Entwickler-Tools in einer App.",
    },
    overview: {
      en: "Atölye builds on Obsidian-style notes and adds five sections a developer reaches for every day. Snippets are real source files you can search, filter by language and copy in one click; the board saves to plain Markdown; and the HTTP client reads REST Client-compatible .http files.",
      tr: "Atölye, Obsidian tarzı notların üzerine bir yazılımcının her gün ihtiyaç duyduğu beş bölüm ekliyor. Kod parçaları aranabilen, dile göre filtrelenebilen ve tek tıkla kopyalanabilen gerçek kaynak dosyaları; pano düz Markdown'a kaydediliyor; HTTP istemcisi de REST Client uyumlu .http dosyalarını okuyor.",
      de: "Atölye baut auf Notizen im Obsidian-Stil auf und ergänzt fünf Bereiche, die Entwickler täglich brauchen. Snippets sind echte Quelldateien, die sich durchsuchen, nach Sprache filtern und mit einem Klick kopieren lassen; das Board speichert in einfachem Markdown; und der HTTP-Client liest REST-Client-kompatible .http-Dateien.",
    },
    highlights: [
      {
        en: "Drag-and-drop Kanban board stored as plain Markdown, next to notes with [[links]], backlinks, a graph, Mermaid and Excalidraw.",
        tr: "Düz Markdown olarak saklanan sürükle-bırak Kanban panosu; yanında [[bağlantılı]] notlar, geri bağlantılar, grafik, Mermaid & Excalidraw.",
        de: "Kanban-Board mit Drag-and-drop, gespeichert als einfaches Markdown, dazu Notizen mit [[Links]], Backlinks, Graph, Mermaid & Excalidraw.",
      },
      {
        en: "HTTP client with variables, JSON responses and copy-as-cURL; it only goes online when you press Send, with a timeout and a 5 MB response limit.",
        tr: "Değişkenli, JSON yanıtlı ve cURL'e kopyalamalı HTTP istemcisi; sadece \"Gönder\"e bastığında internete çıkıyor, zaman aşımı ve 5 MB yanıt sınırıyla.",
        de: "HTTP-Client mit Variablen, JSON-Antworten und Kopieren als cURL; online geht er nur, wenn du auf Senden drückst — mit Timeout und 5-MB-Antwortlimit.",
      },
      {
        en: "Twelve built-in tools: JSON, text diff, regex, JWT, Base64, URL, timestamps, UUID, hashes, number bases, colours and case conversion.",
        tr: "On iki yerleşik araç: JSON, metin karşılaştırma, Regex, JWT, Base64, URL, zaman damgası, UUID, hash, sayı tabanı, renk ve metin dönüştürme.",
        de: "Zwölf eingebaute Tools: JSON, Textvergleich, Regex, JWT, Base64, URL, Zeitstempel, UUID, Hashes, Zahlensysteme, Farben und Schreibweisen-Umwandlung.",
      },
      {
        en: "Command palette, quick open, full-text search, developer templates (ADR, bug report, API doc, code review) and PDF/HTML export.",
        tr: "Komut paleti, hızlı açma, tam metin arama, geliştirici şablonları (ADR, hata raporu, API dokümanı, kod incelemesi) ve PDF/HTML dışa aktarma.",
        de: "Befehlspalette, Schnellöffnen, Volltextsuche, Entwicklervorlagen (ADR, Fehlerbericht, API-Doku, Code-Review) und PDF/HTML-Export.",
      },
    ],
  },
  {
    slug: "apex-grid",
    name: "APEX GRID",
    repo: "apex-grid",
    visibility: "private",
    category: "games",
    status: "active",
    started: "2026-10",
    updated: "2026-10",
    commits: 34,
    stack: ["Unity", "C#", "Unity Gaming Services", "Python", "PowerShell"],
    motif: "track",
    summary: {
      en: "An original open-wheel racing game for Windows with AI rivals, damage and tyre wear, and 2–8 player LAN races.",
      tr: "Yapay zeka rakipleri, hasar ve lastik aşınması ve 2–8 oyunculu LAN yarışları olan, Windows için özgün bir formula yarış oyunu.",
      de: "Ein eigenes Formel-Rennspiel für Windows mit KI-Gegnern, Schaden und Reifenverschleiß sowie LAN-Rennen für 2–8 Spieler.",
    },
    overview: {
      en: "APEX GRID is a complete racing game I designed and built in Unity: free drive across three connected circuits, quick races against up to 11 AI drivers, a garage with two original cars, and private LAN rooms for friends. Every milestone ships as a packaged Windows build with recorded test evidence.",
      tr: "APEX GRID, Unity'de tasarlayıp geliştirdiğim tam bir yarış oyunu: birbirine bağlı üç pistte serbest sürüş, 11'e kadar yapay zeka sürücüye karşı hızlı yarış, iki özgün araçlı garaj ve arkadaşlar için özel LAN odaları. Her kilometre taşı, test kanıtları kaydedilmiş paketlenmiş bir Windows sürümü olarak çıkıyor.",
      de: "APEX GRID ist ein vollständiges Rennspiel, das ich in Unity entworfen und gebaut habe: freies Fahren auf drei verbundenen Strecken, schnelle Rennen gegen bis zu 11 KI-Fahrer, eine Garage mit zwei eigenen Autos und private LAN-Räume für Freunde. Jeder Meilenstein erscheint als gepackter Windows-Build mit dokumentierten Testnachweisen.",
    },
    highlights: [
      {
        en: "Quick race: 1–20 laps, 1–11 AI opponents, four difficulties, checkpoints, track limits, penalties and results.",
        tr: "Hızlı yarış: 1–20 tur, 1–11 yapay zeka rakip, dört zorluk, kontrol noktaları, pist sınırları, cezalar ve sonuçlar.",
        de: "Schnelles Rennen: 1–20 Runden, 1–11 KI-Gegner, vier Schwierigkeitsgrade, Checkpoints, Streckenbegrenzungen, Strafen und Ergebnisse.",
      },
      {
        en: "Damage, tyre wear and surface grip change the driving; a service bay repairs the car.",
        tr: "Hasar, lastik aşınması ve zemin tutuşu sürüşü değiştiriyor; servis alanı aracı onarıyor.",
        de: "Schaden, Reifenverschleiß und Untergrundhaftung verändern das Fahrverhalten; eine Servicebox repariert das Auto.",
      },
      {
        en: "TR/EN menus, six settings pages, keyboard and gamepad rebinding with conflict handling, versioned saves with backup recovery.",
        tr: "TR/EN menüler, altı ayar sayfası, çakışma kontrollü klavye ve gamepad tuş atama, yedekten kurtarmalı sürümlü kayıtlar.",
        de: "TR/EN-Menüs, sechs Einstellungsseiten, Tastatur- und Gamepad-Belegung mit Konfliktprüfung, versionierte Spielstände mit Backup-Wiederherstellung.",
      },
    ],
    note: {
      en: "A private Windows release candidate with working 2–8 player LAN races. Next up: taking multiplayer online over the internet.",
      tr: "2–8 oyunculu LAN yarışları çalışan, private bir Windows sürüm adayı. Sıradaki adım: çok oyunculu modu internet üzerinden çevrim içi hale getirmek.",
      de: "Ein privater Windows-Release-Kandidat mit funktionierenden LAN-Rennen für 2–8 Spieler. Als Nächstes: Multiplayer online über das Internet.",
    },
  },
  {
    slug: "kahvehane-midnight-tiles",
    name: "Kahvehane: Midnight Tiles",
    repo: "midnight-tiles",
    visibility: "private",
    category: "games",
    status: "active",
    started: "2026-10",
    updated: "2026-10",
    commits: 39,
    stack: ["Unity 6", "C#", "URP", "JSON content"],
    motif: "tiles",
    summary: {
      en: "A single-player roguelike played with okey tiles, set in a Turkish coffeehouse at midnight.",
      tr: "Gece yarısı bir Türk kahvehanesinde geçen, okey taşlarıyla oynanan tek oyunculu bir roguelike.",
      de: "Ein Einzelspieler-Roguelike mit Okey-Steinen, angesiedelt in einem türkischen Kaffeehaus um Mitternacht.",
    },
    overview: {
      en: "Draw, open or extend a set, discard one tile — and outscore the regulars across eight tables in one night. Charms, brews and master lessons change the rules as you go. Version 0.8 adds a hands-on tutorial and a window that adapts to any screen size.",
      tr: "Taş çek, per aç ya da büyüt, bir taş at — ve bir gecede sekiz masada müdavimlerin puanını geç. Tılsımlar, demlemeler ve usta dersleri ilerledikçe kuralları değiştiriyor. 0.8 sürümü uygulamalı bir öğretici ve her ekran boyutuna uyan bir pencere getiriyor.",
      de: "Ziehen, eine Reihe auslegen oder erweitern, einen Stein abwerfen — und in einer Nacht an acht Tischen die Stammgäste übertrumpfen. Talismane, Aufgüsse und Meisterlektionen verändern dabei die Regeln. Version 0.8 bringt ein praktisches Tutorial und ein Fenster, das sich jeder Bildschirmgröße anpasst.",
    },
    highlights: [
      {
        en: "8 tables and 24 matches per night, 120 charms, 30 brews, 12 masters, 6 characters and a daily challenge.",
        tr: "Gece başına 8 masa ve 24 karşılaşma, 120 tılsım, 30 demleme, 12 usta, 6 karakter ve günlük meydan okuma.",
        de: "8 Tische und 24 Partien pro Nacht, 120 Talismane, 30 Aufgüsse, 12 Meister, 6 Figuren und eine tägliche Herausforderung.",
      },
      {
        en: "Rules core in engine-free C#, content in JSON; 289 EditMode and 23 PlayMode tests.",
        tr: "Oyun motorundan bağımsız C# ile kural çekirdeği, JSON ile içerik; 289 EditMode ve 23 PlayMode testi.",
        de: "Regelkern in Engine-unabhängigem C#, Inhalte in JSON; 289 EditMode- und 23 PlayMode-Tests.",
      },
      {
        en: "Interactive tutorial, TR/EN, mouse, keyboard and gamepad, UI scale from 80% to 140%, verified on 11 screen sizes.",
        tr: "Etkileşimli öğretici, TR/EN, fare, klavye ve gamepad, %80–140 arayüz ölçeği, 11 ekran boyutunda doğrulandı.",
        de: "Interaktives Tutorial, TR/EN, Maus, Tastatur und Gamepad, UI-Skalierung von 80 % bis 140 %, geprüft auf 11 Bildschirmgrößen.",
      },
    ],
  },
  {
    slug: "kalem-madlen-case-study",
    name: "Kalem — Madlen case study",
    repo: "madlen-case-study",
    visibility: "public",
    category: "web",
    status: "shipped",
    started: "2026-10",
    updated: "2026-10",
    commits: 35,
    stack: ["Next.js", "TypeScript", "Gemini API", "Headless Chrome"],
    motif: "browser",
    summary: {
      en: "My Growth Intern case study for Madlen: sourced competitor research, a value proposition and three working AI mini products.",
      tr: "Madlen Growth Intern vaka çalışmam: kaynaklı rakip analizi, değer önerisi ve çalışan üç yapay zeka mini ürünü.",
      de: "Meine Fallstudie für Madlens Growth-Intern-Stelle: belegte Wettbewerbsanalyse, Wertversprechen und drei funktionierende KI-Mini-Produkte.",
    },
    overview: {
      en: "I researched Madlen's competitors with sources, wrote a unique value proposition, proposed a growth initiative and then built it: Kalem, a Next.js app with three AI tools for students and teachers — lesson prep, a study helper and essay feedback. The Instagram carousel was designed in HTML and rendered with headless Chrome.",
      tr: "Madlen'in rakiplerini kaynak göstererek araştırdım, özgün bir değer önerisi yazdım, bir büyüme girişimi önerdim ve onu geliştirdim: Kalem, öğrenciler ve öğretmenler için üç yapay zeka aracı olan bir Next.js uygulaması — ders hazırlığı, çalışma yardımcısı ve kompozisyon geri bildirimi. Instagram carousel'ı HTML ile tasarlandı ve headless Chrome ile render edildi.",
      de: "Ich habe Madlens Wettbewerber mit Quellen recherchiert, ein Wertversprechen formuliert, eine Wachstumsinitiative vorgeschlagen und sie dann gebaut: Kalem, eine Next.js-App mit drei KI-Werkzeugen für Schüler und Lehrkräfte — Unterrichtsvorbereitung, Lernhilfe und Aufsatz-Feedback. Das Instagram-Karussell wurde in HTML gestaltet und mit Headless Chrome gerendert.",
    },
    highlights: [
      {
        en: "Competitor analysis and UVP reasoning with every claim sourced.",
        tr: "Her iddiası kaynaklı rakip analizi ve değer önerisi gerekçesi.",
        de: "Wettbewerbsanalyse und UVP-Begründung, jede Aussage mit Quelle.",
      },
      {
        en: "Three AI mini products in one Next.js app.",
        tr: "Tek bir Next.js uygulamasında üç yapay zeka mini ürünü.",
        de: "Drei KI-Mini-Produkte in einer Next.js-App.",
      },
      {
        en: "Bilingual submission (TR/EN) with a PDF build script and a five-slide carousel.",
        tr: "PDF oluşturma script'i ve beş slaytlık carousel ile iki dilli teslim (TR/EN).",
        de: "Zweisprachige Abgabe (TR/EN) mit PDF-Build-Skript und Karussell mit fünf Folien.",
      },
    ],
  },
  {
    slug: "upscale-program",
    name: "Upscale Program",
    repo: "upscale-program",
    visibility: "public",
    category: "tools",
    status: "shipped",
    started: "2026-09",
    updated: "2026-09",
    commits: 12,
    stack: ["Python", "Tkinter", "FFmpeg", "AI upscaling", "Vulkan"],
    motif: "terminal",
    summary: {
      en: "A GPU-free video upscaler that takes personal videos from 360p to 1080p with an AI upscaling model on integrated Intel graphics.",
      tr: "Kişisel videoları bir yapay zeka büyütme modeliyle entegre Intel grafik üzerinde 360p'den 1080p'ye yükselten, harici GPU gerektirmeyen bir video büyütücü.",
      de: "Ein Video-Upscaler ohne dedizierte GPU, der private Videos mit einem KI-Upscaling-Modell auf integrierter Intel-Grafik von 360p auf 1080p bringt.",
    },
    overview: {
      en: "FFmpeg extracts the frames, an AI model upscales each one through Vulkan on Intel Iris Xe, and FFmpeg puts them back together with the original audio. A small GUI and a CLI wrap the whole pipeline.",
      tr: "FFmpeg kareleri çıkarıyor, bir yapay zeka modeli her kareyi Intel Iris Xe üzerinde Vulkan ile büyütüyor ve FFmpeg onları orijinal sesle tekrar birleştiriyor. Küçük bir arayüz ve bir CLI tüm hattı sarıyor.",
      de: "FFmpeg extrahiert die Einzelbilder, ein KI-Modell skaliert jedes über Vulkan auf Intel Iris Xe hoch, und FFmpeg setzt sie mit dem Originalton wieder zusammen. Eine kleine GUI und eine CLI umschließen die gesamte Pipeline.",
    },
    highlights: [
      {
        en: "One setup script downloads and installs the upscaling engine.",
        tr: "Tek bir kurulum script'i büyütme motorunu indirip kuruyor.",
        de: "Ein Setup-Skript lädt die Upscaling-Engine herunter und installiert sie.",
      },
      {
        en: "Three models for real video, photos and animation; 2×, 3× and 4× scale.",
        tr: "Gerçek video, fotoğraf ve animasyon için üç model; 2×, 3× ve 4× ölçek.",
        de: "Drei Modelle für echtes Video, Fotos und Animation; 2-, 3- und 4-fache Skalierung.",
      },
      {
        en: "Tkinter GUI for picking files and models, plus a CLI for scripted runs.",
        tr: "Dosya ve model seçmek için Tkinter arayüzü, betikli çalıştırma için CLI.",
        de: "Tkinter-GUI zur Auswahl von Dateien und Modellen, dazu eine CLI für Skripte.",
      },
    ],
  },
  {
    slug: "link-launchpad",
    name: "Link Launchpad",
    repo: "link-launchpad",
    visibility: "public",
    category: "web",
    status: "shipped",
    started: "2026-09",
    updated: "2026-09",
    commits: 14,
    stack: ["JavaScript", "HTML", "CSS", "PWA", "localStorage"],
    motif: "browser",
    liveUrl: "https://soyleremo3.github.io/link-launchpad/",
    summary: {
      en: "A personal shortcut dashboard with groups, search and full theming — no server, installable, works offline, TR/EN.",
      tr: "Gruplar, arama ve tam tema desteğiyle kişisel kısayol paneli — sunucu yok, yüklenebilir, internetsiz çalışır, TR/EN.",
      de: "Ein persönliches Shortcut-Dashboard mit Gruppen, Suche und vollständigem Theming — ohne Server, installierbar, offline nutzbar, TR/EN.",
    },
    overview: {
      en: "Browsers limit how many shortcuts a new-tab page can hold. Link Launchpad doesn't: add any link, group it, reorder by dragging and open it with one click or one keystroke. Everything stays in the browser and can be exported to a file.",
      tr: "Tarayıcılar yeni sekme sayfasındaki kısayol sayısını sınırlıyor. Link Launchpad sınırlamıyor: istediğin linki ekle, grupla, sürükleyerek sırala ve tek tıkla ya da tek tuşla aç. Her şey tarayıcıda kalıyor ve bir dosyaya aktarılabiliyor.",
      de: "Browser begrenzen, wie viele Shortcuts eine Neuer-Tab-Seite haben kann. Link Launchpad nicht: Links hinzufügen, gruppieren, per Drag-and-drop sortieren und mit einem Klick oder Tastendruck öffnen. Alles bleibt im Browser und lässt sich als Datei exportieren.",
    },
    highlights: [
      {
        en: "Live search with keyboard shortcuts, automatic favicons with letter-avatar fallback.",
        tr: "Klavye kısayollu canlı arama, harf avatarı yedekli otomatik favicon'lar.",
        de: "Live-Suche mit Tastenkürzeln, automatische Favicons mit Buchstaben-Avatar als Fallback.",
      },
      {
        en: "Theme editor: base, accent, gradient background, card colour, radius, size and columns.",
        tr: "Tema editörü: taban, vurgu rengi, gradyan arka plan, kart rengi, köşe yuvarlaklığı, boyut ve sütunlar.",
        de: "Theme-Editor: Basis, Akzentfarbe, Verlaufshintergrund, Kartenfarbe, Radius, Größe und Spalten.",
      },
      {
        en: "Installable PWA with a service worker, JSON export and import.",
        tr: "Service worker'lı yüklenebilir PWA, JSON dışa ve içe aktarma.",
        de: "Installierbare PWA mit Service Worker, JSON-Export und -Import.",
      },
    ],
  },
  {
    slug: "exposure-members-app",
    name: "Exposure Members",
    repo: "Exposure-Members-APP",
    visibility: "public",
    category: "mobile",
    status: "upcoming",
    started: "2026-07",
    updated: "2026-09",
    commits: 56,
    stack: ["React Native", "Expo", "TypeScript", "NativeWind", "Supabase Auth", "EAS Build & Update"],
    motif: "phone",
    summary: {
      en: "The native iOS app I built for Exposure, a members-only community for AI and startup founders in Türkiye — releasing soon.",
      tr: "Türkiye'deki yapay zeka ve startup kurucuları için üyelik tabanlı bir topluluk olan Exposure için geliştirdiğim native iOS uygulaması — yakında yayında.",
      de: "Die native iOS-App, die ich für Exposure gebaut habe, eine Community nur für Mitglieder — KI- und Startup-Gründer in der Türkei. Erscheint bald.",
    },
    overview: {
      en: "I turned the members' side of exposureai.org into a native app for the startup. Members sign in with an email code and get the directory, job board, weekly one-to-one matching, events, community content and their profile. All data goes through the startup's own API, which checks membership on every request — the app never talks to the database directly.",
      tr: "exposureai.org'un üyelere özel bölümünü girişim için native bir uygulamaya dönüştürdüm. Üyeler e-posta koduyla giriş yapıyor; rehber, iş ilanları, haftalık birebir eşleşme, etkinlikler, topluluk içeriği ve profilleri karşılarında. Tüm veriler, her istekte üyeliği kontrol eden girişimin kendi API'sinden geçiyor — uygulama veritabanıyla asla doğrudan konuşmuyor.",
      de: "Ich habe den Mitgliederbereich von exposureai.org für das Startup in eine native App verwandelt. Mitglieder melden sich mit einem E-Mail-Code an und finden Verzeichnis, Jobbörse, wöchentliches Eins-zu-eins-Matching, Events, Community-Inhalte und ihr Profil. Alle Daten laufen über die eigene API des Startups, die bei jeder Anfrage die Mitgliedschaft prüft — die App spricht nie direkt mit der Datenbank.",
    },
    highlights: [
      {
        en: "Email-code sign-in with Supabase sessions that persist and refresh on the device.",
        tr: "Cihazda saklanan ve yenilenen Supabase oturumlarıyla e-posta kodu girişi.",
        de: "Anmeldung per E-Mail-Code mit Supabase-Sessions, die auf dem Gerät gespeichert und erneuert werden.",
      },
      {
        en: "Directory, jobs (post, apply, refer), weekly match, events, newsletter and videos, plus a native apply form for new members.",
        tr: "Rehber, iş ilanları (ilan verme, başvurma, önerme), haftalık eşleşme, etkinlikler, bülten ve videolar; yeni üyeler için native başvuru formu.",
        de: "Verzeichnis, Jobs (ausschreiben, bewerben, empfehlen), wöchentliches Matching, Events, Newsletter und Videos, dazu ein natives Bewerbungsformular für neue Mitglieder.",
      },
      {
        en: "Push-notification opt-in, over-the-air updates with EAS Update and an iOS release configuration — built on Windows, without a Mac.",
        tr: "Push bildirim izni, EAS Update ile kablosuz güncellemeler ve iOS yayın yapılandırması — Mac olmadan, Windows'ta geliştirildi.",
        de: "Opt-in für Push-Benachrichtigungen, Over-the-Air-Updates mit EAS Update und eine iOS-Release-Konfiguration — entwickelt unter Windows, ohne Mac.",
      },
    ],
  },
  {
    slug: "dailysafe",
    name: "DailySafe",
    repo: "DailySafe",
    visibility: "private",
    category: "mobile",
    status: "prototype",
    started: "2026-08",
    updated: "2026-10",
    commits: 7,
    stack: ["Expo SDK 57", "React Native", "TypeScript", "SQLite", "Zustand", "Reanimated"],
    motif: "phone",
    summary: {
      en: "A privacy-first finance app that answers one question: how much can I safely spend today?",
      tr: "Tek bir soruyu cevaplayan, gizliliği önceleyen bir finans uygulaması: bugün güvenle ne kadar harcayabilirim?",
      de: "Eine Finanz-App mit Datenschutz an erster Stelle, die eine Frage beantwortet: Wie viel kann ich heute sicher ausgeben?",
    },
    overview: {
      en: "DailySafe reserves upcoming bills, savings and big-expense funds out of your balance, then spreads what's left across the days until your next payday. Everything runs on the device: no backend, no account, no analytics.",
      tr: "DailySafe yaklaşan faturaları, birikimleri ve büyük harcama fonlarını bakiyenden ayırıyor, kalanını bir sonraki maaş gününe kadar olan günlere bölüyor. Her şey cihazda çalışıyor: sunucu yok, hesap yok, analitik yok.",
      de: "DailySafe reserviert anstehende Rechnungen, Ersparnisse und Rücklagen für große Ausgaben vom Kontostand und verteilt den Rest auf die Tage bis zum nächsten Zahltag. Alles läuft auf dem Gerät: kein Backend, kein Konto, keine Analytics.",
    },
    highlights: [
      {
        en: "A safe-to-spend engine in pure, tested TypeScript.",
        tr: "Saf ve test edilmiş TypeScript ile güvenli harcama motoru.",
        de: "Eine Safe-to-spend-Engine in reinem, getestetem TypeScript.",
      },
      {
        en: "\"Can I afford this?\" shows the before/after effect of a purchase with a safe, tight or unsafe verdict.",
        tr: "\"Bunu alabilir miyim?\" bir alışverişin öncesi/sonrası etkisini güvenli, sınırda veya güvensiz kararıyla gösteriyor.",
        de: "„Kann ich mir das leisten?“ zeigt die Wirkung eines Kaufs vorher und nachher mit dem Urteil sicher, knapp oder unsicher.",
      },
      {
        en: "Two-to-three-second entry, local bill reminders, insights and charts.",
        tr: "İki üç saniyede kayıt, yerel fatura hatırlatıcıları, içgörüler ve grafikler.",
        de: "Eingabe in zwei bis drei Sekunden, lokale Rechnungserinnerungen, Auswertungen und Diagramme.",
      },
    ],
  },
  {
    slug: "focus-ritual",
    name: "FocusRitual",
    repo: "focus-ritual",
    visibility: "public",
    category: "mobile",
    status: "shipped",
    started: "2026-08",
    updated: "2026-08",
    commits: 148,
    stack: ["React Native", "Expo Router", "TypeScript", "Zustand", "Reanimated"],
    motif: "phone",
    summary: {
      en: "An offline-first focus app that combines a timer, an immersive space and layered ambient sound into reusable rituals.",
      tr: "Zamanlayıcıyı, sürükleyici bir ortamı ve katmanlı ortam seslerini yeniden kullanılabilir ritüellerde birleştiren, internetsiz çalışan bir odak uygulaması.",
      de: "Eine Offline-first-Fokus-App, die Timer, eine immersive Umgebung und geschichtete Hintergrundklänge zu wiederverwendbaren Ritualen verbindet.",
    },
    overview: {
      en: "Not another Pomodoro clone: a ritual stores a timer mode, a focus space and a sound mix as one preset, so starting deep work is one tap. The timer stays correct through backgrounding, the lock screen and app restarts.",
      tr: "Bir Pomodoro kopyası daha değil: bir ritüel; zamanlayıcı modunu, odak ortamını ve ses karışımını tek bir ön ayar olarak saklıyor, böylece derin çalışmaya başlamak tek dokunuş. Zamanlayıcı arka plana alınma, kilit ekranı ve yeniden başlatmalarda doğru kalıyor.",
      de: "Kein weiterer Pomodoro-Klon: Ein Ritual speichert Timer-Modus, Fokusumgebung und Soundmix als ein Preset, sodass konzentriertes Arbeiten mit einem Tipp beginnt. Der Timer bleibt korrekt — im Hintergrund, auf dem Sperrbildschirm und nach einem Neustart der App.",
    },
    highlights: [
      {
        en: "Six timer modes including a Flow Mode with soft check-ins instead of a hard stop.",
        tr: "Kesin bitiş yerine yumuşak hatırlatmalı Akış Modu dahil altı zamanlayıcı modu.",
        de: "Sechs Timer-Modi, darunter ein Flow-Modus mit sanften Check-ins statt hartem Stopp.",
      },
      {
        en: "Seven ambient loops mixed in layers, with per-layer volume, crossfades and lock-screen controls.",
        tr: "Katman başına ses seviyesi, geçişler ve kilit ekranı kontrolleriyle katmanlar halinde karıştırılan yedi ortam sesi.",
        de: "Sieben Ambient-Loops in Ebenen gemischt, mit Lautstärke pro Ebene, Überblendungen und Steuerung auf dem Sperrbildschirm.",
      },
      {
        en: "Custom photo wallpapers with adaptive colour palettes; no account, no backend.",
        tr: "Uyarlanabilir renk paletli özel fotoğraf duvar kâğıtları; hesap yok, sunucu yok.",
        de: "Eigene Fotos als Hintergrund mit adaptiven Farbpaletten; kein Konto, kein Backend.",
      },
    ],
  },
  {
    slug: "breathebox",
    name: "BreatheBox",
    repo: "BreatheBox",
    visibility: "public",
    category: "mobile",
    status: "shipped",
    started: "2026-08",
    updated: "2026-08",
    commits: 12,
    stack: ["Expo", "React Native", "TypeScript", "NativeWind"],
    motif: "phone",
    summary: {
      en: "Instant guided box breathing and 5-4-3-2-1 grounding for panic attacks — no login, no loading, nothing leaves the phone.",
      tr: "Panik atakları için anında rehberli kutu nefesi ve 5-4-3-2-1 topraklanma — giriş yok, yükleme yok, hiçbir şey telefondan çıkmıyor.",
      de: "Sofort angeleitete Box-Atmung und 5-4-3-2-1-Grounding bei Panikattacken — kein Login, keine Ladezeit, nichts verlässt das Handy.",
    },
    overview: {
      en: "When someone opens BreatheBox mid-panic, the exercise starts immediately. The idea was chosen through structured research into what people in this category actually rate highly, not by guessing.",
      tr: "Biri BreatheBox'ı panik anında açtığında egzersiz hemen başlıyor. Fikir tahminle değil, bu kategorideki insanların gerçekten neyi yüksek puanladığına dair yapılandırılmış bir araştırmayla seçildi.",
      de: "Wer BreatheBox mitten in einer Panikattacke öffnet, startet sofort die Übung. Die Idee entstand nicht aus einer Vermutung, sondern aus strukturierter Recherche dazu, was Menschen in dieser Kategorie wirklich gut bewerten.",
    },
    highlights: [
      {
        en: "A decision memo with market signals, scoring tables and an adversarial critique behind the idea.",
        tr: "Fikrin arkasında pazar sinyalleri, puanlama tabloları ve eleştirel bir değerlendirme içeren karar notu.",
        de: "Hinter der Idee steht ein Entscheidungsmemo mit Marktsignalen, Bewertungstabellen und einer kritischen Gegenprüfung.",
      },
      {
        en: "Unit tests for breathing timing and the episode log.",
        tr: "Nefes zamanlaması ve atak kaydı için birim testleri.",
        de: "Unit-Tests für das Atemtiming und das Episodenprotokoll.",
      },
      {
        en: "No account, no backend, no AI — fully local.",
        tr: "Hesap yok, sunucu yok, yapay zeka yok — tamamen yerel.",
        de: "Kein Konto, kein Backend, keine KI — vollständig lokal.",
      },
    ],
  },
  {
    slug: "form-platform",
    name: "Form Yönetim Platformu",
    repo: "form-yonetim-platformu",
    visibility: "public",
    category: "web",
    status: "shipped",
    started: "2026-08",
    updated: "2026-08",
    commits: 10,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "IndexedDB"],
    motif: "browser",
    summary: {
      en: "A serverless, Google-Forms-style builder: create a form, share the link, collect and export responses.",
      tr: "Sunucusuz, Google Forms benzeri form oluşturucu: form oluştur, linki paylaş, yanıtları topla ve dışa aktar.",
      de: "Ein serverloser Formular-Baukasten im Stil von Google Forms: Formular erstellen, Link teilen, Antworten sammeln und exportieren.",
    },
    overview: {
      en: "A form builder without a backend or admin login. Forms and responses live in the browser's IndexedDB; responses can be copied as plain text in one click — handy for pasting into an AI assistant — or exported.",
      tr: "Sunucusu ve yönetici girişi olmayan bir form oluşturucu. Formlar ve yanıtlar tarayıcının IndexedDB'sinde duruyor; yanıtlar tek tıkla düz metin olarak kopyalanabiliyor — bir yapay zeka asistanına yapıştırmak için pratik — ya da dışa aktarılabiliyor.",
      de: "Ein Formular-Baukasten ohne Backend und ohne Admin-Login. Formulare und Antworten liegen in der IndexedDB des Browsers; Antworten lassen sich mit einem Klick als Text kopieren — praktisch für einen KI-Assistenten — oder exportieren.",
    },
    highlights: [
      {
        en: "Five question types including file upload; required/optional; reorder.",
        tr: "Dosya yükleme dahil beş soru tipi; zorunlu/opsiyonel; sıralama.",
        de: "Fünf Fragetypen inklusive Datei-Upload; Pflicht/optional; Sortierung.",
      },
      {
        en: "Draft and published states with custom link slugs.",
        tr: "Özel link adresleriyle taslak ve yayında durumları.",
        de: "Entwurfs- und Veröffentlichungsstatus mit eigenen Link-Slugs.",
      },
      {
        en: "PDF export per response, CSV and Excel per form.",
        tr: "Yanıt başına PDF, form başına CSV ve Excel dışa aktarma.",
        de: "PDF-Export pro Antwort, CSV und Excel pro Formular.",
      },
    ],
  },
  {
    slug: "expirytrack",
    name: "ExpiryTrack",
    repo: "ExpiryTrack",
    visibility: "public",
    category: "mobile",
    status: "shipped",
    started: "2026-08",
    updated: "2026-08",
    commits: 11,
    stack: ["Expo", "React Native", "TypeScript", "NativeWind"],
    motif: "phone",
    summary: {
      en: "Track the expiry dates of what you buy and get reminded before it goes bad. Local-only.",
      tr: "Aldıklarının son kullanma tarihlerini takip et, bozulmadan önce hatırlatma al. Tamamen yerel.",
      de: "Verfolge die Haltbarkeitsdaten deiner Einkäufe und werde erinnert, bevor etwas schlecht wird. Nur lokal.",
    },
    overview: {
      en: "A name and a date is all an item needs. The list colours each item by days left, and a local notification fires a set number of days before it expires — no push server, no account.",
      tr: "Bir ürün için isim ve tarih yeterli. Liste her ürünü kalan güne göre renklendiriyor; son kullanma tarihinden belirli gün önce yerel bir bildirim geliyor — push sunucusu yok, hesap yok.",
      de: "Ein Name und ein Datum genügen. Die Liste färbt jedes Produkt nach verbleibenden Tagen, und eine lokale Benachrichtigung kommt eine festgelegte Anzahl Tage vor Ablauf — ohne Push-Server, ohne Konto.",
    },
    highlights: [
      {
        en: "Colour-coded list: fresh, soon, critical, expired.",
        tr: "Renk kodlu liste: taze, yakında, kritik, süresi geçmiş.",
        de: "Farbcodierte Liste: frisch, bald, kritisch, abgelaufen.",
      },
      {
        en: "Optional category, quantity, photo and custom reminder.",
        tr: "Opsiyonel kategori, miktar, fotoğraf ve özel hatırlatma.",
        de: "Optional Kategorie, Menge, Foto und eigene Erinnerung.",
      },
      {
        en: "Unit tests for the date and reminder maths.",
        tr: "Tarih ve hatırlatma hesapları için birim testleri.",
        de: "Unit-Tests für die Datums- und Erinnerungsberechnung.",
      },
    ],
  },
  {
    slug: "forgetune",
    name: "ForgeTune",
    repo: "ForgeTune",
    visibility: "public",
    category: "ai",
    status: "prototype",
    started: "2026-07",
    updated: "2026-08",
    commits: 31,
    stack: ["Next.js", "FastAPI", "Python", "SQLite", "Unsloth", "Google Colab", "pnpm monorepo"],
    motif: "curve",
    summary: {
      en: "A local-first control plane for planning, running and evaluating reproducible LLM fine-tuning experiments.",
      tr: "Tekrarlanabilir LLM fine-tuning deneylerini planlamak, çalıştırmak ve değerlendirmek için yerel öncelikli bir kontrol paneli.",
      de: "Eine Local-first-Steuerzentrale zum Planen, Ausführen und Auswerten reproduzierbarer LLM-Fine-Tuning-Experimente.",
    },
    overview: {
      en: "ForgeTune keeps every fine-tuning run honest: immutable manifests, versioned datasets and evaluators, a separate training worker, and clear labels for real, mock and not-yet-run results. Mock runs are never shown as model evidence.",
      tr: "ForgeTune her fine-tuning koşusunu dürüst tutuyor: değiştirilemez manifestler, sürümlü veri setleri ve değerlendiriciler, ayrı bir eğitim işçisi ve gerçek, sahte ve henüz çalıştırılmamış sonuçlar için açık etiketler. Sahte koşular asla model kanıtı olarak gösterilmiyor.",
      de: "ForgeTune hält jeden Fine-Tuning-Lauf ehrlich: unveränderliche Manifeste, versionierte Datensätze und Evaluatoren, ein separater Trainings-Worker und klare Kennzeichnung für echte, simulierte und noch nicht ausgeführte Ergebnisse. Simulierte Läufe gelten nie als Modellbeleg.",
    },
    highlights: [
      {
        en: "Next.js UI, FastAPI control plane and a leased-job ML worker, with shared schemas.",
        tr: "Ortak şemalarla Next.js arayüzü, FastAPI kontrol katmanı ve kiralanan işlerle çalışan bir ML işçisi.",
        de: "Next.js-Oberfläche, FastAPI-Steuerung und ein ML-Worker mit geleasten Jobs, mit gemeinsamen Schemas.",
      },
      {
        en: "Three built-in competition workflows, including a pinned SWE-bench coding subset.",
        tr: "Sabitlenmiş bir SWE-bench kodlama alt kümesi dahil üç hazır yarışma iş akışı.",
        de: "Drei eingebaute Wettbewerbs-Workflows, darunter ein festgelegtes SWE-bench-Coding-Subset.",
      },
      {
        en: "Bilingual EN/TR interface; heavy training runs on free Google Colab.",
        tr: "İki dilli EN/TR arayüz; ağır eğitimler ücretsiz Google Colab'de çalışıyor.",
        de: "Zweisprachige Oberfläche EN/TR; aufwendiges Training läuft auf dem kostenlosen Google Colab.",
      },
    ],
  },
  {
    slug: "ai-cad-studio",
    name: "AI CAD Studio",
    repo: "AI_CAD_Program",
    visibility: "public",
    category: "ai",
    status: "prototype",
    started: "2026-07",
    updated: "2026-08",
    commits: 33,
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tripo AI"],
    motif: "browser",
    summary: {
      en: "A web studio that turns a text prompt into a 3D part with real per-axis dimensions.",
      tr: "Bir metin isteğini eksen başına gerçek ölçüleri olan bir 3D parçaya dönüştüren web stüdyosu.",
      de: "Ein Web-Studio, das eine Texteingabe in ein 3D-Teil mit echten Maßen pro Achse verwandelt.",
    },
    overview: {
      en: "Describe a part, get a 3D model, then size it in width, height and depth. Behind it: real authentication, protected routes and usage limits per plan.",
      tr: "Bir parçayı tarif et, 3D modelini al, sonra genişlik, yükseklik ve derinlikte boyutlandır. Arkasında: gerçek kimlik doğrulama, korumalı sayfalar ve plan başına kullanım sınırları.",
      de: "Beschreibe ein Teil, erhalte ein 3D-Modell und lege dann Breite, Höhe und Tiefe fest. Dahinter: echte Authentifizierung, geschützte Routen und Nutzungslimits pro Tarif.",
    },
    highlights: [
      {
        en: "Supabase email/password auth; root-caused expired-link failures from live auth logs and added a clear recovery path.",
        tr: "Supabase e-posta/şifre girişi; süresi dolmuş link hatalarının kök nedenini canlı auth loglarından buldum ve net bir kurtarma yolu ekledim.",
        de: "Supabase-Anmeldung mit E-Mail und Passwort; die Ursache abgelaufener Links anhand echter Auth-Logs gefunden und einen klaren Wiederherstellungsweg ergänzt.",
      },
      {
        en: "Generated meshes are welded and decimated so parts render without holes.",
        tr: "Üretilen mesh'ler kaynaklanıp sadeleştiriliyor, böylece parçalar deliksiz görünüyor.",
        de: "Erzeugte Meshes werden verschweißt und reduziert, damit Teile ohne Löcher dargestellt werden.",
      },
      {
        en: "Free and Pro plans with real usage limits — without a payment provider.",
        tr: "Gerçek kullanım sınırlarıyla Ücretsiz ve Pro planlar — ödeme altyapısı olmadan.",
        de: "Free- und Pro-Tarif mit echten Nutzungslimits — ohne Zahlungsanbieter.",
      },
    ],
  },
  {
    slug: "not-defteri",
    name: "Not Defteri",
    repo: "Granola_Meeting_notetaker",
    visibility: "public",
    category: "ai",
    status: "prototype",
    started: "2026-07",
    updated: "2026-08",
    commits: 50,
    stack: ["Next.js", "FastAPI", "Local speech-to-text", "SQLite", "OpenRouter", "Chrome extension"],
    motif: "curve",
    summary: {
      en: "A Granola-inspired Turkish meeting assistant: local speech-to-text, structured notes, action items and questions over the meeting.",
      tr: "Granola'dan ilham alan Türkçe toplantı asistanı: yerel konuşmadan metne, yapılandırılmış notlar, yapılacaklar ve toplantı hakkında soru-cevap.",
      de: "Ein von Granola inspirierter Meeting-Assistent für Türkisch: lokale Spracherkennung, strukturierte Notizen, Aufgaben und Fragen zum Meeting.",
    },
    overview: {
      en: "Record or upload a Meet or Zoom call; Turkish speech is transcribed on your own computer and turned into notes and to-dos. Raw audio never leaves the machine, and without an API key the app falls back to a local method and says so in the UI.",
      tr: "Bir Meet veya Zoom görüşmesini kaydet ya da yükle; Türkçe konuşma kendi bilgisayarında metne çevriliyor, notlara ve yapılacaklara dönüşüyor. Ham ses bilgisayardan hiç çıkmıyor; API anahtarı yoksa uygulama yerel bir yönteme geçiyor ve bunu arayüzde açıkça söylüyor.",
      de: "Nimm ein Meet- oder Zoom-Gespräch auf oder lade es hoch; türkische Sprache wird auf deinem eigenen Rechner transkribiert und in Notizen und Aufgaben verwandelt. Rohes Audio verlässt nie den Rechner, und ohne API-Schlüssel nutzt die App eine lokale Methode und sagt das in der Oberfläche.",
    },
    highlights: [
      {
        en: "Pipeline: FFmpeg → local speech-to-text → analysis → action items, with the transcript saved before any AI call.",
        tr: "Hat: FFmpeg → yerel konuşmadan metne → analiz → yapılacaklar; döküm, herhangi bir yapay zeka çağrısından önce kaydediliyor.",
        de: "Pipeline: FFmpeg → lokale Spracherkennung → Analyse → Aufgaben, das Transkript wird vor jedem KI-Aufruf gespeichert.",
      },
      {
        en: "Truthful progress: each stage is stored and polled, never faked.",
        tr: "Dürüst ilerleme: her aşama kaydediliyor ve sorgulanıyor, asla uydurulmuyor.",
        de: "Ehrlicher Fortschritt: Jede Stufe wird gespeichert und abgefragt, nie vorgetäuscht.",
      },
      {
        en: "A Manifest V3 Chrome extension to capture calls from the browser.",
        tr: "Görüşmeleri tarayıcıdan yakalamak için Manifest V3 Chrome eklentisi.",
        de: "Eine Chrome-Erweiterung (Manifest V3), um Gespräche im Browser aufzunehmen.",
      },
    ],
  },
  {
    slug: "feathertext",
    name: "FeatherText",
    repo: "Text_Editor",
    visibility: "public",
    category: "tools",
    status: "shipped",
    started: "2026-07",
    updated: "2026-07",
    commits: 13,
    stack: ["C++20", "Win32 API", "RichEdit", "CMake", "GitHub Actions"],
    motif: "terminal",
    summary: {
      en: "A lightweight native Windows rich-text editor in C++20 and raw Win32 — no Electron, no Qt, no runtime.",
      tr: "C++20 ve saf Win32 ile yazılmış hafif, native bir Windows zengin metin editörü — Electron yok, Qt yok, runtime yok.",
      de: "Ein schlanker nativer Rich-Text-Editor für Windows in C++20 und purem Win32 — ohne Electron, ohne Qt, ohne Runtime.",
    },
    overview: {
      en: "Built for the AI Academy text editor challenge: a small executable with the features people expect from a real editor, down to correct encodings and crash recovery.",
      tr: "AI Academy metin editörü yarışması için yapıldı: gerçek bir editörden beklenen özelliklere sahip küçük bir uygulama, doğru karakter kodlamalarına ve çökme kurtarmaya kadar.",
      de: "Entstanden für die Text-Editor-Challenge der AI Academy: ein kleines Programm mit allem, was man von einem echten Editor erwartet, bis hin zu korrekten Kodierungen und Absturz-Wiederherstellung.",
    },
    highlights: [
      {
        en: "Correct UTF-8, UTF-16 and ANSI handling; Turkish text is preserved exactly.",
        tr: "Doğru UTF-8, UTF-16 ve ANSI işleme; Türkçe metin birebir korunuyor.",
        de: "Korrekte Verarbeitung von UTF-8, UTF-16 und ANSI; türkischer Text bleibt exakt erhalten.",
      },
      {
        en: "Styles, fonts, lists, images (paste, drag-and-drop), find and replace, full undo/redo.",
        tr: "Stiller, yazı tipleri, listeler, görseller (yapıştırma, sürükle-bırak), bul ve değiştir, tam geri al/yinele.",
        de: "Formatvorlagen, Schriften, Listen, Bilder (Einfügen, Drag-and-drop), Suchen und Ersetzen, vollständiges Rückgängig/Wiederholen.",
      },
      {
        en: "Auto-save with crash recovery; CI builds, packages and checks the release size.",
        tr: "Çökme kurtarmalı otomatik kayıt; CI derliyor, paketliyor ve sürüm boyutunu kontrol ediyor.",
        de: "Automatisches Speichern mit Absturz-Wiederherstellung; CI baut, packt und prüft die Release-Größe.",
      },
    ],
  },
  {
    slug: "istanbul-parking-map",
    name: "Istanbul Parking Map",
    repo: "Istanbul-parking-map",
    visibility: "public",
    category: "web",
    status: "shipped",
    started: "2026-07",
    updated: "2026-07",
    commits: 5,
    stack: ["Next.js", "TypeScript", "Leaflet", "İBB Open Data"],
    motif: "browser",
    summary: {
      en: "A live map of Istanbul's İSPARK car parks with occupancy, directions and traffic density from the city's open data.",
      tr: "İBB açık verisiyle İstanbul'daki İSPARK otoparklarının doluluk, yol tarifi ve trafik yoğunluğunu gösteren canlı harita.",
      de: "Eine Live-Karte der İSPARK-Parkhäuser in Istanbul mit Belegung, Routen und Verkehrsdichte aus den offenen Daten der Stadt.",
    },
    overview: {
      en: "The map pulls İSPARK occupancy through a Next.js server proxy, shows every car park as a card with address and direction, and refreshes itself every 60 seconds.",
      tr: "Harita İSPARK doluluğunu bir Next.js sunucu proxy'si üzerinden çekiyor, her otoparkı adres ve yön bilgisiyle kart olarak gösteriyor ve her 60 saniyede kendini yeniliyor.",
      de: "Die Karte holt die İSPARK-Belegung über einen Next.js-Server-Proxy, zeigt jedes Parkhaus als Karte mit Adresse und Route und aktualisiert sich alle 60 Sekunden.",
    },
    highlights: [
      {
        en: "Leaflet map with live occupancy and navigation links.",
        tr: "Canlı doluluk ve yol tarifi linkleriyle Leaflet haritası.",
        de: "Leaflet-Karte mit Live-Belegung und Navigationslinks.",
      },
      {
        en: "Server-side proxy keeps CORS and API details out of the browser.",
        tr: "Sunucu tarafı proxy, CORS ve API ayrıntılarını tarayıcıdan uzak tutuyor.",
        de: "Ein serverseitiger Proxy hält CORS und API-Details aus dem Browser heraus.",
      },
      {
        en: "Traffic density layer and reverse-geocoded addresses.",
        tr: "Trafik yoğunluğu katmanı ve koordinattan adres çözümleme.",
        de: "Ebene für Verkehrsdichte und per Reverse-Geocoding ermittelte Adressen.",
      },
    ],
  },
  {
    slug: "delivery-simulator",
    name: "Delivery Driver Simulator",
    repo: "Uber_Simulator",
    visibility: "public",
    category: "games",
    status: "active",
    started: "2026-07",
    updated: "2026-08",
    commits: 233,
    stack: ["Unity 6", "C#", "URP"],
    motif: "track",
    summary: {
      en: "A delivery-driver simulator in Unity: take orders, drive, deliver on time, build a reputation and upgrade your vehicle.",
      tr: "Unity'de bir kurye simülatörü: sipariş al, sür, zamanında teslim et, itibar kazan ve aracını geliştir.",
      de: "Ein Lieferfahrer-Simulator in Unity: Aufträge annehmen, fahren, pünktlich liefern, Ruf aufbauen und das Fahrzeug verbessern.",
    },
    overview: {
      en: "I wrote the game design document first, then built the loop: accept an order, pick up the cargo, beat the clock, get rated, get paid, spend it on the vehicle. 233 commits so far, with the economy as the central design axis.",
      tr: "Önce oyun tasarım dokümanını yazdım, sonra döngüyü kurdum: siparişi kabul et, kargoyu al, zamana karşı yarış, puan al, ödemeni al, aracına harca. Şu ana kadar 233 commit; ekonomi tasarımın merkezinde.",
      de: "Zuerst habe ich das Game-Design-Dokument geschrieben, dann die Schleife gebaut: Auftrag annehmen, Ladung abholen, gegen die Zeit fahren, bewertet werden, bezahlt werden, ins Fahrzeug investieren. Bisher 233 Commits, mit der Wirtschaft als zentraler Designachse.",
    },
    highlights: [
      {
        en: "Order offers, pickup and delivery points, time pressure and star ratings feeding a Bronze-to-Diamond reputation system.",
        tr: "Sipariş teklifleri, alış ve teslim noktaları, zaman baskısı ve yıldız puanları; Bronzdan Elmasa bir itibar sistemini besliyor.",
        de: "Auftragsangebote, Abhol- und Lieferpunkte, Zeitdruck und Sternebewertungen speisen ein Rufsystem von Bronze bis Diamant.",
      },
      {
        en: "Economy: fuel, repair stations, a shop and vehicle upgrades, with a save system.",
        tr: "Ekonomi: yakıt, tamir istasyonları, mağaza ve araç geliştirmeleri; kayıt sistemiyle.",
        de: "Wirtschaft: Treibstoff, Reparaturstationen, ein Shop und Fahrzeug-Upgrades, mit Speichersystem.",
      },
      {
        en: "Vehicle controller with condition and fuel, several camera modes and pooled customers.",
        tr: "Durum ve yakıt takipli araç kontrolcüsü, birden fazla kamera modu ve havuzlanmış müşteriler.",
        de: "Fahrzeugsteuerung mit Zustand und Treibstoff, mehrere Kameramodi und gepoolte Kunden.",
      },
    ],
  },
  {
    slug: "forgotten-island",
    name: "Forgotten Island",
    repo: "Forgotten-Island",
    visibility: "public",
    category: "games",
    status: "prototype",
    started: "2026-06",
    updated: "2026-08",
    commits: 37,
    stack: ["Unity", "C#", "URP"],
    motif: "tiles",
    summary: {
      en: "A 3D island adventure prototype with NPCs, chests, items and an interaction system.",
      tr: "NPC'ler, sandıklar, eşyalar ve etkileşim sistemi olan bir 3D ada macerası prototipi.",
      de: "Ein 3D-Inselabenteuer-Prototyp mit NPCs, Truhen, Gegenständen und einem Interaktionssystem.",
    },
    overview: {
      en: "A third-person exploration prototype where I practised clean gameplay architecture: interfaces for anything you can interact with or use, and data assets for items.",
      tr: "Temiz oynanış mimarisini çalıştığım üçüncü şahıs keşif prototipi: etkileşime girilebilen veya kullanılabilen her şey için arayüzler, eşyalar için veri dosyaları.",
      de: "Ein Erkundungsprototyp in der dritten Person, an dem ich saubere Gameplay-Architektur geübt habe: Interfaces für alles, womit man interagieren oder was man benutzen kann, und Daten-Assets für Gegenstände.",
    },
    highlights: [
      {
        en: "IInteractable / IUsable interfaces shared by NPCs, chests and items.",
        tr: "NPC'ler, sandıklar ve eşyalar tarafından paylaşılan IInteractable / IUsable arayüzleri.",
        de: "IInteractable- und IUsable-Interfaces, gemeinsam genutzt von NPCs, Truhen und Gegenständen.",
      },
      {
        en: "ScriptableObject data for weapons, potions and resources.",
        tr: "Silahlar, iksirler ve kaynaklar için ScriptableObject verileri.",
        de: "ScriptableObject-Daten für Waffen, Tränke und Ressourcen.",
      },
      {
        en: "Orbital and static camera controllers, jump and animation handling.",
        tr: "Yörüngesel ve sabit kamera kontrolcüleri, zıplama ve animasyon yönetimi.",
        de: "Orbit- und statische Kamerasteuerung, Sprung- und Animationslogik.",
      },
    ],
  },
  {
    slug: "3d-platform-game",
    name: "3D Platform Game",
    repo: "3D_Platform_Game",
    visibility: "public",
    category: "games",
    status: "shipped",
    started: "2026-06",
    updated: "2026-08",
    commits: 3,
    stack: ["Unity", "C#", "URP"],
    motif: "tiles",
    summary: {
      en: "A 3D platformer in Unity with coins, enemy spawning, health and a shockwave attack.",
      tr: "Unity'de altınlar, düşman doğurma, can sistemi ve şok dalgası saldırısı olan bir 3D platform oyunu.",
      de: "Ein 3D-Plattformer in Unity mit Münzen, Gegner-Spawns, Lebensenergie und einem Schockwellen-Angriff.",
    },
    overview: {
      en: "One of my first complete Unity games: a character controller, a follow camera, collectibles and enemies that spawn and summon minions.",
      tr: "İlk tamamladığım Unity oyunlarından biri: karakter kontrolcüsü, takip kamerası, toplanabilir objeler ve doğup yardımcı çağıran düşmanlar.",
      de: "Eines meiner ersten fertigen Unity-Spiele: Charaktersteuerung, Verfolgerkamera, Sammelobjekte und Gegner, die erscheinen und Helfer beschwören.",
    },
    highlights: [
      {
        en: "Player controller, health and coin systems.",
        tr: "Oyuncu kontrolcüsü, can ve altın sistemleri.",
        de: "Spielersteuerung, Lebens- und Münzsystem.",
      },
      {
        en: "Enemy spawner, summoned minions and a shockwave effect.",
        tr: "Düşman doğurucu, çağrılan yardımcılar ve şok dalgası efekti.",
        de: "Gegner-Spawner, beschworene Helfer und ein Schockwellen-Effekt.",
      },
      {
        en: "Animation and texture-set viewers built as editor helpers.",
        tr: "Editör yardımcısı olarak yapılmış animasyon ve doku seti görüntüleyicileri.",
        de: "Betrachter für Animationen und Textursets als Editor-Hilfen.",
      },
    ],
  },
  {
    slug: "card-game-2d",
    name: "Card Game 2D",
    repo: "Card_Game_2D",
    visibility: "public",
    category: "games",
    status: "prototype",
    started: "2026-06",
    updated: "2026-06",
    commits: 2,
    stack: ["Unity", "C#"],
    motif: "tiles",
    summary: {
      en: "A 2D card game prototype with drag-and-drop cards and drop zones.",
      tr: "Sürükle-bırak kartlar ve bırakma alanlarıyla bir 2D kart oyunu prototipi.",
      de: "Ein 2D-Kartenspiel-Prototyp mit Drag-and-drop-Karten und Ablagezonen.",
    },
    overview: {
      en: "A small Unity prototype to learn UI-driven gameplay: cards you can drag, zones that accept them and a game manager that tracks the table.",
      tr: "Arayüz tabanlı oynanışı öğrenmek için küçük bir Unity prototipi: sürüklenebilen kartlar, onları kabul eden alanlar ve masayı takip eden bir oyun yöneticisi.",
      de: "Ein kleiner Unity-Prototyp, um UI-basiertes Gameplay zu lernen: ziehbare Karten, Zonen, die sie annehmen, und ein Game Manager, der den Tisch verwaltet.",
    },
    highlights: [
      {
        en: "Drag-and-drop with Unity's event system.",
        tr: "Unity'nin event sistemiyle sürükle-bırak.",
        de: "Drag-and-drop mit Unitys Event-System.",
      },
      {
        en: "Drop zones that validate where a card can go.",
        tr: "Kartın nereye gidebileceğini doğrulayan bırakma alanları.",
        de: "Ablagezonen, die prüfen, wohin eine Karte darf.",
      },
      {
        en: "A game manager holding the table state.",
        tr: "Masa durumunu tutan bir oyun yöneticisi.",
        de: "Ein Game Manager, der den Tischzustand hält.",
      },
    ],
  },
];

// The owner's chosen order for the featured section.
const FEATURED_ORDER = [
  "basketball-app",
  "ai-machine-learning",
  "team-sirius-2026",
  "monopoly-champion-agent",
  "arc-agi-3",
];

export const featuredProjects = FEATURED_ORDER.map((slug) => projects.find((p) => p.slug === slug)!);

export const otherProjects = projects
  .filter((p) => !p.featured)
  .sort((a, b) => b.updated.localeCompare(a.updated) || b.started.localeCompare(a.started));

/** Featured first, then everything else newest first — the order the home page shows. */
export const orderedProjects = [...featuredProjects, ...otherProjects];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const totalCommits = projects.reduce((sum, p) => sum + p.commits, 0);
