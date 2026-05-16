import { $TrapezoidHeightAccessor, $UniformHeightAccessor } from "@package/cc/abbie/emi_ores/mixin/accessor";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $VerticalAnchor, $WorldGenerationContext, $VerticalAnchor_ } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/heightproviders" {
    export class $WeightedListHeight extends $HeightProvider {
        static CODEC: $MapCodec<$WeightedListHeight>;
        constructor(arg0: $SimpleWeightedRandomList<$HeightProvider>);
    }
    export class $HeightProvider {
        getType(): $HeightProviderType<never>;
        sample(arg0: $RandomSource, arg1: $WorldGenerationContext): number;
        static CODEC: $Codec<$HeightProvider>;
        constructor();
        get type(): $HeightProviderType<never>;
    }
    export interface $HeightProviderType<P> extends RegistryMarked<RegistryTypes.HeightProviderTypeTag, RegistryTypes.HeightProviderType> {}
    export class $BiasedToBottomHeight extends $HeightProvider {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_, arg2: number): $BiasedToBottomHeight;
        static CODEC: $MapCodec<$BiasedToBottomHeight>;
    }
    export class $TrapezoidHeight extends $HeightProvider implements $TrapezoidHeightAccessor {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_, arg2: number): $TrapezoidHeight;
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_): $TrapezoidHeight;
        getPlateau(): number;
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
        static CODEC: $MapCodec<$TrapezoidHeight>;
        get plateau(): number;
        get maxInclusive(): $VerticalAnchor;
        get minInclusive(): $VerticalAnchor;
    }
    export class $HeightProviderType<P extends $HeightProvider> {
        static VERY_BIASED_TO_BOTTOM: $HeightProviderType<$VeryBiasedToBottomHeight>;
        static BIASED_TO_BOTTOM: $HeightProviderType<$BiasedToBottomHeight>;
        static WEIGHTED_LIST: $HeightProviderType<$WeightedListHeight>;
        static UNIFORM: $HeightProviderType<$UniformHeight>;
        static CONSTANT: $HeightProviderType<$ConstantHeight>;
        static TRAPEZOID: $HeightProviderType<$TrapezoidHeight>;
    }
    export interface $HeightProviderType<P extends $HeightProvider> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $HeightProviderType}.
     */
    export type $HeightProviderType_<P> = RegistryTypes.HeightProviderType | (() => $MapCodec_<P>);
    export class $ConstantHeight extends $HeightProvider {
        static of(arg0: $VerticalAnchor_): $ConstantHeight;
        getValue(): $VerticalAnchor;
        static ZERO: $ConstantHeight;
        static CODEC: $MapCodec<$ConstantHeight>;
        get value(): $VerticalAnchor;
    }
    export class $UniformHeight extends $HeightProvider implements $UniformHeightAccessor {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_): $UniformHeight;
        getMaxInclusive(): $VerticalAnchor;
        getMinInclusive(): $VerticalAnchor;
        static CODEC: $MapCodec<$UniformHeight>;
        get maxInclusive(): $VerticalAnchor;
        get minInclusive(): $VerticalAnchor;
    }
    export class $VeryBiasedToBottomHeight extends $HeightProvider {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_, arg2: number): $VeryBiasedToBottomHeight;
        static CODEC: $MapCodec<$VeryBiasedToBottomHeight>;
    }
}
