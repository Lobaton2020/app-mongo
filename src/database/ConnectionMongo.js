"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var config_1 = require("../config/config");
exports.default = new mongodb_1.MongoClient(config_1.MONGO_URI || "", { useNewUrlParser: true });
