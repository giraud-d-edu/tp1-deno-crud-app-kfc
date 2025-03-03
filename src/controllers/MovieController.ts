import { Router } from "https://deno.land/x/oak/mod.ts";
import { MovieService } from "../services/MovieService.ts";
const router = new Router();
const movieService = new MovieService();

router.post("/books", async (ctx) => {
    const body = await ctx.request.body.json();
    const newBook = movieService.createMovie(body);
    ctx.response.status = 201;
    ctx.response.body = newBook;
});

export default router;
