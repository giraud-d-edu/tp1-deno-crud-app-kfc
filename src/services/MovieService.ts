import { Movie } from "../models/Movie.ts"
import { MovieRepository } from "../repositories/MovieRepository.ts"
export class MovieService {

    createMovie(movie): Movie{
        return this.repository.create(movie);
    }
}