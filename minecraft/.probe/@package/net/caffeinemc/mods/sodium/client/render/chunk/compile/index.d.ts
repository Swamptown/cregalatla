import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockRenderCache } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $NativeBuffer } from "@package/net/caffeinemc/mods/sodium/client/util";
import { $ChunkModelBuilder } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/buffers";
import { $BuiltSectionMeshParts, $BuiltSectionInfo$Builder, $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $Map_, $Map } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";
import { $Sorter, $TranslucentData, $DynamicTopoData$DynamicTopoSorter, $SortData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $Material } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain/material";
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
        constructor(arg0: $RenderSection, arg1: number, arg2: $Sorter);
        constructor(arg0: $RenderSection, arg1: number);
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
    export class $ChunkBuildBuffers {
        createMesh(arg0: $TerrainRenderPass, arg1: boolean): $BuiltSectionMeshParts;
        get(arg0: $TerrainRenderPass): $ChunkModelBuilder;
        get(arg0: $Material): $ChunkModelBuilder;
        init(arg0: $BuiltSectionInfo$Builder, arg1: number): void;
        destroy(): void;
        constructor(arg0: $ChunkVertexType);
    }
}
