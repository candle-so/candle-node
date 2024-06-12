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
    function Candle(apiKey) {
        var _this = this;
        this.platforms = {
            checkCommunityMembership: function (_a) {
                var user_id = _a.user_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "platforms/user/".concat(user_id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.users = {
            createUser: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUser: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            generateUsername: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/username/generate", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyUser: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            scheduleDeletion: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/schedule"), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            connectStripe: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/stripe/connect"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrieveStripeConnect: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/stripe/connect"), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            getClientSecret: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/client-secret"), method: "POST", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removePaymentMethod: function (_a) {
                var user_id = _a.user_id, paymentMethod_id = _a.paymentMethod_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(user_id, "/payment-methods/").concat(paymentMethod_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            listPaymentMethods: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/payment-methods"), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            setDefaultPaymentMethod: function (_a) {
                var id = _a.id, paymentMethod_id = _a.paymentMethod_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/payment-methods/").concat(paymentMethod_id, "/default"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            authoriseFutureCharges: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/permissions/charge"), method: "POST", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            deauthoriseFutureCharges: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "users/".concat(id, "/permissions/charge"), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.contacts = {
            addUserAsContact: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listContacts: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts", method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            searchContacts: function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts/search", method: "GET", data: query, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            findContactByEmail: function (_a) {
                var email = _a.email;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts/email/".concat(email), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            modifyContact: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts/".concat(id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            deleteContact: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts/".concat(id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            specialPriceOnProduct: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts/".concat(id, "/special-price/product"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            specialPriceOnService: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "contacts/".concat(id, "/special-price/service"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.products = {
            createProduct: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listAllProducts: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveProductById: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrievePricesForProduct: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/prices"), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            listPricesForProduct: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/prices"), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            setSeasonalPricesForProduct: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/prices/seasonal"), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            modifyProduct: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            disableProduct: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/disable"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            enableProduct: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id, "/enable"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            deleteProduct: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "products/".concat(id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.services = {
            createService: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listAllUserServices: function (_a) {
                var user_id = _a.user_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/user/".concat(user_id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrieveServiceById: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            listPricesForService: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id, "/prices"), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addServiceAsParent: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id, "/add/parent"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            setSeasonalPricesForService: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id, "/prices/seasonal"), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            modifyService: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            disableService: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id, "/disable"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            enableService: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id, "/enable"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            deleteService: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "services/".concat(id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.carts = {
            addProductToCart: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/".concat(id, "/product"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addServiceToCart: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/".concat(id, "/service"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrieveCartById: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/".concat(id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrieveCartByUserId: function (_a) {
                var user_id = _a.user_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/user/".concat(user_id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            clearCart: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/".concat(id, "/clear"), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            modifyCart: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/".concat(id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeItemFromCart: function (_a) {
                var id = _a.id, item_id = _a.item_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "carts/".concat(id, "/item/").concat(item_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.subscriptions = {
            subscribeToService: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/service", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            pauseSubscription: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/".concat(id, "/pause"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            resumeSubscription: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/".concat(id, "/resume"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            unsubscribeFromService: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "subscriptions/service", method: "DELETE", data: { id: id }, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.invoices = {
            createInvoice: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addItemToInvoice: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/items"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            createInvoiceFromCart: function (_a) {
                var cart_id = _a.cart_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/cart/".concat(cart_id), method: "POST", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            createInvoiceFromSubscription: function (_a) {
                var subscription_id = _a.subscription_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/subscription/".concat(subscription_id), method: "POST", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            createInvoiceFromCalendarEvent: function (_a) {
                var calendarEvent_id = _a.calendarEvent_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/event/".concat(calendarEvent_id), method: "POST", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrieveUserReceivedInvoices: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/buyer", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUserSentInvoices: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/seller", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveInvoiceById: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrievePublicInvoiceById: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/public"), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            modifyInvoice: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeItemFromInvoice: function (_a) {
                var id = _a.id, item_id = _a.item_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/item/").concat(item_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addSellerToInvoice: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/seller"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeSellerFromInvoice: function (_a) {
                var id = _a.id, seller_id = _a.seller_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/seller/").concat(seller_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addBuyerToInvoice: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/buyer"), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeBuyerFromInvoice: function (_a) {
                var id = _a.id, buyer_id = _a.buyer_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/buyer/").concat(buyer_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            modifyBuyerDueAmount: function (_a) {
                var id = _a.id, buyer_id = _a.buyer_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/buyer/").concat(buyer_id, "/due-amount"), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            estimateFees: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/estimate-fees", method: "GET", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            addCustomFee: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/fee/custom"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            updateFeesForInvoice: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/fee"), method: "PUT", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeCustomFee: function (_a) {
                var id = _a.id, fee_id = _a.fee_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/fee/").concat(fee_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            setFeeInclusion: function (_a) {
                var id = _a.id, fee_id = _a.fee_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/fee/").concat(fee_id, "/include-fee"), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            settleInvoice: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/settle"), method: "POST", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            updateInvoiceStatus: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "invoices/".concat(id, "/status"), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.calendars = {
            retrieveUserCalendarEvents: function (_a) {
                var user_id = _a.user_id, month = _a.month, year = _a.year;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/user/".concat(user_id), method: "GET", data: { month: month, year: year }, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addEventToCalendar: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/".concat(id, "/event"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrieveEventFromCalendar: function (_a) {
                var event_id = _a.event_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            modifyEventInCalendar: function (_a) {
                var event_id = _a.event_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeEventFromCalendar: function (_a) {
                var event_id = _a.event_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addServiceToEvent: function (_a) {
                var event_id = _a.event_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id, "/service"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeServiceFromEvent: function (_a) {
                var event_id = _a.event_id, service_id = _a.service_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id, "/service/").concat(service_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addProductToEvent: function (_a) {
                var event_id = _a.event_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id, "/product"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeProductFromEvent: function (_a) {
                var event_id = _a.event_id, product_id = _a.product_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id, "/product/").concat(product_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addAttendeeToEvent: function (_a) {
                var event_id = _a.event_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id, "/attendee"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            removeAttendeeFromEvent: function (_a) {
                var attendee_id = _a.attendee_id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/attendee/".concat(attendee_id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            respondToEvent: function (_a) {
                var event_id = _a.event_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id, "/respond"), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            addCommentToEvent: function (_a) {
                var event_id = _a.event_id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/event/".concat(event_id, "/comment"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            setAvailabilityByDayOfWeek: function (_a) {
                var dayOfWeek = _a.dayOfWeek, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/availability/dow/".concat(dayOfWeek), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            setAvailabilityByDateRange: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/availability/daterange", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            setUnavailabilityByDateRange: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/unavailability/daterange", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            linkGoogleCalendar: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/google/link", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            syncGoogleCalendars: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/google/sync", method: "POST", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listUpcomingEvents: function (query) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "calendars/google/upcoming", method: "GET", data: query, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        this.transactions = {
            retrieveUserRevenue: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/revenue", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrieveUserSpend: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/spend", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            retrievePlatformRevenue: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "transactions/platform/revenue", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
        };
        this.waitlists = {
            addPersonToWaitlist: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            countPeopleInWaitlist: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists/count", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            listAllInWaitlist: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            removeFromWaitlist: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists/".concat(id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            grantAccessToPlatform: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "waitlists/".concat(id, "/access"), method: "POST", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.webhooks = {
            createWebhookEndpoint: function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "webhooks", method: "POST", data: data, apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            modifyWebhookEndpoint: function (_a) {
                var id = _a.id, data = _a.data;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "webhooks/".concat(id), method: "PUT", data: data, apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            listAllWebhookEndpoints: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "webhooks", method: "GET", apiKey: this.apiKey })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            deleteWebhookEndpoint: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "webhooks/".concat(id), method: "DELETE", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
            retrieveWebhookEndpoint: function (_a) {
                var id = _a.id;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, (0, _axios_1.axiosWrapper)({ url: "webhooks/".concat(id), method: "GET", apiKey: this.apiKey })];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            },
        };
        this.apiKey = apiKey;
    }
    Candle.init = function (_a) {
        var api_key = _a.api_key;
        return new Candle(api_key);
    };
    return Candle;
}());
exports.default = Candle;
