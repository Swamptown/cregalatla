import { $ILimitedGlobalStation } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ITrackBlock, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $UUID, $Map, $UUID_ } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $WeakReference } from "@package/java/lang/ref";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $TrackNodeLocation, $TrackNode } from "@package/com/simibubi/create/content/trains/graph";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DoorControlBehaviour } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $MapDecoration } from "@package/net/minecraft/world/level/saveddata/maps";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $Level, $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/trains/station" {
    export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        getAssemblyDirection(): $Direction;
        getAutoSchedule(): $ItemStack;
        resolveFlagAngle(): boolean;
        isValidBogeyOffset(arg0: number): boolean;
        enterAssemblyMode(arg0: $ServerPlayer): boolean;
        cancelAssembly(): void;
        updateName(arg0: string): boolean;
        attachPackagePort(arg0: $PackagePortBlockEntity): void;
        removePackagePort(arg0: $PackagePortBlockEntity): void;
        tryDisassembleTrain(arg0: $ServerPlayer): boolean;
        exitAssemblyMode(): boolean;
        updateMapColor(arg0: number): void;
        isAssembling(): boolean;
        tryEnterAssemblyMode(): boolean;
        refreshAssemblyInfo(): void;
        dropSchedule(arg0: $ServerPlayer, arg1: $Train): void;
        getStation(): $GlobalStation;
        trackClicked(arg0: $Player, arg1: $InteractionHand_, arg2: $ITrackBlock, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        assemble(arg0: $UUID_): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        worldPosition: $BlockPos;
        lastDisassembledTrainName: $Component;
        flag: $LerpedFloat;
        static assemblyAreas: $WorldAttached<$Map<$BlockPos, $BoundingBox>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        doorControls: $DoorControlBehaviour;
        lastDisassembledMapColorIndex: number;
        hasComparators: number;
        computerBehaviour: $AbstractComputerBehaviour;
        edgePoint: $TrackTargetingBehaviour<$GlobalStation>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get assemblyDirection(): $Direction;
        get autoSchedule(): $ItemStack;
        get assembling(): boolean;
        get station(): $GlobalStation;
    }
    export class $GlobalStation extends $SingleBlockEntityEdgePoint implements $ILimitedGlobalStation {
        isLimitEnabled(): boolean;
        canApproachFrom(arg0: $TrackNode): boolean;
        reserveFor(arg0: $Train): void;
        getNearestTrain(): $Train;
        cancelReservation(arg0: $Train): void;
        trainDeparted(arg0: $Train): void;
        getImminentTrain(): $Train;
        runMailTransfer(): void;
        isStationEnabled(): boolean;
        getDisablingTrain(): $Train;
        orDisablingTrain(arg0: $Train, arg1: $Train): $Train;
        setLimitEnabled(arg0: boolean): void;
        getPresentTrain(): $Train;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        connectedPorts: $Map<$BlockPos, $GlobalPackagePort>;
        blockEntityDimension: $ResourceKey<$Level>;
        name: string;
        assembling: boolean;
        id: $UUID;
        position: number;
        nearestTrain: $WeakReference<$Train>;
        constructor();
        get imminentTrain(): $Train;
        get stationEnabled(): boolean;
        get disablingTrain(): $Train;
        get presentTrain(): $Train;
    }
    export class $GlobalPackagePort {
        saveOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        restoreOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        address: string;
        primed: boolean;
        offlineBuffer: $ItemStackHandler;
        constructor();
    }
    export class $StationMarker {
        static createStationDecoration(arg0: number, arg1: number, arg2: ($Component_) | undefined): $MapDecoration;
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $StationMarker;
        getSource(): $BlockPos;
        getName(): $Component;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StationMarker;
        getId(): string;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        getTarget(): $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Component_);
        get source(): $BlockPos;
        get name(): $Component;
        get id(): string;
        get target(): $BlockPos;
    }
    export class $StationMapData {
    }
    export interface $StationMapData {
        addStationMarker(arg0: $StationMarker): void;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
    }
}
