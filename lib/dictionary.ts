export type Language = "en" | "tr";

export const dictionary = {
  "nav.pickACard": { en: "Pick a Card", tr: "Bir Kart Seç" },
  "nav.projects": { en: "Projects", tr: "Projeler" },
  "nav.about": { en: "About", tr: "Hakkımda" },
  "nav.languageLabel": { en: "Language", tr: "Dil" },

  "hero.tagline": {
    en: "Mostly building games and robots — always trying to make the next one better than the last.",
    tr: "Çoğunlukla oyunlar ve robotlar geliştiriyorum — her zaman bir öncekinden daha iyisini yapmaya çalışıyorum.",
  },
  "hero.viewProjects": { en: "View Projects", tr: "Projelerimi Gör" },

  "pickACard.title": { en: "Pick a Card, See", tr: "Bir Kart Seç, Gör" },
  "pickACard.opened": { en: "opened", tr: "açıldı" },
  "pickACard.openCard": { en: "open card", tr: "kartı aç" },
  "pickACard.celebration": {
    en: "You found them all! ✨",
    tr: "Hepsini buldun! ✨",
  },

  "projects.title": { en: "Projects", tr: "Projeler" },
  "projectCard.repo": { en: "Repo", tr: "Repo" },

  "about.title": { en: "About", tr: "Hakkımda" },
  "about.bio": {
    en: "I'm focused on Unity and C#, building games while working toward a long-term goal of becoming a software engineer and game developer. Before starting anything, I ask myself one question: do people actually need this? From there I think about whether it could realistically make money, whether it's actually buildable, and whether one person can pull it off alone. I'd rather understand why something is done a certain way than just get a quick answer, so I ask a lot of \"why this and not that\" questions. I use large language models (LLMs) — tools like Claude and ChatGPT — as teammates that speed me up, not as a replacement for doing the work myself. I rarely call anything \"done\" — there's almost always a better version of it in my head.",
    tr: "Unity ve C# üzerine yoğunlaşıyorum, oyunlar geliştiriyorum ve uzun vadede yazılım mühendisi ve oyun geliştiricisi olma hedefine doğru ilerliyorum. Herhangi bir şeye başlamadan önce kendime tek bir soru soruyorum: insanların buna gerçekten ihtiyacı var mı? Oradan yola çıkarak gerçekçi olarak para kazanıp kazanamayacağını, gerçekten inşa edilebilir olup olmadığını ve tek bir kişinin bunu başarıp başaramayacağını düşünüyorum. Bir şeyin neden belirli bir şekilde yapıldığını hızlı bir cevap almaktansa anlamayı tercih ederim, bu yüzden çokça \"neden bu, neden şu değil\" soruları sorarım. Claude ve ChatGPT gibi büyük dil modellerini (LLM) beni hızlandıran takım arkadaşları olarak kullanıyorum, işi kendim yapmanın yerine geçen bir araç olarak değil. Bir şeyi nadiren \"bitti\" olarak nitelendiririm — kafamda hemen hemen her zaman daha iyi bir versiyonu vardır.",
  },
} as const;

export type DictionaryKey = keyof typeof dictionary;
