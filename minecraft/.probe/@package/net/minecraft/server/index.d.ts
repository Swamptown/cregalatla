import { $DynamicOps } from "@package/com/mojang/serialization";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CloseableResourceManager, $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementProgress, $AdvancementNode, $AdvancementHolder_, $AdvancementTree } from "@package/net/minecraft/advancements";
import { $Difficulty_, $TickRateManager } from "@package/net/minecraft/world";
import { $SystemReport, $CrashReport } from "@package/net/minecraft";
import { $MinecraftServerData as $MinecraftServerData$1, $IMinecraftServer } from "@package/xaero/map/server";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy, $URI } from "@package/java/net";
import { $GameProfileRepository_, $GameProfileRepository, $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftServerData, $IMinecraftServer as $IMinecraftServer$1 } from "@package/xaero/common/server";
import { $MinecraftServerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ChatDecorator, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $TextFilter, $ServerConnectionListener } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $WorldData, $LevelStorageSource$LevelStorageAccess, $CommandStorage, $PlayerDataStorage, $LevelResource } from "@package/net/minecraft/world/level/storage";
import { $MinecraftServerExtension } from "@package/foundry/veil/ext";
import { $ChunkIOErrorReporter, $RegionStorageInfo_ } from "@package/net/minecraft/world/level/chunk/storage";
import { $CommandSource, $Commands, $Commands$CommandSelection_, $Commands$CommandSelection, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $RemoteDebugSampleType_, $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $PlayerSelector_, $ReloadableServerResourcesKJS, $MinecraftServerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $JsonElement_ } from "@package/com/google/gson";
import { $ServerStatus } from "@package/net/minecraft/network/protocol/status";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID_, $Map, $List, $Map_, $Collection_, $List_, $Collection, $Set, $UUID } from "@package/java/util";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListenerFactory_, $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $BooleanSupplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderGetter$Provider, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $RegistryAccess$Frozen, $Holder, $LayeredRegistryAccess, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Exception, $Throwable, $Runnable, $Enum, $RuntimeException, $Iterable, $Thread, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $GameRules, $ChunkPos, $WorldDataConfiguration_, $Level_, $GameType, $WorldDataConfiguration, $GameType_, $LevelSettings, $Level } from "@package/net/minecraft/world/level";
import { $OutputStream, $PrintStream, $File_, $IOException } from "@package/java/io";
import { $TagManager } from "@package/net/minecraft/tags";
import { $ProfilerFiller, $ProfileResults } from "@package/net/minecraft/util/profiling";
import { $PlayerList, $GameProfileCache } from "@package/net/minecraft/server/players";
import { $KeyPair } from "@package/java/security";
import { $CustomBossEvents } from "@package/net/minecraft/server/bossevents";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $ITimeTrackingServer, $IProfilingServerFunctionManager } from "@package/org/embeddedt/modernfix/duck";
import { $ServicesKeySet, $ServicesKeySet_, $YggdrasilAuthenticationService } from "@package/com/mojang/authlib/yggdrasil";
import { $Stream } from "@package/java/util/stream";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $DedicatedServerProperties } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey, $RegistryOps, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FabricOriginalKnownPacksGetter } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $TickTaskSchedulerImpl } from "@package/foundry/veil/impl";
import { $Scoreboard, $Objective, $ScoreboardSaveData } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as players from "@package/net/minecraft/server/players";
export * as packs from "@package/net/minecraft/server/packs";
export * as level from "@package/net/minecraft/server/level";
export * as commands from "@package/net/minecraft/server/commands";
export * as network from "@package/net/minecraft/server/network";
export * as advancements from "@package/net/minecraft/server/advancements";
export * as rcon from "@package/net/minecraft/server/rcon";
export * as chase from "@package/net/minecraft/server/chase";
export * as bossevents from "@package/net/minecraft/server/bossevents";
export * as dedicated from "@package/net/minecraft/server/dedicated";
export * as gui from "@package/net/minecraft/server/gui";

