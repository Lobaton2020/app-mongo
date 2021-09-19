import { ObjectId } from "bson";
import { Db } from "mongodb";

export default class UserModel {
    nameCollection:string = "users"
    constructor(private readonly db:Db){}
    async find(){
        return await this.db.collection(this.nameCollection).find().toArray()
    }
    async insert(data:any){
        return await (await this.db.collection(this.nameCollection).insertOne(data)).insertedId
    }

    async findOne(id:string){
        return await this.db.collection(this.nameCollection).findOne({_id:new ObjectId(id)}) || {}
    }


    async deleteOne(id:string){
        try{
            return await this.db.collection(this.nameCollection).deleteOne({_id:new ObjectId(id)}) || {}
        }catch(error){
            console.error(error)
            return {error:"No se eliminpo nada"}
        }
    }

};