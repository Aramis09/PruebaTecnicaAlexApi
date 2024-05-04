import { RequestHandler } from "express";
import { catchingErrors } from "../../../utils/catchingError";
import { OperationEdit, ResponseToClient } from "../../../interfaces/interfaces";
import { deleteOperation } from "../services/cryptoCoinServices";

const deleteCryptoCurrencyOperation: RequestHandler = async (req, res) => {

  await deleteOperation(req.body as Pick<OperationEdit, "idCurrency">)

  const response: ResponseToClient = {
    data: null,
    status: 200,
    error: false,
    msg: "Operation deleted"
  }

  return res.status(200).send(response)
}
export const deleteCryptoCurrencyOperationController = catchingErrors(deleteCryptoCurrencyOperation)

