"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const validateDto = (validateDto) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const logiData = (0, class_transformer_1.plainToInstance)(validateDto, req.body);
    const errors = yield (0, class_validator_1.validate)(logiData);
    //  console.log(errors);
    if (errors.length > 0) {
        return res.status(400).json({ message: "Validation failed" });
    }
<<<<<<< HEAD
=======
    //  console.log(logiData);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
    req.body = logiData;
    next();
});
exports.validateDto = validateDto;
