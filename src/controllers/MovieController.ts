import { Router } from "https://deno.land/x/oak/mod.ts";
import { MovieService } from "../services/MovieService.ts";
const router = new Router();
const movieService = new MovieService();

router.post("/films", async (ctx) => {
    const body = await ctx.request.body.json();
    const newBook = movieService.createMovie(body);
    ctx.response.status = 201;
    ctx.response.body = newBook;
});

router.get("/films", async (ctx) => {
    const films = await movieService.getAllMovies();
    ctx.response.body = films;
});

router.get("/films/:id", (ctx) => {
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid ID" };
        return;
    }

    const movie = movieService.getMovieById(id);
    if (!movie) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Movie not found" };
        return;
    }

    ctx.response.body = movie;
});

router.delete("/films/:id", (ctx) => {
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid ID" };
        return;
    }

    const success = movieService.deleteMovieById(id);
    if (!success) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Movie not found" };
        return;
    }

    ctx.response.status = 204;
});

router.put("/films/:id", async (ctx) => {
    const id = parseInt(ctx.params.id);
    if (isNaN(id)) {
        ctx.response.status = 400;
        ctx.response.body = { error: "Invalid ID" };
        return;
    }

    const body = await ctx.request.body.json();
    const updatedMovie = movieService.updateMovieById(id, body);
    if (!updatedMovie) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Movie not found" };
        return;
    }

    ctx.response.body = updatedMovie;
});

export default router;
