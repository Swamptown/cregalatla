import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Predicate } from "@package/com/google/common/base";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IdentifiedInventory } from "@package/com/simibubi/create/content/logistics/packager";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemHelper$ExtractionCountMode_, $ItemHelper$ExtractionCountMode } from "@package/com/simibubi/create/foundation/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory" {
    export class $CapManipulationBehaviourBase$InterfaceProvider {
        static towardBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
        static oppositeOfBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
    }
    export interface $CapManipulationBehaviourBase$InterfaceProvider {
        getTarget(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $BlockFace;
    }
    /**
     * Values that may be interpreted as {@link $CapManipulationBehaviourBase$InterfaceProvider}.
     */
    export type $CapManipulationBehaviourBase$InterfaceProvider_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $BlockFace);
    export class $InvManipulationBehaviour extends $CapManipulationBehaviourBase<$IItemHandler, $InvManipulationBehaviour> {
        static forExtraction(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        static forInsertion(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        getIdentifiedInventory(): $IdentifiedInventory;
        extract(): $ItemStack;
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number, arg2: $Predicate_<$ItemStack>): $ItemStack;
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number): $ItemStack;
        insert(arg0: $ItemStack_): $ItemStack;
        blockEntity: $SmartBlockEntity;
        static INSERT: $BehaviourType<$InvManipulationBehaviour>;
        static TYPE: $BehaviourType<$InvManipulationBehaviour>;
        static EXTRACT: $BehaviourType<$InvManipulationBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get identifiedInventory(): $IdentifiedInventory;
    }
    export class $CapManipulationBehaviourBase<T, S extends $CapManipulationBehaviourBase<never, never>> extends $BlockEntityBehaviour {
        bypassSidedness(): S;
        redirect$gko000$sable$redirectPos$mixinextras$bridge$19(arg0: $Level_, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $LocalRef<any>): $Object;
        getModeFromFilter(): $ItemHelper$ExtractionCountMode;
        getAmountFromFilter(): number;
        redirect$gko000$sable$findNewCapOnSubLevel(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        redirect$gko000$sable$redirectPos(arg0: $Level_, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $BlockFace): $Object;
        hasInventory(): boolean;
        findNewCapability(): void;
        getTarget(): $BlockFace;
        withFilter(arg0: $Predicate<$BlockEntity>): S;
        simulate(): S;
        getInventory(): T;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get modeFromFilter(): $ItemHelper$ExtractionCountMode;
        get amountFromFilter(): number;
        get target(): $BlockFace;
        get inventory(): T;
    }
}
