import { $ChunkPos, $LevelHeightAccessor, $BlockGetter, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $LongPredicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $SectionPos, $Direction } from "@package/net/minecraft/core";
import { $Long2ObjectOpenHashMap, $LongLinkedOpenHashSet, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongLinkedOpenHashMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DataLayer, $LightChunk, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SkyLightSectionStorageExtension } from "@package/dev/engine_room/flywheel/backend";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $SequencedSet } from "@package/java/util";
import { $Enum, $Object } from "@package/java/lang";
import { $LayerLightSectionStorageAccessor, $SkyDataLayerStorageMapAccessor, $LightEngineAccessor } from "@package/dev/engine_room/flywheel/backend/mixin/light";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        getLightValue(arg0: $BlockPos_): number;
    }
    export class $DynamicGraphMinFixedPoint {
        removeIf(arg0: $LongPredicate_): void;
        setLevel(arg0: number, arg1: number): void;
        getLevel(arg0: number): number;
        checkNode(arg0: number): void;
        checkNeighborsAfterUpdate(arg0: number, arg1: number, arg2: boolean): void;
        checkNeighbor(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        getComputedLevel(arg0: number, arg1: number, arg2: number): number;
        computeLevelFromNeighbor(arg0: number, arg1: number, arg2: number): number;
        checkEdge(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        removeFromQueue(arg0: number): void;
        isSource(arg0: number): boolean;
        getQueueSize(): number;
        hasWork(): boolean;
        runUpdates(arg0: number): number;
        levelCount: number;
        static SOURCE: number;
        constructor(arg0: number, arg1: number, arg2: number);
        get queueSize(): number;
    }
    export class $LightEngine$QueueEntry {
        static getFromLevel(arg0: number): number;
        static isIncreaseFromEmission(arg0: number): boolean;
        static decreaseAllDirections(arg0: number): number;
        static increaseLightFromEmission(arg0: number, arg1: boolean): number;
        static shouldPropagateInDirection(arg0: number, arg1: $Direction_): boolean;
        static isFromEmptyShape(arg0: number): boolean;
        static increaseSkipOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static decreaseSkipOneDirection(arg0: number, arg1: $Direction_): number;
        static increaseOnlyOneDirection(arg0: number, arg1: boolean, arg2: $Direction_): number;
        static increaseSkySourceInDirections(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): number;
        constructor();
    }
    export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
        copy(): M;
        getLayer(arg0: number): $DataLayer;
        clearCache(): void;
        setLayer(arg0: number, arg1: $DataLayer): void;
        copyDataLayer(arg0: number): $DataLayer;
        hasLayer(arg0: number): boolean;
        disableCache(): void;
        removeLayer(arg0: number): $DataLayer;
        map: $Long2ObjectOpenHashMap<$DataLayer>;
        constructor(arg0: $Long2ObjectOpenHashMap<$DataLayer>);
    }
    export class $LevelLightEngine implements $LightEventListener {
        handler$zbb000$sodium_extra$checkBlock(arg0: $BlockPos_, arg1: $CallbackInfo): void;
        handler$zbb000$sodium_extra$doLightUpdates(arg0: $CallbackInfoReturnable<any>): void;
        getDebugSectionType(arg0: $LightLayer_, arg1: $SectionPos): $LayerLightSectionStorage$SectionType;
        hasLightWork(): boolean;
        propagateLightSources(arg0: $ChunkPos): void;
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        getDebugData(arg0: $LightLayer_, arg1: $SectionPos): string;
        runLightUpdates(): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        lightOnInSection(arg0: $SectionPos): boolean;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        getLayerListener(arg0: $LightLayer_): $LayerLightEventListener;
        getLightSectionCount(): number;
        getMinLightSection(): number;
        queueSectionData(arg0: $LightLayer_, arg1: $SectionPos, arg2: $DataLayer): void;
        getMaxLightSection(): number;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(arg0: $LightChunkGetter, arg1: boolean, arg2: boolean);
        get lightSectionCount(): number;
        get minLightSection(): number;
        get maxLightSection(): number;
    }
    export class $SpatialLongSet$InternalMap extends $Long2LongLinkedOpenHashMap {
        firstKey(): number;
        lastKey(): number;
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
    export class $SpatialLongSet extends $LongLinkedOpenHashSet {
        last(): number;
        reversed(): $SequencedSet<number>;
        constructor(arg0: number, arg1: number);
    }
    export class $SkyLightEngine extends $LightEngine<$SkyLightSectionStorage$SkyDataLayerStorageMap, $SkyLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $SkyLightSectionStorage;
        constructor(arg0: $LightChunkGetter);
        constructor(arg0: $LightChunkGetter, arg1: $SkyLightSectionStorage);
    }
    export class $LayerLightSectionStorage$SectionState {
    }
    export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
        getState(arg0: $BlockPos_): $BlockState;
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        static isEmptyShape(arg0: $BlockState_): boolean;
        shapeOccludes(arg0: number, arg1: $BlockState_, arg2: number, arg3: $BlockState_, arg4: $Direction_): boolean;
        checkNode(arg0: number): void;
        propagateIncrease(arg0: number, arg1: number, arg2: number): void;
        propagateDecrease(arg0: number, arg1: number): void;
        enqueueDecrease(arg0: number, arg1: number): void;
        enqueueIncrease(arg0: number, arg1: number): void;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        hasLightWork(): boolean;
        getOpacity(arg0: $BlockState_, arg1: $BlockPos_): number;
        retainData(arg0: $ChunkPos, arg1: boolean): void;
        static getLightBlockInto(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_, arg5: $Direction_, arg6: number): number;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        static hasDifferentLightProperties(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): boolean;
        checkBlock(arg0: $BlockPos_): void;
        getDebugData(arg0: number): string;
        runLightUpdates(): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        getChunk(arg0: number, arg1: number): $LightChunk;
        static getOcclusionShape(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): $VoxelShape;
        getOcclusionShape(arg0: $BlockState_, arg1: number, arg2: $Direction_): $VoxelShape;
        getLightValue(arg0: $BlockPos_): number;
        queueSectionData(arg0: number, arg1: $DataLayer): void;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        flywheel$storage(): $Object;
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $Object;
        constructor(arg0: $LightChunkGetter, arg1: $Object);
    }
    export class $LeveledPriorityQueue {
        isEmpty(): boolean;
        enqueue(arg0: number, arg1: number): void;
        removeFirstLong(): number;
        dequeue(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: number, arg1: number);
        get empty(): boolean;
    }
    export class $SkyLightSectionStorage extends $LayerLightSectionStorage<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyLightSectionStorageExtension {
        getBottomSectionY(): number;
        hasLightDataAtOrBelow(arg0: number): boolean;
        isAboveData(arg0: number): boolean;
        getTopSectionY(arg0: number): number;
        flywheel$skyDataLayer(section: number): $DataLayer;
        getLightValue(arg0: number, arg1: boolean): number;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $SkyLightSectionStorage$SkyDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(arg0: $LightChunkGetter);
        get bottomSectionY(): number;
    }
    export class $LayerLightEventListener$DummyLightLayerEventListener extends $Enum<$LayerLightEventListener$DummyLightLayerEventListener> implements $LayerLightEventListener {
        static values(): $LayerLightEventListener$DummyLightLayerEventListener[];
        static valueOf(arg0: string): $LayerLightEventListener$DummyLightLayerEventListener;
        getDataLayerData(arg0: $SectionPos): $DataLayer;
        hasLightWork(): boolean;
        propagateLightSources(arg0: $ChunkPos): void;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        runLightUpdates(): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
        getLightValue(arg0: $BlockPos_): number;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        static INSTANCE: $LayerLightEventListener$DummyLightLayerEventListener;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightEventListener$DummyLightLayerEventListener}.
     */
    export type $LayerLightEventListener$DummyLightLayerEventListener_ = "instance";
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        hasLightWork(): boolean;
        propagateLightSources(arg0: $ChunkPos): void;
        updateSectionStatus(arg0: $BlockPos_, arg1: boolean): void;
        updateSectionStatus(arg0: $SectionPos, arg1: boolean): void;
        checkBlock(arg0: $BlockPos_): void;
        runLightUpdates(): number;
        setLightEnabled(arg0: $ChunkPos, arg1: boolean): void;
    }
    export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
        getDebugSectionType(arg0: number): $LayerLightSectionStorage$SectionType;
        markNewInconsistencies(arg0: $LightEngine<M, never>): void;
        swapSectionMap(): void;
        getStoredLevel(arg0: number): number;
        setStoredLevel(arg0: number, arg1: number): void;
        hasInconsistencies(): boolean;
        getDataLayer(arg0: M, arg1: number): $DataLayer;
        getDataLayer(arg0: number, arg1: boolean): $DataLayer;
        markSectionAndNeighborsAsAffected(arg0: number): void;
        createDataLayer(arg0: number): $DataLayer;
        onNodeRemoved(arg0: number): void;
        onNodeAdded(arg0: number): void;
        putSectionState(arg0: number, arg1: number): void;
        storingLightForSection(arg0: number): boolean;
        getDataLayerToWrite(arg0: number): $DataLayer;
        getDataLayerData(arg0: number): $DataLayer;
        retainData(arg0: number, arg1: boolean): void;
        updateSectionStatus(arg0: number, arg1: boolean): void;
        setLightEnabled(arg0: number, arg1: boolean): void;
        lightOnInSection(arg0: number): boolean;
        getLightValue(arg0: number): number;
        queueSectionData(arg0: number, arg1: $DataLayer): void;
        flywheel$callGetDataLayer(arg0: number, arg1: boolean): $DataLayer;
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: M;
        chunkSource: $LightChunkGetter;
        updatingSectionData: M;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(arg0: $LightLayer_, arg1: $LightChunkGetter, arg2: M);
    }
    export class $ChunkSkyLightSources {
        update(arg0: $BlockGetter, arg1: number, arg2: number, arg3: number): boolean;
        getLowestSourceY(arg0: number, arg1: number): number;
        getHighestLowestSourceY(): number;
        fillFrom(arg0: $ChunkAccess): void;
        static NEGATIVE_INFINITY: number;
        constructor(arg0: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $BlockLightSectionStorage$BlockDataLayerStorageMap extends $DataLayerStorageMap<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $SkyLightSectionStorage$SkyDataLayerStorageMap extends $DataLayerStorageMap<$SkyLightSectionStorage$SkyDataLayerStorageMap> implements $SkyDataLayerStorageMapAccessor {
        map: $Long2ObjectOpenHashMap<$DataLayer>;
    }
    export class $BlockLightEngine extends $LightEngine<$BlockLightSectionStorage$BlockDataLayerStorageMap, $BlockLightSectionStorage> {
        static PULL_LIGHT_IN_ENTRY: number;
        static MIN_OPACITY: number;
        chunkSource: $LightChunkGetter;
        static PROPAGATION_DIRECTIONS: $Direction[];
        static MAX_LEVEL: number;
        storage: $BlockLightSectionStorage;
        constructor(arg0: $LightChunkGetter);
        constructor(arg0: $LightChunkGetter, arg1: $BlockLightSectionStorage);
    }
    export class $BlockLightSectionStorage extends $LayerLightSectionStorage<$BlockLightSectionStorage$BlockDataLayerStorageMap> {
        changedSections: $LongSet;
        queuedSections: $Long2ObjectMap<$DataLayer>;
        visibleSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        chunkSource: $LightChunkGetter;
        updatingSectionData: $BlockLightSectionStorage$BlockDataLayerStorageMap;
        sectionStates: $Long2ByteMap;
        sectionsAffectedByLightUpdates: $LongSet;
        constructor(arg0: $LightChunkGetter);
    }
}
