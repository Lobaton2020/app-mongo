import { isIncorrectHexParam } from "../src/validations/isIncorrectHexParam"
import { expect } from 'chai'


describe("Test method 'isIncorrectHexParam' that validate id is incorrect",()=>{
    it("Shouild return true with 4",()=>{
        expect(isIncorrectHexParam("34")).to.be.equals(true)
    })

    it("Shouild return false with 123456789011",()=>{
        expect(isIncorrectHexParam("123456789011")).to.be.equals(false)
    })

    it("Shouild return true with 12345678901",()=>{
        expect(isIncorrectHexParam("12345678901")).to.be.equals(true)
    })
    it("Shouild return true with 12345678901234567890",()=>{
        expect(isIncorrectHexParam("12345678901234567890")).to.be.equals(false)
    })
})


