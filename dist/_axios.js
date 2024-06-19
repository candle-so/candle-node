"use strict";
/// <reference types="node" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosWrapper = void 0;
var axios_1 = __importDefault(require("axios"));
var axiosWrapper = function (_a) {
    var url = _a.url, _b = _a.method, method = _b === void 0 ? "GET" : _b, _c = _a.data, data = _c === void 0 ? {} : _c, apiKey = _a.apiKey, accessToken = _a.accessToken;
    return __awaiter(void 0, void 0, void 0, function () {
        var CANDLE_API_URL, KEY_SPLIT, MODE, _url, headers, results, response, response, response, response, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    CANDLE_API_URL = process.env.CANDLE_API_URL || "https://api.candle.so";
                    if (!url)
                        throw new Error("url is not set");
                    if (!apiKey)
                        throw new Error("apiKey is not set");
                    KEY_SPLIT = apiKey.split("_");
                    if (KEY_SPLIT.length !== 3)
                        throw new Error("apiKey is not valid");
                    MODE = KEY_SPLIT[1];
                    _url = "".concat(CANDLE_API_URL, "/v1/").concat(url);
                    headers = {
                        api_key: apiKey,
                        "Content-Type": "application/json",
                        mode: MODE,
                    };
                    if (accessToken)
                        headers["authorization"] = "Bearer ".concat(accessToken);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 10, , 11]);
                    results = {};
                    if (!(method === "GET")) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios_1.default.get(_url, { headers: headers })];
                case 2:
                    response = _d.sent();
                    results = { status: response.status, data: response.data };
                    _d.label = 3;
                case 3:
                    if (!(method === "POST")) return [3 /*break*/, 5];
                    return [4 /*yield*/, axios_1.default.post(_url, data, { headers: headers })];
                case 4:
                    response = _d.sent();
                    results = { status: response.status, data: response.data };
                    _d.label = 5;
                case 5:
                    if (!(method === "PUT")) return [3 /*break*/, 7];
                    return [4 /*yield*/, axios_1.default.put(_url, data, { headers: headers })];
                case 6:
                    response = _d.sent();
                    results = { status: response.status, data: response.data };
                    _d.label = 7;
                case 7:
                    if (!(method === "DELETE")) return [3 /*break*/, 9];
                    return [4 /*yield*/, axios_1.default.delete(_url, { headers: headers })];
                case 8:
                    response = _d.sent();
                    results = { status: response.status, data: response.data };
                    _d.label = 9;
                case 9: return [2 /*return*/, results];
                case 10:
                    error_1 = _d.sent();
                    return [2 /*return*/, { status: error_1.response.status, error: error_1.response.data }];
                case 11: return [2 /*return*/];
            }
        });
    });
};
exports.axiosWrapper = axiosWrapper;
