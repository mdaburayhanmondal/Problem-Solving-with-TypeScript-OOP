Core differences between type aliases and interface in TypeScript:

1. Type alias uses 'type' keyword, interface uses 'interface' keyword. Difference in declaration syntax:
    type User = {
        name: string;
    };
    interface IUser {
        name: string;
    }
2. Type aliases can combine object types using intersection (&) but not using 'extends' keyword. But one interface can inherit another interface by 'extends' keyword.
3. One interface gets merged when redeclared with same name but type aliases can't do that.
4. Type aliases can represent primitives, unions, intersections, tuples, and object types. Interfaces are primarily used to describe object structures

Choosing one over another:
    When we need object structures, using interface is useful.
    When defining union types, tuples, primitive aliases, or more complex type compositions, we use type alias.
