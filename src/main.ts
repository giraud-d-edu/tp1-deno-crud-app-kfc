import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./controllers/MovieController.ts";
import { connectToDatabase } from "./config/db.ts";

const app = new Application();

await connectToDatabase();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Serveur démarré sur http://localhost:8000");
await app.listen({ port: 8000 });
