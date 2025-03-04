import {Context} from "../deps.ts";
import {ActorService} from "../services/ActorService.ts";

const actorService = new ActorService();

export const createActor = async (context: Context) => {
    const body = await context.request.body.json();
    const newActor = actorService.createActor(body);
    context.response.status = 201;
    context.response.body = newActor;
};

export const getActors = (context: Context) => {
    context.response.body = actorService.getAllActors();
};

export const getActorById = (context: Context) => {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
        context.response.status = 400;
        context.response.body = {error: "Invalid ID"};
        return;
    }

    const actor = actorService.getActorById(id);
    if (!actor) {
        context.response.status = 404;
        context.response.body = {error: "Actor not found"};
        return;
    }
    context.response.body = actor;
};

export const deleteActorById = (context: Context) => {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
        context.response.status = 400;
        context.response.body = {error: "Invalid ID"};
        return;
    }
    const success = actorService.deleteActorById(id);
    if (!success) {
        context.response.status = 404;
        context.response.body = {error: "Actor not found"};
        return;
    }
    context.response.status = 204;
};

export const updateActorById = async (context: Context) => {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
        context.response.status = 400;
        context.response.body = {error: "Invalid ID"};
        return;
    }
    const body = await context.request.body.json();
    const updatedActor = actorService.updateActorById(id, body);
    if (!updatedActor) {
        context.response.status = 404;
        context.response.body = {error: "Actor not found"};
        return;
    }
    context.response.body = updatedActor;
};
