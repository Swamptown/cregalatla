import { $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Comparable } from "@package/java/lang";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";

declare module "@package/com/simibubi/create/content/kinetics/belt/transport" {
    export class $TransportedItemStack implements $Comparable<$TransportedItemStack> {
        compareTo(arg0: $TransportedItemStack): number;
        copy(): $TransportedItemStack;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $TransportedItemStack;
        getSimilar(): $TransportedItemStack;
        clearFanProcessingData(): void;
        getTargetSideOffset(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lockedExternally: boolean;
        stack: $ItemStack;
        beltPosition: number;
        insertedAt: number;
        insertedFrom: $Direction;
        prevSideOffset: number;
        angle: number;
        prevBeltPosition: number;
        sideOffset: number;
        locked: boolean;
        processedBy: $FanProcessingType;
        processingTime: number;
        constructor(arg0: $ItemStack_);
        get similar(): $TransportedItemStack;
        get targetSideOffset(): number;
    }
}
