// "use client";

import Link from "next/link";
import { resolve } from "path";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
} 

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map(movie => (
                <Movie title={movie.title} id={movie.id} poster_path={movie.poster_path}/>
            ))}
        </div>
    )
}

// const [movies, setMovies] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const getMovies = async() => {
//         const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
//         const json = await response.json();
//         setMovies(json);
//         setIsLoading(false)
//     }

//     useEffect(() => {
//         getMovies();
//     }, []);
//     return (
//         <div>
//             <h1>{isLoading ? "loading" : JSON.stringify(movies)}</h1>
//         </div>
//     )