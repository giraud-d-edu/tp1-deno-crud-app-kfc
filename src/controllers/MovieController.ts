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

router.get("/films/:id", async (ctx) => {
    const id = ctx.params.id;
    const movie = await movieService.getMovieById(id);
    if (!movie) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Movie not found" };
        return;
    }

    ctx.response.body = movie;
});

router.delete("/films/:id", async (ctx) => {
    const id = ctx.params.id;

    const success = await movieService.deleteMovieById(id);
    if (!success) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Movie not found" };
        return;
    }

    ctx.response.body= {message: "Succes deleting movie"}
    ctx.response.status = 200;
});

router.put("/films/:id", async (ctx) => {
    const id = ctx.params.id;

    const body = await ctx.request.body.json();
    const updatedMovie = await movieService.updateMovieById(id, body);
    if (!updatedMovie) {
        ctx.response.status = 404;
        ctx.response.body = { error: "Movie not found" };
        return;
    }

    ctx.response.body = updatedMovie;
});

export default router;
