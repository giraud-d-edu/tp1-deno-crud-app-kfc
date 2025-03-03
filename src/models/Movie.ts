import { Role } from "./Role.ts";

export interface Movie {
    id: number;
    titre: string;
    date_sortie: number;
    genre: string;
    acteurs: Role[];
    note: number | null;
}
