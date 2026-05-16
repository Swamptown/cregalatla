import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Codec, $Lifecycle, $Dynamic, $DynamicLike } from "@package/com/mojang/serialization";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $MobCategory_, $EquipmentTable_, $MobCategory, $Entity, $EntityType, $LivingEntity, $EquipmentTable, $Mob } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $RandomSource, $StringRepresentable$EnumCodec, $InclusiveRange_, $StringRepresentable, $InclusiveRange } from "@package/net/minecraft/util";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $LevelAccessor as $LevelAccessor$1 } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/super_glue";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $InteractionResult, $Difficulty_, $DifficultyInstance, $TickRateManager, $Difficulty } from "@package/net/minecraft/world";
import { $WorldViewMixin } from "@package/net/fabricmc/fabric/mixin/rendering/data";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $SoundSource_, $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $IBlockGetterExtension, $ILevelReaderExtension, $IOwnedSpawner, $ILevelExtension, $IBlockAndTintGetterExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $StructureCheckResult, $StructureCheck, $StructureStart, $Structure, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $EntityTypeTest, $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $StructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $Item, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $BiomeManager$NoiseBiomeSource, $Biome, $BiomeManager, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $LevelChunk, $StructureAccess, $BlockColumn, $ChunkSource, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Abilities, $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelData, $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $ModelDataManager, $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $CommandSource, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $LevelExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $EntityGetterKJS, $GameRulesKJS, $LevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $GameRulesIntRuleAccessor, $GameRulesAccessor } from "@package/net/fabricmc/fabric/mixin/gamerule";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $FabricBlockView } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $ClipContextExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $UUID_, $ArrayList, $Map, $List, $Collection_, $List_, $Collection, $Set, $UUID, $Optional } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ForcedChunkManager$TicketTracker } from "@package/net/neoforged/neoforge/common/world/chunk";
import { $LevelExtension as $LevelExtension$1 } from "@package/dev/engine_room/flywheel/impl/extension";
import { $Supplier_, $BiConsumer_, $Supplier, $Consumer_, $Predicate_, $Predicate, $BiConsumer, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder, $Direction_, $Direction, $HolderLookup, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $Object2IntOpenHashMap, $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $WorldGenRegion, $ChunkMap, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $Iterable, $Thread, $Iterable_, $Record, $AutoCloseable, $Class, $Object } from "@package/java/lang";
import { $WorldOptions, $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $LoadedChunksCache } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $RuleKeyExtensions } from "@package/net/fabricmc/fabric/impl/gamerule";
import { $Logger } from "@package/org/slf4j";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Fireworks_, $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $AbstractIterator } from "@package/com/google/common/collect";
import { $BlockEntityGetter } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $LithiumData, $ChunkRandomSource, $ChunkView, $LithiumData$Data } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $Stream } from "@package/java/util/stream";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomGameRuleCategory } from "@package/net/fabricmc/fabric/api/gamerule/v1";
import { $LevelReusedVectors } from "@package/dev/ryanhcode/sable/api/math";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $LevelAccessor as $LevelAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $BlockViewMixin } from "@package/net/fabricmc/fabric/mixin/blockview";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $ClipContextAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/raycast";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource, $DamageSources, $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as levelgen from "@package/net/minecraft/world/level/levelgen";
export * as lighting from "@package/net/minecraft/world/level/lighting";
export * as block from "@package/net/minecraft/world/level/block";
export * as material from "@package/net/minecraft/world/level/material";
export * as portal from "@package/net/minecraft/world/level/portal";
export * as chunk from "@package/net/minecraft/world/level/chunk";
export * as biome from "@package/net/minecraft/world/level/biome";
export * as border from "@package/net/minecraft/world/level/border";
export * as entity from "@package/net/minecraft/world/level/entity";
export * as storage from "@package/net/minecraft/world/level/storage";
export * as gameevent from "@package/net/minecraft/world/level/gameevent";
export * as saveddata from "@package/net/minecraft/world/level/saveddata";
export * as pathfinder from "@package/net/minecraft/world/level/pathfinder";
export * as timers from "@package/net/minecraft/world/level/timers";
export * as dimension from "@package/net/minecraft/world/level/dimension";
export * as redstone from "@package/net/minecraft/world/level/redstone";
export * as validation from "@package/net/minecraft/world/level/validation";

