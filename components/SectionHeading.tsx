export default function SectionHeading({
  id,
  title,
  intro,
}: {
  id: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="display-wide text-3xl text-text sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 leading-relaxed text-text-muted">{intro}</p>}
    </div>
  );
}
