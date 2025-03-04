import { Application } from "./deps.ts";
import router from "./routes/routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Serveur démarré sur http://localhost:8000");
await app.listen({ port: 8000 });
