import { RequestHandler } from "express";
import models from "../../../db";
import { catchingErrors } from "../../../utils/catchingError";
import { ResponseToClient, UserData } from "../../../interfaces/interfaces";




const validateRepeateUser: RequestHandler = async (req, res) => {

  const { user } = req.body as Pick<UserData, "user">


  const userFound = await models.userRepository.findOne({
    where: {
      user
    }
  })

  const responseBad: ResponseToClient = {
    data: {
      validUser: false
    },
    error: false,
    msg: "User already exists",
    status: 200
  }

  if (userFound) return res.status(200).send(responseBad)
  const responseGood: ResponseToClient = {
    data: {
      validUser: true
    },
    error: false,
    msg: "User already exists",
    status: 200
  }

  return res.status(200).send(responseGood)
}

export const validateRepeateUserController = catchingErrors(validateRepeateUser)