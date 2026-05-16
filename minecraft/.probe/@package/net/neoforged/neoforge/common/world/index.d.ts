import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $ListTag, $ListTag_ } from "@package/net/minecraft/nbt";
import { $AmbientParticleSettings, $Biome$ClimateSettings, $MobSpawnSettings$Builder, $AmbientAdditionsSettings, $BiomeGenerationSettings$PlainBuilder, $BiomeGenerationSettings, $BiomeSpecialEffects, $BiomeSpecialEffects$Builder, $Biome, $Biome$TemperatureModifier_, $AmbientMoodSettings, $MobSpawnSettings$MobSpawnCost, $Biome$TemperatureModifier, $MobSpawnSettings, $MobSpawnSettings$SpawnerData, $BiomeSpecialEffects$GrassColorModifier, $MobSpawnSettings$MobSpawnCost_, $Biome$ClimateSettings_ } from "@package/net/minecraft/world/level/biome";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ClientboundLevelChunkWithLightPacket } from "@package/net/minecraft/network/protocol/game";
import { $List, $Map_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $AuxiliaryLightManagerMixin } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $HolderSet, $HolderSet_, $Holder, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $Enum, $Record } from "@package/java/lang";
import { $Structure$StructureSettings_, $TerrainAdjustment, $Structure$StructureSettings, $StructureSpawnOverride$BoundingBoxType_, $BoundingBox, $TerrainAdjustment_, $StructureSpawnOverride_, $Structure, $StructureSpawnOverride, $StructureSpawnOverride$BoundingBoxType } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GenerationStep$Carving, $GenerationStep$Decoration, $GenerationStep$Decoration_, $GenerationStep$Carving_ } from "@package/net/minecraft/world/level/levelgen";
import { $SodiumAuxiliaryLightManager } from "@package/net/caffeinemc/mods/sodium/client/world";
export * as poi from "@package/net/neoforged/neoforge/common/world/poi";
export * as chunk from "@package/net/neoforged/neoforge/common/world/chunk";

