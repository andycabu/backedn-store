import { z } from "zod";

export const productSchema = z.object({
  category: z
    .string({
      message: "Se requiere un nombre",
    })
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    }),
  title: z
    .string({
      required_error: "Se requiere una referencia",
    })
    .min(2, {
      message: "La referencia debe tener al menos 2 caracteres",
    }),
  description: z
    .string({
      required_error: "Se requiere una descripcion",
    })
    .min(2, {
      message: "La descripcion debe tener al menos 2 caracteres",
    }),
  image: z.string,
  price: z
    .number({
      required_error: "Se requiere un precio",
    })
    .min(1, {
      message: "El precio debe ser mayor a 0",
    }),
});
