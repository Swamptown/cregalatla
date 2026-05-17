import { $Holder } from "@package/net/minecraft/core";
import { $IntStream } from "@package/java/util/stream";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $List_ } from "@package/java/util";
import { $Record, $StringBuilder } from "@package/java/lang";
import { $DensityFunction$SimpleFunction, $DensityFunction$FunctionContext, $DensityFunction$Visitor_, $DensityFunction$ContextProvider, $DensityFunction } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource, $KeyDispatchDataCodec } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/synth" {
    export class $NormalNoise {
        getValue(arg0: number, arg1: number, arg2: number): number;
        parameters(): $NormalNoise$NoiseParameters;
        static create(arg0: $RandomSource, arg1: $NormalNoise$NoiseParameters_): $NormalNoise;
        static create(arg0: $RandomSource, arg1: number, ...arg2: number[]): $NormalNoise;
        maxValue(): number;
        /**
         * @deprecated
         */
        static createLegacyNetherBiome(arg0: $RandomSource, arg1: $NormalNoise$NoiseParameters_): $NormalNoise;
        parityConfigString(arg0: $StringBuilder): void;
    }
    export class $BlendedNoise implements $DensityFunction$SimpleFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        static createUnseeded(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): $BlendedNoise;
        withNewRandom(arg0: $RandomSource): $BlendedNoise;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        parityConfigString(arg0: $StringBuilder): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$BlendedNoise>;
        constructor(arg0: $RandomSource, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $PerlinNoise {
        static wrap(arg0: number): number;
        /**
         * @deprecated
         */
        getValue(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
        getValue(arg0: number, arg1: number, arg2: number): number;
        static create(arg0: $RandomSource, arg1: number, arg2: $DoubleList): $PerlinNoise;
        static create(arg0: $RandomSource, arg1: $IntStream): $PerlinNoise;
        static create(arg0: $RandomSource, arg1: $List_<number>): $PerlinNoise;
        static create(arg0: $RandomSource, arg1: number, arg2: number, ...arg3: number[]): $PerlinNoise;
        maxValue(): number;
        /**
         * @deprecated
         */
        static createLegacyForLegacyNetherBiome(arg0: $RandomSource, arg1: number, arg2: $DoubleList): $PerlinNoise;
        firstOctave(): number;
        amplitudes(): $DoubleList;
        maxBrokenValue(arg0: number): number;
        /**
         * @deprecated
         */
        static createLegacyForBlendedNoise(arg0: $RandomSource, arg1: $IntStream): $PerlinNoise;
        getOctaveNoise(arg0: number): $ImprovedNoise;
        parityConfigString(arg0: $StringBuilder): void;
        constructor(arg0: $RandomSource, arg1: $Pair<number, $DoubleList>, arg2: boolean);
    }
    export interface $NormalNoise$NoiseParameters extends RegistryMarked<RegistryTypes.WorldgenNoiseTag, RegistryTypes.WorldgenNoise> {}
    export class $ImprovedNoise {
        noiseWithDerivative(arg0: number, arg1: number, arg2: number, arg3: number[]): number;
        noise(arg0: number, arg1: number, arg2: number): number;
        /**
         * @deprecated
         */
        noise(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): number;
        parityConfigString(arg0: $StringBuilder): void;
        zo: number;
        yo: number;
        xo: number;
        constructor(arg0: $RandomSource);
    }
    export class $PerlinSimplexNoise {
        getValue(arg0: number, arg1: number, arg2: boolean): number;
        constructor(arg0: $RandomSource, arg1: $List_<number>);
    }
    export class $NormalNoise$NoiseParameters extends $Record {
        firstOctave(): number;
        amplitudes(): $DoubleList;
        static CODEC: $Codec<$Holder<$NormalNoise$NoiseParameters>>;
        static DIRECT_CODEC: $Codec<$NormalNoise$NoiseParameters>;
        constructor(arg0: number, arg1: $DoubleList);
        constructor(arg0: number, arg1: number, ...arg2: number[]);
        constructor(arg0: number, arg1: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $NormalNoise$NoiseParameters}.
     */
    export type $NormalNoise$NoiseParameters_ = RegistryTypes.WorldgenNoise | { amplitudes?: $DoubleList, firstOctave?: number,  } | [amplitudes?: $DoubleList, firstOctave?: number, ];
    export class $NoiseUtils {
        static parityNoiseOctaveConfigString(arg0: $StringBuilder, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        static parityNoiseOctaveConfigString(arg0: $StringBuilder, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        static biasTowardsExtreme(arg0: number, arg1: number): number;
        constructor();
    }
    export class $SimplexNoise {
        getValue(arg0: number, arg1: number): number;
        getValue(arg0: number, arg1: number, arg2: number): number;
        static dot(arg0: number[], arg1: number, arg2: number, arg3: number): number;
        zo: number;
        yo: number;
        xo: number;
        static GRADIENT: number[][];
        constructor(arg0: $RandomSource);
    }
}
