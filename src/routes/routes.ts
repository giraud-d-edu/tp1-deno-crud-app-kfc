// routes.ts
import { Router } from "../deps.ts";
import * as MovieController from "../controllers/Moviecontroller.ts";
import * as ActorController from "../controllers/ActorController.ts";

const router = new Router();

router.get("/films", MovieController.getMovies);
router.get("/films/:id", MovieController.getMovieById);
router.post("/films", MovieController.createMovie);
router.put("/films/:id", MovieController.updateMovieById);
router.delete("/films/:id", MovieController.deleteMovieById);

router.get("/acteurs", ActorController.getActors);
router.get("/acteurs/:id", ActorController.getActorById);
router.post("/acteurs", ActorController.createActor);
router.put("/acteurs/:id", ActorController.updateActorById);
router.delete("/acteurs/:id", ActorController.deleteActorById);


export default router;
