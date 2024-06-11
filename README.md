# @candle/node

A library for interacting with the Candle API.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  + [Initialization](#initialization)
  + [Endpoints](#endpoints)
    - [Platforms](#platforms)
    - [Users](#users)
    - [Contacts](#contacts)
    - [Products](#products)
    - [Services](#services)
    - [Carts](#carts)
    - [Subscriptions](#subscriptions)
    - [Invoices](#invoices)
    - [Calendars](#calendars)
    - [Transactions](#transactions)
    - [Waitlists](#waitlists)
    - [Webhooks](#webhooks)
* [Contributing](#contributing)
* [License](#license)

## Installation

To install the SDK, use npm or yarn:

```sh
npm install @candle/node
```

or

```sh
yarn add @candle/node
```

## Usage

### Initialization

First, you need to initialize the Candle SDK with your API key:

```typescript
import Candle from \"@candle/node\";

const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY });
```

### Endpoints

#### Platforms

##### Check Community Membership

```typescript
const response = await candle.platforms.checkCommunityMembership({ userId: 'user_123e4567e89b12d3a456426614174000' });
```

#### Users

##### Create a User

```typescript
const response = await candle.users.createUser({
    email: \"user@example.com\",
  username: \"john_doe\",
  bio: \"I am a software engineer.\"
});
```

##### Retrieve a User

```typescript
const response = await candle.users.retrieveUser({ id: 'user_123e4567e89b12d3a456426614174000' });
```

##### Generate a Username

```typescript
const response = await candle.users.generateUsername({
    id: 'user_123e4567e89b12d3a456426614174000',
  data: {
      email: \"user@example.com\",
    name: \"John Doe\"
  }
});
```

##### Modify a User

```typescript
const response = await candle.users.modifyUser({
    id: 'user_123e4567e89b12d3a456426614174000',
  data: {
      bio: \"Updated bio\"
  }
});
```

##### Schedule Deletion of a User

```typescript
const response = await candle.users.scheduleDeletion({ id: 'user_123e4567e89b12d3a456426614174000' });
```

##### Connect Bank Account with Stripe

```typescript
const response = await candle.users.connectBankAccountWithStripe({
    id: 'user_123e4567e89b12d3a456426614174000',
  data: {
      bankAccountInfo: \"some bank account info\"
  }
});
```

##### Retrieve Stripe Connect Account

```typescript
const response = await candle.users.retrieveStripeConnectAccount({ id: 'user_123e4567e89b12d3a456426614174000' });
```

##### Get Client Secret

```typescript
const response = await candle.users.getClientSecret({
    id: 'user_123e4567e89b12d3a456426614174000',
  data: {
      paymentIntentInfo: \"some payment intent info\"
  }
});
```

##### Remove a Payment Method

```typescript
const response = await candle.users.removePaymentMethod({
    id: 'user_123e4567e89b12d3a456426614174000',
  paymentMethodId: 'pm_123e4567e89b12d3a456426614174000'
});
```

##### List Payment Methods

```typescript
const response = await candle.users.listPaymentMethods({ id: 'user_123e4567e89b12d3a456426614174000' });
```

##### Set Default Payment Method

```typescript
const response = await candle.users.setDefaultPaymentMethod({
    id: 'user_123e4567e89b12d3a456426614174000',
  paymentMethodId: 'pm_123e4567e89b12d3a456426614174000',
  data: { default: true }
});
```

##### Authorize Future Charges

```typescript
const response = await candle.users.authoriseFutureCharges({
    id: 'user_123e4567e89b12d3a456426614174000',
  data: { authorize: true }
});
```

##### Deauthorize Future Charges

```typescript
const response = await candle.users.deauthoriseFutureCharges({
    id: 'user_123e4567e89b12d3a456426614174000',
  data: { authorize: false }
});
```

#### Contacts

##### Add a User as a Contact

```typescript
const response = await candle.contacts.addUserAsContact({
    name: \"Jane Doe\",
  email: \"contact@example.com\",
  phone: \"+1234567890\"
});
```

##### List Contacts

```typescript
const response = await candle.contacts.listContacts({ id: 'user_123e4567e89b12d3a456426614174000' });
```

##### Search Contacts

```typescript
const response = await candle.contacts.searchContacts({ q: \"Jane\" });
```

##### Find Contact by Email

```typescript
const response = await candle.contacts.findContactByEmail({ email: \"contact@example.com\" });
```

##### Modify a Contact

```typescript
const response = await candle.contacts.modifyContact({
    id: 'cont_123e4567e89b12d3a456426614174000',
  data: { phone: \"+0987654321\" }
});
```

##### Delete a Contact

```typescript
const response = await candle.contacts.deleteContact({ id: 'cont_123e4567e89b12d3a456426614174000' });
```

##### Special Price on Product

```typescript
const response = await candle.contacts.specialPriceOnProduct({
    id: 'cont_123e4567e89b12d3a456426614174000',
  data: { productId: 'prod_123e4567e89b12d3a456426614174000', specialPrice: 80 }
});
```

#### Products

##### Create a Product

```typescript
const response = await candle.products.createProduct({
    name: \"Sample Product\",
  description: \"This is a sample product.\",
  price: 29.99
});
```

##### List All Products

```typescript
const response = await candle.products.listAllProducts();
```

##### Retrieve a Product by ID

```typescript
const response = await candle.products.retrieveProductById({ id: 'prod_123e4567e89b12d3a456426614174000' });
```

##### Retrieve Prices for a Product

```typescript
const response = await candle.products.retrievePricesForProduct({ id: 'prod_123e4567e89b12d3a456426614174000' });
```

##### Modify a Product

```typescript
const response = await candle.products.modifyProduct({
    id: 'prod_123e4567e89b12d3a456426614174000',
  data: { price: 24.99 }
});
```

##### Delete a Product

```typescript
const response = await candle.products.deleteProduct({ id: 'prod_123e4567e89b12d3a456426614174000' });
```

#### Services

##### Create a Service

```typescript
const response = await candle.services.createService({
    name: \"Sample Service\",
  description: \"This is a sample service.\",
  price: 100
});
```

##### List All User's Services

```typescript
const response = await candle.services.listAllUserServices({ userId: 'user_123e4567e89b12d3a456426614174000' });
```

##### Retrieve a Service by ID

```typescript
const response = await candle.services.retrieveServiceById({ id: 'serv_123e4567e89b12d3a456426614174000' });
```

##### Modify a Service

```typescript
const response = await candle.services.modifyService({
    id: 'serv_123e4567e89b12d3a456426614174000',
  data: { price: 80 }
});
```

##### Delete a Service

```typescript
const response = await candle.services.deleteService({ id: 'serv_123e4567e89b12d3a456426614174000' });
```

#### Carts

##### Add a Product to the Cart

```typescript
const response = await candle.carts.addProductToCart({
    id: 'cart_123e4567e89b12d3a456426614174000',
  productId: 'prod_123e4567e89b12d3a456426614174000',
  quantity: 2
});
```

##### Retrieve a Cart by ID

```typescript
const response = await candle.carts.retrieveCartById({ id: 'cart_123e4567e89b12d3a456426614174000' });
```

##### Clear a Cart

```typescript
const response = await candle.carts.clearCart({ id: 'cart_123e4567e89b12d3a456426614174000' }); 
```

##### Modify a Cart

```typescript
const response = await candle.carts.modifyCart({
    id: 'cart_123e4567e89b12d3a456426614174000',
  data: { quantity: 3 }
});
```

##### Remove Item from Cart

```typescript
const response = await candle.carts.removeItemFromCart({
    id: 'cart_123e4567e89b12d3a456426614174000',
  itemId: 'item_123e4567e89b12d3a456426614174000'
  
});
```

#### Subscriptions

##### Subscribe to a Service

```typescript
const response = await candle.subscriptions.subscribeToService({
    serviceId: 'serv_123e4567e89b12d3a456426614174000',
  userId: 'user_123e4567e89b12d3a456426614174000'
  
});
```

##### Pause a Subscription

```typescript
const response = await candle.subscriptions.pauseSubscription({ id: 'subs_123e4567e89b12d3a456426614174000' });
```

##### Resume a Subscription

```typescript
const response = await candle.subscriptions.resumeSubscription({ id: 'subs_123e4567e89b12d3a456426614174000' });
```

##### Unsubscribe from a Service

```typescript
const response = await candle.subscriptions.unsubscribeFromService({ id: 'subs_123e4567e89b12d3a456426614174000' });
```

#### Invoices

##### Create an Invoice

```typescript
const response = await candle.invoices.createInvoice({
    items: [
      { productId: 'prod_123e4567e89b12d3a456426614174000', quantity: 1, price: 100 }
  
  ]
});
```

##### Retrieve an Invoice

```typescript
const response = await candle.invoices.retrieveInvoice({ id: 'inv_123e4567e89b12d3a456426614174000' });
```

##### Modify an Invoice

```typescript
const response = await candle.invoices.modifyInvoice({
    id: 'inv_123e4567e89b12d3a456426614174000',
  data: { total: 120 }
});
```

##### Remove Item from Invoice

```typescript
const response = await candle.invoices.removeItemFromInvoice({
    id: 'inv_123e4567e89b12d3a456426614174000',
  itemId: 'item_123e4567e89b12d3a456426614174000'
  
});
```

##### Settle an Invoice

```typescript
const response = await candle.invoices.settleInvoice({ id: 'inv_123e4567e89b12d3a456426614174000' });
```

#### Calendars

##### Add an Event to a Calendar

```typescript
const response = await candle.calendars.addEventToCalendar({
    id: 'cal_123e4567e89b12d3a456426614174000',
  event: {
      title: \"Meeting\",
    description: \"Project discussion\",
    startTime: \"2023-06-21T10:00:00Z\",
    endTime: \"2023-06-21T11:00:00Z\"
  
  }
});
```

##### Retrieve a Calendar Event

```typescript
const response = await candle.calendars.retrieveCalendarEvent({ eventId: 'calev_123e4567e89b12d3a456426614174000' });
```

##### Modify a Calendar Event

```typescript
const response = await candle.calendars.modifyCalendarEvent({
    eventId: 'calev_123e4567e89b12d3a456426614174000',
  data: { title: \"Updated Meeting\" }
});
```

##### Remove a Calendar Event

```typescript
const response = await candle.calendars.removeCalendarEvent({ eventId: 'calev_123e4567e89b12d3a456426614174000' });
```

#### Transactions

##### Retrieve User's Revenue

```typescript
const response = await candle.transactions.retrieveUserRevenue();
```

##### Retrieve User's Spend

```typescript
const response = await candle.transactions.retrieveUserSpend();
```

##### Retrieve Platform Revenue

```typescript
const response = await candle.transactions.retrievePlatformRevenue();
```

#### Waitlists

##### Add Person to Waitlist

```typescript
const response = await candle.waitlists.addPersonToWaitlist({ email: \"waitlist@example.com\", name: \"John Doe\" });
```

##### Count People in Waitlist

```typescript
const response = await candle.waitlists.countPeopleInWaitlist();
```

##### List All in Waitlist

```typescript
const response = await candle.waitlists.listAllInWaitlist();
```

##### Remove from Waitlist

```typescript
const response = await candle.waitlists.removeFromWaitlist({ id: 'wlist_123e4567e89b12d3a456426614174000' });
```

##### Grant Access to Platform

```typescript
const response = await candle.waitlists.grantAccessToPlatform({ id: 'wlist_123e4567e89b12d3a456426614174000' });
```

#### Webhooks

##### Create a Webhook Endpoint

```typescript
const response = await candle.webhooks.createWebhookEndpoint({
    url: \"https://example.com/webhooks/order-created\",
  onEvent: \"create\"
  
});
```

##### Modify a Webhook Endpoint

```typescript
const response = await candle.webhooks.modifyWebhookEndpoint({
    id: 'hook_123e4567e89b12d3a456426614174000',
  data: { url: \"https://example.com/webhooks/order-updated\" }
});
```

##### List All Webhook Endpoints

```typescript
const response = await candle.webhooks.listAllWebhookEndpoints();
```

##### Retrieve a Webhook Endpoint

```typescript
const response = await candle.webhooks.retrieveWebhookEndpoint({ id: 'hook_123e4567e89b12d3a456426614174000' });
```

##### Delete a Webhook Endpoint

```typescript
const response = await candle.webhooks.deleteWebhookEndpoint({ id: 'hook_123e4567e89b12d3a456426614174000' });
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
```

This README provides a comprehensive guide to using your package, including installation instructions, usage examples for each endpoint, and sections for contributing and licensing. Make sure to adjust any placeholders or specific details to match your project.