declare module "@package/net/neoforged/neoforge/common/world" {
    export class $BiomeModifiers$AddCarversBiomeModifier extends $Record implements $BiomeModifier {
        step(): $GenerationStep$Carving;
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        carvers(): $HolderSet<$ConfiguredWorldCarver<never>>;
        constructor(biomes: $HolderSet_<$Biome>, carvers: $HolderSet_<$ConfiguredWorldCarver<never>>, step: $GenerationStep$Carving_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddCarversBiomeModifier}.
     */
    export type $BiomeModifiers$AddCarversBiomeModifier_ = { step?: $GenerationStep$Carving_, biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>,  } | [step?: $GenerationStep$Carving_, biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, ];
    export class $BiomeModifiers$RemoveSpawnsBiomeModifier extends $Record implements $BiomeModifier {
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveSpawnsBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveSpawnsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
        getCarvers(arg0: $GenerationStep$Carving_): $List<$Holder<$ConfiguredWorldCarver<never>>>;
        getFeatures(arg0: $GenerationStep$Decoration_): $List<$Holder<$PlacedFeature>>;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        carvers: $Map<$GenerationStep$Carving, $List<$Holder<$ConfiguredWorldCarver<never>>>>;
        constructor(arg0: $BiomeGenerationSettings);
    }
    export class $LevelChunkAuxiliaryLightManager implements $AuxiliaryLightManager, $INBTSerializable<$ListTag> {
        sendLightDataTo(arg0: $ClientboundLevelChunkWithLightPacket): $Packet<never>;
        setLightAt(arg0: $BlockPos_, arg1: number): void;
        getLightAt(arg0: $BlockPos_): number;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $ListTag_): void;
        handleLightDataSync(arg0: $Map_<$BlockPos_, number>): void;
        removeLightAt(arg0: $BlockPos_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $ListTag;
        static LIGHT_NBT_KEY: string;
        constructor(arg0: $LevelChunk);
    }
    export class $BiomeModifiers$RemoveCarversBiomeModifier extends $Record implements $BiomeModifier {
        steps(): $Set<$GenerationStep$Carving>;
        static allSteps(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$ConfiguredWorldCarver<never>>): $BiomeModifiers$RemoveCarversBiomeModifier;
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        carvers(): $HolderSet<$ConfiguredWorldCarver<never>>;
        constructor(biomes: $HolderSet_<$Biome>, carvers: $HolderSet_<$ConfiguredWorldCarver<never>>, steps: $Set_<$GenerationStep$Carving_>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveCarversBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveCarversBiomeModifier_ = { steps?: $Set_<$GenerationStep$Carving_>, biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>,  } | [steps?: $Set_<$GenerationStep$Carving_>, biomes?: $HolderSet_<$Biome>, carvers?: $HolderSet_<$ConfiguredWorldCarver<never>>, ];
    export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
        removeSpawnCost(...arg0: $EntityType_<never>[]): $MobSpawnSettingsBuilder;
        disablePlayerSpawn(): $MobSpawnSettingsBuilder;
        getSpawner(arg0: $MobCategory_): $List<$MobSpawnSettings$SpawnerData>;
        getCost(arg0: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        getSpawnerTypes(): $Set<$MobCategory>;
        getEntityTypes(): $Set<$EntityType<never>>;
        getProbability(): number;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor(arg0: $MobSpawnSettings);
        get spawnerTypes(): $Set<$MobCategory>;
        get entityTypes(): $Set<$EntityType<never>>;
        get probability(): number;
    }
    export class $ModifiableStructureInfo$StructureInfo extends $Record {
        structureSettings(): $Structure$StructureSettings;
        constructor(structureSettings: $Structure$StructureSettings_);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableStructureInfo$StructureInfo}.
     */
    export type $ModifiableStructureInfo$StructureInfo_ = { structureSettings?: $Structure$StructureSettings_,  } | [structureSettings?: $Structure$StructureSettings_, ];
    export class $ModifiableBiomeInfo$BiomeInfo$Builder {
        static copyOf(arg0: $ModifiableBiomeInfo$BiomeInfo_): $ModifiableBiomeInfo$BiomeInfo$Builder;
        build(): $ModifiableBiomeInfo$BiomeInfo;
        getMobSpawnSettings(): $MobSpawnSettingsBuilder;
        getGenerationSettings(): $BiomeGenerationSettingsBuilder;
        getClimateSettings(): $ClimateSettingsBuilder;
        getSpecialEffects(): $BiomeSpecialEffectsBuilder;
        get mobSpawnSettings(): $MobSpawnSettingsBuilder;
        get generationSettings(): $BiomeGenerationSettingsBuilder;
        get climateSettings(): $ClimateSettingsBuilder;
        get specialEffects(): $BiomeSpecialEffectsBuilder;
    }
    export class $PieceBeardifierModifier {
    }
    export interface $PieceBeardifierModifier {
        getGroundLevelDelta(): number;
        getTerrainAdjustment(): $TerrainAdjustment;
        getBeardifierBox(): $BoundingBox;
        get groundLevelDelta(): number;
        get terrainAdjustment(): $TerrainAdjustment;
        get beardifierBox(): $BoundingBox;
    }
    export class $BiomeModifiers$RemoveSpawnCostsBiomeModifier extends $Record implements $BiomeModifier {
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveSpawnCostsBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveSpawnCostsBiomeModifier_ = { biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [biomes?: $HolderSet_<$Biome>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $ClimateSettingsBuilder {
        static copyOf(arg0: $Biome$ClimateSettings_): $ClimateSettingsBuilder;
        static create(arg0: boolean, arg1: number, arg2: $Biome$TemperatureModifier_, arg3: number): $ClimateSettingsBuilder;
        build(): $Biome$ClimateSettings;
        setHasPrecipitation(arg0: boolean): void;
        setTemperature(arg0: number): void;
        getTemperatureModifier(): $Biome$TemperatureModifier;
        setTemperatureModifier(arg0: $Biome$TemperatureModifier_): void;
        getDownfall(): number;
        setDownfall(arg0: number): void;
        getTemperature(): number;
        hasPrecipitation(): boolean;
    }
    export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {
        static copyOf(arg0: $StructureSpawnOverride_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        build(): $StructureSpawnOverride;
        removeSpawn(arg0: $MobSpawnSettings$SpawnerData): void;
        getSpawns(): $List<$MobSpawnSettings$SpawnerData>;
        removeSpawns(arg0: $Predicate_<$MobSpawnSettings$SpawnerData>): void;
        addSpawn(arg0: $MobSpawnSettings$SpawnerData): void;
        getBoundingBox(): $StructureSpawnOverride$BoundingBoxType;
        setBoundingBox(arg0: $StructureSpawnOverride$BoundingBoxType_): void;
        get spawns(): $List<$MobSpawnSettings$SpawnerData>;
    }
    export class $StructureModifier {
        static DIRECT_CODEC: $Codec<$StructureModifier>;
        static LIST_CODEC: $Codec<$HolderSet<$StructureModifier>>;
        static REFERENCE_CODEC: $Codec<$Holder<$StructureModifier>>;
    }
    export interface $StructureModifier {
        codec(): $MapCodec<$StructureModifier>;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
    }
    /**
     * Values that may be interpreted as {@link $StructureModifier}.
     */
    export type $StructureModifier_ = RegistryTypes.NeoforgeStructureModifier;
    export class $StructureModifiers$ClearSpawnsStructureModifier extends $Record implements $StructureModifier {
        categories(): $Set<$MobCategory>;
        codec(): $MapCodec<$StructureModifier>;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        structures(): $HolderSet<$Structure>;
        constructor(structures: $HolderSet_<$Structure>, categories: $Set_<$MobCategory_>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$ClearSpawnsStructureModifier}.
     */
    export type $StructureModifiers$ClearSpawnsStructureModifier_ = { structures?: $HolderSet_<$Structure>, categories?: $Set_<$MobCategory_>,  } | [structures?: $HolderSet_<$Structure>, categories?: $Set_<$MobCategory_>, ];
    export class $StructureModifiers {
    }
    export class $BiomeModifier$Phase extends $Enum<$BiomeModifier$Phase> {
        static values(): $BiomeModifier$Phase[];
        static valueOf(arg0: string): $BiomeModifier$Phase;
        static ADD: $BiomeModifier$Phase;
        static MODIFY: $BiomeModifier$Phase;
        static AFTER_EVERYTHING: $BiomeModifier$Phase;
        static REMOVE: $BiomeModifier$Phase;
        static BEFORE_EVERYTHING: $BiomeModifier$Phase;
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifier$Phase}.
     */
    export type $BiomeModifier$Phase_ = "before_everything" | "add" | "remove" | "modify" | "after_everything";
    export class $BiomeModifier {
        static DIRECT_CODEC: $Codec<$BiomeModifier>;
        static LIST_CODEC: $Codec<$HolderSet<$BiomeModifier>>;
        static REFERENCE_CODEC: $Codec<$Holder<$BiomeModifier>>;
    }
    export interface $BiomeModifier {
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifier}.
     */
    export type $BiomeModifier_ = RegistryTypes.NeoforgeBiomeModifier;
    export class $StructureModifiers$AddSpawnsStructureModifier extends $Record implements $StructureModifier {
        static singleSpawn(arg0: $HolderSet_<$Structure>, arg1: $MobSpawnSettings$SpawnerData): $StructureModifiers$AddSpawnsStructureModifier;
        spawners(): $List<$MobSpawnSettings$SpawnerData>;
        codec(): $MapCodec<$StructureModifier>;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        structures(): $HolderSet<$Structure>;
        constructor(structures: $HolderSet_<$Structure>, spawners: $List_<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$AddSpawnsStructureModifier}.
     */
    export type $StructureModifiers$AddSpawnsStructureModifier_ = { structures?: $HolderSet_<$Structure>, spawners?: $List_<$MobSpawnSettings$SpawnerData>,  } | [structures?: $HolderSet_<$Structure>, spawners?: $List_<$MobSpawnSettings$SpawnerData>, ];
    export class $StructureSettingsBuilder {
        static copyOf(arg0: $Structure$StructureSettings_): $StructureSettingsBuilder;
        build(): $Structure$StructureSettings;
        setBiomes(arg0: $HolderSet_<$Biome>): void;
        setTerrainAdaptation(arg0: $TerrainAdjustment_): void;
        getOrAddSpawnOverrides(arg0: $MobCategory_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        getSpawnOverrides(arg0: $MobCategory_): $StructureSettingsBuilder$StructureSpawnOverrideBuilder;
        removeSpawnOverrides(arg0: $MobCategory_): void;
        getDecorationStep(): $GenerationStep$Decoration;
        setDecorationStep(arg0: $GenerationStep$Decoration_): void;
        getBiomes(): $HolderSet<$Biome>;
        getTerrainAdaptation(): $TerrainAdjustment;
    }
    export class $StructureModifiers$RemoveSpawnsStructureModifier extends $Record implements $StructureModifier {
        codec(): $MapCodec<$StructureModifier>;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        structures(): $HolderSet<$Structure>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        constructor(structures: $HolderSet_<$Structure>, entityTypes: $HolderSet_<$EntityType<never>>);
    }
    /**
     * Values that may be interpreted as {@link $StructureModifiers$RemoveSpawnsStructureModifier}.
     */
    export type $StructureModifiers$RemoveSpawnsStructureModifier_ = { structures?: $HolderSet_<$Structure>, entityTypes?: $HolderSet_<$EntityType<never>>,  } | [structures?: $HolderSet_<$Structure>, entityTypes?: $HolderSet_<$EntityType<never>>, ];
    export class $NoneStructureModifier implements $StructureModifier {
        codec(): $MapCodec<$StructureModifier>;
        modify(arg0: $Holder_<$Structure>, arg1: $StructureModifier$Phase_, arg2: $ModifiableStructureInfo$StructureInfo$Builder): void;
        static INSTANCE: $NoneStructureModifier;
        constructor();
    }
    export class $NoneBiomeModifier implements $BiomeModifier {
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        static INSTANCE: $NoneBiomeModifier;
        constructor();
    }
    export class $BiomeModifiers$RemoveFeaturesBiomeModifier extends $Record implements $BiomeModifier {
        steps(): $Set<$GenerationStep$Decoration>;
        static allSteps(arg0: $HolderSet_<$Biome>, arg1: $HolderSet_<$PlacedFeature>): $BiomeModifiers$RemoveFeaturesBiomeModifier;
        features(): $HolderSet<$PlacedFeature>;
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        constructor(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, steps: $Set_<$GenerationStep$Decoration_>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$RemoveFeaturesBiomeModifier}.
     */
    export type $BiomeModifiers$RemoveFeaturesBiomeModifier_ = { steps?: $Set_<$GenerationStep$Decoration_>, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>,  } | [steps?: $Set_<$GenerationStep$Decoration_>, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>, ];
    export interface $StructureModifier extends RegistryMarked<RegistryTypes.NeoforgeStructureModifierTag, RegistryTypes.NeoforgeStructureModifier> {}
    export class $ModifiableStructureInfo$StructureInfo$Builder {
        static copyOf(arg0: $ModifiableStructureInfo$StructureInfo_): $ModifiableStructureInfo$StructureInfo$Builder;
        build(): $ModifiableStructureInfo$StructureInfo;
        getStructureSettings(): $StructureSettingsBuilder;
        get structureSettings(): $StructureSettingsBuilder;
    }
    export class $BiomeModifiers$AddFeaturesBiomeModifier extends $Record implements $BiomeModifier {
        step(): $GenerationStep$Decoration;
        features(): $HolderSet<$PlacedFeature>;
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        constructor(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, step: $GenerationStep$Decoration_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddFeaturesBiomeModifier}.
     */
    export type $BiomeModifiers$AddFeaturesBiomeModifier_ = { step?: $GenerationStep$Decoration_, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>,  } | [step?: $GenerationStep$Decoration_, biomes?: $HolderSet_<$Biome>, features?: $HolderSet_<$PlacedFeature>, ];
    export class $AuxiliaryLightManager {
    }
    export interface $AuxiliaryLightManager extends $AuxiliaryLightManagerMixin, $SodiumAuxiliaryLightManager {
        setLightAt(arg0: $BlockPos_, arg1: number): void;
        removeLightAt(arg0: $BlockPos_): void;
        getLightAt(arg0: $BlockPos_): number;
    }
    export class $ModifiableStructureInfo {
        get(): $ModifiableStructureInfo$StructureInfo;
        getModifiedStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        applyStructureModifiers(arg0: $Holder_<$Structure>, arg1: $List_<$StructureModifier_>): void;
        getOriginalStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        constructor(arg0: $ModifiableStructureInfo$StructureInfo_);
        get modifiedStructureInfo(): $ModifiableStructureInfo$StructureInfo;
        get originalStructureInfo(): $ModifiableStructureInfo$StructureInfo;
    }
    export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
        static copyOf(arg0: $BiomeSpecialEffects): $BiomeSpecialEffectsBuilder;
        static create(arg0: number, arg1: number, arg2: number, arg3: number): $BiomeSpecialEffectsBuilder;
        getAmbientLoopSound(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMoodSound(): ($AmbientMoodSettings) | undefined;
        getAmbientAdditionsSound(): ($AmbientAdditionsSettings) | undefined;
        waterColor(): number;
        getGrassColorOverride(): (number) | undefined;
        getFoliageColorOverride(): (number) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        getSkyColor(): number;
        getFogColor(): number;
        getWaterFogColor(): number;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getBackgroundMusic(): ($Music) | undefined;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
    }
    export class $BiomeModifiers {
    }
    export class $ModifiableBiomeInfo$BiomeInfo extends $Record {
        generationSettings(): $BiomeGenerationSettings;
        mobSpawnSettings(): $MobSpawnSettings;
        climateSettings(): $Biome$ClimateSettings;
        effects(): $BiomeSpecialEffects;
        constructor(climateSettings: $Biome$ClimateSettings_, effects: $BiomeSpecialEffects, generationSettings: $BiomeGenerationSettings, mobSpawnSettings: $MobSpawnSettings);
    }
    /**
     * Values that may be interpreted as {@link $ModifiableBiomeInfo$BiomeInfo}.
     */
    export type $ModifiableBiomeInfo$BiomeInfo_ = { effects?: $BiomeSpecialEffects, climateSettings?: $Biome$ClimateSettings_, mobSpawnSettings?: $MobSpawnSettings, generationSettings?: $BiomeGenerationSettings,  } | [effects?: $BiomeSpecialEffects, climateSettings?: $Biome$ClimateSettings_, mobSpawnSettings?: $MobSpawnSettings, generationSettings?: $BiomeGenerationSettings, ];
    export class $BiomeModifiers$AddSpawnCostsBiomeModifier extends $Record implements $BiomeModifier {
        spawnCost(): $MobSpawnSettings$MobSpawnCost;
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        entityTypes(): $HolderSet<$EntityType<never>>;
        constructor(biomes: $HolderSet_<$Biome>, entityTypes: $HolderSet_<$EntityType<never>>, spawnCost: $MobSpawnSettings$MobSpawnCost_);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddSpawnCostsBiomeModifier}.
     */
    export type $BiomeModifiers$AddSpawnCostsBiomeModifier_ = { entityTypes?: $HolderSet_<$EntityType<never>>, biomes?: $HolderSet_<$Biome>, spawnCost?: $MobSpawnSettings$MobSpawnCost_,  } | [entityTypes?: $HolderSet_<$EntityType<never>>, biomes?: $HolderSet_<$Biome>, spawnCost?: $MobSpawnSettings$MobSpawnCost_, ];
    export class $BiomeModifiers$AddSpawnsBiomeModifier extends $Record implements $BiomeModifier {
        static singleSpawn(arg0: $HolderSet_<$Biome>, arg1: $MobSpawnSettings$SpawnerData): $BiomeModifiers$AddSpawnsBiomeModifier;
        spawners(): $List<$MobSpawnSettings$SpawnerData>;
        codec(): $MapCodec<$BiomeModifier>;
        modify(arg0: $Holder_<$Biome>, arg1: $BiomeModifier$Phase_, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder): void;
        biomes(): $HolderSet<$Biome>;
        constructor(biomes: $HolderSet_<$Biome>, spawners: $List_<$MobSpawnSettings$SpawnerData>);
    }
    /**
     * Values that may be interpreted as {@link $BiomeModifiers$AddSpawnsBiomeModifier}.
     */
    export type $BiomeModifiers$AddSpawnsBiomeModifier_ = { spawners?: $List_<$MobSpawnSettings$SpawnerData>, biomes?: $HolderSet_<$Biome>,  } | [spawners?: $List_<$MobSpawnSettings$SpawnerData>, biomes?: $HolderSet_<$Biome>, ];
    export class $ModifiableBiomeInfo {
        get(): $ModifiableBiomeInfo$BiomeInfo;
        getModifiedBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        applyBiomeModifiers(arg0: $Holder_<$Biome>, arg1: $List_<$BiomeModifier_>, arg2: $RegistryAccess): boolean;
        getOriginalBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        constructor(arg0: $ModifiableBiomeInfo$BiomeInfo_);
        get modifiedBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
        get originalBiomeInfo(): $ModifiableBiomeInfo$BiomeInfo;
    }
    export class $StructureModifier$Phase extends $Enum<$StructureModifier$Phase> {
        static values(): $StructureModifier$Phase[];
        static valueOf(arg0: string): $StructureModifier$Phase;
        static ADD: $StructureModifier$Phase;
        static MODIFY: $StructureModifier$Phase;
        static AFTER_EVERYTHING: $StructureModifier$Phase;
        static REMOVE: $StructureModifier$Phase;
        static BEFORE_EVERYTHING: $StructureModifier$Phase;
    }
    /**
     * Values that may be interpreted as {@link $StructureModifier$Phase}.
     */
    export type $StructureModifier$Phase_ = "before_everything" | "add" | "remove" | "modify" | "after_everything";
    export interface $BiomeModifier extends RegistryMarked<RegistryTypes.NeoforgeBiomeModifierTag, RegistryTypes.NeoforgeBiomeModifier> {}
}
