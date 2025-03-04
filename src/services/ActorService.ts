import { Actor } from "../models/Actor.ts"
import { ActorRepository } from "../repositories/ActorRepository.ts"

export class ActorService {
    private repository: ActorRepository;

    constructor() {
        this.repository = new ActorRepository();
    }

    createActor(Actor: Actor){
        return this.repository.create(Actor);
    }

    async getAllActors(): Promise<Actor[]> {
        return await this.repository.findAll();
    }
    
    async getActorById(id: string): Promise<Actor> {
        return await this.repository.getById(id);
    }

    async deleteActorById(id: string): Promise<Boolean> {
        return await this.repository.deleteById(id);
    }

    async updateActorById(id: string, updatedActor: Actor): Promise<Actor> {
        return await this.repository.updateById(id, updatedActor);
    }
}