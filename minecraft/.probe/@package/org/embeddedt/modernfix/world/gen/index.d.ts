import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ThreadLocal } from "@package/java/lang";
import { $Set } from "@package/java/util";

declare module "@package/org/embeddedt/modernfix/world/gen" {
    export class $ExtendedSurfaceContext {
        static COMPUTED_POSSIBLE_BIOMES: $ThreadLocal<$Set<$ResourceKey<$Biome>>>;
    }
    export interface $ExtendedSurfaceContext {
        mfix$applyPossibleBiomes(): void;
        mfix$getPossibleBiomes(): $Set<$ResourceKey<$Biome>>;
    }
}
