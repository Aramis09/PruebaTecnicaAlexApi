require("dotenv").config();
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Operations } from "./entity/Operations";
const { HOST,
  PORT,
  USER_NAME,
  PASSWORD,
  DATA_BASE, } = process.env;


export const AppDataSource = new DataSource({
  type: "postgres",
  host: String(HOST),
  port: Number(PORT),
  username: String(USER_NAME),
  password: String(PASSWORD),
  database: DATA_BASE,
  synchronize: true,
  logging: false,
  entities: [User, Operations], //! no tengo que olvidar de agregar  mis entidades
  // dropSchema: true,
  migrations: [],
  subscribers: [],
})




export default {
  userRepository: AppDataSource.getRepository(User),
  operationsRepository: AppDataSource.getRepository(Operations),
} 