import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  return (
    <section className="bg-bg text-text px-6 py-24">
      <h1 className="font-display text-4xl font-bold">Emrullah Soyler</h1>
      <p className="text-text-muted mt-3 max-w-md">
        Mostly building games and robots — always trying to make the next one
        better than the last.
      </p>
      <div className="mt-6">
        <SocialLinks />
      </div>
    </section>
  );
}
