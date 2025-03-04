import { Actor } from "../models/Actor.ts"
import { actors } from "../data.ts";

export class ActorRepository {
    private actors: Actor[] = actors
    private nextId = actors.length + 1;

    create(actor: Omit<Actor, 'acteur_id'>): Actor {
        const newActor: Actor = {acteur_id: this.nextId++, ...actor };
        this.actors.push(newActor);
        return newActor;
    }

    findAll(): Actor[] {
        return this.actors;
    }

    getById(id: number): Actor | undefined {
        return this.actors.find(actor => actor.acteur_id === id);
    }

    deleteById(id: number): boolean {
        const index = this.actors.findIndex(actor => actor.acteur_id === id);
        if (index !== -1) {
            this.actors.splice(index, 1);
            return true;
        }
        return false;
    }

    updateById(acteur_id: number, updatedActor: Actor): Actor | undefined {
        const index = this.actors.findIndex(actor => actor.acteur_id === acteur_id);
        if (index !== -1) {
            this.actors[index] = { ...updatedActor, acteur_id };
            return this.actors[index];
        }
        return undefined;
    }
}