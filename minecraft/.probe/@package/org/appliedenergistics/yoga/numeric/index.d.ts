
declare module "@package/org/appliedenergistics/yoga/numeric" {
    export class $FloatOptional {
        unwrapOrDefault(arg0: number): number;
        inexactEquals(arg0: $FloatOptional): boolean;
        maxOrDefined(arg0: $FloatOptional): $FloatOptional;
        isGreaterThan(arg0: $FloatOptional): boolean;
        isGreaterThanOrEqual(arg0: $FloatOptional): boolean;
        isLessThanOrEqual(arg0: $FloatOptional): boolean;
        compareTo(arg0: $FloatOptional): number;
        getValue(): number;
        add(arg0: $FloatOptional): $FloatOptional;
        static of(): $FloatOptional;
        static of(arg0: number): $FloatOptional;
        unwrap(): number;
        isDefined(): boolean;
        isLessThan(arg0: $FloatOptional): boolean;
        isUndefined(): boolean;
        get value(): number;
        get defined(): boolean;
        get undefined(): boolean;
    }
}
