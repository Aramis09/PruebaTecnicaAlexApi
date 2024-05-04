import { RequestHandler } from "express";
import { catchingErrors } from "../../../utils/catchingError";
import { Operation, ResponseToClient } from "../../../interfaces/interfaces";
import { createNewOperation } from "../services/cryptoCoinServices";

const createCryptoCurrencyOperation: RequestHandler = async (req, res) => {
  const { idUser, name, ticker, price, purchase_amount }: Operation = req.body
  console.log(idUser, "<<<-------------");

  const newOperation = await createNewOperation({ idUser, name, ticker, price, purchase_amount })

  const response: ResponseToClient = {
    data: newOperation,
    status: 200,
    error: false,
    msg: "Operation created"
  }

  return res.status(200).send(response)
}
export const createCryptoCurrencyOperationController = catchingErrors(createCryptoCurrencyOperation)


