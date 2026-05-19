import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $List_, $List } from "@package/java/util";
export * as pools from "@package/com/faboslav/structurify/common/mixin/structure/pools";
export * as jigsaw from "@package/com/faboslav/structurify/common/mixin/structure/jigsaw";

declare module "@package/com/faboslav/structurify/common/mixin/structure" {
    export class $StructureTemplatePoolMixin {
    }
    export interface $StructureTemplatePoolMixin {
        setMaxSize(arg0: number): void;
        getMaxSize(): number;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        setRawTemplates(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
    }
}
