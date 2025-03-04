import { Actor } from "../models/Actor.ts"
import { ActorRepository } from "../repositories/ActorRepository.ts"

export class ActorService {
    private repository: ActorRepository;

    constructor() {
        this.repository = new ActorRepository();
    }

    createActor(Actor: Actor): Actor{
        return this.repository.create(Actor);
    }

    getAllActors(): Actor[] {
        return this.repository.findAll();
    }
    
    getActorById(id: number): Actor | undefined {
        return this.repository.getById(id);
    }

    deleteActorById(id: number): boolean {
        return this.repository.deleteById(id);
    }

    updateActorById(id: number, updatedActor: Actor): Actor | undefined {
        return this.repository.updateById(id, updatedActor);
    }
}