import { RequestHandler } from "express"

//! verifica una key no cifrada de las varibales de entorno

export const keySecretClientChecker: RequestHandler = (req, res, next) => {
  const secretKey = req.header('auth-secret-key')
  if (secretKey !== process.env.CLIENT_KEY) return res.status(401).send({
    error: "you not have autorize"
  })
  return next()
}


