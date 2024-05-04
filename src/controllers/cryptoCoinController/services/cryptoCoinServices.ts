import models from "../../../db";

import { Operation, OperationEdit } from '../../../interfaces/interfaces';

export const createNewOperation = async ({ idUser, name, ticker, price, purchase_amount }: Operation) => {

  const userFound = await models.userRepository.findOne({
    where: {
      id: idUser
    }
  })


  if (!userFound) throw new Error("Id user incorrect, user not found")

  const newOperation = models.operationsRepository.create({
    name: name,
    price: price,
    ticker: ticker,
    purchase_amount: purchase_amount
  })
  newOperation.user = userFound
  await models.operationsRepository.save(newOperation)

  return newOperation
}


export const editOperation = async ({ idCurrency, name, ticker, price, purchase_amount }: OperationEdit) => {

  const operationFound = await models.operationsRepository.findOneBy({
    id: idCurrency
  })

  if (!operationFound) throw new Error("Operation not found")
  operationFound.name = name ? name : operationFound.name
  operationFound.ticker = ticker ? ticker : operationFound.ticker
  operationFound.price = price ? price : operationFound.price
  operationFound.purchase_amount = purchase_amount ? purchase_amount : operationFound.purchase_amount

  await models.operationsRepository.save(operationFound)
  return operationFound
}



export const deleteOperation = async ({ idCurrency }: Pick<OperationEdit, "idCurrency">) => {
  await models.operationsRepository.delete({
    id: idCurrency
  })

  return true
}


export const getListOperations = async ({ idUser }: Pick<Operation, "idUser">) => { //!  a esto tengo que hacerle un paginado 
  const userFound = await models.userRepository.findBy({
    id: idUser
  })

  if (!userFound) throw new Error("User not found to get list")
  const listOperationsFound = await models.operationsRepository.findAndCount({
    where: {
      user: userFound
    }
  })
  return listOperationsFound
}