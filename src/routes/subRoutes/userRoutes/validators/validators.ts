import { z } from "zod";
import { buildErrorValidator } from "../../../../utils/validatorErrors";


export const validateCreateUser = z.object({
  user: z.string(buildErrorValidator("string")),
  password: z.string(buildErrorValidator("string"))
})

export const validateRepeatUser = z.object({
  user: z.string(buildErrorValidator("string"))
})