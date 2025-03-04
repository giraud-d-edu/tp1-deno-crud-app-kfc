import { Context } from "../deps.ts";
import { MovieService } from "../services/MovieService.ts";

const movieService = new MovieService();

export const createMovie = async (context: Context) => {
    const body = await context.request.body.json();
    const newBook = await movieService.createMovie(body);
    context.response.status = 201;
    context.response.body = newBook;
};

export const getMovies = async (context: Context) => {
    context.response.body = await movieService.getAllMovies();
};


export const getMovieById = async (context: Context) => {
    const id = context.params.id;
    const movie = await movieService.getMovieById(id);

    if (!movie) {
        context.response.status = 404;
        context.response.body = { error: "Movie not found" };
        return;
    }
    context.response.body = movie;
};

export const deleteMovieById = async (context: Context) => {
    const id = context.params.id;
    const success = await movieService.deleteMovieById(id);
    if (!success) {
        context.response.status = 404;
        context.response.body = { error: "Movie not found" };
        return;
    }
    context.response.status = 200;
    context.response.body= {message: "Succes deleting movie"}
};

export const updateMovieById = async (context: Context) => {
    const id = context.params.id;

    const body = await context.request.body.json();
    const updatedMovie = await movieService.updateMovieById(id, body);
    if (!updatedMovie) {
        context.response.status = 404;
        context.response.body = {error: "Movie not found"};
        return;
    }
    context.response.body = updatedMovie;
};