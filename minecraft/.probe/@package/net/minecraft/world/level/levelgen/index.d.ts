import { $BeardifierAccessor, $NoiseChunkAccessor } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $MapCodec_, $DataResult, $DynamicOps, $Codec, $Lifecycle, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $HeightmapAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/combined_heightmap_update";
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_, $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Set_, $Map, $OptionalInt, $List, $Map_, $List_, $OptionalLong } from "@package/java/util";
import { $AquiferOverrideMask, $AquiferOverrideMaskSupplier } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/aquiferoverride";
import { $RandomSource, $CubicSpline, $ToFloatFunction, $KeyDispatchDataCodec, $StringRepresentable, $KeyDispatchDataCodec_ } from "@package/net/minecraft/util";
import { $SurfaceRuleManager$RuleCategory_ } from "@package/terrablender/api";
import { $Supplier_, $Function, $Supplier, $Predicate_, $Predicate, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder$Reference, $RegistryAccess$Frozen, $Holder, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $CarvingContext } from "@package/net/minecraft/world/level/levelgen/carver";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $StringBuilder, $Enum, $Record } from "@package/java/lang";
import { $TerrainAdjustment_, $BoundingBox, $TerrainAdjustment } from "@package/net/minecraft/world/level/levelgen/structure";
import { $NoiseGeneratorSettingsAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $EnhancedBeardifierData } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/beardifier";
import { $ChunkPos, $NoiseColumn, $LevelSimulatedReader, $CustomSpawner, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Blender$BlendingOutput, $Blender } from "@package/net/minecraft/world/level/levelgen/blending";
import { $BiomeResolver_, $BiomeSource, $Climate$ParameterPoint, $Climate$Sampler, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeResolver, $Climate$ParameterPoint_, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $ProtoChunk, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimaryLevelData$SpecialWorldProperty, $PrimaryLevelData$SpecialWorldProperty_ } from "@package/net/minecraft/world/level/storage";
import { $IExtendedNoiseGeneratorSettings } from "@package/terrablender/worldgen";
import { $CaveSurface_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Stream } from "@package/java/util/stream";
import { $DebugChunkGeneratorAccessor } from "@package/net/fabricmc/fabric/mixin/registry/sync";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Double2DoubleFunction } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $LevelStem_, $DimensionType, $LevelStem, $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
export * as structure from "@package/net/minecraft/world/level/levelgen/structure";
export * as placement from "@package/net/minecraft/world/level/levelgen/placement";
export * as feature from "@package/net/minecraft/world/level/levelgen/feature";
export * as blockpredicates from "@package/net/minecraft/world/level/levelgen/blockpredicates";
export * as blending from "@package/net/minecraft/world/level/levelgen/blending";
export * as synth from "@package/net/minecraft/world/level/levelgen/synth";
export * as carver from "@package/net/minecraft/world/level/levelgen/carver";
export * as heightproviders from "@package/net/minecraft/world/level/levelgen/heightproviders";
export * as flat from "@package/net/minecraft/world/level/levelgen/flat";
export * as presets from "@package/net/minecraft/world/level/levelgen/presets";
export * as material from "@package/net/minecraft/world/level/levelgen/material";

