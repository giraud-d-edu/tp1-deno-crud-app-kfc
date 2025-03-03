import { Movie } from "../models/Movie.ts"
import { MovieRepository } from "../repositories/MovieRepository.ts"
export class MovieService {
    private repository: MovieRepository;

    constructor() {
        this.repository = new MovieRepository();
    }

    createMovie(movie: Movie): Movie{
        return this.repository.create(movie);
    }
}