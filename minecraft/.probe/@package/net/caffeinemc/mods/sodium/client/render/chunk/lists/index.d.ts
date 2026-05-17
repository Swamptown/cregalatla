import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $SectionPos } from "@package/net/minecraft/core";
import { $ByteIterator } from "@package/net/caffeinemc/mods/sodium/client/util/iterator";
import { $SortedRenderListsAccessor } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $Iterator } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists" {
    export class $ChunkRenderListIterable {
    }
    export interface $ChunkRenderListIterable {
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
        iterator(): $Iterator<$ChunkRenderList>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderListIterable}.
     */
    export type $ChunkRenderListIterable_ = ((arg0: boolean) => $Iterator<$ChunkRenderList>);
    export class $SortedRenderLists implements $ChunkRenderListIterable, $SortedRenderListsAccessor {
        static empty(): $SortedRenderLists;
        static init$veil_$md$d858b6$0(arg0: $ObjectArrayList<any>): $SortedRenderLists;
        iterator(): $Iterator<$ChunkRenderList>;
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
    }
    export class $ChunkRenderList {
        size(): number;
        reset(arg0: number): void;
        add(arg0: $RenderSection): void;
        getRegion(): $RenderRegion;
        sectionsWithGeometryIterator(arg0: boolean): $ByteIterator;
        sortSections(arg0: $SectionPos, arg1: number[]): void;
        getSectionsWithSpritesCount(): number;
        getSectionsWithEntitiesCount(): number;
        getSectionsWithGeometryCount(): number;
        sectionsWithEntitiesIterator(): $ByteIterator;
        sectionsWithSpritesIterator(): $ByteIterator;
        getLastVisibleFrame(): number;
        constructor(arg0: $RenderRegion);
        get region(): $RenderRegion;
        get sectionsWithSpritesCount(): number;
        get sectionsWithEntitiesCount(): number;
        get sectionsWithGeometryCount(): number;
        get lastVisibleFrame(): number;
    }
}
