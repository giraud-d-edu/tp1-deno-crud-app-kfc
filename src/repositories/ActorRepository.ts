import { Actor } from "../models/Actor.ts"
import { actors } from "../data.ts";

export class ActorRepository {
    private actors: Actor[] = actors
    private nextId = actors.length + 1;

    create(actor: Omit<Actor, 'id'>): Actor {
        const newActor: Actor = {id: this.nextId++, ...actor };
        this.actors.push(newActor);
        return newActor;
    }

    findAll(): Actor[] {
        return this.actors;
    }

    getById(id: number): Actor | undefined {
        return this.actors.find(actor => actor.id === id);
    }

    deleteById(id: number): boolean {
        const index = this.actors.findIndex(actor => actor.id === id);
        if (index !== -1) {
            this.actors.splice(index, 1);
            return true;
        }
        return false;
    }

    updateById(id: number, updatedActor: Actor): Actor | undefined {
        const index = this.actors.findIndex(actor => actor.id === id);
        if (index !== -1) {
            this.actors[index] = { ...updatedActor, id };
            return this.actors[index];
        }
        return undefined;
    }
}