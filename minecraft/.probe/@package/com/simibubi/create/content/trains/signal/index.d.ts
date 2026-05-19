import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $UUID, $Map, $UUID_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $TrackNodeLocation, $TrackGraph, $EdgePointType, $TrackEdge, $DimensionPalette, $TrackNode } from "@package/com/simibubi/create/content/trains/graph";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/signal" {
    export class $SignalBlock$SignalType extends $Enum<$SignalBlock$SignalType> implements $StringRepresentable {
        static values(): $SignalBlock$SignalType[];
        static valueOf(arg0: string): $SignalBlock$SignalType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ENTRY_SIGNAL: $SignalBlock$SignalType;
        static CROSS_SIGNAL: $SignalBlock$SignalType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlock$SignalType}.
     */
    export type $SignalBlock$SignalType_ = "entry_signal" | "cross_signal";
    export class $SignalBoundary extends $TrackEdgePoint {
        setGroupAndUpdate(arg0: $TrackNode, arg1: $UUID_): void;
        updateBlockEntityPower(arg0: $SignalBlockEntity): void;
        getOverlayFor(arg0: $BlockPos_): $SignalBlockEntity$OverlayState;
        getStateFor(arg0: $BlockPos_): $SignalBlockEntity$SignalState;
        isForcedRed(arg0: $TrackNode): boolean;
        isForcedRed(arg0: boolean): boolean;
        cycleSignalType(arg0: $BlockPos_): void;
        setGroup(arg0: boolean, arg1: $UUID_): void;
        queueUpdate(arg0: $TrackNode): void;
        getGroup(arg0: $TrackNode): $UUID;
        getTypeFor(arg0: $BlockPos_): $SignalBlock$SignalType;
        edgeLocation: $Couple<$TrackNodeLocation>;
        sidesToUpdate: $Couple<boolean>;
        types: $Couple<$SignalBlock$SignalType>;
        cachedStates: $Couple<$SignalBlockEntity$SignalState>;
        groups: $Couple<$UUID>;
        id: $UUID;
        position: number;
        blockEntities: $Couple<$Map<$BlockPos, boolean>>;
        constructor();
    }
    export class $TrackEdgePoint {
        isPrimary(arg0: $TrackNode): boolean;
        getLocationOn(arg0: $TrackEdge): number;
        canCoexistWith(arg0: $EdgePointType<never>, arg1: boolean): boolean;
        blockEntityAdded(arg0: $BlockEntity, arg1: boolean): void;
        blockEntityRemoved(arg0: $BlockPos_, arg1: boolean): void;
        canNavigateVia(arg0: $TrackNode): boolean;
        canMerge(): boolean;
        invalidate(arg0: $LevelAccessor): void;
        setType(arg0: $EdgePointType<never>): void;
        tick(arg0: $TrackGraph, arg1: boolean): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $DimensionPalette): void;
        write(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        read(arg0: $FriendlyByteBuf, arg1: $DimensionPalette): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $DimensionPalette): void;
        getId(): $UUID;
        getType(): $EdgePointType<never>;
        setLocation(arg0: $Couple<$TrackNodeLocation>, arg1: number): void;
        setId(arg0: $UUID_): void;
        onRemoved(arg0: $TrackGraph): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $SingleBlockEntityEdgePoint extends $TrackEdgePoint {
        getBlockEntityPos(): $BlockPos;
        getBlockEntityDimension(): $ResourceKey<$Level>;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $SignalBlockEntity$OverlayState extends $Enum<$SignalBlockEntity$OverlayState> {
        static values(): $SignalBlockEntity$OverlayState[];
        static valueOf(arg0: string): $SignalBlockEntity$OverlayState;
        static RENDER: $SignalBlockEntity$OverlayState;
        static SKIP: $SignalBlockEntity$OverlayState;
        static DUAL: $SignalBlockEntity$OverlayState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$OverlayState}.
     */
    export type $SignalBlockEntity$OverlayState_ = "render" | "skip" | "dual";
    export class $SignalBlockEntity$SignalState extends $Enum<$SignalBlockEntity$SignalState> {
        isRedLight(arg0: number): boolean;
        isYellowLight(arg0: number): boolean;
        isGreenLight(arg0: number): boolean;
        static values(): $SignalBlockEntity$SignalState[];
        static valueOf(arg0: string): $SignalBlockEntity$SignalState;
        static RED: $SignalBlockEntity$SignalState;
        static YELLOW: $SignalBlockEntity$SignalState;
        static INVALID: $SignalBlockEntity$SignalState;
        static GREEN: $SignalBlockEntity$SignalState;
    }
    /**
     * Values that may be interpreted as {@link $SignalBlockEntity$SignalState}.
     */
    export type $SignalBlockEntity$SignalState_ = "red" | "yellow" | "green" | "invalid";
    export class $SignalBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        getReportedPower(): boolean;
        enterState(arg0: $SignalBlockEntity$SignalState_): void;
        isPowered(): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getState(): $SignalBlockEntity$SignalState;
        setOverlay(arg0: $SignalBlockEntity$OverlayState_): void;
        getOverlay(): $SignalBlockEntity$OverlayState;
        getSignal(): $SignalBoundary;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        computerBehaviour: $AbstractComputerBehaviour;
        edgePoint: $TrackTargetingBehaviour<$SignalBoundary>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get reportedPower(): boolean;
        get powered(): boolean;
        get state(): $SignalBlockEntity$SignalState;
        get signal(): $SignalBoundary;
    }
}
