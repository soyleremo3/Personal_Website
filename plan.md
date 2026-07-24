# Kişisel Website — Mimari Plan
**Emrullah Soyler | Exposure AI Academy — "Kişisel Website" (Beginner)**

## 1. Proje Özeti
Tek sayfalık, koyu temalı kişisel portföy sitesi. Amaç: gerçek projeleri (Unity oyunları,
FRC robotik) ve sosyal/profesyonel bağlantıları net şekilde sunmak, aynı zamanda görev
şartı olan "seni anlatan sana özel öğe"yi jenerik bir eklenti değil, sitenin imza
unsuru haline getirmek.

**Başarı kriterleri:** ilk 3 saniyede kim/ne net; mobilde kusursuz; tüm etkileşim
durumları (hover/press/loading/empty/error) tasarlanmış; jenerik şablon hissi yok;
en az bir gerçekten unutulmaz detay (bkz. madde 5).

## 2. Teknoloji Yığını
| Katman | Seçim | Gerekçe |
|---|---|---|
| Framework | Next.js 14+ (App Router) + TypeScript | 03 standardı varsayılanı, Vercel ile birebir uyumlu |
| Stil | Tailwind CSS | Hız + tutarlı design token yönetimi |
| Animasyon | Framer Motion | Kart flip + scroll-reveal için gerekli kontrol seviyesi |
| İkon | heroicons (react, solid set) | MIT lisanslı, jenerik stok ikon yok |
| Font | Space Grotesk / Inter / JetBrains Mono (Google Fonts, `next/font`) | bkz. madde 4 |
| Veri | Statik TS/JSON objeleri (`/data`) | Tek sayfa, sabit içerik — DB/auth gereksiz karmaşıklık |
| Deploy | Vercel | 03 standardı varsayılanı |

**Not:** 03 dosyasındaki Supabase/Firebase varsayılanı bilinçli olarak atlandı — bu
proje için gereksiz.

## 3. Bilgi Mimarisi (tek sayfa, sıralı bölümler)
1. **Hero** — isim, imza tagline, sosyal ikonlar (GitHub/LinkedIn/YouTube), scroll cue
2. **Bir Kart Seç, Gör** — imza etkileşimli öğe (madde 5)
3. **Projeler** — 3 gerçek repo kartı (madde 6)
4. **Hakkımda** — kısa, abartısız bio
5. **Footer/İletişim** — sosyal linkler tekrar

## 4. Görsel Kimlik
**Palet** (4-6 renk, isimli):
- `bg` `#0B0B0D` — zemin, sakin/koyu
- `surface` `#16161A` — kart/panel yüzeyi
- `text` `#EDEDE6` — birincil metin (ılık kırık-beyaz)
- `text-muted` `#85858C` — ikincil metin
- `accent` `#E8A33D` — fosfor-amber vurgu, **kısıtlı** kullanım (CTA, hover, tek vurgu noktaları)
- `accent-static` `#C4453C` — çok nadir "glitch" detayı (yalnızca kart-flip geçişinde)

**Neden bu palet:** Koyu zemin + tek doygun vurgu (asit-yeşil/vermilion) ve
"kum rengi + serif + toprak tonu" ikisi de AI-üretimi sitelerde klişeleşmiş
kalıplar. Amber-fosfor tonu, Emrullah'ın YouTube içeriğindeki analog-korku/VHS/CRT
görsel diline organik bir referans — jenerik "dark mode dev portfolio" değil,
öznenin kendi dünyasından geliyor.

**Tipografi:**
- Display: **Space Grotesk** (600/700) — yalnızca isim + bölüm başlıkları, kısıtlı kullanım
- Gövde: **Inter** (400/500)
- Utility: **JetBrains Mono** (500) — repo dili etiketleri, kart üzerindeki "REC ##" detayı

**Disiplin kuralı:** Cesaret tek noktada harcanıyor — imza kart mekaniği (madde 5).
Geri kalan her şey (arka plan, tipografi, layout) sakin ve az dekorasyonlu kalıyor.
Rastgele "01/02/03" bölüm numaralandırması YOK; kartlardaki "REC ##" etiketi
gerçek bir anlam taşıyor (kaset/kayıt numarası), dekoratif değil.

