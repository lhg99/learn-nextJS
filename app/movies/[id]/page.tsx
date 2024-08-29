import { Suspense } from "react";
import MovieInfo, { getMovies } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface Iparams {
    params: {id: string};
}

export async function generateMetadata({params: {id}}: Iparams) {
    const movie = await getMovies(id);
    return {
        title: movie.title
    };
}

export default async function MovieDetail({params: {id}}: Iparams) {
    return(
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}