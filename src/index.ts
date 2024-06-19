import { axiosWrapper } from "./_axios";

class Candle {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  static init({ api_key }: { api_key: string }) {
    return new Candle(api_key);
  }

  auth = {
    signInWithOTP: async (data: { email: string } | { phone: string }, accessToken?: string) => {
      return await axiosWrapper({ url: "auth/signin-otp", method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    verifyOTP: async (data: { email: string; token: string } | { phone: string; token: string }, accessToken?: string) => {
      return await axiosWrapper({ url: "auth/verify-otp", method: "POST", data, apiKey: this.apiKey, accessToken });
    },
  };

  platforms = {
    retrievePlatform: async (accessToken?: string) => {
      return await axiosWrapper({ url: `platforms`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    checkCommunityMembership: async ({ user_id }: { user_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `platforms/user/${user_id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
  };

  users = {
    createUser: async (data: { email: string; username: string; bio: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    retrieveUser: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    generateUsername: async (data: { email: string; name: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/username/generate`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    modifyUser: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    scheduleDeletion: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/schedule`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    connectStripe: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/stripe/connect`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    retrieveStripeConnect: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/stripe/connect`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    getClientSecret: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/client-secret`, method: "POST", apiKey: this.apiKey, accessToken });
    },
    removePaymentMethod: async ({ user_id, paymentMethod_id }: { user_id: string; paymentMethod_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${user_id}/payment-methods/${paymentMethod_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    listPaymentMethods: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/payment-methods`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    setDefaultPaymentMethod: async ({ id, paymentMethod_id }: { id: string; paymentMethod_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/payment-methods/${paymentMethod_id}/default`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    authoriseFutureCharges: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/permissions/charge`, method: "POST", apiKey: this.apiKey, accessToken });
    },
    deauthoriseFutureCharges: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `users/${id}/permissions/charge`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
  };

  contacts = {
    addUserAsContact: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    listContacts: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    searchContacts: async (query: { q: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts/search`, method: "GET", data: query, apiKey: this.apiKey, accessToken });
    },
    findContactByEmail: async ({ email }: { email: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts/email/${email}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    modifyContact: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    deleteContact: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    specialPriceOnProduct: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts/${id}/special-price/product`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    specialPriceOnService: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `contacts/${id}/special-price/service`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
  };

  products = {
    createProduct: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `products`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    listAllProducts: async (accessToken?: string) => {
      return await axiosWrapper({ url: `products`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrieveProductById: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrievePricesForProduct: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    listPricesForProduct: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    setSeasonalPricesForProduct: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/prices/seasonal`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    modifyProduct: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    disableProduct: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/disable`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    enableProduct: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}/enable`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    deleteProduct: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `products/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
  };

  services = {
    createService: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `services`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    listAllUserServices: async ({ user_id }: { user_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/user/${user_id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrieveServiceById: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    listPricesForService: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}/prices`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    addServiceAsParent: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}/add/parent`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    setSeasonalPricesForService: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}/prices/seasonal`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    modifyService: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    disableService: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}/disable`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    enableService: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}/enable`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    deleteService: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `services/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
  };

  carts = {
    addProductToCart: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `carts/${id}/product`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    addServiceToCart: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `carts/${id}/service`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    retrieveCartById: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `carts/${id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrieveCartByUserId: async ({ user_id }: { user_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `carts/user/${user_id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    clearCart: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `carts/${id}/clear`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    modifyCart: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `carts/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    removeItemFromCart: async ({ id, item_id }: { id: string; item_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `carts/${id}/item/${item_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
  };

  subscriptions = {
    subscribeToService: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `subscriptions/service`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    pauseSubscription: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `subscriptions/${id}/pause`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    resumeSubscription: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `subscriptions/${id}/resume`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    unsubscribeFromService: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `subscriptions/service`, method: "DELETE", data: { id }, apiKey: this.apiKey, accessToken });
    },
  };

  invoices = {
    createInvoice: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    addItemToInvoice: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/items`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    createInvoiceFromCart: async ({ cart_id }: { cart_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/cart/${cart_id}`, method: "POST", apiKey: this.apiKey, accessToken });
    },
    createInvoiceFromSubscription: async ({ subscription_id }: { subscription_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/subscription/${subscription_id}`, method: "POST", apiKey: this.apiKey, accessToken });
    },
    createInvoiceFromCalendarEvent: async ({ calendarEvent_id }: { calendarEvent_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/event/${calendarEvent_id}`, method: "POST", apiKey: this.apiKey, accessToken });
    },
    retrieveUserReceivedInvoices: async (accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/buyer`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrieveUserSentInvoices: async (accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/seller`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrieveInvoiceById: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrievePublicInvoiceById: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/public`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    modifyInvoice: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    removeItemFromInvoice: async ({ id, item_id }: { id: string; item_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/item/${item_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    addSellerToInvoice: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/seller`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    removeSellerFromInvoice: async ({ id, seller_id }: { id: string; seller_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/seller/${seller_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    addBuyerToInvoice: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/buyer`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    removeBuyerFromInvoice: async ({ id, buyer_id }: { id: string; buyer_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/buyer/${buyer_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    modifyBuyerDueAmount: async ({ id, buyer_id, data }: { id: string; buyer_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/buyer/${buyer_id}/due-amount`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    estimateFees: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/estimate-fees`, method: "GET", data, apiKey: this.apiKey, accessToken });
    },
    addCustomFee: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/fee/custom`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    updateFeesForInvoice: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/fee`, method: "PUT", apiKey: this.apiKey, accessToken });
    },
    removeCustomFee: async ({ id, fee_id }: { id: string; fee_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/fee/${fee_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    setFeeInclusion: async ({ id, fee_id, data }: { id: string; fee_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/fee/${fee_id}/include-fee`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    settleInvoice: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/settle`, method: "POST", apiKey: this.apiKey, accessToken });
    },
    updateInvoiceStatus: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `invoices/${id}/status`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
  };

  calendars = {
    retrieveUserCalendarEvents: async ({ user_id, month, year }: { user_id: string; month: number; year: number }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/user/${user_id}`, method: "GET", data: { month, year }, apiKey: this.apiKey, accessToken });
    },
    addEventToCalendar: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/${id}/event`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    retrieveEventFromCalendar: async ({ event_id }: { event_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    modifyEventInCalendar: async ({ event_id, data }: { event_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    removeEventFromCalendar: async ({ event_id }: { event_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    addServiceToEvent: async ({ event_id, data }: { event_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/service`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    removeServiceFromEvent: async ({ event_id, service_id }: { event_id: string; service_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/service/${service_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    addProductToEvent: async ({ event_id, data }: { event_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/product`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    removeProductFromEvent: async ({ event_id, product_id }: { event_id: string; product_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/product/${product_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    addAttendeeToEvent: async ({ event_id, data }: { event_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/attendee`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    removeAttendeeFromEvent: async ({ attendee_id }: { attendee_id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/attendee/${attendee_id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    respondToEvent: async ({ event_id, data }: { event_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/respond`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    addCommentToEvent: async ({ event_id, data }: { event_id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/comment`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    setAvailabilityByDayOfWeek: async ({ dayOfWeek, data }: { dayOfWeek: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/availability/dow/${dayOfWeek}`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    setAvailabilityByDateRange: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/availability/daterange`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    setUnavailabilityByDateRange: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/unavailability/daterange`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    linkGoogleCalendar: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/google/link`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    syncGoogleCalendars: async (accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/google/sync`, method: "POST", apiKey: this.apiKey, accessToken });
    },
    listUpcomingEvents: async (query: { limit: number }, accessToken?: string) => {
      return await axiosWrapper({ url: `calendars/google/upcoming`, method: "GET", data: query, apiKey: this.apiKey, accessToken });
    },
  };

  transactions = {
    retrieveUserRevenue: async (accessToken?: string) => {
      return await axiosWrapper({ url: `transactions/revenue`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrieveUserSpend: async (accessToken?: string) => {
      return await axiosWrapper({ url: `transactions/spend`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    retrievePlatformRevenue: async (accessToken?: string) => {
      return await axiosWrapper({ url: `transactions/platform/revenue`, method: "GET", apiKey: this.apiKey, accessToken });
    },
  };

  waitlists = {
    addPersonToWaitlist: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `waitlists`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    countPeopleInWaitlist: async (accessToken?: string) => {
      return await axiosWrapper({ url: `waitlists/count`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    listAllInWaitlist: async (accessToken?: string) => {
      return await axiosWrapper({ url: `waitlists`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    removeFromWaitlist: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `waitlists/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    grantAccessToPlatform: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `waitlists/${id}/access`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
  };

  webhooks = {
    createWebhookEndpoint: async (data: any, accessToken?: string) => {
      return await axiosWrapper({ url: `webhooks`, method: "POST", data, apiKey: this.apiKey, accessToken });
    },
    modifyWebhookEndpoint: async ({ id, data }: { id: string; data: any }, accessToken?: string) => {
      return await axiosWrapper({ url: `webhooks/${id}`, method: "PUT", data, apiKey: this.apiKey, accessToken });
    },
    listAllWebhookEndpoints: async (accessToken?: string) => {
      return await axiosWrapper({ url: `webhooks`, method: "GET", apiKey: this.apiKey, accessToken });
    },
    deleteWebhookEndpoint: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `webhooks/${id}`, method: "DELETE", apiKey: this.apiKey, accessToken });
    },
    retrieveWebhookEndpoint: async ({ id }: { id: string }, accessToken?: string) => {
      return await axiosWrapper({ url: `webhooks/${id}`, method: "GET", apiKey: this.apiKey, accessToken });
    },
  };
}

export default Candle;
