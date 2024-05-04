import { RequestHandler } from "express"

//!esta funcion de orden superior lo que hace es interceptar los controladores para por si ocurre un error, mandarlo al manejador de errores general de express en app.ts
export const catchingErrors = (asyncController: RequestHandler): RequestHandler => {
  return async (req, res, next) => {
    try {
      await asyncController(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};