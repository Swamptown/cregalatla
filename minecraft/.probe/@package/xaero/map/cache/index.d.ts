import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Set_ } from "@package/java/util";

declare module "@package/xaero/map/cache" {
    export class $BrokenBlockTintCache {
        getSize(): number;
        setBroken(arg0: $BlockState_): void;
        isBroken(arg0: $BlockState_): boolean;
        constructor(arg0: $Set_<$BlockState_>);
        get size(): number;
    }
    export class $BlockStateShortShapeCache {
        reset(): void;
        supplyForIOThread(): void;
        isShort(arg0: $BlockState_): boolean;
        constructor();
    }
}
