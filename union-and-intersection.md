# Combining Union (`|`) and Intersection (`&`) Types in TypeScript

## Introduction

TypeScript provides Union (`|`) and Intersection (`&`) types to create flexible and reusable type definitions. A Union type allows a value to have one of several possible types. An Intersection type combines multiple types into one.

## Practical Example

A notification system where users can receive notifications through email or SMS. Both notification types share common properties, but each has some unique properties.

First, we define the two notification channel types:

```ts
type EmailNotification = {
  channel: 'email';
  emailAddress: string;
  subject: string;
};

type SMSNotification = {
  channel: 'sms';
  phoneNumber: string;
};

type Channel = EmailNotification | SMSNotification;
```

Here, the Union operator (`|`) allows a notification to use either the email or SMS structure.

Next, we define the common notification properties:

```ts
type UserNotification = {
  id: number;
  message: string;
  createdAt: string;
};
```

Finally, we combine both types using the Intersection operator (`&`):

```ts
type CompleteNotification = UserNotification & Channel;
```

Now, every notification must contain the common properties from `UserNotification` and satisfy either `EmailNotification` or `SMSNotification`.

For example, a valid email notification must include an ID, message, creation date, email address, and subject. An SMS notification must include the common properties along with a phone number.

## Conclusion

Union and Intersection types can work together to create flexible yet structured data models. Union provides alternatives, while Intersection combines required properties. This combination helps developers write reusable, maintainable, and type-safe TypeScript applications.
