import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $FactoryPanelConnection } from "@package/com/simibubi/create/content/logistics/factoryBoard";

declare module "@package/net/liukrast/eg/api/util" {
    export class $ConnectionExtra<T> {
    }
    export interface $ConnectionExtra<T> {
        invalidate(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionExtra}.
     */
    export type $ConnectionExtra_<T> = ((arg0: $Level, arg1: $BlockState, arg2: $BlockPos, arg3: $BlockEntity) => (T) | undefined);
    export class $IFPExtra {
    }
    export interface $IFPExtra {
        extra_gauges$getExtra(): $Map<$BlockPos, $FactoryPanelConnection>;
        extra_gauges$getWidth(): number;
        extra_gauges$setWidth(arg0: number): void;
    }
}
