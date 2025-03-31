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
exports.titleService = void 0;
const service_title_model_1 = require("../models/service.title.model");
const titleService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data.name);
        const exists = yield service_title_model_1.Title.findOne({ name: data.name });
        if (exists) {
            return false;
        }
        const newTitle = new service_title_model_1.Title(Object.assign({}, data));
        const saveTitle = yield newTitle.save();
        return true;
    }
    catch (error) {
        throw new Error("Failed to create title");
    }
});
exports.titleService = titleService;
