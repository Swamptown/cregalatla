import { $Record } from "@package/java/lang";

declare module "@package/com/supermartijn642/fusion/util" {
    export class $Triple<X, Y, Z> extends $Record {
        middle(): Y;
        static of<X, Y, Z>(left: X, middle: Y, right: Z): $Triple<X, Y, Z>;
        left(): X;
        right(): Z;
        constructor(left: X, middle: Y, right: Z);
    }
    /**
     * Values that may be interpreted as {@link $Triple}.
     */
    export type $Triple_<X, Y, Z> = { middle?: any, right?: any, left?: any,  } | [middle?: any, right?: any, left?: any, ];
}
