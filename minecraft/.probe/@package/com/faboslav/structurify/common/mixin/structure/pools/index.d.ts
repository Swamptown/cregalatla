import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";

declare module "@package/com/faboslav/structurify/common/mixin/structure/pools" {
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        get template(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    /**
     * Values that may be interpreted as {@link $SinglePoolElementAccessor}.
     */
    export type $SinglePoolElementAccessor_ = (() => $Either<$ResourceLocation_, $StructureTemplate>);
}
