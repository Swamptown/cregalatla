import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $AttachmentType, $IAttachmentHolder, $AttachmentType_, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $BitStorage, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $WorldBorderListenerOnce } from "@package/net/caffeinemc/mods/lithium/common/world/listeners";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ExtendedPalettedContainer } from "@package/org/embeddedt/modernfix/chunk";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AttachmentType as $AttachmentType$1 } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $StructureSet$StructureSelectionEntry_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ChunkAccessAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Map$Entry, $Set, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $Supplier_, $Consumer_, $Predicate_, $BiConsumer_, $Function_, $UnaryOperator_, $BiPredicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $RegistryAccess$Frozen, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup } from "@package/net/minecraft/core";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Path_ } from "@package/java/nio/file";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $StructurifyChunkGenerator } from "@package/com/faboslav/structurify/common/api";
import { $IChunkGenerator } from "@package/org/embeddedt/modernfix/duck";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        createData(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: number): $PalettedContainer$Data<T>;
        factory(): $Palette$Factory;
        bits(): number;
        constructor(factory: $Palette$Factory_, bits: number);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { bits?: number, factory?: $Palette$Factory_,  } | [bits?: number, factory?: $Palette$Factory_, ];
    export class $DataLayer {
        layerToString(arg0: number): string;
        isDefinitelyHomogenous(): boolean;
        isDefinitelyFilledWith(arg0: number): boolean;
        get(arg0: number, arg1: number, arg2: number): number;
        isEmpty(): boolean;
        fill(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        copy(): $DataLayer;
        getData(): number[];
        data: number[];
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor();
        constructor(arg0: number[]);
        constructor(arg0: number);
        get definitelyHomogenous(): boolean;
        get empty(): boolean;
    }
    export class $ChunkGenerator implements $StructurifyChunkGenerator {
        getFirstOccupiedHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        getBaseColumn(arg0: number, arg1: number, arg2: $LevelHeightAccessor, arg3: $RandomState): $NoiseColumn;
        getBaseHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(arg0: $Holder_<$Biome>): $BiomeGenerationSettings;
        getGenDepth(): number;
        createState(arg0: $HolderLookup<$StructureSet_>, arg1: $RandomState, arg2: number): $ChunkGeneratorStructureState;
        getBiomeSource(): $BiomeSource;
        findNearestMapStructure(arg0: $ServerLevel, arg1: $HolderSet_<$Structure>, arg2: $BlockPos_, arg3: number, arg4: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        createBiomes(arg0: $RandomState, arg1: $Blender, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        addDebugScreenInfo(arg0: $List_<string>, arg1: $RandomState, arg2: $BlockPos_): void;
        buildSurface(arg0: $WorldGenRegion, arg1: $StructureManager, arg2: $RandomState, arg3: $ChunkAccess): void;
        applyCarvers(arg0: $WorldGenRegion, arg1: number, arg2: $RandomState, arg3: $BiomeManager, arg4: $StructureManager, arg5: $ChunkAccess, arg6: $GenerationStep$Carving_): void;
        fillFromNoise(arg0: $Blender, arg1: $RandomState, arg2: $StructureManager, arg3: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        spawnOriginalMobs(arg0: $WorldGenRegion): void;
        refreshFeaturesPerStep(): void;
        handler$ckl000$terrablender$validate(arg0: $CallbackInfo): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        wrapMethod$bio000$structurify$findNearestMapStructure(arg0: $ServerLevel, arg1: $HolderSet_<any>, arg2: $BlockPos_, arg3: number, arg4: boolean, arg5: $Operation_<any>): $Pair<any, any>;
        applyBiomeDecoration(arg0: $WorldGenLevel, arg1: $ChunkAccess, arg2: $StructureManager): void;
        getSpawnHeight(arg0: $LevelHeightAccessor): number;
        getMobsAt(arg0: $Holder_<$Biome>, arg1: $StructureManager, arg2: $MobCategory_, arg3: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        createStructures(arg0: $RegistryAccess, arg1: $ChunkGeneratorStructureState, arg2: $StructureManager, arg3: $ChunkAccess, arg4: $StructureTemplateManager): void;
        wrapMethod$bio000$structurify$trySetStructureStart(arg0: $StructureSet$StructureSelectionEntry_, arg1: $StructureManager, arg2: $RegistryAccess, arg3: $RandomState, arg4: $StructureTemplateManager, arg5: number, arg6: $ChunkAccess, arg7: $ChunkPos, arg8: $SectionPos, arg9: $Operation_<any>): boolean;
        createReferences(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkAccess): void;
        getFirstFreeHeight(arg0: number, arg1: number, arg2: $Heightmap$Types_, arg3: $LevelHeightAccessor, arg4: $RandomState): number;
        structurify$getStructureSectionClaims(): $Map<any, any>;
        structurify$getStructureChecks(): $Map<any, any>;
        structurify$getFlatnessChecks(): $Map<any, any>;
        structurify$getBiomeChecks(): $Map<any, any>;
        structurify$getOverlapChecks(): $Map<any, any>;
        getMinY(): number;
        validate(): void;
        codec(): $MapCodec<$ChunkGenerator>;
        getSeaLevel(): number;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(arg0: $BiomeSource, arg1: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        constructor(arg0: $BiomeSource);
        get genDepth(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get minY(): number;
        get seaLevel(): number;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        onResize(arg0: number, arg1: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(arg0: number): $BlockState;
        setBlock(arg0: number, arg1: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        idFor(arg0: T): number;
        get serializedSize(): number;
        get size(): number;
    }
    export class $ChunkGeneratorStructureState implements $IChunkGenerator {
        getLevelSeed(): number;
        hasStructureChunkInRange(arg0: $Holder_<$StructureSet>, arg1: number, arg2: number, arg3: number): boolean;
        getRingPositionsFor(arg0: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        randomState(): $RandomState;
        mfix$setStrongholdCachePath(arg0: $Path_, arg1: $RegistryAccess$Frozen): void;
        ensureStructuresGenerated(): void;
        static createForFlat(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        static createForNormal(arg0: $RandomState, arg1: number, arg2: $BiomeSource, arg3: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        getPlacementsForStructure(arg0: $Holder_<$Structure>): $List<$StructurePlacement>;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        getStartForStructure(arg0: $Structure_): $StructureStart;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        paletteEntries(): $List<T>;
        storage(): ($LongStream) | undefined;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>,  } | [storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>, ];
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $LevelChunk, arg1: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        calculateBitsForSerialization<A>(arg0: $IdMap<A>, arg1: number): number;
        size(): number;
        getIndex(arg0: number, arg1: number, arg2: number): number;
        getConfiguration<A>(arg0: $IdMap<A>, arg1: number): $PalettedContainer$Configuration<A>;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static GLOBAL_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
        constructor(arg0: number);
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>,  } | [blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity, $WorldBorderListenerOnce {
        onBorderCenterSet(arg0: $WorldBorder, arg1: number, arg2: number): void;
        onBorderSizeSet(arg0: $WorldBorder, arg1: number): void;
        onBorderSizeLerping(arg0: $WorldBorder, arg1: number, arg2: number, arg3: number): void;
        onBorderSetDamageSafeZOne(arg0: $WorldBorder, arg1: number): void;
        onBorderSetDamagePerBlock(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningTime(arg0: $WorldBorder, arg1: number): void;
        onBorderSetWarningBlocks(arg0: $WorldBorder, arg1: number): void;
        onAreaReplaced(arg0: $WorldBorder): void;
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $ChunkAccessAccessor {
        removeData<T>(arg0: $AttachmentType_<T>): T;
        markPosForPostprocessing(arg0: $BlockPos_): void;
        getHighestFilledSectionIndex(): number;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        getOrCreateHeightmapUnprimed(arg0: $Heightmap$Types_): $Heightmap;
        isLightCorrect(): boolean;
        getListenerRegistry(arg0: number): $GameEventListenerRegistry;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        setHeightmap(arg0: $Heightmap$Types_, arg1: number[]): void;
        hasPrimedHeightmap(arg0: $Heightmap$Types_): boolean;
        getStartForStructure(arg0: $Structure_): $StructureStart;
        setStartForStructure(arg0: $Structure_, arg1: $StructureStart): void;
        setAllStarts(arg0: $Map_<$Structure_, $StructureStart>): void;
        getReferencesForStructure(arg0: $Structure_): $LongSet;
        addReferenceForStructure(arg0: $Structure_, arg1: number): void;
        setAllReferences(arg0: $Map_<$Structure_, $LongSet>): void;
        isYSpaceEmpty(arg0: number, arg1: number): boolean;
        isSectionEmpty(arg0: number): boolean;
        isUnsaved(): boolean;
        getPersistedStatus(): $ChunkStatus;
        getHighestGeneratedStatus(): $ChunkStatus;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        getPostProcessing(): $ShortList[];
        addPackedPostProcess(arg0: number, arg1: number): void;
        static getOrCreateOffsetList(arg0: $ShortList[], arg1: number): $ShortList;
        setBlockEntityNbt(arg0: $CompoundTag_): void;
        getBlockEntityNbt(arg0: $BlockPos_): $CompoundTag;
        getBlockEntityNbtForSaving(arg0: $BlockPos_, arg1: $HolderLookup$Provider): $CompoundTag;
        findBlockLightSources(arg0: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        getUpgradeData(): $UpgradeData;
        isOldNoiseGeneration(): boolean;
        getBlendingData(): $BlendingData;
        setBlendingData(arg0: $BlendingData): void;
        incrementInhabitedTime(arg0: number): void;
        setInhabitedTime(arg0: number): void;
        setLightCorrect(arg0: boolean): void;
        getOrCreateNoiseChunk(arg0: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        /**
         * @deprecated
         */
        carverBiome(arg0: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_): void;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        hasAnyStructureReferences(): boolean;
        getAllReferences(): $Map<any, any>;
        isUpgrading(): boolean;
        initializeLightSources(): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        addEntity(arg0: $Entity): void;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        getSection(arg0: number): $LevelChunkSection;
        getLevel(): $Level;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getHeight(): number;
        getData<T>(arg0: $AttachmentType_<T>): T;
        getSections(): $LevelChunkSection[];
        getMinBuildHeight(): number;
        hasAttachments(): boolean;
        hasData(arg0: $AttachmentType_<never>): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        setBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean): $BlockState;
        getPos(): $ChunkPos;
        setBlockEntity(arg0: $BlockEntity): void;
        removeBlockEntity(arg0: $BlockPos_): void;
        setUnsaved(arg0: boolean): void;
        getInhabitedTime(): number;
        getBlockTicks(): $TickContainerAccess<$Block>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        syncData(arg0: $AttachmentType_<never>): void;
        syncData(arg0: $Supplier_<$AttachmentType<never>>): void;
        hasData<T>(arg0: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        getExistingData<T>(arg0: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        getExistingData<T>(arg0: $AttachmentType_<T>): (T) | undefined;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getModelData(arg0: $BlockPos_): $ModelData;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getAttached<A>(arg0: $AttachmentType$1<A>): A;
        setAttached<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrThrow<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrSet<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrElse<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrGet<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        hasAttached(arg0: $AttachmentType$1<never>): boolean;
        removeAttached<A>(arg0: $AttachmentType$1<A>): A;
        modifyAttached<A>(arg0: $AttachmentType$1<A>, arg1: $UnaryOperator_<A>): A;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: number, arg5: $LevelChunkSection[], arg6: $BlendingData);
        get highestFilledSectionIndex(): number;
        get highestSectionPosition(): number;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get persistedStatus(): $ChunkStatus;
        get highestGeneratedStatus(): $ChunkStatus;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get oldNoiseGeneration(): boolean;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get upgrading(): boolean;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get level(): $Level;
        get minBuildHeight(): number;
        get pos(): $ChunkPos;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity, $WrappedBlockEntityTickInvokerAccessor {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        getSerializedSize(): number;
        write(arg0: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        copyFrom(arg0: $Palette<T>, arg1: $BitStorage): void;
        storage(): $BitStorage;
        palette(): $Palette<T>;
        constructor(configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, palette: $Palette<T>);
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { palette?: $Palette<any>, configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage,  } | [palette?: $Palette<any>, configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $ExtendedPalettedContainer<any>, $PalettedContainerROExtension<any> {
        getSerializedSize(): number;
        static codecRW<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainer<T>>;
        static codecRO<T>(arg0: $IdMap<T>, arg1: $Codec<T>, arg2: $PalettedContainer$Strategy, arg3: T): $Codec<$PalettedContainerRO<T>>;
        handler$bmj000$lithium$removeLockHelper(arg0: $CallbackInfo): void;
        getAndSetUnchecked(arg0: number, arg1: number, arg2: number, arg3: T): T;
        handler$bmm000$lithium$count(arg0: $PalettedContainer$CountConsumer_<any>, arg1: $CallbackInfo): void;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        sodium$copy(): $PalettedContainerRO<any>;
        pack(arg0: $IdMap<any>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<any>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        mfix$getPalette(): $Palette<any>;
        getAll(arg0: $Consumer_<T>): void;
        get(arg0: number): T;
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        set(arg0: number, arg1: number, arg2: number, arg3: T): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        getAndSet(arg0: number, arg1: number, arg2: number, arg3: T): T;
        release(): void;
        acquire(): void;
        recreate(): $PalettedContainer<T>;
        onResize(arg0: number, arg1: T): number;
        constructor(arg0: $IdMap<T>, arg1: T, arg2: $PalettedContainer$Strategy);
        constructor(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainer$Configuration_<T>, arg3: $BitStorage, arg4: $List_<T>);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(arg0: T, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData {
        upgrade(arg0: $LevelChunk): void;
        isEmpty(): boolean;
        write(): $CompoundTag;
        static CHUNKY_FIXERS: $Set<$UpgradeData$BlockFixer>;
        static EMPTY: $UpgradeData;
        static MAP: $Map<$Block, $UpgradeData$BlockFixer>;
        constructor(arg0: $CompoundTag_, arg1: $LevelHeightAccessor);
        get empty(): boolean;
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        getSerializedSize(): number;
        pack(arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        maybeHas(arg0: $Predicate_<T>): boolean;
        getAll(arg0: $Consumer_<T>): void;
        get(arg0: number, arg1: number, arg2: number): T;
        count(arg0: $PalettedContainer$CountConsumer_<T>): void;
        write(arg0: $FriendlyByteBuf): void;
        recreate(): $PalettedContainer<T>;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(arg0: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(arg0: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        idFor(arg0: T): number;
        constructor(arg0: $IdMap<T>, arg1: $PaletteResize_<T>, arg2: $List_<T>);
        get serializedSize(): number;
        get size(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(arg0: number);
    }
    export class $LevelChunkSection {
        recalcBlockCounts(): void;
        isRandomlyTickingBlocks(): boolean;
        isRandomlyTickingFluids(): boolean;
        getSerializedSize(): number;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        readBiomes(arg0: $FriendlyByteBuf): void;
        maybeHas(arg0: $Predicate_<$BlockState>): boolean;
        fillBiomesFromNoise(arg0: $BiomeResolver_, arg1: $Climate$Sampler_, arg2: number, arg3: number, arg4: number): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        release(): void;
        acquire(): void;
        getStates(): $PalettedContainer<$BlockState>;
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_): $BlockState;
        setBlockState(arg0: number, arg1: number, arg2: number, arg3: $BlockState_, arg4: boolean): $BlockState;
        isRandomlyTicking(): boolean;
        hasOnlyAir(): boolean;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(arg0: $Registry<$Biome_>);
        constructor(arg0: $PalettedContainer<$BlockState_>, arg1: $PalettedContainerRO<$Holder_<$Biome>>);
        get randomlyTickingBlocks(): boolean;
        get randomlyTickingFluids(): boolean;
        get serializedSize(): number;
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get states(): $PalettedContainer<$BlockState>;
        get randomlyTicking(): boolean;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder {
        redirect$fje000$sable$getLightEngine(arg0: $ChunkSource): $LevelLightEngine;
        isTicking(arg0: $BlockPos_): boolean;
        runPostLoad(): void;
        replaceWithPacketData(arg0: $FriendlyByteBuf, arg1: $CompoundTag_, arg2: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        replaceBiomes(arg0: $FriendlyByteBuf): void;
        setLoaded(arg0: boolean): void;
        postProcessGeneration(): void;
        registerTickContainerInLevel(arg0: $ServerLevel): void;
        setFullStatus(arg0: $Supplier_<$FullChunkStatus>): void;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        setGameEventListenerRegistrySections(arg0: $Int2ObjectMap<any>): void;
        clearAllBlockEntities(): void;
        unregisterTickContainerFromLevel(arg0: $ServerLevel): void;
        unpackTicks(arg0: number): void;
        isEmpty(): boolean;
        getFluidState(arg0: number, arg1: number, arg2: number): $FluidState;
        getBlockEntity(arg0: $BlockPos_, arg1: $LevelChunk$EntityCreationType_): $BlockEntity;
        addAndRegisterBlockEntity(arg0: $BlockEntity): void;
        getFullStatus(): $FullChunkStatus;
        upgradeData: $UpgradeData;
        xaero_wm_chunkClean: boolean;
        chunkPos: $ChunkPos;
        level: $Level;
        xaero_chunkClean: boolean;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $Level_, arg1: $ChunkPos);
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $UpgradeData, arg3: $LevelChunkTicks<$Block_>, arg4: $LevelChunkTicks<$Fluid_>, arg5: number, arg6: $LevelChunkSection[], arg7: $LevelChunk$PostLoadProcessor_, arg8: $BlendingData);
        constructor(arg0: $ServerLevel, arg1: $ProtoChunk, arg2: $LevelChunk$PostLoadProcessor_);
        set loaded(value: boolean);
        set gameEventListenerRegistrySections(value: $Int2ObjectMap<any>);
        get empty(): boolean;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        getLoadedChunksCount(): number;
        updateChunkForced(arg0: $ChunkPos, arg1: boolean): void;
        tick(arg0: $BooleanSupplier_, arg1: boolean): void;
        close(): void;
        getChunk(arg0: number, arg1: number, arg2: boolean): $LevelChunk;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getChunkNow(arg0: number, arg1: number): $LevelChunk;
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        hasChunk(arg0: number, arg1: number): boolean;
        getLightEngine(): $LevelLightEngine;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        gatherStats(): string;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        constructor();
        get loadedChunksCount(): number;
        get lightEngine(): $LevelLightEngine;
    }
    export class $ProtoChunk extends $ChunkAccess {
        setPersistedStatus(arg0: $ChunkStatus_): void;
        setLightEngine(arg0: $LevelLightEngine): void;
        setBelowZeroRetrogen(arg0: $BelowZeroRetrogen): void;
        setCarvingMask(arg0: $GenerationStep$Carving_, arg1: $CarvingMask): void;
        getEntities(): $List<$CompoundTag>;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        static unpackOffsetCoordinates(arg0: number, arg1: number, arg2: $ChunkPos): $BlockPos;
        addEntity(arg0: $CompoundTag_): void;
        getCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        getOrCreateCarvingMask(arg0: $GenerationStep$Carving_): $CarvingMask;
        static packOffsetCoordinates(arg0: $BlockPos_): number;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelChunkSection[], arg3: $ProtoChunkTicks<$Block_>, arg4: $ProtoChunkTicks<$Fluid_>, arg5: $LevelHeightAccessor, arg6: $Registry<$Biome_>, arg7: $BlendingData);
        constructor(arg0: $ChunkPos, arg1: $UpgradeData, arg2: $LevelHeightAccessor, arg3: $Registry<$Biome_>, arg4: $BlendingData);
        set persistedStatus(value: $ChunkStatus_);
        set lightEngine(value: $LevelLightEngine);
        set belowZeroRetrogen(value: $BelowZeroRetrogen);
        get entities(): $List<$CompoundTag>;
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        getEntries(): $List<T>;
        idFor(arg0: T): number;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>, arg3: $List_<T>);
        constructor(arg0: $IdMap<T>, arg1: number, arg2: $PaletteResize_<T>);
        get serializedSize(): number;
        get size(): number;
        get entries(): $List<T>;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        processChunk(arg0: $LevelAccessor): void;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        getSection(arg0: $BlockPos_): $LevelChunkSection;
        close(): void;
        getBlockState(arg0: $BlockPos_): $BlockState;
        constructor(arg0: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(arg0: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        getLevel(): $BlockGetter;
        getChunkForLighting(arg0: number, arg1: number): $LightChunk;
        onLightUpdate(arg0: $LightLayer_, arg1: $SectionPos): void;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(arg0: number, arg1: $IdMap<A>, arg2: $PaletteResize_<A>, arg3: $List_<A>): $Palette<A>;
        idFor(arg0: T): number;
        constructor(arg0: $IdMap<T>);
        get serializedSize(): number;
        get size(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        getSerializedSize(): number;
        maybeHas(arg0: $Predicate_<T>): boolean;
        valueFor(arg0: number): T;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        idFor(arg0: T): number;
        get serializedSize(): number;
        get size(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        upgradeData: $UpgradeData;
        xaero_wm_chunkClean: boolean;
        chunkPos: $ChunkPos;
        level: $Level;
        xaero_chunkClean: boolean;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $Level_, arg1: $ChunkPos, arg2: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        setAdditionalMask(arg0: $CarvingMask$Mask_): void;
        get(arg0: number, arg1: number, arg2: number): boolean;
        toArray(): number[];
        stream(arg0: $ChunkPos): $Stream<$BlockPos>;
        set(arg0: number, arg1: number, arg2: number): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number[], arg1: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
