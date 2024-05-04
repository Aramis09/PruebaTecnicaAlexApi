import { RequestHandler } from "express";
import { catchingErrors } from "../../../utils/catchingError";
import { Operation, ResponseToClient } from "../../../interfaces/interfaces";
import { getListOperations } from "../services/cryptoCoinServices";

export const getOperationList: RequestHandler = async (req, res) => {
  const { idUser } = req.query

  if (idUser === undefined || idUser === "undefined" || typeof idUser !== "string") throw new Error("Incorrect data sent")

  const listFound = await getListOperations({ idUser: Number(idUser) } as Pick<Operation, "idUser">)

  const response: ResponseToClient = {
    data: listFound,
    status: 200,
    error: false,
    msg: "get list successful"
  }

  return res.status(200).send(response)
}
export const getCryptoCurrencyOperationsController = catchingErrors(getOperationList)