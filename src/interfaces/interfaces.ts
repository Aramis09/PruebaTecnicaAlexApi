//!Response

export interface ResponseToClient {
  status: number
  msg: string,
  error: boolean
  data: any
}


//!Response end
export interface ValidateToken {
  "error": string,
  "acces": boolean
}

export interface UserData {
  password: string
  user: string
}



export interface Operation {
  idUser: number
  name: string
  ticker: string
  price: number
  purchase_amount: number
}



export interface OperationEdit {
  idCurrency?: number
  name?: string
  ticker?: string
  price?: number
  purchase_amount?: number
}
