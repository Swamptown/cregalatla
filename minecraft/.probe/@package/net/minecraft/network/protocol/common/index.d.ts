import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $ServerLinks$UntrustedEntry, $ServerLinks$UntrustedEntry_ } from "@package/net/minecraft/server";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $CustomPacketPayload_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $Map_, $UUID_, $List_, $Map } from "@package/java/util";
import { $ClientCookiePacketListener, $ServerCookiePacketListener } from "@package/net/minecraft/network/protocol/cookie";
import { $ClientInformation, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $Registry } from "@package/net/minecraft/core";
import { $IServerCommonPacketListenerExtension, $IClientCommonPacketListenerExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $ClientboundPacketListener, $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as custom from "@package/net/minecraft/network/protocol/common/custom";

declare module "@package/net/minecraft/network/protocol/common" {
    export class $ClientboundPingPacket implements $Packet<$ClientCommonPacketListener> {
        type(): $PacketType<$ClientboundPingPacket>;
        getId(): number;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundPingPacket>;
        constructor(arg0: number);
        get id(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientCommonPacketListener {
    }
    export interface $ClientCommonPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener, $IClientCommonPacketListenerExtension {
        handleDisconnect(arg0: $ClientboundDisconnectPacket_): void;
        handleUpdateTags(arg0: $ClientboundUpdateTagsPacket): void;
        handleCustomPayload(arg0: $ClientboundCustomPayloadPacket_): void;
        handleKeepAlive(arg0: $ClientboundKeepAlivePacket): void;
        handlePing(arg0: $ClientboundPingPacket): void;
        handleResourcePackPush(arg0: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(arg0: $ClientboundResourcePackPopPacket_): void;
        handleStoreCookie(arg0: $ClientboundStoreCookiePacket_): void;
        handleTransfer(arg0: $ClientboundTransferPacket_): void;
        handleCustomReportDetails(arg0: $ClientboundCustomReportDetailsPacket_): void;
        handleServerLinks(arg0: $ClientboundServerLinksPacket_): void;
    }
    export class $ClientboundCustomPayloadPacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        payload(): $CustomPacketPayload;
        type(): $PacketType<$ClientboundCustomPayloadPacket>;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static GAMEPLAY_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientboundCustomPayloadPacket>;
        static CONFIG_STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomPayloadPacket>;
        constructor(payload: $CustomPacketPayload_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomPayloadPacket}.
     */
    export type $ClientboundCustomPayloadPacket_ = { payload?: $CustomPacketPayload_,  } | [payload?: $CustomPacketPayload_, ];
    export class $ClientboundKeepAlivePacket implements $Packet<$ClientCommonPacketListener> {
        type(): $PacketType<$ClientboundKeepAlivePacket>;
        getId(): number;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundKeepAlivePacket>;
        constructor(arg0: number);
        get id(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundUpdateTagsPacket implements $Packet<$ClientCommonPacketListener> {
        type(): $PacketType<$ClientboundUpdateTagsPacket>;
        handle(arg0: $ClientCommonPacketListener): void;
        getTags(): $Map<$ResourceKey<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundUpdateTagsPacket>;
        constructor(arg0: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>);
        get tags(): $Map<$ResourceKey<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundPongPacket implements $Packet<$ServerCommonPacketListener> {
        type(): $PacketType<$ServerboundPongPacket>;
        getId(): number;
        handle(arg0: $ServerCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundPongPacket>;
        constructor(arg0: number);
        get id(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $CommonPacketTypes {
        static CLIENTBOUND_CUSTOM_PAYLOAD: $PacketType<$ClientboundCustomPayloadPacket>;
        static CLIENTBOUND_SERVER_LINKS: $PacketType<$ClientboundServerLinksPacket>;
        static CLIENTBOUND_TRANSFER: $PacketType<$ClientboundTransferPacket>;
        static CLIENTBOUND_DISCONNECT: $PacketType<$ClientboundDisconnectPacket>;
        static CLIENTBOUND_RESOURCE_PACK_PUSH: $PacketType<$ClientboundResourcePackPushPacket>;
        static CLIENTBOUND_UPDATE_TAGS: $PacketType<$ClientboundUpdateTagsPacket>;
        static CLIENTBOUND_PING: $PacketType<$ClientboundPingPacket>;
        static CLIENTBOUND_STORE_COOKIE: $PacketType<$ClientboundStoreCookiePacket>;
        static SERVERBOUND_CLIENT_INFORMATION: $PacketType<$ServerboundClientInformationPacket>;
        static CLIENTBOUND_RESOURCE_PACK_POP: $PacketType<$ClientboundResourcePackPopPacket>;
        static SERVERBOUND_KEEP_ALIVE: $PacketType<$ServerboundKeepAlivePacket>;
        static CLIENTBOUND_KEEP_ALIVE: $PacketType<$ClientboundKeepAlivePacket>;
        static SERVERBOUND_CUSTOM_PAYLOAD: $PacketType<$ServerboundCustomPayloadPacket>;
        static CLIENTBOUND_CUSTOM_REPORT_DETAILS: $PacketType<$ClientboundCustomReportDetailsPacket>;
        static SERVERBOUND_PONG: $PacketType<$ServerboundPongPacket>;
        static SERVERBOUND_RESOURCE_PACK: $PacketType<$ServerboundResourcePackPacket>;
        constructor();
    }
    export class $ServerboundResourcePackPacket extends $Record implements $Packet<$ServerCommonPacketListener> {
        type(): $PacketType<$ServerboundResourcePackPacket>;
        id(): $UUID;
        action(): $ServerboundResourcePackPacket$Action;
        handle(arg0: $ServerCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundResourcePackPacket>;
        constructor(arg0: $UUID_, arg1: $ServerboundResourcePackPacket$Action_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundResourcePackPacket}.
     */
    export type $ServerboundResourcePackPacket_ = { action?: $ServerboundResourcePackPacket$Action_, id?: $UUID_,  } | [action?: $ServerboundResourcePackPacket$Action_, id?: $UUID_, ];
    export class $ServerboundKeepAlivePacket implements $Packet<$ServerCommonPacketListener> {
        type(): $PacketType<$ServerboundKeepAlivePacket>;
        getId(): number;
        handle(arg0: $ServerCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundKeepAlivePacket>;
        constructor(arg0: number);
        get id(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundStoreCookiePacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        payload(): number[];
        type(): $PacketType<$ClientboundStoreCookiePacket>;
        key(): $ResourceLocation;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStoreCookiePacket>;
        static PAYLOAD_STREAM_CODEC: $StreamCodec<$ByteBuf, number[]>;
        constructor(arg0: $ResourceLocation_, arg1: number[]);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundStoreCookiePacket}.
     */
    export type $ClientboundStoreCookiePacket_ = { payload?: number[], key?: $ResourceLocation_,  } | [payload?: number[], key?: $ResourceLocation_, ];
    export class $ClientboundDisconnectPacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        type(): $PacketType<$ClientboundDisconnectPacket>;
        reason(): $Component;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundDisconnectPacket>;
        constructor(arg0: $Component_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundDisconnectPacket}.
     */
    export type $ClientboundDisconnectPacket_ = { reason?: $Component_,  } | [reason?: $Component_, ];
    export class $ServerboundCustomPayloadPacket extends $Record implements $Packet<$ServerCommonPacketListener> {
        payload(): $CustomPacketPayload;
        type(): $PacketType<$ServerboundCustomPayloadPacket>;
        handle(arg0: $ServerCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static CONFIG_STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCustomPayloadPacket>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCustomPayloadPacket>;
        constructor(payload: $CustomPacketPayload_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundCustomPayloadPacket}.
     */
    export type $ServerboundCustomPayloadPacket_ = { payload?: $CustomPacketPayload_,  } | [payload?: $CustomPacketPayload_, ];
    export class $ClientboundResourcePackPushPacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        prompt(): ($Component) | undefined;
        type(): $PacketType<$ClientboundResourcePackPushPacket>;
        hash(): string;
        url(): string;
        id(): $UUID;
        handle(arg0: $ClientCommonPacketListener): void;
        required(): boolean;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundResourcePackPushPacket>;
        static MAX_HASH_LENGTH: number;
        constructor(arg0: $UUID_, arg1: string, arg2: string, arg3: boolean, arg4: ($Component_) | undefined);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundResourcePackPushPacket}.
     */
    export type $ClientboundResourcePackPushPacket_ = { id?: $UUID_, prompt?: ($Component_) | undefined, url?: string, hash?: string, required?: boolean,  } | [id?: $UUID_, prompt?: ($Component_) | undefined, url?: string, hash?: string, required?: boolean, ];
    export class $ServerCommonPacketListener {
    }
    export interface $ServerCommonPacketListener extends $ServerCookiePacketListener, $ServerPacketListener, $IServerCommonPacketListenerExtension {
        handlePong(arg0: $ServerboundPongPacket): void;
        handleResourcePackResponse(arg0: $ServerboundResourcePackPacket_): void;
        handleClientInformation(arg0: $ServerboundClientInformationPacket_): void;
        handleCustomPayload(arg0: $ServerboundCustomPayloadPacket_): void;
        handleKeepAlive(arg0: $ServerboundKeepAlivePacket): void;
    }
    export class $ClientboundServerLinksPacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        type(): $PacketType<$ClientboundServerLinksPacket>;
        handle(arg0: $ClientCommonPacketListener): void;
        links(): $List<$ServerLinks$UntrustedEntry>;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundServerLinksPacket>;
        constructor(arg0: $List_<$ServerLinks$UntrustedEntry_>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundServerLinksPacket}.
     */
    export type $ClientboundServerLinksPacket_ = { links?: $List_<$ServerLinks$UntrustedEntry_>,  } | [links?: $List_<$ServerLinks$UntrustedEntry_>, ];
    export class $ClientboundCustomReportDetailsPacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        details(): $Map<string, string>;
        type(): $PacketType<$ClientboundCustomReportDetailsPacket>;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundCustomReportDetailsPacket>;
        constructor(arg0: $Map_<string, string>);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomReportDetailsPacket}.
     */
    export type $ClientboundCustomReportDetailsPacket_ = { details?: $Map_<string, string>,  } | [details?: $Map_<string, string>, ];
    export class $ServerboundResourcePackPacket$Action extends $Enum<$ServerboundResourcePackPacket$Action> {
        static values(): $ServerboundResourcePackPacket$Action[];
        static valueOf(arg0: string): $ServerboundResourcePackPacket$Action;
        isTerminal(): boolean;
        static INVALID_URL: $ServerboundResourcePackPacket$Action;
        static ACCEPTED: $ServerboundResourcePackPacket$Action;
        static DOWNLOADED: $ServerboundResourcePackPacket$Action;
        static SUCCESSFULLY_LOADED: $ServerboundResourcePackPacket$Action;
        static FAILED_RELOAD: $ServerboundResourcePackPacket$Action;
        static DISCARDED: $ServerboundResourcePackPacket$Action;
        static DECLINED: $ServerboundResourcePackPacket$Action;
        static FAILED_DOWNLOAD: $ServerboundResourcePackPacket$Action;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundResourcePackPacket$Action}.
     */
    export type $ServerboundResourcePackPacket$Action_ = "successfully_loaded" | "declined" | "failed_download" | "accepted" | "downloaded" | "invalid_url" | "failed_reload" | "discarded";
    export class $ClientboundTransferPacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        type(): $PacketType<$ClientboundTransferPacket>;
        host(): string;
        port(): number;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundTransferPacket>;
        constructor(arg0: string, arg1: number);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundTransferPacket}.
     */
    export type $ClientboundTransferPacket_ = { host?: string, port?: number,  } | [host?: string, port?: number, ];
    export class $ClientboundResourcePackPopPacket extends $Record implements $Packet<$ClientCommonPacketListener> {
        type(): $PacketType<$ClientboundResourcePackPopPacket>;
        id(): ($UUID) | undefined;
        handle(arg0: $ClientCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundResourcePackPopPacket>;
        constructor(arg0: ($UUID_) | undefined);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundResourcePackPopPacket}.
     */
    export type $ClientboundResourcePackPopPacket_ = { id?: ($UUID_) | undefined,  } | [id?: ($UUID_) | undefined, ];
    export class $ServerboundClientInformationPacket extends $Record implements $Packet<$ServerCommonPacketListener> {
        information(): $ClientInformation;
        type(): $PacketType<$ServerboundClientInformationPacket>;
        handle(arg0: $ServerCommonPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundClientInformationPacket>;
        constructor(arg0: $ClientInformation_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundClientInformationPacket}.
     */
    export type $ServerboundClientInformationPacket_ = { information?: $ClientInformation_,  } | [information?: $ClientInformation_, ];
}
