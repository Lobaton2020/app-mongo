import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import { isIncorrectHexParam } from "../validations/isIncorrectHexParam";

export default class UserController {
    constructor(private readonly userModel:UserModel){}
    async find(req:Request,res:Response){
        res.json(await this.userModel.find())
    }

    async insert(req:Request,res:Response){
        res.json({id:await this.userModel.insert(req.body)})
    }
    async findOne(req:Request,res:Response){
        if(isIncorrectHexParam(req.params.id)) return res.json({})
        res.json(await this.userModel.findOne(req.params.id))
    }

    async deleteOne(req:Request,res:Response){
        if(isIncorrectHexParam(req.params.id)) return res.json({})
        res.json(await this.userModel.deleteOne(req.params.id))
    }


};