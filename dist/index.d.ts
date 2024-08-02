declare class Candle {
    private apiKey;
    private debug?;
    constructor(apiKey: string, debug?: boolean);
    static init({ api_key, debug }: {
        api_key: string;
        debug?: boolean;
    }): Candle;
    auth: {
        requestOtpViaEmail: (data: {
            email: string;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        verifyOTP: (data: {
            email: string;
            token: string;
        } | {
            phone: string;
            token: string;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        refreshSession: (data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    platforms: {
        getPlatformByDomain: (domain: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        getPlatformById: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        uploadPlatformImage: (id: string, file: File, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyPlatformById: (id: string, data: {
            name: string;
            description: string;
            platformFee: string;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listPlatformKeys: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listCommunityMembers: (accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        checkUserMembership: (userId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    waitlists: {
        addToWaitlist: (data: {
            email: string;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listWaitlist: (accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        grantWaitlistAccess: (waitlistId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    users: {
        retrieveUser: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyUser: (data: object, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        scheduleUserForDeletion: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        addUserImage: (data: object, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        addUserLink: (data: object, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        removeUserLink: (linkId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        connectUserBankAccounts: (data: object, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserBankAccounts: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        setUserClientSecret: (data: object, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        listUserPaymentMethods: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        removeUserPaymentMethod: (paymentMethodId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        setUserPaymentMethodAsDefault: (paymentMethodId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        createUser: (data: object) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        listUsers: () => Promise<import("./_axios").iAxiosResponse>;
        modifyUserById: (id: string, data: object) => Promise<import("./_axios").iAxiosResponse>;
        scheduleUserForDeletionById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        addUserImageById: (id: string, data: object) => Promise<import("./_axios").iAxiosResponse>;
        addUserLinkById: (id: string, data: object) => Promise<import("./_axios").iAxiosResponse>;
        removeUserLinkById: (id: string, linkId: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserBankAccountsById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        listUserPaymentMethodsById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        removeUserPaymentMethodById: (id: string, paymentMethodId: string) => Promise<import("./_axios").iAxiosResponse>;
        setUserPaymentMethodAsDefaultById: (id: string, paymentMethodId: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    products: {
        createProduct: (data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listProducts: (accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listUserProducts: (userId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveProductById: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyProductById: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        deleteProduct: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listProductPrices: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        addSeasonalPrice: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        removeSeasonalPrice: (id: string, priceId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        setSeasonalPriceUsage: (id: string, data: {
            useSeasonalPrices: boolean;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        enableProduct: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        disableProduct: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    contracts: {
        createContract: (data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        createContractFromCart: (cartId: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listContracts: (accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listContractsByBuyer: (userId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listContractsBySeller: (userId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        listAuthenticatedUserContracts: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveContractById: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        deleteContract: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyContractById: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        addItemToContract: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        removeItemFromContract: (id: string, itemId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        addBuyerToContract: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyBuyerDueAmount: (id: string, buyerId: string, data: {
            dueAmount: number;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        removeBuyerFromContract: (id: string, buyerId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        addSellerToContract: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        modifySellerOwedAmount: (id: string, sellerId: string, data: {
            owedAmount: number;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        addFeeToContract: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        removeFeeFromContract: (id: string, feeId: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        updateContractFees: (id: string, data: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        setFeeInclusion: (id: string, data: {
            feeInclusion: boolean;
        }, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
        settleContract: (id: string, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    carts: {
        addProductToUserCart: (productId: string, data: any, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyProductInUserCart: (productId: string, data: any, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserCart: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        removeProductFromUserCart: (productId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        clearUserCart: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    subscriptions: {
        createSubscriptionFromContract: (contractId: string, data: any, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        listUserSubscriptions: (userId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveSubscription: (subscriptionId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        pauseSubscription: (subscriptionId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        resumeSubscription: (subscriptionId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        endSubscription: (subscriptionId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    calendars: {
        retrieveUserCalendar: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserAvailability: (userId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        addEventToCalendar: (data: any, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveEventFromCalendar: (eventId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyEventInCalendar: (eventId: string, data: any, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        removeEventFromCalendar: (eventId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        modifyUserAvailability: (data: any, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    transactions: {
        listTransactions: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveBuyersRevenue: (userId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveSellersSpend: (userId: string, accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        getBiggestSpenders: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        getBiggestEarners: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        getPlatformVolume: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        getPlatformCartValue: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        getPlatformMRR: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
        getPlatformARR: (accessToken: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    utils: {
        generateUsername: (text: string) => Promise<import("./_axios").iAxiosResponse>;
        estimateFee: (amount: number) => Promise<import("./_axios").iAxiosResponse>;
        uploadMedia: (file: any, accessToken?: string) => Promise<import("./_axios").iAxiosResponse>;
    };
}
export default Candle;
