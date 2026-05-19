import { $TrapezoidHeightAccessor as $TrapezoidHeightAccessor$1, $UniformHeightAccessor as $UniformHeightAccessor$1 } from "@package/cc/abbie/emi_ores/mixin/accessor";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $VerticalAnchor, $WorldGenerationContext, $VerticalAnchor_ } from "@package/net/minecraft/world/level/levelgen";
import { $TrapezoidHeightAccessor, $UniformHeightAccessor, $BiasedToBottomHeightAccessor, $VeryBiasedToBottomHeightAccessor } from "@package/com/faboslav/structurify/common/mixin/level";
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
    export class $BiasedToBottomHeight extends $HeightProvider implements $BiasedToBottomHeightAccessor {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_, arg2: number): $BiasedToBottomHeight;
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        getInner(): number;
        static CODEC: $MapCodec<$BiasedToBottomHeight>;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
        get inner(): number;
    }
    export class $TrapezoidHeight extends $HeightProvider implements $TrapezoidHeightAccessor, $TrapezoidHeightAccessor$1 {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_): $TrapezoidHeight;
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_, arg2: number): $TrapezoidHeight;
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        getPlateau(): number;
        static CODEC: $MapCodec<$TrapezoidHeight>;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
        get plateau(): number;
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
        getValue(): $VerticalAnchor;
        static of(arg0: $VerticalAnchor_): $ConstantHeight;
        static ZERO: $ConstantHeight;
        static CODEC: $MapCodec<$ConstantHeight>;
        get value(): $VerticalAnchor;
    }
    export class $UniformHeight extends $HeightProvider implements $UniformHeightAccessor, $UniformHeightAccessor$1 {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_): $UniformHeight;
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        static CODEC: $MapCodec<$UniformHeight>;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
    }
    export class $VeryBiasedToBottomHeight extends $HeightProvider implements $VeryBiasedToBottomHeightAccessor {
        static of(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_, arg2: number): $VeryBiasedToBottomHeight;
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        getInner(): number;
        static CODEC: $MapCodec<$VeryBiasedToBottomHeight>;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
        get inner(): number;
    }
}
