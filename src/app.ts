import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import * as env from './config/config'
import userRouter from './routes/userRouter';
import mongoClient  from './database/ConnectionMongo'
async function  bootstrap() {
    if(!["dev","DEV"].includes(env.NODE_ENV)) console.debug = ()=>{};
    await mongoClient.connect((error)=>console.error(error || ""))
    console.log("Conectado a base de datos")

    const app = express();
    app.use(express.json())
    app.use("/api/v1",userRouter(mongoClient.db(env.DATABASE_NAME)))
    app.listen(process.env.PORT || 3000,()=>console.log("RUNNING APP"))
    console.debug(env)
    return "Well"
}

bootstrap()
.then(console.log)
.catch(console.error)
.finally(()=>mongoClient.close())

