import { Router } from "express";
import { createUserController } from "../../../controllers/userController/create/createUserController"
import { loginController } from "../../../controllers/userController/login/loginController";
import { validateRepeateUserController } from "../../../controllers/userController/validateRepeateUser/validateRepeateUserController";
import { createMiddlewareValidator } from "../../../middlewares/validator";
import { validateCreateUser, validateRepeatUser } from "./validators/validators";


const routerUser = Router()



routerUser.post("/", createMiddlewareValidator(validateCreateUser), createUserController);
routerUser.post("/login", createMiddlewareValidator(validateCreateUser), loginController);
routerUser.post("/validate-repeate-user", createMiddlewareValidator(validateRepeatUser), validateRepeateUserController);





export default routerUser
