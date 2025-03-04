import { Actor } from "../models/Actor.ts"
import { actors } from "../data.ts";
import { ObjectId } from "npm:mongodb@5.6.0";
import { db } from "../config/database.ts";

const actorCollection = db.collection("actor");

export class ActorRepository {

    async create(actor: Actor) {
        const newActor = await actorCollection.insertOne(actor);
        return newActor;
    }

    async findAll(): Promise<Actor[]> {
        return await actorCollection.find({}).toArray();
    }

    async getById(id: string): Promise<Actor | null> {
        if (!isNaN(Number(id))) {
            return await actorCollection.findOne({ _id: Number(id) });
        }

        if (!ObjectId.isValid(id)) {
            throw new Error("ID invalide : doit être une chaîne de 24 caractères hexadécimaux.");
        }

        const objectId = new ObjectId(id);
        return await actorCollection.findOne({ _id: objectId }) || null;
    }

    async deleteById(id: string): Promise<boolean> {
        const objectId = new ObjectId(id);
        await actorCollection.deleteOne({ _id: objectId });
        return true;
    }

    async updateById(acteur_id: string, updatedActor: Actor): Promise<Actor> {
        const objectId = new ObjectId(acteur_id);
        const result = await actorCollection.findOneAndUpdate(
            { _id: objectId },
            { $set: updatedActor},
            { returnDocument: "after"}
        );
        console.log(result);
        return result.value;
    }
}