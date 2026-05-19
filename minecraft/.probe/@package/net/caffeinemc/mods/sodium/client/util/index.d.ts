import { $ByteBuffer } from "@package/java/nio";
export * as iterator from "@package/net/caffeinemc/mods/sodium/client/util/iterator";
export * as task from "@package/net/caffeinemc/mods/sodium/client/util/task";

declare module "@package/net/caffeinemc/mods/sodium/client/util" {
    export class $NativeBuffer {
        getDirectBuffer(): $ByteBuffer;
        static reclaim(arg0: boolean): void;
        static getTotalAllocated(): number;
        getLength(): number;
        static copy(arg0: $ByteBuffer): $NativeBuffer;
        free(): void;
        constructor(arg0: number);
        get directBuffer(): $ByteBuffer;
        static get totalAllocated(): number;
        get length(): number;
    }
}
