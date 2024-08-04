/*

    INICIALIZAR BACKEND

 yarn init -y
 
 yarn add express @types/express mongoose @types/mongoose nodemon ts-node typescript

 yarn tsc --init
 */



 //importa express para crear el servidor
 import express, {Express} from 'express'
//importa mongoose para conectarse a la base de datos
 import mongoose from 'mongoose'
 //importa el router de financial-records
 import financialRecordRouter from './routes/financial-records'
 //importa cors para permitir que el frontend se conecte al backend
import cors from 'cors'



 //crea una instancia de express
 const app: Express = express()
 //crea una constante con el puerto en el que se ejecutará el servidor
 const port = process.env.PORT || 3001;
//crea una constante con la url de la base de datos
 app.use(express.json())
 app.use(cors())
//conecta la base de datos
const mongoURI: string = "mongodb+srv://williamstevencole:1MfE7Y6uInZIQCGa@personalfinancetracker.quqxx6g.mongodb.net/"
mongoose.
connect(mongoURI)
.then(() => console.log("CONNECTED TO MONGODB"))
.catch((err) => console.log("FAILED TO CONNECT TO MONGODB", err))

//crea una ruta para los registros financieros, a traves de este se podria acceder a los registros financieros
//los cuales son: userId, date, description, amount, category, paymentMethod
app.use("/financial-records",financialRecordRouter)

//escucha en el puerto especificado
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
