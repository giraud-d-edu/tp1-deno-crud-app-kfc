import { Movie } from "../models/Movie.ts"

export class MovieRepository {
    private movies: Movie[] = []
    private nextId = 1;

    create(movie: Omit<Movie, 'id'>): Movie {
        const newMovie: Movie = {id: this.nextId++, ...movie };
        this.movies.push(newMovie);
        return newMovie;
    }

    findAll(): Movie[] {
        return this.movies;
    }

    getById(id: number): Movie | undefined {
        return this.movies.find(movie => movie.id === id);
    }

    deleteById(id: number): boolean {
        const index = this.movies.findIndex(movie => movie.id === id);
        if (index !== -1) {
            this.movies.splice(index, 1);
            return true;
        }
        return false;
    }

    updateById(id: number, updatedMovie: Movie): Movie | undefined {
        const index = this.movies.findIndex(movie => movie.id === id);
        if (index !== -1) {
            this.movies[index] = { ...updatedMovie, id };
            return this.movies[index];
        }
        return undefined;
    }
}