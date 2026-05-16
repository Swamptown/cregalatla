import { $LongConsumer_ } from "@package/java/util/function";
import { $LongSet, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Stream } from "@package/java/util/stream";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";

declare module "@package/dev/lambdaurora/lambdynlights/engine/source" {
    export class $EntityDynamicLightSource {
    }
    export interface $EntityDynamicLightSource extends $DynamicLightSource {
        dynamicLightTick(): void;
        getLuminance(): number;
        getDynamicLightX(): number;
        getDynamicLightY(): number;
        getDynamicLightZ(): number;
        resetDynamicLight(): void;
        isDynamicLightEnabled(): boolean;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        get luminance(): number;
        get dynamicLightX(): number;
        get dynamicLightY(): number;
        get dynamicLightZ(): number;
        get dynamicLightEnabled(): boolean;
    }
    export class $EntityDynamicLightSourceBehavior {
        static tickEntity(entity: $Entity): void;
    }
    export interface $EntityDynamicLightSourceBehavior extends $EntityDynamicLightSource {
        setLuminance(arg0: number): void;
        setDynamicLightEnabled(enabled: boolean): void;
        getDynamicLightPrevX(): number;
        getDynamicLightPrevY(): number;
        getDynamicLightPrevZ(): number;
        updateDynamicLightPreviousCoordinates(): void;
        getLastDynamicLuminance(): number;
        setLastDynamicLuminance(arg0: number): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        lambdynlights$setTrackedLitChunkPos(arg0: $LongSet): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        set luminance(value: number);
        set dynamicLightEnabled(value: boolean);
        get dynamicLightPrevX(): number;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevZ(): number;
    }
    export class $DynamicLightSource {
        static gatherClosestChunks(x: number, y: number, z: number, chunkConsumer: $LongConsumer_): void;
    }
    export interface $DynamicLightSource {
        getDynamicLightId(): number;
        getDynamicLightChunksToRebuild(arg0: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        splitIntoDynamicLightEntries(arg0: $CellHasher): $Stream<$SpatialLookupEntry>;
        get dynamicLightId(): number;
    }
}
