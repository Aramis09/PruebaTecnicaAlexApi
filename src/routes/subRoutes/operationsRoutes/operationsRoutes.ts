import { Router } from "express";
import { createCryptoCurrencyOperationController } from "../../../controllers/cryptoCoinController/create/createCryptoCoinController";
import { createMiddlewareValidator } from "../../../middlewares/validator";
import { validateDeletOption, validateEditOperation, validateGetOperationByUser, validateNewOperation } from "./validators/validators";
import { editCryptoCurrencyOperationController } from "../../../controllers/cryptoCoinController/edit/editCryptoCoinController";
import { deleteCryptoCurrencyOperationController } from "../../../controllers/cryptoCoinController/delete/deleteCryptoCoinController";
import { getCryptoCurrencyOperationsController } from "../../../controllers/cryptoCoinController/gets/getsCryptoCoinController";

const routerOperations = Router()
routerOperations.get("/", createMiddlewareValidator(validateGetOperationByUser, "query"), getCryptoCurrencyOperationsController)
routerOperations.post("/", createMiddlewareValidator(validateNewOperation), createCryptoCurrencyOperationController)
routerOperations.patch("/", createMiddlewareValidator(validateEditOperation), editCryptoCurrencyOperationController)
routerOperations.delete("/", createMiddlewareValidator(validateDeletOption), deleteCryptoCurrencyOperationController)


export default routerOperations