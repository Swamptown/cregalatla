import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IMultiBlockEntityContainer$Fluid, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $Map, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Object } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $VatMachineRecipe } from "@package/com/drmangotea/tfmg/recipes";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/drmangotea/tfmg/content/machinery/vat/base" {
    export class $VatBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiBlockEntityContainer$Fluid {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        evaluate(): void;
        getTotalCapacity(): number;
        getLastKnownPos(): $BlockPos;
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        getMainConnectionAxis(): $Direction$Axis;
        setExtraData(arg0: $Object): void;
        modifyExtraData(arg0: $Object): $Object;
        removeController(arg0: boolean): void;
        getFluidLevel(): $LerpedFloat[];
        static getCapacityMultiplier(): number;
        sendDataImmediately(): void;
        getFillState(): number;
        toggleWindows(): void;
        setWindows(arg0: boolean): void;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        hasTank(): boolean;
        getTank(arg0: number): $IFluidTank;
        getMatchingRecipe(): $VatMachineRecipe;
        handleRecipe(): void;
        isAtValidLocation(arg0: $IVatMachine$PositionRequirement_, arg1: $BlockPos_): boolean;
        isAtCenter(arg0: $BlockPos_): boolean;
        applyVatSize(arg0: number): void;
        addMachineTooltip(arg0: string, arg1: boolean, arg2: $List_<$Component_>): void;
        getOtherVatBE(arg0: $Direction_): $VatBlockEntity;
        getTotalTankSize(): number;
        getController(): $BlockPos;
        isController(): boolean;
        setController(arg0: $BlockPos_): void;
        getTotalFluidUnits(arg0: number): number;
        getMaxWidth(): number;
        static getMaxHeight(): number;
        getFluid(arg0: number): $FluidStack;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        updateTemperature(): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        getTanks(): $Couple<$SmartFluidTankBehaviour>;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getExtraData(): $Object;
        getWidth(): number;
        getHeight(): number;
        updateState(): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        getControllerBE<T extends $BlockEntity>(): T;
        level: $Level;
        fluidLevel: $LerpedFloat[];
        recipe: $VatMachineRecipe;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $SmartFluidTankBehaviour;
        machineMap: $Map<$BlockPos, string>;
        operationalMachinesMap: $Map<$BlockPos, boolean>;
        worldPosition: $BlockPos;
        areMachinesValid: boolean;
        outputTank: $SmartFluidTankBehaviour;
        hasComparators: number;
        outputInventory: $VatInventory;
        inputInventory: $VatInventory;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get totalCapacity(): number;
        get lastKnownPos(): $BlockPos;
        get mainConnectionAxis(): $Direction$Axis;
        static get capacityMultiplier(): number;
        get fillState(): number;
        set windows(value: boolean);
        get matchingRecipe(): $VatMachineRecipe;
        get totalTankSize(): number;
        get maxWidth(): number;
        static get maxHeight(): number;
        get tanks(): $Couple<$SmartFluidTankBehaviour>;
        get controllerBE(): T;
    }
    export class $IVatMachine$PositionRequirement extends $Enum<$IVatMachine$PositionRequirement> {
        static values(): $IVatMachine$PositionRequirement[];
        static valueOf(arg0: string): $IVatMachine$PositionRequirement;
        static BOTTOM_CENTER: $IVatMachine$PositionRequirement;
        static TOP: $IVatMachine$PositionRequirement;
        static TOP_CENTER: $IVatMachine$PositionRequirement;
        static ANY_CENTER: $IVatMachine$PositionRequirement;
        static BOTTOM: $IVatMachine$PositionRequirement;
        static ANY: $IVatMachine$PositionRequirement;
    }
    /**
     * Values that may be interpreted as {@link $IVatMachine$PositionRequirement}.
     */
    export type $IVatMachine$PositionRequirement_ = "any" | "bottom" | "top" | "any_center" | "bottom_center" | "top_center";
    export class $VatInventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        constructor(arg0: number, arg1: $VatBlockEntity);
    }
}
