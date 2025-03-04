export interface Actor {
    id: number;
    nom: string;
    anniversaire: string;
    filmographie: Array<{ film_id: number; role: string }>;
}