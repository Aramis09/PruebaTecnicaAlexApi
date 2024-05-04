import bcrypt from "bcrypt"
import { RequestHandler } from "express"
import jwt from "jsonwebtoken"
import { catchingErrors } from "../../../utils/catchingError";
import models from "../../../db";
import { ResponseToClient, UserData } from "../../../interfaces/interfaces";
const { TOKEN_SECRET } = process.env;

const login: RequestHandler = async (req, res) => {



  const { user, password } = req.body as UserData

  const userFound = await models.userRepository.findOneBy({
    user
  })

  const responseBad: ResponseToClient = {
    data: {
      user: null,
      validPassword: null,
      token: null,
    },
    msg: "Incorrect credentials",
    status: 401,
    error: true
  }
  if (!userFound) return res.status(401).send(responseBad)
  const validPassword = await bcrypt.compare(password, userFound.password);
  if (!validPassword) return res.status(401).send({
    user: "",
    validPassword: false,
    token: "",
    error: true
  })
  const token = jwt.sign({
    name: userFound.user,
    id: userFound.id
  }, String(TOKEN_SECRET))

  res.cookie("jwt-auth", token, {
    maxAge: 1000 * 3600 * 7, //tiempo de vida del TOKEN
    httpOnly: false, //!Esto debe de estar en false por la forma en la que se decidio usar la cookies, es decir que se puede acceder con javaScript desde el navegador
    secure: false, //!Esto es importante pasarlo a true en desarrolo por el protocolo https
    sameSite: "lax" //!Esto en el deploy hay que ponerlo en none para que se pueda intercambiar cookies entre diferentes dominios
  })
  const response: ResponseToClient = {
    data: {
      id: userFound.id,
      user: userFound.user,
      validPassword,
      token,
    },
    msg: "good",
    status: 200,
    error: false
  }

  return res.status(200).send(response)
}

export const loginController = catchingErrors(login)