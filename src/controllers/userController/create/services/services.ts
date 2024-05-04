import models from "../../../../db";
import bcrypt from "bcrypt"
import { UserData } from "../../../../interfaces/interfaces";



export const hashPasswordService = async ({ password }: Pick<UserData, "password">) => {

  const salt = await bcrypt.genSalt(10);
  const passwordEncrypt = await bcrypt.hash(password, salt);
  return { passwordEncrypt }
}


export const createUserService = async ({ password: passwordEncrypt, user }: UserData) => {

  const userFound = await models.userRepository.findOne({
    where: {
      user
    }
  })
  if (userFound) throw new Error("User already exists, please don't repeat") //! no podemos repetirnombres de usuario
  const newUserCreated = models.userRepository.create({
    user: user,
    password: passwordEncrypt
  })
  await models.userRepository.save(newUserCreated)
  return { newUserCreated }
}