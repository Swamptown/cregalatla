import { $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $SerializingRegionBasedStorageExtension } from "@package/com/ishland/c2me/rewrites/chunksystem/common/async_chunkio";
import { $NbtException, $StreamTagVisitor, $Tag_, $Tag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IDirectStorage } from "@package/com/ishland/c2me/base/common/theinterface";
import { $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $Supplier_, $Function_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ReportedException } from "@package/net/minecraft";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $ChunkType } from "@package/net/minecraft/world/level/chunk/status";
import { $Throwable, $Enum, $Record, $AutoCloseable, $Object, $Iterable, $Runnable } from "@package/java/lang";
import { $IStorageIoWorker, $IRegionBasedStorage, $IRegionFile, $IVersionedChunkStorage, $ISerializingRegionBasedStorage } from "@package/com/ishland/c2me/base/mixin/access";
import { $IPOIUnloading } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";
import { $ChunkEntities, $EntityPersistentStorage } from "@package/net/minecraft/world/level/entity";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $ByteArrayOutputStream, $DataOutputStream, $InputStream, $DataInputStream, $OutputStream } from "@package/java/io";
import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $ChunkPos, $LevelHeightAccessor, $Level } from "@package/net/minecraft/world/level";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $RegionBasedStorageSectionExtended } from "@package/net/caffeinemc/mods/lithium/common/world/interests";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $DimensionDataStorage } from "@package/net/minecraft/world/level/storage";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/world/level/chunk/storage" {
    export class $RegionFile implements $AutoCloseable, $IRegionFile {
        getChunkDataOutputStream(arg0: $ChunkPos): $DataOutputStream;
        getChunkDataInputStream(arg0: $ChunkPos): $DataInputStream;
        doesChunkExist(arg0: $ChunkPos): boolean;
        clear(arg0: $ChunkPos): void;
        flush(): void;
        write(arg0: $ChunkPos, arg1: $ByteBuffer): void;
        close(): void;
        getPath(): $Path;
        hasChunk(arg0: $ChunkPos): boolean;
        getCompressionFormat(): $RegionFileVersion;
        invokeWriteChunk(arg0: $ChunkPos, arg1: $ByteBuffer): void;
        usedSectors: $RegionBitmap;
        version: $RegionFileVersion;
        static SECTOR_INTS: number;
        info: $RegionStorageInfo;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $Path_, arg3: boolean);
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $Path_, arg3: $RegionFileVersion, arg4: boolean);
        get path(): $Path;
        get compressionFormat(): $RegionFileVersion;
    }
    export class $RegionFileStorage implements $AutoCloseable, $IRegionBasedStorage {
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): void;
        flush(): void;
        info(): $RegionStorageInfo;
        write(arg0: $ChunkPos, arg1: $CompoundTag_): void;
        read(arg0: $ChunkPos): $CompoundTag;
        close(): void;
        invokeGetRegionFile(arg0: $ChunkPos): $RegionFile;
        static ANVIL_EXTENSION: string;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: boolean);
    }
    export class $ChunkStorage implements $AutoCloseable, $IVersionedChunkStorage {
        handleLegacyStructureIndex(arg0: $ChunkPos): void;
        storageInfo(): $RegionStorageInfo;
        upgradeChunkTag(arg0: $ResourceKey_<$Level>, arg1: $Supplier_<$DimensionDataStorage>, arg2: $CompoundTag_, arg3: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): $CompoundTag;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        static injectDatafixingContext(arg0: $CompoundTag_, arg1: $ResourceKey_<$Level>, arg2: ($ResourceKey_<$MapCodec<$ChunkGenerator>>) | undefined): void;
        flushWorker(): void;
        chunkScanner(): $ChunkScanAccess;
        static getVersion(arg0: $CompoundTag_): number;
        write(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        read(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        getWorker(): $IOWorker;
        invokeGetStorageKey(): $RegionStorageInfo;
        fixerUpper: $DataFixer;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean);
        get worker(): $IOWorker;
    }
    export class $RegionStorageInfo extends $Record {
        withTypeSuffix(arg0: string): $RegionStorageInfo;
        dimension(): $ResourceKey<$Level>;
        level(): string;
        type(): string;
        constructor(arg0: string, arg1: $ResourceKey_<$Level>, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $RegionStorageInfo}.
     */
    export type $RegionStorageInfo_ = { dimension?: $ResourceKey_<$Level>, type?: string, level?: string,  } | [dimension?: $ResourceKey_<$Level>, type?: string, level?: string, ];
    export class $IOWorker implements $ChunkScanAccess, $AutoCloseable, $IStorageIoWorker, $IDirectStorage {
        setRawChunkData(pos: $ChunkPos, data: number[]): $CompletableFuture<any>;
        storageInfo(): $RegionStorageInfo;
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): $CompletableFuture<void>;
        isOldChunkAround(arg0: $ChunkPos, arg1: number): boolean;
        loadAsync(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        store(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        close(): void;
        synchronize(arg0: boolean): $CompletableFuture<void>;
        invokeGetOrComputeBlendingStatus(arg0: number, arg1: number): $CompletableFuture<$BitSet>;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: boolean);
    }
    export class $ChunkSerializer {
        static packOffsets(arg0: $ShortList[]): $ListTag;
        static getChunkTypeFromTag(arg0: $CompoundTag_): $ChunkType;
        static write(arg0: $ServerLevel, arg1: $ChunkAccess): $CompoundTag;
        static read(arg0: $ServerLevel, arg1: $PoiManager, arg2: $RegionStorageInfo_, arg3: $ChunkPos, arg4: $CompoundTag_): $ProtoChunk;
        static SKY_LIGHT_TAG: string;
        static Z_POS_TAG: string;
        static SECTIONS_TAG: string;
        static IS_LIGHT_ON_TAG: string;
        static X_POS_TAG: string;
        static HEIGHTMAPS_TAG: string;
        static BLOCK_LIGHT_TAG: string;
        constructor();
    }
    export class $RecreatingSimpleRegionStorage extends $SimpleRegionStorage {
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $RegionStorageInfo_, arg3: $Path_, arg4: $DataFixer, arg5: boolean, arg6: $DataFixTypes_);
    }
    export class $IOWorker$PendingStore {
        copyData(): $CompoundTag;
        result: $CompletableFuture<void>;
        data: $CompoundTag;
        constructor(arg0: $CompoundTag_);
    }
    export class $ChunkIOErrorReporter {
        static createMisplacedChunkReport(arg0: $ChunkPos, arg1: $ChunkPos): $ReportedException;
    }
    export interface $ChunkIOErrorReporter {
        reportChunkLoadFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportChunkSaveFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportMisplacedChunk(arg0: $ChunkPos, arg1: $ChunkPos, arg2: $RegionStorageInfo_): void;
    }
    export class $ChunkScanAccess {
    }
    export interface $ChunkScanAccess {
        scanChunk(arg0: $ChunkPos, arg1: $StreamTagVisitor): $CompletableFuture<void>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkScanAccess}.
     */
    export type $ChunkScanAccess_ = ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture<void>);
    export class $SectionStorage<R> implements $AutoCloseable, $RegionBasedStorageSectionExtended<any>, $ISerializingRegionBasedStorage, $IPOIUnloading, $SerializingRegionBasedStorageExtension {
        onSectionLoad(arg0: number): void;
        lithium$getWithinChunkColumn(arg0: number, arg1: number): $Stream<any>;
        lithium$getInChunkColumn(arg0: number, arg1: number): $Iterable<any>;
        c2me$unloadPoi(pos: $ChunkPos): void;
        outsideStoredRange(arg0: number): boolean;
        tick(arg0: $BooleanSupplier_): void;
        setDirty(arg0: number): void;
        getOrCreate(arg0: number): $Object;
        remove(arg0: number): void;
        get(arg0: number): (never) | undefined;
        update(pos: $ChunkPos, tag: $CompoundTag_): void;
        flush(arg0: $ChunkPos): void;
        close(): void;
        hasWork(): boolean;
        getOrLoad(arg0: number): (never) | undefined;
        c2me$shouldUnloadPoi(pos: $ChunkPos): boolean;
        getStorageAccess(): $SimpleRegionStorage;
        levelHeightAccessor: $LevelHeightAccessor;
        constructor(arg0: $SimpleRegionStorage, arg1: $Function_<$Runnable, $Codec<$Object>>, arg2: $Function_<$Runnable, $Object>, arg3: $RegistryAccess, arg4: $ChunkIOErrorReporter, arg5: $LevelHeightAccessor);
        set dirty(value: number);
        get storageAccess(): $SimpleRegionStorage;
    }
    export class $ChunkSerializer$ChunkReadException extends $NbtException {
        constructor(arg0: string);
    }
    export class $RegionFile$CommitOp {
    }
    export interface $RegionFile$CommitOp {
    }
    /**
     * Values that may be interpreted as {@link $RegionFile$CommitOp}.
     */
    export type $RegionFile$CommitOp_ = (() => void);
    export class $RecreatingChunkStorage extends $ChunkStorage {
        fixerUpper: $DataFixer;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $RegionStorageInfo_, arg3: $Path_, arg4: $DataFixer, arg5: boolean);
    }
    export class $RegionFileVersion {
        static fromId(arg0: number): $RegionFileVersion;
        static getSelected(): $RegionFileVersion;
        static configure(arg0: string): void;
        wrap(arg0: $InputStream): $InputStream;
        wrap(arg0: $OutputStream): $OutputStream;
        getId(): number;
        static isValidVersion(arg0: number): boolean;
        static VERSION_GZIP: $RegionFileVersion;
        static VERSION_LZ4: $RegionFileVersion;
        static VERSION_DEFLATE: $RegionFileVersion;
        static VERSION_NONE: $RegionFileVersion;
        static VERSION_CUSTOM: $RegionFileVersion;
        static DEFAULT: $RegionFileVersion;
        static get selected(): $RegionFileVersion;
        get id(): number;
    }
    export class $RegionBitmap {
        getUsed(): $IntSet;
        allocate(arg0: number): number;
        force(arg0: number, arg1: number): void;
        free(arg0: number, arg1: number): void;
        constructor();
        get used(): $IntSet;
    }
    export class $SimpleRegionStorage implements $AutoCloseable {
        storageInfo(): $RegionStorageInfo;
        upgradeChunkTag(arg0: $CompoundTag_, arg1: number): $CompoundTag;
        upgradeChunkTag(arg0: $Dynamic<$Tag_>, arg1: number): $Dynamic<$Tag>;
        write(arg0: $ChunkPos, arg1: $CompoundTag_): $CompletableFuture<void>;
        read(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        close(): void;
        synchronize(arg0: boolean): $CompletableFuture<void>;
        constructor(arg0: $RegionStorageInfo_, arg1: $Path_, arg2: $DataFixer, arg3: boolean, arg4: $DataFixTypes_);
    }
    export class $EntityStorage implements $EntityPersistentStorage<$Entity> {
        loadEntities(arg0: $ChunkPos): $CompletableFuture<$ChunkEntities<$Entity>>;
        storeEntities(arg0: $ChunkEntities<$Entity>): void;
        flush(arg0: boolean): void;
        close(): void;
        constructor(arg0: $SimpleRegionStorage, arg1: $ServerLevel, arg2: $Executor_);
    }
    export class $RegionFileVersion$StreamWrapper<O> {
    }
    export interface $RegionFileVersion$StreamWrapper<O> {
    }
    /**
     * Values that may be interpreted as {@link $RegionFileVersion$StreamWrapper}.
     */
    export type $RegionFileVersion$StreamWrapper_<O> = (() => void);
    export class $IOWorker$Priority extends $Enum<$IOWorker$Priority> {
    }
    /**
     * Values that may be interpreted as {@link $IOWorker$Priority}.
     */
    export type $IOWorker$Priority_ = "foreground" | "background" | "shutdown";
    export class $RegionFile$ChunkBuffer extends $ByteArrayOutputStream {
    }
}
