import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Holder } from "@package/net/minecraft/core";
import { $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";

declare module "@package/com/faboslav/structurify/common/mixin/structure/jigsaw" {
    export class $JigsawStructureAccessor {
    }
    export interface $JigsawStructureAccessor {
        structurify$getOriginalMaxDistanceFromCenter(): number;
        structurify$getOriginalStartHeight(): $HeightProvider;
        structurify$getOriginalProjectStartToHeightmap(): ($Heightmap$Types) | undefined;
        structurify$getOriginalMaxDepth(): number;
        structurify$getOriginalStartPool(): $Holder<$StructureTemplatePool>;
    }
}
