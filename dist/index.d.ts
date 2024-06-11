declare class Candle {
    private apiKey;
    constructor(apiKey: string);
    static init({ api_key }: {
        api_key: string;
    }): Candle;
    platforms: {
        checkCommunityMembership: ({ userId }: {
            userId: string;
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
        removePaymentMethod: ({ userId, paymentMethodId }: {
            userId: string;
            paymentMethodId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        listPaymentMethods: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setDefaultPaymentMethod: ({ id, paymentMethodId }: {
            id: string;
            paymentMethodId: string;
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
        listAllUserServices: ({ userId }: {
            userId: string;
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
        retrieveCartByUserId: ({ userId }: {
            userId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        clearCart: ({ id }: {
            id: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyCart: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeItemFromCart: ({ id, itemId }: {
            id: string;
            itemId: string;
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
        createInvoiceFromCart: ({ cartId }: {
            cartId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        createInvoiceFromSubscription: ({ subscriptionId }: {
            subscriptionId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        createInvoiceFromCalendarEvent: ({ calendarEventId }: {
            calendarEventId: string;
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
        removeItemFromInvoice: ({ id, itemId }: {
            id: string;
            itemId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addSellerToInvoice: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeSellerFromInvoice: ({ id, sellerId }: {
            id: string;
            sellerId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addBuyerToInvoice: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeBuyerFromInvoice: ({ id, buyerId }: {
            id: string;
            buyerId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyBuyerDueAmount: ({ id, buyerId, data }: {
            id: string;
            buyerId: string;
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
        removeCustomFee: ({ id, feeId }: {
            id: string;
            feeId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        setFeeInclusion: ({ id, feeId, data }: {
            id: string;
            feeId: string;
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
        retrieveUserCalendarEvents: ({ userId, month, year }: {
            userId: string;
            month: number;
            year: number;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addEventToCalendar: ({ id, data }: {
            id: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        retrieveEventFromCalendar: ({ eventId }: {
            eventId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        modifyEventInCalendar: ({ eventId, data }: {
            eventId: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeEventFromCalendar: ({ eventId }: {
            eventId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addServiceToEvent: ({ eventId, data }: {
            eventId: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeServiceFromEvent: ({ eventId, serviceId }: {
            eventId: string;
            serviceId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addProductToEvent: ({ eventId, data }: {
            eventId: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeProductFromEvent: ({ eventId, productId }: {
            eventId: string;
            productId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addAttendeeToEvent: ({ eventId, data }: {
            eventId: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        removeAttendeeFromEvent: ({ attendeeId }: {
            attendeeId: string;
        }) => Promise<import("./_axios").iAxiosResponse>;
        respondToEvent: ({ eventId, data }: {
            eventId: string;
            data: any;
        }) => Promise<import("./_axios").iAxiosResponse>;
        addCommentToEvent: ({ eventId, data }: {
            eventId: string;
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
