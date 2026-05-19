import { $Consumer_ } from "@package/java/util/function";
import { $KeyMappingFunction } from "@package/xaero/hud/controls/key/function";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $Spliterator, $Iterator } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
export * as function from "@package/xaero/hud/controls/key/function";

declare module "@package/xaero/hud/controls/key" {
    export class $KeyMappingControllerManager implements $Iterable<$KeyMappingController> {
        registerFunction(arg0: $KeyMapping, arg1: $KeyMappingFunction): void;
        registerController(arg0: $KeyMapping, arg1: boolean, arg2: $Consumer_<$KeyMapping>): void;
        registerController(arg0: $KeyMapping, arg1: boolean): void;
        getController(arg0: $KeyMapping): $KeyMappingController;
        iterator(): $Iterator<$KeyMappingController>;
        spliterator(): $Spliterator<$KeyMappingController>;
        forEach(arg0: $Consumer_<$KeyMappingController>): void;
        constructor();
        [Symbol.iterator](): Iterator<$KeyMappingController>
    }
    export class $KeyMappingTickHandler {
        tick(): void;
        static DISABLE_KEY_MAPPING_OVERRIDES: boolean;
        constructor(arg0: $KeyMappingControllerManager);
    }
    export class $KeyMappingController implements $Iterable<$KeyMappingFunction> {
        isXaeroKey(): boolean;
        setPressed(arg0: boolean): void;
        isPressed(): boolean;
        getKeyMapping(): $KeyMapping;
        add(arg0: $KeyMappingFunction): void;
        iterator(): $Iterator<$KeyMappingFunction>;
        getFunctions(): $Iterable<$KeyMappingFunction>;
        spliterator(): $Spliterator<$KeyMappingFunction>;
        forEach(arg0: $Consumer_<$KeyMappingFunction>): void;
        constructor(arg0: $KeyMapping, arg1: boolean);
        [Symbol.iterator](): Iterator<$KeyMappingFunction>
        get xaeroKey(): boolean;
        get keyMapping(): $KeyMapping;
        get functions(): $Iterable<$KeyMappingFunction>;
    }
}
