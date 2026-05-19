import { $Level, $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $ChatFormatting } from "@package/net/minecraft";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getParticleSpeed(): number;
        getSpeedValue(): number;
        getTextColor(): $ChatFormatting;
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get particleSpeed(): number;
        get speedValue(): number;
        get textColor(): $ChatFormatting;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension {
        warnOfMovement(): void;
        clearKineticInformation(): void;
        onSpeedChanged(arg0: number): void;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        simulated$setValidationCountdown(arg0: number): void;
        calculateAddedStressCapacity(): number;
        hasNetwork(): boolean;
        getOrCreateNetwork(): $KineticNetwork;
        calculateStressApplied(): number;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        tickAudio(): void;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        needsSpeedUpdate(): boolean;
        attachKinetics(): void;
        getFlickerScore(): number;
        hasSource(): boolean;
        removeSource(): void;
        redirect$dha000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        detachKinetics(): void;
        getGeneratedSpeed(): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        handler$dha000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$dha000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$dha000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        getTheoreticalSpeed(): number;
        redirect$dha000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        setNetwork(arg0: number): void;
        handler$dha000$simulated$removeConnected(arg0: $CallbackInfo): void;
        isSpeedRequirementFulfilled(): boolean;
        handler$dhg000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        isSource(): boolean;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        setSource(arg0: $BlockPos_): void;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        hasComparators: number;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get orCreateNetwork(): $KineticNetwork;
        get overStressed(): boolean;
        get flickerScore(): number;
        get generatedSpeed(): number;
        get theoreticalSpeed(): number;
        get speedRequirementFulfilled(): boolean;
    }
}
