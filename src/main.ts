import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./controllers/MovieController.ts";
import "./config/database.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Serveur démarré sur http://localhost:8000");
await app.listen({ port: 8000 });
