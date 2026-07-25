import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-bg text-text px-6 py-16 flex flex-col items-center gap-4 text-center">
      <SocialLinks />
      <p className="text-text-muted text-sm">© {new Date().getFullYear()} Emrullah Soyler</p>
    </footer>
  );
}
