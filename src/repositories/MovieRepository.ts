import { Movie } from "../models/Movie.ts"
import { ObjectId } from "npm:mongodb@5.6.0";
import { db } from "../config/database.ts";
import { MovieDTO, toMovieDTO } from "../dtos/MovieDto.ts";

const movieCollection = db.collection("movies");

export class MovieRepository {

    async create(movie: Movie) {
        const result = await movieCollection.insertOne(movie);
        return result;
    }

    async findAll(): Promise<MovieDTO[]> {
        const movies: Movie[] = await movieCollection.find({}).toArray();
        return movies.map(toMovieDTO);
    }

    async getById(id: string): Promise<Movie | null> {
        if (!isNaN(Number(id))) {
            return await movieCollection.findOne({ _id: Number(id) });
        }

        if (!ObjectId.isValid(id)) {
            throw new Error("ID invalide : doit être une chaîne de 24 caractères hexadécimaux.");
        }

        const objectId = new ObjectId(id);
        return await movieCollection.findOne({ _id: objectId }) || null;
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