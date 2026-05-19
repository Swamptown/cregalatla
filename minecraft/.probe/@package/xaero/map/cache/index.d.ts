import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Set_ } from "@package/java/util";

declare module "@package/xaero/map/cache" {
    export class $BrokenBlockTintCache {
        setBroken(arg0: $BlockState_): void;
        isBroken(arg0: $BlockState_): boolean;
        getSize(): number;
        constructor(arg0: $Set_<$BlockState_>);
        get size(): number;
    }
    export class $BlockStateShortShapeCache {
        supplyForIOThread(): void;
        reset(): void;
        isShort(arg0: $BlockState_): boolean;
        constructor();
    }
}
