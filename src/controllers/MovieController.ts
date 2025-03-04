import { Context } from "../deps.ts";
import { MovieService } from "../services/MovieService.ts";

const movieService = new MovieService();

export const createMovie = async (context: Context) => {
    const body = await context.request.body.json();
    const newBook = movieService.createMovie(body);
    context.response.status = 201;
    context.response.body = newBook;
};

export const getMovies = (context: Context) => {
    context.response.body = movieService.getAllMovies();
};

export const getMovieById = (context: Context) => {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
        context.response.status = 400;
        context.response.body = { error: "Invalid ID" };
        return;
    }

    const movie = movieService.getMovieById(id);
    if (!movie) {
        context.response.status = 404;
        context.response.body = { error: "Movie not found" };
        return;
    }
    context.response.body = movie;
};

export const deleteMovieById = (context: Context) => {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
        context.response.status = 400;
        context.response.body = { error: "Invalid ID" };
        return;
    }

    const success = movieService.deleteMovieById(id);
    if (!success) {
        context.response.status = 404;
        context.response.body = { error: "Movie not found" };
        return;
    }
    context.response.status = 204;
};

export const updateMovieById = async (context: Context) => {
    const id = parseInt(context.params.id);
    if (isNaN(id)) {
        context.response.status = 400;
        context.response.body = {error: "Invalid ID"};
        return;
    }
    const body = await context.request.body.json();
    const updatedMovie = movieService.updateMovieById(id, body);
    if (!updatedMovie) {
        context.response.status = 404;
        context.response.body = {error: "Movie not found"};
        return;
    }
    context.response.body = updatedMovie;
};