## 5. İmza Etkileşimli Öğe: "Bir Kart Seç, Gör"
**Mekanik:** 6 kapalı kart (VHS-kaset-etiketi görünümlü, üzerinde sadece "REC 01"
gibi mono etiket). Tıklama/dokunma ile kısa (200-300ms, ease-out) bir "statik
titreşim" mikro-geçişiyle açılır ve Emrullah hakkında gerçek bir bilgi gösterir.
Klavye ile de erişilebilir (Tab + Enter), `prefers-reduced-motion` saygı görür.

**Kart içerikleri (İngilizce, site geneli İngilizce — varsayım, değiştirilebilir):**
1. "I built a 3D platformer and a 2D card game in Unity."
2. "I rewrote the swerve-drive code for an FRC robotics team."
3. "I make AI-generated interactive horror videos on YouTube — that's actually where the idea for these cards came from."
4. "Before I write a line of code, I ask one question: do people actually need this?"
5. "I rarely say 'done.' I usually think: this can be better."
6. "Long-term goal: build something people actually use — and keep learning game dev along the way."

**Neden bu yön:**
- Görev şartını ("seni anlatan sana özel öğe") doğrudan karşılıyor
- Card_Game_2D reposuyla mekanik olarak örtüşüyor (gerçek proje referansı)
- Pick&See kanalına ince bir gönderme — kopya değil, bağlama uyarlanmış
- React state + CSS 3D transform ile düşük risk / yüksek görsel etki — Beginner
  kapsamında gerçekçi şekilde bitirilebilir
- Görev ekranındaki örnek site (self-updating-me.vercel.app) editöryel/sakin bir
  kimlik kullanıyor; bu mekanik ondan kasıtlı olarak ayrışıyor

## 6. Projeler Bölümü (gerçek veri, uydurma yok)
| Proje | Dil | Açıklama | Repo |
|---|---|---|---|
| 3D_Platform_Game | C# | Unity 3D platform oyunu | github.com/soyleremo3/3D_Platform_Game |
| Card_Game_2D | C# | Unity 2D kart oyunu | github.com/soyleremo3/Card_Game_2D |
| Team_Sirius_2026 | Java | FRC robotik takımı — swerve mekanizması | github.com/soyleremo3/Team_Sirius_2026 |

**Not:** Repo'larda README/açıklama eksikse, siteye eklemeden önce her birine
2-3 cümlelik açıklama + mümkünse ekran görüntüsü/GIF eklenmesi önerilir (03
standardı — "profesyonel GitHub" ilkesi).

## 7. Bağlantılar
- GitHub: https://github.com/soyleremo3
- LinkedIn: https://www.linkedin.com/in/emrullah-soyler-032442421/
- YouTube: https://www.youtube.com/@RealPickAndSee

## 8. Etkileşim Durumları (02 standardı)
- **Loading:** veri statik olduğu için gerçek loading yok; sayfa geçişinde hafif
  fade-in yeterli
- **Empty:** kartın kapalı ("REC ##" görünen) hali doğal bir empty-state işlevi görüyor
- **Error:** runtime veri hatası riski düşük (statik); dış linkler teslim öncesi
  tek tek tıklanıp doğrulanmalı
- **Hover/press:** tüm buton/kartlarda 150-250ms ease-out geçiş, görünür klavye
  focus ring'i (accent renginde)

## 9. Mobil & Erişilebilirlik
- Kart grid'i mobilde tek sütun, etkileşim dokunmaya bağımlı (hover'a değil)
- Touch target min 44x44px, kontrast WCAG AA, gövde metni min 16px
- `prefers-reduced-motion` için flip animasyonu instant-swap'e düşer

## 10. Klasör Yapısı
```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Hero.tsx
  PickACard.tsx
  ProjectsSection.tsx
  ProjectCard.tsx
  AboutSection.tsx
  SocialLinks.tsx
  Footer.tsx
/data
  projects.ts
  cardFacts.ts
```

## 11. Kabul Kriterleri (Teslim Öncesi Checklist)
- [ ] İlk 3 saniyede kim/ne net mi?
- [ ] Kart mekaniği mouse + touch + klavye ile çalışıyor mu?
- [ ] Tüm dış linkler doğru URL'e gidiyor mu?
- [ ] Konsol/derleme hatası yok
- [ ] 375px genişlikte (mobil) bozulma yok
- [ ] `prefers-reduced-motion` test edildi
- [ ] Vercel'de canlı ve erişilebilir
