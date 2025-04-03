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
exports.ResetPasswordDto = exports.VerifyOtpDto = exports.SendOtpDto = exports.LoginDto = exports.SignUpDto = void 0;
const class_validator_1 = require("class-validator");
class SignUpDto {
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "Invalid name formate" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "profilePhoto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
<<<<<<< HEAD
], SignUpDto.prototype, "lastName", void 0);
=======
<<<<<<< HEAD
], SignUpDto.prototype, "lastName", void 0);
=======
], SignUpDto.prototype, "LastName", void 0);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[0-9]{10}$/, { message: "Mobile number must be 10 digits" }),
    __metadata("design:type", String)
], SignUpDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "emailAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SignUpDto.prototype, "termsCondition", void 0);
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Invalid email formate" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    __metadata("design:type", String)
], LoginDto.prototype, "emailAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Password must be string" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Password is required" }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class SendOtpDto {
}
exports.SendOtpDto = SendOtpDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Invalid email format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    __metadata("design:type", String)
], SendOtpDto.prototype, "emailAddress", void 0);
class VerifyOtpDto {
}
exports.VerifyOtpDto = VerifyOtpDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Invalid email format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "emailAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 6, { message: "OTP must be exactly 6 digits" }),
    (0, class_validator_1.IsNotEmpty)({ message: "OTP is required" }),
    __metadata("design:type", String)
], VerifyOtpDto.prototype, "otp", void 0);
class ResetPasswordDto {
}
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Invalid email format" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "emailAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 6, { message: "OTP must be exactly 6 digits" }),
    (0, class_validator_1.IsNotEmpty)({ message: "OTP is required" }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "otp", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20, { message: "Password must be between 6 and 20 characters" }),
    (0, class_validator_1.IsNotEmpty)({ message: "New password is required" }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "newPassword", void 0);
