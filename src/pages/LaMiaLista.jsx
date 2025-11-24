import { useMovies } from "../context/MovieContext";
import Card from "../components/Cards";

export default function LaMiaLista() {
  const { myList } = useMovies();

  return (
    <section className="h-[100vh] flex flex-col justify-center">
      <h3 className=" text-4xl font-bold mb-5">La Mia Lista</h3>
      {myList.length > 0 ? (
        <div className="flex gap-2">
          {myList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>La tua lista al momento è vuota</p>
      )}
    </section>
  );
}
