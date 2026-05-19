import { $MochaCompiledFunction } from "@package/team/unnamed/mocha/runtime/compiled";
import { $Value, $ObjectValue } from "@package/team/unnamed/mocha/runtime/value";
import { $Object } from "@package/java/lang";
import { $Expression } from "@package/team/unnamed/mocha/parser/ast";
export * as value from "@package/team/unnamed/mocha/runtime/value";
export * as compiled from "@package/team/unnamed/mocha/runtime/compiled";

declare module "@package/team/unnamed/mocha/runtime" {
    export class $MochaFunction {
        static nop(): $MochaFunction;
    }
    export interface $MochaFunction extends $MochaCompiledFunction {
        evaluate(): number;
    }
    /**
     * Values that may be interpreted as {@link $MochaFunction}.
     */
    export type $MochaFunction_ = (() => number);
    export class $Scope {
        static builder(): $Scope$Builder;
        static create(): $Scope;
    }
    export interface $Scope extends $ObjectValue {
        readOnly(): boolean;
        readOnly(arg0: boolean): void;
        copy(): $Scope;
    }
    export class $Scope$Builder {
    }
    export interface $Scope$Builder {
        set(arg0: string, arg1: $Value): $Scope$Builder;
        build(): $Scope;
    }
    export class $ExecutionContext<T> {
    }
    export interface $ExecutionContext<T> {
        entity(): T;
        flag(arg0: $Object): void;
        flag(): $Object;
        eval(arg0: $Expression): $Value;
    }
}
