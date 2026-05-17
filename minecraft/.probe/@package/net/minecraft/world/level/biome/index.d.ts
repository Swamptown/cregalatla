import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $ImprovedNoise, $PerlinSimplexNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Set_, $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Region, $RegionType_ } from "@package/terrablender/api";
import { $Consumer_, $Predicate_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ConfiguredWorldCarver_, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $Weight, $WeightedRandomList, $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $BiomeManagerAccessor as $BiomeManagerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $BiomeManagerAccessor } from "@package/org/embeddedt/modernfix/common/mixin/perf/optimize_surface_rules";
import { $GenerationStep$Carving, $DensityFunction, $GenerationStep$Carving_, $DensityFunction$FunctionContext, $GenerationStep$Decoration_, $DensityFunction_ } from "@package/net/minecraft/world/level/levelgen";
import { $BiomeAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $LevelReader } from "@package/net/minecraft/world/level";
import { $MultiNoiseBiomeSourceAccess } from "@package/terrablender/mixin";
import { $MultiNoiseSamplerHooks } from "@package/net/fabricmc/fabric/impl/biome";
import { $IExtendedMultiNoiseBiomeSource, $IExtendedBiomeSource, $IExtendedParameterList, $IExtendedTheEndBiomeSource } from "@package/terrablender/worldgen";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModifiableBiomeInfo } from "@package/net/neoforged/neoforge/common/world";

