import { $Object } from "@package/java/lang";
import { $Map } from "@package/java/util";

declare module "@package/team/unnamed/mocha/runtime/value" {
    export class $ObjectProperty {
        static property(arg0: $Value, arg1: boolean): $ObjectProperty;
    }
    export interface $ObjectProperty {
        value(): $Value;
        constant(): boolean;
    }
    export class $ObjectValue {
    }
    export interface $ObjectValue extends $Value {
        get(arg0: string): $Value;
        getProperty(arg0: string): $ObjectProperty;
        set(arg0: string, arg1: $Value): boolean;
        entries(): $Map<string, $ObjectProperty>;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction3_): void;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction2_): void;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction1_): void;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction_): void;
    }
    /**
     * Values that may be interpreted as {@link $ObjectValue}.
     */
    export type $ObjectValue_ = ((arg0: string) => $ObjectProperty);
    export class $Value {
        static of(arg0: string): $Value;
        static of(arg0: number): $Value;
        static of(arg0: number): $Value;
        static of(arg0: boolean): $Value;
        static of(arg0: $Object): $Value;
        static nil(): $Value;
    }
    export interface $Value {
        getAsBoolean(): boolean;
        isString(): boolean;
        getAsString(): string;
        getAsNumber(): number;
        get asBoolean(): boolean;
        get string(): boolean;
        get asString(): string;
        get asNumber(): number;
    }
    export class $ObjectValue$FloatFunction {
    }
    export interface $ObjectValue$FloatFunction {
        apply(): number;
    }
    /**
     * Values that may be interpreted as {@link $ObjectValue$FloatFunction}.
     */
    export type $ObjectValue$FloatFunction_ = (() => number);
    export class $MutableObjectBinding implements $ObjectValue {
        getProperty(arg0: string): $ObjectProperty;
        set(arg0: string, arg1: $Value): boolean;
        block(): void;
        blocked(): boolean;
        setAllFrom(arg0: $MutableObjectBinding): void;
        get(arg0: string): $Value;
        entries(): $Map<string, $ObjectProperty>;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction3_): void;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction2_): void;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction1_): void;
        setFunction(arg0: string, arg1: $ObjectValue$FloatFunction_): void;
        getAsBoolean(): boolean;
        isString(): boolean;
        getAsString(): string;
        getAsNumber(): number;
        constructor();
        set allFrom(value: $MutableObjectBinding);
        get asBoolean(): boolean;
        get string(): boolean;
        get asString(): string;
        get asNumber(): number;
    }
    export class $ObjectValue$FloatFunction3 {
    }
    export interface $ObjectValue$FloatFunction3 {
        apply(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ObjectValue$FloatFunction3}.
     */
    export type $ObjectValue$FloatFunction3_ = ((arg0: number, arg1: number, arg2: number) => number);
    export class $ObjectValue$FloatFunction2 {
    }
    export interface $ObjectValue$FloatFunction2 {
        apply(arg0: number, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ObjectValue$FloatFunction2}.
     */
    export type $ObjectValue$FloatFunction2_ = ((arg0: number, arg1: number) => number);
    export class $ObjectValue$FloatFunction1 {
    }
    export interface $ObjectValue$FloatFunction1 {
        apply(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ObjectValue$FloatFunction1}.
     */
    export type $ObjectValue$FloatFunction1_ = ((arg0: number) => number);
}
