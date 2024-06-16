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
    signInWithOTP: async (data: { email: string } | { phone: string }) => {
      return await axiosWrapper({ url: "auth/signin-otp", method: "POST", data, apiKey: this.apiKey });
    },
    verifyOTP: async (data: { email: string; token: string } | { phone: string; token: string }) => {
      return await axiosWrapper({ url: "auth/verify-otp", method: "POST", data, apiKey: this.apiKey });
    },
  };

  platforms = {
    retrievePlatform: async () => {
      return await axiosWrapper({ url: `platforms`, method: "GET", apiKey: this.apiKey });
    },
    checkCommunityMembership: async ({ user_id }: { user_id: string }) => {
      return await axiosWrapper({ url: `platforms/user/${user_id}`, method: "GET", apiKey: this.apiKey });
    },
  };

  users = {
    createUser: async (data: { email: string; username: string; bio: string }) => {
      return await axiosWrapper({ url: `users`, method: "POST", data, apiKey: this.apiKey });
    },
    retrieveUser: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `users/${id}`, method: "GET", apiKey: this.apiKey });
    },
    generateUsername: async (data: { email: string; name: string }) => {
      return await axiosWrapper({ url: `users/username/generate`, method: "POST", data, apiKey: this.apiKey });
    },
    modifyUser: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `users/${id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    scheduleDeletion: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `users/${id}/schedule`, method: "DELETE", apiKey: this.apiKey });
    },
    connectStripe: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `users/${id}/stripe/connect`, method: "POST", data, apiKey: this.apiKey });
    },
    retrieveStripeConnect: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `users/${id}/stripe/connect`, method: "GET", apiKey: this.apiKey });
    },
    getClientSecret: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `users/${id}/client-secret`, method: "POST", apiKey: this.apiKey });
    },
    removePaymentMethod: async ({ user_id, paymentMethod_id }: { user_id: string; paymentMethod_id: string }) => {
      return await axiosWrapper({ url: `users/${user_id}/payment-methods/${paymentMethod_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    listPaymentMethods: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `users/${id}/payment-methods`, method: "GET", apiKey: this.apiKey });
    },
    setDefaultPaymentMethod: async ({ id, paymentMethod_id }: { id: string; paymentMethod_id: string }) => {
      return await axiosWrapper({ url: `users/${id}/payment-methods/${paymentMethod_id}/default`, method: "PUT", apiKey: this.apiKey });
    },
    authoriseFutureCharges: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `users/${id}/permissions/charge`, method: "POST", apiKey: this.apiKey });
    },
    deauthoriseFutureCharges: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `users/${id}/permissions/charge`, method: "DELETE", apiKey: this.apiKey });
    },
  };

  contacts = {
    addUserAsContact: async (data: any) => {
      return await axiosWrapper({ url: `contacts`, method: "POST", data, apiKey: this.apiKey });
    },
    listContacts: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `contacts`, method: "GET", apiKey: this.apiKey });
    },
    searchContacts: async (query: { q: string }) => {
      return await axiosWrapper({ url: `contacts/search`, method: "GET", data: query, apiKey: this.apiKey });
    },
    findContactByEmail: async ({ email }: { email: string }) => {
      return await axiosWrapper({ url: `contacts/email/${email}`, method: "GET", apiKey: this.apiKey });
    },
    modifyContact: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `contacts/${id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    deleteContact: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `contacts/${id}`, method: "DELETE", apiKey: this.apiKey });
    },
    specialPriceOnProduct: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `contacts/${id}/special-price/product`, method: "POST", data, apiKey: this.apiKey });
    },
    specialPriceOnService: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `contacts/${id}/special-price/service`, method: "POST", data, apiKey: this.apiKey });
    },
  };

  products = {
    createProduct: async (data: any) => {
      return await axiosWrapper({ url: `products`, method: "POST", data, apiKey: this.apiKey });
    },
    listAllProducts: async () => {
      return await axiosWrapper({ url: `products`, method: "GET", apiKey: this.apiKey });
    },
    retrieveProductById: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `products/${id}`, method: "GET", apiKey: this.apiKey });
    },
    retrievePricesForProduct: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "GET", apiKey: this.apiKey });
    },
    listPricesForProduct: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `products/${id}/prices`, method: "GET", apiKey: this.apiKey });
    },
    setSeasonalPricesForProduct: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `products/${id}/prices/seasonal`, method: "PUT", data, apiKey: this.apiKey });
    },
    modifyProduct: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `products/${id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    disableProduct: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `products/${id}/disable`, method: "PUT", apiKey: this.apiKey });
    },
    enableProduct: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `products/${id}/enable`, method: "PUT", apiKey: this.apiKey });
    },
    deleteProduct: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `products/${id}`, method: "DELETE", apiKey: this.apiKey });
    },
  };

  services = {
    createService: async (data: any) => {
      return await axiosWrapper({ url: `services`, method: "POST", data, apiKey: this.apiKey });
    },
    listAllUserServices: async ({ user_id }: { user_id: string }) => {
      return await axiosWrapper({ url: `services/user/${user_id}`, method: "GET", apiKey: this.apiKey });
    },
    retrieveServiceById: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `services/${id}`, method: "GET", apiKey: this.apiKey });
    },
    listPricesForService: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `services/${id}/prices`, method: "GET", apiKey: this.apiKey });
    },
    addServiceAsParent: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `services/${id}/add/parent`, method: "POST", data, apiKey: this.apiKey });
    },
    setSeasonalPricesForService: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `services/${id}/prices/seasonal`, method: "PUT", data, apiKey: this.apiKey });
    },
    modifyService: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `services/${id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    disableService: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `services/${id}/disable`, method: "PUT", apiKey: this.apiKey });
    },
    enableService: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `services/${id}/enable`, method: "PUT", apiKey: this.apiKey });
    },
    deleteService: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `services/${id}`, method: "DELETE", apiKey: this.apiKey });
    },
  };

  carts = {
    addProductToCart: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `carts/${id}/product`, method: "POST", data, apiKey: this.apiKey });
    },
    addServiceToCart: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `carts/${id}/service`, method: "POST", data, apiKey: this.apiKey });
    },
    retrieveCartById: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `carts/${id}`, method: "GET", apiKey: this.apiKey });
    },
    retrieveCartByUserId: async ({ user_id }: { user_id: string }) => {
      return await axiosWrapper({ url: `carts/user/${user_id}`, method: "GET", apiKey: this.apiKey });
    },
    clearCart: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `carts/${id}/clear`, method: "DELETE", apiKey: this.apiKey });
    },
    modifyCart: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `carts/${id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    removeItemFromCart: async ({ id, item_id }: { id: string; item_id: string }) => {
      return await axiosWrapper({ url: `carts/${id}/item/${item_id}`, method: "DELETE", apiKey: this.apiKey });
    },
  };

  subscriptions = {
    subscribeToService: async (data: any) => {
      return await axiosWrapper({ url: `subscriptions/service`, method: "POST", data, apiKey: this.apiKey });
    },
    pauseSubscription: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `subscriptions/${id}/pause`, method: "PUT", apiKey: this.apiKey });
    },
    resumeSubscription: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `subscriptions/${id}/resume`, method: "PUT", apiKey: this.apiKey });
    },
    unsubscribeFromService: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `subscriptions/service`, method: "DELETE", data: { id }, apiKey: this.apiKey });
    },
  };

  invoices = {
    createInvoice: async (data: any) => {
      return await axiosWrapper({ url: `invoices`, method: "POST", data, apiKey: this.apiKey });
    },
    addItemToInvoice: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}/items`, method: "POST", data, apiKey: this.apiKey });
    },
    createInvoiceFromCart: async ({ cart_id }: { cart_id: string }) => {
      return await axiosWrapper({ url: `invoices/cart/${cart_id}`, method: "POST", apiKey: this.apiKey });
    },
    createInvoiceFromSubscription: async ({ subscription_id }: { subscription_id: string }) => {
      return await axiosWrapper({ url: `invoices/subscription/${subscription_id}`, method: "POST", apiKey: this.apiKey });
    },
    createInvoiceFromCalendarEvent: async ({ calendarEvent_id }: { calendarEvent_id: string }) => {
      return await axiosWrapper({ url: `invoices/event/${calendarEvent_id}`, method: "POST", apiKey: this.apiKey });
    },
    retrieveUserReceivedInvoices: async () => {
      return await axiosWrapper({ url: `invoices/buyer`, method: "GET", apiKey: this.apiKey });
    },
    retrieveUserSentInvoices: async () => {
      return await axiosWrapper({ url: `invoices/seller`, method: "GET", apiKey: this.apiKey });
    },
    retrieveInvoiceById: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}`, method: "GET", apiKey: this.apiKey });
    },
    retrievePublicInvoiceById: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}/public`, method: "GET", apiKey: this.apiKey });
    },
    modifyInvoice: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    removeItemFromInvoice: async ({ id, item_id }: { id: string; item_id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}/item/${item_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    addSellerToInvoice: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}/seller`, method: "POST", data, apiKey: this.apiKey });
    },
    removeSellerFromInvoice: async ({ id, seller_id }: { id: string; seller_id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}/seller/${seller_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    addBuyerToInvoice: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}/buyer`, method: "PUT", data, apiKey: this.apiKey });
    },
    removeBuyerFromInvoice: async ({ id, buyer_id }: { id: string; buyer_id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}/buyer/${buyer_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    modifyBuyerDueAmount: async ({ id, buyer_id, data }: { id: string; buyer_id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}/buyer/${buyer_id}/due-amount`, method: "PUT", data, apiKey: this.apiKey });
    },
    estimateFees: async (data: any) => {
      return await axiosWrapper({ url: `invoices/estimate-fees`, method: "GET", data, apiKey: this.apiKey });
    },
    addCustomFee: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}/fee/custom`, method: "POST", data, apiKey: this.apiKey });
    },
    updateFeesForInvoice: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}/fee`, method: "PUT", apiKey: this.apiKey });
    },
    removeCustomFee: async ({ id, fee_id }: { id: string; fee_id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}/fee/${fee_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    setFeeInclusion: async ({ id, fee_id, data }: { id: string; fee_id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}/fee/${fee_id}/include-fee`, method: "PUT", data, apiKey: this.apiKey });
    },
    settleInvoice: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `invoices/${id}/settle`, method: "POST", apiKey: this.apiKey });
    },
    updateInvoiceStatus: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `invoices/${id}/status`, method: "PUT", data, apiKey: this.apiKey });
    },
  };

  calendars = {
    retrieveUserCalendarEvents: async ({ user_id, month, year }: { user_id: string; month: number; year: number }) => {
      return await axiosWrapper({ url: `calendars/user/${user_id}`, method: "GET", data: { month, year }, apiKey: this.apiKey });
    },
    addEventToCalendar: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/${id}/event`, method: "POST", data, apiKey: this.apiKey });
    },
    retrieveEventFromCalendar: async ({ event_id }: { event_id: string }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}`, method: "GET", apiKey: this.apiKey });
    },
    modifyEventInCalendar: async ({ event_id, data }: { event_id: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    removeEventFromCalendar: async ({ event_id }: { event_id: string }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    addServiceToEvent: async ({ event_id, data }: { event_id: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/service`, method: "POST", data, apiKey: this.apiKey });
    },
    removeServiceFromEvent: async ({ event_id, service_id }: { event_id: string; service_id: string }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/service/${service_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    addProductToEvent: async ({ event_id, data }: { event_id: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/product`, method: "POST", data, apiKey: this.apiKey });
    },
    removeProductFromEvent: async ({ event_id, product_id }: { event_id: string; product_id: string }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/product/${product_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    addAttendeeToEvent: async ({ event_id, data }: { event_id: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/attendee`, method: "POST", data, apiKey: this.apiKey });
    },
    removeAttendeeFromEvent: async ({ attendee_id }: { attendee_id: string }) => {
      return await axiosWrapper({ url: `calendars/event/attendee/${attendee_id}`, method: "DELETE", apiKey: this.apiKey });
    },
    respondToEvent: async ({ event_id, data }: { event_id: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/respond`, method: "PUT", data, apiKey: this.apiKey });
    },
    addCommentToEvent: async ({ event_id, data }: { event_id: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/event/${event_id}/comment`, method: "POST", data, apiKey: this.apiKey });
    },
    setAvailabilityByDayOfWeek: async ({ dayOfWeek, data }: { dayOfWeek: string; data: any }) => {
      return await axiosWrapper({ url: `calendars/availability/dow/${dayOfWeek}`, method: "POST", data, apiKey: this.apiKey });
    },
    setAvailabilityByDateRange: async (data: any) => {
      return await axiosWrapper({ url: `calendars/availability/daterange`, method: "POST", data, apiKey: this.apiKey });
    },
    setUnavailabilityByDateRange: async (data: any) => {
      return await axiosWrapper({ url: `calendars/unavailability/daterange`, method: "POST", data, apiKey: this.apiKey });
    },
    linkGoogleCalendar: async (data: any) => {
      return await axiosWrapper({ url: `calendars/google/link`, method: "POST", data, apiKey: this.apiKey });
    },
    syncGoogleCalendars: async () => {
      return await axiosWrapper({ url: `calendars/google/sync`, method: "POST", apiKey: this.apiKey });
    },
    listUpcomingEvents: async (query: { limit: number }) => {
      return await axiosWrapper({ url: `calendars/google/upcoming`, method: "GET", data: query, apiKey: this.apiKey });
    },
  };

  transactions = {
    retrieveUserRevenue: async () => {
      return await axiosWrapper({ url: `transactions/revenue`, method: "GET", apiKey: this.apiKey });
    },
    retrieveUserSpend: async () => {
      return await axiosWrapper({ url: `transactions/spend`, method: "GET", apiKey: this.apiKey });
    },
    retrievePlatformRevenue: async () => {
      return await axiosWrapper({ url: `transactions/platform/revenue`, method: "GET", apiKey: this.apiKey });
    },
  };

  waitlists = {
    addPersonToWaitlist: async (data: any) => {
      return await axiosWrapper({ url: `waitlists`, method: "POST", data, apiKey: this.apiKey });
    },
    countPeopleInWaitlist: async () => {
      return await axiosWrapper({ url: `waitlists/count`, method: "GET", apiKey: this.apiKey });
    },
    listAllInWaitlist: async () => {
      return await axiosWrapper({ url: `waitlists`, method: "GET", apiKey: this.apiKey });
    },
    removeFromWaitlist: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `waitlists/${id}`, method: "DELETE", apiKey: this.apiKey });
    },
    grantAccessToPlatform: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `waitlists/${id}/access`, method: "POST", data, apiKey: this.apiKey });
    },
  };

  webhooks = {
    createWebhookEndpoint: async (data: any) => {
      return await axiosWrapper({ url: `webhooks`, method: "POST", data, apiKey: this.apiKey });
    },
    modifyWebhookEndpoint: async ({ id, data }: { id: string; data: any }) => {
      return await axiosWrapper({ url: `webhooks/${id}`, method: "PUT", data, apiKey: this.apiKey });
    },
    listAllWebhookEndpoints: async () => {
      return await axiosWrapper({ url: `webhooks`, method: "GET", apiKey: this.apiKey });
    },
    deleteWebhookEndpoint: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `webhooks/${id}`, method: "DELETE", apiKey: this.apiKey });
    },
    retrieveWebhookEndpoint: async ({ id }: { id: string }) => {
      return await axiosWrapper({ url: `webhooks/${id}`, method: "GET", apiKey: this.apiKey });
    },
  };
}

export default Candle;
