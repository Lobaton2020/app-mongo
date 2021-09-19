"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isIncorrectHexParam_1 = require("../src/validations/isIncorrectHexParam");
var chai_1 = require("chai");
describe("Test method 'isIncorrectHexParam' that validate id is incorrect", function () {
    it("Shouild return true with 4", function () {
        chai_1.expect(isIncorrectHexParam_1.isIncorrectHexParam("34")).to.be.equals(true);
    });
    it("Shouild return false with 123456789011", function () {
        chai_1.expect(isIncorrectHexParam_1.isIncorrectHexParam("123456789011")).to.be.equals(false);
    });
    it("Shouild return true with 12345678901", function () {
        chai_1.expect(isIncorrectHexParam_1.isIncorrectHexParam("12345678901")).to.be.equals(true);
    });
    it("Shouild return true with 12345678901234567890", function () {
        chai_1.expect(isIncorrectHexParam_1.isIncorrectHexParam("12345678901234567890")).to.be.equals(false);
    });
});
