import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Collection, $Collection_ } from "@package/java/util";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/plot/heat" {
    export class $SubLevelHeatMapManager$SplitListener {
    }
    export interface $SubLevelHeatMapManager$SplitListener {
        addBlocks(arg0: $Level_, arg1: $BoundingBox3ic, arg2: $Collection_<$BlockPos_>): void;
    }
    /**
     * Values that may be interpreted as {@link $SubLevelHeatMapManager$SplitListener}.
     */
    export type $SubLevelHeatMapManager$SplitListener_ = ((arg0: $Level, arg1: $BoundingBox3ic, arg2: $Collection<$BlockPos>) => void);
    export class $SubLevelHeatMapManager {
        onSolidAdded(arg0: $BlockPos_): void;
        static addSplitListener(arg0: $SubLevelHeatMapManager$SplitListener_): void;
        onSolidRemoved(arg0: $BlockPos_): void;
        tick(): void;
        constructor(arg0: $ServerSubLevel);
    }
}
