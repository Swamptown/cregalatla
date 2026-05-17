import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $BlockPos } from "@package/net/minecraft/core";
import { $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $UUID } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/content/trains/observer" {
    export class $TrackObserver extends $SingleBlockEntityEdgePoint {
        keepAlive(arg0: $Train): void;
        getFilter(): $FilterItemStack;
        getCurrentTrain(): $UUID;
        setFilterAndNotify(arg0: $Level_, arg1: $ItemStack_): void;
        isActivated(): boolean;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
        get filter(): $FilterItemStack;
        get currentTrain(): $UUID;
        get activated(): boolean;
    }
}
