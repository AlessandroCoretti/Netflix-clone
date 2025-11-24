export default function LoadingHero() {
  return (
    <section className="w-full h-screen relative">
      <div className="animate-pulse w-full absolute top-0 left-0 h-screen">
        <div className="h-full w-full bg-zinc-900"></div>
      </div>
    </section>
  );
}
