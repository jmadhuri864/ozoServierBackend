"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
const redisClient = new ioredis_1.Redis({
    host: "127.0.0.1",
    port: 6379,
});
redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});
exports.default = redisClient;
