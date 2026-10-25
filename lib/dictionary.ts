export type Language = "en" | "tr" | "de";

export const LANGUAGES: Language[] = ["en", "tr", "de"];

export type Localized = Record<Language, string>;

export const dictionary = {
  "nav.work": { en: "Work", tr: "Öne çıkanlar", de: "Arbeiten" },
  "nav.projects": { en: "Projects", tr: "Projeler", de: "Projekte" },
  "nav.experience": { en: "Experience", tr: "Deneyim", de: "Erfahrung" },
  "nav.about": { en: "About", tr: "Hakkımda", de: "Über mich" },
  "nav.contact": { en: "Contact", tr: "İletişim", de: "Kontakt" },
  "nav.languageLabel": { en: "Language", tr: "Dil", de: "Sprache" },
  "nav.openMenu": { en: "Open menu", tr: "Menüyü aç", de: "Menü öffnen" },
  "nav.closeMenu": { en: "Close menu", tr: "Menüyü kapat", de: "Menü schließen" },
  "nav.home": { en: "Home", tr: "Ana sayfa", de: "Startseite" },

  "hero.available": {
    en: "Open to internships and collaborations",
    tr: "Staj ve iş birliklerine açığım",
    de: "Offen für Praktika und Zusammenarbeit",
  },
  "hero.role": {
    en: "AI & software developer",
    tr: "Yapay zeka ve yazılım geliştirici",
    de: "KI- und Softwareentwickler",
  },
  "hero.statement": {
    en: "I build machine-learning systems and the software around them — from a shot tracker that sees a basketball through a phone camera to agents that learn games they have never seen.",
    tr: "Makine öğrenmesi sistemleri ve onları çevreleyen yazılımları geliştiriyorum — telefon kamerasından basketbol topunu gören bir şut takipçisinden, hiç görmediği oyunları öğrenen ajanlara kadar.",
    de: "Ich entwickle Machine-Learning-Systeme und die Software drumherum — von einem Wurf-Tracker, der den Basketball durch die Handykamera erkennt, bis zu Agenten, die Spiele lernen, die sie nie gesehen haben.",
  },
  "hero.ctaWork": { en: "See my work", tr: "Çalışmalarımı gör", de: "Meine Arbeit ansehen" },
  "hero.ctaContact": { en: "Get in touch", tr: "İletişime geç", de: "Kontakt aufnehmen" },
  "hero.logTitle": { en: "Lab log", tr: "Laboratuvar günlüğü", de: "Laborprotokoll" },
  "hero.logNote": {
    en: "Recent results, taken from my repositories.",
    tr: "Repolarımdan alınmış son sonuçlar.",
    de: "Aktuelle Ergebnisse aus meinen Repositories.",
  },

  "featured.title": { en: "Selected work", tr: "Öne çıkan çalışmalar", de: "Ausgewählte Arbeiten" },
  "featured.intro": {
    en: "Five projects that show how I work: measure first, claim second.",
    tr: "Nasıl çalıştığımı gösteren beş proje: önce ölç, sonra iddia et.",
    de: "Fünf Projekte, die zeigen, wie ich arbeite: erst messen, dann behaupten.",
  },
  "featured.readCase": { en: "Read the case study", tr: "Detayları oku", de: "Fallstudie lesen" },

  "projects.title": { en: "All projects", tr: "Tüm projeler", de: "Alle Projekte" },
  "projects.intro": {
    en: "Everything I have built and kept, newest first. Private repositories are described but not linked.",
    tr: "Geliştirdiğim ve sakladığım her şey, en yeniden eskiye. Private repolar açıklanıyor ama linklenmiyor.",
    de: "Alles, was ich gebaut und behalten habe, neueste zuerst. Private Repositories werden beschrieben, aber nicht verlinkt.",
  },
  "projects.filterLabel": { en: "Filter by category", tr: "Kategoriye göre filtrele", de: "Nach Kategorie filtern" },
  "projects.all": { en: "All", tr: "Tümü", de: "Alle" },
  "projects.private": { en: "Private", tr: "Private", de: "Privat" },
  "projects.live": { en: "Live", tr: "Canlı", de: "Live" },
  "projects.featured": { en: "Featured", tr: "Öne çıkan", de: "Ausgewählt" },
  "projects.showing": { en: "projects", tr: "proje", de: "Projekte" },

  "cat.ai": { en: "AI & ML", tr: "Yapay zeka ve ML", de: "KI & ML" },
  "cat.mobile": { en: "Mobile", tr: "Mobil", de: "Mobil" },
  "cat.web": { en: "Web", tr: "Web", de: "Web" },
  "cat.games": { en: "Games", tr: "Oyunlar", de: "Spiele" },
  "cat.tools": { en: "Desktop & tools", tr: "Masaüstü ve araçlar", de: "Desktop & Tools" },
  "cat.robotics": { en: "Robotics", tr: "Robotik", de: "Robotik" },

  "status.active": { en: "In development", tr: "Geliştiriliyor", de: "In Entwicklung" },
  "status.research": { en: "Research", tr: "Araştırma", de: "Forschung" },
  "status.shipped": { en: "Complete", tr: "Tamamlandı", de: "Abgeschlossen" },
  "status.upcoming": { en: "Releasing soon", tr: "Yakında yayında", de: "Erscheint bald" },
  "status.learning": { en: "Ongoing", tr: "Devam ediyor", de: "Laufend" },
  "status.prototype": { en: "Prototype", tr: "Prototip", de: "Prototyp" },

  "experience.title": { en: "Experience", tr: "Deneyim", de: "Erfahrung" },
  "experience.intro": {
    en: "Teams, programs and competitions I have worked in.",
    tr: "Çalıştığım takımlar, programlar ve yarışmalar.",
    de: "Teams, Programme und Wettbewerbe, an denen ich gearbeitet habe.",
  },

  "skills.title": { en: "Skills", tr: "Yetenekler", de: "Fähigkeiten" },
  "skills.intro": {
    en: "Tools I have shipped real projects with — not just tried once.",
    tr: "Sadece bir kez denediğim değil, gerçek projeler çıkardığım araçlar.",
    de: "Werkzeuge, mit denen ich echte Projekte umgesetzt habe — nicht nur einmal ausprobiert.",
  },

  "pickACard.title": { en: "Pick a card", tr: "Bir kart seç", de: "Zieh eine Karte" },
  "pickACard.intro": {
    en: "Six things about me that do not fit in a project page.",
    tr: "Bir proje sayfasına sığmayan, benimle ilgili altı şey.",
    de: "Sechs Dinge über mich, die auf keine Projektseite passen.",
  },
  "pickACard.opened": { en: "opened", tr: "açıldı", de: "aufgedeckt" },
  "pickACard.openCard": { en: "open card", tr: "kartı aç", de: "Karte aufdecken" },
  "pickACard.celebration": {
    en: "You found them all.",
    tr: "Hepsini buldun.",
    de: "Du hast alle gefunden.",
  },

  "about.title": { en: "About", tr: "Hakkımda", de: "Über mich" },
  "about.bio1": {
    en: "I'm Emrullah, a high-school student in Türkiye who builds software that does real work — more and more of it with AI. I started with Unity games, wrote the swerve-drive code for an FRC robotics team, and now spend most of my time on computer vision, reinforcement learning and LLM agents.",
    tr: "Ben Emrullah; Türkiye'de, gerçek bir iş yapan yazılımlar geliştiren bir lise öğrencisiyim — ve bunların giderek daha fazlası yapay zeka ile. Unity oyunlarıyla başladım, bir FRC robotik takımının swerve-drive kodunu yazdım; şimdi zamanımın çoğunu bilgisayarlı görü, pekiştirmeli öğrenme ve LLM ajanlarına ayırıyorum.",
    de: "Ich bin Emrullah, Schüler in der Türkei, und entwickle Software, die echte Arbeit leistet — immer öfter mit KI. Angefangen habe ich mit Unity-Spielen, dann habe ich den Swerve-Drive-Code für ein FRC-Robotikteam geschrieben, und heute verbringe ich die meiste Zeit mit Computer Vision, Reinforcement Learning und LLM-Agenten.",
  },
  "about.bio2": {
    en: "I like problems that can be measured: a model is either better on held-out data or it isn't. Before I start anything I ask whether people actually need it, whether one person can build it, and how I'll know it works. I use AI tools like Claude as teammates that speed me up, not as a substitute for understanding what I ship — and I rarely call anything done.",
    tr: "Ölçülebilen problemleri seviyorum: bir model ya ayrılmış test verisinde daha iyidir ya da değildir. Bir işe başlamadan önce insanların buna gerçekten ihtiyacı olup olmadığını, tek bir kişinin bunu yapıp yapamayacağını ve çalıştığını nasıl anlayacağımı sorarım. Claude gibi yapay zeka araçlarını beni hızlandıran takım arkadaşları olarak kullanırım; yaptığım işi anlamanın yerine geçen bir şey olarak değil. Ve bir şeye nadiren \"bitti\" derim.",
    de: "Ich mag Probleme, die sich messen lassen: Ein Modell ist auf zurückgehaltenen Daten entweder besser oder nicht. Bevor ich etwas anfange, frage ich, ob Menschen es wirklich brauchen, ob eine Person es bauen kann und woran ich erkenne, dass es funktioniert. KI-Werkzeuge wie Claude nutze ich als Teamkollegen, die mich schneller machen — nicht als Ersatz dafür, zu verstehen, was ich ausliefere. Und ich nenne selten etwas „fertig“.",
  },
  "about.based": { en: "Based in", tr: "Konum", de: "Wohnort" },
  "about.basedValue": { en: "Türkiye", tr: "Türkiye", de: "Türkei" },
  "about.education": { en: "Education", tr: "Eğitim", de: "Ausbildung" },
  "about.educationValue": {
    en: "High school · Harvard CS50P (online)",
    tr: "Lise · Harvard CS50P (online)",
    de: "Gymnasium · Harvard CS50P (online)",
  },
  "about.languages": { en: "Languages", tr: "Diller", de: "Sprachen" },
  "about.languagesValue": {
    en: "Turkish (native), English",
    tr: "Türkçe (ana dil), İngilizce",
    de: "Türkisch (Muttersprache), Englisch",
  },
  "about.numbers": { en: "On GitHub", tr: "GitHub'da", de: "Auf GitHub" },
  "about.numbersValue": {
    en: "{projects} projects, {commits}+ commits since June 2025",
    tr: "Haziran 2025'ten beri {projects} proje, {commits}+ commit",
    de: "{projects} Projekte, {commits}+ Commits seit Juni 2025",
  },

  "contact.title": { en: "Contact", tr: "İletişim", de: "Kontakt" },
  "contact.intro": {
    en: "Internship, project, competition team or just a question about my work — write to me. I usually answer within a day or two.",
    tr: "Staj, proje, yarışma takımı ya da çalışmalarımla ilgili bir soru — bana yazın. Genellikle bir iki gün içinde dönüş yaparım.",
    de: "Praktikum, Projekt, Wettbewerbsteam oder einfach eine Frage zu meiner Arbeit — schreib mir. Ich antworte meist innerhalb von ein, zwei Tagen.",
  },
  "contact.copy": { en: "Copy email", tr: "E-postayı kopyala", de: "E-Mail kopieren" },
  "contact.copied": { en: "Copied", tr: "Kopyalandı", de: "Kopiert" },
  "contact.formTitle": { en: "Write a message", tr: "Mesaj yaz", de: "Nachricht schreiben" },
  "contact.name": { en: "Your name", tr: "Adınız", de: "Dein Name" },
  "contact.subject": { en: "Subject", tr: "Konu", de: "Betreff" },
  "contact.message": { en: "Message", tr: "Mesaj", de: "Nachricht" },
  "contact.send": { en: "Open in email app", tr: "E-posta uygulamasında aç", de: "In E-Mail-App öffnen" },
  "contact.formNote": {
    en: "This opens your own email app with the message filled in. Nothing is stored on this site.",
    tr: "Bu, mesaj doldurulmuş şekilde kendi e-posta uygulamanızı açar. Bu sitede hiçbir şey saklanmaz.",
    de: "Damit öffnet sich deine E-Mail-App mit der vorausgefüllten Nachricht. Auf dieser Website wird nichts gespeichert.",
  },
  "contact.messageRequired": {
    en: "Write a message first.",
    tr: "Önce bir mesaj yazın.",
    de: "Schreib zuerst eine Nachricht.",
  },
  "contact.elsewhere": { en: "Elsewhere", tr: "Diğer hesaplar", de: "Woanders" },

  "footer.built": {
    en: "Built with Next.js and Tailwind CSS. Updated October 2026.",
    tr: "Next.js ve Tailwind CSS ile yapıldı. Ekim 2026'da güncellendi.",
    de: "Gebaut mit Next.js und Tailwind CSS. Aktualisiert im Oktober 2026.",
  },
  "footer.top": { en: "Back to top", tr: "Başa dön", de: "Nach oben" },

  "detail.back": { en: "All projects", tr: "Tüm projeler", de: "Alle Projekte" },
  "detail.overview": { en: "Overview", tr: "Genel bakış", de: "Überblick" },
  "detail.highlights": { en: "What I built", tr: "Neler yaptım", de: "Was ich gebaut habe" },
  "detail.stack": { en: "Stack", tr: "Teknolojiler", de: "Technologien" },
  "detail.status": { en: "Status", tr: "Durum", de: "Status" },
  "detail.period": { en: "Period", tr: "Dönem", de: "Zeitraum" },
  "detail.commits": { en: "Commits", tr: "Commit", de: "Commits" },
  "detail.category": { en: "Category", tr: "Kategori", de: "Kategorie" },
  "detail.repo": { en: "View repository", tr: "Repoyu görüntüle", de: "Repository ansehen" },
  "detail.live": { en: "Open live site", tr: "Canlı siteyi aç", de: "Live-Website öffnen" },
  "detail.privateTitle": { en: "Private repository", tr: "Private repo", de: "Privates Repository" },
  "detail.privateNote": {
    en: "The source is private. I'm happy to walk through it in an interview or a call.",
    tr: "Kaynak kod gizli. Bir görüşmede veya aramada üzerinden memnuniyetle geçebilirim.",
    de: "Der Quellcode ist privat. Gern zeige ich ihn in einem Gespräch oder Call.",
  },
  "detail.honest": { en: "Where it stands", tr: "Şu anki durum", de: "Aktueller Stand" },
  "detail.next": { en: "Next project", tr: "Sonraki proje", de: "Nächstes Projekt" },
  "detail.prev": { en: "Previous project", tr: "Önceki proje", de: "Vorheriges Projekt" },

  "notFound.title": { en: "This page doesn't exist", tr: "Bu sayfa yok", de: "Diese Seite gibt es nicht" },
  "notFound.body": {
    en: "The link may be old or mistyped. The projects are all on the home page.",
    tr: "Link eski veya hatalı olabilir. Tüm projeler ana sayfada.",
    de: "Der Link ist vielleicht veraltet oder falsch. Alle Projekte findest du auf der Startseite.",
  },
  "notFound.home": { en: "Go to the home page", tr: "Ana sayfaya git", de: "Zur Startseite" },
} as const satisfies Record<string, Localized>;

export type DictionaryKey = keyof typeof dictionary;
