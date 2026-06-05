import { $ChunkPos, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture, $Future } from "@package/java/util/concurrent";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $List, $Collection } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ChunkStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $BiConsumer_, $LongConsumer_, $Supplier_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $ClientChunkCache, $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $AutoCloseable } from "@package/java/lang";
import { $RegionPos } from "@package/de/johni0702/minecraft/bobby/util";
export * as mixin from "@package/de/johni0702/minecraft/bobby/mixin";
export * as util from "@package/de/johni0702/minecraft/bobby/util";
export * as ext from "@package/de/johni0702/minecraft/bobby/ext";

declare module "@package/de/johni0702/minecraft/bobby" {
    export class $VisibleChunksTracker {
        updateCenter(arg0: number, arg1: number, arg2: $LongConsumer_, arg3: $LongConsumer_): void;
        isInViewDistance(arg0: number, arg1: number): boolean;
        updateViewDistance(arg0: number, arg1: $LongConsumer_, arg2: $LongConsumer_): void;
        update(arg0: number, arg1: number, arg2: number, arg3: $LongConsumer_, arg4: $LongConsumer_): void;
        forEach(arg0: $LongConsumer_): void;
        constructor();
    }
    export class $FakeChunkManager {
        getFakeChunks(): $Collection<$LevelChunk>;
        shouldBeLoaded(arg0: number, arg1: number): boolean;
        loadMissingChunksFromCache(): void;
        getDebugString(): string;
        getWorlds(): $Worlds;
        getStorage(): $FakeChunkStorage;
        update(arg0: boolean, arg1: $BooleanSupplier_): void;
        load(arg0: number, arg1: number, arg2: $LevelChunk): void;
        save(arg0: $LevelChunk): $Supplier<$LevelChunk>;
        unload(arg0: number, arg1: number, arg2: boolean): boolean;
        fingerprint(arg0: $LevelChunk): void;
        getChunk(arg0: number, arg1: number): $LevelChunk;
        constructor(arg0: $ClientLevel, arg1: $ClientChunkCache);
        get fakeChunks(): $Collection<$LevelChunk>;
        get debugString(): string;
        get worlds(): $Worlds;
        get storage(): $FakeChunkStorage;
    }
    export class $Worlds implements $AutoCloseable {
        static metaFile(arg0: $Path_): $Path;
        observeChunk(arg0: $Level_, arg1: $ChunkPos, arg2: number): void;
        startNewWorld(): void;
        getCurrentStorage(): $FakeChunkStorage;
        getOutdatedWorlds(): $List<$FakeChunkStorage>;
        markAsUpToDate(arg0: $FakeChunkStorage): void;
        recheckChunks(arg0: $Level_, arg1: $VisibleChunksTracker): void;
        userRequestedFork(arg0: $CommandSourceStack): void;
        userRequestedMerge(arg0: $CommandSourceStack, arg1: number, arg2: number): void;
        loadTag(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        runOrScheduleWork(arg0: $Supplier_<$Future<never>>): void;
        sendInfo(arg0: $CommandSourceStack, arg1: boolean): void;
        static getFor(arg0: $Path_): $Worlds;
        saveAll(): void;
        update(): boolean;
        close(): void;
        static closeAll(): void;
        get currentStorage(): $FakeChunkStorage;
        get outdatedWorlds(): $List<$FakeChunkStorage>;
    }
    export class $FakeChunkStorage extends $ChunkStorage {
        loadTag(arg0: $ChunkPos): $CompletableFuture<($CompoundTag) | undefined>;
        static getRegions(arg0: $Path_): $List<$RegionPos>;
        static getFor(arg0: $Path_, arg1: boolean): $FakeChunkStorage;
        upgrade(arg0: $ResourceKey_<$Level>, arg1: $BiConsumer_<number, number>): void;
        save(arg0: $ChunkPos, arg1: $CompoundTag_): void;
        static closeAll(): void;
        fixerUpper: $DataFixer;
        static REGION_FILE_PATTERN: $Pattern;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
    }
}
