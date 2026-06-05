import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";

declare module "@package/dev/devce/rocketnautics/content/world" {
    export class $IHasChunkGenerator {
    }
    export interface $IHasChunkGenerator {
        rocketnautics$getGenerator(): $ChunkGenerator;
    }
    /**
     * Values that may be interpreted as {@link $IHasChunkGenerator}.
     */
    export type $IHasChunkGenerator_ = (() => $ChunkGenerator);
}
