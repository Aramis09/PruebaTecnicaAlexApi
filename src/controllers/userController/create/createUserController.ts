require('dotenv').config();
import { RequestHandler } from "express";
import { catchingErrors } from "../../../utils/catchingError";
import { createUserService, hashPasswordService } from "./services/services";
import { ResponseToClient, UserData } from "../../../interfaces/interfaces";



const createUser: RequestHandler = async (req, res) => {
  const { user, password } = req.body as UserData
  const { passwordEncrypt } = await hashPasswordService({
    password
  })
  const { newUserCreated } = await createUserService({ password: passwordEncrypt, user })

  const reponse: ResponseToClient = {
    data: newUserCreated,
    error: false,
    msg: "User created",
    status: 200
  }
  return res.status(200).send(reponse)
}

export const createUserController = catchingErrors(createUser)



