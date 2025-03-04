import { Movie } from "../models/Movie.ts";

export interface MovieDTO {
    titre: string;
    date_sortie: number;
    genre: string;
    acteurs: { acteur_id: number; role: string }[];
    note: number | null;
}

export function toMovieDTO(movie: Movie): MovieDTO {
    return {
        titre: movie.titre,
        date_sortie: movie.date_sortie,
        genre: movie.genre,
        acteurs: movie.acteurs.map(acteur => ({
            acteur_id: acteur.acteur_id,
            role: acteur.role
        })),
        note: movie.note
    };
}
