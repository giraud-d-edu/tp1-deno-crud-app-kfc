import { ObjectId } from "npm:mongodb@5.6.0";

export interface MovieDBO {
    _id: ObjectId;
    titre: string;
    date_sortie: number;
    genre: string;
    acteurs: { acteur_id: number; role: string }[];
    note: number | null;
}