import { RequestHandler } from "express"
//!Esto lo que hace es solo responder si el token del cliente es valido, no tiene la logica como tal  ya que antes del mismo esta presente el middleware checkerJwtToken que hace la verificacion y un next si el token es valido.
export const verificationTokenController: RequestHandler = (_req, res) => res.status(200).send({
  error: "You have acces",
  acces: true,
})
