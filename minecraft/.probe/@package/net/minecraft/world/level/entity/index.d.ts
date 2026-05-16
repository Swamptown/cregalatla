import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Writer } from "@package/java/io";
import { $Long2ObjectFunction_, $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Logger } from "@package/org/slf4j";
import { $PositionedEntityTrackingSection } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $UUID_, $List_, $Set } from "@package/java/util";
import { $AbortableIterationConsumer_, $ClassInstanceMultiMap, $AbortableIterationConsumer$Continuation } from "@package/net/minecraft/util";
import { $ChunkAwareEntityIterable } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PersistentEntitySectionManagerAccessor, $EntitySectionAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning";
import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $EntitySectionAccessor as $EntitySectionAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $PersistentEntitySectionManagerAccessor as $PersistentEntitySectionManagerAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking";
import { $Enum, $AutoCloseable, $Class, $Object, $Iterable } from "@package/java/lang";
import { $PersistentEntitySectionManagerAccessor as $PersistentEntitySectionManagerAccessor$2, $EntitySectionAccessor as $EntitySectionAccessor$1, $TransientEntitySectionManagerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $EntityMovementTrackerSection, $ToggleableMovementTracker, $SectionedEntityMovementTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/entity" {
    export class $EntityTickList {
        remove(arg0: $Entity): void;
        add(arg0: $Entity): void;
        contains(arg0: $Entity): boolean;
        forEach(arg0: $Consumer_<$Entity>): void;
        constructor();
    }
    export class $Visibility extends $Enum<$Visibility> {
        static values(): $Visibility[];
        static valueOf(arg0: string): $Visibility;
        isAccessible(): boolean;
        static fromFullChunkStatus(arg0: $FullChunkStatus_): $Visibility;
        isTicking(): boolean;
        static TICKING: $Visibility;
        static TRACKED: $Visibility;
        static HIDDEN: $Visibility;
        get accessible(): boolean;
        get ticking(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Visibility}.
     */
    export type $Visibility_ = "hidden" | "tracked" | "ticking";
    export class $EntityPersistentStorage<T> {
    }
    export interface $EntityPersistentStorage<T> extends $AutoCloseable {
        flush(arg0: boolean): void;
        close(): void;
        loadEntities(arg0: $ChunkPos): $CompletableFuture<$ChunkEntities<T>>;
        storeEntities(arg0: $ChunkEntities<T>): void;
    }
    export class $ChunkStatusUpdateListener {
    }
    export interface $ChunkStatusUpdateListener {
        onChunkStatusChange(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusUpdateListener}.
     */
    export type $ChunkStatusUpdateListener_ = ((arg0: $ChunkPos, arg1: $FullChunkStatus) => void);
    export class $EntitySection<T extends $EntityAccess> implements $EntitySectionAccessor$2<any>, $EntitySectionAccessor<any>, $EntitySectionAccessor$1<any>, $PositionedEntityTrackingSection, $EntityMovementTrackerSection {
        remove(arg0: $Object): boolean;
        size(): number;
        isEmpty(): boolean;
        add(arg0: $Object): void;
        lithium$setPos(arg0: number): void;
        modifyReturnValue$dbg000$lithium$modifyIsEmpty(arg0: boolean): boolean;
        localvar$dbg000$lithium$swapStatus(arg0: $Visibility_): $Visibility;
        lithium$addListener(arg0: $SectionedEntityMovementTracker<any, any>): void;
        lithium$removeListener(arg0: $EntitySectionStorage<any>, arg1: $SectionedEntityMovementTracker<any, any>): void;
        lithium$getPos(): number;
        lithium$trackEntityMovement(arg0: number, arg1: number): void;
        lithium$getChangeTime(arg0: number): number;
        lithium$listenToMovementOnce(arg0: $SectionedEntityMovementTracker<any, any>, arg1: number): void;
        lithium$removeListenToMovementOnce(arg0: $SectionedEntityMovementTracker<any, any>, arg1: number): void;
        updateChunkStatus(arg0: $Visibility_): $Visibility;
        getEntities(arg0: $AABB_, arg1: $AbortableIterationConsumer_<$Object>): $AbortableIterationConsumer$Continuation;
        getEntities<U extends T>(arg0: $EntityTypeTest<$Object, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<$Object>;
        getStatus(): $Visibility;
        getCollection(): $ClassInstanceMultiMap<$Object>;
        constructor(arg0: $Class<$Object>, arg1: $Visibility_);
        get empty(): boolean;
        get status(): $Visibility;
        get collection(): $ClassInstanceMultiMap<$Object>;
    }
    export class $PersistentEntitySectionManager$Callback implements $EntityInLevelCallback, $ToggleableMovementTracker {
    }
    export class $EntityTypeTest<B, T extends B> {
        static forClass<B, T extends B>(arg0: $Class<T>): $EntityTypeTest<B, T>;
        static forExactClass<B, T extends B>(arg0: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        getBaseClass(): $Class<B>;
        tryCast(arg0: B): T;
        get baseClass(): $Class<B>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getId(): number;
        blockPosition(): $BlockPos;
        getUUID(): $UUID;
        getBoundingBox(): $AABB;
        setRemoved(arg0: $Entity$RemovalReason_): void;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        setLevelCallback(arg0: $EntityInLevelCallback): void;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        get id(): number;
        get UUID(): $UUID;
        get boundingBox(): $AABB;
        set removed(value: $Entity$RemovalReason_);
        get selfAndPassengers(): $Stream<$EntityAccess>;
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
        get passengersAndSelf(): $Stream<$EntityAccess>;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        remove(arg0: T): void;
        add(arg0: T): void;
        count(): number;
        getEntity(arg0: $UUID_): T;
        getEntity(arg0: number): T;
        getAllEntities(): $Iterable<T>;
        getEntities<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        get all(): $Iterable<T>;
    }
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onTickingStart(arg0: T): void;
        onTickingEnd(arg0: T): void;
        onTrackingStart(arg0: T): void;
        onTrackingEnd(arg0: T): void;
        onSectionChange(arg0: T): void;
        onCreated(arg0: T): void;
        onDestroyed(arg0: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable, $PersistentEntitySectionManagerAccessor<any>, $PersistentEntitySectionManagerAccessor$2<any>, $PersistentEntitySectionManagerAccessor$1<any> {
        count(): number;
        close(): void;
        isLoaded(arg0: $UUID_): boolean;
        tick(): void;
        removeSectionIfEmpty(arg0: number, arg1: $EntitySection<$Object>): void;
        static getEffectiveStatus<T extends $EntityAccess>(arg0: T, arg1: $Visibility_): $Visibility;
        stopTracking(arg0: $Object): void;
        startTracking(arg0: $Object): void;
        saveAll(): void;
        autoSave(): void;
        addNewEntityWithoutEvent(arg0: $Object): boolean;
        addNewEntity(arg0: $Object): boolean;
        dumpSections(arg0: $Writer): void;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        addLegacyChunkEntities(arg0: $Stream<$Object>): void;
        addWorldGenChunkEntities(arg0: $Stream<$Object>): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: $Visibility_): void;
        updateChunkStatus(arg0: $ChunkPos, arg1: $FullChunkStatus_): void;
        areEntitiesLoaded(arg0: number): boolean;
        canPositionTick(arg0: $ChunkPos): boolean;
        canPositionTick(arg0: $BlockPos_): boolean;
        stopTicking(arg0: $Object): void;
        startTicking(arg0: $Object): void;
        gatherStats(): string;
        getCache(): $EntitySectionStorage<$Object>;
        callbacks: $LevelCallback<$Object>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<$Object>;
        knownUuids: $Set<$UUID>;
        constructor(arg0: $Class<$Object>, arg1: $LevelCallback<$Object>, arg2: $EntityPersistentStorage<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
        get cache(): $EntitySectionStorage<$Object>;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onRemove(arg0: $Entity$RemovalReason_): void;
        onMove(): void;
    }
    export class $PersistentEntitySectionManager$ChunkLoadStatus extends $Enum<$PersistentEntitySectionManager$ChunkLoadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManager$ChunkLoadStatus}.
     */
    export type $PersistentEntitySectionManager$ChunkLoadStatus_ = "fresh" | "pending" | "loaded";
    export class $EntitySectionStorage<T extends $EntityAccess> implements $ChunkAwareEntityIterable<any> {
        remove(arg0: number): void;
        count(): number;
        lithium$IterateEntitiesInTrackedSections(): $Iterable<any>;
        forEachAccessibleNonEmptySection(arg0: $AABB_, arg1: $AbortableIterationConsumer_<$EntitySection<$Object>>): void;
        handler$cpj000$lithium$forEachInBox(arg0: $AABB_, arg1: $AbortableIterationConsumer_<any>, arg2: $CallbackInfo, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getOrCreateSection(arg0: number): $EntitySection<$Object>;
        getAllChunksWithExistingSections(): $LongSet;
        getExistingSectionPositionsInChunk(arg0: number): $LongStream;
        getExistingSectionsInChunk(arg0: number): $Stream<$EntitySection<$Object>>;
        getSection(arg0: number): $EntitySection<$Object>;
        getEntities(arg0: $AABB_, arg1: $AbortableIterationConsumer_<$Object>): void;
        getEntities<U extends T>(arg0: $EntityTypeTest<$Object, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        constructor(arg0: $Class<$Object>, arg1: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> implements $TransientEntitySectionManagerAccessor<any> {
        count(): number;
        removeSectionIfEmpty(arg0: number, arg1: $EntitySection<$Object>): void;
        addEntity(arg0: $Object): void;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        stopTicking(arg0: $ChunkPos): void;
        startTicking(arg0: $ChunkPos): void;
        gatherStats(): string;
        getCache(): $EntitySectionStorage<$Object>;
        entityStorage: $EntityLookup<$Object>;
        callbacks: $LevelCallback<$Object>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<$Object>;
        constructor(arg0: $Class<$Object>, arg1: $LevelCallback<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
        get cache(): $EntitySectionStorage<$Object>;
    }
    export class $LevelEntityGetterAdapter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        constructor(arg0: $EntityLookup<T>, arg1: $EntitySectionStorage<T>);
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        isEmpty(): boolean;
        getEntities(): $Stream<T>;
        getPos(): $ChunkPos;
        constructor(arg0: $ChunkPos, arg1: $List_<T>);
        get empty(): boolean;
        get entities(): $Stream<T>;
        get pos(): $ChunkPos;
    }
}
