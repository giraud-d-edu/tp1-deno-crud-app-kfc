import { Application } from "https://deno.land/x/oak/mod.ts";
import movieRouter from "./controllers/MovieController.ts";
import actorRouter from "./controllers/ActorController.ts";

const app = new Application();

app.use(movieRouter.routes());
app.use(movieRouter.allowedMethods());

app.use(actorRouter.routes());
app.use(actorRouter.allowedMethods());

console.log("Serveur démarré sur http://localhost:8000");
await app.listen({ port: 8000 });
