import { Movie } from "../models/Movie.ts"
import { MovieRepository } from "../repositories/MovieRepository.ts"
export class MovieService {
    private repository: MovieRepository;

    constructor() {
        this.repository = new MovieRepository();
    }

    createMovie(movie: Movie){
        return this.repository.create(movie);
    }

    async getAllMovies(): Promise<Movie[]> {
        const movies = await this.repository.findAll();
        console.log(movies)
        return movies;
    }

    getMovieById(id: number): Movie | undefined {
        return this.repository.getById(id);
    }

    deleteMovieById(id: number): boolean {
        return this.repository.deleteById(id);
    }

    updateMovieById(id: number, updatedMovie: Movie): Movie | undefined {
        return this.repository.updateById(id, updatedMovie);
    }
}