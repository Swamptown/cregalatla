import { $ByteBuffer } from "@package/java/nio";
export * as iterator from "@package/net/caffeinemc/mods/sodium/client/util/iterator";
export * as task from "@package/net/caffeinemc/mods/sodium/client/util/task";

declare module "@package/net/caffeinemc/mods/sodium/client/util" {
    export class $NativeBuffer {
        getLength(): number;
        static copy(arg0: $ByteBuffer): $NativeBuffer;
        free(): void;
        getDirectBuffer(): $ByteBuffer;
        static reclaim(arg0: boolean): void;
        static getTotalAllocated(): number;
        constructor(arg0: number);
        get length(): number;
        get directBuffer(): $ByteBuffer;
        static get totalAllocated(): number;
    }
}
