import { Router } from "express";
import { Db } from "mongodb";
import UserController from "../controllers/UserController";
import UserModel from "../models/UserModel";

export default (db:Db)=>{
    const router = Router()
    const controller = new UserController(new UserModel(db));
    router.get("/users",controller.find.bind(controller))
    router.get("/users/:id",controller.findOne.bind(controller))
    router.post("/users",controller.insert.bind(controller))
    router.delete("/users/:id",controller.deleteOne.bind(controller))
    return router
};

