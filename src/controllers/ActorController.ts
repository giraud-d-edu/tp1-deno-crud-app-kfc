import {Context} from "../deps.ts";
import {ActorService} from "../services/ActorService.ts";

const actorService = new ActorService();

export const createActor = async (context: Context) => {
    const body = await context.request.body.json();
    const newActor = await actorService.createActor(body);
    context.response.status = 201;
    context.response.body = newActor;
};

export const getActors = async (context: Context) => {
    context.response.body = await actorService.getAllActors();
};

export const getActorById = async (context: Context) => {
    const id = context.params.id;
    const actor = await actorService.getActorById(id);
    
    if (!actor) {
        context.response.status = 404;
        context.response.body = {error: "Actor not found"};
        return;
    }
    context.response.body = actor;
};

export const deleteActorById = async (context: Context) => {
    const id = context.params.id;
    const success = await actorService.deleteActorById(id);
    if (!success) {
        context.response.status = 404;
        context.response.body = {error: "Actor not found"};
        return;
    }
    context.response.status = 200;
    context.response.body= {message: "Succes deleting actor"}
};

export const updateActorById = async (context: Context) => {
    const id = context.params.id;
    const body = await context.request.body.json();
    const updatedActor = await actorService.updateActorById(id, body);
    if (!updatedActor) {
        context.response.status = 404;
        context.response.body = {error: "Actor not found"};
        return;
    }
    context.response.body = updatedActor;
};
