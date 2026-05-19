import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $ServerInfo, $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerStatusPacketListener, $ServerStatus_, $ServerboundStatusRequestPacket } from "@package/net/minecraft/network/protocol/status";
import { $ExecutorService, $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ServerLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/server";
import { $ServerCommonNetworkHandlerAccessor, $ServerLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $RelativeMovement_ } from "@package/net/minecraft/world/entity";
import { $NetworkHandlerExtensions, $PacketCallbackListener } from "@package/net/fabricmc/fabric/impl/networking";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $ServerboundKeepAlivePacket, $ServerboundCustomPayloadPacket_, $ServerboundPongPacket, $ServerboundResourcePackPacket_, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $ServerboundCookieResponsePacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $PacketSendListener, $Connection, $DisconnectionDetails_, $TickablePacketListener, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $InetAddress, $SocketAddress, $URL } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $RuntimeException, $Exception, $Throwable, $Iterable_, $Record, $AutoCloseable } from "@package/java/lang";
import { $FabricServerConfigurationNetworkHandler } from "@package/net/fabricmc/fabric/api/networking/v1";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $ChatType$Bound_, $PlayerChatMessage_, $FilterMask, $Component } from "@package/net/minecraft/network/chat";
import { $ServerboundLoginAcknowledgedPacket, $ServerLoginPacketListener, $ServerboundKeyPacket, $ServerboundHelloPacket_, $ServerboundCustomQueryAnswerPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $ServerHandshakePacketListener, $ClientIntentionPacket_ } from "@package/net/minecraft/network/protocol/handshake";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerboundSetCommandMinecartPacket, $ServerboundJigsawGeneratePacket, $ServerboundDebugSampleSubscriptionPacket_, $ServerboundChangeDifficultyPacket, $ServerboundPlaceRecipePacket, $ServerboundUseItemPacket, $ServerboundBlockEntityTagQueryPacket, $ServerboundPickItemPacket, $ServerboundChatPacket_, $ServerboundPlayerActionPacket, $ServerGamePacketListener, $ServerboundPaddleBoatPacket, $ServerboundMoveVehiclePacket, $ServerboundLockDifficultyPacket, $ServerboundSetBeaconPacket_, $ServerboundSetStructureBlockPacket, $ServerboundPlayerInputPacket, $ServerboundEditBookPacket_, $ServerboundConfigurationAcknowledgedPacket, $ServerboundClientCommandPacket, $ServerboundSelectTradePacket, $ServerboundPlayerCommandPacket, $ServerboundSeenAdvancementsPacket, $ServerboundSwingPacket, $ServerboundMovePlayerPacket, $ServerboundSetJigsawBlockPacket, $ServerboundContainerClickPacket, $ServerboundPlayerAbilitiesPacket, $ServerboundCommandSuggestionPacket, $ServerboundRecipeBookChangeSettingsPacket, $ServerboundEntityTagQueryPacket, $ServerboundInteractPacket, $ServerboundChunkBatchReceivedPacket_, $ServerboundSetCarriedItemPacket, $ServerboundChatSessionUpdatePacket_, $ServerboundSetCommandBlockPacket, $ServerboundSignUpdatePacket, $ServerboundAcceptTeleportationPacket, $ServerboundChatAckPacket_, $ServerboundContainerSlotStateChangedPacket_, $ServerboundUseItemOnPacket, $ServerboundTeleportToEntityPacket, $ServerboundContainerClosePacket, $ServerboundChatCommandSignedPacket_, $ServerboundChatCommandPacket_, $ServerboundRenameItemPacket, $ServerboundContainerButtonClickPacket_, $ServerboundRecipeBookSeenRecipePacket, $ServerboundSetCreativeModeSlotPacket_ } from "@package/net/minecraft/network/protocol/game";
import { $ServerConfigurationPacketListener, $ServerboundFinishConfigurationPacket, $ServerboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ServerboundPingRequestPacket } from "@package/net/minecraft/network/protocol/ping";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $Channel, $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $SableUDPServer } from "@package/dev/ryanhcode/sable/network/udp";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ServerGamePacketListenerImplAccessor } from "@package/dev/lopyluna/dndesires/mixins";
import { $ServerConnectionListenerExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/net/minecraft/server/network/config";

declare module "@package/net/minecraft/server/network" {
    export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener, $ServerPlayerConnection, $TickablePacketListener, $NeoListenableNetworkHandler, $ServerGamePacketListenerImplAccessor {
        handlePlayerInput(arg0: $ServerboundPlayerInputPacket): void;
        handleAcceptTeleportPacket(arg0: $ServerboundAcceptTeleportationPacket): void;
        handleRecipeBookSeenRecipePacket(arg0: $ServerboundRecipeBookSeenRecipePacket): void;
        handleRecipeBookChangeSettingsPacket(arg0: $ServerboundRecipeBookChangeSettingsPacket): void;
        handleSeenAdvancements(arg0: $ServerboundSeenAdvancementsPacket): void;
        handleCustomCommandSuggestions(arg0: $ServerboundCommandSuggestionPacket): void;
        handleSetCommandBlock(arg0: $ServerboundSetCommandBlockPacket): void;
        handleSetCommandMinecart(arg0: $ServerboundSetCommandMinecartPacket): void;
        handleRenameItem(arg0: $ServerboundRenameItemPacket): void;
        handleSetBeaconPacket(arg0: $ServerboundSetBeaconPacket_): void;
        handleSetStructureBlock(arg0: $ServerboundSetStructureBlockPacket): void;
        handleSetJigsawBlock(arg0: $ServerboundSetJigsawBlockPacket): void;
        handleJigsawGenerate(arg0: $ServerboundJigsawGeneratePacket): void;
        handleSelectTrade(arg0: $ServerboundSelectTradePacket): void;
        handleEditBook(arg0: $ServerboundEditBookPacket_): void;
        handleEntityTagQuery(arg0: $ServerboundEntityTagQueryPacket): void;
        handleContainerSlotStateChanged(arg0: $ServerboundContainerSlotStateChangedPacket_): void;
        handleBlockEntityTagQuery(arg0: $ServerboundBlockEntityTagQueryPacket): void;
        handler$fgb000$sable$handleMovePlayer(arg0: $ServerboundMovePlayerPacket, arg1: $CallbackInfo): void;
        handlePlayerAction(arg0: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(arg0: $ServerboundUseItemOnPacket): void;
        handleUseItem(arg0: $ServerboundUseItemPacket): void;
        handleTeleportToEntityPacket(arg0: $ServerboundTeleportToEntityPacket): void;
        handlePaddleBoat(arg0: $ServerboundPaddleBoatPacket): void;
        handleChat(arg0: $ServerboundChatPacket_): void;
        handleChatCommand(arg0: $ServerboundChatCommandPacket_): void;
        handleSignedChatCommand(arg0: $ServerboundChatCommandSignedPacket_): void;
        ackBlockChangesUpTo(arg0: number): void;
        handleChatAck(arg0: $ServerboundChatAckPacket_): void;
        handlePlayerCommand(arg0: $ServerboundPlayerCommandPacket): void;
        addPendingMessage(arg0: $PlayerChatMessage_): void;
        sendPlayerChatMessage(arg0: $PlayerChatMessage_, arg1: $ChatType$Bound_): void;
        sendDisguisedChatMessage(arg0: $Component_, arg1: $ChatType$Bound_): void;
        switchToConfig(): void;
        handlePingRequest(arg0: $ServerboundPingRequestPacket): void;
        handleInteract(arg0: $ServerboundInteractPacket): void;
        handleClientCommand(arg0: $ServerboundClientCommandPacket): void;
        handleContainerClick(arg0: $ServerboundContainerClickPacket): void;
        handleContainerButtonClick(arg0: $ServerboundContainerButtonClickPacket_): void;
        handleSetCreativeModeSlot(arg0: $ServerboundSetCreativeModeSlotPacket_): void;
        handleSignUpdate(arg0: $ServerboundSignUpdatePacket): void;
        handleLockDifficulty(arg0: $ServerboundLockDifficultyPacket): void;
        handleChatSessionUpdate(arg0: $ServerboundChatSessionUpdatePacket_): void;
        handleConfigurationAcknowledged(arg0: $ServerboundConfigurationAcknowledgedPacket): void;
        handleChunkBatchReceived(arg0: $ServerboundChunkBatchReceivedPacket_): void;
        handleDebugSampleSubscription(arg0: $ServerboundDebugSampleSubscriptionPacket_): void;
        getPlayer(): $ServerPlayer;
        resetPosition(): void;
        teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Set_<$RelativeMovement_>): void;
        getRemoteAddress(): $SocketAddress;
        tick(): void;
        handlePickItem(arg0: $ServerboundPickItemPacket): void;
        handleSetCarriedItem(arg0: $ServerboundSetCarriedItemPacket): void;
        handleMovePlayer(arg0: $ServerboundMovePlayerPacket): void;
        handleAnimate(arg0: $ServerboundSwingPacket): void;
        handleContainerClose(arg0: $ServerboundContainerClosePacket): void;
        handleChangeDifficulty(arg0: $ServerboundChangeDifficultyPacket): void;
        handlePlayerAbilities(arg0: $ServerboundPlayerAbilitiesPacket): void;
        handleMoveVehicle(arg0: $ServerboundMoveVehiclePacket): void;
        handlePlaceRecipe(arg0: $ServerboundPlaceRecipePacket): void;
        handleDisconnect(): void;
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        sendBundled(arg0: $Iterable_<$CustomPacketPayload>): void;
        aboveGroundTickCount(arg0: number): void;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        static LOGGER: $Logger;
        connection: $Connection;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        connectionType: $ConnectionType;
        player: $ServerPlayer;
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: $ServerPlayer, arg3: $CommonListenerCookie_);
        get remoteAddress(): $SocketAddress;
    }
    export class $ServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        handleIntention(arg0: $ClientIntentionPacket_): void;
        isAcceptingMessages(): boolean;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(arg0: $CrashReport): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        constructor(arg0: $MinecraftServer, arg1: $Connection);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask {
    }
    export interface $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
    }
    export class $TextFilterClient$JoinOrLeaveEncoder {
    }
    export interface $TextFilterClient$JoinOrLeaveEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$JoinOrLeaveEncoder}.
     */
    export type $TextFilterClient$JoinOrLeaveEncoder_ = (() => void);
    export class $ServerConnectionListener$LatencySimulator$DelayedMessage {
    }
    export class $ServerLoginPacketListenerImpl$State extends $Enum<$ServerLoginPacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginPacketListenerImpl$State}.
     */
    export type $ServerLoginPacketListenerImpl$State_ = "hello" | "key" | "authenticating" | "negotiating" | "verifying" | "waiting_for_dupe_disconnect" | "protocol_switching" | "accepted";
    export class $ServerConnectionListener implements $ServerConnectionListenerExtension {
        sable$setupUDPServer(arg0: $Channel): void;
        sable$getServer(): $SableUDPServer;
        startTcpServerListener(arg0: $InetAddress, arg1: number): void;
        tick(): void;
        stop(): void;
        startMemoryChannel(): $SocketAddress;
        getServer(): $MinecraftServer;
        getConnections(): $List<$Connection>;
        running: boolean;
        server: $MinecraftServer;
        static SERVER_EVENT_GROUP: $Supplier<$NioEventLoopGroup>;
        static SERVER_EPOLL_EVENT_GROUP: $Supplier<$EpollEventLoopGroup>;
        connections: $List<$Connection>;
        constructor(arg0: $MinecraftServer);
    }
    export class $LegacyQueryHandler extends $ChannelInboundHandlerAdapter {
        constructor(arg0: $ServerInfo);
    }
    export class $ServerConnectionListener$LatencySimulator extends $ChannelInboundHandlerAdapter {
    }
    export class $ServerConfigurationPacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $FabricServerConfigurationNetworkHandler {
        modify$fao000$fabric_resource_loader_v0$filterKnownPacks(arg0: $List_<any>): $List<any>;
        returnToWorld(): void;
        completeTask(arg0: $ConfigurationTask$Type_): void;
        startConfiguration(): void;
        handleConfigurationFinished(arg0: $ServerboundFinishConfigurationPacket): void;
        handleSelectKnownPacks(arg0: $ServerboundSelectKnownPacks_): void;
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
        tick(): void;
        addTask(arg0: $ConfigurationTask): void;
        handleDisconnect(): void;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: $CommonListenerCookie_);
    }
    export class $CommonListenerCookie extends $Record {
        static createInitial(arg0: $GameProfile, arg1: boolean): $CommonListenerCookie;
        clientInformation(): $ClientInformation;
        connectionType(): $ConnectionType;
        transferred(): boolean;
        latency(): number;
        gameProfile(): $GameProfile;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: number, arg2: $ClientInformation_, arg3: boolean);
        constructor(gameProfile: $GameProfile, latency: number, clientInformation: $ClientInformation_, transferred: boolean, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { transferred?: boolean, gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number,  } | [transferred?: boolean, gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number, ];
    export class $ServerGamePacketListenerImpl$EntityInteraction {
    }
    export interface $ServerGamePacketListenerImpl$EntityInteraction {
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImpl$EntityInteraction}.
     */
    export type $ServerGamePacketListenerImpl$EntityInteraction_ = (() => void);
    export class $TextFilterClient$IgnoreStrategy {
        static ignoreOverThreshold(arg0: number): $TextFilterClient$IgnoreStrategy;
        static select(arg0: number): $TextFilterClient$IgnoreStrategy;
        static NEVER_IGNORE: $TextFilterClient$IgnoreStrategy;
        static IGNORE_FULLY_FILTERED: $TextFilterClient$IgnoreStrategy;
    }
    export interface $TextFilterClient$IgnoreStrategy {
        shouldIgnore(arg0: string, arg1: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$IgnoreStrategy}.
     */
    export type $TextFilterClient$IgnoreStrategy_ = ((arg0: string, arg1: number) => boolean);
    export class $Filterable<T> extends $Record {
        static passThrough<T>(arg0: T): $Filterable<T>;
        static streamCodec<B extends $ByteBuf, T>(arg0: $StreamCodec<B, T>): $StreamCodec<B, $Filterable<T>>;
        get(arg0: boolean): T;
        map<U>(arg0: $Function_<T, U>): $Filterable<U>;
        static from(arg0: $FilteredText_): $Filterable<string>;
        resolve<U>(arg0: $Function_<T, (U) | undefined>): ($Filterable<U>) | undefined;
        raw(): T;
        filtered(): (T) | undefined;
        static codec<T>(arg0: $Codec<T>): $Codec<$Filterable<T>>;
        constructor(arg0: T, arg1: (T) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Filterable}.
     */
    export type $Filterable_<T> = { raw?: any, filtered?: (T) | undefined,  } | [raw?: any, filtered?: (T) | undefined, ];
    export class $TextFilter {
        static DUMMY: $TextFilter;
    }
    export interface $TextFilter {
        leave(): void;
        processMessageBundle(arg0: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        processStreamMessage(arg0: string): $CompletableFuture<$FilteredText>;
        join(): void;
    }
    export class $TextFilterClient$RequestFailedException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $TextFilterClient$PlayerContext implements $TextFilter {
    }
    export class $LegacyProtocolUtils {
        static writeLegacyString(arg0: $ByteBuf, arg1: string): void;
        static readLegacyString(arg0: $ByteBuf): string;
        static GET_INFO_PACKET_VERSION_1: number;
        static GET_INFO_PACKET_ID: number;
        static CUSTOM_PAYLOAD_PACKET_ID: number;
        static FAKE_PROTOCOL_VERSION: number;
        static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
        static DISCONNECT_PACKET_ID: number;
        constructor();
    }
    export class $ServerStatusPacketListenerImpl implements $ServerStatusPacketListener {
        handleStatusRequest(arg0: $ServerboundStatusRequestPacket): void;
        handlePingRequest(arg0: $ServerboundPingRequestPacket): void;
        isAcceptingMessages(): boolean;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(arg0: $CrashReport): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        constructor(arg0: $ServerStatus_, arg1: $Connection);
        constructor(arg0: $ServerStatus_, arg1: $Connection, arg2: string);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask$Type extends $Record {
        id(): string;
        constructor(arg0: $ResourceLocation_);
        constructor(id: string);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationTask$Type}.
     */
    export type $ConfigurationTask$Type_ = { id?: string,  } | [id?: string, ];
    export class $PlayerChunkSender {
        isPending(arg0: number): boolean;
        dropChunk(arg0: $ServerPlayer, arg1: $ChunkPos): void;
        markChunkPendingToSend(arg0: $LevelChunk): void;
        sendNextChunks(arg0: $ServerPlayer): void;
        static sendChunk(arg0: $ServerGamePacketListenerImpl, arg1: $ServerLevel, arg2: $LevelChunk): void;
        onChunkBatchReceivedByClient(arg0: number): void;
        static MIN_CHUNKS_PER_TICK: number;
        static MAX_CHUNKS_PER_TICK: number;
        constructor(arg0: boolean);
    }
    export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener, $ServerCommonNetworkHandlerAccessor {
        handlePong(arg0: $ServerboundPongPacket): void;
        handleResourcePackResponse(arg0: $ServerboundResourcePackPacket_): void;
        handleCookieResponse(arg0: $ServerboundCookieResponsePacket_): void;
        isSingleplayerOwner(): boolean;
        resumeFlushing(): void;
        suspendFlushing(): void;
        keepConnectionAlive(): void;
        playerProfile(): $GameProfile;
        wrapOperation$ekb000$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$ekb000$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        /**
         * @deprecated
         */
        createCookie(arg0: $ClientInformation_): $CommonListenerCookie;
        createCookie(arg0: $ClientInformation_, arg1: $ConnectionType_): $CommonListenerCookie;
        getConnectionType(): $ConnectionType;
        getOwner(): $GameProfile;
        disconnect(arg0: $Component_): void;
        disconnect(arg0: $DisconnectionDetails_): void;
        send(arg0: $Packet<never>): void;
        send(arg0: $Packet<never>, arg1: $PacketSendListener): void;
        latency(): number;
        handleCustomPayload(arg0: $ServerboundCustomPayloadPacket_): void;
        handleKeepAlive(arg0: $ServerboundKeepAlivePacket): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        send(arg0: $CustomPacketPayload_): void;
        send(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
        flow(): $PacketFlow;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        hasChannel(arg0: $ResourceLocation_): boolean;
        fillCrashReport(arg0: $CrashReport): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: $CommonListenerCookie_);
        get singleplayerOwner(): boolean;
        get owner(): $GameProfile;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $FilteredText extends $Record {
        static fullyFiltered(arg0: string): $FilteredText;
        filteredOrEmpty(): string;
        static passThrough(arg0: string): $FilteredText;
        mask(): $FilterMask;
        raw(): string;
        isFiltered(): boolean;
        filtered(): string;
        static EMPTY: $FilteredText;
        constructor(arg0: string, arg1: $FilterMask);
    }
    /**
     * Values that may be interpreted as {@link $FilteredText}.
     */
    export type $FilteredText_ = { raw?: string, mask?: $FilterMask,  } | [raw?: string, mask?: $FilterMask, ];
    export class $TextFilterClient implements $AutoCloseable {
        requestMessageProcessing(arg0: $GameProfile, arg1: string, arg2: $TextFilterClient$IgnoreStrategy_, arg3: $Executor_): $CompletableFuture<$FilteredText>;
        processJoinOrLeave(arg0: $GameProfile, arg1: $URL, arg2: $TextFilterClient$JoinOrLeaveEncoder_, arg3: $Executor_): void;
        static createFromConfig(arg0: string): $TextFilterClient;
        close(): void;
        createContext(arg0: $GameProfile): $TextFilter;
        joinEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEndpoint: $URL;
        workerPool: $ExecutorService;
        chatIgnoreStrategy: $TextFilterClient$IgnoreStrategy;
        joinEndpoint: $URL;
    }
    export class $ServerLoginPacketListenerImpl implements $ServerLoginPacketListener, $TickablePacketListener, $NetworkHandlerExtensions, $PacketCallbackListener, $ServerLoginNetworkHandlerAccessor {
        handleCustomQueryPacket(arg0: $ServerboundCustomQueryAnswerPacket_): void;
        handleKey(arg0: $ServerboundKeyPacket): void;
        handleLoginAcknowledgement(arg0: $ServerboundLoginAcknowledgedPacket): void;
        startClientVerification(arg0: $GameProfile): void;
        handleCookieResponse(arg0: $ServerboundCookieResponsePacket_): void;
        getAddon(): $ServerLoginNetworkAddon;
        sent(arg0: $Packet<any>): void;
        isAcceptingMessages(): boolean;
        tick(): void;
        disconnect(arg0: $Component_): void;
        getUserName(): string;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        handleHello(arg0: $ServerboundHelloPacket_): void;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        fillCrashReport(arg0: $CrashReport): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        server: $MinecraftServer;
        requestedUsername: string;
        static LOGGER: $Logger;
        connection: $Connection;
        constructor(arg0: $MinecraftServer, arg1: $Connection, arg2: boolean);
        get addon(): $ServerLoginNetworkAddon;
        get acceptingMessages(): boolean;
        get userName(): string;
    }
    export class $TextFilterClient$MessageEncoder {
    }
    export interface $TextFilterClient$MessageEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$MessageEncoder}.
     */
    export type $TextFilterClient$MessageEncoder_ = (() => void);
    export class $ServerPlayerConnection {
    }
    export interface $ServerPlayerConnection {
        getPlayer(): $ServerPlayer;
        send(arg0: $Packet<never>): void;
        get player(): $ServerPlayer;
    }
    export class $MemoryServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        handleIntention(arg0: $ClientIntentionPacket_): void;
        isAcceptingMessages(): boolean;
        onDisconnect(arg0: $DisconnectionDetails_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(arg0: $Packet<any>, arg1: $Exception): void;
        flow(): $PacketFlow;
        fillCrashReport(arg0: $CrashReport): void;
        createDisconnectionInfo(arg0: $Component_, arg1: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(arg0: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(arg0: $CrashReport, arg1: $CrashReportCategory): void;
        constructor(arg0: $MinecraftServer, arg1: $Connection);
        get acceptingMessages(): boolean;
    }
}
