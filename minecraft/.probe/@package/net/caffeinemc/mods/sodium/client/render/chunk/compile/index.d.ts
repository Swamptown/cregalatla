import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockRenderCache } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $BuiltSectionMeshParts, $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $Map_, $Map } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";
import { $Sorter, $TranslucentData, $DynamicTopoData$DynamicTopoSorter, $SortData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
export * as tasks from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
export * as executor from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
export * as pipeline from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile" {
    export class $ChunkSortOutput extends $BuilderTaskOutput implements $SortData {
        markAsReusingUploadedData(): void;
        copyResultFrom(arg0: $Sorter): void;
        isReusingUploadedIndexData(): boolean;
        getIndexBuffer(): $NativeBuffer;
        getTopoSorter(): $DynamicTopoData$DynamicTopoSorter;
        getIntBuffer(): $IntBuffer;
        submitTime: number;
        render: $RenderSection;
        constructor(arg0: $RenderSection, arg1: number);
        constructor(arg0: $RenderSection, arg1: number, arg2: $Sorter);
        get reusingUploadedIndexData(): boolean;
        get indexBuffer(): $NativeBuffer;
        get topoSorter(): $DynamicTopoData$DynamicTopoSorter;
        get intBuffer(): $IntBuffer;
    }
    export class $BuilderTaskOutput {
        destroy(): void;
        submitTime: number;
        render: $RenderSection;
        constructor(arg0: $RenderSection, arg1: number);
    }
    export class $ChunkBuildContext {
        cleanup(): void;
        cache: $BlockRenderCache;
        buffers: $ChunkBuildBuffers;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
    }
    export class $ChunkBuildOutput extends $ChunkSortOutput {
        getMesh(arg0: $TerrainRenderPass): $BuiltSectionMeshParts;
        submitTime: number;
        translucentData: $TranslucentData;
        render: $RenderSection;
        meshes: $Map<$TerrainRenderPass, $BuiltSectionMeshParts>;
        info: $BuiltSectionInfo;
        constructor(arg0: $RenderSection, arg1: number, arg2: $TranslucentData, arg3: $BuiltSectionInfo, arg4: $Map_<$TerrainRenderPass, $BuiltSectionMeshParts>);
    }
}
