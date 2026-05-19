import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $List_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $NoiseChunk$BlockStateFiller_, $NoiseChunk$BlockStateFiller, $DensityFunction$FunctionContext, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/material" {
    export class $WorldGenMaterialRule {
    }
    export interface $WorldGenMaterialRule {
        apply(arg0: $NoiseChunk, arg1: number, arg2: number, arg3: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $WorldGenMaterialRule}.
     */
    export type $WorldGenMaterialRule_ = ((arg0: $NoiseChunk, arg1: number, arg2: number, arg3: number) => $BlockState_);
    export class $MaterialRuleList extends $Record implements $NoiseChunk$BlockStateFiller {
        materialRuleList(): $List<$NoiseChunk$BlockStateFiller>;
        calculate(arg0: $DensityFunction$FunctionContext): $BlockState;
        constructor(arg0: $List_<$NoiseChunk$BlockStateFiller_>);
    }
    /**
     * Values that may be interpreted as {@link $MaterialRuleList}.
     */
    export type $MaterialRuleList_ = { materialRuleList?: $List_<$NoiseChunk$BlockStateFiller_>,  } | [materialRuleList?: $List_<$NoiseChunk$BlockStateFiller_>, ];
}
