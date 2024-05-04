# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i`

2. Copiar lo que esta dentro de .env.exaplme, luego crear el archivo .env con la misma estructura que la del ejemplo. Los valores que tienen ya datos no hace falta cambiarlos. Los valores de la db los tendran que configurar de acuerdo a la que esten usando pero tiene que ser postgreSQL.

3. Para correr el proyecto se usar npm run dev, este comando compila el typeScript en la carpet /build y luego corre la api. 

4. Ya con esto deberia de poder correr el proyecto.

5. Detalles :
*1. Se uso MVC como arquitectura.
*2. Se usaron funciones como controladores y no clases.
*3. Se valido la entrada de datos con Zod.
*4. Se utilizo como cookie-parser, body-parser, cors, morgan para poder manejar un poco mejor los datos.
*5. Los registros  de usuarios se utiliza JWT con bycript para hashear las password
*6. Los errores estan controlados con una funcion de orden superior que intercepta los controldores y hace un next del error para luego manjarlo en el manejador de errores general de express en app.js
*7. Se uso una funcion de orden superior para crear  middlewares para las validaciones de entrada de datos.
