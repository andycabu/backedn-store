import { Router } from "express";
import {
  products,
  productAdd,
  productDelete,
  productUpdate,
} from "../controllers/product.controller.js";
import { authRequired } from "../middleware/validateToken.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { productSchema } from "../schemas/product.schema.js";
const router = Router();

router.get("/products", products);
router.post(
  "/product/add",
  validateSchema(productSchema),
  authRequired,
  productAdd
);
router.delete("/product/delete/:id", authRequired, productDelete);
router.put("/product/update/:id", authRequired, productUpdate);

export default router;
