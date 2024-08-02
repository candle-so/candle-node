import { axiosWrapper } from "./_axios";

class Candle {
  private apiKey: string;
  private debug?: boolean;

  constructor(apiKey: string, debug?: boolean) {
    this.apiKey = apiKey;
    this.debug = debug;
  }

  static init({ api_key, debug }: { api_key: string; debug?: boolean }) {
    return new Candle(api_key, debug);
  }
  // auth
  auth = {
    requestOtpViaEmail: async (data: { email: string }, accessToken?: string) => {
      return await axiosWrapper({ url: "auth/otp/email", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    verifyOTP: async (data: { email: string; token: string } | { phone: string; token: string }, accessToken?: string) => {
      return await axiosWrapper({ url: "auth/otp/verify", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    refreshSession: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: "auth/session/refresh", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // platforms
  platforms = {
    getPlatformByDomain: async (domain: string, accessToken?: string) => {
      return await axiosWrapper({ url: `platforms/domains/${domain}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    getPlatformById: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `platforms/${id}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    uploadPlatformImage: async (id: string, file: File, accessToken?: string) => {
      return await axiosWrapper({ url: `platforms/${id}/image`, method: "POST", file, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyPlatformById: async (id: string, data: { name: string; description: string; platformFee: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `platforms/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listPlatformKeys: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `platforms/${id}/keys`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listCommunityMembers: async (accessToken?: string) => {
      return await axiosWrapper({ url: "platforms/community", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    checkUserMembership: async (userId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `platforms/community/user/${userId}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // waitlists
  waitlists = {
    addToWaitlist: async (data: { email: string }, accessToken?: string) => {
      return await axiosWrapper({ url: "waitlists", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listWaitlist: async (accessToken?: string) => {
      return await axiosWrapper({ url: "waitlists", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    grantWaitlistAccess: async (waitlistId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `waitlists/${waitlistId}/grant`, method: "POST", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // users
  users = {
    retrieveUser: async (accessToken: string) => {
      return await axiosWrapper({ url: "users/auth", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyUser: async (data: object, accessToken: string) => {
      return await axiosWrapper({ url: "users/auth", method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    scheduleUserForDeletion: async (accessToken: string) => {
      return await axiosWrapper({ url: "users/auth", method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addUserImage: async (data: object, accessToken: string) => {
      return await axiosWrapper({ url: "users/auth/image", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addUserLink: async (data: object, accessToken: string) => {
      return await axiosWrapper({ url: "users/auth/link", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeUserLink: async (linkId: string, accessToken: string) => {
      return await axiosWrapper({ url: `users/auth/link/${linkId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    connectUserBankAccounts: async (data: object, accessToken: string) => {
      return await axiosWrapper({ url: "users/auth/bank_accounts", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveUserBankAccounts: async (accessToken: string) => {
      return await axiosWrapper({ url: "users/auth/bank_accounts", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    setUserClientSecret: async (data: object, accessToken: string) => {
      return await axiosWrapper({ url: "users/auth/client_secret", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listUserPaymentMethods: async (accessToken: string) => {
      return await axiosWrapper({ url: "users/auth/payment_methods", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeUserPaymentMethod: async (paymentMethodId: string, accessToken: string) => {
      return await axiosWrapper({ url: `users/auth/payment_methods/${paymentMethodId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    setUserPaymentMethodAsDefault: async (paymentMethodId: string, accessToken: string) => {
      return await axiosWrapper({ url: `users/auth/payment_methods/${paymentMethodId}/default`, method: "PUT", apiKey: this.apiKey, accessToken, debug: this.debug });
    },

    createUser: async (data: object) => {
      return await axiosWrapper({ url: "users", method: "POST", data, apiKey: this.apiKey, debug: this.debug });
    },
    retrieveUserById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}`, method: "GET", apiKey: this.apiKey, debug: this.debug });
    },
    listUsers: async () => {
      return await axiosWrapper({ url: "users", method: "GET", apiKey: this.apiKey, debug: this.debug });
    },
    modifyUserById: async (id: string, data: object) => {
      return await axiosWrapper({ url: `users/${id}`, method: "PUT", data, apiKey: this.apiKey, debug: this.debug });
    },
    scheduleUserForDeletionById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}`, method: "DELETE", apiKey: this.apiKey, debug: this.debug });
    },
    addUserImageById: async (id: string, data: object) => {
      return await axiosWrapper({ url: `users/${id}/image`, method: "POST", data, apiKey: this.apiKey, debug: this.debug });
    },
    addUserLinkById: async (id: string, data: object) => {
      return await axiosWrapper({ url: `users/${id}/link`, method: "POST", data, apiKey: this.apiKey, debug: this.debug });
    },
    removeUserLinkById: async (id: string, linkId: string) => {
      return await axiosWrapper({ url: `users/${id}/link/${linkId}`, method: "DELETE", apiKey: this.apiKey, debug: this.debug });
    },
    retrieveUserBankAccountsById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}/bank_accounts`, method: "GET", apiKey: this.apiKey, debug: this.debug });
    },
    listUserPaymentMethodsById: async (id: string) => {
      return await axiosWrapper({ url: `users/${id}/payment_methods`, method: "GET", apiKey: this.apiKey, debug: this.debug });
    },
    removeUserPaymentMethodById: async (id: string, paymentMethodId: string) => {
      return await axiosWrapper({ url: `users/${id}/payment_methods/${paymentMethodId}`, method: "DELETE", apiKey: this.apiKey, debug: this.debug });
    },
    setUserPaymentMethodAsDefaultById: async (id: string, paymentMethodId: string) => {
      return await axiosWrapper({ url: `users/${id}/payment_methods/${paymentMethodId}/default`, method: "PUT", apiKey: this.apiKey, debug: this.debug });
    },
  };

  // products
  products = {
    createProduct: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: "products", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listProducts: async (accessToken?: string) => {
      return await axiosWrapper({ url: "products", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listUserProducts: async (userId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `products/user/${userId}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveProductById: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyProductById: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    deleteProduct: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listProductPrices: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addSeasonalPrice: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeSeasonalPrice: async (id: string, priceId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/prices/${priceId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    setSeasonalPriceUsage: async (id: string, data: { useSeasonalPrices: boolean }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/prices/usage`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    enableProduct: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/enable`, method: "PUT", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    disableProduct: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/disable`, method: "PUT", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // contracts
  contracts = {
    createContract: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: "contracts", method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    createContractFromCart: async (cartId: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/cart/${cartId}`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listContracts: async (accessToken?: string) => {
      return await axiosWrapper({ url: "contracts", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listContractsByBuyer: async (userId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/user/${userId}/buyer`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listContractsBySeller: async (userId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/user/${userId}/seller`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listAuthenticatedUserContracts: async (accessToken: string) => {
      return await axiosWrapper({ url: "contracts/auth", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveContractById: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    deleteContract: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyContractById: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addItemToContract: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/item`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeItemFromContract: async (id: string, itemId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/item/${itemId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addBuyerToContract: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/buyer`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyBuyerDueAmount: async (id: string, buyerId: string, data: { dueAmount: number }, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/buyer/${buyerId}/due`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeBuyerFromContract: async (id: string, buyerId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/buyer/${buyerId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addSellerToContract: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/seller`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifySellerOwedAmount: async (id: string, sellerId: string, data: { owedAmount: number }, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/seller/${sellerId}/owed`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addFeeToContract: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/fee`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeFeeFromContract: async (id: string, feeId: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/fee/${feeId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    updateContractFees: async (id: string, data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/fee`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    setFeeInclusion: async (id: string, data: { feeInclusion: boolean }, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/fee_inclusion`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    settleContract: async (id: string, accessToken?: string) => {
      return await axiosWrapper({ url: `contracts/${id}/settle`, method: "PUT", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // carts
  carts = {
    addProductToUserCart: async (productId: string, data: any, accessToken: string) => {
      return await axiosWrapper({ url: `carts/auth/products/${productId}`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyProductInUserCart: async (productId: string, data: any, accessToken: string) => {
      return await axiosWrapper({ url: `carts/auth/products/${productId}`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveUserCart: async (accessToken: string) => {
      return await axiosWrapper({ url: "carts/auth", method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeProductFromUserCart: async (productId: string, accessToken: string) => {
      return await axiosWrapper({ url: `carts/auth/products/${productId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    clearUserCart: async (accessToken: string) => {
      return await axiosWrapper({ url: "carts/auth", method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // subscriptions
  subscriptions = {
    createSubscriptionFromContract: async (contractId: string, data: any, accessToken: string) => {
      return await axiosWrapper({ url: `subscriptions/contract/${contractId}`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    listUserSubscriptions: async (userId: string, accessToken: string) => {
      return await axiosWrapper({ url: `subscriptions/user/${userId}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveSubscription: async (subscriptionId: string, accessToken: string) => {
      return await axiosWrapper({ url: `subscriptions/${subscriptionId}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    pauseSubscription: async (subscriptionId: string, accessToken: string) => {
      return await axiosWrapper({ url: `subscriptions/${subscriptionId}/pause`, method: "PUT", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    resumeSubscription: async (subscriptionId: string, accessToken: string) => {
      return await axiosWrapper({ url: `subscriptions/${subscriptionId}/resume`, method: "PUT", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    endSubscription: async (subscriptionId: string, accessToken: string) => {
      return await axiosWrapper({ url: `subscriptions/${subscriptionId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // calendars
  calendars = {
    retrieveUserCalendar: async (accessToken: string) => {
      return await axiosWrapper({ url: `calendars/auth`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveUserAvailability: async (userId: string, accessToken: string) => {
      return await axiosWrapper({ url: `calendars/user/${userId}/availability`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    addEventToCalendar: async (data: any, accessToken: string) => {
      return await axiosWrapper({ url: `calendars/auth/event`, method: "POST", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveEventFromCalendar: async (eventId: string, accessToken: string) => {
      return await axiosWrapper({ url: `calendars/auth/event/${eventId}`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyEventInCalendar: async (eventId: string, data: any, accessToken: string) => {
      return await axiosWrapper({ url: `calendars/auth/event/${eventId}`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    removeEventFromCalendar: async (eventId: string, accessToken: string) => {
      return await axiosWrapper({ url: `calendars/auth/event/${eventId}`, method: "DELETE", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    modifyUserAvailability: async (data: any, accessToken: string) => {
      return await axiosWrapper({ url: `calendars/auth/availability`, method: "PUT", data, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };

  // transactions
  transactions = {
    listTransactions: async (accessToken: string) => {
      return await axiosWrapper({ url: `transactions`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveBuyersRevenue: async (userId: string, accessToken: string) => {
      return await axiosWrapper({ url: `transactions/user/${userId}/revenue`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    retrieveSellersSpend: async (userId: string, accessToken: string) => {
      return await axiosWrapper({ url: `transactions/user/${userId}/spend`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    getBiggestSpenders: async (accessToken: string) => {
      return await axiosWrapper({ url: `transactions/spenders`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    getBiggestEarners: async (accessToken: string) => {
      return await axiosWrapper({ url: `transactions/earners`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    getPlatformVolume: async (accessToken: string) => {
      return await axiosWrapper({ url: `transactions/volume`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    getPlatformCartValue: async (accessToken: string) => {
      return await axiosWrapper({ url: `transactions/cart`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    getPlatformMRR: async (accessToken: string) => {
      return await axiosWrapper({ url: `transactions/mrr`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
    getPlatformARR: async (accessToken: string) => {
      return await axiosWrapper({ url: `transactions/arr`, method: "GET", apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };
  // utils
  utils = {
    generateUsername: async (text: string) => {
      return await axiosWrapper({ url: `utils/generate/username`, method: "POST", data: { text }, apiKey: this.apiKey, debug: this.debug });
    },
    estimateFee: async (amount: number) => {
      return await axiosWrapper({ url: `utils/estimate/fee`, method: "POST", data: { amount }, apiKey: this.apiKey, debug: this.debug });
    },
    uploadMedia: async (file: any, accessToken?: string) => {
      return await axiosWrapper({ url: `utils/media/upload`, method: "UPLOAD", file, apiKey: this.apiKey, accessToken, debug: this.debug });
    },
  };
}

export default Candle;
