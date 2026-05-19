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
        static init$veil_$md$4ca6b6$0(arg0: $ObjectArrayList<any>): $SortedRenderLists;
        static empty(): $SortedRenderLists;
        iterator(): $Iterator<$ChunkRenderList>;
        iterator(arg0: boolean): $Iterator<$ChunkRenderList>;
    }
    export class $ChunkRenderList {
        sortSections(arg0: $SectionPos, arg1: number[]): void;
        sectionsWithGeometryIterator(arg0: boolean): $ByteIterator;
        getSectionsWithEntitiesCount(): number;
        getSectionsWithSpritesCount(): number;
        getRegion(): $RenderRegion;
        size(): number;
        reset(arg0: number): void;
        add(arg0: $RenderSection): void;
        sectionsWithEntitiesIterator(): $ByteIterator;
        getLastVisibleFrame(): number;
        getSectionsWithGeometryCount(): number;
        sectionsWithSpritesIterator(): $ByteIterator;
        constructor(arg0: $RenderRegion);
        get sectionsWithEntitiesCount(): number;
        get sectionsWithSpritesCount(): number;
        get region(): $RenderRegion;
        get lastVisibleFrame(): number;
        get sectionsWithGeometryCount(): number;
    }
}
