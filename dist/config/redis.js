"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
<<<<<<< HEAD
const redisClient = new ioredis_1.Redis({
    host: "127.0.0.1",
    port: 6379,
});
=======
const redisClient = new ioredis_1.Redis({});
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});
exports.default = redisClient;
