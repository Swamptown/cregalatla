import { $DoubleSupplier, $DoubleSupplier_ } from "@package/java/util/function";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $NormalNoise$NoiseParameters } from "@package/net/minecraft/world/level/levelgen/synth";

declare module "@package/com/blackgear/vanillabackport/common/api/worldgen" {
    export class $ContextNoiseSampler {
    }
    export interface $ContextNoiseSampler {
        getNoiseSampler3D(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>): $DoubleSupplier;
    }
    /**
     * Values that may be interpreted as {@link $ContextNoiseSampler}.
     */
    export type $ContextNoiseSampler_ = ((arg0: $ResourceKey<$NormalNoise$NoiseParameters>) => $DoubleSupplier_);
}
