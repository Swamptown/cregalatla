import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SubLevelStorage } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $HoldingSubLevel } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $UUID_, $List } from "@package/java/util";
import { $Iterable, $AutoCloseable, $Record } from "@package/java/lang";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/storage/holding" {
    export class $GlobalSavedSubLevelPointer extends $Record {
        storageIndex(): number;
        subLevelIndex(): number;
        local(): $SavedSubLevelPointer;
        chunkPos(): $ChunkPos;
        static CODEC: $Codec<$GlobalSavedSubLevelPointer>;
        constructor(chunkPos: $ChunkPos, storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $GlobalSavedSubLevelPointer}.
     */
    export type $GlobalSavedSubLevelPointer_ = { storageIndex?: number, chunkPos?: $ChunkPos, subLevelIndex?: number,  } | [storageIndex?: number, chunkPos?: $ChunkPos, subLevelIndex?: number, ];
    export class $SubLevelHoldingChunkMap implements $AutoCloseable {
        processChanges(): void;
        queueDeletion(arg0: $ServerSubLevel): void;
        getHoldingSubLevel(arg0: $UUID_): $HoldingSubLevel;
        moveToUnloaded(arg0: $ServerSubLevel, arg1: $ChunkPos): void;
        getStorage(): $SubLevelStorage;
        updateChunkStatus(arg0: $ChunkPos, arg1: boolean): void;
        saveAll(): void;
        close(): void;
        static VERBOSE: boolean;
        constructor(arg0: $ServerLevel, arg1: $ServerSubLevelContainer);
        get storage(): $SubLevelStorage;
    }
    export class $SavedSubLevelPointer extends $Record {
        storageIndex(): number;
        subLevelIndex(): number;
        static unpack(arg0: number): $SavedSubLevelPointer;
        packed(): number;
        constructor(storageIndex: number, subLevelIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $SavedSubLevelPointer}.
     */
    export type $SavedSubLevelPointer_ = { subLevelIndex?: number, storageIndex?: number,  } | [subLevelIndex?: number, storageIndex?: number, ];
    export class $SubLevelHoldingChunk {
        acceptHoldingSubLevel(arg0: $HoldingSubLevel): void;
        getLoadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        getSubLevelPointers(): $List<$SavedSubLevelPointer>;
        collectReadySubLevels(arg0: $ServerLevel, arg1: $Object2ObjectMap<$UUID_, $HoldingSubLevel>): void;
        getChunkPos(): $ChunkPos;
        writeTo(arg0: $CompoundTag_): void;
        static from(arg0: $ChunkPos, arg1: $CompoundTag_): $SubLevelHoldingChunk;
        constructor(arg0: $ChunkPos);
        get loadedHoldingSubLevels(): $Iterable<$HoldingSubLevel>;
        get subLevelPointers(): $List<$SavedSubLevelPointer>;
        get chunkPos(): $ChunkPos;
    }
}
