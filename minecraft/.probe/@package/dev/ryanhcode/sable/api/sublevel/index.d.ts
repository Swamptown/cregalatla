import { $MassTracker } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $ChunkPos, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem, $SubLevelTrackingSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3dc, $BoundingBox3i, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $LevelPlot, $PlotChunkHolder } from "@package/dev/ryanhcode/sable/sublevel/plot";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $UUID, $List, $Map, $BitSet, $UUID_ } from "@package/java/util";
import { $SubLevel, $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Consumer_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ClientSableInterpolationState } from "@package/dev/ryanhcode/sable/network/client";
import { $FloatingClusterContainer } from "@package/dev/ryanhcode/sable/physics/floating_block";
import { $BlockSubLevelLiftProvider$LiftProviderContext } from "@package/dev/ryanhcode/sable/api/block";
import { $Iterable } from "@package/java/lang";
import { $Vector2i, $Vector3dc, $Quaterniond } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/sublevel" {
    export class $ClientSubLevelContainer extends $SubLevelContainer {
        addDebugInfo(arg0: $Consumer_<string>): void;
        getInterpolation(): $ClientSableInterpolationState;
        freeLightingScene(arg0: number): void;
        getLightingSceneId(arg0: $ClientSubLevel): number;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get interpolation(): $ClientSableInterpolationState;
    }
    export class $SubLevelObserver {
    }
    export interface $SubLevelObserver {
        tick(arg0: $SubLevelContainer): void;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        onSubLevelAdded(arg0: $SubLevel): void;
    }
    export class $SubLevelTrackingPlugin {
    }
    export interface $SubLevelTrackingPlugin {
        neededPlayers(): $Iterable<$UUID>;
        sendTrackingData(arg0: number): void;
    }
    export class $KinematicContraption {
    }
    export interface $KinematicContraption {
        sable$liftProviders(): $Map<$BlockPos, $BlockSubLevelLiftProvider$LiftProviderContext>;
        sable$blockGetter(): $BlockGetter;
        sable$getLocalBounds(arg0: $BoundingBox3i): void;
        sable$getMassTracker(): $MassTracker;
        sable$getPosition(): $Vector3dc;
        sable$getPosition(arg0: number): $Vector3dc;
        sable$getOrientation(): $Quaterniond;
        sable$getOrientation(arg0: number): $Quaterniond;
        sable$isValid(): boolean;
        sable$shouldCollide(): boolean;
        sable$getFloatingClusterContainer(): $FloatingClusterContainer;
        sable$getLocalPose(arg0: $Pose3d, arg1: number): $Pose3d;
    }
    export class $ServerSubLevelContainer extends $SubLevelContainer {
        initialize(): void;
        close(): void;
        getLevel(): $ServerLevel;
        takePhysicsSystem(arg0: $SubLevelPhysicsSystem): void;
        takeTrackingSystem(arg0: $SubLevelTrackingSystem): void;
        trackingSystem(): $SubLevelTrackingSystem;
        getHoldingChunkMap(): $SubLevelHoldingChunkMap;
        physicsSystem(): $SubLevelPhysicsSystem;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get level(): $ServerLevel;
        get holdingChunkMap(): $SubLevelHoldingChunkMap;
    }
    export class $SubLevelContainer {
        getIndex(arg0: number, arg1: number): number;
        tick(): void;
        getLevel(): $Level;
        static getContainer(arg0: $Level_): $SubLevelContainer;
        static getContainer(arg0: $ClientLevel): $ClientSubLevelContainer;
        static getContainer(arg0: $ServerLevel): $ServerSubLevelContainer;
        inBounds(arg0: number, arg1: number): boolean;
        inBounds(arg0: $BlockPos_): boolean;
        inBounds(arg0: $ChunkPos): boolean;
        getChunkHolder(arg0: $ChunkPos): $PlotChunkHolder;
        getOccupancy(): $BitSet;
        getOrigin(): $Vector2i;
        getAllSubLevels(): $List<$SubLevel>;
        getLogPlotSize(): number;
        processSubLevelRemovals(): void;
        removeSubLevel(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        removeSubLevel(arg0: number, arg1: number, arg2: $SubLevelRemovalReason_): void;
        allocateSubLevel(arg0: $UUID_, arg1: number, arg2: number, arg3: $Pose3d): $SubLevel;
        addObserver(arg0: $SubLevelObserver): void;
        allocateNewSubLevel(arg0: $Pose3d): $SubLevel;
        newPopulatedChunk(arg0: $ChunkPos, arg1: $LevelChunk): void;
        getPlayersTracking(arg0: $ChunkPos): $List<$ServerPlayer>;
        getLogSideLength(): number;
        getLoadedCount(): number;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        getSubLevel(arg0: number, arg1: number): $SubLevel;
        getSubLevel(arg0: $UUID_): $SubLevel;
        getChunk(arg0: $ChunkPos): $LevelChunk;
        getPlot(arg0: $ChunkPos): $LevelPlot;
        getPlot(arg0: number, arg1: number): $LevelPlot;
        static DEFAULT_LOG_SIZE_LENGTH: number;
        static DEFAULT_ORIGIN: number;
        static DEFAULT_LOG_PLOT_SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: number);
        get level(): $Level;
        get occupancy(): $BitSet;
        get origin(): $Vector2i;
        get allSubLevels(): $List<$SubLevel>;
        get logPlotSize(): number;
        get logSideLength(): number;
        get loadedCount(): number;
    }
}
