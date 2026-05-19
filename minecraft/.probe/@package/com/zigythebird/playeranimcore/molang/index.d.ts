import { $MutableObjectBinding, $Value } from "@package/team/unnamed/mocha/runtime/value";
import { $ExecutionContext } from "@package/team/unnamed/mocha/runtime";
import { $Object } from "@package/java/lang";
import { $Expression } from "@package/team/unnamed/mocha/parser/ast";

declare module "@package/com/zigythebird/playeranimcore/molang" {
    export class $QueryBinding<T> extends $MutableObjectBinding implements $ExecutionContext<T> {
        entity(): T;
        flag(): $Object;
        flag(flag: $Object): void;
        eval(expression: $Expression): $Value;
        constructor(entity: T);
    }
}
