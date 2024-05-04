import { Router } from "express";
import routerJwt from "./subRoutes/jwtCheckerRoutes/jwtCheckerRoutes";
import routerUser from "./subRoutes/userRoutes/userRoutes";
import { keySecretClientChecker } from "../middlewares/keySecretClientChecker";
import routerOperations from "./subRoutes/operationsRoutes/operationsRoutes";
import { checkerJwtToken } from "../middlewares/jwtChecker";


export const routerMain = Router()
//*** */ checkerJwtToken este middleware lo que hace es proteger las rutas, pide el token de usuario 
routerMain.use("/", keySecretClientChecker); //*** Este middeware verifica que el cliente mande la client key correcta para, sino no se puede acceder a las rutas. Esto es  adicional a jwt ya que la ruta de resgistro de usuario queda desprotegida al no existir todavia el jwt .
routerMain.use("/jwt", checkerJwtToken, routerJwt) //!Esta ruta sirve para verificar un token mandado por un cliente. 
routerMain.use("/user", routerUser)
routerMain.use("/crypto-coin-operations", checkerJwtToken, routerOperations)

