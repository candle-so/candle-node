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
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        verifyOTP: (data: {
            email: string;
            token: string;
        } | {
            phone: string;
            token: string;
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        refreshSession: (data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    platforms: {
        getPlatformByDomain: (domain: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveAPlatform: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        uploadPlatformImage: (id: string, file: File, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyPlatformById: (id: string, data: {
            name: string;
            description: string;
            platformFee: string;
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        checkCommunityMembership: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    waitlists: {
        addToWaitlist: (data: {
            email: string;
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        countPeopleInTheWaitlist: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        grantAccessToPlatform: (waitlist_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeFromTheWaitlist: (waitlist_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    users: {
        retrieveUser: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyUser: (data: object, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        scheduleUserForDeletion: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addUserImage: (data: object, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addUserLink: (data: object, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeUserLink: (link_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        connectUserBankAccount: (data: object, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        setUserClientSecret: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listUserPaymentMethods: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeUserPaymentMethod: (paymentMethod_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        setUserPaymentMethodAsDefault: (paymentMethod_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        createUser: (data: object) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        listUsers: () => Promise<import("./_axios").iAxiosResponse>;
        modifyUserById: (id: string, data: object) => Promise<import("./_axios").iAxiosResponse>;
        scheduleUserForDeletionById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        addUserImageById: (id: string, data: object) => Promise<import("./_axios").iAxiosResponse>;
        addUserLinkById: (id: string, data: object) => Promise<import("./_axios").iAxiosResponse>;
        removeUserLinkById: (id: string, link_id: string) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserBankAccountById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        listUserPaymentMethodsById: (id: string) => Promise<import("./_axios").iAxiosResponse>;
        removeUserPaymentMethodById: (id: string, paymentMethod_id: string) => Promise<import("./_axios").iAxiosResponse>;
        setUserPaymentMethodAsDefaultById: (id: string, paymentMethod_id: string) => Promise<import("./_axios").iAxiosResponse>;
    };
    products: {
        createProduct: (data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listProducts: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listUserProducts: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveProductById: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyProductById: (id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        deleteProduct: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listProductPrices: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addSeasonalPrice: (id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeSeasonalPrice: (id: string, price_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        setSeasonalPriceUsage: (id: string, data: {
            useSeasonalPrices: boolean;
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        enableProduct: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        disableProduct: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    contracts: {
        createContract: (data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        createContractFromCart: (cart_id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listContracts: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listContractsByBuyer: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listContractsBySeller: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listAuthenticatedUserContracts: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveContractById: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        deleteContract: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyContractById: (id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addItemToContract: (id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeItemFromContract: (id: string, item_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addBuyerToContract: (id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyBuyerDueAmount: (id: string, buyer_id: string, data: {
            dueAmount: number;
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeBuyerFromContract: (id: string, buyer_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addSellerToContract: (id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifySellerOwedAmount: (id: string, seller_id: string, data: {
            owedAmount: number;
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeSellerFromContract: (id: string, seller_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addFeeToContract: (id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeFeeFromContract: (id: string, fee_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyContractFees: (id: string, fee_id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        setFeeInclusion: (id: string, data: {
            feeInclusion: boolean;
        }, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        sendContract: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        settleContract: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        rebalanceAContract: (id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    carts: {
        addProductToUserCart: (product_id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserCart: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeItemFromUserCart: (cart_item_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        clearUserCart: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    subscriptions: {
        createSubscriptionFromContract: (contract_id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        listUserSubscriptions: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveSubscription: (subscription_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        pauseSubscription: (subscription_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        resumeSubscription: (subscription_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        endSubscription: (subscription_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    calendars: {
        setUserAvailability: (data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserCalendar: (accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserAvailability: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        addEventToCalendar: (data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveCalendarEvent: (event_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyCalendarEvent: (event_id: string, data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        removeCalendarEvent: (event_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        modifyUserAvailability: (data: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    transactions: {
        retrieveUsersRevenue: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
        retrieveUserSpend: (user_id: string, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
    utils: {
        generateUsername: (text: string) => Promise<import("./_axios").iAxiosResponse>;
        estimateFeeForANumber: (amount: number) => Promise<import("./_axios").iAxiosResponse>;
        uploadMedia: (file: any, accessToken?: string | undefined) => Promise<import("./_axios").iAxiosResponse>;
    };
}
export default Candle;
