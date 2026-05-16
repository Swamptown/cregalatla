import { $StructureTemplatePool, $StructureTemplatePool_ } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos_, $Holder_, $Registry } from "@package/net/minecraft/core";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools/alias" {
    export class $Random extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $Random}.
     */
    export type $Random_ = { alias?: $ResourceKey_<$StructureTemplatePool>, targets?: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>,  } | [alias?: $ResourceKey_<$StructureTemplatePool>, targets?: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>, ];
    export class $PoolAliasBinding {
        static random(arg0: $ResourceKey_<$StructureTemplatePool>, arg1: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>): $Random;
        static random(arg0: string, arg1: $SimpleWeightedRandomList<string>): $Random;
        static direct(arg0: $ResourceKey_<$StructureTemplatePool>, arg1: $ResourceKey_<$StructureTemplatePool>): $Direct;
        static direct(arg0: string, arg1: string): $Direct;
        static randomGroup(arg0: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>): $RandomGroup;
        static CODEC: $Codec<$PoolAliasBinding>;
    }
    export interface $PoolAliasBinding {
        forEachResolved(arg0: $RandomSource, arg1: $BiConsumer_<$ResourceKey<$StructureTemplatePool>, $ResourceKey<$StructureTemplatePool>>): void;
        allTargets(): $Stream<$ResourceKey<$StructureTemplatePool>>;
        codec(): $MapCodec<$PoolAliasBinding>;
    }
    export class $RandomGroup extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $RandomGroup}.
     */
    export type $RandomGroup_ = { groups?: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>,  } | [groups?: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>, ];
    export class $PoolAliasBindings {
        static bootstrap(arg0: $Registry<$MapCodec_<$PoolAliasBinding>>): $MapCodec<$PoolAliasBinding>;
        static registerTargetsAsPools(arg0: $BootstrapContext<$StructureTemplatePool_>, arg1: $Holder_<$StructureTemplatePool>, arg2: $List_<$PoolAliasBinding>): void;
        constructor();
    }
    export class $Direct extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $Direct}.
     */
    export type $Direct_ = { alias?: $ResourceKey_<$StructureTemplatePool>, target?: $ResourceKey_<$StructureTemplatePool>,  } | [alias?: $ResourceKey_<$StructureTemplatePool>, target?: $ResourceKey_<$StructureTemplatePool>, ];
    export class $PoolAliasLookup {
        static create(arg0: $List_<$PoolAliasBinding>, arg1: $BlockPos_, arg2: number): $PoolAliasLookup;
        static EMPTY: $PoolAliasLookup;
    }
    export interface $PoolAliasLookup {
        lookup(arg0: $ResourceKey_<$StructureTemplatePool>): $ResourceKey<$StructureTemplatePool>;
    }
    /**
     * Values that may be interpreted as {@link $PoolAliasLookup}.
     */
    export type $PoolAliasLookup_ = ((arg0: $ResourceKey<$StructureTemplatePool>) => $ResourceKey_<$StructureTemplatePool>);
}
