import { Router } from "express";
import { verificationTokenController } from "../../../controllers/tokenCheckerController/tokenCheckerController";

const routerJwt = Router()

//!Esta ruta sirve para verificar un token mandado por un cliente, en caso de que sea valido da el permiso. 
routerJwt.post("/verificationToken", verificationTokenController);

export default routerJwt