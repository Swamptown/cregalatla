import { $ClientChunkCache$Storage } from "@package/net/minecraft/client/multiplayer";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Queue } from "@package/java/util";
import { $Runnable } from "@package/java/lang";

declare module "@package/me/cominixo/betterf3/ducks" {
    export class $ClientChunkMapAccess {
    }
    export interface $ClientChunkMapAccess {
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        get chunks(): $AtomicReferenceArray<$LevelChunk>;
    }
    /**
     * Values that may be interpreted as {@link $ClientChunkMapAccess}.
     */
    export type $ClientChunkMapAccess_ = (() => $AtomicReferenceArray<$LevelChunk>);
    export class $ChunkBuilderAccess {
    }
    export interface $ChunkBuilderAccess {
        betterF3$getQueuedTaskCount(): number;
        betterF3$getUploadQueue(): $Queue<$Runnable>;
        betterF3$getBufferCount(): number;
    }
    export class $ClientChunkManagerAccess {
    }
    export interface $ClientChunkManagerAccess {
        getChunks(): $ClientChunkCache$Storage;
        get chunks(): $ClientChunkCache$Storage;
    }
    /**
     * Values that may be interpreted as {@link $ClientChunkManagerAccess}.
     */
    export type $ClientChunkManagerAccess_ = (() => $ClientChunkCache$Storage);
}
