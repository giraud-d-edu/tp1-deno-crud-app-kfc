import { Movie } from "../models/Movie.ts"

import { db } from "../config/database.ts";

const movieCollection = db.collection("movies");

export class MovieRepository {
    private movies: Movie[] = []
    private nextId = 1;

    async create(movie: Movie) {
        const result = await movieCollection.insertOne(movie);
        return result;
    }

    async findAll(): Promise<Movie[]> {
        const movies = await movieCollection.find({}).toArray();
        return movies;
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