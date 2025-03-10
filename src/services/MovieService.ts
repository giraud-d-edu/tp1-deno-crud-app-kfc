import { MovieDTO } from "../dtos/MovieDto.ts";
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

    async getAllMovies(): Promise<MovieDTO[]> {
        return await this.repository.findAll();
    }

    async getMovieById(id: string): Promise<Movie | null> {
        return this.repository.getById(id);
    }

    async deleteMovieById(id: string): Promise<boolean> {
        return await this.repository.deleteById(id);
    }

    async updateMovieById(id: string, updatedMovie: Movie): Promise<Movie> {
        return await this.repository.updateById(id, updatedMovie);
    }
}