"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDto = void 0;
const class_validator_1 = require("class-validator");
class ServiceDto {
    userId;
    titleId;
    categoryId;
    setPrice;
    pricePer = "Per Hour";
    availability = "Morning : 9 To 12";
    itemPhoto;
    address;
}
exports.ServiceDto = ServiceDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ServiceDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ServiceDto.prototype, "titleId", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ServiceDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: "Price must be a positive number" }),
    __metadata("design:type", Number)
], ServiceDto.prototype, "setPrice", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(["Per Hour", "Per Day", "Fix Rate"]),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ServiceDto.prototype, "pricePer", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(["Morning : 9 To 12", "Afternoon : 2 To 4", "Evening : 4 To 6"]),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ServiceDto.prototype, "availability", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1, { message: "At least one item photo is required" }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ServiceDto.prototype, "itemPhoto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ServiceDto.prototype, "address", void 0);
