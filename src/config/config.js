"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.DATABASE_NAME = exports.MONGO_URI = exports.PORT = void 0;
exports.PORT = (_a = process.env, _b = _a.PORT, _b === void 0 ? 3000 : _b), exports.MONGO_URI = _a.MONGO_URI, exports.DATABASE_NAME = _a.DATABASE_NAME, exports.NODE_ENV = (_c = _a.NODE_ENV, _c === void 0 ? "dev" : _c);
