require('dotenv').config();
import { RequestHandler } from "express";
import jwt from "jsonwebtoken"
const { TOKEN_SECRET } = process.env;
// middleware to validate token (rutas protegidas)

//!Verifica el json web token
export const checkerJwtToken: RequestHandler = (req, res, next) => {
  try {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({
      error: 'Acceso denegado',
      acces: false
    })
    jwt.verify(token, String(TOKEN_SECRET)) //!esto tira un error que lo agarra el catch en caso de que no se verifique el token
    // req.user = verified
    return next() // continuamos

  } catch (error) {
    return res.status(401).json({
      error: 'Acceso denegado',
      acces: false
    })
  }
}

