import app from "./src/app"
import "reflect-metadata"
import { AppDataSource } from "../api/src/db"


AppDataSource.initialize().then(async () => { //! Sincronizamos la carga de la base de datos primero y luego corremos el servidor

  const PORT = process.env.PORT_APP

  app.listen(PORT, () => {
    console.log(`Running ==> ${PORT}`);
  })

}).catch(error => console.log(error))