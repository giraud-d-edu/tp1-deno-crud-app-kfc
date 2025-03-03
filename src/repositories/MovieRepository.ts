import { Movie } from "../models/Movie.ts"

export class MovieRepository {
    private movies: Movie[] = []

    create(movie: Movie): Movie {
        const newMovie: Movie = { ...movie };
        this.movies.push(newMovie);
        return newMovie;
    }
}