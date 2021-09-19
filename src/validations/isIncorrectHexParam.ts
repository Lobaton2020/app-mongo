export function isIncorrectHexParam(id:string){
    if(id.length < 12){
        console.log("Opps id invalido")
        return true;
    }

    return false;
}