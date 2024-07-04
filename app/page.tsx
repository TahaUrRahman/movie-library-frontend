import Image from "next/image";
import Link from "next/link";
import MovieCard from "./ui/movies/MovieCard/MovieCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/movies">Go to movies</Link>
      <MovieCard/>
    </main>
    
  );
}
