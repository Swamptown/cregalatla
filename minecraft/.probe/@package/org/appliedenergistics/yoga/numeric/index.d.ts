
declare module "@package/org/appliedenergistics/yoga/numeric" {
    export class $FloatOptional {
        compareTo(arg0: $FloatOptional): number;
        static of(): $FloatOptional;
        static of(arg0: number): $FloatOptional;
        getValue(): number;
        add(arg0: $FloatOptional): $FloatOptional;
        unwrap(): number;
        isDefined(): boolean;
        unwrapOrDefault(arg0: number): number;
        inexactEquals(arg0: $FloatOptional): boolean;
        maxOrDefined(arg0: $FloatOptional): $FloatOptional;
        isGreaterThan(arg0: $FloatOptional): boolean;
        isGreaterThanOrEqual(arg0: $FloatOptional): boolean;
        isLessThanOrEqual(arg0: $FloatOptional): boolean;
        isLessThan(arg0: $FloatOptional): boolean;
        isUndefined(): boolean;
        get value(): number;
        get defined(): boolean;
        get undefined(): boolean;
    }
}
