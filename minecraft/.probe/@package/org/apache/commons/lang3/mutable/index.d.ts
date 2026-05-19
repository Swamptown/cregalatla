import { $Serializable } from "@package/java/io";
import { $Number, $Comparable } from "@package/java/lang";

declare module "@package/org/apache/commons/lang3/mutable" {
    export class $Mutable<T> {
    }
    export interface $Mutable<T> {
        getValue(): T;
        setValue(arg0: T): void;
    }
    export class $MutableObject<T> implements $Mutable<T>, $Serializable {
        getValue(): T;
        setValue(arg0: T): void;
        constructor();
        constructor(arg0: T);
    }
    export class $MutableInt extends $Number implements $Comparable<$MutableInt>, $Mutable<$Number> {
        subtract(arg0: $Number): void;
        subtract(arg0: number): void;
        decrement(): void;
        compareTo(arg0: $MutableInt): number;
        getValue(): number;
        add(arg0: number): void;
        add(arg0: $Number): void;
        increment(): void;
        setValue(arg0: number): void;
        setValue(arg0: $Number): void;
        getAndAdd(arg0: number): number;
        getAndAdd(arg0: $Number): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: number): number;
        addAndGet(arg0: $Number): number;
        toInteger(): number;
        constructor();
        constructor(arg0: $Number);
        constructor(arg0: string);
        constructor(arg0: number);
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $MutableFloat extends $Number implements $Comparable<$MutableFloat>, $Mutable<$Number> {
        subtract(arg0: $Number): void;
        subtract(arg0: number): void;
        decrement(): void;
        isInfinite(): boolean;
        compareTo(arg0: $MutableFloat): number;
        getValue(): number;
        add(arg0: $Number): void;
        add(arg0: number): void;
        increment(): void;
        isNaN(): boolean;
        setValue(arg0: number): void;
        setValue(arg0: $Number): void;
        getAndAdd(arg0: $Number): number;
        getAndAdd(arg0: number): number;
        incrementAndGet(): number;
        getAndIncrement(): number;
        getAndDecrement(): number;
        decrementAndGet(): number;
        addAndGet(arg0: $Number): number;
        addAndGet(arg0: number): number;
        toFloat(): number;
        constructor();
        constructor(arg0: $Number);
        constructor(arg0: number);
        constructor(arg0: string);
        get infinite(): boolean;
        get naN(): boolean;
        get andIncrement(): number;
        get andDecrement(): number;
    }
    export class $MutableBoolean implements $Mutable<boolean>, $Serializable, $Comparable<$MutableBoolean> {
        toBoolean(): boolean;
        isFalse(): boolean;
        compareTo(arg0: $MutableBoolean): number;
        booleanValue(): boolean;
        setValue(arg0: boolean): void;
        setValue(arg0: boolean): void;
        isTrue(): boolean;
        setTrue(): void;
        setFalse(): void;
        getValue(): boolean;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: boolean);
    }
}