declare module "@package/net/minecraft/world/level/levelgen" {
    export class $DensityFunctions$HolderHolder extends $Record implements $DensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        function(): $Holder<$DensityFunction>;
        maxValue(): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$HolderHolder}.
     */
    export type $DensityFunctions$HolderHolder_ = { function?: $Holder_<$DensityFunction>,  } | [function?: $Holder_<$DensityFunction>, ];
    export class $Xoroshiro128PlusPlus {
        nextLong(): number;
        static CODEC: $Codec<$Xoroshiro128PlusPlus>;
        constructor(arg0: $RandomSupport$Seed128bit_);
        constructor(arg0: number, arg1: number);
    }
    export class $DensityFunctions$Constant extends $Record implements $DensityFunction$SimpleFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Constant}.
     */
    export type $DensityFunctions$Constant_ = { value?: number,  } | [value?: number, ];
    export class $SurfaceRules$ConditionSource {
        static bootstrap(arg0: $Registry<$MapCodec_<$SurfaceRules$ConditionSource>>): $MapCodec<$SurfaceRules$ConditionSource>;
        static CODEC: $Codec<$SurfaceRules$ConditionSource>;
    }
    export interface $SurfaceRules$ConditionSource extends $Function<$SurfaceRules$Context, $SurfaceRules$Condition> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
    }
    export class $NoiseChunk$CacheOnce implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    export class $OreVeinifier$VeinType extends $Enum<$OreVeinifier$VeinType> {
    }
    /**
     * Values that may be interpreted as {@link $OreVeinifier$VeinType}.
     */
    export type $OreVeinifier$VeinType_ = "copper" | "iron";
    export class $DensityFunctions$ShiftB extends $Record implements $DensityFunctions$ShiftNoise {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftB}.
     */
    export type $DensityFunctions$ShiftB_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    export class $DensityFunctions$ShiftA extends $Record implements $DensityFunctions$ShiftNoise {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftA}.
     */
    export type $DensityFunctions$ShiftA_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    export class $SurfaceRules$VerticalGradientConditionSource$1VerticalGradientCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseRouter extends $Record {
        depth(): $DensityFunction;
        veinToggle(): $DensityFunction;
        temperature(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $NoiseRouter;
        ridges(): $DensityFunction;
        vegetation(): $DensityFunction;
        continents(): $DensityFunction;
        initialDensityWithoutJaggedness(): $DensityFunction;
        finalDensity(): $DensityFunction;
        erosion(): $DensityFunction;
        barrierNoise(): $DensityFunction;
        fluidLevelFloodednessNoise(): $DensityFunction;
        fluidLevelSpreadNoise(): $DensityFunction;
        veinRidged(): $DensityFunction;
        veinGap(): $DensityFunction;
        lavaNoise(): $DensityFunction;
        static CODEC: $Codec<$NoiseRouter>;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $DensityFunction_, arg7: $DensityFunction_, arg8: $DensityFunction_, arg9: $DensityFunction_, arg10: $DensityFunction_, arg11: $DensityFunction_, arg12: $DensityFunction_, arg13: $DensityFunction_, arg14: $DensityFunction_);
    }
    /**
     * Values that may be interpreted as {@link $NoiseRouter}.
     */
    export type $NoiseRouter_ = { veinGap?: $DensityFunction_, veinRidged?: $DensityFunction_, finalDensity?: $DensityFunction_, temperature?: $DensityFunction_, barrierNoise?: $DensityFunction_, vegetation?: $DensityFunction_, depth?: $DensityFunction_, ridges?: $DensityFunction_, erosion?: $DensityFunction_, fluidLevelSpreadNoise?: $DensityFunction_, fluidLevelFloodednessNoise?: $DensityFunction_, lavaNoise?: $DensityFunction_, veinToggle?: $DensityFunction_, initialDensityWithoutJaggedness?: $DensityFunction_, continents?: $DensityFunction_,  } | [veinGap?: $DensityFunction_, veinRidged?: $DensityFunction_, finalDensity?: $DensityFunction_, temperature?: $DensityFunction_, barrierNoise?: $DensityFunction_, vegetation?: $DensityFunction_, depth?: $DensityFunction_, ridges?: $DensityFunction_, erosion?: $DensityFunction_, fluidLevelSpreadNoise?: $DensityFunction_, fluidLevelFloodednessNoise?: $DensityFunction_, lavaNoise?: $DensityFunction_, veinToggle?: $DensityFunction_, initialDensityWithoutJaggedness?: $DensityFunction_, continents?: $DensityFunction_, ];
    export class $RandomState {
        static create(arg0: $HolderGetter$Provider_, arg1: $ResourceKey_<$NoiseGeneratorSettings>, arg2: number): $RandomState;
        static create(arg0: $NoiseGeneratorSettings_, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>, arg2: number): $RandomState;
        aquiferRandom(): $PositionalRandomFactory;
        oreRandom(): $PositionalRandomFactory;
        surfaceSystem(): $SurfaceSystem;
        sampler(): $Climate$Sampler;
        router(): $NoiseRouter;
        getOrCreateRandomFactory(arg0: $ResourceLocation_): $PositionalRandomFactory;
        getOrCreateNoise(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        random: $PositionalRandomFactory;
    }
    export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
        static values(): $WorldgenRandom$Algorithm[];
        static valueOf(arg0: string): $WorldgenRandom$Algorithm;
        newInstance(arg0: number): $RandomSource;
        static LEGACY: $WorldgenRandom$Algorithm;
        static XOROSHIRO: $WorldgenRandom$Algorithm;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenRandom$Algorithm}.
     */
    export type $WorldgenRandom$Algorithm_ = "legacy" | "xoroshiro";
    export class $DensityFunctions$MulOrAdd extends $Record implements $DensityFunctions$PureTransformer, $DensityFunctions$TwoArgumentSimpleFunction {
        type(): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        transform(arg0: number): number;
        input(): $DensityFunction;
        argument(): number;
        maxValue(): number;
        argument1(): $DensityFunction;
        argument2(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        specificType(): $DensityFunctions$MulOrAdd$Type;
        minValue(): number;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $DensityFunctions$MulOrAdd$Type_, arg1: $DensityFunction_, arg2: number, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$MulOrAdd}.
     */
    export type $DensityFunctions$MulOrAdd_ = { specificType?: $DensityFunctions$MulOrAdd$Type_, minValue?: number, input?: $DensityFunction_, argument?: number, maxValue?: number,  } | [specificType?: $DensityFunctions$MulOrAdd$Type_, minValue?: number, input?: $DensityFunction_, argument?: number, maxValue?: number, ];
    export class $DensityFunctions$PureTransformer {
    }
    export interface $DensityFunctions$PureTransformer extends $DensityFunction {
    }
    export class $RandomState$1NoiseWiringHelper implements $DensityFunction$Visitor {
        visitNoise(arg0: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
    }
    export class $DensityFunctions$MulOrAdd$Type extends $Enum<$DensityFunctions$MulOrAdd$Type> {
        static values(): $DensityFunctions$MulOrAdd$Type[];
        static valueOf(arg0: string): $DensityFunctions$MulOrAdd$Type;
        static ADD: $DensityFunctions$MulOrAdd$Type;
        static MUL: $DensityFunctions$MulOrAdd$Type;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$MulOrAdd$Type}.
     */
    export type $DensityFunctions$MulOrAdd$Type_ = "mul" | "add";
    export class $SurfaceRules$BlockRuleSource extends $Record implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$BlockRuleSource}.
     */
    export type $SurfaceRules$BlockRuleSource_ = { resultState?: $BlockState_, rule?: $SurfaceRules$StateRule_,  } | [resultState?: $BlockState_, rule?: $SurfaceRules$StateRule_, ];
    export class $GenerationStep$Decoration extends $Enum<$GenerationStep$Decoration> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Decoration[];
        static valueOf(arg0: string): $GenerationStep$Decoration;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAW_GENERATION: $GenerationStep$Decoration;
        static UNDERGROUND_STRUCTURES: $GenerationStep$Decoration;
        static LOCAL_MODIFICATIONS: $GenerationStep$Decoration;
        static TOP_LAYER_MODIFICATION: $GenerationStep$Decoration;
        static CODEC: $Codec<$GenerationStep$Decoration>;
        static UNDERGROUND_DECORATION: $GenerationStep$Decoration;
        static LAKES: $GenerationStep$Decoration;
        static SURFACE_STRUCTURES: $GenerationStep$Decoration;
        static STRONGHOLDS: $GenerationStep$Decoration;
        static FLUID_SPRINGS: $GenerationStep$Decoration;
        static VEGETAL_DECORATION: $GenerationStep$Decoration;
        static UNDERGROUND_ORES: $GenerationStep$Decoration;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Decoration}.
     */
    export type $GenerationStep$Decoration_ = "raw_generation" | "lakes" | "local_modifications" | "underground_structures" | "surface_structures" | "strongholds" | "underground_ores" | "underground_decoration" | "fluid_springs" | "vegetal_decoration" | "top_layer_modification";
    export class $SurfaceRules$TestRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$TestRule}.
     */
    export type $SurfaceRules$TestRule_ = { condition?: $SurfaceRules$Condition_, followup?: $SurfaceRules$SurfaceRule_,  } | [condition?: $SurfaceRules$Condition_, followup?: $SurfaceRules$SurfaceRule_, ];
    export class $Aquifer$FluidPicker {
    }
    export interface $Aquifer$FluidPicker {
        computeFluid(arg0: number, arg1: number, arg2: number): $Aquifer$FluidStatus;
    }
    /**
     * Values that may be interpreted as {@link $Aquifer$FluidPicker}.
     */
    export type $Aquifer$FluidPicker_ = ((arg0: number, arg1: number, arg2: number) => $Aquifer$FluidStatus);
    export class $DensityFunctions$RangeChoice extends $Record implements $DensityFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$RangeChoice}.
     */
    export type $DensityFunctions$RangeChoice_ = { whenInRange?: $DensityFunction_, minInclusive?: number, maxExclusive?: number, input?: $DensityFunction_, whenOutOfRange?: $DensityFunction_,  } | [whenInRange?: $DensityFunction_, minInclusive?: number, maxExclusive?: number, input?: $DensityFunction_, whenOutOfRange?: $DensityFunction_, ];
    export class $DensityFunctions$BeardifierMarker extends $Enum<$DensityFunctions$BeardifierMarker> implements $DensityFunctions$BeardifierOrMarker {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BeardifierMarker}.
     */
    export type $DensityFunctions$BeardifierMarker_ = "instance";
    export class $WorldDimensions$Complete extends $Record {
        dimensions(): $Registry<$LevelStem>;
        dimensionsRegistryAccess(): $RegistryAccess$Frozen;
        lifecycle(): $Lifecycle;
        specialWorldProperty(): $PrimaryLevelData$SpecialWorldProperty;
        constructor(dimensions: $Registry<$LevelStem_>, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_);
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions$Complete}.
     */
    export type $WorldDimensions$Complete_ = { specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_, dimensions?: $Registry<$LevelStem_>,  } | [specialWorldProperty?: $PrimaryLevelData$SpecialWorldProperty_, dimensions?: $Registry<$LevelStem_>, ];
    export class $RandomSupport {
        static mixStafford13(arg0: number): number;
        static upgradeSeedTo128bit(arg0: number): $RandomSupport$Seed128bit;
        static seedFromHashOf(arg0: string): $RandomSupport$Seed128bit;
        static upgradeSeedTo128bitUnmixed(arg0: number): $RandomSupport$Seed128bit;
        static generateUniqueSeed(): number;
        static GOLDEN_RATIO_64: number;
        static SILVER_RATIO_64: number;
        constructor();
    }
    export class $XoroshiroRandomSource$XoroshiroPositionalRandomFactory implements $PositionalRandomFactory {
        at(arg0: number, arg1: number, arg2: number): $RandomSource;
        parityConfigString(arg0: $StringBuilder): void;
        fromSeed(arg0: number): $RandomSource;
        fromHashOf(arg0: string): $RandomSource;
        at(arg0: $BlockPos_): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        constructor(arg0: number, arg1: number);
    }
    export class $DensityFunctions$Mapped extends $Record implements $DensityFunctions$PureTransformer {
        type(): $DensityFunctions$Mapped$Type;
        transform(arg0: number): number;
        static create(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction_): $DensityFunctions$Mapped;
        input(): $DensityFunction;
        maxValue(): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunctions$Mapped;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Mapped$Type_, arg1: $DensityFunction_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Mapped}.
     */
    export type $DensityFunctions$Mapped_ = { type?: $DensityFunctions$Mapped$Type_, maxValue?: number, minValue?: number, input?: $DensityFunction_,  } | [type?: $DensityFunctions$Mapped$Type_, maxValue?: number, minValue?: number, input?: $DensityFunction_, ];
    export class $SurfaceRules$SequenceRule extends $Record implements $SurfaceRules$SurfaceRule {
        rules(): $List<$SurfaceRules$SurfaceRule>;
        tryApply(arg0: number, arg1: number, arg2: number): $BlockState;
        constructor(arg0: $List_<$SurfaceRules$SurfaceRule_>);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SequenceRule}.
     */
    export type $SurfaceRules$SequenceRule_ = { rules?: $List_<$SurfaceRules$SurfaceRule_>,  } | [rules?: $List_<$SurfaceRules$SurfaceRule_>, ];
    export class $PhantomSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$StoneDepthCheck}.
     */
    export type $SurfaceRules$StoneDepthCheck_ = { offset?: number, secondaryDepthRange?: number, surfaceType?: $CaveSurface_, addSurfaceDepth?: boolean,  } | [offset?: number, secondaryDepthRange?: number, surfaceType?: $CaveSurface_, addSurfaceDepth?: boolean, ];
    export class $NoiseRouterData$QuantizedSpaghettiRarity {
    }
    export class $Density {
        static UNRECOVERABLY_DENSE: number;
        static UNRECOVERABLY_THIN: number;
        static SURFACE: number;
        constructor();
    }
    export class $DensityFunction$SimpleFunction {
    }
    export interface $DensityFunction$SimpleFunction extends $DensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
    }
    export class $SurfaceRules$StateRule extends $Record implements $SurfaceRules$SurfaceRule {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$StateRule}.
     */
    export type $SurfaceRules$StateRule_ = { state?: $BlockState_,  } | [state?: $BlockState_, ];
    export class $SurfaceRules$RuleSource {
        static bootstrap(arg0: $Registry<$MapCodec_<$SurfaceRules$RuleSource>>): $MapCodec<$SurfaceRules$RuleSource>;
        static CODEC: $Codec<$SurfaceRules$RuleSource>;
    }
    export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
    }
    export class $Aquifer {
        static create(arg0: $NoiseChunk, arg1: $ChunkPos, arg2: $NoiseRouter_, arg3: $PositionalRandomFactory, arg4: number, arg5: number, arg6: $Aquifer$FluidPicker_): $Aquifer;
        static createDisabled(arg0: $Aquifer$FluidPicker_): $Aquifer;
    }
    export interface $Aquifer {
        shouldScheduleFluidUpdate(): boolean;
        computeSubstance(arg0: $DensityFunction$FunctionContext, arg1: number): $BlockState;
    }
    export class $DensityFunction$Visitor {
    }
    export interface $DensityFunction$Visitor {
        apply(arg0: $DensityFunction_): $DensityFunction;
        visitNoise(arg0: $DensityFunction$NoiseHolder_): $DensityFunction$NoiseHolder;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$Visitor}.
     */
    export type $DensityFunction$Visitor_ = ((arg0: $DensityFunction) => $DensityFunction_);
    export class $Column$Ray extends $Column {
        constructor(arg0: number, arg1: boolean);
    }
    export class $PatrolSpawner implements $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
        constructor();
    }
    export class $DensityFunction {
        static CODEC: $Codec<$Holder<$DensityFunction>>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
        static HOLDER_HELPER_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        square(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction}.
     */
    export type $DensityFunction_ = RegistryTypes.WorldgenDensityFunction;
    export class $NoiseChunk$CacheAllInCell implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    export class $DensityFunction$SinglePointContext extends $Record implements $DensityFunction$FunctionContext {
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        constructor(arg0: number, arg1: number, arg2: number);
        get blender(): $Blender;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$SinglePointContext}.
     */
    export type $DensityFunction$SinglePointContext_ = { blockY?: number, blockZ?: number, blockX?: number,  } | [blockY?: number, blockZ?: number, blockX?: number, ];
    export class $LegacyRandomSource$LegacyPositionalRandomFactory implements $PositionalRandomFactory {
        at(arg0: number, arg1: number, arg2: number): $RandomSource;
        parityConfigString(arg0: $StringBuilder): void;
        fromSeed(arg0: number): $RandomSource;
        fromHashOf(arg0: string): $RandomSource;
        at(arg0: $BlockPos_): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        constructor(arg0: number);
    }
    export class $WorldGenerationContext {
        getMinGenY(): number;
        getGenDepth(): number;
        constructor(arg0: $ChunkGenerator, arg1: $LevelHeightAccessor);
        get minGenY(): number;
        get genDepth(): number;
    }
    export class $NoiseChunk$NoiseInterpolator implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        wrapped(): $DensityFunction;
        selectCellYZ(arg0: number, arg1: number): void;
        updateForY(arg0: number): void;
        updateForX(arg0: number): void;
        updateForZ(arg0: number): void;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        this$0: $NoiseChunk;
        slice0: number[][];
        slice1: number[][];
        constructor(arg0: $NoiseChunk, arg1: $DensityFunction_);
    }
    export class $NoiseChunk$BlockStateFiller {
    }
    export interface $NoiseChunk$BlockStateFiller {
        calculate(arg0: $DensityFunction$FunctionContext): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $NoiseChunk$BlockStateFiller}.
     */
    export type $NoiseChunk$BlockStateFiller_ = ((arg0: $DensityFunction$FunctionContext) => $BlockState_);
    export class $DensityFunctions$Mapped$Type extends $Enum<$DensityFunctions$Mapped$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$Mapped$Type[];
        static valueOf(arg0: string): $DensityFunctions$Mapped$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HALF_NEGATIVE: $DensityFunctions$Mapped$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$Mapped>;
        static ABS: $DensityFunctions$Mapped$Type;
        static SQUARE: $DensityFunctions$Mapped$Type;
        static QUARTER_NEGATIVE: $DensityFunctions$Mapped$Type;
        static SQUEEZE: $DensityFunctions$Mapped$Type;
        static CUBE: $DensityFunctions$Mapped$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Mapped$Type}.
     */
    export type $DensityFunctions$Mapped$Type_ = "abs" | "square" | "cube" | "half_negative" | "quarter_negative" | "squeeze";
    export class $NoiseChunk$BlendAlpha implements $NoiseChunk$NoiseChunkDensityFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    export class $GenerationStep$Carving extends $Enum<$GenerationStep$Carving> implements $StringRepresentable {
        getName(): string;
        static values(): $GenerationStep$Carving[];
        static valueOf(arg0: string): $GenerationStep$Carving;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$GenerationStep$Carving>;
        static LIQUID: $GenerationStep$Carving;
        static AIR: $GenerationStep$Carving;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GenerationStep$Carving}.
     */
    export type $GenerationStep$Carving_ = "air" | "liquid";
    export class $WorldDimensions extends $Record {
        get(arg0: $ResourceKey_<$LevelStem>): ($LevelStem) | undefined;
        dimensions(): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        isDebug(): boolean;
        levels(): $ImmutableSet<$ResourceKey<$Level>>;
        static checkStability(arg0: $ResourceKey_<$LevelStem>, arg1: $LevelStem_): $Lifecycle;
        static withOverworld(arg0: $Registry<$DimensionType_>, arg1: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, arg2: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static withOverworld(arg0: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, arg1: $Holder_<$DimensionType>, arg2: $ChunkGenerator): $Map<$ResourceKey<$LevelStem>, $LevelStem>;
        static keysInOrder(arg0: $Stream<$ResourceKey_<$LevelStem>>): $Stream<$ResourceKey<$LevelStem>>;
        overworld(): $ChunkGenerator;
        bake(arg0: $Registry<$LevelStem_>): $WorldDimensions$Complete;
        replaceOverworldGenerator(arg0: $RegistryAccess, arg1: $ChunkGenerator): $WorldDimensions;
        static CODEC: $MapCodec<$WorldDimensions>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
        constructor(arg0: $Registry<$LevelStem_>);
        get debug(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions}.
     */
    export type $WorldDimensions_ = { dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>,  } | [dimensions?: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>, ];
    export class $DensityFunctions$Marker extends $Record implements $DensityFunctions$MarkerOrMarked {
        type(): $DensityFunctions$Marker$Type;
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        wrapped(): $DensityFunction;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        constructor(arg0: $DensityFunctions$Marker$Type_, arg1: $DensityFunction_);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker}.
     */
    export type $DensityFunctions$Marker_ = { type?: $DensityFunctions$Marker$Type_, wrapped?: $DensityFunction_,  } | [type?: $DensityFunctions$Marker$Type_, wrapped?: $DensityFunction_, ];
    export class $WorldGenSettings extends $Record {
        static encode<T>(arg0: $DynamicOps<T>, arg1: $WorldOptions, arg2: $RegistryAccess): $DataResult<T>;
        static encode<T>(arg0: $DynamicOps<T>, arg1: $WorldOptions, arg2: $WorldDimensions_): $DataResult<T>;
        dimensions(): $WorldDimensions;
        options(): $WorldOptions;
        static CODEC: $Codec<$WorldGenSettings>;
        constructor(arg0: $WorldOptions, arg1: $WorldDimensions_);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenSettings}.
     */
    export type $WorldGenSettings_ = { options?: $WorldOptions, dimensions?: $WorldDimensions_,  } | [options?: $WorldOptions, dimensions?: $WorldDimensions_, ];
    export class $SurfaceRules$LazyXZCondition extends $SurfaceRules$LazyCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseGeneratorSettings extends $Record implements $NoiseGeneratorSettingsAccessor, $IExtendedNoiseGeneratorSettings {
        static end(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static dummy(): $NoiseGeneratorSettings;
        static bootstrap(arg0: $BootstrapContext<$NoiseGeneratorSettings_>): void;
        surfaceRule(): $SurfaceRules$RuleSource;
        seaLevel(): number;
        defaultBlock(): $BlockState;
        defaultFluid(): $BlockState;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        noiseSettings(): $NoiseSettings;
        useLegacyRandomSource(): boolean;
        static nether(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        noiseRouter(): $NoiseRouter;
        aquifersEnabled(): boolean;
        oreVeinsEnabled(): boolean;
        isAquifersEnabled(): boolean;
        getRandomSource(): $WorldgenRandom$Algorithm;
        static caves(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        static floatingIslands(arg0: $BootstrapContext<never>): $NoiseGeneratorSettings;
        setRuleCategory(arg0: $SurfaceRuleManager$RuleCategory_): void;
        /**
         * @deprecated
         */
        disableMobGeneration(): boolean;
        static overworld(arg0: $BootstrapContext<never>, arg1: boolean, arg2: boolean): $NoiseGeneratorSettings;
        setSurfaceRule(arg0: $SurfaceRules$RuleSource): void;
        static AMPLIFIED: $ResourceKey<$NoiseGeneratorSettings>;
        static CODEC: $Codec<$Holder<$NoiseGeneratorSettings>>;
        static OVERWORLD: $ResourceKey<$NoiseGeneratorSettings>;
        static NETHER: $ResourceKey<$NoiseGeneratorSettings>;
        static CAVES: $ResourceKey<$NoiseGeneratorSettings>;
        static DIRECT_CODEC: $Codec<$NoiseGeneratorSettings>;
        static END: $ResourceKey<$NoiseGeneratorSettings>;
        static FLOATING_ISLANDS: $ResourceKey<$NoiseGeneratorSettings>;
        static LARGE_BIOMES: $ResourceKey<$NoiseGeneratorSettings>;
        constructor(arg0: $NoiseSettings_, arg1: $BlockState_, arg2: $BlockState_, arg3: $NoiseRouter_, arg4: $SurfaceRules$RuleSource, arg5: $List_<$Climate$ParameterPoint_>, arg6: number, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean);
        get randomSource(): $WorldgenRandom$Algorithm;
        set ruleCategory(value: $SurfaceRuleManager$RuleCategory_);
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettings}.
     */
    export type $NoiseGeneratorSettings_ = RegistryTypes.WorldgenNoiseSettings | { useLegacyRandomSource?: boolean, disableMobGeneration?: boolean, surfaceRule?: $SurfaceRules$RuleSource, oreVeinsEnabled?: boolean, defaultBlock?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultFluid?: $BlockState_, spawnTarget?: $List_<$Climate$ParameterPoint_>, noiseRouter?: $NoiseRouter_, seaLevel?: number, aquifersEnabled?: boolean,  } | [useLegacyRandomSource?: boolean, disableMobGeneration?: boolean, surfaceRule?: $SurfaceRules$RuleSource, oreVeinsEnabled?: boolean, defaultBlock?: $BlockState_, noiseSettings?: $NoiseSettings_, defaultFluid?: $BlockState_, spawnTarget?: $List_<$Climate$ParameterPoint_>, noiseRouter?: $NoiseRouter_, seaLevel?: number, aquifersEnabled?: boolean, ];
    export class $DensityFunctions$Shift extends $Record implements $DensityFunctions$ShiftNoise {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Shift}.
     */
    export type $DensityFunctions$Shift_ = { offsetNoise?: $DensityFunction$NoiseHolder_,  } | [offsetNoise?: $DensityFunction$NoiseHolder_, ];
    /**
     * @deprecated
     */
    export class $DebugLevelSource extends $ChunkGenerator implements $DebugChunkGeneratorAccessor {
        static initValidStates(): void;
        static setBLOCK_STATES$fabric_registry_sync_v0_$md$d858b6$0(arg0: $List_<any>): void;
        static setX_SIDE_LENGTH$fabric_registry_sync_v0_$md$d858b6$1(arg0: number): void;
        static setZ_SIDE_LENGTH$fabric_registry_sync_v0_$md$d858b6$2(arg0: number): void;
        static getBlockStateFor(arg0: number, arg1: number): $BlockState;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$DebugLevelSource>;
        static BARRIER_HEIGHT: number;
        static BARRIER: $BlockState;
        biomeSource: $BiomeSource;
        static AIR: $BlockState;
        static HEIGHT: number;
        constructor(arg0: $Holder$Reference<$Biome_>);
        static set BLOCK_STATES$fabric_registry_sync_v0_$md$d858b6$0(value: $List_<any>);
        static set x_SIDE_LENGTH$fabric_registry_sync_v0_$md$d858b6$1(value: number);
        static set z_SIDE_LENGTH$fabric_registry_sync_v0_$md$d858b6$2(value: number);
    }
    export class $WorldOptions {
        seed(): number;
        withBonusChest(arg0: boolean): $WorldOptions;
        withSeed(arg0: $OptionalLong): $WorldOptions;
        generateBonusChest(): boolean;
        isOldCustomizedWorld(): boolean;
        generateStructures(): boolean;
        static randomSeed(): number;
        static defaultWithRandomSeed(): $WorldOptions;
        static parseSeed(arg0: string): $OptionalLong;
        withStructures(arg0: boolean): $WorldOptions;
        static CODEC: $MapCodec<$WorldOptions>;
        static DEMO_OPTIONS: $WorldOptions;
        constructor(arg0: number, arg1: boolean, arg2: boolean);
        get oldCustomizedWorld(): boolean;
    }
    export class $GeodeLayerSettings {
        filling: number;
        static CODEC: $Codec<$GeodeLayerSettings>;
        outerLayer: number;
        innerLayer: number;
        middleLayer: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $Beardifier implements $DensityFunctions$BeardifierOrMarker, $EnhancedBeardifierData, $BeardifierAccessor {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        static forStructuresInChunk(arg0: $StructureManager, arg1: $ChunkPos): $Beardifier;
        static getBuryContribution(arg0: number, arg1: number, arg2: number): number;
        static getBeardContribution(arg0: number, arg1: number, arg2: number, arg3: number): number;
        handler$zic000$yungsapi$calculateDensity(arg0: $DensityFunction$FunctionContext, arg1: $CallbackInfoReturnable<any>): void;
        getEnhancedPieceIterator(): $ObjectListIterator<any>;
        setEnhancedPieceIterator(arg0: $ObjectListIterator<any>): void;
        getEnhancedJunctionIterator(): $ObjectListIterator<any>;
        setEnhancedJunctionIterator(arg0: $ObjectListIterator<any>): void;
        getNoiseChunk(): $NoiseChunk;
        setNoiseChunk(arg0: $NoiseChunk): void;
        minValue(): number;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        getPieceIterator(): $ObjectListIterator<$Beardifier$Rigid>;
        getJunctionIterator(): $ObjectListIterator<$JigsawJunction>;
        junctionIterator: $ObjectListIterator<$JigsawJunction>;
        static BEARD_KERNEL_RADIUS: number;
        pieceIterator: $ObjectListIterator<$Beardifier$Rigid>;
        constructor(arg0: $ObjectListIterator<$Beardifier$Rigid_>, arg1: $ObjectListIterator<$JigsawJunction>);
    }
    export class $SurfaceRules$YConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$YConditionSource}.
     */
    export type $SurfaceRules$YConditionSource_ = { anchor?: $VerticalAnchor_, surfaceDepthMultiplier?: number, addStoneDepth?: boolean,  } | [anchor?: $VerticalAnchor_, surfaceDepthMultiplier?: number, addStoneDepth?: boolean, ];
    export class $SurfaceRules$WaterConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$WaterConditionSource}.
     */
    export type $SurfaceRules$WaterConditionSource_ = { addStoneDepth?: boolean, surfaceDepthMultiplier?: number, offset?: number,  } | [addStoneDepth?: boolean, surfaceDepthMultiplier?: number, offset?: number, ];
    export class $SurfaceRules$NoiseThresholdConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NoiseThresholdConditionSource}.
     */
    export type $SurfaceRules$NoiseThresholdConditionSource_ = { noise?: $ResourceKey_<$NormalNoise$NoiseParameters>, maxThreshold?: number, minThreshold?: number,  } | [noise?: $ResourceKey_<$NormalNoise$NoiseParameters>, maxThreshold?: number, minThreshold?: number, ];
    export class $Heightmap implements $HeightmapAccessor {
        update(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): boolean;
        getRawData(): number[];
        getHighestTaken(arg0: number, arg1: number): number;
        setRawData(arg0: $ChunkAccess, arg1: $Heightmap$Types_, arg2: number[]): void;
        static primeHeightmaps(arg0: $ChunkAccess, arg1: $Set_<$Heightmap$Types_>): void;
        getFirstAvailable(arg0: number, arg1: number): number;
        callSet(arg0: number, arg1: number, arg2: number): void;
        getBlockPredicate(): $Predicate<$BlockState>;
        static MATERIAL_MOTION_BLOCKING: $Predicate<$BlockState>;
        static NOT_AIR: $Predicate<$BlockState>;
        constructor(arg0: $ChunkAccess, arg1: $Heightmap$Types_);
        get blockPredicate(): $Predicate<$BlockState>;
    }
    export class $SurfaceRules$LazyCondition implements $SurfaceRules$Condition {
        test(): boolean;
        compute(): boolean;
        getContextLastUpdate(): number;
        result: boolean;
        context: $SurfaceRules$Context;
        constructor(arg0: $SurfaceRules$Context);
        get contextLastUpdate(): number;
    }
    export class $NoiseRouterData {
        static end(arg0: $HolderGetter<$DensityFunction_>): $NoiseRouter;
        static bootstrap(arg0: $BootstrapContext<$DensityFunction_>): $Holder<$DensityFunction>;
        static peaksAndValleys(arg0: number): number;
        static nether(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static caves(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static floatingIslands(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>): $NoiseRouter;
        static none(): $NoiseRouter;
        static overworld(arg0: $HolderGetter<$DensityFunction_>, arg1: $HolderGetter<$NormalNoise$NoiseParameters_>, arg2: boolean, arg3: boolean): $NoiseRouter;
        static ISLAND_CHUNK_DISTANCE: number;
        static CONTINENTS: $ResourceKey<$DensityFunction>;
        static JAGGEDNESS: $ResourceKey<$DensityFunction>;
        static GLOBAL_OFFSET: number;
        static RIDGES_FOLDED: $ResourceKey<$DensityFunction>;
        static FACTOR: $ResourceKey<$DensityFunction>;
        static EROSION: $ResourceKey<$DensityFunction>;
        static ISLAND_CHUNK_DISTANCE_SQR: number;
        static EROSION_LARGE: $ResourceKey<$DensityFunction>;
        static OFFSET: $ResourceKey<$DensityFunction>;
        static CONTINENTS_LARGE: $ResourceKey<$DensityFunction>;
        static RIDGES: $ResourceKey<$DensityFunction>;
        static DEPTH: $ResourceKey<$DensityFunction>;
        constructor();
    }
    export class $SurfaceRules$StoneDepthCheck$1StoneDepthCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $BelowZeroRetrogen {
        static read(arg0: $CompoundTag_): $BelowZeroRetrogen;
        static replaceOldBedrock(arg0: $ProtoChunk): void;
        hasBedrockHoles(): boolean;
        applyBedrockMask(arg0: $ProtoChunk): void;
        targetStatus(): $ChunkStatus;
        static getBiomeResolver(arg0: $BiomeResolver_, arg1: $ChunkAccess): $BiomeResolver;
        hasBedrockHole(arg0: number, arg1: number): boolean;
        static CODEC: $Codec<$BelowZeroRetrogen>;
        static UPGRADE_HEIGHT_ACCESSOR: $LevelHeightAccessor;
    }
    export class $PositionalRandomFactory {
    }
    export interface $PositionalRandomFactory {
        at(arg0: $BlockPos_): $RandomSource;
        at(arg0: number, arg1: number, arg2: number): $RandomSource;
        parityConfigString(arg0: $StringBuilder): void;
        fromSeed(arg0: number): $RandomSource;
        fromHashOf(arg0: $ResourceLocation_): $RandomSource;
        fromHashOf(arg0: string): $RandomSource;
    }
    export class $DensityFunctions$ShiftNoise {
    }
    export interface $DensityFunctions$ShiftNoise extends $DensityFunction {
    }
    export class $SurfaceRules$Context$TemperatureHelperCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $DensityFunctions$Spline$Coordinate extends $Record implements $ToFloatFunction<$DensityFunctions$Spline$Point> {
        apply(arg0: $DensityFunctions$Spline$Point_): number;
        function(): $Holder<$DensityFunction>;
        maxValue(): number;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunctions$Spline$Coordinate;
        minValue(): number;
        comap<C2>(arg0: $Function_<C2, $DensityFunctions$Spline$Point>): $ToFloatFunction<C2>;
        static CODEC: $Codec<$DensityFunctions$Spline$Coordinate>;
        constructor(arg0: $Holder_<$DensityFunction>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline$Coordinate}.
     */
    export type $DensityFunctions$Spline$Coordinate_ = { function?: $Holder_<$DensityFunction>,  } | [function?: $Holder_<$DensityFunction>, ];
    export class $SurfaceRules$Steep extends $Enum<$SurfaceRules$Steep> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Steep}.
     */
    export type $SurfaceRules$Steep_ = "instance";
    export class $Heightmap$Usage extends $Enum<$Heightmap$Usage> {
        static values(): $Heightmap$Usage[];
        static valueOf(arg0: string): $Heightmap$Usage;
        static WORLDGEN: $Heightmap$Usage;
        static LIVE_WORLD: $Heightmap$Usage;
        static CLIENT: $Heightmap$Usage;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Usage}.
     */
    export type $Heightmap$Usage_ = "worldgen" | "live_world" | "client";
    export class $VerticalAnchor$AboveBottom extends $Record implements $VerticalAnchor {
        offset(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$AboveBottom>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$AboveBottom}.
     */
    export type $VerticalAnchor$AboveBottom_ = { offset?: number,  } | [offset?: number, ];
    export class $Beardifier$Rigid extends $Record {
        box(): $BoundingBox;
        groundLevelDelta(): number;
        terrainAdjustment(): $TerrainAdjustment;
        constructor(box: $BoundingBox, terrainAdjustment: $TerrainAdjustment_, groundLevelDelta: number);
    }
    /**
     * Values that may be interpreted as {@link $Beardifier$Rigid}.
     */
    export type $Beardifier$Rigid_ = { terrainAdjustment?: $TerrainAdjustment_, groundLevelDelta?: number, box?: $BoundingBox,  } | [terrainAdjustment?: $TerrainAdjustment_, groundLevelDelta?: number, box?: $BoundingBox, ];
    export class $XoroshiroRandomSource implements $RandomSource {
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        setSeed(arg0: number): void;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextGaussian(): number;
        fork(): $RandomSource;
        consumeCount(arg0: number): void;
        forkPositional(): $PositionalRandomFactory;
        nextInt(arg0: number, arg1: number): number;
        triangle(arg0: number, arg1: number): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        static CODEC: $Codec<$XoroshiroRandomSource>;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $RandomSupport$Seed128bit_);
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $SurfaceRules$AbovePreliminarySurface extends $Enum<$SurfaceRules$AbovePreliminarySurface> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$AbovePreliminarySurface}.
     */
    export type $SurfaceRules$AbovePreliminarySurface_ = "instance";
    export class $DensityFunctions$BlendDensity extends $Record implements $DensityFunctions$TransformerWithContext {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendDensity}.
     */
    export type $DensityFunctions$BlendDensity_ = { input?: $DensityFunction_,  } | [input?: $DensityFunction_, ];
    export class $SurfaceRules$NoiseThresholdConditionSource$1NoiseThresholdCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules$VerticalGradientConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$VerticalGradientConditionSource}.
     */
    export type $SurfaceRules$VerticalGradientConditionSource_ = { falseAtAndAbove?: $VerticalAnchor_, randomName?: $ResourceLocation_, trueAtAndBelow?: $VerticalAnchor_,  } | [falseAtAndAbove?: $VerticalAnchor_, randomName?: $ResourceLocation_, trueAtAndBelow?: $VerticalAnchor_, ];
    export class $DensityFunctions$BlendOffset extends $Enum<$DensityFunctions$BlendOffset> implements $DensityFunction$SimpleFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendOffset}.
     */
    export type $DensityFunctions$BlendOffset_ = "instance";
    export class $VerticalAnchor {
        static bottom(): $VerticalAnchor;
        static top(): $VerticalAnchor;
        static absolute(arg0: number): $VerticalAnchor;
        static aboveBottom(arg0: number): $VerticalAnchor;
        static belowTop(arg0: number): $VerticalAnchor;
        static CODEC: $Codec<$VerticalAnchor>;
        static TOP: $VerticalAnchor;
        static BOTTOM: $VerticalAnchor;
    }
    export interface $VerticalAnchor {
        resolveY(arg0: $WorldGenerationContext): number;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor}.
     */
    export type $VerticalAnchor_ = ((arg0: $WorldGenerationContext) => number);
    export class $VerticalAnchor$BelowTop extends $Record implements $VerticalAnchor {
        offset(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$BelowTop>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$BelowTop}.
     */
    export type $VerticalAnchor$BelowTop_ = { offset?: number,  } | [offset?: number, ];
    export class $DensityFunctions$TransformerWithContext {
    }
    export interface $DensityFunctions$TransformerWithContext extends $DensityFunction {
    }
    export class $SurfaceRules$SurfaceRule {
    }
    export interface $SurfaceRules$SurfaceRule {
        tryApply(arg0: number, arg1: number, arg2: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SurfaceRule}.
     */
    export type $SurfaceRules$SurfaceRule_ = ((arg0: number, arg1: number, arg2: number) => $BlockState_);
    export class $DensityFunction$NoiseHolder extends $Record {
        getValue(arg0: number, arg1: number, arg2: number): number;
        maxValue(): number;
        noiseData(): $Holder<$NormalNoise$NoiseParameters>;
        noise(): $NormalNoise;
        static CODEC: $Codec<$DensityFunction$NoiseHolder>;
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>);
        constructor(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: $NormalNoise);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunction$NoiseHolder}.
     */
    export type $DensityFunction$NoiseHolder_ = { noise?: $NormalNoise, noiseData?: $Holder_<$NormalNoise$NoiseParameters>,  } | [noise?: $NormalNoise, noiseData?: $Holder_<$NormalNoise$NoiseParameters>, ];
    export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext, $AquiferOverrideMaskSupplier, $NoiseChunkAccessor {
        wrap(arg0: $DensityFunction_): $DensityFunction;
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        cachedClimateSampler(arg0: $NoiseRouter_, arg1: $List_<$Climate$ParameterPoint_>): $Climate$Sampler;
        static forChunk(arg0: $ChunkAccess, arg1: $RandomState, arg2: $DensityFunctions$BeardifierOrMarker, arg3: $NoiseGeneratorSettings_, arg4: $Aquifer$FluidPicker_, arg5: $Blender): $NoiseChunk;
        initializeForFirstCellX(): void;
        advanceCellX(arg0: number): void;
        selectCellYZ(arg0: number, arg1: number): void;
        updateForY(arg0: number, arg1: number): void;
        updateForX(arg0: number, arg1: number): void;
        updateForZ(arg0: number, arg1: number): void;
        getInterpolatedState(): $BlockState;
        stopInterpolation(): void;
        aquifer(): $Aquifer;
        cellWidth(): number;
        cellHeight(): number;
        swapSlices(): void;
        fillAllDirectly(arg0: number[], arg1: $DensityFunction_): void;
        preliminarySurfaceLevel(arg0: number, arg1: number): number;
        getOrComputeBlendingOutput(arg0: number, arg1: number): $Blender$BlendingOutput;
        getOrCreateAquiferOverrideMask(arg0: $Supplier_<any>): $AquiferOverrideMask;
        forIndex(arg0: number): $DensityFunction$FunctionContext;
        getNoiseSettings(): $NoiseSettings;
        initialDensityNoJaggedness: $DensityFunction;
        cellCountY: number;
        arrayInterpolationCounter: number;
        firstNoiseZ: number;
        fillingCell: boolean;
        lastBlendingOutput: $Blender$BlendingOutput;
        blender: $Blender;
        lastBlendingDataPos: number;
        blendOffset: $NoiseChunk$FlatCache;
        inCellZ: number;
        inCellY: number;
        inCellX: number;
        cellCaches: $List<$NoiseChunk$CacheAllInCell>;
        blockStateRule: $NoiseChunk$BlockStateFiller;
        cellCountXZ: number;
        firstNoiseX: number;
        interpolators: $List<$NoiseChunk$NoiseInterpolator>;
        wrapped: $Map<$DensityFunction, $DensityFunction>;
        interpolationCounter: number;
        cellStartBlockY: number;
        cellStartBlockZ: number;
        noiseSettings: $NoiseSettings;
        blendAlpha: $NoiseChunk$FlatCache;
        cellStartBlockX: number;
        interpolating: boolean;
        cellNoiseMinY: number;
        sliceFillingContextProvider: $DensityFunction$ContextProvider;
        noiseSizeXZ: number;
        firstCellZ: number;
        beardifier: $DensityFunctions$BeardifierOrMarker;
        arrayIndex: number;
        firstCellX: number;
        constructor(arg0: number, arg1: $RandomState, arg2: number, arg3: number, arg4: $NoiseSettings_, arg5: $DensityFunctions$BeardifierOrMarker, arg6: $NoiseGeneratorSettings_, arg7: $Aquifer$FluidPicker_, arg8: $Blender);
        get interpolatedState(): $BlockState;
    }
    export class $DensityFunctions$Marker$Type extends $Enum<$DensityFunctions$Marker$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$Marker$Type[];
        static valueOf(arg0: string): $DensityFunctions$Marker$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CacheAllInCell: $DensityFunctions$Marker$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$MarkerOrMarked>;
        static CacheOnce: $DensityFunctions$Marker$Type;
        static FlatCache: $DensityFunctions$Marker$Type;
        static Interpolated: $DensityFunctions$Marker$Type;
        static Cache2D: $DensityFunctions$Marker$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Marker$Type}.
     */
    export type $DensityFunctions$Marker$Type_ = "interpolated" | "flat_cache" | "cache_2d" | "cache_once" | "cache_all_in_cell";
    export class $DensityFunctions$WeirdScaledSampler extends $Record implements $DensityFunctions$TransformerWithContext {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$WeirdScaledSampler}.
     */
    export type $DensityFunctions$WeirdScaledSampler_ = { input?: $DensityFunction_, noise?: $DensityFunction$NoiseHolder_, rarityValueMapper?: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_,  } | [input?: $DensityFunction_, noise?: $DensityFunction$NoiseHolder_, rarityValueMapper?: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_, ];
    export class $VerticalAnchor$Absolute extends $Record implements $VerticalAnchor {
        y(): number;
        resolveY(arg0: $WorldGenerationContext): number;
        static CODEC: $Codec<$VerticalAnchor$Absolute>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchor$Absolute}.
     */
    export type $VerticalAnchor$Absolute_ = { y?: number,  } | [y?: number, ];
    export class $LegacyRandomSource implements $BitRandomSource {
        next(arg0: number): number;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $Aquifer$NoiseBasedAquifer implements $Aquifer {
        getIndex(arg0: number, arg1: number, arg2: number): number;
        static similarity(arg0: number, arg1: number): number;
        shouldScheduleFluidUpdate(): boolean;
        computeSubstance(arg0: $DensityFunction$FunctionContext, arg1: number): $BlockState;
        gridZ(arg0: number): number;
        gridX(arg0: number): number;
        gridY(arg0: number): number;
        minGridY: number;
        minGridX: number;
        minGridZ: number;
        gridSizeX: number;
        aquiferLocationCache: number[];
        gridSizeZ: number;
        aquiferCache: $Aquifer$FluidStatus[];
        barrierNoise: $DensityFunction;
        lavaNoise: $DensityFunction;
        constructor(arg0: $NoiseChunk, arg1: $ChunkPos, arg2: $NoiseRouter_, arg3: $PositionalRandomFactory, arg4: number, arg5: number, arg6: $Aquifer$FluidPicker_);
    }
    export class $SurfaceRules$BiomeConditionSource$1BiomeCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules$TestRuleSource extends $Record implements $SurfaceRules$RuleSource {
        apply(arg0: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        ifTrue(): $SurfaceRules$ConditionSource;
        thenRun(): $SurfaceRules$RuleSource;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$TestRuleSource>;
        constructor(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$TestRuleSource}.
     */
    export type $SurfaceRules$TestRuleSource_ = { thenRun?: $SurfaceRules$RuleSource, ifTrue?: $SurfaceRules$ConditionSource,  } | [thenRun?: $SurfaceRules$RuleSource, ifTrue?: $SurfaceRules$ConditionSource, ];
    export class $DensityFunctions$YClampedGradient extends $Record implements $DensityFunction$SimpleFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$YClampedGradient}.
     */
    export type $DensityFunctions$YClampedGradient_ = { toValue?: number, fromValue?: number, fromY?: number, toY?: number,  } | [toValue?: number, fromValue?: number, fromY?: number, toY?: number, ];
    export class $WorldDimensions$1Entry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldDimensions$1Entry}.
     */
    export type $WorldDimensions$1Entry_ = { key?: $ResourceKey_<$LevelStem>, value?: $LevelStem_,  } | [key?: $ResourceKey_<$LevelStem>, value?: $LevelStem_, ];
    export class $Column$Range extends $Column {
        floor(): number;
        ceiling(): number;
        height(): number;
        constructor(arg0: number, arg1: number);
    }
    export class $FlatLevelSource extends $ChunkGenerator {
        settings(): $FlatLevelGeneratorSettings;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $MapCodec<$FlatLevelSource>;
        biomeSource: $BiomeSource;
        constructor(arg0: $FlatLevelGeneratorSettings);
    }
    export class $SingleThreadedRandomSource implements $BitRandomSource {
        next(arg0: number): number;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $SurfaceRules$WaterConditionSource$1WaterCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $WorldgenRandom extends $LegacyRandomSource {
        getCount(): number;
        static seedSlimeChunk(arg0: number, arg1: number, arg2: number, arg3: number): $RandomSource;
        setLargeFeatureWithSalt(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setLargeFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        setDecorationSeed(arg0: number, arg1: number, arg2: number): number;
        setFeatureSeed(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: $RandomSource);
        get count(): number;
    }
    export class $DensityFunction$FunctionContext {
    }
    export interface $DensityFunction$FunctionContext {
        blockX(): number;
        blockY(): number;
        blockZ(): number;
        getBlender(): $Blender;
        get blender(): $Blender;
    }
    export class $RandomSupport$Seed128bit extends $Record {
        xor(arg0: number, arg1: number): $RandomSupport$Seed128bit;
        xor(arg0: $RandomSupport$Seed128bit_): $RandomSupport$Seed128bit;
        seedLo(): number;
        seedHi(): number;
        mixed(): $RandomSupport$Seed128bit;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $RandomSupport$Seed128bit}.
     */
    export type $RandomSupport$Seed128bit_ = { seedHi?: number, seedLo?: number,  } | [seedHi?: number, seedLo?: number, ];
    export class $SurfaceRules$BiomeConditionSource implements $SurfaceRules$ConditionSource {
        apply(arg0: $SurfaceRules$Context): $SurfaceRules$Condition;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$ConditionSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$BiomeConditionSource>;
        biomes: $List<$ResourceKey<$Biome>>;
        biomeNameTest: $Predicate<$ResourceKey<$Biome>>;
        constructor(arg0: $List_<$ResourceKey_<$Biome>>);
    }
    /**
     * @deprecated
     */
    export class $ThreadSafeLegacyRandomSource implements $BitRandomSource {
        next(arg0: number): number;
        setSeed(arg0: number): void;
        nextGaussian(): number;
        fork(): $RandomSource;
        forkPositional(): $PositionalRandomFactory;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
        nextInt(arg0: number, arg1: number): number;
        consumeCount(arg0: number): void;
        triangle(arg0: number, arg1: number): number;
        nextIntBetweenInclusive(arg0: number, arg1: number): number;
        constructor(arg0: number);
        set seed(value: number);
    }
    export class $DensityFunctions$EndIslandDensityFunction implements $DensityFunction$SimpleFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    export class $DensityFunctions$Spline$Point extends $Record {
        context(): $DensityFunction$FunctionContext;
        constructor(arg0: $DensityFunction$FunctionContext);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline$Point}.
     */
    export type $DensityFunctions$Spline$Point_ = { context?: $DensityFunction$FunctionContext,  } | [context?: $DensityFunction$FunctionContext, ];
    export class $MarsagliaPolarGaussian {
        reset(): void;
        nextGaussian(): number;
        randomSource: $RandomSource;
        constructor(arg0: $RandomSource);
    }
    export interface $NoiseGeneratorSettings extends RegistryMarked<RegistryTypes.WorldgenNoiseSettingsTag, RegistryTypes.WorldgenNoiseSettings> {}
    export class $GeodeBlockSettings {
        static CODEC: $Codec<$GeodeBlockSettings>;
        outerLayerProvider: $BlockStateProvider;
        innerLayerProvider: $BlockStateProvider;
        alternateInnerLayerProvider: $BlockStateProvider;
        innerPlacements: $List<$BlockState>;
        cannotReplace: $TagKey<$Block>;
        middleLayerProvider: $BlockStateProvider;
        invalidBlocks: $TagKey<$Block>;
        fillingProvider: $BlockStateProvider;
        constructor(arg0: $BlockStateProvider, arg1: $BlockStateProvider, arg2: $BlockStateProvider, arg3: $BlockStateProvider, arg4: $BlockStateProvider, arg5: $List_<$BlockState_>, arg6: $TagKey_<$Block>, arg7: $TagKey_<$Block>);
    }
    export class $NoiseChunk$BlendOffset implements $NoiseChunk$NoiseChunkDensityFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    export class $DensityFunctions {
        static min(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static max(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static add(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static map(arg0: $DensityFunction_, arg1: $DensityFunctions$Mapped$Type_): $DensityFunction;
        static constant(arg0: number): $DensityFunction;
        static bootstrap(arg0: $Registry<$MapCodec_<$DensityFunction_>>): $MapCodec<$DensityFunction>;
        static shift(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static zero(): $DensityFunction;
        static mul(arg0: $DensityFunction_, arg1: $DensityFunction_): $DensityFunction;
        static spline(arg0: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>): $DensityFunction;
        static singleArgumentCodec<A, O>(arg0: $Codec<A>, arg1: $Function_<A, O>, arg2: $Function_<O, A>): $KeyDispatchDataCodec<O>;
        static singleFunctionArgumentCodec<O>(arg0: $Function_<$DensityFunction, O>, arg1: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static doubleFunctionArgumentCodec<O>(arg0: $BiFunction_<$DensityFunction, $DensityFunction, O>, arg1: $Function_<O, $DensityFunction>, arg2: $Function_<O, $DensityFunction>): $KeyDispatchDataCodec<O>;
        static makeCodec<O>(arg0: $MapCodec_<O>): $KeyDispatchDataCodec<O>;
        static interpolated(arg0: $DensityFunction_): $DensityFunction;
        static flatCache(arg0: $DensityFunction_): $DensityFunction;
        static cache2d(arg0: $DensityFunction_): $DensityFunction;
        static cacheOnce(arg0: $DensityFunction_): $DensityFunction;
        static cacheAllInCell(arg0: $DensityFunction_): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number, arg3: number): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number, arg3: number, arg4: number): $DensityFunction;
        static mappedNoise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $DensityFunction;
        static shiftedNoise2d(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: number, arg3: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static rangeChoice(arg0: $DensityFunction_, arg1: number, arg2: number, arg3: $DensityFunction_, arg4: $DensityFunction_): $DensityFunction;
        static shiftA(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static shiftB(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static blendDensity(arg0: $DensityFunction_): $DensityFunction;
        static endIslands(arg0: number): $DensityFunction;
        static weirdScaledSampler(arg0: $DensityFunction_, arg1: $Holder_<$NormalNoise$NoiseParameters>, arg2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper_): $DensityFunction;
        static yClampedGradient(arg0: number, arg1: number, arg2: number, arg3: number): $DensityFunction;
        static blendAlpha(): $DensityFunction;
        static blendOffset(): $DensityFunction;
        static lerp(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_): $DensityFunction;
        static lerp(arg0: $DensityFunction_, arg1: number, arg2: $DensityFunction_): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>): $DensityFunction;
        static noise(arg0: $Holder_<$NormalNoise$NoiseParameters>, arg1: number): $DensityFunction;
        static MAX_REASONABLE_NOISE_VALUE: number;
        static NOISE_VALUE_CODEC: $Codec<number>;
        static DIRECT_CODEC: $Codec<$DensityFunction>;
    }
    export interface $DensityFunction extends RegistryMarked<RegistryTypes.WorldgenDensityFunctionTag, RegistryTypes.WorldgenDensityFunction> {}
    export class $DensityFunctions$WeirdScaledSampler$RarityValueMapper extends $Enum<$DensityFunctions$WeirdScaledSampler$RarityValueMapper> implements $StringRepresentable {
        static values(): $DensityFunctions$WeirdScaledSampler$RarityValueMapper[];
        static valueOf(arg0: string): $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TYPE2: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        static CODEC: $Codec<$DensityFunctions$WeirdScaledSampler$RarityValueMapper>;
        maxRarity: number;
        mapper: $Double2DoubleFunction;
        static TYPE1: $DensityFunctions$WeirdScaledSampler$RarityValueMapper;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$WeirdScaledSampler$RarityValueMapper}.
     */
    export type $DensityFunctions$WeirdScaledSampler$RarityValueMapper_ = "type_1" | "type_2";
    export class $DensityFunctions$TwoArgumentSimpleFunction {
    }
    export interface $DensityFunctions$TwoArgumentSimpleFunction extends $DensityFunction {
    }
    export class $DensityFunctions$Ap2 extends $Record implements $DensityFunctions$TwoArgumentSimpleFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Ap2}.
     */
    export type $DensityFunctions$Ap2_ = { argument1?: $DensityFunction_, minValue?: number, argument2?: $DensityFunction_, type?: $DensityFunctions$TwoArgumentSimpleFunction$Type_, maxValue?: number,  } | [argument1?: $DensityFunction_, minValue?: number, argument2?: $DensityFunction_, type?: $DensityFunctions$TwoArgumentSimpleFunction$Type_, maxValue?: number, ];
    export class $GenerationStep {
        constructor();
    }
    export class $SurfaceRules$NotCondition extends $Record implements $SurfaceRules$Condition {
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NotCondition}.
     */
    export type $SurfaceRules$NotCondition_ = { target?: $SurfaceRules$Condition_,  } | [target?: $SurfaceRules$Condition_, ];
    export class $Column {
        static line(): $Column;
        static create(arg0: $OptionalInt, arg1: $OptionalInt): $Column;
        static scan(arg0: $LevelSimulatedReader, arg1: $BlockPos_, arg2: number, arg3: $Predicate_<$BlockState>, arg4: $Predicate_<$BlockState>): ($Column) | undefined;
        static around(arg0: number, arg1: number): $Column$Range;
        getFloor(): $OptionalInt;
        getCeiling(): $OptionalInt;
        withFloor(arg0: $OptionalInt): $Column;
        static inside(arg0: number, arg1: number): $Column$Range;
        static fromHighest(arg0: number): $Column;
        static fromLowest(arg0: number): $Column;
        withCeiling(arg0: $OptionalInt): $Column;
        static above(arg0: number): $Column;
        static below(arg0: number): $Column;
        getHeight(): $OptionalInt;
        constructor();
        get floor(): $OptionalInt;
        get ceiling(): $OptionalInt;
        get height(): $OptionalInt;
    }
    export class $Column$Line extends $Column {
        static INSTANCE: $Column$Line;
    }
    export class $DensityFunctions$BlendAlpha extends $Enum<$DensityFunctions$BlendAlpha> implements $DensityFunction$SimpleFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$BlendAlpha}.
     */
    export type $DensityFunctions$BlendAlpha_ = "instance";
    export class $Heightmap$Types extends $Enum<$Heightmap$Types> implements $StringRepresentable {
        static values(): $Heightmap$Types[];
        static valueOf(arg0: string): $Heightmap$Types;
        isOpaque(): $Predicate<$BlockState>;
        sendToClient(): boolean;
        getSerializationKey(): string;
        keepAfterWorldgen(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static OCEAN_FLOOR: $Heightmap$Types;
        static MOTION_BLOCKING_NO_LEAVES: $Heightmap$Types;
        static CODEC: $Codec<$Heightmap$Types>;
        static MOTION_BLOCKING: $Heightmap$Types;
        static WORLD_SURFACE: $Heightmap$Types;
        static OCEAN_FLOOR_WG: $Heightmap$Types;
        static WORLD_SURFACE_WG: $Heightmap$Types;
        get opaque(): $Predicate<$BlockState>;
        get serializationKey(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Heightmap$Types}.
     */
    export type $Heightmap$Types_ = "world_surface_wg" | "world_surface" | "ocean_floor_wg" | "ocean_floor" | "motion_blocking" | "motion_blocking_no_leaves";
    export class $BitRandomSource {
        static FLOAT_MULTIPLIER: number;
        static DOUBLE_MULTIPLIER: number;
    }
    export interface $BitRandomSource extends $RandomSource {
        next(arg0: number): number;
        nextDouble(): number;
        nextInt(arg0: number): number;
        nextInt(): number;
        nextLong(): number;
        nextBoolean(): boolean;
        nextFloat(): number;
    }
    export class $SurfaceRules$YConditionSource$1YCondition extends $SurfaceRules$LazyYCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $DensityFunctions$MarkerOrMarked {
    }
    export interface $DensityFunctions$MarkerOrMarked extends $DensityFunction {
        type(): $DensityFunctions$Marker$Type;
        wrapped(): $DensityFunction;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $NoiseBasedChunkGenerator extends $ChunkGenerator {
        generatorSettings(): $Holder<$NoiseGeneratorSettings>;
        iterateNoiseColumn(arg0: $LevelHeightAccessor, arg1: $RandomState, arg2: number, arg3: number, arg4: $MutableObject<$NoiseColumn>, arg5: $Predicate_<$BlockState>): $OptionalInt;
        buildSurface(arg0: $ChunkAccess, arg1: $WorldGenerationContext, arg2: $RandomState, arg3: $StructureManager, arg4: $BiomeManager, arg5: $Registry<$Biome_>, arg6: $Blender): void;
        stable(arg0: $ResourceKey_<$NoiseGeneratorSettings>): boolean;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        settings: $Holder<$NoiseGeneratorSettings>;
        static CODEC: $MapCodec<$NoiseBasedChunkGenerator>;
        globalFluidPicker: $Supplier<$Aquifer$FluidPicker>;
        biomeSource: $BiomeSource;
        static AIR: $BlockState;
        constructor(arg0: $BiomeSource, arg1: $Holder_<$NoiseGeneratorSettings>);
    }
    export class $DensityFunctions$TwoArgumentSimpleFunction$Type extends $Enum<$DensityFunctions$TwoArgumentSimpleFunction$Type> implements $StringRepresentable {
        static values(): $DensityFunctions$TwoArgumentSimpleFunction$Type[];
        static valueOf(arg0: string): $DensityFunctions$TwoArgumentSimpleFunction$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ADD: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        codec: $KeyDispatchDataCodec<$DensityFunctions$TwoArgumentSimpleFunction>;
        static MIN: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MUL: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        static MAX: $DensityFunctions$TwoArgumentSimpleFunction$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$TwoArgumentSimpleFunction$Type}.
     */
    export type $DensityFunctions$TwoArgumentSimpleFunction$Type_ = "add" | "mul" | "min" | "max";
    export class $SurfaceRules$Context {
        updateXZ(arg0: number, arg1: number): void;
        updateY(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getMinSurfaceLevel(): number;
        getSurfaceSecondary(): number;
        static blockCoordToSurfaceCell(arg0: number): number;
        static surfaceCellToBlockCoord(arg0: number): number;
        lambda$updateY$0(arg0: number, arg1: number, arg2: number): $Holder<any>;
        waterHeight: number;
        static SURFACE_CELL_BITS: number;
        steep: $SurfaceRules$Condition;
        lastUpdateXZ: number;
        chunk: $ChunkAccess;
        blockX: number;
        blockY: number;
        blockZ: number;
        abovePreliminarySurface: $SurfaceRules$Condition;
        noiseChunk: $NoiseChunk;
        lastPreliminarySurfaceCellOrigin: number;
        static SURFACE_CELL_SIZE: number;
        minSurfaceLevel: number;
        pos: $BlockPos$MutableBlockPos;
        temperature: $SurfaceRules$Condition;
        context: $WorldGenerationContext;
        preliminarySurfaceCache: number[];
        stoneDepthAbove: number;
        lastSurfaceDepth2Update: number;
        stoneDepthBelow: number;
        static HOW_FAR_BELOW_PRELIMINARY_SURFACE_LEVEL_TO_BUILD_SURFACE: number;
        randomState: $RandomState;
        static SURFACE_CELL_MASK: number;
        lastMinSurfaceLevelUpdate: number;
        lastUpdateY: number;
        hole: $SurfaceRules$Condition;
        biomeGetter: $Function<$BlockPos, $Holder<$Biome>>;
        surfaceSecondary: number;
        system: $SurfaceSystem;
        biome: $Supplier<$Holder<$Biome>>;
        surfaceDepth: number;
        constructor(arg0: $SurfaceSystem, arg1: $RandomState, arg2: $ChunkAccess, arg3: $NoiseChunk, arg4: $Function_<$BlockPos, $Holder<$Biome>>, arg5: $Registry<$Biome_>, arg6: $WorldGenerationContext);
    }
    export class $NoiseSettings extends $Record {
        static create(arg0: number, arg1: number, arg2: number, arg3: number): $NoiseSettings;
        clampToHeightAccessor(arg0: $LevelHeightAccessor): $NoiseSettings;
        getCellHeight(): number;
        getCellWidth(): number;
        noiseSizeHorizontal(): number;
        noiseSizeVertical(): number;
        height(): number;
        minY(): number;
        static CODEC: $Codec<$NoiseSettings>;
        static END_NOISE_SETTINGS: $NoiseSettings;
        static CAVES_NOISE_SETTINGS: $NoiseSettings;
        static OVERWORLD_NOISE_SETTINGS: $NoiseSettings;
        static FLOATING_ISLANDS_NOISE_SETTINGS: $NoiseSettings;
        static NETHER_NOISE_SETTINGS: $NoiseSettings;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get cellHeight(): number;
        get cellWidth(): number;
    }
    /**
     * Values that may be interpreted as {@link $NoiseSettings}.
     */
    export type $NoiseSettings_ = { minY?: number, noiseSizeHorizontal?: number, noiseSizeVertical?: number, height?: number,  } | [minY?: number, noiseSizeHorizontal?: number, noiseSizeVertical?: number, height?: number, ];
    export class $SurfaceRules$Hole extends $Enum<$SurfaceRules$Hole> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Hole}.
     */
    export type $SurfaceRules$Hole_ = "instance";
    export class $DensityFunctions$ShiftedNoise extends $Record implements $DensityFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$ShiftedNoise}.
     */
    export type $DensityFunctions$ShiftedNoise_ = { shiftZ?: $DensityFunction_, yScale?: number, shiftY?: $DensityFunction_, xzScale?: number, noise?: $DensityFunction$NoiseHolder_, shiftX?: $DensityFunction_,  } | [shiftZ?: $DensityFunction_, yScale?: number, shiftY?: $DensityFunction_, xzScale?: number, noise?: $DensityFunction$NoiseHolder_, shiftX?: $DensityFunction_, ];
    export class $DensityFunctions$Spline extends $Record implements $DensityFunction {
        compute(arg0: $DensityFunction$FunctionContext): number;
        maxValue(): number;
        spline(): $CubicSpline<$DensityFunctions$Spline$Point, $DensityFunctions$Spline$Coordinate>;
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        minValue(): number;
        fillArray(arg0: number[], arg1: $DensityFunction$ContextProvider): void;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
        static CODEC: $KeyDispatchDataCodec<$DensityFunctions$Spline>;
        constructor(arg0: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>);
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Spline}.
     */
    export type $DensityFunctions$Spline_ = { spline?: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>,  } | [spline?: $CubicSpline<$DensityFunctions$Spline$Point_, $DensityFunctions$Spline$Coordinate_>, ];
    export class $SurfaceRules$Condition {
    }
    export interface $SurfaceRules$Condition {
        test(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Condition}.
     */
    export type $SurfaceRules$Condition_ = (() => boolean);
    export class $SurfaceRules$LazyYCondition extends $SurfaceRules$LazyCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $NoiseChunk$NoiseChunkDensityFunction {
    }
    export interface $NoiseChunk$NoiseChunkDensityFunction extends $DensityFunction {
    }
    export class $NoiseChunk$Cache2D implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    export class $SurfaceSystem {
        getSurfaceDepth(arg0: number, arg1: number): number;
        getSurfaceSecondary(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        topMaterial(arg0: $SurfaceRules$RuleSource, arg1: $CarvingContext, arg2: $Function_<$BlockPos, $Holder<$Biome>>, arg3: $ChunkAccess, arg4: $NoiseChunk, arg5: $BlockPos_, arg6: boolean): ($BlockState) | undefined;
        buildSurface(arg0: $RandomState, arg1: $BiomeManager, arg2: $Registry<$Biome_>, arg3: boolean, arg4: $WorldGenerationContext, arg5: $ChunkAccess, arg6: $NoiseChunk, arg7: $SurfaceRules$RuleSource): void;
        getBand(arg0: number, arg1: number, arg2: number): $BlockState;
        constructor(arg0: $RandomState, arg1: $BlockState_, arg2: number, arg3: $PositionalRandomFactory);
    }
    export class $DensityFunction$ContextProvider {
    }
    export interface $DensityFunction$ContextProvider {
        fillAllDirectly(arg0: number[], arg1: $DensityFunction_): void;
        forIndex(arg0: number): $DensityFunction$FunctionContext;
    }
    export class $SurfaceRules$Context$HoleCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules {
        static register<A>(arg0: $Registry<$MapCodec_<A>>, arg1: string, arg2: $KeyDispatchDataCodec_<A>): $MapCodec<A>;
        static state(arg0: $BlockState_): $SurfaceRules$RuleSource;
        static sequence(...arg0: $SurfaceRules$RuleSource[]): $SurfaceRules$RuleSource;
        static not(arg0: $SurfaceRules$ConditionSource): $SurfaceRules$ConditionSource;
        static ifTrue(arg0: $SurfaceRules$ConditionSource, arg1: $SurfaceRules$RuleSource): $SurfaceRules$RuleSource;
        static temperature(): $SurfaceRules$ConditionSource;
        static steep(): $SurfaceRules$ConditionSource;
        static hole(): $SurfaceRules$ConditionSource;
        static bandlands(): $SurfaceRules$RuleSource;
        static stoneDepthCheck(arg0: number, arg1: boolean, arg2: number, arg3: $CaveSurface_): $SurfaceRules$ConditionSource;
        static stoneDepthCheck(arg0: number, arg1: boolean, arg2: $CaveSurface_): $SurfaceRules$ConditionSource;
        static yBlockCheck(arg0: $VerticalAnchor_, arg1: number): $SurfaceRules$ConditionSource;
        static yStartCheck(arg0: $VerticalAnchor_, arg1: number): $SurfaceRules$ConditionSource;
        static waterBlockCheck(arg0: number, arg1: number): $SurfaceRules$ConditionSource;
        static waterStartCheck(arg0: number, arg1: number): $SurfaceRules$ConditionSource;
        static isBiome(...arg0: $ResourceKey_<$Biome>[]): $SurfaceRules$ConditionSource;
        static noiseCondition(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>, arg1: number): $SurfaceRules$ConditionSource;
        static noiseCondition(arg0: $ResourceKey_<$NormalNoise$NoiseParameters>, arg1: number, arg2: number): $SurfaceRules$ConditionSource;
        static verticalGradient(arg0: string, arg1: $VerticalAnchor_, arg2: $VerticalAnchor_): $SurfaceRules$ConditionSource;
        static abovePreliminarySurface(): $SurfaceRules$ConditionSource;
        static ON_FLOOR: $SurfaceRules$ConditionSource;
        static UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        static ON_CEILING: $SurfaceRules$ConditionSource;
        static UNDER_CEILING: $SurfaceRules$ConditionSource;
        static VERY_DEEP_UNDER_FLOOR: $SurfaceRules$ConditionSource;
        constructor();
    }
    export class $Aquifer$FluidStatus {
        at(arg0: number): $BlockState;
        fluidLevel: number;
        fluidType: $BlockState;
        constructor(arg0: number, arg1: $BlockState_);
    }
    export class $DensityFunctions$BeardifierOrMarker {
        static CODEC: $KeyDispatchDataCodec<$DensityFunction>;
    }
    export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
    }
    export class $NoiseChunk$FlatCache implements $DensityFunctions$MarkerOrMarked, $NoiseChunk$NoiseChunkDensityFunction {
        mapAll(arg0: $DensityFunction$Visitor_): $DensityFunction;
        codec(): $KeyDispatchDataCodec<$DensityFunction>;
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    export class $OreVeinifier {
        static create(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $PositionalRandomFactory): $NoiseChunk$BlockStateFiller;
    }
    export class $DensityFunctions$Noise extends $Record implements $DensityFunction {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Noise}.
     */
    export type $DensityFunctions$Noise_ = { xzScale?: number, noise?: $DensityFunction$NoiseHolder_, yScale?: number,  } | [xzScale?: number, noise?: $DensityFunction$NoiseHolder_, yScale?: number, ];
    export class $GeodeCrackSettings {
        static CODEC: $Codec<$GeodeCrackSettings>;
        generateCrackChance: number;
        crackPointOffset: number;
        baseCrackSize: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $DensityFunctions$Clamp extends $Record implements $DensityFunctions$PureTransformer {
        abs(): $DensityFunction;
        clamp(arg0: number, arg1: number): $DensityFunction;
        square(): $DensityFunction;
        cube(): $DensityFunction;
        halfNegative(): $DensityFunction;
        quarterNegative(): $DensityFunction;
        squeeze(): $DensityFunction;
    }
    /**
     * Values that may be interpreted as {@link $DensityFunctions$Clamp}.
     */
    export type $DensityFunctions$Clamp_ = { input?: $DensityFunction_, maxValue?: number, minValue?: number,  } | [input?: $DensityFunction_, maxValue?: number, minValue?: number, ];
    export class $Noises {
        static instantiate(arg0: $HolderGetter<$NormalNoise$NoiseParameters_>, arg1: $PositionalRandomFactory, arg2: $ResourceKey_<$NormalNoise$NoiseParameters>): $NormalNoise;
        static PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CLAY_BANDS_OFFSET: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SOUL_SAND_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_RARENESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_RIDGE_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_ENTRANCE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_B: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CONTINENTALNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEIN_A: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_VEININESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_FLOODEDNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D: $ResourceKey<$NormalNoise$NoiseParameters>;
        static RIDGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PATCH: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_WART: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHER_STATE_SELECTOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_LAVA: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_ROUGHNESS_MODULATOR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_CHEESE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CAVE_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ORE_GAP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_BARRIER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static JAGGED: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static BADLANDS_SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SHIFT: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE_SECONDARY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_2D_ELEVATION: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_2: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_1: $ResourceKey<$NormalNoise$NoiseParameters>;
        static VEGETATION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SURFACE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static POWDER_SNOW: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR_ROOF: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICEBERG_PILLAR: $ResourceKey<$NormalNoise$NoiseParameters>;
        static GRAVEL_LAYER: $ResourceKey<$NormalNoise$NoiseParameters>;
        static ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SPAGHETTI_3D_RARITY: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NETHERRACK: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PILLAR_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static NOODLE_THICKNESS: $ResourceKey<$NormalNoise$NoiseParameters>;
        static EROSION_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static SWAMP: $ResourceKey<$NormalNoise$NoiseParameters>;
        static PACKED_ICE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static AQUIFER_FLUID_LEVEL_SPREAD: $ResourceKey<$NormalNoise$NoiseParameters>;
        static CALCITE: $ResourceKey<$NormalNoise$NoiseParameters>;
        static TEMPERATURE_LARGE: $ResourceKey<$NormalNoise$NoiseParameters>;
        constructor();
    }
    export class $SurfaceRules$SequenceRuleSource extends $Record implements $SurfaceRules$RuleSource {
        apply(arg0: $SurfaceRules$Context): $SurfaceRules$SurfaceRule;
        sequence(): $List<$SurfaceRules$RuleSource>;
        codec(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>;
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
        static CODEC: $KeyDispatchDataCodec<$SurfaceRules$SequenceRuleSource>;
        constructor(arg0: $List_<$SurfaceRules$RuleSource>);
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$SequenceRuleSource}.
     */
    export type $SurfaceRules$SequenceRuleSource_ = { sequence?: $List_<$SurfaceRules$RuleSource>,  } | [sequence?: $List_<$SurfaceRules$RuleSource>, ];
    export class $SurfaceRules$Context$SteepMaterialCondition extends $SurfaceRules$LazyXZCondition {
        result: boolean;
        context: $SurfaceRules$Context;
    }
    export class $SurfaceRules$NotConditionSource extends $Record implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$NotConditionSource}.
     */
    export type $SurfaceRules$NotConditionSource_ = { target?: $SurfaceRules$ConditionSource,  } | [target?: $SurfaceRules$ConditionSource, ];
    export class $SurfaceRules$Context$AbovePreliminarySurfaceCondition implements $SurfaceRules$Condition {
    }
    export class $SurfaceRules$Temperature extends $Enum<$SurfaceRules$Temperature> implements $SurfaceRules$ConditionSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$Condition>;
        andThen<V>(arg0: $Function_<$SurfaceRules$Condition, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Temperature}.
     */
    export type $SurfaceRules$Temperature_ = "instance";
    export class $SurfaceRules$Bandlands extends $Enum<$SurfaceRules$Bandlands> implements $SurfaceRules$RuleSource {
        compose<V>(arg0: $Function_<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>;
        andThen<V>(arg0: $Function_<$SurfaceRules$SurfaceRule, V>): $Function<$SurfaceRules$Context, V>;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRules$Bandlands}.
     */
    export type $SurfaceRules$Bandlands_ = "instance";
}