declare module "@package/net/minecraft/server" {
    export class $LoggedPrintStream extends $PrintStream {
        logLine(arg0: string): void;
        name: string;
        constructor(arg0: string, arg1: $OutputStream);
    }
    export class $PlayerAdvancements {
        save(): void;
        reload(arg0: $ServerAdvancementManager): void;
        handler$hef000$fabric_events_interaction_v0$preventOwnerOverride(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        stopListening(): void;
        handler$hef000$fabric_events_interaction_v0$preventGrantCriterion(arg0: $AdvancementHolder_, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        setPlayer(arg0: $ServerPlayer): void;
        flushDirty(arg0: $ServerPlayer): void;
        getOrStartProgress(arg0: $AdvancementHolder_): $AdvancementProgress;
        revoke(arg0: $AdvancementHolder_, arg1: string): boolean;
        award(arg0: $AdvancementHolder_, arg1: string): boolean;
        setSelectedTab(arg0: $AdvancementHolder_): void;
        constructor(arg0: $DataFixer, arg1: $PlayerList, arg2: $ServerAdvancementManager, arg3: $Path_, arg4: $ServerPlayer);
        set player(value: $ServerPlayer);
        set selectedTab(value: $AdvancementHolder_);
    }
    export class $WorldLoader$DataLoadOutput<D> extends $Record {
        finalDimensions(): $RegistryAccess$Frozen;
        cookie(): D;
        constructor(cookie: D, finalDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadOutput}.
     */
    export type $WorldLoader$DataLoadOutput_<D> = { finalDimensions?: $RegistryAccess$Frozen, cookie?: any,  } | [finalDimensions?: $RegistryAccess$Frozen, cookie?: any, ];
    export class $ConsoleInput {
        msg: string;
        source: $CommandSourceStack;
        constructor(arg0: string, arg1: $CommandSourceStack);
    }
    export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
        close(): void;
        managers(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        constructor(resourceManager: $CloseableResourceManager, managers: $ReloadableServerResources);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ReloadableResources}.
     */
    export type $MinecraftServer$ReloadableResources_ = { managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager,  } | [managers?: $ReloadableServerResources, resourceManager?: $CloseableResourceManager, ];
    export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
        get(arg0: $ResourceLocation_): $AdvancementHolder;
        apply(arg0: $Map_<$ResourceLocation_, $JsonElement_>, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        tree(): $AdvancementTree;
        getAllAdvancements(): $Collection<$AdvancementHolder>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        constructor(arg0: $HolderLookup$Provider);
        get allAdvancements(): $Collection<$AdvancementHolder>;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
    }
    export class $ServerInfo {
    }
    export interface $ServerInfo {
        getMaxPlayers(): number;
        getServerVersion(): string;
        getPlayerCount(): number;
        getMotd(): string;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
        get motd(): string;
    }
    export class $ServerLinks$KnownLinkType extends $Enum<$ServerLinks$KnownLinkType> {
        static values(): $ServerLinks$KnownLinkType[];
        static valueOf(arg0: string): $ServerLinks$KnownLinkType;
        create(arg0: $URI): $ServerLinks$Entry;
        static SUPPORT: $ServerLinks$KnownLinkType;
        static FORUMS: $ServerLinks$KnownLinkType;
        static STATUS: $ServerLinks$KnownLinkType;
        static ANNOUNCEMENTS: $ServerLinks$KnownLinkType;
        static COMMUNITY: $ServerLinks$KnownLinkType;
        static BUG_REPORT: $ServerLinks$KnownLinkType;
        static NEWS: $ServerLinks$KnownLinkType;
        static COMMUNITY_GUIDELINES: $ServerLinks$KnownLinkType;
        static FEEDBACK: $ServerLinks$KnownLinkType;
        static WEBSITE: $ServerLinks$KnownLinkType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$KnownLinkType>;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$KnownLinkType}.
     */
    export type $ServerLinks$KnownLinkType_ = "bug_report" | "community_guidelines" | "support" | "status" | "feedback" | "community" | "website" | "forums" | "news" | "announcements";
    export class $ReloadableServerResources$MissingTagAccessPolicy extends $Enum<$ReloadableServerResources$MissingTagAccessPolicy> {
    }
    /**
     * Values that may be interpreted as {@link $ReloadableServerResources$MissingTagAccessPolicy}.
     */
    export type $ReloadableServerResources$MissingTagAccessPolicy_ = "create_new" | "fail";
    export class $ServerTickRateManager extends $TickRateManager {
        requestGameToSprint(arg0: number): boolean;
        stopSprinting(): boolean;
        stopStepping(): boolean;
        stepGameIfPaused(arg0: number): boolean;
        updateJoiningPlayer(arg0: $ServerPlayer): void;
        checkShouldSprintThisTick(): boolean;
        endTickWork(): void;
        isSprinting(): boolean;
        static MIN_TICKRATE: number;
        runGameElements: boolean;
        constructor(arg0: $MinecraftServer);
        get sprinting(): boolean;
    }
    export class $PlayerAdvancements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerAdvancements$Data}.
     */
    export type $PlayerAdvancements$Data_ = { map?: $Map_<$ResourceLocation_, $AdvancementProgress>,  } | [map?: $Map_<$ResourceLocation_, $AdvancementProgress>, ];
    export class $ServerLinks extends $Record {
        isEmpty(): boolean;
        entries(): $List<$ServerLinks$Entry>;
        untrust(): $List<$ServerLinks$UntrustedEntry>;
        findKnownType(arg0: $ServerLinks$KnownLinkType_): ($ServerLinks$Entry) | undefined;
        static UNTRUSTED_LINKS_STREAM_CODEC: $StreamCodec<$ByteBuf, $List<$ServerLinks$UntrustedEntry>>;
        static TYPE_STREAM_CODEC: $StreamCodec<$ByteBuf, $Either<$ServerLinks$KnownLinkType, $Component>>;
        static EMPTY: $ServerLinks;
        constructor(arg0: $List_<$ServerLinks$Entry_>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks}.
     */
    export type $ServerLinks_ = { entries?: $List_<$ServerLinks$Entry_>,  } | [entries?: $List_<$ServerLinks$Entry_>, ];
    export class $DebugLoggedPrintStream extends $LoggedPrintStream {
        name: string;
        constructor(arg0: string, arg1: $OutputStream);
    }
    export class $WorldLoader$PackConfig extends $Record {
        initialDataConfig(): $WorldDataConfiguration;
        initMode(): boolean;
        safeMode(): boolean;
        createResourceManager(): $Pair<$WorldDataConfiguration, $CloseableResourceManager>;
        packRepository(): $PackRepository;
        constructor(packRepository: $PackRepository, initialDataConfig: $WorldDataConfiguration_, safeMode: boolean, initMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$PackConfig}.
     */
    export type $WorldLoader$PackConfig_ = { packRepository?: $PackRepository, initMode?: boolean, safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_,  } | [packRepository?: $PackRepository, initMode?: boolean, safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration_, ];
    export class $ChainedJsonException$Entry {
        getJsonKeys(): string;
        getFilename(): string;
        addJsonKey(arg0: string): void;
        filename: string;
        constructor();
        get jsonKeys(): string;
    }
    export class $RunningOnDifferentThreadException extends $RuntimeException {
        static RUNNING_ON_DIFFERENT_THREAD: $RunningOnDifferentThreadException;
    }
    export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
        static values(): $ServerScoreboard$Method[];
        static valueOf(arg0: string): $ServerScoreboard$Method;
        static REMOVE: $ServerScoreboard$Method;
        static CHANGE: $ServerScoreboard$Method;
    }
    /**
     * Values that may be interpreted as {@link $ServerScoreboard$Method}.
     */
    export type $ServerScoreboard$Method_ = "change" | "remove";
    export class $ReloadableServerRegistries {
        static reload(arg0: $LayeredRegistryAccess<$RegistryLayer_>, arg1: $ResourceManager, arg2: $Executor_): $CompletableFuture<$LayeredRegistryAccess<$RegistryLayer>>;
        constructor();
    }
    export class $ReloadableServerRegistries$EmptyTagLookupWrapper implements $HolderLookup$Provider {
        lookup<T>(arg0: $ResourceKey_<$Registry<T>>): ($HolderLookup$RegistryLookup<T>) | undefined;
        listRegistries(): $Stream<$ResourceKey<$Registry<never>>>;
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        constructor(arg0: $RegistryAccess);
    }
    export class $WorldLoader$WorldDataSupplier<D> {
    }
    export interface $WorldLoader$WorldDataSupplier<D> {
        get(arg0: $WorldLoader$DataLoadContext_): $WorldLoader$DataLoadOutput<D>;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$WorldDataSupplier}.
     */
    export type $WorldLoader$WorldDataSupplier_<D> = ((arg0: $WorldLoader$DataLoadContext) => $WorldLoader$DataLoadOutput_<D>);
    export class $Bootstrap {
        static validate(): void;
        static getMissingTranslations(): $Set<string>;
        static checkBootstrapCalled(arg0: $Supplier_<string>): void;
        static bootStrap(): void;
        static realStdoutPrintln(arg0: string): void;
        static STDOUT: $PrintStream;
        static bootstrapDuration: $AtomicLong;
        constructor();
        static get missingTranslations(): $Set<string>;
    }
    export class $ChainedJsonException extends $IOException {
        static forException(arg0: $Exception): $ChainedJsonException;
        prependJsonKey(arg0: string): void;
        setFilenameAndFlush(arg0: string): void;
        constructor(arg0: string);
        constructor(arg0: string, arg1: $Throwable);
        set filenameAndFlush(value: string);
    }
    export class $WorldLoader$ResultFactory<D, R> {
    }
    export interface $WorldLoader$ResultFactory<D, R> {
        create(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: D): R;
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$ResultFactory}.
     */
    export type $WorldLoader$ResultFactory_<D, R> = ((arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer>, arg3: D) => R);
    export class $MinecraftServer$TimeProfiler {
    }
    export class $RegistryLayer extends $Enum<$RegistryLayer> {
        static values(): $RegistryLayer[];
        static valueOf(arg0: string): $RegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$RegistryLayer>;
        static WORLDGEN: $RegistryLayer;
        static DIMENSIONS: $RegistryLayer;
        static RELOADABLE: $RegistryLayer;
        static STATIC: $RegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $RegistryLayer}.
     */
    export type $RegistryLayer_ = "static" | "worldgen" | "dimensions" | "reloadable";
    export class $ReloadableServerResources$ConfigurableRegistryLookup implements $HolderLookup$Provider {
        createSerializationContext<V>(arg0: $DynamicOps<V>): $RegistryOps<V>;
        lookupOrThrow<T>(arg0: $ResourceKey_<$Registry<T>>): $HolderLookup$RegistryLookup<T>;
        asGetterLookup(): $HolderGetter$Provider;
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
    }
    export class $Eula {
        hasAgreedToEULA(): boolean;
        constructor(arg0: $Path_);
    }
    export class $WorldLoader {
        static load<D, R>(arg0: $WorldLoader$InitConfig_, arg1: $WorldLoader$WorldDataSupplier_<D>, arg2: $WorldLoader$ResultFactory_<D, R>, arg3: $Executor_, arg4: $Executor_): $CompletableFuture<R>;
        constructor();
    }
    export class $ReloadableServerRegistries$Holder {
        get(): $RegistryAccess$Frozen;
        lookup(): $HolderGetter$Provider;
        getKeys(arg0: $ResourceKey_<$Registry<never>>): $Collection<$ResourceLocation>;
        getLootTable(arg0: $ResourceKey_<$LootTable>): $LootTable;
        constructor(arg0: $RegistryAccess$Frozen);
    }
    export class $WorldLoader$DataLoadContext extends $Record {
        resources(): $ResourceManager;
        dataConfiguration(): $WorldDataConfiguration;
        datapackWorldgen(): $RegistryAccess$Frozen;
        datapackDimensions(): $RegistryAccess$Frozen;
        constructor(resources: $ResourceManager, dataConfiguration: $WorldDataConfiguration_, datapackWorldgen: $RegistryAccess$Frozen, datapackDimensions: $RegistryAccess$Frozen);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$DataLoadContext}.
     */
    export type $WorldLoader$DataLoadContext_ = { dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen,  } | [dataConfiguration?: $WorldDataConfiguration_, resources?: $ResourceManager, datapackDimensions?: $RegistryAccess$Frozen, datapackWorldgen?: $RegistryAccess$Frozen, ];
    export class $ServerInterface {
    }
    export interface $ServerInterface extends $ServerInfo {
        getProperties(): $DedicatedServerProperties;
        getServerPort(): number;
        getServerIp(): string;
        getPluginNames(): string;
        getLevelIdName(): string;
        getPlayerNames(): string[];
        getServerName(): string;
        runCommand(arg0: string): string;
        get properties(): $DedicatedServerProperties;
        get serverPort(): number;
        get serverIp(): string;
        get pluginNames(): string;
        get levelIdName(): string;
        get playerNames(): string[];
        get serverName(): string;
    }
    export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
        getFunction(arg0: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getAvailableTags(): $Iterable<$ResourceLocation>;
        getTag(arg0: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getFunctions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getName(): string;
        static TYPE_KEY: $ResourceKey<$Registry<$CommandFunction<$CommandSourceStack>>>;
        constructor(arg0: number, arg1: $CommandDispatcher<$CommandSourceStack>);
        get availableTags(): $Iterable<$ResourceLocation>;
        get functions(): $Map<$ResourceLocation, $CommandFunction<$CommandSourceStack>>;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $ServerInfo, $ChunkIOErrorReporter, $CommandSource, $AutoCloseable, $ITimeTrackingServer, $VeilPacketManager$PacketSink, $MinecraftServerExtension, $MinecraftServerAccessor, $IMinecraftServer$1, $IMinecraftServer, $MinecraftServerKJS, $FabricOriginalKnownPacksGetter {
        getPort(): number;
        getFile(arg0: string): $Path;
        isShutdown(): boolean;
        halt(arg0: boolean): void;
        getLevel(arg0: $ResourceKey_<$Level>): $ServerLevel;
        isSingleplayerOwner(arg0: $GameProfile): boolean;
        isCurrentlySaving(): boolean;
        loadLevel(): void;
        getServerModName(): string;
        getModdedStatus(): $ModCheck;
        createLevels(arg0: $ChunkProgressListener): void;
        forceDifficulty(): void;
        waitUntilNextTick(): void;
        getOperatorUserPermissionLevel(): number;
        getFunctionCompilationLevel(): number;
        shouldRconBroadcast(): boolean;
        saveAllChunks(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        saveEverything(arg0: boolean, arg1: boolean, arg2: boolean): boolean;
        stop(): void;
        handler$zkp000$veil$stopServer(arg0: $CallbackInfo): void;
        getLocalIp(): string;
        setLocalIp(arg0: string): void;
        runServer(): void;
        handler$zzd000$createthreadedtrains$ctt$start(ci: $CallbackInfo): void;
        endMetricsRecordingTick(): void;
        onServerExit(): void;
        getServerDirectory(): $Path;
        onServerCrash(arg0: $CrashReport): void;
        isTickTimeLoggingEnabled(): boolean;
        getTickTimeLogger(): $SampleLogger;
        static throwIfFatalException(): boolean;
        static setFatalException(arg0: $RuntimeException): void;
        handler$zzd000$createthreadedtrains$ctt$preTick(b: $BooleanSupplier_, ci: $CallbackInfo): void;
        tickChildren(arg0: $BooleanSupplier_): void;
        handler$zzd000$createthreadedtrains$ctt$postTick(b: $BooleanSupplier_, ci: $CallbackInfo): void;
        getStatusJson(): string;
        getAverageTickTimeNanos(): number;
        onTickRateChanged(): void;
        enforceSecureProfile(): boolean;
        getMaxPlayers(): number;
        hidesOnlinePlayers(): boolean;
        addTickable(arg0: $Runnable_): void;
        levelKeys(): $Set<$ResourceKey<$Level>>;
        getServerVersion(): string;
        getPlayerCount(): number;
        getPlayerNames(): string[];
        fillServerSystemReport(arg0: $SystemReport): $SystemReport;
        getSingleplayerProfile(): $GameProfile;
        setSingleplayerProfile(arg0: $GameProfile): void;
        initializeKeyPair(): void;
        getScaledTrackingDistance(arg0: number): number;
        isSpawningMonsters(): boolean;
        setDemo(arg0: boolean): void;
        getServerResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        isResourcePackRequired(): boolean;
        getRateLimitPacketsPerSecond(): number;
        usesAuthentication(): boolean;
        getPreventProxyConnections(): boolean;
        setPreventProxyConnections(arg0: boolean): void;
        isEpollEnabled(): boolean;
        setPvpAllowed(arg0: boolean): void;
        isFlightAllowed(): boolean;
        setFlightAllowed(arg0: boolean): void;
        setMotd(arg0: string): void;
        setPlayerList(arg0: $PlayerList): void;
        setDefaultGameType(arg0: $GameType_): void;
        hasGui(): boolean;
        publishServer(arg0: $GameType_, arg1: boolean, arg2: number): boolean;
        getSpawnProtectionRadius(): number;
        repliesToStatus(): boolean;
        getPlayerIdleTimeout(): number;
        setPlayerIdleTimeout(arg0: number): void;
        getSessionService(): $MinecraftSessionService;
        getProfileRepository(): $GameProfileRepository;
        invalidateStatus(): void;
        getCompressionThreshold(): number;
        getNextTickTime(): number;
        reloadResources(arg0: $Collection_<string>): $CompletableFuture<void>;
        static configurePackRepository(arg0: $PackRepository, arg1: $WorldDataConfiguration_, arg2: boolean, arg3: boolean): $WorldDataConfiguration;
        kickUnlistedPlayers(arg0: $CommandSourceStack): void;
        isEnforceWhitelist(): boolean;
        getPackRepository(): $PackRepository;
        setEnforceWhitelist(arg0: boolean): void;
        getCurrentSmoothedTickTime(): number;
        getTickTimesNanos(): number[];
        /**
         * @deprecated
         */
        forgeGetWorldMap(): $Map<$ResourceKey<$Level>, $ServerLevel>;
        /**
         * @deprecated
         */
        markWorldsDirty(): void;
        dumpServerProperties(arg0: $Path_): void;
        isRecordingMetrics(): boolean;
        stopRecordingMetrics(): void;
        isTimeProfilerRunning(): boolean;
        startTimeProfiler(): void;
        stopTimeProfiler(): $ProfileResults;
        logIPs(): boolean;
        subscribeToDebugSample(arg0: $ServerPlayer, arg1: $RemoteDebugSampleType_): void;
        acceptsTransfers(): boolean;
        reportChunkLoadFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        reportChunkSaveFailure(arg0: $Throwable, arg1: $RegionStorageInfo_, arg2: $ChunkPos): void;
        mfix$getLastTickStartTime(): number;
        veil$getScheduler(): $TickTaskSchedulerImpl;
        veil$getOrCreateScheduler(): $TickTaskSchedulerImpl;
        getXaeroMinimapServerData(): $MinecraftServerData;
        setXaeroMinimapServerData(arg0: $MinecraftServerData): void;
        getXaeroWorldMapServerData(): $MinecraftServerData$1;
        setXaeroWorldMapServerData(arg0: $MinecraftServerData$1): void;
        getOverworld(): $ServerLevel;
        fabric_getOriginalKnownPacks(): $List<any>;
        getWorldPath(arg0: $LevelResource): $Path;
        handler$zzd000$createthreadedtrains$ctt$stop(ci: $CallbackInfo): void;
        getAllLevels(): $Iterable<$ServerLevel>;
        getCommandStorage(): $CommandStorage;
        createTextFilterForPlayer(arg0: $ServerPlayer): $TextFilter;
        createGameModeForPlayer(arg0: $ServerPlayer): $ServerPlayerGameMode;
        getSpawnRadius(arg0: $ServerLevel): number;
        isPvpAllowed(): boolean;
        getProfilePermissions(arg0: $GameProfile): number;
        getForcedGameType(): $GameType;
        getDefaultGameType(): $GameType;
        restoreInventories(): $Map<any, any>;
        getPlayerList(): $PlayerList;
        getTickTime(arg0: $ResourceKey_<$Level>): number[];
        getProfileCache(): $GameProfileCache;
        getChatDecorator(): $ChatDecorator;
        forceTimeSynchronization(): void;
        getMaxChainedNeighborUpdates(): number;
        forceSynchronousWrites(): boolean;
        getStructureManager(): $StructureTemplateManager;
        getAbsoluteMaxWorldSize(): number;
        isSpawningAnimals(): boolean;
        areNpcsEnabled(): boolean;
        isUnderSpawnProtection(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Player): boolean;
        isCommandBlockEnabled(): boolean;
        getTickCount(): number;
        tickServer(arg0: $BooleanSupplier_): void;
        getServerResources(): $MinecraftServer$ReloadableResources;
        isStopped(): boolean;
        isRunning(): boolean;
        getStatus(): $ServerStatus;
        setPort(arg0: number): void;
        setId(arg0: string): void;
        isDedicated(): boolean;
        getProfiler(): $ProfilerFiller;
        getFunctions(): $ServerFunctionManager;
        getWorldScreenshotFile(): ($Path) | undefined;
        doRunTask(arg0: $TickTask): void;
        isPublished(): boolean;
        isHardcore(): boolean;
        fillSystemReport(arg0: $SystemReport): $SystemReport;
        startRecordingMetrics(arg0: $Consumer_<$ProfileResults>, arg1: $Consumer_<$Path>): void;
        finishRecordingMetrics(): void;
        cancelRecordingMetrics(): void;
        getWorldData(): $WorldData;
        tickRateManager(): $ServerTickRateManager;
        getAdvancements(): $ServerAdvancementManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        setUsesAuthentication(arg0: boolean): void;
        static spin<S extends $MinecraftServer>(arg0: $Function_<$Thread, S>): S;
        isReady(): boolean;
        isDemo(): boolean;
        registryAccess(): $RegistryAccess$Frozen;
        isSingleplayer(): boolean;
        getResourceManager(): $ResourceManager;
        isPaused(): boolean;
        shouldRun(arg0: $TickTask): boolean;
        getFixerUpper(): $DataFixer;
        getProfileKeySignatureValidator(): $SignatureValidator;
        getRecipeManager(): $RecipeManager;
        getScheduledEvents(): $ScheduledEvents;
        sendPacket(arg0: $Packet<any>): void;
        getProxy(): $Proxy;
        getScoreboard(): $ServerScoreboard;
        getGameRules(): $GameRules;
        reloadableRegistries(): $ReloadableServerRegistries$Holder;
        sendSystemMessage(arg0: $Component_): void;
        getCommands(): $Commands;
        createCommandSourceStack(): $CommandSourceStack;
        getPersistentData(): $CompoundTag;
        getData(): $AttachedData<any>;
        isLevelEnabled(arg0: $Level_): boolean;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        potionBrewing(): $PotionBrewing;
        overworld(): $ServerLevel;
        serverLinks(): $ServerLinks;
        getMotd(): string;
        getCustomBossEvents(): $CustomBossEvents;
        setDifficulty(arg0: $Difficulty_, arg1: boolean): void;
        setDifficultyLocked(arg0: boolean): void;
        getKeyPair(): $KeyPair;
        logChatMessage(arg0: $Component_, arg1: $ChatType$Bound_, arg2: string): void;
        initServer(): boolean;
        getConnection(): $ServerConnectionListener;
        reportMisplacedChunk(arg0: $ChunkPos, arg1: $ChunkPos, arg2: $RegionStorageInfo_): void;
        alwaysAccepts(): boolean;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        getName(): $Component;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        sendData(channel: string, data: $CompoundTag_): void;
        getMcEntities(): $Iterable<$Entity>;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        sendData(channel: string): void;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntities(): $EntityArrayList;
        getDisplayName(): $Component;
        catnip$getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(arg0: $Thread, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $PackRepository, arg3: $WorldStem_, arg4: $Proxy, arg5: $DataFixer, arg6: $Services_, arg7: $ChunkProgressListenerFactory_);
        get shutdown(): boolean;
        get currentlySaving(): boolean;
        get serverModName(): string;
        get moddedStatus(): $ModCheck;
        get operatorUserPermissionLevel(): number;
        get functionCompilationLevel(): number;
        get serverDirectory(): $Path;
        get tickTimeLoggingEnabled(): boolean;
        get tickTimeLogger(): $SampleLogger;
        static set fatalException(value: $RuntimeException);
        get statusJson(): string;
        get averageTickTimeNanos(): number;
        get maxPlayers(): number;
        get serverVersion(): string;
        get playerCount(): number;
        get playerNames(): string[];
        get spawningMonsters(): boolean;
        get serverResourcePack(): ($MinecraftServer$ServerResourcePackInfo) | undefined;
        get resourcePackRequired(): boolean;
        get rateLimitPacketsPerSecond(): number;
        get epollEnabled(): boolean;
        get spawnProtectionRadius(): number;
        get sessionService(): $MinecraftSessionService;
        get profileRepository(): $GameProfileRepository;
        get compressionThreshold(): number;
        get nextTickTime(): number;
        get packRepository(): $PackRepository;
        get currentSmoothedTickTime(): number;
        get tickTimesNanos(): number[];
        get recordingMetrics(): boolean;
        get timeProfilerRunning(): boolean;
        get allLevels(): $Iterable<$ServerLevel>;
        get commandStorage(): $CommandStorage;
        get forcedGameType(): $GameType;
        get profileCache(): $GameProfileCache;
        get chatDecorator(): $ChatDecorator;
        get maxChainedNeighborUpdates(): number;
        get structureManager(): $StructureTemplateManager;
        get absoluteMaxWorldSize(): number;
        get spawningAnimals(): boolean;
        get commandBlockEnabled(): boolean;
        get tickCount(): number;
        get serverResources(): $MinecraftServer$ReloadableResources;
        get stopped(): boolean;
        get running(): boolean;
        get status(): $ServerStatus;
        set id(value: string);
        get dedicated(): boolean;
        get profiler(): $ProfilerFiller;
        get functions(): $ServerFunctionManager;
        get worldScreenshotFile(): ($Path) | undefined;
        get published(): boolean;
        get hardcore(): boolean;
        get advancements(): $ServerAdvancementManager;
        get ready(): boolean;
        get singleplayer(): boolean;
        get resourceManager(): $ResourceManager;
        get paused(): boolean;
        get fixerUpper(): $DataFixer;
        get profileKeySignatureValidator(): $SignatureValidator;
        get recipeManager(): $RecipeManager;
        get scheduledEvents(): $ScheduledEvents;
        get scoreboard(): $ServerScoreboard;
        get gameRules(): $GameRules;
        get commands(): $Commands;
        get persistentData(): $CompoundTag;
        get data(): $AttachedData<any>;
        get customBossEvents(): $CustomBossEvents;
        set difficultyLocked(value: boolean);
        get keyPair(): $KeyPair;
        get connection(): $ServerConnectionListener;
        set activePostShader(value: $ResourceLocation_);
        set statusMessage(value: $Component_);
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get entities(): $EntityArrayList;
        get displayName(): $Component;
    }
    export class $WorldStem extends $Record implements $AutoCloseable {
        close(): void;
        dataPackResources(): $ReloadableServerResources;
        resourceManager(): $CloseableResourceManager;
        registries(): $LayeredRegistryAccess<$RegistryLayer>;
        worldData(): $WorldData;
        constructor(arg0: $CloseableResourceManager, arg1: $ReloadableServerResources, arg2: $LayeredRegistryAccess<$RegistryLayer_>, arg3: $WorldData);
    }
    /**
     * Values that may be interpreted as {@link $WorldStem}.
     */
    export type $WorldStem_ = { registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources,  } | [registries?: $LayeredRegistryAccess<$RegistryLayer_>, worldData?: $WorldData, resourceManager?: $CloseableResourceManager, dataPackResources?: $ReloadableServerResources, ];
    export class $ServerScoreboard extends $Scoreboard {
        setDirty(): void;
        getObjectiveDisplaySlotCount(arg0: $Objective): number;
        stopTrackingObjective(arg0: $Objective): void;
        startTrackingObjective(arg0: $Objective): void;
        addDirtyListener(arg0: $Runnable_): void;
        getStartTrackingPackets(arg0: $Objective): $List<$Packet<never>>;
        getStopTrackingPackets(arg0: $Objective): $List<$Packet<never>>;
        dataFactory(): $SavedData$Factory<$ScoreboardSaveData>;
        static HIDDEN_SCORE_PREFIX: string;
        constructor(arg0: $MinecraftServer);
    }
    export class $ReloadableServerResources implements $ReloadableServerResourcesKJS {
        listeners(): $List<$PreparableReloadListener>;
        kjs$getTagManager(): $TagManager;
        static loadResources(arg0: $ResourceManager, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $FeatureFlagSet, arg3: $Commands$CommandSelection_, arg4: number, arg5: $Executor_, arg6: $Executor_): $CompletableFuture<$ReloadableServerResources>;
        getFunctionLibrary(): $ServerFunctionLibrary;
        updateRegistryTags(): void;
        kjs$getServerScriptManager(): $ServerScriptManager;
        fullRegistries(): $ReloadableServerRegistries$Holder;
        getAdvancements(): $ServerAdvancementManager;
        getRecipeManager(): $RecipeManager;
        getCommands(): $Commands;
        getRegistryLookup(): $HolderLookup$Provider;
        getConditionContext(): $ICondition$IContext;
        get functionLibrary(): $ServerFunctionLibrary;
        get advancements(): $ServerAdvancementManager;
        get recipeManager(): $RecipeManager;
        get commands(): $Commands;
        get registryLookup(): $HolderLookup$Provider;
        get conditionContext(): $ICondition$IContext;
    }
    export class $WorldLoader$InitConfig extends $Record {
        packConfig(): $WorldLoader$PackConfig;
        commandSelection(): $Commands$CommandSelection;
        functionCompilationLevel(): number;
        constructor(packConfig: $WorldLoader$PackConfig_, commandSelection: $Commands$CommandSelection_, functionCompilationLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldLoader$InitConfig}.
     */
    export type $WorldLoader$InitConfig_ = { functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_,  } | [functionCompilationLevel?: number, packConfig?: $WorldLoader$PackConfig_, commandSelection?: $Commands$CommandSelection_, ];
    export class $TickTask implements $Runnable {
        run(): void;
        getTick(): number;
        constructor(arg0: number, arg1: $Runnable_);
        get tick(): number;
    }
    export class $ServerLinks$Entry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        displayName(): $Component;
        link(): $URI;
        static custom(arg0: $Component_, arg1: $URI): $ServerLinks$Entry;
        static knownType(arg0: $ServerLinks$KnownLinkType_, arg1: $URI): $ServerLinks$Entry;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: $URI);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$Entry}.
     */
    export type $ServerLinks$Entry_ = { link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: $URI, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $MinecraftServer$ServerResourcePackInfo extends $Record {
        hash(): string;
        url(): string;
        id(): $UUID;
        prompt(): $Component;
        isRequired(): boolean;
        constructor(id: $UUID_, url: string, hash: string, isRequired: boolean, prompt: $Component_);
        get required(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServer$ServerResourcePackInfo}.
     */
    export type $MinecraftServer$ServerResourcePackInfo_ = { id?: $UUID_, prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string,  } | [id?: $UUID_, prompt?: $Component_, isRequired?: boolean, url?: string, hash?: string, ];
    export class $Main {
        static main(arg0: string[]): void;
        constructor();
    }
    export class $ServerLinks$UntrustedEntry extends $Record {
        type(): $Either<$ServerLinks$KnownLinkType, $Component>;
        link(): string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerLinks$UntrustedEntry>;
        constructor(arg0: $Either<$ServerLinks$KnownLinkType_, $Component_>, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $ServerLinks$UntrustedEntry}.
     */
    export type $ServerLinks$UntrustedEntry_ = { link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>,  } | [link?: string, type?: $Either<$ServerLinks$KnownLinkType_, $Component_>, ];
    export class $Services extends $Record {
        static create(arg0: $YggdrasilAuthenticationService, arg1: $File_): $Services;
        profileKeySignatureValidator(): $SignatureValidator;
        profileRepository(): $GameProfileRepository;
        sessionService(): $MinecraftSessionService;
        profileCache(): $GameProfileCache;
        canValidateProfileKeys(): boolean;
        servicesKeySet(): $ServicesKeySet;
        constructor(arg0: $MinecraftSessionService, arg1: $ServicesKeySet_, arg2: $GameProfileRepository_, arg3: $GameProfileCache);
    }
    /**
     * Values that may be interpreted as {@link $Services}.
     */
    export type $Services_ = { profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache,  } | [profileRepository?: $GameProfileRepository_, sessionService?: $MinecraftSessionService, servicesKeySet?: $ServicesKeySet_, profileCache?: $GameProfileCache, ];
    export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
        get(arg0: $ResourceLocation_): ($CommandFunction<$CommandSourceStack>) | undefined;
        execute(arg0: $CommandFunction<$CommandSourceStack>, arg1: $CommandSourceStack): void;
        tick(): void;
        getGameLoopSender(): $CommandSourceStack;
        mfix$getProfilingResults(): string;
        replaceLibrary(arg0: $ServerFunctionLibrary): void;
        getFunctionNames(): $Iterable<$ResourceLocation>;
        getTagNames(): $Iterable<$ResourceLocation>;
        getTag(arg0: $ResourceLocation_): $Collection<$CommandFunction<$CommandSourceStack>>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        constructor(arg0: $MinecraftServer, arg1: $ServerFunctionLibrary);
        get gameLoopSender(): $CommandSourceStack;
        get functionNames(): $Iterable<$ResourceLocation>;
        get tagNames(): $Iterable<$ResourceLocation>;
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
}
