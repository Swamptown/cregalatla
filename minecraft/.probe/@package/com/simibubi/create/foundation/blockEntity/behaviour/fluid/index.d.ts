import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $TankSegmentAccessor } from "@package/com/drmangotea/tfmg/mixin/accessor";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Runnable_ } from "@package/java/lang";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid" {
    export class $SmartFluidTankBehaviour$TankSegment implements $TankSegmentAccessor {
        getRenderedFluid(): $FluidStack;
        getTotalUnits(arg0: number): number;
        getFluidLevel(): $LerpedFloat;
        onFluidStackChanged(): void;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        readNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        isEmpty(arg0: number): boolean;
        tfmg$tank(): $SmartFluidTank;
        constructor(arg0: $SmartFluidTankBehaviour, arg1: number);
        get renderedFluid(): $FluidStack;
        get fluidLevel(): $LerpedFloat;
    }
    export class $SmartFluidTankBehaviour extends $BlockEntityBehaviour {
        forbidInsertion(): $SmartFluidTankBehaviour;
        whenFluidUpdates(arg0: $Runnable_): $SmartFluidTankBehaviour;
        allowInsertion(): $SmartFluidTankBehaviour;
        allowExtraction(): $SmartFluidTankBehaviour;
        getPrimaryHandler(): $SmartFluidTank;
        sendDataImmediately(): void;
        forbidExtraction(): $SmartFluidTankBehaviour;
        sendDataLazily(): void;
        getTanks(): $SmartFluidTankBehaviour$TankSegment[];
        getPrimaryTank(): $SmartFluidTankBehaviour$TankSegment;
        isEmpty(): boolean;
        static single(arg0: $SmartBlockEntity, arg1: number): $SmartFluidTankBehaviour;
        forEach(arg0: $Consumer_<$SmartFluidTankBehaviour$TankSegment>): void;
        getCapability(): $IFluidHandler;
        static INPUT: $BehaviourType<$SmartFluidTankBehaviour>;
        static OUTPUT: $BehaviourType<$SmartFluidTankBehaviour>;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$SmartFluidTankBehaviour>;
        constructor(arg0: $BehaviourType<$SmartFluidTankBehaviour>, arg1: $SmartBlockEntity, arg2: number, arg3: number, arg4: boolean);
        get primaryHandler(): $SmartFluidTank;
        get tanks(): $SmartFluidTankBehaviour$TankSegment[];
        get primaryTank(): $SmartFluidTankBehaviour$TankSegment;
        get empty(): boolean;
        get capability(): $IFluidHandler;
    }
}
