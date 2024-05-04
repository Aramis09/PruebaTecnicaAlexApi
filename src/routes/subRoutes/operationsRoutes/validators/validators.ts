import z from "zod"
import { buildErrorValidator } from "../../../../utils/validatorErrors"



export const validateNewOperation = z.object({
  idUser: z.number(buildErrorValidator("number")),
  name: z.string(buildErrorValidator("string")),
  ticker: z.string(buildErrorValidator("string")),
  price: z.number(buildErrorValidator("number")),
  purchase_amount: z.number(buildErrorValidator("number"))
})



export const validateEditOperation = z.object({
  idCurrency: z.number().nullable().optional(),
  name: z.string().nullable().optional(),
  ticker: z.string().nullable().optional(),
  price: z.number().nullable().optional(),
  purchase_amount: z.number().nullable().optional()
})

export const validateDeletOption = z.object({
  idCurrency: z.number(buildErrorValidator("number"))
})

export const validateGetOperationByUser = z.object({
  idUser: z.string(buildErrorValidator("number"))
})