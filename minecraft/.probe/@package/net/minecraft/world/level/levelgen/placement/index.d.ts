import { $RarityFilterAccessor, $HeightRangePlacementAccessor, $CountPlacementAccessor } from "@package/cc/abbie/emi_ores/mixin/accessor";
import { $WorldGenLevel, $ChunkPos } from "@package/net/minecraft/world/level";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CarvingMask, $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $List, $List_ } from "@package/java/util";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $BlockPos, $Holder_, $HolderSet, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Enum, $Record } from "@package/java/lang";
import { $Heightmap$Types_, $WorldGenerationContext, $VerticalAnchor_, $GenerationStep$Carving_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/placement" {
    export class $BlockPredicateFilter extends $PlacementFilter {
        static forPredicate(arg0: $BlockPredicate): $BlockPredicateFilter;
        static CODEC: $MapCodec<$BlockPredicateFilter>;
    }
    export class $RarityFilter extends $PlacementFilter implements $RarityFilterAccessor {
        static onAverageOnceEvery(arg0: number): $RarityFilter;
        getChance(): number;
        static CODEC: $MapCodec<$RarityFilter>;
        get chance(): number;
    }
    export class $PlacementFilter extends $PlacementModifier {
        shouldPlace(arg0: $PlacementContext, arg1: $RandomSource, arg2: $BlockPos_): boolean;
        static CODEC: $Codec<$PlacementModifier>;
        constructor();
    }
    export class $PlacedFeature extends $Record {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        placeWithBiomeCheck(arg0: $WorldGenLevel, arg1: $ChunkGenerator, arg2: $RandomSource, arg3: $BlockPos_): boolean;
        placement(): $List<$PlacementModifier>;
        place(arg0: $WorldGenLevel, arg1: $ChunkGenerator, arg2: $RandomSource, arg3: $BlockPos_): boolean;
        feature(): $Holder<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$Holder<$PlacedFeature>>;
        static DIRECT_CODEC: $Codec<$PlacedFeature>;
        static LIST_CODEC: $Codec<$HolderSet<$PlacedFeature>>;
        static LIST_OF_LISTS_CODEC: $Codec<$List<$HolderSet<$PlacedFeature>>>;
        constructor(arg0: $Holder_<$ConfiguredFeature<never, never>>, arg1: $List_<$PlacementModifier>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $PlacedFeature}.
     */
    export type $PlacedFeature_ = RegistryTypes.WorldgenPlacedFeature | { feature?: $Holder_<$ConfiguredFeature<never, never>>, placement?: $List_<$PlacementModifier>,  } | [feature?: $Holder_<$ConfiguredFeature<never, never>>, placement?: $List_<$PlacementModifier>, ];
    export class $NoiseBasedCountPlacement extends $RepeatingPlacement {
        static of(arg0: number, arg1: number, arg2: number): $NoiseBasedCountPlacement;
        static CODEC: $MapCodec<$NoiseBasedCountPlacement>;
    }
    export class $CaveSurface extends $Enum<$CaveSurface> implements $StringRepresentable {
        getY(): number;
        static values(): $CaveSurface[];
        static valueOf(arg0: string): $CaveSurface;
        getDirection(): $Direction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FLOOR: $CaveSurface;
        static CODEC: $Codec<$CaveSurface>;
        static CEILING: $CaveSurface;
        get y(): number;
        get direction(): $Direction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CaveSurface}.
     */
    export type $CaveSurface_ = "ceiling" | "floor";
    export class $BiomeFilter extends $PlacementFilter {
        static biome(): $BiomeFilter;
        static CODEC: $MapCodec<$BiomeFilter>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeFilter}.
     */
    export type $BiomeFilter_ = RegistryTypes.WorldgenBiome | RegExp | $BiomeFilter_[] | { or?: $BiomeFilter_, not?: $BiomeFilter_, id?: RegistryTypes.WorldgenBiome, type?: RegistryTypes.WorldgenBiome, tag?: RegistryTypes.WorldgenBiomeTag,  };
    export class $CountPlacement extends $RepeatingPlacement implements $CountPlacementAccessor {
        static of(arg0: $IntProvider_): $CountPlacement;
        static of(arg0: number): $CountPlacement;
        getCount(): $IntProvider;
        static CODEC: $MapCodec<$CountPlacement>;
    }
    export class $RandomOffsetPlacement extends $PlacementModifier {
        static vertical(arg0: $IntProvider_): $RandomOffsetPlacement;
        static of(arg0: $IntProvider_, arg1: $IntProvider_): $RandomOffsetPlacement;
        static horizontal(arg0: $IntProvider_): $RandomOffsetPlacement;
        static CODEC: $MapCodec<$RandomOffsetPlacement>;
    }
    export class $FixedPlacement extends $PlacementModifier {
        static of(...arg0: $BlockPos_[]): $FixedPlacement;
        static CODEC: $MapCodec<$FixedPlacement>;
    }
    export interface $PlacedFeature extends RegistryMarked<RegistryTypes.WorldgenPlacedFeatureTag, RegistryTypes.WorldgenPlacedFeature> {}
    export class $CarvingMaskPlacement extends $PlacementModifier {
        static forStep(arg0: $GenerationStep$Carving_): $CarvingMaskPlacement;
        static CODEC: $MapCodec<$CarvingMaskPlacement>;
    }
    export class $SurfaceRelativeThresholdFilter extends $PlacementFilter {
        static of(arg0: $Heightmap$Types_, arg1: number, arg2: number): $SurfaceRelativeThresholdFilter;
        static CODEC: $MapCodec<$SurfaceRelativeThresholdFilter>;
    }
    export class $SurfaceWaterDepthFilter extends $PlacementFilter {
        static forMaxDepth(arg0: number): $SurfaceWaterDepthFilter;
        static CODEC: $MapCodec<$SurfaceWaterDepthFilter>;
    }
    export class $EnvironmentScanPlacement extends $PlacementModifier {
        static scanningFor(arg0: $Direction_, arg1: $BlockPredicate, arg2: number): $EnvironmentScanPlacement;
        static scanningFor(arg0: $Direction_, arg1: $BlockPredicate, arg2: $BlockPredicate, arg3: number): $EnvironmentScanPlacement;
        static CODEC: $MapCodec<$EnvironmentScanPlacement>;
    }
    export class $NoiseThresholdCountPlacement extends $RepeatingPlacement {
        static of(arg0: number, arg1: number, arg2: number): $NoiseThresholdCountPlacement;
        static CODEC: $MapCodec<$NoiseThresholdCountPlacement>;
    }
    export class $RepeatingPlacement extends $PlacementModifier {
        count(arg0: $RandomSource, arg1: $BlockPos_): number;
        static CODEC: $Codec<$PlacementModifier>;
        constructor();
    }
    export class $HeightRangePlacement extends $PlacementModifier implements $HeightRangePlacementAccessor {
        static of(arg0: $HeightProvider): $HeightRangePlacement;
        static triangle(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_): $HeightRangePlacement;
        static uniform(arg0: $VerticalAnchor_, arg1: $VerticalAnchor_): $HeightRangePlacement;
        getHeight(): $HeightProvider;
        static CODEC: $MapCodec<$HeightRangePlacement>;
        get height(): $HeightProvider;
    }
    export interface $PlacementModifierType<P> extends RegistryMarked<RegistryTypes.WorldgenPlacementModifierTypeTag, RegistryTypes.WorldgenPlacementModifierType> {}
    /**
     * @deprecated
     */
    export class $CountOnEveryLayerPlacement extends $PlacementModifier {
        static of(arg0: number): $CountOnEveryLayerPlacement;
        static of(arg0: $IntProvider_): $CountOnEveryLayerPlacement;
        static CODEC: $MapCodec<$CountOnEveryLayerPlacement>;
    }
    export class $PlacementModifierType<P extends $PlacementModifier> {
        static ENVIRONMENT_SCAN: $PlacementModifierType<$EnvironmentScanPlacement>;
        static HEIGHT_RANGE: $PlacementModifierType<$HeightRangePlacement>;
        static CARVING_MASK_PLACEMENT: $PlacementModifierType<$CarvingMaskPlacement>;
        static RARITY_FILTER: $PlacementModifierType<$RarityFilter>;
        static FIXED_PLACEMENT: $PlacementModifierType<$FixedPlacement>;
        static SURFACE_RELATIVE_THRESHOLD_FILTER: $PlacementModifierType<$SurfaceRelativeThresholdFilter>;
        static NOISE_THRESHOLD_COUNT: $PlacementModifierType<$NoiseThresholdCountPlacement>;
        static BIOME_FILTER: $PlacementModifierType<$BiomeFilter>;
        static HEIGHTMAP: $PlacementModifierType<$HeightmapPlacement>;
        static BLOCK_PREDICATE_FILTER: $PlacementModifierType<$BlockPredicateFilter>;
        static NOISE_BASED_COUNT: $PlacementModifierType<$NoiseBasedCountPlacement>;
        static SURFACE_WATER_DEPTH_FILTER: $PlacementModifierType<$SurfaceWaterDepthFilter>;
        static COUNT_ON_EVERY_LAYER: $PlacementModifierType<$CountOnEveryLayerPlacement>;
        static IN_SQUARE: $PlacementModifierType<$InSquarePlacement>;
        static RANDOM_OFFSET: $PlacementModifierType<$RandomOffsetPlacement>;
        static COUNT: $PlacementModifierType<$CountPlacement>;
    }
    export interface $PlacementModifierType<P extends $PlacementModifier> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $PlacementModifierType}.
     */
    export type $PlacementModifierType_<P> = RegistryTypes.WorldgenPlacementModifierType | (() => $MapCodec_<P>);
    export class $InSquarePlacement extends $PlacementModifier {
        static spread(): $InSquarePlacement;
        static CODEC: $MapCodec<$InSquarePlacement>;
        constructor();
    }
    export class $PlacementModifier {
        getPositions(arg0: $PlacementContext, arg1: $RandomSource, arg2: $BlockPos_): $Stream<$BlockPos>;
        type(): $PlacementModifierType<never>;
        static CODEC: $Codec<$PlacementModifier>;
        constructor();
    }
    export class $PlacementContext extends $WorldGenerationContext {
        topFeature(): ($PlacedFeature) | undefined;
        getCarvingMask(arg0: $ChunkPos, arg1: $GenerationStep$Carving_): $CarvingMask;
        getLevel(): $WorldGenLevel;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        generator(): $ChunkGenerator;
        getMinBuildHeight(): number;
        getBlockState(arg0: $BlockPos_): $BlockState;
        constructor(arg0: $WorldGenLevel, arg1: $ChunkGenerator, arg2: ($PlacedFeature_) | undefined);
        get level(): $WorldGenLevel;
        get minBuildHeight(): number;
    }
    export class $HeightmapPlacement extends $PlacementModifier {
        static onHeightmap(arg0: $Heightmap$Types_): $HeightmapPlacement;
        static CODEC: $MapCodec<$HeightmapPlacement>;
    }
}
