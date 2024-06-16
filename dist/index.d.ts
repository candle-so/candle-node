declare class Candle {
    private apiKey;
    constructor(apiKey: string);
    static init({ api_key }: {
        api_key: string;
    }): Candle;
    auth: {
        signInWithOTP: (data: {
            email: string;
        } | {
            phone: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        verifyOTP: (data: {
            email: string;
            token: string;
        } | {
            phone: string;
            token: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    platforms: {
        retrievePlatform: () => Promise<import("./_axios").iAxiosResponse>;
        checkCommunityMembership: ({ user_id }: {
            user_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    users: {
        createUser: (data: {
            email: string;
            username: string;
            bio: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUser: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        generateUsername: (data: {
            email: string;
            name: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyUser: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        scheduleDeletion: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        connectStripe: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveStripeConnect: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        getClientSecret: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removePaymentMethod: ({ user_id, paymentMethod_id }: {
            user_id: string;
            paymentMethod_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        listPaymentMethods: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setDefaultPaymentMethod: ({ id, paymentMethod_id }: {
            id: string;
            paymentMethod_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        authoriseFutureCharges: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        deauthoriseFutureCharges: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    contacts: {
        addUserAsContact: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        listContacts: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        searchContacts: (query: {
            q: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        findContactByEmail: ({ email }: {
            email: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyContact: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        deleteContact: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        specialPriceOnProduct: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        specialPriceOnService: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    products: {
        createProduct: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        listAllProducts: () => Promise<import("./_axios").iAxiosResponse>;
        retrieveProductById: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrievePricesForProduct: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        listPricesForProduct: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setSeasonalPricesForProduct: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyProduct: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        disableProduct: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        enableProduct: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        deleteProduct: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    services: {
        createService: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        listAllUserServices: ({ user_id }: {
            user_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveServiceById: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        listPricesForService: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addServiceAsParent: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setSeasonalPricesForService: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyService: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        disableService: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        enableService: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        deleteService: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    carts: {
        addProductToCart: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addServiceToCart: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveCartById: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveCartByUserId: ({ user_id }: {
            user_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        clearCart: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyCart: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeItemFromCart: ({ id, item_id }: {
            id: string;
            item_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    subscriptions: {
        subscribeToService: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        pauseSubscription: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        resumeSubscription: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        unsubscribeFromService: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    invoices: {
        createInvoice: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        addItemToInvoice: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        createInvoiceFromCart: ({ cart_id }: {
            cart_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        createInvoiceFromSubscription: ({ subscription_id }: {
            subscription_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        createInvoiceFromCalendarEvent: ({ calendarEvent_id }: {
            calendarEvent_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserReceivedInvoices: () => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserSentInvoices: () => Promise<import("./_axios").iAxiosResponse>;
        retrieveInvoiceById: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrievePublicInvoiceById: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyInvoice: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeItemFromInvoice: ({ id, item_id }: {
            id: string;
            item_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addSellerToInvoice: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeSellerFromInvoice: ({ id, seller_id }: {
            id: string;
            seller_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addBuyerToInvoice: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeBuyerFromInvoice: ({ id, buyer_id }: {
            id: string;
            buyer_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyBuyerDueAmount: ({ id, buyer_id, data }: {
            id: string;
            buyer_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        estimateFees: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        addCustomFee: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        updateFeesForInvoice: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeCustomFee: ({ id, fee_id }: {
            id: string;
            fee_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setFeeInclusion: ({ id, fee_id, data }: {
            id: string;
            fee_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        settleInvoice: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        updateInvoiceStatus: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    calendars: {
        retrieveUserCalendarEvents: ({ user_id, month, year }: {
            user_id: string;
            month: number;
            year: number;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addEventToCalendar: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveEventFromCalendar: ({ event_id }: {
            event_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyEventInCalendar: ({ event_id, data }: {
            event_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeEventFromCalendar: ({ event_id }: {
            event_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addServiceToEvent: ({ event_id, data }: {
            event_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeServiceFromEvent: ({ event_id, service_id }: {
            event_id: string;
            service_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addProductToEvent: ({ event_id, data }: {
            event_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeProductFromEvent: ({ event_id, product_id }: {
            event_id: string;
            product_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addAttendeeToEvent: ({ event_id, data }: {
            event_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeAttendeeFromEvent: ({ attendee_id }: {
            attendee_id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        respondToEvent: ({ event_id, data }: {
            event_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addCommentToEvent: ({ event_id, data }: {
            event_id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setAvailabilityByDayOfWeek: ({ dayOfWeek, data }: {
            dayOfWeek: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setAvailabilityByDateRange: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        setUnavailabilityByDateRange: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        linkGoogleCalendar: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        syncGoogleCalendars: () => Promise<import("./_axios").iAxiosResponse>;
        listUpcomingEvents: (query: {
            limit: number;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    transactions: {
        retrieveUserRevenue: () => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserSpend: () => Promise<import("./_axios").iAxiosResponse>;
        retrievePlatformRevenue: () => Promise<import("./_axios").iAxiosResponse>;
    };
    waitlists: {
        addPersonToWaitlist: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        countPeopleInWaitlist: () => Promise<import("./_axios").iAxiosResponse>;
        listAllInWaitlist: () => Promise<import("./_axios").iAxiosResponse>;
        removeFromWaitlist: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        grantAccessToPlatform: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
    webhooks: {
        createWebhookEndpoint: (data: any) => Promise<import("./_axios").iAxiosResponse>;
        modifyWebhookEndpoint: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        listAllWebhookEndpoints: () => Promise<import("./_axios").iAxiosResponse>;
        deleteWebhookEndpoint: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveWebhookEndpoint: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
    };
}
export default Candle;
