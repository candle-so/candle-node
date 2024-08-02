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
Object.defineProperty(exports, "__esModule", { value: true });
var _axios_1 = require("./_axios");
var Candle = /** @class */ (function () {
    function Candle(apiKey, debug) {
        var _this = this;
        // auth
        this.auth = {
            requestOtpViaEmail: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "auth/otp/email", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            verifyOTP: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "auth/otp/verify", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            refreshSession: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "auth/session/refresh", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // platforms
        this.platforms = {
            getPlatformByDomain: function (domain, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/domains/".concat(domain), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            getPlatformById: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/".concat(id), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            uploadPlatformImage: function (id, file, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/".concat(id, "/image"), method: "POST", file: file, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyPlatformById: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/".concat(id), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listPlatformKeys: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/".concat(id, "/keys"), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listCommunityMembers: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/community", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            checkUserMembership: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/community/user/".concat(userId), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // waitlists
        this.waitlists = {
            addToWaitlist: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listWaitlist: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            grantWaitlistAccess: function (waitlistId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists/".concat(waitlistId, "/grant"), method: "POST", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // users
        this.users = {
            retrieveUser: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyUser: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth", method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            scheduleUserForDeletion: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth", method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addUserImage: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/image", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addUserLink: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/link", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeUserLink: function (linkId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/link/".concat(linkId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            connectUserBankAccounts: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/bank_accounts", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUserBankAccounts: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/bank_accounts", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            setUserClientSecret: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/client_secret", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listUserPaymentMethods: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/payment_methods", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeUserPaymentMethod: function (paymentMethodId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/payment_methods/".concat(paymentMethodId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            setUserPaymentMethodAsDefault: function (paymentMethodId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/auth/payment_methods/".concat(paymentMethodId, "/default"), method: "PUT", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            createUser: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users", method: "POST", data: data, apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUserById: function (id) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id), method: "GET", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listUsers: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users", method: "GET", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyUserById: function (id, data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id), method: "PUT", data: data, apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            scheduleUserForDeletionById: function (id) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id), method: "DELETE", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addUserImageById: function (id, data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/image"), method: "POST", data: data, apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addUserLinkById: function (id, data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/link"), method: "POST", data: data, apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeUserLinkById: function (id, linkId) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/link/").concat(linkId), method: "DELETE", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUserBankAccountsById: function (id) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/bank_accounts"), method: "GET", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listUserPaymentMethodsById: function (id) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/payment_methods"), method: "GET", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeUserPaymentMethodById: function (id, paymentMethodId) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/payment_methods/").concat(paymentMethodId), method: "DELETE", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            setUserPaymentMethodAsDefaultById: function (id, paymentMethodId) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/payment_methods/").concat(paymentMethodId, "/default"), method: "PUT", apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // products
        this.products = {
            createProduct: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listProducts: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listUserProducts: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/user/".concat(userId), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveProductById: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyProductById: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            deleteProduct: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listProductPrices: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/prices"), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addSeasonalPrice: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/prices"), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeSeasonalPrice: function (id, priceId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/prices/").concat(priceId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            setSeasonalPriceUsage: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/prices/usage"), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            enableProduct: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/enable"), method: "PUT", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            disableProduct: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/disable"), method: "PUT", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // contracts
        this.contracts = {
            createContract: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            createContractFromCart: function (cartId, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/cart/".concat(cartId), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listContracts: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listContractsByBuyer: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/user/".concat(userId, "/buyer"), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listContractsBySeller: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/user/".concat(userId, "/seller"), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listAuthenticatedUserContracts: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/auth", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveContractById: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            deleteContract: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyContractById: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addItemToContract: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/item"), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeItemFromContract: function (id, itemId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/item/").concat(itemId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addBuyerToContract: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/buyer"), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyBuyerDueAmount: function (id, buyerId, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/buyer/").concat(buyerId, "/due"), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeBuyerFromContract: function (id, buyerId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/buyer/").concat(buyerId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addSellerToContract: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/seller"), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifySellerOwedAmount: function (id, sellerId, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/seller/").concat(sellerId, "/owed"), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addFeeToContract: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/fee"), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeFeeFromContract: function (id, feeId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/fee/").concat(feeId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            updateContractFees: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/fee"), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            setFeeInclusion: function (id, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/fee_inclusion"), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            settleContract: function (id, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contracts/".concat(id, "/settle"), method: "PUT", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // carts
        this.carts = {
            addProductToUserCart: function (productId, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/auth/products/".concat(productId), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyProductInUserCart: function (productId, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/auth/products/".concat(productId), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUserCart: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/auth", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeProductFromUserCart: function (productId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/auth/products/".concat(productId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            clearUserCart: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/auth", method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // subscriptions
        this.subscriptions = {
            createSubscriptionFromContract: function (contractId, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/contract/".concat(contractId), method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listUserSubscriptions: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/user/".concat(userId), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveSubscription: function (subscriptionId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/".concat(subscriptionId), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            pauseSubscription: function (subscriptionId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/".concat(subscriptionId, "/pause"), method: "PUT", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            resumeSubscription: function (subscriptionId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/".concat(subscriptionId, "/resume"), method: "PUT", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            endSubscription: function (subscriptionId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/".concat(subscriptionId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // calendars
        this.calendars = {
            retrieveUserCalendar: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/auth", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUserAvailability: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/user/".concat(userId, "/availability"), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addEventToCalendar: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/auth/event", method: "POST", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveEventFromCalendar: function (eventId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/auth/event/".concat(eventId), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyEventInCalendar: function (eventId, data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/auth/event/".concat(eventId), method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeEventFromCalendar: function (eventId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/auth/event/".concat(eventId), method: "DELETE", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyUserAvailability: function (data, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/auth/availability", method: "PUT", data: data, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // transactions
        this.transactions = {
            listTransactions: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveBuyersRevenue: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/user/".concat(userId, "/revenue"), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveSellersSpend: function (userId, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/user/".concat(userId, "/spend"), method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            getBiggestSpenders: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/spenders", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            getBiggestEarners: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/earners", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            getPlatformVolume: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/volume", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            getPlatformCartValue: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/cart", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            getPlatformMRR: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/mrr", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            getPlatformARR: function (accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/arr", method: "GET", apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        // utils
        this.utils = {
            generateUsername: function (text) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "utils/generate/username", method: "POST", data: { text: text }, apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            estimateFee: function (amount) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "utils/estimate/fee", method: "POST", data: { amount: amount }, apiKey: this.apiKey, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            uploadMedia: function (file, accessToken) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "utils/media/upload", method: "UPLOAD", file: file, apiKey: this.apiKey, accessToken: accessToken, debug: this.debug })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        this.apiKey = apiKey;
        this.debug = debug;
    }
    Candle.init = function (_a) {
        var api_key = _a.api_key, debug = _a.debug;
        return new Candle(api_key, debug);
    };
    return Candle;
}());
exports.default = Candle;
