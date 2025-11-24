import { useRef } from "react";
import Card from "./Cards";
import LoaderCard from "./LoaderCard";

export default function Carousel({ type, isLoading, titleCarousel = "In evidenza per te" }) {
  const scrollRef = useRef(null);

  if (isLoading) return <LoaderCard />;
  if (!type || !type.length) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative mb-3">
      <h3 className="text-xl font-bold mb-1">{titleCarousel}</h3>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
      >
        <div className="h-6 w-6 text-white">⟨</div>
      </button>

      <ul ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {type.map((trend) => (
          <li key={trend.id}>
            <Card movie={trend} />
          </li>
        ))}
      </ul>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
      >
        <div className="h-6 w-6 text-white">⟩</div>
      </button>
    </section>
  );
}