declare module "@package/net/minecraft/world/level/biome" {
    export class $AmbientMoodSettings {
        getSoundEvent(): $Holder<$SoundEvent>;
        getTickDelay(): number;
        getBlockSearchExtent(): number;
        getSoundPositionOffset(): number;
        static CODEC: $Codec<$AmbientMoodSettings>;
        static LEGACY_CAVE_SETTINGS: $AmbientMoodSettings;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number, arg2: number, arg3: number);
        get soundEvent(): $Holder<$SoundEvent>;
        get tickDelay(): number;
        get blockSearchExtent(): number;
        get soundPositionOffset(): number;
    }
    export interface $Biome extends RegistryMarked<RegistryTypes.WorldgenBiomeTag, RegistryTypes.WorldgenBiome> {}
    export class $Biome$Precipitation extends $Enum<$Biome$Precipitation> implements $StringRepresentable {
        static values(): $Biome$Precipitation[];
        static valueOf(arg0: string): $Biome$Precipitation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAIN: $Biome$Precipitation;
        static CODEC: $Codec<$Biome$Precipitation>;
        static SNOW: $Biome$Precipitation;
        static NONE: $Biome$Precipitation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$Precipitation}.
     */
    export type $Biome$Precipitation_ = "none" | "rain" | "snow";
    export class $MobSpawnSettings {
        getMobs(arg0: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getSpawnerTypes(): $Set<$MobCategory>;
        getMobSpawnCost(arg0: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        getEntityTypes(): $Set<$EntityType<never>>;
        getCreatureProbability(): number;
        static CODEC: $MapCodec<$MobSpawnSettings>;
        creatureGenerationProbability: number;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        static EMPTY: $MobSpawnSettings;
        static EMPTY_MOB_LIST: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        constructor(arg0: number, arg1: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>, arg2: $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>);
        get spawnerTypes(): $Set<$MobCategory>;
        get entityTypes(): $Set<$EntityType<never>>;
        get creatureProbability(): number;
    }
    export class $BiomeResolver {
    }
    export interface $BiomeResolver {
        getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeResolver}.
     */
    export type $BiomeResolver_ = ((arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler) => $Holder_<$Biome>);
    export class $Climate$RTree$Node<T> {
        search(arg0: number[], arg1: $Climate$RTree$Leaf<T>, arg2: $Climate$DistanceMetric_<T>): $Climate$RTree$Leaf<T>;
        distance(arg0: number[]): number;
        parameterSpace: $Climate$Parameter[];
        constructor(arg0: $List_<$Climate$Parameter_>);
    }
    export class $BiomeManager$NoiseBiomeSource {
    }
    export interface $BiomeManager$NoiseBiomeSource {
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeManager$NoiseBiomeSource}.
     */
    export type $BiomeManager$NoiseBiomeSource_ = ((arg0: number, arg1: number, arg2: number) => $Holder_<$Biome>);
    export class $MultiNoiseBiomeSourceParameterList {
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        static knownPresets(): $Map<$MultiNoiseBiomeSourceParameterList$Preset, $Climate$ParameterList<$ResourceKey<$Biome>>>;
        static CODEC: $Codec<$Holder<$MultiNoiseBiomeSourceParameterList>>;
        static DIRECT_CODEC: $Codec<$MultiNoiseBiomeSourceParameterList>;
        constructor(arg0: $MultiNoiseBiomeSourceParameterList$Preset_, arg1: $HolderGetter<$Biome_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList}.
     */
    export type $MultiNoiseBiomeSourceParameterList_ = RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList;
    export class $BiomeSources {
        static bootstrap(arg0: $Registry<$MapCodec_<$BiomeSource>>): $MapCodec<$BiomeSource>;
        constructor();
    }
    export class $FeatureSorter$1FeatureData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FeatureSorter$1FeatureData}.
     */
    export type $FeatureSorter$1FeatureData_ = { featureIndex?: number, feature?: $PlacedFeature_, step?: number,  } | [featureIndex?: number, feature?: $PlacedFeature_, step?: number, ];
    export class $Climate$SpawnFinder {
    }
    export class $Biome$TemperatureModifier extends $Enum<$Biome$TemperatureModifier> implements $StringRepresentable {
        getName(): string;
        static values(): $Biome$TemperatureModifier[];
        static valueOf(arg0: string): $Biome$TemperatureModifier;
        modifyTemperature(arg0: $BlockPos_, arg1: number): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Biome$TemperatureModifier>;
        static NONE: $Biome$TemperatureModifier;
        static FROZEN: $Biome$TemperatureModifier;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$TemperatureModifier}.
     */
    export type $Biome$TemperatureModifier_ = "none" | "frozen";
    export class $BiomeSpecialEffects$Builder {
        build(): $BiomeSpecialEffects;
        ambientParticle(arg0: $AmbientParticleSettings): $BiomeSpecialEffects$Builder;
        ambientLoopSound(arg0: $Holder_<$SoundEvent>): $BiomeSpecialEffects$Builder;
        ambientMoodSound(arg0: $AmbientMoodSettings): $BiomeSpecialEffects$Builder;
        ambientAdditionsSound(arg0: $AmbientAdditionsSettings): $BiomeSpecialEffects$Builder;
        waterColor(arg0: number): $BiomeSpecialEffects$Builder;
        waterFogColor(arg0: number): $BiomeSpecialEffects$Builder;
        skyColor(arg0: number): $BiomeSpecialEffects$Builder;
        foliageColorOverride(arg0: number): $BiomeSpecialEffects$Builder;
        grassColorOverride(arg0: number): $BiomeSpecialEffects$Builder;
        grassColorModifier(arg0: $BiomeSpecialEffects$GrassColorModifier_): $BiomeSpecialEffects$Builder;
        backgroundMusic(arg0: $Music): $BiomeSpecialEffects$Builder;
        fogColor(arg0: number): $BiomeSpecialEffects$Builder;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor();
    }
    export class $Climate$RTree$Leaf<T> extends $Climate$RTree$Node<T> {
        parameterSpace: $Climate$Parameter[];
    }
    export class $Climate$RTree$SubTree<T> extends $Climate$RTree$Node<T> {
        parameterSpace: $Climate$Parameter[];
    }
    export class $Climate$TargetPoint extends $Record {
        depth(): number;
        toParameterArray(): number[];
        temperature(): number;
        humidity(): number;
        continentalness(): number;
        erosion(): number;
        weirdness(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$TargetPoint}.
     */
    export type $Climate$TargetPoint_ = { temperature?: number, erosion?: number, weirdness?: number, continentalness?: number, depth?: number, humidity?: number,  } | [temperature?: number, erosion?: number, weirdness?: number, continentalness?: number, depth?: number, humidity?: number, ];
    export class $Biome$BiomeBuilder {
        build(): $Biome;
        temperature(arg0: number): $Biome$BiomeBuilder;
        generationSettings(arg0: $BiomeGenerationSettings): $Biome$BiomeBuilder;
        mobSpawnSettings(arg0: $MobSpawnSettings): $Biome$BiomeBuilder;
        hasPrecipitation(arg0: boolean): $Biome$BiomeBuilder;
        downfall(arg0: number): $Biome$BiomeBuilder;
        temperatureAdjustment(arg0: $Biome$TemperatureModifier_): $Biome$BiomeBuilder;
        specialEffects(arg0: $BiomeSpecialEffects): $Biome$BiomeBuilder;
        constructor();
    }
    export class $BiomeSpecialEffects$GrassColorModifier extends $Enum<$BiomeSpecialEffects$GrassColorModifier> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $BiomeSpecialEffects$GrassColorModifier[];
        static valueOf(arg0: string): $BiomeSpecialEffects$GrassColorModifier;
        modifyColor(arg0: number, arg1: number, arg2: number): number;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BiomeSpecialEffects$GrassColorModifier>;
        static SWAMP: $BiomeSpecialEffects$GrassColorModifier;
        static NONE: $BiomeSpecialEffects$GrassColorModifier;
        static DARK_FOREST: $BiomeSpecialEffects$GrassColorModifier;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSpecialEffects$GrassColorModifier}.
     */
    export type $BiomeSpecialEffects$GrassColorModifier_ = "none" | "dark_forest" | "swamp";
    export class $BiomeGenerationSettings$Builder extends $BiomeGenerationSettings$PlainBuilder {
        addCarver(arg0: $GenerationStep$Carving_, arg1: $ResourceKey_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$Builder;
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $ResourceKey_<$PlacedFeature>): $BiomeGenerationSettings$Builder;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        carvers: $Map<$GenerationStep$Carving, $List<$Holder<$ConfiguredWorldCarver<never>>>>;
        constructor(arg0: $HolderGetter<$PlacedFeature_>, arg1: $HolderGetter<$ConfiguredWorldCarver_<never>>);
    }
    export class $FeatureSorter {
        static buildFeaturesPerStep<T>(arg0: $List_<T>, arg1: $Function_<T, $List<$HolderSet<$PlacedFeature>>>, arg2: boolean): $List<$FeatureSorter$StepFeatureData>;
        constructor();
    }
    export class $MobSpawnSettings$Builder {
        build(): $MobSpawnSettings;
        creatureGenerationProbability(arg0: number): $MobSpawnSettings$Builder;
        addSpawn(arg0: $MobCategory_, arg1: $MobSpawnSettings$SpawnerData): $MobSpawnSettings$Builder;
        addMobCharge(arg0: $EntityType_<never>, arg1: number, arg2: number): $MobSpawnSettings$Builder;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    export interface $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_ = (() => void);
    export class $BiomeGenerationSettings {
        hasFeature(arg0: $PlacedFeature_): boolean;
        features(): $List<$HolderSet<$PlacedFeature>>;
        getFlowerFeatures(): $List<$ConfiguredFeature<never, never>>;
        getCarvers(arg0: $GenerationStep$Carving_): $Iterable<$Holder<$ConfiguredWorldCarver<never>>>;
        getCarvingStages(): $Set<$GenerationStep$Carving>;
        static CODEC: $MapCodec<$BiomeGenerationSettings>;
        carvers: $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        featureSet: $Supplier<$Set<$PlacedFeature>>;
        static EMPTY: $BiomeGenerationSettings;
        flowerFeatures: $Supplier<$List<$ConfiguredFeature<never, never>>>;
        constructor(arg0: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>, arg1: $List_<$HolderSet_<$PlacedFeature>>);
        get carvingStages(): $Set<$GenerationStep$Carving>;
    }
    export class $BiomeGenerationSettings$PlainBuilder {
        build(): $BiomeGenerationSettings;
        addCarver(arg0: $GenerationStep$Carving_, arg1: $Holder_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$PlainBuilder;
        addFeatureStepsUpTo(arg0: number): void;
        addFeature(arg0: number, arg1: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        addFeature(arg0: $GenerationStep$Decoration_, arg1: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        carvers: $Map<$GenerationStep$Carving, $List<$Holder<$ConfiguredWorldCarver<never>>>>;
        constructor();
    }
    export class $MobSpawnSettings$SpawnerData extends $WeightedEntry$IntrusiveBase {
        static CODEC: $Codec<$MobSpawnSettings$SpawnerData>;
        minCount: number;
        type: $EntityType<never>;
        maxCount: number;
        constructor(arg0: $EntityType_<never>, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $EntityType_<never>, arg1: $Weight, arg2: number, arg3: number);
    }
    export class $MobSpawnSettings$MobSpawnCost extends $Record {
        charge(): number;
        energyBudget(): number;
        static CODEC: $Codec<$MobSpawnSettings$MobSpawnCost>;
        constructor(energyBudget: number, charge: number);
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnSettings$MobSpawnCost}.
     */
    export type $MobSpawnSettings$MobSpawnCost_ = { charge?: number, energyBudget?: number,  } | [charge?: number, energyBudget?: number, ];
    export class $Climate {
        static target(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Climate$TargetPoint;
        static empty(): $Climate$Sampler;
        static parameters(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number): $Climate$ParameterPoint;
        static parameters(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): $Climate$ParameterPoint;
        static quantizeCoord(arg0: number): number;
        static findSpawnPosition(arg0: $List_<$Climate$ParameterPoint_>, arg1: $Climate$Sampler_): $BlockPos;
        static unquantizeCoord(arg0: number): number;
        static PARAMETER_COUNT: number;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterLists {
        static bootstrap(arg0: $BootstrapContext<$MultiNoiseBiomeSourceParameterList_>): void;
        static OVERWORLD: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        static NETHER: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        constructor();
    }
    export class $AmbientParticleSettings {
        canSpawn(arg0: $RandomSource): boolean;
        getOptions(): $ParticleOptions;
        static CODEC: $Codec<$AmbientParticleSettings>;
        constructor(arg0: $ParticleOptions_, arg1: number);
        get options(): $ParticleOptions;
    }
    export class $TheEndBiomeSource extends $BiomeSource implements $IExtendedTheEndBiomeSource {
        static create(arg0: $HolderGetter<$Biome_>): $TheEndBiomeSource;
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: number): void;
        handler$ckj000$terrablender$onCollectPossibleBiomes(arg0: $CallbackInfoReturnable<any>): void;
        handler$ckj000$terrablender$onGetNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_, arg4: $CallbackInfoReturnable<any>): void;
        static CODEC: $MapCodec<$TheEndBiomeSource>;
    }
    export class $BiomeSpecialEffects {
        getSkyColor(): number;
        getFogColor(): number;
        getWaterColor(): number;
        getWaterFogColor(): number;
        getAmbientParticleSettings(): ($AmbientParticleSettings) | undefined;
        getAmbientLoopSoundEvent(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMoodSettings(): ($AmbientMoodSettings) | undefined;
        getAmbientAdditionsSettings(): ($AmbientAdditionsSettings) | undefined;
        getGrassColorOverride(): (number) | undefined;
        getFoliageColorOverride(): (number) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        getBackgroundMusic(): ($Music) | undefined;
        skyColor: number;
        static CODEC: $Codec<$BiomeSpecialEffects>;
        waterFogColor: number;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        foliageColorOverride: (number) | undefined;
        grassColorOverride: (number) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientParticleSettings: ($AmbientParticleSettings) | undefined;
        waterColor: number;
        backgroundMusic: ($Music) | undefined;
        grassColorModifier: $BiomeSpecialEffects$GrassColorModifier;
        fogColor: number;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (number) | undefined, arg5: (number) | undefined, arg6: $BiomeSpecialEffects$GrassColorModifier_, arg7: ($AmbientParticleSettings) | undefined, arg8: ($Holder_<$SoundEvent>) | undefined, arg9: ($AmbientMoodSettings) | undefined, arg10: ($AmbientAdditionsSettings) | undefined, arg11: ($Music) | undefined);
    }
    export class $Climate$Parameter extends $Record {
        min(): number;
        max(): number;
        distance(arg0: number): number;
        distance(arg0: $Climate$Parameter_): number;
        static point(arg0: number): $Climate$Parameter;
        static span(arg0: number, arg1: number): $Climate$Parameter;
        static span(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_): $Climate$Parameter;
        span(arg0: $Climate$Parameter_): $Climate$Parameter;
        static CODEC: $Codec<$Climate$Parameter>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Parameter}.
     */
    export type $Climate$Parameter_ = { min?: number, max?: number,  } | [min?: number, max?: number, ];
    export class $Climate$ParameterList<T> implements $IExtendedParameterList<any> {
        values(): $List<$Pair<$Climate$ParameterPoint, $Object>>;
        getTree(arg0: number): $Climate$RTree<any>;
        getRegion(arg0: number): $Region;
        findValue(arg0: $Climate$TargetPoint_): $Object;
        findValueIndex(arg0: $Climate$TargetPoint_): $Object;
        findValueIndex(arg0: $Climate$TargetPoint_, arg1: $Climate$DistanceMetric_<$Object>): $Object;
        findValueBruteForce(arg0: $Climate$TargetPoint_): $Object;
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: $RegionType_, arg2: number): void;
        getTreeCount(): number;
        recreateUniqueness(): void;
        findValuePositional(arg0: $Climate$TargetPoint_, arg1: number, arg2: number, arg3: number): $Object;
        getUniqueness(arg0: number, arg1: number, arg2: number): number;
        isInitialized(): boolean;
        static codec<T>(arg0: $MapCodec_<T>): $Codec<$Climate$ParameterList<T>>;
        clone(): $Climate$ParameterList<$Object>;
        constructor(arg0: $List_<$Pair<$Climate$ParameterPoint_, $Object>>);
        get treeCount(): number;
        get initialized(): boolean;
    }
    export class $Biome$ClimateSettings extends $Record {
        temperature(): number;
        hasPrecipitation(): boolean;
        temperatureModifier(): $Biome$TemperatureModifier;
        downfall(): number;
        static CODEC: $MapCodec<$Biome$ClimateSettings>;
        constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: $Biome$TemperatureModifier_, downfall: number);
    }
    /**
     * Values that may be interpreted as {@link $Biome$ClimateSettings}.
     */
    export type $Biome$ClimateSettings_ = { temperatureModifier?: $Biome$TemperatureModifier_, temperature?: number, downfall?: number, hasPrecipitation?: boolean,  } | [temperatureModifier?: $Biome$TemperatureModifier_, temperature?: number, downfall?: number, hasPrecipitation?: boolean, ];
    export class $FixedBiomeSource extends $BiomeSource implements $BiomeManager$NoiseBiomeSource {
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        static CODEC: $MapCodec<$FixedBiomeSource>;
        constructor(arg0: $Holder_<$Biome>);
    }
    export class $OverworldBiomeBuilder {
        pickBadlandsBiome(arg0: number, arg1: $Climate$Parameter_): $ResourceKey<$Biome>;
        static isDeepDarkRegion(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction$FunctionContext): boolean;
        addDebugBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addOffCoastBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addInlandBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addUndergroundBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addMidSlice(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        addHighSlice(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        addPeaks(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        addLowSlice(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        addValleys(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_): void;
        pickMiddleBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickMiddleBiomeOrBadlandsIfHot(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickMiddleBiomeOrBadlandsIfHotOrSlopeIfCold(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickPlateauBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickShatteredBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        maybePickWindsweptSavannaBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_, arg3: $ResourceKey_<$Biome>): $ResourceKey<$Biome>;
        pickPeakBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickSlopeBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickBeachBiome(arg0: number, arg1: number): $ResourceKey<$Biome>;
        pickShatteredCoastBiome(arg0: number, arg1: number, arg2: $Climate$Parameter_): $ResourceKey<$Biome>;
        static getDebugStringForNoiseValue(arg0: number, arg1: $Climate$Parameter_[]): string;
        getTemperatureThresholds(): $Climate$Parameter[];
        getHumidityThresholds(): $Climate$Parameter[];
        getErosionThresholds(): $Climate$Parameter[];
        getContinentalnessThresholds(): $Climate$Parameter[];
        getPeaksAndValleysThresholds(): $Climate$Parameter[];
        getWeirdnessThresholds(): $Climate$Parameter[];
        spawnTarget(): $List<$Climate$ParameterPoint>;
        addBiomes(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        static getDebugStringForPeaksAndValleys(arg0: number): string;
        getDebugStringForContinentalness(arg0: number): string;
        getDebugStringForErosion(arg0: number): string;
        getDebugStringForTemperature(arg0: number): string;
        getDebugStringForHumidity(arg0: number): string;
        addSurfaceBiome(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number, arg7: $ResourceKey_<$Biome>): void;
        addUndergroundBiome(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number, arg7: $ResourceKey_<$Biome>): void;
        addBottomBiome(arg0: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number, arg7: $ResourceKey_<$Biome>): void;
        nearInlandContinentalness: $Climate$Parameter;
        static PEAK_SIZE: number;
        static FAR_INLAND_START: number;
        static NEAR_INLAND_START: number;
        PLATEAU_BIOMES: $ResourceKey<$Biome>[][];
        MIDDLE_BIOMES_VARIANT: $ResourceKey<$Biome>[][];
        static EROSION_INDEX_1_START: number;
        static HIGH_START: number;
        FULL_RANGE: $Climate$Parameter;
        farInlandContinentalness: $Climate$Parameter;
        static VALLEY_SIZE: number;
        temperatures: $Climate$Parameter[];
        static LOW_START: number;
        static HIGH_END: number;
        static EROSION_INDEX_2_START: number;
        midInlandContinentalness: $Climate$Parameter;
        static MID_INLAND_START: number;
        humidities: $Climate$Parameter[];
        FROZEN_RANGE: $Climate$Parameter;
        coastContinentalness: $Climate$Parameter;
        deepOceanContinentalness: $Climate$Parameter;
        inlandContinentalness: $Climate$Parameter;
        UNFROZEN_RANGE: $Climate$Parameter;
        SHATTERED_BIOMES: $ResourceKey<$Biome>[][];
        OCEANS: $ResourceKey<$Biome>[][];
        erosions: $Climate$Parameter[];
        MIDDLE_BIOMES: $ResourceKey<$Biome>[][];
        PLATEAU_BIOMES_VARIANT: $ResourceKey<$Biome>[][];
        static EROSION_DEEP_DARK_DRYNESS_THRESHOLD: number;
        static PEAK_START: number;
        mushroomFieldsContinentalness: $Climate$Parameter;
        static DEPTH_DEEP_DARK_DRYNESS_THRESHOLD: number;
        oceanContinentalness: $Climate$Parameter;
        static PEAK_END: number;
        constructor();
        get temperatureThresholds(): $Climate$Parameter[];
        get humidityThresholds(): $Climate$Parameter[];
        get erosionThresholds(): $Climate$Parameter[];
        get continentalnessThresholds(): $Climate$Parameter[];
        get peaksAndValleysThresholds(): $Climate$Parameter[];
        get weirdnessThresholds(): $Climate$Parameter[];
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset extends $Record {
        id(): $ResourceLocation;
        provider(): $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider;
        static generateOverworldBiomes<T>(arg0: $Function_<$ResourceKey<$Biome>, T>): $Climate$ParameterList<T>;
        usedBiomes(): $Stream<$ResourceKey<$Biome>>;
        static OVERWORLD: $MultiNoiseBiomeSourceParameterList$Preset;
        static CODEC: $Codec<$MultiNoiseBiomeSourceParameterList$Preset>;
        static NETHER: $MultiNoiseBiomeSourceParameterList$Preset;
        static BY_NAME: $Map<$ResourceLocation, $MultiNoiseBiomeSourceParameterList$Preset>;
        constructor(arg0: $ResourceLocation_, arg1: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset_ = { id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_,  } | [id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_, ];
    export class $Biome implements $BiomeAccessor {
        shouldFreeze(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean): boolean;
        shouldFreeze(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        shouldSnow(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getGenerationSettings(): $BiomeGenerationSettings;
        modifiableBiomeInfo(): $ModifiableBiomeInfo;
        getSkyColor(): number;
        getMobSettings(): $MobSpawnSettings;
        hasPrecipitation(): boolean;
        coldEnoughToSnow(arg0: $BlockPos_): boolean;
        getBaseTemperature(): number;
        wrapMethod$fik000$sable$preventFreezing(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $Operation_<any>): boolean;
        warmEnoughToRain(arg0: $BlockPos_): boolean;
        shouldMeltFrozenOceanIcebergSlightly(arg0: $BlockPos_): boolean;
        getFogColor(): number;
        getSpecialEffects(): $BiomeSpecialEffects;
        getWaterColor(): number;
        getWaterFogColor(): number;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getAmbientLoop(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMood(): ($AmbientMoodSettings) | undefined;
        getAmbientAdditions(): ($AmbientAdditionsSettings) | undefined;
        getGrassColor(arg0: number, arg1: number): number;
        getFoliageColor(): number;
        getModifiedClimateSettings(): $Biome$ClimateSettings;
        getModifiedSpecialEffects(): $BiomeSpecialEffects;
        getBackgroundMusic(): ($Music) | undefined;
        getPrecipitationAt(arg0: $BlockPos_): $Biome$Precipitation;
        getClimateSettings(): $Biome$ClimateSettings;
        static CODEC: $Codec<$Holder<$Biome>>;
        static NETWORK_CODEC: $Codec<$Biome>;
        /**
         * @deprecated
         */
        static BIOME_INFO_NOISE: $PerlinSimplexNoise;
        mobSettings: $MobSpawnSettings;
        static FROZEN_TEMPERATURE_NOISE: $PerlinSimplexNoise;
        static DIRECT_CODEC: $Codec<$Biome>;
        static LIST_CODEC: $Codec<$HolderSet<$Biome>>;
        generationSettings: $BiomeGenerationSettings;
        constructor(arg0: $Biome$ClimateSettings_, arg1: $BiomeSpecialEffects, arg2: $BiomeGenerationSettings, arg3: $MobSpawnSettings);
        get skyColor(): number;
        get baseTemperature(): number;
        get fogColor(): number;
        get specialEffects(): $BiomeSpecialEffects;
        get waterColor(): number;
        get waterFogColor(): number;
        get ambientParticle(): ($AmbientParticleSettings) | undefined;
        get ambientLoop(): ($Holder<$SoundEvent>) | undefined;
        get ambientMood(): ($AmbientMoodSettings) | undefined;
        get ambientAdditions(): ($AmbientAdditionsSettings) | undefined;
        get foliageColor(): number;
        get modifiedClimateSettings(): $Biome$ClimateSettings;
        get modifiedSpecialEffects(): $BiomeSpecialEffects;
        get backgroundMusic(): ($Music) | undefined;
        get climateSettings(): $Biome$ClimateSettings;
    }
    /**
     * Values that may be interpreted as {@link $Biome}.
     */
    export type $Biome_ = RegistryTypes.WorldgenBiome;
    export interface $MultiNoiseBiomeSourceParameterList extends RegistryMarked<RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterListTag, RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList> {}
    export class $Climate$DistanceMetric<T> {
    }
    export interface $Climate$DistanceMetric<T> {
        distance(arg0: $Climate$RTree$Node<T>, arg1: number[]): number;
    }
    /**
     * Values that may be interpreted as {@link $Climate$DistanceMetric}.
     */
    export type $Climate$DistanceMetric_<T> = ((arg0: $Climate$RTree$Node<T>, arg1: number[]) => number);
    export class $Climate$RTree<T> {
        static create<T>(arg0: $List_<$Pair<$Climate$ParameterPoint_, T>>): $Climate$RTree<T>;
        search(arg0: $Climate$TargetPoint_, arg1: $Climate$DistanceMetric_<T>): T;
        static buildParameterSpace<T>(arg0: $List_<$Climate$RTree$Node<T>>): $List<$Climate$Parameter>;
    }
    export class $BiomeManager implements $BiomeManagerAccessor, $BiomeManagerAccessor$1 {
        getNoiseBiomeAtPosition(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getNoiseBiomeAtPosition(arg0: $BlockPos_): $Holder<$Biome>;
        static obfuscateSeed(arg0: number): number;
        withDifferentSource(arg0: $BiomeManager$NoiseBiomeSource_): $BiomeManager;
        getNoiseBiomeAtQuart(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        mfix$getZoomSeed(): number;
        mfix$getBiomeSource(): $BiomeManager$NoiseBiomeSource;
        catnip$getBiomeZoomSeed(): number;
        biomeZoomSeed: number;
        static CHUNK_CENTER_QUART: number;
        constructor(arg0: $BiomeManager$NoiseBiomeSource_, arg1: number);
    }
    export class $Climate$Sampler extends $Record implements $MultiNoiseSamplerHooks {
        depth(): $DensityFunction;
        fabric_getEndBiomesSampler(): $ImprovedNoise;
        fabric_setSeed(arg0: number): void;
        fabric_getSeed(): number;
        temperature(): $DensityFunction;
        humidity(): $DensityFunction;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        findSpawnPosition(): $BlockPos;
        continentalness(): $DensityFunction;
        erosion(): $DensityFunction;
        weirdness(): $DensityFunction;
        sample(arg0: number, arg1: number, arg2: number): $Climate$TargetPoint;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $List_<$Climate$ParameterPoint_>);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Sampler}.
     */
    export type $Climate$Sampler_ = { continentalness?: $DensityFunction_, humidity?: $DensityFunction_, spawnTarget?: $List_<$Climate$ParameterPoint_>, depth?: $DensityFunction_, temperature?: $DensityFunction_, erosion?: $DensityFunction_, weirdness?: $DensityFunction_,  } | [continentalness?: $DensityFunction_, humidity?: $DensityFunction_, spawnTarget?: $List_<$Climate$ParameterPoint_>, depth?: $DensityFunction_, temperature?: $DensityFunction_, erosion?: $DensityFunction_, weirdness?: $DensityFunction_, ];
    export class $Climate$SpawnFinder$Result extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Climate$SpawnFinder$Result}.
     */
    export type $Climate$SpawnFinder$Result_ = { fitness?: number, location?: $BlockPos_,  } | [fitness?: number, location?: $BlockPos_, ];
    export class $AmbientAdditionsSettings {
        getSoundEvent(): $Holder<$SoundEvent>;
        getTickChance(): number;
        static CODEC: $Codec<$AmbientAdditionsSettings>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: number);
        get soundEvent(): $Holder<$SoundEvent>;
        get tickChance(): number;
    }
    export class $Climate$ParameterPoint extends $Record {
        offset(): number;
        depth(): $Climate$Parameter;
        temperature(): $Climate$Parameter;
        humidity(): $Climate$Parameter;
        fitness(arg0: $Climate$TargetPoint_): number;
        parameterSpace(): $List<$Climate$Parameter>;
        continentalness(): $Climate$Parameter;
        erosion(): $Climate$Parameter;
        weirdness(): $Climate$Parameter;
        static CODEC: $Codec<$Climate$ParameterPoint>;
        constructor(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$ParameterPoint}.
     */
    export type $Climate$ParameterPoint_ = { continentalness?: $Climate$Parameter_, humidity?: $Climate$Parameter_, depth?: $Climate$Parameter_, temperature?: $Climate$Parameter_, erosion?: $Climate$Parameter_, weirdness?: $Climate$Parameter_, offset?: number,  } | [continentalness?: $Climate$Parameter_, humidity?: $Climate$Parameter_, depth?: $Climate$Parameter_, temperature?: $Climate$Parameter_, erosion?: $Climate$Parameter_, weirdness?: $Climate$Parameter_, offset?: number, ];
    export class $FeatureSorter$StepFeatureData extends $Record {
        features(): $List<$PlacedFeature>;
        indexMapping(): $ToIntFunction<$PlacedFeature>;
        constructor(arg0: $List_<$PlacedFeature_>);
        constructor(arg0: $List_<$PlacedFeature_>, arg1: $ToIntFunction_<$PlacedFeature>);
    }
    /**
     * Values that may be interpreted as {@link $FeatureSorter$StepFeatureData}.
     */
    export type $FeatureSorter$StepFeatureData_ = { indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>,  } | [indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>, ];
    export class $CheckerboardColumnBiomeSource extends $BiomeSource {
        static CODEC: $MapCodec<$CheckerboardColumnBiomeSource>;
        constructor(arg0: $HolderSet_<$Biome>, arg1: number);
    }
    export class $Biomes {
        static BEACH: $ResourceKey<$Biome>;
        static SAVANNA: $ResourceKey<$Biome>;
        static SUNFLOWER_PLAINS: $ResourceKey<$Biome>;
        static THE_VOID: $ResourceKey<$Biome>;
        static BIRCH_FOREST: $ResourceKey<$Biome>;
        static FROZEN_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_HILLS: $ResourceKey<$Biome>;
        static DEEP_LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_SPRUCE_TAIGA: $ResourceKey<$Biome>;
        static DEEP_FROZEN_OCEAN: $ResourceKey<$Biome>;
        static END_HIGHLANDS: $ResourceKey<$Biome>;
        static END_MIDLANDS: $ResourceKey<$Biome>;
        static FLOWER_FOREST: $ResourceKey<$Biome>;
        static CHERRY_GROVE: $ResourceKey<$Biome>;
        static ERODED_BADLANDS: $ResourceKey<$Biome>;
        static END_BARRENS: $ResourceKey<$Biome>;
        static SNOWY_TAIGA: $ResourceKey<$Biome>;
        static DEEP_DARK: $ResourceKey<$Biome>;
        static JUNGLE: $ResourceKey<$Biome>;
        static ICE_SPIKES: $ResourceKey<$Biome>;
        static OCEAN: $ResourceKey<$Biome>;
        static SMALL_END_ISLANDS: $ResourceKey<$Biome>;
        static FROZEN_RIVER: $ResourceKey<$Biome>;
        static DARK_FOREST: $ResourceKey<$Biome>;
        static THE_END: $ResourceKey<$Biome>;
        static SNOWY_PLAINS: $ResourceKey<$Biome>;
        static COLD_OCEAN: $ResourceKey<$Biome>;
        static SNOWY_SLOPES: $ResourceKey<$Biome>;
        static WINDSWEPT_SAVANNA: $ResourceKey<$Biome>;
        static LUSH_CAVES: $ResourceKey<$Biome>;
        static DRIPSTONE_CAVES: $ResourceKey<$Biome>;
        static MEADOW: $ResourceKey<$Biome>;
        static STONY_SHORE: $ResourceKey<$Biome>;
        static WINDSWEPT_FOREST: $ResourceKey<$Biome>;
        static PLAINS: $ResourceKey<$Biome>;
        static OLD_GROWTH_BIRCH_FOREST: $ResourceKey<$Biome>;
        static SAVANNA_PLATEAU: $ResourceKey<$Biome>;
        static SPARSE_JUNGLE: $ResourceKey<$Biome>;
        static STONY_PEAKS: $ResourceKey<$Biome>;
        static JAGGED_PEAKS: $ResourceKey<$Biome>;
        static RIVER: $ResourceKey<$Biome>;
        static MANGROVE_SWAMP: $ResourceKey<$Biome>;
        static WARPED_FOREST: $ResourceKey<$Biome>;
        static WOODED_BADLANDS: $ResourceKey<$Biome>;
        static NETHER_WASTES: $ResourceKey<$Biome>;
        static LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_GRAVELLY_HILLS: $ResourceKey<$Biome>;
        static BAMBOO_JUNGLE: $ResourceKey<$Biome>;
        static DEEP_COLD_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_PINE_TAIGA: $ResourceKey<$Biome>;
        static BADLANDS: $ResourceKey<$Biome>;
        static MUSHROOM_FIELDS: $ResourceKey<$Biome>;
        static DEEP_OCEAN: $ResourceKey<$Biome>;
        static TAIGA: $ResourceKey<$Biome>;
        static DESERT: $ResourceKey<$Biome>;
        static SNOWY_BEACH: $ResourceKey<$Biome>;
        static WARM_OCEAN: $ResourceKey<$Biome>;
        static BASALT_DELTAS: $ResourceKey<$Biome>;
        static FOREST: $ResourceKey<$Biome>;
        static SWAMP: $ResourceKey<$Biome>;
        static SOUL_SAND_VALLEY: $ResourceKey<$Biome>;
        static GROVE: $ResourceKey<$Biome>;
        static FROZEN_PEAKS: $ResourceKey<$Biome>;
        static CRIMSON_FOREST: $ResourceKey<$Biome>;
        constructor();
    }
    export class $MultiNoiseBiomeSource extends $BiomeSource implements $IExtendedMultiNoiseBiomeSource, $MultiNoiseBiomeSourceAccess {
        clone(): $MultiNoiseBiomeSource;
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        handler$ckf000$terrablender$getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_, arg4: $CallbackInfoReturnable<any>): void;
        static createFromPreset(arg0: $Holder_<$MultiNoiseBiomeSourceParameterList>): $MultiNoiseBiomeSource;
        handler$ckf000$terrablender$addDebugInfo(arg0: $List_<any>, arg1: $BlockPos_, arg2: $Climate$Sampler_, arg3: $CallbackInfo): void;
        stable(arg0: $ResourceKey_<$MultiNoiseBiomeSourceParameterList>): boolean;
        static createFromList(arg0: $Climate$ParameterList<$Holder_<$Biome>>): $MultiNoiseBiomeSource;
        getNoiseBiome(arg0: $Climate$TargetPoint_): $Holder<$Biome>;
        getParameters(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
        setParameters(arg0: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
        static CODEC: $MapCodec<$MultiNoiseBiomeSource>;
        static DIRECT_CODEC: $MapCodec<$Climate$ParameterList<$Holder<$Biome>>>;
    }
    export class $BiomeSource implements $BiomeResolver, $IExtendedBiomeSource {
        findClosestBiome3d(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Holder<$Biome>>, arg5: $Climate$Sampler_, arg6: $LevelReader): $Pair<$BlockPos, $Holder<$Biome>>;
        getBiomesWithin(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Climate$Sampler_): $Set<$Holder<$Biome>>;
        collectPossibleBiomes(): $Stream<$Holder<$Biome>>;
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Predicate_<$Holder<$Biome>>, arg6: $RandomSource, arg7: boolean, arg8: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        findBiomeHorizontal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Holder<$Biome>>, arg5: $RandomSource, arg6: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        possibleBiomes(): $Set<$Holder<$Biome>>;
        addDebugInfo(arg0: $List_<string>, arg1: $BlockPos_, arg2: $Climate$Sampler_): void;
        appendDeferredBiomesList(arg0: $List_<any>): void;
        fabric_modifyBiomeSet(arg0: $Set_<any>): $Set<any>;
        codec(): $MapCodec<$BiomeSource>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_): $Holder<$Biome>;
        static CODEC: $Codec<$BiomeSource>;
        constructor();
    }
}
