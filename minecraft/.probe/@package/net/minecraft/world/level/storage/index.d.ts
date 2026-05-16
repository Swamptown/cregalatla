import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $LevelResourceAccessor } from "@package/com/blackgear/platform/core/mixin/access";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Consumer_ } from "@package/java/util/function";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $File, $File_ } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(arg0: $ResourceLocation_): $CompoundTag;
        set(arg0: $ResourceLocation_, arg1: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(arg0: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        path(): $Path;
        rawDataFile(arg0: $LocalDateTime): $Path;
        lockFile(): $Path;
        corruptedDataFile(arg0: $LocalDateTime): $Path;
        resourcePath(arg0: $LevelResource): $Path;
        dataFile(): $Path;
        directoryName(): string;
        iconFile(): $Path;
        oldDataFile(): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_,  } | [worldData?: $WorldData, dimensions?: $WorldDimensions$Complete_, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        getVersion(): number;
        getLevelName(): string;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        getGameType(): $GameType;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        isFlatWorld(): boolean;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        isHardcore(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        wasModded(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(arg0: string, arg1: boolean): void;
        getStorageVersionName(arg0: number): string;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        isAllowCommands(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        setDifficultyLocked(arg0: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        isDebugWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        get version(): number;
        get levelName(): string;
        get flatWorld(): boolean;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_, arg2: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(arg0: string, arg1: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isSideSeries(): boolean;
        getSeries(): string;
        isCompatible(arg0: $DataVersion): boolean;
        static MAIN_SERIES: string;
        constructor(arg0: number);
        constructor(arg0: number, arg1: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        getLevelName(): string;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getGameType(): $GameType;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        setClearWeatherTime(arg0: number): void;
        setRainTime(arg0: number): void;
        setThunderTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setThundering(arg0: boolean): void;
        setDayTime(arg0: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getClearWeatherTime(): number;
        getThunderTime(): number;
        getRainTime(): number;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        getDayTime(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        isRaining(): boolean;
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        isAllowCommands(): boolean;
        constructor(arg0: $WorldData, arg1: $ServerLevelData);
        get levelName(): string;
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get allowCommands(): boolean;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(arg0: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(arg0: $BlockPos_, arg1: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        isDifficultyLocked(): boolean;
        setRaining(arg0: boolean): void;
        isHardcore(): boolean;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTime(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        isRaining(): boolean;
        isThundering(): boolean;
        get difficultyLocked(): boolean;
        get hardcore(): boolean;
        get gameTime(): number;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get dayTime(): number;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
    }
    export class $DimensionDataStorage {
        get<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        set(arg0: string, arg1: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(arg0: $SavedData$Factory_<T>, arg1: string): T;
        save(): void;
        readTagFromDisk(arg0: string, arg1: $DataFixTypes_, arg2: number): $CompoundTag;
        dataFolder: $File;
        constructor(arg0: $File_, arg1: $DataFixer, arg2: $HolderLookup$Provider);
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        isSevere(): boolean;
        getTranslationKey(): string;
        shouldBackup(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get severe(): boolean;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
        parent(): $LevelStorageSource;
        close(): void;
        safeClose(): void;
        getDataTag(): $Dynamic<never>;
        checkForLowDiskSpace(): boolean;
        estimateDiskSpace(): number;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        handler$zef000$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$ggk001$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        renameLevel(arg0: string): void;
        renameAndDropPlayer(arg0: string): void;
        makeWorldBackup(): number;
        restoreLevelDataFromOld(): boolean;
        createPlayerStorage(): $PlayerDataStorage;
        getSummary(arg0: $Dynamic<never>): $LevelSummary;
        getDimensionPath(arg0: $ResourceKey_<$Level>): $Path;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        readAdditionalLevelSaveData(arg0: boolean): void;
        hasWorldData(): boolean;
        deleteLevel(): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData, arg2: $CompoundTag_): void;
        saveDataTag(arg0: $RegistryAccess, arg1: $WorldData): void;
        getLevelId(): string;
        getLevelPath(arg0: $LevelResource): $Path;
        getIconFile(): ($Path) | undefined;
        getFileModificationTime(arg0: boolean): $Instant;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(arg0: $LevelStorageSource, arg1: string, arg2: $Path_);
        get dataTag(): $Dynamic<never>;
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get levelId(): string;
        get iconFile(): ($Path) | undefined;
    }
    export class $PlayerDataStorage {
        load(arg0: $Player): ($CompoundTag) | undefined;
        save(arg0: $Player): void;
        getPlayerDir(): $File;
        fixerUpper: $DataFixer;
        constructor(arg0: $LevelStorageSource$LevelStorageAccess, arg1: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        getLevelName(): string;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        getGameType(): $GameType;
        setGameType(arg0: $GameType_): void;
        setClearWeatherTime(arg0: number): void;
        setRainTime(arg0: number): void;
        setThunderTime(arg0: number): void;
        setThundering(arg0: boolean): void;
        setDayTime(arg0: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getClearWeatherTime(): number;
        getThunderTime(): number;
        getRainTime(): number;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        isAllowCommands(): boolean;
        get levelName(): string;
        set thundering(value: boolean);
        set dayTime(value: number);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set gameTime(value: number);
        get allowCommands(): boolean;
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(arg0: $Dynamic<never>): $LevelVersion;
        lastPlayed(): number;
        minecraftVersionName(): string;
        minecraftVersion(): $DataVersion;
        levelDataVersion(): number;
    }
    export class $LevelStorageSource {
        getName(): string;
        createAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        static parseValidator(arg0: $Path_): $DirectoryValidator;
        static createDefault(arg0: $Path_): $LevelStorageSource;
        getLevelPath(arg0: string): $Path;
        static readDataConfig(arg0: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(arg0: $Dynamic<never>, arg1: $PackRepository, arg2: boolean): $WorldLoader$PackConfig;
        static getLevelDataAndDimensions(arg0: $Dynamic<never>, arg1: $WorldDataConfiguration_, arg2: $Registry<$LevelStem_>, arg3: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        loadLevelSummaries(arg0: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        static readLevelDataTagRaw(arg0: $Path_): $CompoundTag;
        static readLevelDataTagFixed(arg0: $Path_, arg1: $DataFixer): $Dynamic<never>;
        makeLevelSummary(arg0: $Dynamic<never>, arg1: $LevelStorageSource$LevelDirectory_, arg2: boolean): $LevelSummary;
        static getFileModificationTime(arg0: $Path_): $Instant;
        isNewLevelIdAcceptable(arg0: string): boolean;
        levelExists(arg0: string): boolean;
        getBaseDir(): $Path;
        getBackupPath(): $Path;
        validateAndCreateAccess(arg0: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(arg0: $Path_, arg1: $Path_, arg2: $DirectoryValidator, arg3: $DataFixer);
        get name(): string;
        get baseDir(): $Path;
        get backupPath(): $Path;
        get worldDirValidator(): $DirectoryValidator;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        static parse<T>(arg0: $Dynamic<T>, arg1: $LevelSettings, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $WorldOptions, arg4: $Lifecycle): $PrimaryLevelData;
        getVersion(): number;
        getLevelName(): string;
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(arg0: number): void;
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(arg0: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(arg0: $UUID_): void;
        getPreset(): $ResourceLocation;
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        setWorldBorder(arg0: $WorldBorder$Settings): void;
        createTag(arg0: $RegistryAccess, arg1: $CompoundTag_): $CompoundTag;
        getGameType(): $GameType;
        setEndDragonFightData(arg0: $EndDragonFight$Data_): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        isFlatWorld(): boolean;
        isDifficultyLocked(): boolean;
        setGameType(arg0: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setClearWeatherTime(arg0: number): void;
        setRainTime(arg0: number): void;
        setThunderTime(arg0: number): void;
        setRaining(arg0: boolean): void;
        setThundering(arg0: boolean): void;
        setDayTime(arg0: number): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        getClearWeatherTime(): number;
        getThunderTime(): number;
        getRainTime(): number;
        setInitialized(arg0: boolean): void;
        isInitialized(): boolean;
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getDayTimeFraction(): number;
        getDayTime(): number;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        isRaining(): boolean;
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        setGameTime(arg0: number): void;
        wasModded(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(arg0: $WorldDataConfiguration_): void;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(arg0: string, arg1: boolean): void;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(arg0: $CompoundTag_): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        isAllowCommands(): boolean;
        setDifficulty(arg0: $Difficulty_): void;
        setDifficultyLocked(arg0: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        isDebugWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        setPreset(arg0: $ResourceLocation_): void;
        setEndDragonFight(arg0: $EndDragonFight$Data_): void;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getStorageVersionName(arg0: number): string;
        static PLAYER: string;
        settings: $LevelSettings;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(arg0: $LevelSettings, arg1: $WorldOptions, arg2: $PrimaryLevelData$SpecialWorldProperty_, arg3: $Lifecycle);
        get version(): number;
        get levelName(): string;
        get flatWorld(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        set endDragonFight(value: $EndDragonFight$Data_);
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        compareTo(arg0: $LevelSummary): number;
        isLocked(): boolean;
        getLevelName(): string;
        getSettings(): $LevelSettings;
        isExperimental(): boolean;
        getGameMode(): $GameType;
        isDisabled(): boolean;
        getInfo(): $Component;
        getIcon(): $Path;
        canDelete(): boolean;
        isHardcore(): boolean;
        getLevelId(): string;
        isCompatible(): boolean;
        levelVersion(): $LevelVersion;
        requiresManualConversion(): boolean;
        getLastPlayed(): number;
        hasCommands(): boolean;
        getWorldVersionName(): $MutableComponent;
        shouldBackup(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        isDowngrade(): boolean;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        canRecreate(): boolean;
        static PLAY_WORLD: $Component;
        constructor(arg0: $LevelSettings, arg1: $LevelVersion, arg2: string, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $Path_);
        get locked(): boolean;
        get levelName(): string;
        get settings(): $LevelSettings;
        get experimental(): boolean;
        get gameMode(): $GameType;
        get disabled(): boolean;
        get info(): $Component;
        get icon(): $Path;
        get hardcore(): boolean;
        get levelId(): string;
        get compatible(): boolean;
        get lastPlayed(): number;
        get worldVersionName(): $MutableComponent;
        get downgrade(): boolean;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource implements $LevelResourceAccessor {
        getId(): string;
        static createLevelResource$platform_$md$8e2dbe$0(arg0: string): $LevelResource;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(arg0: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
