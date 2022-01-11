"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.ENV_VARS = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const api_routes_1 = require("./routes/api.routes");
const external_routes_1 = require("./routes/external.routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(api_routes_1.apiRouter);
app.use(external_routes_1.extRouter);
exports.ENV_VARS = {
    mongoURI: process.env.MONGO_URI,
    token_secret: process.env.TOKEN_SECRET
};
mongoose_1.default.connect(exports.ENV_VARS.mongoURI);
exports.handler = (0, serverless_http_1.default)(app, { callbackWaitsForEmptyEventLoop: false });