declare module "@package/net/minecraft/world/level" {
    export class $EntityGetter {
    }
    export interface $EntityGetter extends $EntityGetterKJS {
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
    }
    export class $GameRules$IntegerValue extends $GameRules$Value<$GameRules$IntegerValue> implements $GameRulesIntRuleAccessor {
        get(): number;
        copy(): $GameRules$IntegerValue;
        set(arg0: number, arg1: $MinecraftServer): void;
        static create(arg0: number, arg1: $BiConsumer_<$MinecraftServer, $GameRules$IntegerValue>): $GameRules$Type<$GameRules$IntegerValue>;
        static create(arg0: number, arg1: number, arg2: number, arg3: $BiConsumer_<$MinecraftServer, $GameRules$IntegerValue>): $GameRules$Type<$GameRules$IntegerValue>;
        static create(arg0: number): $GameRules$Type<$GameRules$IntegerValue>;
        setFrom(arg0: $GameRules$IntegerValue, arg1: $MinecraftServer): void;
        tryDeserialize(arg0: string): boolean;
        getSelf(): $GameRules$IntegerValue;
        getValue(): number;
        setValue(arg0: number): void;
        type: $GameRules$Type<$GameRules$IntegerValue>;
        constructor(arg0: $GameRules$Type<$GameRules$IntegerValue>, arg1: number);
        get self(): $GameRules$IntegerValue;
    }
    export class $LightLayer extends $Enum<$LightLayer> {
        static values(): $LightLayer[];
        static valueOf(arg0: string): $LightLayer;
        static SKY: $LightLayer;
        static BLOCK: $LightLayer;
    }
    /**
     * Values that may be interpreted as {@link $LightLayer}.
     */
    export type $LightLayer_ = "sky" | "block";
    export class $GameType extends $Enum<$GameType> implements $StringRepresentable {
        getName(): string;
        static values(): $GameType[];
        static valueOf(arg0: string): $GameType;
        getId(): number;
        getLongDisplayName(): $Component;
        getShortDisplayName(): $Component;
        updatePlayerAbilities(arg0: $Abilities): void;
        static getNullableId(arg0: $GameType_): number;
        static byNullableId(arg0: number): $GameType;
        isSurvival(): boolean;
        static byName(arg0: string, arg1: $GameType_): $GameType;
        static byName(arg0: string): $GameType;
        getSerializedName(): string;
        isCreative(): boolean;
        static byId(arg0: number): $GameType;
        isBlockPlacingRestricted(): boolean;
        getRemappedEnumConstantName(): string;
        static SURVIVAL: $GameType;
        static SPECTATOR: $GameType;
        static CODEC: $StringRepresentable$EnumCodec<$GameType>;
        static CREATIVE: $GameType;
        static ADVENTURE: $GameType;
        static DEFAULT_MODE: $GameType;
        get id(): number;
        get longDisplayName(): $Component;
        get shortDisplayName(): $Component;
        get survival(): boolean;
        get serializedName(): string;
        get creative(): boolean;
        get blockPlacingRestricted(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameType}.
     */
    export type $GameType_ = "survival" | "creative" | "adventure" | "spectator";
    export class $SignalGetter {
        static DIRECTIONS: $Direction[];
    }
    export interface $SignalGetter extends $BlockGetter {
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
    }
    export class $LevelAccessor {
    }
    export interface $LevelAccessor extends $CommonLevelAccessor, $LevelTimeAccess {
        getLevelData(): $LevelData;
        getChunkSource(): $ChunkSource;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $Vec3_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getDifficulty(): $Difficulty;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        getServer(): $MinecraftServer;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        levelEvent(arg0: $Player, arg1: number, arg2: $BlockPos_, arg3: number): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        hasChunk(arg0: number, arg1: number): boolean;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        nextSubTickCount(): number;
        dayTime(): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        get levelData(): $LevelData;
        get chunkSource(): $ChunkSource;
        get random(): $RandomSource;
        get difficulty(): $Difficulty;
        get server(): $MinecraftServer;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
    }
    export class $NaturalSpawner$SpawnState {
        canSpawnForCategory(arg0: $MobCategory_, arg1: $ChunkPos): boolean;
        getSpawnableChunkCount(): number;
        getMobCategoryCounts(): $Object2IntMap<$MobCategory>;
        constructor(arg0: number, arg1: $Object2IntOpenHashMap<$MobCategory_>, arg2: $PotentialCalculator, arg3: $LocalMobCapCalculator);
        get spawnableChunkCount(): number;
        get mobCategoryCounts(): $Object2IntMap<$MobCategory>;
    }
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor extends $LevelAccessor {
        getLevel(): $ServerLevel;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        get level(): $ServerLevel;
    }
    export class $WorldDataConfiguration extends $Record {
        expandFeatures(arg0: $FeatureFlagSet): $WorldDataConfiguration;
        dataPacks(): $DataPackConfig;
        enabledFeatures(): $FeatureFlagSet;
        static CODEC: $Codec<$WorldDataConfiguration>;
        static ENABLED_FEATURES_ID: string;
        static DEFAULT: $WorldDataConfiguration;
        constructor(arg0: $DataPackConfig, arg1: $FeatureFlagSet);
    }
    /**
     * Values that may be interpreted as {@link $WorldDataConfiguration}.
     */
    export type $WorldDataConfiguration_ = { dataPacks?: $DataPackConfig, enabledFeatures?: $FeatureFlagSet,  } | [dataPacks?: $DataPackConfig, enabledFeatures?: $FeatureFlagSet, ];
    export class $StructureManager {
        forWorldGenRegion(arg0: $WorldGenRegion): $StructureManager;
        wrapMethod$ckj000$structurify$getStartForStructure(arg0: $SectionPos, arg1: $Structure_, arg2: $StructureAccess, arg3: $Operation_<any>): $StructureStart;
        getStructureAt(arg0: $BlockPos_, arg1: $Structure_): $StructureStart;
        hasAnyStructureAt(arg0: $BlockPos_): boolean;
        getAllStructuresAt(arg0: $BlockPos_): $Map<$Structure, $LongSet>;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $Structure_): $StructureStart;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $HolderSet_<$Structure>): $StructureStart;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $Predicate_<$Holder<$Structure>>): $StructureStart;
        getStructureWithPieceAt(arg0: $BlockPos_, arg1: $TagKey_<$Structure>): $StructureStart;
        checkStructurePresence(arg0: $ChunkPos, arg1: $Structure_, arg2: $StructurePlacement, arg3: boolean): $StructureCheckResult;
        shouldGenerateStructures(): boolean;
        startsForStructure(arg0: $ChunkPos, arg1: $Predicate_<$Structure>): $List<$StructureStart>;
        startsForStructure(arg0: $SectionPos, arg1: $Structure_): $List<$StructureStart>;
        structureHasPieceAt(arg0: $BlockPos_, arg1: $StructureStart): boolean;
        getStartForStructure(arg0: $SectionPos, arg1: $Structure_, arg2: $StructureAccess): $StructureStart;
        setStartForStructure(arg0: $SectionPos, arg1: $Structure_, arg2: $StructureStart, arg3: $StructureAccess): void;
        fillStartsForStructure(arg0: $Structure_, arg1: $LongSet, arg2: $Consumer_<$StructureStart>): void;
        addReferenceForStructure(arg0: $SectionPos, arg1: $Structure_, arg2: number, arg3: $StructureAccess): void;
        addReference(arg0: $StructureStart): void;
        registryAccess(): $RegistryAccess;
        constructor(arg0: $LevelAccessor, arg1: $WorldOptions, arg2: $StructureCheck);
    }
    export class $PotentialCalculator$PointCharge {
    }
    export class $GrassColor {
        static get(arg0: number, arg1: number): number;
        static init(arg0: number[]): void;
        static getDefaultColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
    }
    export class $GameRules implements $GameRulesAccessor, $GameRulesKJS {
        getBoolean(arg0: $GameRules$Key<$GameRules$BooleanValue>): boolean;
        getInt(arg0: $GameRules$Key<$GameRules$IntegerValue>): number;
        copy(): $GameRules;
        static register<T extends $GameRules$Value<T>>(arg0: string, arg1: $GameRules$Category_, arg2: $GameRules$Type<T>): $GameRules$Key<T>;
        assignFrom(arg0: $GameRules, arg1: $MinecraftServer): void;
        static getRuleTypes$fabric_game_rule_api_v1_$md$8e2dbe$0(): $Map<any, any>;
        createTag(): $CompoundTag;
        static visitGameRuleTypes(arg0: $GameRules$GameRuleTypeVisitor): void;
        get(rule: string): $GameRules$Value<any>;
        set(rule: string, value: string): void;
        getRule<T extends $GameRules$Value<T>>(arg0: $GameRules$Key<T>): T;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
        static RULE_MAX_COMMAND_CHAIN_LENGTH: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DROWNING_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LOGADMINCOMMANDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_REDUCEDDEBUGINFO: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_WEATHER_CYCLE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FORGIVE_DEAD_PLAYERS: $GameRules$Key<$GameRules$BooleanValue>;
        static DEFAULT_RANDOM_TICK_SPEED: number;
        static RULE_TNT_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_NATURAL_REGENERATION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_CHUNK_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ANNOUNCE_ADVANCEMENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_COMMANDBLOCKOUTPUT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBSPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PROJECTILESCANBREAKBLOCKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DAYLIGHT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DISABLE_RAIDS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FIRE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_SLEEPING_PERCENTAGE: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_WATER_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOBLOCKDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_BLOCK_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SPECTATORSGENERATECHUNKS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_VINES_SPREAD: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_IMMEDIATE_RESPAWN: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOENTITYDROPS: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_KEEPINVENTORY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_RANDOMTICKING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_DO_TRADER_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOMOBLOOT: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_GLOBAL_SOUND_EVENTS: $GameRules$Key<$GameRules$BooleanValue>;
        static LOGGER: $Logger;
        static RULE_DO_PATROL_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_DEFAULT_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_FALL_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOINSOMNIA: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOB_EXPLOSION_DROP_DECAY: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_LIMITED_CRAFTING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DO_WARDEN_SPAWNING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_DOFIRETICK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MOBGRIEFING: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_PLAYERS_NETHER_PORTAL_CREATIVE_DELAY: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SHOWDEATHMESSAGES: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_ENTITY_CRAMMING: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_SPAWN_RADIUS: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_UNIVERSAL_ANGER: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_FREEZE_DAMAGE: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SNOW_ACCUMULATION_HEIGHT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_LAVA_SOURCE_CONVERSION: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_SENDCOMMANDFEEDBACK: $GameRules$Key<$GameRules$BooleanValue>;
        static RULE_MAX_COMMAND_FORK_COUNT: $GameRules$Key<$GameRules$IntegerValue>;
        static RULE_ENDER_PEARLS_VANISH_ON_DEATH: $GameRules$Key<$GameRules$BooleanValue>;
        constructor();
        constructor(arg0: $DynamicLike<never>);
        static get ruleTypes$fabric_game_rule_api_v1_$md$8e2dbe$0(): $Map<any, any>;
    }
    export class $ChunkPos {
        static hash(arg0: number, arg1: number): number;
        static rangeClosed(arg0: $ChunkPos, arg1: number): $Stream<$ChunkPos>;
        static rangeClosed(arg0: $ChunkPos, arg1: $ChunkPos): $Stream<$ChunkPos>;
        static minFromRegion(arg0: number, arg1: number): $ChunkPos;
        static maxFromRegion(arg0: number, arg1: number): $ChunkPos;
        getRegionX(): number;
        getRegionZ(): number;
        getRegionLocalX(): number;
        getRegionLocalZ(): number;
        getBlockAt(arg0: number, arg1: number, arg2: number): $BlockPos;
        getMiddleBlockPosition(arg0: number): $BlockPos;
        getWorldPosition(): $BlockPos;
        getChessboardDistance(arg0: number, arg1: number): number;
        getChessboardDistance(arg0: $ChunkPos): number;
        getMaxBlockX(): number;
        getMaxBlockZ(): number;
        getMiddleBlockX(): number;
        getMiddleBlockZ(): number;
        toLong(): number;
        static asLong(arg0: number, arg1: number): number;
        static asLong(arg0: $BlockPos_): number;
        static getX(arg0: number): number;
        static getZ(arg0: number): number;
        getBlockX(arg0: number): number;
        getBlockZ(arg0: number): number;
        distanceSquared(arg0: $ChunkPos): number;
        distanceSquared(arg0: number): number;
        getMinBlockX(): number;
        getMinBlockZ(): number;
        static ZERO: $ChunkPos;
        static REGION_MAX_INDEX: number;
        static INVALID_CHUNK_POS: number;
        x: number;
        static REGION_SIZE: number;
        z: number;
        constructor(arg0: number);
        constructor(arg0: $BlockPos_);
        constructor(arg0: number, arg1: number);
        get regionX(): number;
        get regionZ(): number;
        get regionLocalX(): number;
        get regionLocalZ(): number;
        get worldPosition(): $BlockPos;
        get maxBlockX(): number;
        get maxBlockZ(): number;
        get middleBlockX(): number;
        get middleBlockZ(): number;
        get minBlockX(): number;
        get minBlockZ(): number;
    }
    export class $ColorResolver {
    }
    export interface $ColorResolver {
        getColor(arg0: $Biome_, arg1: number, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ColorResolver}.
     */
    export type $ColorResolver_ = ((arg0: $Biome, arg1: number, arg2: number) => number);
    export class $PotentialCalculator {
        addCharge(arg0: $BlockPos_, arg1: number): void;
        getPotentialEnergyChange(arg0: $BlockPos_, arg1: number): number;
        constructor();
    }
    export class $BlockGetter {
        static traverseBlocks<T, C>(arg0: $Vec3_, arg1: $Vec3_, arg2: C, arg3: $BiFunction_<C, $BlockPos, T>, arg4: $Function_<C, T>): T;
    }
    export interface $BlockGetter extends $LevelHeightAccessor, $IBlockGetterExtension, $FabricBlockView, $BlockViewMixin {
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        get maxLightLevel(): number;
    }
    export class $NaturalSpawner$SpawnPredicate {
    }
    export interface $NaturalSpawner$SpawnPredicate {
        test(arg0: $EntityType_<never>, arg1: $BlockPos_, arg2: $ChunkAccess): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$SpawnPredicate}.
     */
    export type $NaturalSpawner$SpawnPredicate_ = ((arg0: $EntityType<never>, arg1: $BlockPos, arg2: $ChunkAccess) => boolean);
    export class $GameRules$Value<T extends $GameRules$Value<T>> {
        copy(): T;
        onChanged(arg0: $MinecraftServer): void;
        setFrom(arg0: T, arg1: $MinecraftServer): void;
        updateFromArgument(arg0: $CommandContext<$CommandSourceStack>, arg1: string): void;
        getCommandResult(): number;
        setFromArgument(arg0: $CommandContext<$CommandSourceStack>, arg1: string): void;
        deserialize(arg0: string): void;
        serialize(): string;
        getSelf(): T;
        type: $GameRules$Type<T>;
        constructor(arg0: $GameRules$Type<T>);
        get commandResult(): number;
        get self(): T;
    }
    export class $LevelSettings {
        copy(): $LevelSettings;
        static parse(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_): $LevelSettings;
        getLifecycle(): $Lifecycle;
        withGameType(arg0: $GameType_): $LevelSettings;
        withDifficulty(arg0: $Difficulty_): $LevelSettings;
        difficulty(): $Difficulty;
        gameType(): $GameType;
        gameRules(): $GameRules;
        levelName(): string;
        withLifecycle(arg0: $Lifecycle): $LevelSettings;
        hardcore(): boolean;
        allowCommands(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $LevelSettings;
        constructor(arg0: string, arg1: $GameType_, arg2: boolean, arg3: $Difficulty_, arg4: boolean, arg5: $GameRules, arg6: $WorldDataConfiguration_);
        constructor(arg0: string, arg1: $GameType_, arg2: boolean, arg3: $Difficulty_, arg4: boolean, arg5: $GameRules, arg6: $WorldDataConfiguration_, arg7: $Lifecycle);
        get lifecycle(): $Lifecycle;
        get dataConfiguration(): $WorldDataConfiguration;
    }
    export class $Explosion$BlockInteraction extends $Enum<$Explosion$BlockInteraction> {
        static values(): $Explosion$BlockInteraction[];
        static valueOf(arg0: string): $Explosion$BlockInteraction;
        static TRIGGER_BLOCK: $Explosion$BlockInteraction;
        static DESTROY_WITH_DECAY: $Explosion$BlockInteraction;
        static DESTROY: $Explosion$BlockInteraction;
        static KEEP: $Explosion$BlockInteraction;
    }
    /**
     * Values that may be interpreted as {@link $Explosion$BlockInteraction}.
     */
    export type $Explosion$BlockInteraction_ = "keep" | "destroy" | "destroy_with_decay" | "trigger_block";
    export class $GameRules$Key<T extends $GameRules$Value<T>> implements $RuleKeyExtensions {
        getId(): string;
        fabric_getCustomCategory(): $CustomGameRuleCategory;
        fabric_setCustomCategory(arg0: $CustomGameRuleCategory): void;
        getCategory(): $GameRules$Category;
        getDescriptionId(): string;
        id: string;
        constructor(arg0: string, arg1: $GameRules$Category_);
        get category(): $GameRules$Category;
        get descriptionId(): string;
    }
    export interface $Level extends RegistryMarked<RegistryTypes.DimensionTag, RegistryTypes.Dimension> {}
    export class $NaturalSpawner$AfterSpawnCallback {
    }
    export interface $NaturalSpawner$AfterSpawnCallback {
        run(arg0: $Mob, arg1: $ChunkAccess): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$AfterSpawnCallback}.
     */
    export type $NaturalSpawner$AfterSpawnCallback_ = ((arg0: $Mob, arg1: $ChunkAccess) => void);
    export class $LevelReader {
    }
    export interface $LevelReader extends $BlockAndTintGetter, $CollisionGetter, $SignalGetter, $BiomeManager$NoiseBiomeSource, $ILevelReaderExtension, $WorldViewMixin, $RenderAttachedBlockView, $ChunkView {
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        getHeight(): number;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        isClientSide(): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getMinBuildHeight(): number;
        containsAnyLiquid(arg0: $AABB_): boolean;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        /**
         * @deprecated
         */
        hasChunk(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        getSeaLevel(): number;
        dimensionType(): $DimensionType;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        getSkyDarken(): number;
        getBiomeManager(): $BiomeManager;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        isWaterAt(arg0: $BlockPos_): boolean;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
        get clientSide(): boolean;
        get minBuildHeight(): number;
        get seaLevel(): number;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
    }
    export class $LevelWriter {
    }
    export interface $LevelWriter {
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        addFreshEntity(arg0: $Entity): boolean;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
    }
    export class $NaturalSpawner$ChunkGetter {
    }
    export interface $NaturalSpawner$ChunkGetter {
        query(arg0: number, arg1: $Consumer_<$LevelChunk>): void;
    }
    /**
     * Values that may be interpreted as {@link $NaturalSpawner$ChunkGetter}.
     */
    export type $NaturalSpawner$ChunkGetter_ = ((arg0: number, arg1: $Consumer<$LevelChunk>) => void);
    export class $CommonLevelAccessor {
    }
    export interface $CommonLevelAccessor extends $EntityGetter, $LevelReader, $LevelSimulatedRW {
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
    }
    export class $LevelSimulatedRW {
    }
    export interface $LevelSimulatedRW extends $LevelSimulatedReader, $LevelWriter {
    }
    export class $GameRules$Type<T extends $GameRules$Value<T>> {
        callVisitor(arg0: $GameRules$GameRuleTypeVisitor, arg1: $GameRules$Key<T>): void;
        createRule(): T;
        createArgument(arg0: string): $RequiredArgumentBuilder<$CommandSourceStack, never>;
        argument: $Supplier<$ArgumentType<never>>;
        callback: $BiConsumer<$MinecraftServer, T>;
        constructor(arg0: $Supplier_<$ArgumentType<never>>, arg1: $Function_<$GameRules$Type<T>, T>, arg2: $BiConsumer_<$MinecraftServer, T>, arg3: $GameRules$VisitorCaller_<T>);
    }
    export class $EmptyBlockGetter extends $Enum<$EmptyBlockGetter> implements $BlockGetter {
        static values(): $EmptyBlockGetter[];
        static valueOf(arg0: string): $EmptyBlockGetter;
        getHeight(): number;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getMinBuildHeight(): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        static INSTANCE: $EmptyBlockGetter;
        get height(): number;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    /**
     * Values that may be interpreted as {@link $EmptyBlockGetter}.
     */
    export type $EmptyBlockGetter_ = "instance";
    export class $ExplosionDamageCalculator {
        shouldDamageEntity(arg0: $Explosion, arg1: $Entity): boolean;
        getKnockbackMultiplier(arg0: $Entity): number;
        getEntityDamageAmount(arg0: $Explosion, arg1: $Entity): number;
        getBlockExplosionResistance(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $FluidState): (number) | undefined;
        shouldBlockExplode(arg0: $Explosion, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: number): boolean;
        constructor();
    }
    export class $GameRules$Category extends $Enum<$GameRules$Category> {
        static values(): $GameRules$Category[];
        static valueOf(arg0: string): $GameRules$Category;
        getDescriptionId(): string;
        static PLAYER: $GameRules$Category;
        static DROPS: $GameRules$Category;
        static MOBS: $GameRules$Category;
        static CHAT: $GameRules$Category;
        static UPDATES: $GameRules$Category;
        static MISC: $GameRules$Category;
        static SPAWNING: $GameRules$Category;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$Category}.
     */
    export type $GameRules$Category_ = "player" | "mobs" | "spawning" | "drops" | "updates" | "chat" | "misc";
    export class $WorldGenLevel {
    }
    export interface $WorldGenLevel extends $ServerLevelAccessor {
        getSeed(): number;
        ensureCanWrite(arg0: $BlockPos_): boolean;
        setCurrentlyGenerating(arg0: $Supplier_<string>): void;
        get seed(): number;
        set currentlyGenerating(value: $Supplier_<string>);
    }
    export class $BlockEventData extends $Record {
        pos(): $BlockPos;
        block(): $Block;
        paramA(): number;
        paramB(): number;
        constructor(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockEventData}.
     */
    export type $BlockEventData_ = { paramB?: number, paramA?: number, block?: $Block_, pos?: $BlockPos_,  } | [paramB?: number, paramA?: number, block?: $Block_, pos?: $BlockPos_, ];
    export class $FoliageColor {
        static get(arg0: number, arg1: number): number;
        static init(arg0: number[]): void;
        static getDefaultColor(): number;
        static getEvergreenColor(): number;
        static getBirchColor(): number;
        static getMangroveColor(): number;
        static pixels: number[];
        constructor();
        static get defaultColor(): number;
        static get evergreenColor(): number;
        static get birchColor(): number;
        static get mangroveColor(): number;
    }
    export class $Level extends $AttachmentHolder implements $LevelAccessor, $AutoCloseable, $ILevelExtension, $LoadedChunksCache, $ChunkRandomSource, $LevelAccessor$2, $BlockEntityGetter, $LithiumData, $LevelHeightAccessor, $LevelKJS, $LevelExtension$1, $LevelExtension, $LevelAccessor$1 {
        close(): void;
        isDebug(): boolean;
        isLoaded(arg0: $BlockPos_): boolean;
        getEntity(arg0: number): $Entity;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>, arg3: $List_<T>, arg4: number): void;
        getEntities(arg0: $Entity, arg1: $AABB_, arg2: $Predicate_<$Entity>): $List<$Entity>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getEntities<T extends $Entity>(arg0: $EntityTypeTest<$Entity, T>, arg1: $AABB_, arg2: $Predicate_<T>, arg3: $List_<T>): void;
        getDimensionKey(): $ResourceKey<$Level>;
        getHeight(arg0: $Heightmap$Types_, arg1: number, arg2: number): number;
        disconnect(): void;
        getProfiler(): $ProfilerFiller;
        flywheel$getAllLoadedEntities(): $Iterable<any>;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number, arg3: number): boolean;
        setBlock(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): boolean;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getLevelData(): $LevelData;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getWorldBorder(): $WorldBorder;
        tickRateManager(): $TickRateManager;
        fillReportDetails(arg0: $CrashReport): $CrashReportCategory;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getRecipeManager(): $RecipeManager;
        getTime(): number;
        damageSources(): $DamageSources;
        isClientSide(): boolean;
        shouldTickDeath(arg0: $Entity): boolean;
        broadcastEntityEvent(arg0: $Entity, arg1: number): void;
        playSeededSound(arg0: $Player, arg1: $Entity, arg2: $Holder_<$SoundEvent>, arg3: $SoundSource_, arg4: number, arg5: number, arg6: number): void;
        playSeededSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $Holder_<$SoundEvent>, arg5: $SoundSource_, arg6: number, arg7: number, arg8: number): void;
        playSeededSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $SoundEvent_, arg5: $SoundSource_, arg6: number, arg7: number, arg8: number): void;
        getScoreboard(): $Scoreboard;
        getRandom(): $RandomSource;
        addParticle(arg0: $ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        addParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        broadcastDamageEvent(arg0: $Entity, arg1: $DamageSource_): void;
        playSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $Holder_<$SoundEvent>, arg5: $SoundSource_, arg6: number, arg7: number): void;
        playSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $SoundEvent_, arg5: $SoundSource_, arg6: number, arg7: number): void;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        playSound(arg0: $Entity, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        playSound(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: $SoundEvent_, arg5: $SoundSource_): void;
        playSound(arg0: $Player, arg1: $Entity, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        playLocalSound(arg0: number, arg1: number, arg2: number, arg3: $SoundEvent_, arg4: $SoundSource_, arg5: number, arg6: number, arg7: boolean): void;
        playLocalSound(arg0: $Entity, arg1: $SoundEvent_, arg2: $SoundSource_, arg3: number, arg4: number): void;
        playLocalSound(arg0: $BlockPos_, arg1: $SoundEvent_, arg2: $SoundSource_, arg3: number, arg4: number, arg5: boolean): void;
        getGameRules(): $GameRules;
        getServer(): $MinecraftServer;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        getSharedSpawnPos(): $BlockPos;
        getChunkAt(arg0: $BlockPos_): $LevelChunk;
        isRainingAt(arg0: $BlockPos_): boolean;
        static isInSpawnableBounds(arg0: $BlockPos_): boolean;
        getData(): $AttachedData<any>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): $Optional<any>;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $ChunkAccess;
        mayInteract(arg0: $Player, arg1: $BlockPos_): boolean;
        sable$getJOMLSink(): $LevelReusedVectors;
        isDay(): boolean;
        getDayTimeFraction(): number;
        getDayTime(): number;
        dimensionTypeRegistration(): $Holder<$DimensionType>;
        isInWorldBounds(arg0: $BlockPos_): boolean;
        markAndNotifyBlock(arg0: $BlockPos_, arg1: $LevelChunk, arg2: $BlockState_, arg3: $BlockState_, arg4: number, arg5: number): void;
        setBlocksDirty(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_): void;
        sendBlockUpdated(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_, arg3: number): void;
        removeBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity, arg3: number): boolean;
        addDestroyBlockEffect(arg0: $BlockPos_, arg1: $BlockState_): void;
        setBlockAndUpdate(arg0: $BlockPos_, arg1: $BlockState_): boolean;
        updateNeighborsAt(arg0: $BlockPos_, arg1: $Block_): void;
        updateNeighborsAtExceptFromFacing(arg0: $BlockPos_, arg1: $Block_, arg2: $Direction_): void;
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        dimensionType(): $DimensionType;
        isNight(): boolean;
        blockEntityChanged(arg0: $BlockPos_): void;
        updateNeighbourForOutputSignal(arg0: $BlockPos_, arg1: $Block_): void;
        onBlockStateChange(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockState_): void;
        addAlwaysVisibleParticle(arg0: $ParticleOptions_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        addAlwaysVisibleParticle(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getSunAngle(arg0: number): number;
        addBlockEntityTicker(arg0: $TickingBlockEntity): void;
        addFreshBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        tickBlockEntities(): void;
        guardEntityTick<T extends $Entity>(arg0: $Consumer_<T>, arg1: T): void;
        shouldTickBlocksAt(arg0: number): boolean;
        shouldTickBlocksAt(arg0: $BlockPos_): boolean;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<$SoundEvent>): $Explosion;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: boolean, arg10: $ParticleOptions_, arg11: $ParticleOptions_, arg12: $Holder_<$SoundEvent>): $Explosion;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: $Vec3_, arg4: number, arg5: boolean, arg6: $Level$ExplosionInteraction_): $Explosion;
        explode(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Level$ExplosionInteraction_): $Explosion;
        explode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_): $Explosion;
        explode(arg0: $Entity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $Level$ExplosionInteraction_): $Explosion;
        gatherChunkSourceStats(): string;
        setBlockEntity(arg0: $BlockEntity): void;
        removeBlockEntity(arg0: $BlockPos_): void;
        loadedAndEntityCanStandOnFace(arg0: $BlockPos_, arg1: $Entity, arg2: $Direction_): boolean;
        loadedAndEntityCanStandOn(arg0: $BlockPos_, arg1: $Entity): boolean;
        updateSkyBrightness(): void;
        getRainLevel(arg0: number): number;
        getThunderLevel(arg0: number): number;
        setSpawnSettings(arg0: boolean, arg1: boolean): void;
        getSharedSpawnAngle(): number;
        prepareWeather(): void;
        isRaining(): boolean;
        isThundering(): boolean;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        blockEvent(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: number): void;
        setThunderLevel(arg0: number): void;
        setRainLevel(arg0: number): void;
        getMapData(arg0: $MapId_): $MapItemSavedData;
        setMapData(arg0: $MapId_, arg1: $MapItemSavedData): void;
        getFreeMapId(): $MapId;
        globalLevelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        handler$gje000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReport: $CrashReport, cir: $CallbackInfoReturnable<any>): void;
        destroyBlockProgress(arg0: number, arg1: $BlockPos_, arg2: number): void;
        createFireworks(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$FireworkExplosion_>): void;
        getCurrentDifficultyAt(arg0: $BlockPos_): $DifficultyInstance;
        getSkyDarken(): number;
        setSkyFlashTime(arg0: number): void;
        sendPacketToServer(arg0: $Packet<never>): void;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
        getBlockRandomPos(arg0: number, arg1: number, arg2: number, arg3: number): $BlockPos;
        noSave(): boolean;
        getProfilerSupplier(): $Supplier<$ProfilerFiller>;
        getBiomeManager(): $BiomeManager;
        getMaxEntityRadius(): number;
        increaseMaxEntityRadius(arg0: number): number;
        nextSubTickCount(): number;
        potionBrewing(): $PotionBrewing;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        advanceDaytime(): number;
        fabric_getLoadedChunks(): $Set<any>;
        fabric_markLoaded(arg0: $LevelChunk): void;
        fabric_markUnloaded(arg0: $LevelChunk): void;
        lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $BlockPos$MutableBlockPos): void;
        lithium$getLoadedExistingBlockEntity(arg0: $BlockPos_): $BlockEntity;
        lithium$getData(): $LithiumData$Data;
        getMcEntities(): $Iterable<any>;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        neighborChanged(arg0: $BlockPos_, arg1: $Block_, arg2: $BlockPos_): void;
        neighborChanged(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Block_, arg3: $BlockPos_, arg4: boolean): void;
        neighborShapeChanged(arg0: $Direction_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number, arg5: number): void;
        gameEvent(arg0: $ResourceKey_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $BlockPos_): void;
        gameEvent(arg0: $Entity, arg1: $Holder_<$GameEvent>, arg2: $Vec3_): void;
        gameEvent(arg0: $Holder_<$GameEvent>, arg1: $BlockPos_, arg2: $GameEvent$Context_): void;
        getDifficulty(): $Difficulty;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_): void;
        levelEvent(arg0: number, arg1: $BlockPos_, arg2: number): void;
        blockUpdated(arg0: $BlockPos_, arg1: $Block_): void;
        hasChunk(arg0: number, arg1: number): boolean;
        dayTime(): number;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number, arg3: $TickPriority_): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Fluid_, arg2: number): void;
        scheduleTick(arg0: $BlockPos_, arg1: $Block_, arg2: number): void;
        getDescription(): $Component;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: C): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_): T;
        invalidateCapabilities(arg0: $BlockPos_): void;
        invalidateCapabilities(arg0: $ChunkPos): void;
        getModelDataManager(): $ModelDataManager;
        getPartEntities(): $Collection<$PartEntity<never>>;
        getDescriptionKey(): string;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getName(): $Component;
        self(): $EntityGetter;
        tell(message: $Component_): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getSide(): $ScriptType;
        isOverworld(): boolean;
        setTime(time: number): void;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        getDimension(): $ResourceLocation;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        getTimeOfDay(arg0: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(arg0: $Entity, arg1: $AABB_): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(arg0: $Class<T>, arg1: $AABB_, arg2: $Predicate_<T>): $List<T>;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: number, arg3: number, arg4: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: number, arg2: number, arg3: number): $Player;
        getNearestPlayer(arg0: $TargetingConditions, arg1: $LivingEntity): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): $Player;
        getNearestPlayer(arg0: $Entity, arg1: number): $Player;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Predicate_<$Entity>): $Player;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getNearestEntity<T extends $LivingEntity>(arg0: $List_<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number): T;
        getNearestEntity<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: number, arg4: number, arg5: number, arg6: $AABB_): T;
        getNearbyPlayers(arg0: $TargetingConditions, arg1: $LivingEntity, arg2: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(arg0: $Class<T>, arg1: $TargetingConditions, arg2: $LivingEntity, arg3: $AABB_): $List<T>;
        getPlayerByUUID(arg0: $UUID_): $Player;
        getBiome(arg0: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(arg0: number, arg1: number): boolean;
        containsAnyLiquid(arg0: $AABB_): boolean;
        getBlockStatesIfLoaded(arg0: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(arg0: $BlockPos_): number;
        getChunk(arg0: $BlockPos_): $ChunkAccess;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_): $ChunkAccess;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): $Holder<$Biome>;
        isEmptyBlock(arg0: $BlockPos_): boolean;
        canSeeSkyFromBelowWater(arg0: $BlockPos_): boolean;
        getPathfindingCostFromLightLevels(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_): number;
        getMaxLocalRawBrightness(arg0: $BlockPos_, arg1: number): number;
        isWaterAt(arg0: $BlockPos_): boolean;
        holderLookup<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
        getDisplayName(): $Component;
        getEntities(): $EntityArrayList;
        canSeeSky(arg0: $BlockPos_): boolean;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $AABB_): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        getSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        getDirectSignal(arg0: $BlockPos_, arg1: $Direction_): number;
        hasSignal(arg0: $BlockPos_, arg1: $Direction_): boolean;
        hasNeighborSignal(arg0: $BlockPos_): boolean;
        getBestNeighborSignal(arg0: $BlockPos_): number;
        getDirectSignalTo(arg0: $BlockPos_): number;
        getControlInputSignal(arg0: $BlockPos_, arg1: $Direction_, arg2: boolean): number;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        addFreshEntity(arg0: $Entity): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean): boolean;
        destroyBlock(arg0: $BlockPos_, arg1: boolean, arg2: $Entity): boolean;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        getThread(): $Thread;
        invokeGetEntities(): $LevelEntityGetter<$Entity>;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $WritableLevelData, arg1: $ResourceKey_<$Level>, arg2: $RegistryAccess, arg3: $Holder_<$DimensionType>, arg4: $Supplier_<$ProfilerFiller>, arg5: boolean, arg6: boolean, arg7: number, arg8: number);
        get debug(): boolean;
        get dimensionKey(): $ResourceKey<$Level>;
        get profiler(): $ProfilerFiller;
        get worldBorder(): $WorldBorder;
        get recipeManager(): $RecipeManager;
        get clientSide(): boolean;
        get scoreboard(): $Scoreboard;
        get gameRules(): $GameRules;
        get server(): $MinecraftServer;
        get sharedSpawnPos(): $BlockPos;
        get data(): $AttachedData<any>;
        get day(): boolean;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get night(): boolean;
        get sharedSpawnAngle(): number;
        get raining(): boolean;
        get thundering(): boolean;
        get freeMapId(): $MapId;
        get skyDarken(): number;
        set skyFlashTime(value: number);
        get profilerSupplier(): $Supplier<$ProfilerFiller>;
        get biomeManager(): $BiomeManager;
        get maxEntityRadius(): number;
        get mcEntities(): $Iterable<any>;
        get difficulty(): $Difficulty;
        get description(): $Component;
        get modelDataManager(): $ModelDataManager;
        get partEntities(): $Collection<$PartEntity<never>>;
        get descriptionKey(): string;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
        get name(): $Component;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get side(): $ScriptType;
        get overworld(): boolean;
        get dimension(): $ResourceLocation;
        get moonBrightness(): number;
        get moonPhase(): number;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get displayName(): $Component;
        get maxLightLevel(): number;
        get thread(): $Thread;
    }
    /**
     * Values that may be interpreted as {@link $Level}.
     */
    export type $Level_ = RegistryTypes.Dimension;
    export class $SpawnData extends $Record {
        entityToSpawn(): $CompoundTag;
        getCustomSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        getEntityToSpawn(): $CompoundTag;
        getEquipment(): ($EquipmentTable) | undefined;
        customSpawnRules(): ($SpawnData$CustomSpawnRules) | undefined;
        equipment(): ($EquipmentTable) | undefined;
        static CODEC: $Codec<$SpawnData>;
        static ENTITY_TAG: string;
        static LIST_CODEC: $Codec<$SimpleWeightedRandomList<$SpawnData>>;
        constructor();
        constructor(arg0: $CompoundTag_, arg1: ($SpawnData$CustomSpawnRules_) | undefined, arg2: ($EquipmentTable_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $SpawnData}.
     */
    export type $SpawnData_ = { equipment?: ($EquipmentTable_) | undefined, entityToSpawn?: $CompoundTag_, customSpawnRules?: ($SpawnData$CustomSpawnRules_) | undefined,  } | [equipment?: ($EquipmentTable_) | undefined, entityToSpawn?: $CompoundTag_, customSpawnRules?: ($SpawnData$CustomSpawnRules_) | undefined, ];
    export class $ClipBlockStateContext {
        getFrom(): $Vec3;
        getTo(): $Vec3;
        isTargetBlock(): $Predicate<$BlockState>;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<$BlockState>);
        get from(): $Vec3;
        get to(): $Vec3;
        get targetBlock(): $Predicate<$BlockState>;
    }
    export class $LocalMobCapCalculator$MobCounts {
    }
    export class $GameRules$GameRuleTypeVisitor {
    }
    export interface $GameRules$GameRuleTypeVisitor {
        visit<T extends $GameRules$Value<T>>(arg0: $GameRules$Key<T>, arg1: $GameRules$Type<T>): void;
        visitInteger(arg0: $GameRules$Key<$GameRules$IntegerValue>, arg1: $GameRules$Type<$GameRules$IntegerValue>): void;
        visitBoolean(arg0: $GameRules$Key<$GameRules$BooleanValue>, arg1: $GameRules$Type<$GameRules$BooleanValue>): void;
    }
    export class $CustomSpawner {
    }
    export interface $CustomSpawner {
        tick(arg0: $ServerLevel, arg1: boolean, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $CustomSpawner}.
     */
    export type $CustomSpawner_ = ((arg0: $ServerLevel, arg1: boolean, arg2: boolean) => number);
    export class $SpawnData$CustomSpawnRules extends $Record {
        isValidPosition(arg0: $BlockPos_, arg1: $ServerLevel): boolean;
        blockLightLimit(): $InclusiveRange<number>;
        skyLightLimit(): $InclusiveRange<number>;
        static CODEC: $Codec<$SpawnData$CustomSpawnRules>;
        constructor(arg0: $InclusiveRange_<number>, arg1: $InclusiveRange_<number>);
    }
    /**
     * Values that may be interpreted as {@link $SpawnData$CustomSpawnRules}.
     */
    export type $SpawnData$CustomSpawnRules_ = { blockLightLimit?: $InclusiveRange_<number>, skyLightLimit?: $InclusiveRange_<number>,  } | [blockLightLimit?: $InclusiveRange_<number>, skyLightLimit?: $InclusiveRange_<number>, ];
    export class $BaseCommandBlock implements $CommandSource {
        getName(): $Component;
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        isValid(): boolean;
        getLevel(): $ServerLevel;
        getPosition(): $Vec3;
        getSuccessCount(): number;
        getCommand(): string;
        setSuccessCount(arg0: number): void;
        performCommand(arg0: $Level_): boolean;
        setTrackOutput(arg0: boolean): void;
        usedBy(arg0: $Player): $InteractionResult;
        getLastOutput(): $Component;
        setLastOutput(arg0: $Component_): void;
        setCommand(arg0: string): void;
        onUpdated(): void;
        isTrackOutput(): boolean;
        getCustomName(): $Component;
        sendSystemMessage(arg0: $Component_): void;
        createCommandSourceStack(): $CommandSourceStack;
        setCustomName(arg0: $Component_): void;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        alwaysAccepts(): boolean;
        constructor();
        get name(): $Component;
        get valid(): boolean;
        get level(): $ServerLevel;
        get position(): $Vec3;
    }
    export class $ClipContext$ShapeGetter {
    }
    export interface $ClipContext$ShapeGetter {
        get(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$ShapeGetter}.
     */
    export type $ClipContext$ShapeGetter_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape);
    export class $BaseSpawner implements $IOwnedSpawner {
        load(arg0: $Level_, arg1: $BlockPos_, arg2: $CompoundTag_): void;
        save(arg0: $CompoundTag_): $CompoundTag;
        getOwner(): $Either<$BlockEntity, $Entity>;
        getSpin(): number;
        serverTick(arg0: $ServerLevel, arg1: $BlockPos_): void;
        onEventTriggered(arg0: $Level_, arg1: number): boolean;
        setEntityId(arg0: $EntityType_<never>, arg1: $Level_, arg2: $RandomSource, arg3: $BlockPos_): void;
        getOrCreateDisplayEntity(arg0: $Level_, arg1: $BlockPos_): $Entity;
        broadcastEvent(arg0: $Level_, arg1: $BlockPos_, arg2: number): void;
        setNextSpawnData(arg0: $Level_, arg1: $BlockPos_, arg2: $SpawnData_): void;
        getoSpin(): number;
        clientTick(arg0: $Level_, arg1: $BlockPos_): void;
        static SPAWN_DATA_TAG: string;
        spawnPotentials: $SimpleWeightedRandomList<$SpawnData>;
        nextSpawnData: $SpawnData;
        constructor();
        get owner(): $Either<$BlockEntity, $Entity>;
        get spin(): number;
        get oSpin(): number;
    }
    export class $NaturalSpawner {
        static spawnForChunk(arg0: $ServerLevel, arg1: $LevelChunk, arg2: $NaturalSpawner$SpawnState, arg3: boolean, arg4: boolean, arg5: boolean): void;
        static getRoughBiome(arg0: $BlockPos_, arg1: $ChunkAccess): $Biome;
        static spawnCategoryForChunk(arg0: $MobCategory_, arg1: $ServerLevel, arg2: $LevelChunk, arg3: $NaturalSpawner$SpawnPredicate_, arg4: $NaturalSpawner$AfterSpawnCallback_): void;
        static spawnCategoryForPosition(arg0: $MobCategory_, arg1: $ServerLevel, arg2: $ChunkAccess, arg3: $BlockPos_, arg4: $NaturalSpawner$SpawnPredicate_, arg5: $NaturalSpawner$AfterSpawnCallback_): void;
        static spawnCategoryForPosition(arg0: $MobCategory_, arg1: $ServerLevel, arg2: $BlockPos_): void;
        static isInNetherFortressBounds(arg0: $BlockPos_, arg1: $ServerLevel, arg2: $MobCategory_, arg3: $StructureManager): boolean;
        static createState(arg0: number, arg1: $Iterable_<$Entity>, arg2: $NaturalSpawner$ChunkGetter_, arg3: $LocalMobCapCalculator): $NaturalSpawner$SpawnState;
        static spawnMobsForChunkGeneration(arg0: $ServerLevelAccessor, arg1: $Holder_<$Biome>, arg2: $ChunkPos, arg3: $RandomSource): void;
        static isValidEmptySpawnBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState, arg4: $EntityType_<never>): boolean;
        static SPAWN_DISTANCE_BLOCK: number;
        static MAGIC_NUMBER: number;
        static SPAWN_DISTANCE_CHUNK: number;
    }
    export class $DataPackConfig {
        getEnabled(): $List<string>;
        getDisabled(): $List<string>;
        addModPacks(arg0: $List_<string>): void;
        static CODEC: $Codec<$DataPackConfig>;
        static DEFAULT: $DataPackConfig;
        constructor(arg0: $List_<string>, arg1: $List_<string>);
        get enabled(): $List<string>;
        get disabled(): $List<string>;
    }
    export class $CollisionGetter {
    }
    export interface $CollisionGetter extends $BlockGetter {
        getWorldBorder(): $WorldBorder;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $AABB_): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        get worldBorder(): $WorldBorder;
    }
    export class $GameRules$BooleanValue extends $GameRules$Value<$GameRules$BooleanValue> {
        get(): boolean;
        set(arg0: boolean, arg1: $MinecraftServer): void;
        static create(arg0: boolean, arg1: $BiConsumer_<$MinecraftServer, $GameRules$BooleanValue>): $GameRules$Type<$GameRules$BooleanValue>;
        static create(arg0: boolean): $GameRules$Type<$GameRules$BooleanValue>;
        setFrom(arg0: $GameRules$BooleanValue, arg1: $MinecraftServer): void;
        type: $GameRules$Type<$GameRules$BooleanValue>;
        constructor(arg0: $GameRules$Type<$GameRules$BooleanValue>, arg1: boolean);
    }
    export class $Spawner {
        static appendHoverText(arg0: $ItemStack_, arg1: $List_<$Component_>, arg2: string): void;
        static getSpawnEntityDisplayName(arg0: $ItemStack_, arg1: string): $Component;
    }
    export interface $Spawner {
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
    }
    /**
     * Values that may be interpreted as {@link $Spawner}.
     */
    export type $Spawner_ = ((arg0: $EntityType<never>, arg1: $RandomSource) => void);
    export class $LevelTimeAccess {
    }
    export interface $LevelTimeAccess extends $LevelReader {
        getTimeOfDay(arg0: number): number;
        getMoonBrightness(): number;
        dayTime(): number;
        getMoonPhase(): number;
        get moonBrightness(): number;
        get moonPhase(): number;
    }
    export class $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
    }
    export interface $GameRules$VisitorCaller<T extends $GameRules$Value<T>> {
        call(arg0: $GameRules$GameRuleTypeVisitor, arg1: $GameRules$Key<T>, arg2: $GameRules$Type<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $GameRules$VisitorCaller}.
     */
    export type $GameRules$VisitorCaller_<T> = ((arg0: $GameRules$GameRuleTypeVisitor, arg1: $GameRules$Key<T>, arg2: $GameRules$Type<T>) => void);
    export class $BlockCollisions<T> extends $AbstractIterator<T> {
        computeNext(): T;
        constructor(arg0: $CollisionGetter, arg1: $Entity, arg2: $AABB_, arg3: boolean, arg4: $BiFunction_<$BlockPos$MutableBlockPos, $VoxelShape, T>);
    }
    export class $NoiseColumn implements $BlockColumn {
        getBlock(arg0: number): $BlockState;
        setBlock(arg0: number, arg1: $BlockState_): void;
        constructor(arg0: number, arg1: $BlockState_[]);
    }
    export class $ItemLike {
    }
    export interface $ItemLike {
        asItem(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $ItemLike}.
     */
    export type $ItemLike_ = $Item_ | (() => $Item_);
    export class $PathNavigationRegion implements $BlockGetter, $CollisionGetter, $ChunkView {
        getHeight(): number;
        getProfiler(): $ProfilerFiller;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getWorldBorder(): $WorldBorder;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        getMinBuildHeight(): number;
        getChunkForCollisions(arg0: number, arg1: number): $BlockGetter;
        getEntityCollisions(arg0: $Entity, arg1: $AABB_): $List<$VoxelShape>;
        lithium$getLoadedChunk(arg0: number, arg1: number): $ChunkAccess;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        noCollision(arg0: $Entity): boolean;
        noCollision(arg0: $Entity, arg1: $AABB_): boolean;
        noCollision(arg0: $AABB_): boolean;
        noBlockCollision(arg0: $Entity, arg1: $AABB_): boolean;
        findSupportingBlock(arg0: $Entity, arg1: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(arg0: $Entity, arg1: $VoxelShape, arg2: $Vec3_, arg3: number, arg4: number, arg5: number): ($Vec3) | undefined;
        isUnobstructed(arg0: $Entity): boolean;
        isUnobstructed(arg0: $Entity, arg1: $VoxelShape): boolean;
        isUnobstructed(arg0: $BlockState_, arg1: $BlockPos_, arg2: $CollisionContext): boolean;
        getCollisions(arg0: $Entity, arg1: $AABB_): $Iterable<$VoxelShape>;
        collidesWithSuffocatingBlock(arg0: $Entity, arg1: $AABB_): boolean;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        allEmpty: boolean;
        centerZ: number;
        centerX: number;
        level: $Level;
        chunks: $ChunkAccess[][];
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_);
        get height(): number;
        get profiler(): $ProfilerFiller;
        get worldBorder(): $WorldBorder;
        get minBuildHeight(): number;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $SimpleExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(arg0: boolean, arg1: boolean, arg2: (number) | undefined, arg3: ($HolderSet_<$Block>) | undefined);
    }
    export class $LocalMobCapCalculator {
        addMob(arg0: $ChunkPos, arg1: $MobCategory_): void;
        canSpawn(arg0: $MobCategory_, arg1: $ChunkPos): boolean;
        constructor(arg0: $ChunkMap);
    }
    export class $LevelSimulatedReader {
    }
    export interface $LevelSimulatedReader {
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(arg0: $Heightmap$Types_, arg1: $BlockPos_): $BlockPos;
        isStateAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(arg0: $BlockPos_, arg1: $Predicate_<$FluidState>): boolean;
    }
    export class $BlockAndTintGetter {
    }
    export interface $BlockAndTintGetter extends $BlockGetter, $IBlockAndTintGetterExtension {
        getLightEngine(): $LevelLightEngine;
        canSeeSky(arg0: $BlockPos_): boolean;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        get lightEngine(): $LevelLightEngine;
    }
    export class $ClipContext implements $ClipContextAccessor, $ClipContextExtension {
        getFrom(): $Vec3;
        sable$setSubLevelIgnoring(arg0: $Predicate_<any>): void;
        sable$setIgnoreMainLevel(arg0: boolean): void;
        sable$setIgnoredSubLevel(arg0: $SubLevel): void;
        getTo(): $Vec3;
        getBlockShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getFluidShape(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        sable$doNotProject(): boolean;
        sable$getIgnoredSubLevel(): $SubLevel;
        sable$getSubLevelIgnoring(): $Predicate<any>;
        sable$isIgnoreMainLevel(): boolean;
        sable$setDoNotProject(arg0: boolean): void;
        getFluidHandling(): $ClipContext$Fluid;
        collisionContext: $CollisionContext;
        block: $ClipContext$Block;
        fluid: $ClipContext$Fluid;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $ClipContext$Block_, arg3: $ClipContext$Fluid_, arg4: $Entity);
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $ClipContext$Block_, arg3: $ClipContext$Fluid_, arg4: $CollisionContext);
        get from(): $Vec3;
        get to(): $Vec3;
        get fluidHandling(): $ClipContext$Fluid;
    }
    export class $EntityBasedExplosionDamageCalculator extends $ExplosionDamageCalculator {
        constructor(arg0: $Entity);
    }
    export class $ForcedChunksSavedData extends $SavedData {
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ForcedChunksSavedData;
        static factory(): $SavedData$Factory<$ForcedChunksSavedData>;
        getChunks(): $LongSet;
        getBlockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        getEntityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
        static FILE_ID: string;
        constructor();
        get chunks(): $LongSet;
        get blockForcedChunks(): $ForcedChunkManager$TicketTracker<$BlockPos>;
        get entityForcedChunks(): $ForcedChunkManager$TicketTracker<$UUID>;
    }
    export class $Level$ExplosionInteraction extends $Enum<$Level$ExplosionInteraction> implements $StringRepresentable {
        static values(): $Level$ExplosionInteraction[];
        static valueOf(arg0: string): $Level$ExplosionInteraction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MOB: $Level$ExplosionInteraction;
        static CODEC: $Codec<$Level$ExplosionInteraction>;
        static TRIGGER: $Level$ExplosionInteraction;
        static BLOCK: $Level$ExplosionInteraction;
        static TNT: $Level$ExplosionInteraction;
        static NONE: $Level$ExplosionInteraction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Level$ExplosionInteraction}.
     */
    export type $Level$ExplosionInteraction_ = "none" | "block" | "mob" | "tnt" | "trigger";
    export class $ClipContext$Block extends $Enum<$ClipContext$Block> implements $ClipContext$ShapeGetter {
        get(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        static values(): $ClipContext$Block[];
        static valueOf(arg0: string): $ClipContext$Block;
        static COLLIDER: $ClipContext$Block;
        static FALLDAMAGE_RESETTING: $ClipContext$Block;
        static OUTLINE: $ClipContext$Block;
        static VISUAL: $ClipContext$Block;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Block}.
     */
    export type $ClipContext$Block_ = "collider" | "outline" | "visual" | "falldamage_resetting";
    export class $LevelHeightAccessor {
        static create(arg0: number, arg1: number): $LevelHeightAccessor;
    }
    export interface $LevelHeightAccessor {
        getHeight(): number;
        getMinBuildHeight(): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        get height(): number;
        get minBuildHeight(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $ClipContext$Fluid extends $Enum<$ClipContext$Fluid> {
        static values(): $ClipContext$Fluid[];
        static valueOf(arg0: string): $ClipContext$Fluid;
        canPick(arg0: $FluidState): boolean;
        static SOURCE_ONLY: $ClipContext$Fluid;
        static NONE: $ClipContext$Fluid;
        static ANY: $ClipContext$Fluid;
        static WATER: $ClipContext$Fluid;
    }
    /**
     * Values that may be interpreted as {@link $ClipContext$Fluid}.
     */
    export type $ClipContext$Fluid_ = "none" | "source_only" | "any" | "water";
    export class $Explosion {
        getBlockInteraction(): $Explosion$BlockInteraction;
        getIndirectSourceEntity(): $LivingEntity;
        getDirectSourceEntity(): $Entity;
        canTriggerBlocks(): boolean;
        static getSeenPercent(arg0: $Vec3_, arg1: $Entity): number;
        interactsWithBlocks(): boolean;
        clearToBlow(): void;
        getToBlow(): $List<$BlockPos>;
        getHitPlayers(): $Map<$Player, $Vec3>;
        getSmallExplosionParticles(): $ParticleOptions;
        getLargeExplosionParticles(): $ParticleOptions;
        getExplosionSound(): $Holder<$SoundEvent>;
        center(): $Vec3;
        radius(): number;
        explode(): void;
        static getDefaultDamageSource(arg0: $Level_, arg1: $Entity): $DamageSource;
        finalizeExplosion(arg0: boolean): void;
        level: $Level;
        blockInteraction: $Explosion$BlockInteraction;
        x: number;
        y: number;
        damageSource: $DamageSource;
        z: number;
        damageCalculator: $ExplosionDamageCalculator;
        source: $Entity;
        constructor(arg0: $Level_, arg1: $Entity, arg2: $DamageSource_, arg3: $ExplosionDamageCalculator, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: $Explosion$BlockInteraction_, arg10: $ParticleOptions_, arg11: $ParticleOptions_, arg12: $Holder_<$SoundEvent>);
        constructor(arg0: $Level_, arg1: $Entity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Explosion$BlockInteraction_, arg8: $List_<$BlockPos_>);
        constructor(arg0: $Level_, arg1: $Entity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $List_<$BlockPos_>, arg7: $Explosion$BlockInteraction_, arg8: $ParticleOptions_, arg9: $ParticleOptions_, arg10: $Holder_<$SoundEvent>);
        constructor(arg0: $Level_, arg1: $Entity, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: $Explosion$BlockInteraction_);
        get indirectSourceEntity(): $LivingEntity;
        get directSourceEntity(): $Entity;
        get toBlow(): $List<$BlockPos>;
        get hitPlayers(): $Map<$Player, $Vec3>;
        get smallExplosionParticles(): $ParticleOptions;
        get largeExplosionParticles(): $ParticleOptions;
        get explosionSound(): $Holder<$SoundEvent>;
    }
}
