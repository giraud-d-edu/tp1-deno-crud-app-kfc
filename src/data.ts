import { Actor } from "./models/Actor.ts";

  export const actors: Actor[] = [
    {
      id: 1,
      nom: "Leonardo DiCaprio",
      anniversaire: "1974-11-11",
      filmographie: [
        { film_id: 1, role: "Dom Cobb" },
      ],
    },
    {
      id: 2,
      nom: "Cillian Murphy",
      anniversaire: "1976-05-25",
      filmographie: [
        { film_id: 1, role: "Robert Fischer" },
      ],
    },
  ];