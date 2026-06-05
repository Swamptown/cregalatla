import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Stream } from "@package/java/util/stream";
import { $Record } from "@package/java/lang";

declare module "@package/de/johni0702/minecraft/bobby/util" {
    export class $RegionPos extends $Record {
        getContainedChunks(): $Stream<$ChunkPos>;
        toLong(): number;
        static hashCode(arg0: number): number;
        x(): number;
        static from(arg0: $ChunkPos): $RegionPos;
        z(): number;
        static fromLong(arg0: number): $RegionPos;
        constructor(x: number, z: number);
        get containedChunks(): $Stream<$ChunkPos>;
    }
    /**
     * Values that may be interpreted as {@link $RegionPos}.
     */
    export type $RegionPos_ = { z?: number, x?: number,  } | [z?: number, x?: number, ];
}
