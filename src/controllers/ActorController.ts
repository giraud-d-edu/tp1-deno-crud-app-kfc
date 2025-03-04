import { Router } from "https://deno.land/x/oak/mod.ts";
import { ActorService } from "../services/ActorService.ts";
const router = new Router();
const actorService = new ActorService();

router.post("/acteurs", async (ctx) => {
    const body = await ctx.request.body.json();
    const newActor = actorService.createActor(body);
    ctx.response.status = 201;
    ctx.response.body = newActor;
});

router.get("/acteurs", (ctx) => {
    ctx.response.body = actorService.getAllActors();
});

router.get("/acteurs/:id", (ctx) => {
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid ID" };
        return;
    }

    const actor = actorService.getActorById(id);
    if (!actor) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Actor not found" };
        return;
    }

    ctx.response.body = actor;
});

router.delete("/acteurs/:id", (ctx) => {
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid ID" };
        return;
    }

    const success = actorService.deleteActorById(id);
    if (!success) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Actor not found" };
        return;
    }

    ctx.response.status = 204;
});

router.put("/acteurs/:id", async (ctx) => {
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid ID" };
        return;
    }

    const body = await ctx.request.body.json();
    const updatedActor = actorService.updateActorById(id, body);
    if (!updatedActor) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Actor not found" };
        return;
    }
    ctx.response.body = updatedActor;
});

export default router;
