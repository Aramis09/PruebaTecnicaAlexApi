import { RequestHandler } from "express";
import { catchingErrors } from "../../../utils/catchingError";
import { OperationEdit, ResponseToClient } from "../../../interfaces/interfaces";
import { editOperation } from "../services/cryptoCoinServices";

const editCryptoCurrencyOperation: RequestHandler = async (req, res) => {
  console.log(req.body);

  const operationEdited = await editOperation(req.body as OperationEdit)

  const response: ResponseToClient = {
    data: operationEdited,
    status: 200,
    error: false,
    msg: "Operation edited"
  }

  return res.status(200).send(response)
}
export const editCryptoCurrencyOperationController = catchingErrors(editCryptoCurrencyOperation)

