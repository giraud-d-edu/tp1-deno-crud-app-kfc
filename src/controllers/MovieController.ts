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

router.get("/films", (ctx) => {
    ctx.response.body = movieService.getAllMovies();
});

export default router;
