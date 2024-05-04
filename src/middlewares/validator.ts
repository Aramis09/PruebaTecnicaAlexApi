import { RequestHandler } from "express"
type Tarjet = "body" | "query" | "params" | undefined

//!Este middleware se encarga de manjar el error de las validaciones y sanitiza el body, el objetivo es separar la logica de validacion del controllador y rutas
export function createMiddlewareValidator<B>(schema: B, tarjet: Tarjet = "body"): RequestHandler {
  return (req, res, next) => {
    //@ts-expect-error  debido al tipo al dinamismo que tiene los obviamos con any
    const result = schema["safeParse"](req[tarjet])
    if (result.error) {
      return res.status(400).send({
        error: JSON.parse(result.error.message)
      })
    }
    req.body = result["data"]
    return next()
  }
}
