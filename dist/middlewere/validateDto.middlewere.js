"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const validateDto = (validateDto) => async (req, res, next) => {
    const logiData = (0, class_transformer_1.plainToInstance)(validateDto, req.body);
    const errors = await (0, class_validator_1.validate)(logiData);
    console.log(errors);
    if (errors.length > 0) {
        return res.status(400).json({ message: "Validation failed" });
    }
    console.log("hiiiiiiiiiiiiiiiii");
    req.body = logiData;
    next();
};
exports.validateDto = validateDto;
