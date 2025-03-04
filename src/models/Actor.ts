import { Filmography } from "./Filmography.ts";

export interface Actor {
    acteur_id: number;
    nom: string;
    anniversaire: string;
    filmographie: Filmography[];
}