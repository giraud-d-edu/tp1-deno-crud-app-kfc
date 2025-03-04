import { Movie } from "../models/Movie.ts"
import { ObjectId } from "npm:mongodb@5.6.0";
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

    async getById(id: string): Promise<Movie> {
        const objectId = new ObjectId(id);
        const movie = await movieCollection.findOne({ _id: objectId})
        return movie;
    }

    async deleteById(id: string): Promise<boolean> {
        const objectId = new ObjectId(id);
        await movieCollection.deleteOne({ _id: objectId });
        return true;
    }

    async updateById(id: string, updatedMovie: Movie): Promise<Movie> {
        const objectId = new ObjectId(id);
        const result = await movieCollection.findOneAndUpdate(
            { _id: objectId },
            { $set: updatedMovie },
            { returnDocument: "after" }
        );
        return result.value;
    }
}