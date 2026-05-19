import { $LevelRenderer, $PanoramaRenderer, $CubeMap, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $Connection, $FriendlyByteBuf, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $InetSocketAddress, $URL } from "@package/java/net";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AccessorClientChunkCacheStorage } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $ClientChunkMapAccess, $ClientChunkManagerAccess } from "@package/me/cominixo/betterf3/ducks";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $SignedMessageChain$Encoder, $RemoteChatSession_, $SignedMessageValidator, $LocalChatSession, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Duration_ } from "@package/java/time";
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $IMixinServerList } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $UUID_, $Set_, $List, $List_, $UUID, $ArrayList, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $BlockStatePredictionHandler } from "@package/net/minecraft/client/multiplayer/prediction";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $Holder_, $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Object, $Exception, $Throwable, $Record, $Runnable_ } from "@package/java/lang";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $ColorResolver_, $GameType, $EntityGetter, $LevelHeightAccessor, $Level, $GameType_ } from "@package/net/minecraft/world/level";
import { $ClientboundHelloPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientboundGameProfilePacket_, $ClientboundLoginCompressionPacket, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $DebugScreenOverlay, $ChatComponent$State, $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ChannelHandlerContext, $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $Screen, $Screen$DeferredTooltipRendering, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ClientLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $NarratorStatus, $User, $ClientRecipeBook } from "@package/net/minecraft/client";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementTree$Listener, $AdvancementHolder_, $AdvancementTree, $AdvancementHolder, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $InteractionResult, $Difficulty } from "@package/net/minecraft/world";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $LevelCallback, $EntityTickList, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $TooltipFlag, $Item$TooltipContext, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $IMixinClientPacketListener } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $Vec3_, $BlockHitResult, $EntityHitResult, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $AbstractNetworkAddon, $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ServerDataExtension } from "@package/com/aizistral/nochatreports/common/core";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $SuggestionsBuilder, $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $Path_ } from "@package/java/nio/file";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelParticlesPacket, $ClientboundLevelEventPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetEntityDataPacket_, $ClientboundSetObjectivePacket, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundBlockEventPacket, $ClientboundPlayerAbilitiesPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $ClientboundUpdateEnabledFeaturesPacket_, $ClientboundFinishConfigurationPacket, $ClientboundResetChatPacket, $ClientConfigurationPacketListener, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $Stream } from "@package/java/util/stream";
import { $AccessorClientPacketListener } from "@package/com/aizistral/nochatreports/common/mixins/client";
import { $WorldMapSession } from "@package/xaero/map";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $ClientWorldAccessor } from "@package/net/caffeinemc/mods/lithium/common/client";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        append(arg0: $ResourceKey_<$Registry<never>>, arg1: $TagNetworkSerialization$NetworkPayload): void;
        updateTags(arg0: $RegistryAccess, arg1: boolean): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
        constructor(arg0: $UserApiService, arg1: $UUID_, arg2: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler {
        handleResetChat(arg0: $ClientboundResetChatPacket): void;
        handleRegistryData(arg0: $ClientboundRegistryDataPacket_): void;
        handleEnabledFeatures(arg0: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handler$ekg000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handleConfigurationFinished(arg0: $ClientboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(arg0: $ClientboundSelectKnownPacks_): void;
        tick(): void;
        handleDisconnect(): void;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        chatState: $ChatComponent$State;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        tick(): void;
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        constructor(arg0: $LocalPlayer, arg1: $ClientLevel, arg2: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $AccessorClientPacketListener, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $IMixinClientPacketListener, $ClientPacketListenerKJS {
        getLocalGameProfile(): $GameProfile;
        getPlayerInfo(arg0: string): $PlayerInfo;
        getPlayerInfo(arg0: $UUID_): $PlayerInfo;
        sendCommand(arg0: string): void;
        handleGameEvent(arg0: $ClientboundGameEventPacket): void;
        getLevel(): $ClientLevel;
        levels(): $Set<$ResourceKey<$Level>>;
        tick(): void;
        getId(): $UUID;
        close(): void;
        sendUnsignedCommand(arg0: string): boolean;
        handleBlockChangedAck(arg0: $ClientboundBlockChangedAckPacket_): void;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        clearLevel(): void;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        getRecipeManager(): $RecipeManager;
        scoreboard(): $Scoreboard;
        handleDamageEvent(arg0: $ClientboundDamageEventPacket_): void;
        handleEntityEvent(arg0: $ClientboundEntityEventPacket): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        potionBrewing(): $PotionBrewing;
        searchTrees(): $SessionSearchTrees;
        kjs$sessionData(): $KubeSessionData;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handler$cpb001$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$dfl000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        handleLogin(arg0: $ClientboundLoginPacket_): void;
        handler$cpb000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$dfn001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$zob000$exposure$handleLogin(packet: $ClientboundLoginPacket_, ci: $CallbackInfo): void;
        handleAddEntity(arg0: $ClientboundAddEntityPacket): void;
        handleAddExperienceOrb(arg0: $ClientboundAddExperienceOrbPacket): void;
        handleSetEntityMotion(arg0: $ClientboundSetEntityMotionPacket): void;
        handleSetEntityData(arg0: $ClientboundSetEntityDataPacket_): void;
        handleTeleportEntity(arg0: $ClientboundTeleportEntityPacket): void;
        handleTickingState(arg0: $ClientboundTickingStatePacket_): void;
        handleTickingStep(arg0: $ClientboundTickingStepPacket_): void;
        handleSetCarriedItem(arg0: $ClientboundSetCarriedItemPacket): void;
        handleMoveEntity(arg0: $ClientboundMoveEntityPacket): void;
        handleRotateMob(arg0: $ClientboundRotateHeadPacket): void;
        handleRemoveEntities(arg0: $ClientboundRemoveEntitiesPacket): void;
        handleMovePlayer(arg0: $ClientboundPlayerPositionPacket): void;
        handleChunkBlocksUpdate(arg0: $ClientboundSectionBlocksUpdatePacket): void;
        handler$cpb000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfl001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket): void;
        handler$cpb000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$dfl001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handleChunksBiomes(arg0: $ClientboundChunksBiomesPacket_): void;
        handler$cpb000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$dfl001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handleForgetLevelChunk(arg0: $ClientboundForgetLevelChunkPacket_): void;
        handler$cpb000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$dfl001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handleBlockUpdate(arg0: $ClientboundBlockUpdatePacket): void;
        handler$cpb000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfl001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handleConfigurationStart(arg0: $ClientboundStartConfigurationPacket): void;
        handleTakeItemEntity(arg0: $ClientboundTakeItemEntityPacket): void;
        handleSystemChat(arg0: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(arg0: $ClientboundPlayerChatPacket_): void;
        handleDisguisedChat(arg0: $ClientboundDisguisedChatPacket_): void;
        handleDeleteChat(arg0: $ClientboundDeleteChatPacket_): void;
        handleAnimate(arg0: $ClientboundAnimatePacket): void;
        handleHurtAnimation(arg0: $ClientboundHurtAnimationPacket_): void;
        handleSetTime(arg0: $ClientboundSetTimePacket): void;
        handleSetSpawn(arg0: $ClientboundSetDefaultSpawnPositionPacket): void;
        handler$cpb000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$dfl001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handleSetEntityPassengersPacket(arg0: $ClientboundSetPassengersPacket): void;
        handleEntityLinkPacket(arg0: $ClientboundSetEntityLinkPacket): void;
        handleSetHealth(arg0: $ClientboundSetHealthPacket): void;
        handleSetExperience(arg0: $ClientboundSetExperiencePacket): void;
        handleRespawn(arg0: $ClientboundRespawnPacket_): void;
        handleExplosion(arg0: $ClientboundExplodePacket): void;
        handleHorseScreenOpen(arg0: $ClientboundHorseScreenOpenPacket): void;
        handleOpenScreen(arg0: $ClientboundOpenScreenPacket): void;
        handleContainerSetSlot(arg0: $ClientboundContainerSetSlotPacket): void;
        handleContainerContent(arg0: $ClientboundContainerSetContentPacket): void;
        handleOpenSignEditor(arg0: $ClientboundOpenSignEditorPacket): void;
        handleBlockEntityData(arg0: $ClientboundBlockEntityDataPacket): void;
        handleContainerSetData(arg0: $ClientboundContainerSetDataPacket): void;
        handleSetEquipment(arg0: $ClientboundSetEquipmentPacket): void;
        handleContainerClose(arg0: $ClientboundContainerClosePacket): void;
        handleBlockEvent(arg0: $ClientboundBlockEventPacket): void;
        handleBlockDestruction(arg0: $ClientboundBlockDestructionPacket): void;
        handleMapItemData(arg0: $ClientboundMapItemDataPacket_): void;
        handleLevelEvent(arg0: $ClientboundLevelEventPacket): void;
        handleUpdateAdvancementsPacket(arg0: $ClientboundUpdateAdvancementsPacket): void;
        handleSelectAdvancementsTab(arg0: $ClientboundSelectAdvancementsTabPacket): void;
        handleCommands(arg0: $ClientboundCommandsPacket): void;
        handleStopSoundEvent(arg0: $ClientboundStopSoundPacket): void;
        handleCommandSuggestions(arg0: $ClientboundCommandSuggestionsPacket_): void;
        handleUpdateRecipes(arg0: $ClientboundUpdateRecipesPacket): void;
        handleLookAt(arg0: $ClientboundPlayerLookAtPacket): void;
        handleTagQueryPacket(arg0: $ClientboundTagQueryPacket): void;
        handleAwardStats(arg0: $ClientboundAwardStatsPacket_): void;
        handleAddOrRemoveRecipes(arg0: $ClientboundRecipePacket): void;
        handleUpdateMobEffect(arg0: $ClientboundUpdateMobEffectPacket): void;
        handlePlayerCombatEnd(arg0: $ClientboundPlayerCombatEndPacket): void;
        handlePlayerCombatEnter(arg0: $ClientboundPlayerCombatEnterPacket): void;
        handlePlayerCombatKill(arg0: $ClientboundPlayerCombatKillPacket_): void;
        handleChangeDifficulty(arg0: $ClientboundChangeDifficultyPacket): void;
        handleSetCamera(arg0: $ClientboundSetCameraPacket): void;
        handleInitializeBorder(arg0: $ClientboundInitializeBorderPacket): void;
        handler$fah000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handleSetBorderCenter(arg0: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderLerpSize(arg0: $ClientboundSetBorderLerpSizePacket): void;
        handleSetBorderSize(arg0: $ClientboundSetBorderSizePacket): void;
        handleSetBorderWarningDistance(arg0: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetBorderWarningDelay(arg0: $ClientboundSetBorderWarningDelayPacket): void;
        handleTitlesClear(arg0: $ClientboundClearTitlesPacket): void;
        handleServerData(arg0: $ClientboundServerDataPacket_): void;
        handleCustomChatCompletions(arg0: $ClientboundCustomChatCompletionsPacket_): void;
        setActionBarText(arg0: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(arg0: $ClientboundSetTitleTextPacket_): void;
        setSubtitleText(arg0: $ClientboundSetSubtitleTextPacket_): void;
        setTitlesAnimation(arg0: $ClientboundSetTitlesAnimationPacket): void;
        handleTabListCustomisation(arg0: $ClientboundTabListPacket_): void;
        handleRemoveMobEffect(arg0: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoRemove(arg0: $ClientboundPlayerInfoRemovePacket_): void;
        handlePlayerInfoUpdate(arg0: $ClientboundPlayerInfoUpdatePacket): void;
        handlePlayerAbilities(arg0: $ClientboundPlayerAbilitiesPacket): void;
        handleSoundEvent(arg0: $ClientboundSoundPacket): void;
        handleSoundEntityEvent(arg0: $ClientboundSoundEntityPacket): void;
        handleBossUpdate(arg0: $ClientboundBossEventPacket): void;
        handleItemCooldown(arg0: $ClientboundCooldownPacket_): void;
        handleMoveVehicle(arg0: $ClientboundMoveVehiclePacket): void;
        handleOpenBook(arg0: $ClientboundOpenBookPacket): void;
        handleAddObjective(arg0: $ClientboundSetObjectivePacket): void;
        handleSetScore(arg0: $ClientboundSetScorePacket_): void;
        handleResetScore(arg0: $ClientboundResetScorePacket_): void;
        handleSetDisplayObjective(arg0: $ClientboundSetDisplayObjectivePacket): void;
        handleSetPlayerTeamPacket(arg0: $ClientboundSetPlayerTeamPacket): void;
        handleParticleEvent(arg0: $ClientboundLevelParticlesPacket): void;
        handleUpdateAttributes(arg0: $ClientboundUpdateAttributesPacket): void;
        handlePlaceRecipe(arg0: $ClientboundPlaceGhostRecipePacket): void;
        handleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket): void;
        handler$cpb000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfl001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handleMerchantOffers(arg0: $ClientboundMerchantOffersPacket): void;
        handleSetChunkCacheRadius(arg0: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetSimulationDistance(arg0: $ClientboundSetSimulationDistancePacket_): void;
        handleSetChunkCacheCenter(arg0: $ClientboundSetChunkCacheCenterPacket): void;
        handleBundlePacket(arg0: $ClientboundBundlePacket): void;
        handleProjectilePowerPacket(arg0: $ClientboundProjectilePowerPacket): void;
        handleChunkBatchStart(arg0: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(arg0: $ClientboundChunkBatchFinishedPacket_): void;
        handleDebugSample(arg0: $ClientboundDebugSamplePacket_): void;
        handlePongResponse(arg0: $ClientboundPongResponsePacket_): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        getDebugQueryHandler(): $DebugQueryHandler;
        markMessageAsProcessed(arg0: $PlayerChatMessage_, arg1: boolean): void;
        handler$cpb000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$cpb000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        setKeyPair(arg0: $ProfileKeyPair_): void;
        isFeatureEnabled(arg0: $FeatureFlagSet): boolean;
        getXaero_minimapSession(): $XaeroMinimapSession;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getXaero_worldmapSession(): $WorldMapSession;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        sendChat(arg0: string): void;
        serverLinks(): $ServerLinks;
        handleDisconnect(): void;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        invokeParseCommand(arg0: string): $ParseResults<$SharedSuggestionProvider>;
        catnip$getServerChunkRadius(): number;
        getCommandsKonkrete(): $CommandDispatcher<$SharedSuggestionProvider>;
        setCommandsKonkrete(arg0: $CommandDispatcher<$SharedSuggestionProvider>): void;
        xaero_worldmapSession: $WorldMapSession;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        serverChunkRadius: number;
        signedMessageEncoder: $SignedMessageChain$Encoder;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        xaero_minimapSession: $XaeroMinimapSession;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverCookies: $Map<$ResourceLocation, number[]>;
        chatSession: $LocalChatSession;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
        get localGameProfile(): $GameProfile;
        get level(): $ClientLevel;
        get id(): $UUID;
        get advancements(): $ClientAdvancements;
        get recipeManager(): $RecipeManager;
        get suggestionsProvider(): $ClientSuggestionProvider;
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get debugQueryHandler(): $DebugQueryHandler;
        set keyPair(value: $ProfileKeyPair_);
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData implements $ServerDataExtension {
        copyNameIconFrom(arg0: $ServerData): void;
        preventsChatReports(): boolean;
        setPreventsChatReports(arg0: boolean): void;
        setResourcePackStatus(arg0: $ServerData$ServerPackStatus_): void;
        getIconBytes(): number[];
        type(): $ServerData$Type;
        write(): $CompoundTag;
        static read(arg0: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(arg0: $ServerData$State_): void;
        copyFrom(arg0: $ServerData): void;
        isRealm(): boolean;
        isLan(): boolean;
        static validateIcon(arg0: number[]): number[];
        setIconBytes(arg0: number[]): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(arg0: string, arg1: string, arg2: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        channelRead0(arg0: $ChannelHandlerContext, arg1: $ByteBuf): void;
        constructor(arg0: $ServerAddress, arg1: $LegacyServerPinger$Output_);
    }
    export class $ServerList implements $IMixinServerList {
        unhide(arg0: string): $ServerData;
        remove(arg0: $ServerData): void;
        size(): number;
        get(arg0: string): $ServerData;
        get(arg0: number): $ServerData;
        load(): void;
        replace(arg0: number, arg1: $ServerData): void;
        add(arg0: $ServerData, arg1: boolean): void;
        save(): void;
        swap(arg0: number, arg1: number): void;
        static saveSingleServer(arg0: $ServerData): void;
        getServerListFancyMenu(): $List<$ServerData>;
        constructor(arg0: $Minecraft);
        get serverListFancyMenu(): $List<$ServerData>;
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $AccessorClientChunkCacheStorage, $ClientChunkMapAccess {
        getChunks(): $AtomicReferenceArray<any>;
        inRange(arg0: number, arg1: number): boolean;
        replace(arg0: number, arg1: $LevelChunk): void;
        replace(arg0: number, arg1: $LevelChunk, arg2: $LevelChunk): $LevelChunk;
        getIndex(arg0: number, arg1: number): number;
        getChunk(arg0: number): $LevelChunk;
        railways$getViewCenterX(): number;
        railways$setViewCenterX(arg0: number): void;
        railways$getViewCenterZ(): number;
        railways$setViewCenterZ(arg0: number): void;
        chunkRadius: number;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        chunkCount: number;
        this$0: $ClientChunkCache;
        viewCenterX: number;
        constructor(arg0: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        setGameMode(arg0: $GameType_): void;
        getTabListDisplayName(): $Component;
        setChatSession(arg0: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        getGameMode(): $GameType;
        getSkin(): $PlayerSkin;
        getProfile(): $GameProfile;
        getLatency(): number;
        setLatency(arg0: number): void;
        getTeam(): $PlayerTeam;
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(arg0: $Component_): void;
        clearChatSession(arg0: boolean): void;
        hasVerifiableChat(): boolean;
        constructor(arg0: $GameProfile, arg1: boolean);
        get skin(): $PlayerSkin;
        get profile(): $GameProfile;
        get team(): $PlayerTeam;
        get messageValidator(): $SignedMessageValidator;
    }
    export class $PingDebugMonitor {
        tick(): void;
        onPongReceived(arg0: $ClientboundPongResponsePacket_): void;
        constructor(arg0: $ClientPacketListener, arg1: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(arg0: $UserApiService, arg1: $User, arg2: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        shouldRefreshKeyPair(): boolean;
    }
    export class $SessionSearchTrees {
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>): void;
        register(arg0: $SessionSearchTrees$Key, arg1: $Runnable_): void;
        static getTooltipLines(arg0: $Stream<$ItemStack_>, arg1: $Item$TooltipContext, arg2: $TooltipFlag): $Stream<string>;
        recipes(): $SearchTree<$RecipeCollection>;
        updateRecipes(arg0: $ClientRecipeBook, arg1: $RegistryAccess$Frozen): void;
        rebuildAfterLanguageChange(): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { id?: $UUID_, hash?: string, url?: $URL,  } | [id?: $UUID_, hash?: string, url?: $URL, ];
    export class $ClientAdvancements {
        getTree(): $AdvancementTree;
        get(arg0: $ResourceLocation_): $AdvancementHolder;
        update(arg0: $ClientboundUpdateAdvancementsPacket): void;
        setListener(arg0: $ClientAdvancements$Listener): void;
        setSelectedTab(arg0: $AdvancementHolder_, arg1: boolean): void;
        constructor(arg0: $Minecraft, arg1: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener);
    }
    export class $MultiPlayerGameMode {
        canHurtPlayer(): boolean;
        getDestroyStage(): number;
        handler$zpa000$exposure$onUseItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$zpa000$exposure$onInteractAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_, cir: $CallbackInfoReturnable<any>): void;
        handleInventoryButtonClick(arg0: number, arg1: number): void;
        handleCreativeModeItemDrop(arg0: $ItemStack_): void;
        hasExperience(): boolean;
        isAlwaysFlying(): boolean;
        tick(): void;
        getPlayerMode(): $GameType;
        continueDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        stopDestroyBlock(): void;
        hasMissTime(): boolean;
        attack(arg0: $Player, arg1: $Entity): void;
        startDestroyBlock(arg0: $BlockPos_, arg1: $Direction_): boolean;
        isDestroying(): boolean;
        interactAt(arg0: $Player, arg1: $Entity, arg2: $EntityHitResult, arg3: $InteractionHand_): $InteractionResult;
        interact(arg0: $Player, arg1: $Entity, arg2: $InteractionHand_): $InteractionResult;
        useItemOn(arg0: $LocalPlayer, arg1: $InteractionHand_, arg2: $BlockHitResult): $InteractionResult;
        hasInfiniteItems(): boolean;
        useItem(arg0: $Player, arg1: $InteractionHand_): $InteractionResult;
        isServerControlledInventory(): boolean;
        releaseUsingItem(arg0: $Player): void;
        handleCreativeModeItemAdd(arg0: $ItemStack_, arg1: number): void;
        handlePickItem(arg0: number): void;
        destroyBlock(arg0: $BlockPos_): boolean;
        handleInventoryMouseClick(arg0: number, arg1: number, arg2: number, arg3: $ClickType_, arg4: $Player): void;
        handleSlotStateChanged(arg0: number, arg1: number, arg2: boolean): void;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook, arg3: boolean, arg4: boolean): $LocalPlayer;
        createPlayer(arg0: $ClientLevel, arg1: $StatsCounter, arg2: $ClientRecipeBook): $LocalPlayer;
        adjustPlayer(arg0: $Player): void;
        setLocalMode(arg0: $GameType_, arg1: $GameType_): void;
        setLocalMode(arg0: $GameType_): void;
        handlePlaceRecipe(arg0: number, arg1: $RecipeHolder_<never>, arg2: boolean): void;
        getPreviousPlayerMode(): $GameType;
        destroyBlockPos: $BlockPos;
        destroyDelay: number;
        static $assertionsDisabled: boolean;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(arg0: $Minecraft, arg1: $ClientPacketListener);
        get destroyStage(): number;
        get alwaysFlying(): boolean;
        get playerMode(): $GameType;
        get destroying(): boolean;
        get serverControlledInventory(): boolean;
        get previousPlayerMode(): $GameType;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(arg0: number, arg1: string, arg2: string, arg3: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor, $NetworkHandlerExtensions {
        handler$gmc000$platform$handleCustomQuery(packet: $ClientboundGameProfilePacket_, ci: $CallbackInfo): void;
        setMinigameName(arg0: string): void;
        isAcceptingMessages(): boolean;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        fillCrashReport(arg0: $CrashReport): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        getAddon(): $AbstractNetworkAddon<never>;
        getConnection(): $Connection;
        constructor(arg0: $Connection, arg1: $Minecraft, arg2: $ServerData, arg3: $Screen, arg4: boolean, arg5: $Duration_, arg6: $Consumer_<$Component>, arg7: $TransferState_);
        set minigameName(value: string);
        get acceptingMessages(): boolean;
        get addon(): $AbstractNetworkAddon<never>;
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(arg0: $ClientPacketListener, arg1: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(arg0: $ResourceKey_<$Registry<never>>, arg1: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        appendTags(arg0: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(arg0: $ResourceProvider_, arg1: $RegistryAccess, arg2: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ClientWorldAccessor, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $IWorldMapClientWorld, $ClientLevelKJS, $IClientLevel, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension {
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        getSkyColor(arg0: $Vec3_, arg1: number): $Vec3;
        setDayTime(arg0: number): void;
        tickNonPassenger(arg0: $Entity): void;
        addEntity(arg0: $Entity): void;
        setDefaultSpawnPos(arg0: $BlockPos_, arg1: number): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        getEntityCount(): number;
        tick(arg0: $BooleanSupplier_): void;
        unload(arg0: $LevelChunk): void;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        handler$dba000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        onChunkLoaded(arg0: $ChunkPos): void;
        clearTintCaches(): void;
        removeEntity(arg0: number, arg1: $Entity$RemovalReason_): void;
        doAnimateTick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        handler$fmh000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        overrideMapData(arg0: $MapId_, arg1: $MapItemSavedData): void;
        setSectionDirtyWithNeighbors(arg0: number, arg1: number, arg2: number): void;
        getSkyFlashTime(): number;
        getCloudColor(arg0: number): $Vec3;
        getStarBrightness(arg0: number): number;
        calculateBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        addMapData(arg0: $Map_<$MapId_, $MapItemSavedData>): void;
        setServerSimulationDistance(arg0: number): void;
        getServerSimulationDistance(): number;
        lithium$getEntityManager(): $TransientEntitySectionManager<any>;
        sodium$getBiomeZoomSeed(): number;
        sodium$getTracker(): $ChunkTracker;
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        sable$popPoseSupplier(): void;
        handleBlockChangedAck(arg0: number): void;
        setServerVerifiedBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: number): void;
        syncBlockState(arg0: $BlockPos_, arg1: $BlockState_, arg2: $Vec3_): void;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        queueLightUpdate(arg0: $Runnable_): void;
        pollLightUpdates(): void;
        isLightUpdateQueueEmpty(): boolean;
        entitiesForRendering(): $Iterable<$Entity>;
        tickEntities(): void;
        animateTick(arg0: number, arg1: number, arg2: number): void;
        sable$getPlotContainer(): $SubLevelContainer;
        effects(): $DimensionSpecialEffects;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        getSkyDarken(arg0: number): number;
        setGameTime(arg0: number): void;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
        getLevelRenderer(): $LevelRenderer;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        tickingEntities: $EntityTickList;
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
        constructor(arg0: $ClientPacketListener, arg1: $ClientLevel$ClientLevelData, arg2: $ResourceKey_<$Level>, arg3: $Holder_<$DimensionType>, arg4: number, arg5: number, arg6: $Supplier_<$ProfilerFiller>, arg7: $LevelRenderer, arg8: boolean, arg9: number);
        get entityCount(): number;
        get skyFlashTime(): number;
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        get lightUpdateQueueEmpty(): boolean;
        set gameTime(value: number);
        get levelRenderer(): $LevelRenderer;
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        getClearColorScale(): number;
        isDifficultyLocked(): boolean;
        setRaining(arg0: boolean): void;
        setDayTime(arg0: number): void;
        setSpawn(arg0: $BlockPos_, arg1: number): void;
        getHorizonHeight(arg0: $LevelHeightAccessor): number;
        isHardcore(): boolean;
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getGameRules(): $GameRules;
        getDayTime(): number;
        fillCrashReportCategory(arg0: $CrashReportCategory, arg1: $LevelHeightAccessor): void;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        isRaining(): boolean;
        isThundering(): boolean;
        setGameTime(arg0: number): void;
        setDifficulty(arg0: $Difficulty_): void;
        setDifficultyLocked(arg0: boolean): void;
        constructor(arg0: $Difficulty_, arg1: boolean, arg2: boolean);
        get clearColorScale(): number;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
    }
    export class $ServerStatusPinger {
        pingServer(arg0: $ServerData, arg1: $Runnable_, arg2: $Runnable_): void;
        onPingFailed(arg0: $Component_, arg1: $ServerData): void;
        static formatPlayerCount(arg0: number, arg1: number): $Component;
        pingLegacyServer(arg0: $InetSocketAddress, arg1: $ServerAddress, arg2: $ServerData): void;
        tick(): void;
        removeAll(): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $ClientChunkManagerAccess {
        handler$ebi000$railways$securitycraft$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        handler$ebi000$railways$securitycraft$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$ebi000$railways$securitycraft$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
        getChunks(): $ClientChunkCache$Storage;
        replaceWithPacketData(arg0: number, arg1: number, arg2: $FriendlyByteBuf, arg3: $CompoundTag_, arg4: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(arg0: number, arg1: number, arg2: $FriendlyByteBuf): void;
        drop(arg0: $ChunkPos): void;
        getChunk(arg0: number, arg1: number, arg2: $ChunkStatus_, arg3: boolean): $LevelChunk;
        updateViewRadius(arg0: number): void;
        updateViewCenter(arg0: number, arg1: number): void;
        lightEngine: $LevelLightEngine;
        level: $ClientLevel;
        static LOGGER: $Logger;
        storage: $ClientChunkCache$Storage;
        constructor(arg0: $ClientLevel, arg1: number);
        get chunks(): $ClientChunkCache$Storage;
    }
    export class $KnownPacksManager {
        modifyReturnValue$fbi000$fabric_resource_loader_v0$getCommonKnownPacksReturn(arg0: $List_<any>): $List<any>;
        redirect$fbi000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        trySelectingPacks(arg0: $List_<$KnownPack_>): $List<$KnownPack>;
        createResourceManager(): $CloseableResourceManager;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number,  } | [packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number, ];
    export class $CommonListenerCookie extends $Record {
        connectionType(): $ConnectionType;
        serverBrand(): string;
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        serverData(): $ServerData;
        localGameProfile(): $GameProfile;
        receivedRegistries(): $RegistryAccess$Frozen;
        chatState(): $ChatComponent$State;
        postDisconnectScreen(): $Screen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        customReportDetails(): $Map<string, string>;
        serverLinks(): $ServerLinks;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string, arg5: $ServerData, arg6: $Screen, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string, serverData: $ServerData, postDisconnectScreen: $Screen, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>,  } | [serverBrand?: string, connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener {
        getConnection(): $Connection;
        serverBrand(): string;
        send(arg0: $Packet<never>): void;
        handleCustomPayload(arg0: $CustomPacketPayload_): void;
        handleCustomPayload(arg0: $ClientboundCustomPayloadPacket_): void;
        sendDeferredPackets(): void;
        handleKeepAlive(arg0: $ClientboundKeepAlivePacket): void;
        handlePing(arg0: $ClientboundPingPacket): void;
        handleResourcePackPush(arg0: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(arg0: $ClientboundResourcePackPopPacket_): void;
        handleStoreCookie(arg0: $ClientboundStoreCookiePacket_): void;
        handleTransfer(arg0: $ClientboundTransferPacket_): void;
        handleCustomReportDetails(arg0: $ClientboundCustomReportDetailsPacket_): void;
        handleServerLinks(arg0: $ClientboundServerLinksPacket_): void;
        wrapOperation$ekf001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$ekf001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        static preparePackPrompt(arg0: $Component_, arg1: $Component_): $Component;
        createDisconnectScreen(arg0: $DisconnectionDetails_): $Screen;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        handleDisconnect(arg0: $ClientboundDisconnectPacket_): void;
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        flow(): $PacketFlow;
        disconnect(arg0: $Component_): void;
        send(arg0: $CustomPacketPayload_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(arg0: $CrashReport): void;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $ResourceLocation_): boolean;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        connection: $Connection;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Minecraft, arg1: $Connection, arg2: $CommonListenerCookie_);
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $VeilClientSuggestionProvider {
        sendFeedback(arg0: $Component_): void;
        veil$getPostPipelineNames(): $Stream<any>;
        sendError(arg0: $Component_): void;
        getWorld(): $ClientLevel;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        getPlayer(): $LocalPlayer;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        hasPermission(arg0: number): boolean;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        getOnlinePlayerNames(): $Collection<string>;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getClient(): $Minecraft;
        completeCustomSuggestions(arg0: number, arg1: $Suggestions): void;
        modifyCustomCompletions(arg0: $ClientboundCustomChatCompletionsPacket$Action_, arg1: $List_<string>): void;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        getMeta(arg0: string): $Object;
        getPosition(): $Vec3;
        getEntity(): $Entity;
        getRotation(): $Vec2;
        constructor(arg0: $ClientPacketListener, arg1: $Minecraft);
        get world(): $ClientLevel;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get player(): $LocalPlayer;
        get allTeams(): $Collection<string>;
        get onlinePlayerNames(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get client(): $Minecraft;
        get position(): $Vec3;
        get entity(): $Entity;
        get rotation(): $Vec2;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        onBatchFinished(arg0: number): void;
        getDesiredChunksPerTick(): number;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
