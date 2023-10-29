"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jokeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.jokeSchema = joi_1.default.object({
    type: joi_1.default.string().required(),
    setup: joi_1.default.string().required(),
    punchline: joi_1.default.string().required(),
    id: joi_1.default.number().required(),
});
//# sourceMappingURL=Joke.js.map