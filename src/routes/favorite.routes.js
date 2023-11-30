import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {
  favorites,
  favoriteAdd,
  favoriteDelete,
} from "../controllers/favorite.controller.js";

const router = Router();

router.get("/users/:userId/favorites", favorites);
router.post("/favorites/add", authRequired, favoriteAdd);
router.delete("/favorite/delete/:id", authRequired, favoriteDelete);

export default router;
