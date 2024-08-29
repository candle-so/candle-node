import { axiosWrapper } from "./_axios";

class Candle {
  private apiKey: string;
  private debug?: boolean;
  private host?: string;

  constructor(apiKey: string, debug?: boolean, host?: string) {
    this.apiKey = apiKey;
    this.debug = debug;
    this.host = host;
  }

  static init({ api_key, debug, host }: { api_key: string; debug?: boolean; host?: string }) {
    return new Candle(api_key, debug, host);
  }
  // auth
  auth = {
    requestOtpViaEmail: async (data: { email: string }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "auth/otp/email", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    verifyOTP: async (data: { email: string; token: string } | { phone: string; token: string }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "auth/otp/verify", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    refreshSession: async (data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "auth/session/refresh", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // platforms
  platforms = {
    getPlatformByDomain: async (domain: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `platforms/domains/${domain}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    getPlatformById: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `platforms/${id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    uploadPlatformImage: async (id: string, file: File, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `platforms/${id}/image`, method: "POST", file, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyPlatformById: async (id: string, data: { name: string; description: string; platformFee: string }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `platforms/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    checkCommunityMembership: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `platforms/community/user/${user_id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // waitlists
  waitlists = {
    addToWaitlist: async (data: { email: string }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "waitlists", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    countPeopleInTheWaitlist: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "waitlists/count", method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    grantAccessToPlatform: async (waitlist_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `waitlists/${waitlist_id}/grant`, method: "POST", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeFromTheWaitlist: async (waitlist_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `waitlists/${waitlist_id}/remove`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // users
  users = {
    retrieveUser: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth", method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyUser: async (data: object, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth", method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    scheduleUserForDeletion: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth", method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addUserImage: async (data: object, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth/image", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addUserLink: async (data: object, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth/link", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeUserLink: async (link_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `users/auth/link/${link_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    connectUserBankAccount: async (data: object, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth/bank_account", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    setUserClientSecret: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth/client_secret", method: "POST", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listUserPaymentMethods: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "users/auth/payment_methods", method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeUserPaymentMethod: async (paymentMethod_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `users/auth/payment_methods/${paymentMethod_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    setUserPaymentMethodAsDefault: async (paymentMethod_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `users/auth/payment_methods/${paymentMethod_id}/default`, method: "PUT", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },

    createUser: async (data: object) => {
      return await axiosWrapper({ url: "users", method: "POST", data, apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    retrieveUserById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}`, method: "GET", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    listUsers: async () => {
      return await axiosWrapper({ url: "users", method: "GET", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    modifyUserById: async (id: string, data: object) => {
      return await axiosWrapper({ url: `users/${id}`, method: "PUT", data, apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    scheduleUserForDeletionById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}`, method: "DELETE", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    addUserImageById: async (id: string, data: object) => {
      return await axiosWrapper({ url: `users/${id}/image`, method: "POST", data, apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    addUserLinkById: async (id: string, data: object) => {
      return await axiosWrapper({ url: `users/${id}/link`, method: "POST", data, apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    removeUserLinkById: async (id: string, link_id: string) => {
      return await axiosWrapper({ url: `users/${id}/link/${link_id}`, method: "DELETE", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    retrieveUserBankAccountById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}/bank_account`, method: "GET", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    listUserPaymentMethodsById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}/payment_methods`, method: "GET", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    removeUserPaymentMethodById: async (id: string, paymentMethod_id: string) => {
      return await axiosWrapper({ url: `users/${id}/payment_methods/${paymentMethod_id}`, method: "DELETE", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    setUserPaymentMethodAsDefaultById: async (id: string, paymentMethod_id: string) => {
      return await axiosWrapper({ url: `users/${id}/payment_methods/${paymentMethod_id}/default`, method: "PUT", apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
  };

  // products
  products = {
    createProduct: async (data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "products", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listProducts: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "products", method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listUserProducts: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/user/${user_id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveProductById: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyProductById: async (id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    deleteProduct: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listProductPrices: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addSeasonalPrice: async (id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeSeasonalPrice: async (id: string, price_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}/prices/${price_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    setSeasonalPriceUsage: async (id: string, data: { useSeasonalPrices: boolean }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}/prices/usage`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    enableProduct: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}/enable`, method: "PUT", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    disableProduct: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `products/${id}/disable`, method: "PUT", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // contracts
  contracts = {
    createContract: async (data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "contracts", method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    createContractFromCart: async (cart_id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/cart/${cart_id}`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listContracts: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "contracts", method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listContractsByBuyer: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/user/${user_id}/buyer`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listContractsBySeller: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/user/${user_id}/seller`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listAuthenticatedUserContracts: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "contracts/auth", method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveContractById: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    deleteContract: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyContractById: async (id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addItemToContract: async (id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/item`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeItemFromContract: async (id: string, item_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/item/${item_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addBuyerToContract: async (id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/buyer`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyBuyerDueAmount: async (id: string, buyer_id: string, data: { dueAmount: number }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/buyer/${buyer_id}/due`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeBuyerFromContract: async (id: string, buyer_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/buyer/${buyer_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addSellerToContract: async (id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/seller`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifySellerOwedAmount: async (id: string, seller_id: string, data: { owedAmount: number }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/seller/${seller_id}/owed`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeSellerFromContract: async (id: string, seller_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/seller/${seller_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addFeeToContract: async (id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/fee`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeFeeFromContract: async (id: string, fee_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/fee/${fee_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyContractFees: async (id: string, fee_id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/fee/${fee_id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    setFeeInclusion: async (id: string, data: { feeInclusion: boolean }, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/fee_inclusion`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    sendContract: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/send`, method: "POST", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    settleContract: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/settle`, method: "PUT", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    rebalanceAContract: async (id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `contracts/${id}/sync`, method: "PUT", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // carts
  carts = {
    addProductToUserCart: async (product_id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `carts/auth/product/${product_id}`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveUserCart: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "carts/auth", method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeItemFromUserCart: async (cart_item_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `carts/auth/item/${cart_item_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    clearUserCart: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: "carts/auth", method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // subscriptions
  subscriptions = {
    createSubscriptionFromContract: async (contract_id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `subscriptions/auth/contract/${contract_id}`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    listUserSubscriptions: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `subscriptions/user/${user_id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveSubscription: async (subscription_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `subscriptions/${subscription_id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    pauseSubscription: async (subscription_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `subscriptions/${subscription_id}/pause`, method: "PUT", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    resumeSubscription: async (subscription_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `subscriptions/auth/${subscription_id}/resume`, method: "PUT", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    endSubscription: async (subscription_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `subscriptions/auth/${subscription_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // calendars
  calendars = {
    setUserAvailability: async (data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/auth/availability`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveUserCalendar: async (accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/auth`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveUserAvailability: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/user/${user_id}/availability`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    addEventToCalendar: async (data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/auth/event`, method: "POST", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveCalendarEvent: async (event_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/auth/event/${event_id}`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyCalendarEvent: async (event_id: string, data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/auth/event/${event_id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    removeCalendarEvent: async (event_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/auth/event/${event_id}`, method: "DELETE", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    modifyUserAvailability: async (data: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `calendars/auth/availability`, method: "PUT", data, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };

  // transactions
  transactions = {
    retrieveUsersRevenue: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `transactions/user/${user_id}/revenue`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
    retrieveUserSpend: async (user_id: string, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `transactions/user/${user_id}/spend`, method: "GET", apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };
  // utils
  utils = {
    generateUsername: async (text: string) => {
      return await axiosWrapper({ url: `utils/generate/username`, method: "POST", data: { text }, apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    estimateFeeForANumber: async (amount: number) => {
      return await axiosWrapper({ url: `utils/estimate/fee`, method: "POST", data: { amount }, apiKey: this.apiKey, host: this.host, debug: this.debug });
    },
    uploadMedia: async (file: any, accessToken?: string | undefined) => {
      return await axiosWrapper({ url: `utils/media/upload`, method: "UPLOAD", file, apiKey: this.apiKey, accessToken, host: this.host, debug: this.debug });
    },
  };
}

export default Candle;
