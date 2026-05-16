import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer, $ServerLevel, $TicketType } from "@package/net/minecraft/server/level";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $Iterator } from "@package/java/util";
import { $AutoCloseable } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/server/command/generation" {
    export class $GenerationTask$Listener {
    }
    export interface $GenerationTask$Listener {
        update(arg0: number, arg1: number, arg2: number, arg3: number): void;
        complete(arg0: number): void;
    }
    export class $GenerationTask {
        run(arg0: $GenerationTask$Listener): void;
        stop(): void;
        getOkCount(): number;
        getErrorCount(): number;
        getSkippedCount(): number;
        getTotalCount(): number;
        static NEOFORGE_GENERATE_FORCED: $TicketType<$ChunkPos>;
        constructor(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number);
        get okCount(): number;
        get errorCount(): number;
        get skippedCount(): number;
        get totalCount(): number;
    }
    export class $GenerationBar implements $AutoCloseable {
        update(arg0: number, arg1: number, arg2: number, arg3: number): void;
        close(): void;
        addPlayer(arg0: $ServerPlayer): void;
        constructor();
    }
    export class $CoarseOnionIterator$CellIterator implements $Iterator<$ChunkPos> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$ChunkPos>): void;
    }
    export class $OnionIterator implements $Iterator<$ChunkPos> {
        hasNext(): boolean;
        next(): $ChunkPos;
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$ChunkPos>): void;
        constructor(arg0: number);
    }
    export class $CoarseOnionIterator extends $AbstractIterator<$ChunkPos> {
        constructor(arg0: number, arg1: number);
    }
}
