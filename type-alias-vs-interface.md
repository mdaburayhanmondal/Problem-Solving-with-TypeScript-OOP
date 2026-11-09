# Core Differences Between Type Aliases and Interfaces in TypeScript

## Introduction

Type aliases and interfaces are two important features in TypeScript. These allow developers to define the structure of data. They have some important differences in how they are declared, extended, and used.

## Detailed Differences

**1. Declaration syntax**

A type alias uses the `type` keyword, while an interface uses the `interface` keyword.

```ts
type User = {
  name: string;
};

interface IUser {
  name: string;
}
```

**2. Extending and combining types**

An interface can inherit another interface using the `extends` keyword. A type alias cannot use `extends` in its declaration, but it can combine object types using the intersection (`&`) operator.

```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

type UserInfo = {
  name: string;
};

type AdminInfo = UserInfo & {
  role: string;
};
```

**3. Declaration merging**

Interfaces support declaration merging. If we declare multiple interfaces with the same name, TypeScript combines their properties. Type aliases do not support this and cannot be redeclared with the same name in the same scope.

**4. What they can represent**

Type aliases are more flexible because they can represent primitives, unions, intersections, tuples, and object types. Interfaces are specially designed to describe object structures.

## When Should We Choose Each One?

Use an interface when defining object structures, especially when we need inheritance or declaration merging. Use a type alias when working with union types, tuples, primitive aliases, or more complex type compositions.

## Conclusion

Both type aliases and interfaces are useful for defining types in TypeScript. Neither is universally better. The right choice depends on the requirements and the kind of type structure we want to create.
