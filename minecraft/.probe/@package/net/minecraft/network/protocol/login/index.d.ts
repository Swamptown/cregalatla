import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PublicKey, $PrivateKey } from "@package/java/security";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $UUID, $UUID_ } from "@package/java/util";
import { $ClientCookiePacketListener, $ServerCookiePacketListener } from "@package/net/minecraft/network/protocol/cookie";
import { $ClientboundPacketListener, $FriendlyByteBuf, $ProtocolInfo$Unbound, $ProtocolInfo, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $CustomQueryAnswerPayload_, $CustomQueryAnswerPayload, $CustomQueryPayload } from "@package/net/minecraft/network/protocol/login/custom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $SecretKey } from "@package/javax/crypto";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as custom from "@package/net/minecraft/network/protocol/login/custom";

declare module "@package/net/minecraft/network/protocol/login" {
    export class $ServerboundCustomQueryAnswerPacket extends $Record implements $Packet<$ServerLoginPacketListener> {
        transactionId(): number;
        payload(): $CustomQueryAnswerPayload;
        type(): $PacketType<$ServerboundCustomQueryAnswerPacket>;
        handle(arg0: $ServerLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCustomQueryAnswerPacket>;
        constructor(arg0: number, arg1: $CustomQueryAnswerPayload_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundCustomQueryAnswerPacket}.
     */
    export type $ServerboundCustomQueryAnswerPacket_ = { payload?: $CustomQueryAnswerPayload_, transactionId?: number,  } | [payload?: $CustomQueryAnswerPayload_, transactionId?: number, ];
    export class $LoginProtocols {
        static CLIENTBOUND: $ProtocolInfo<$ClientLoginPacketListener>;
        static CLIENTBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ClientLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND_TEMPLATE: $ProtocolInfo$Unbound<$ServerLoginPacketListener, $FriendlyByteBuf>;
        static SERVERBOUND: $ProtocolInfo<$ServerLoginPacketListener>;
        constructor();
    }
    export class $ClientboundGameProfilePacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundGameProfilePacket>;
        handle(arg0: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        gameProfile(): $GameProfile;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundGameProfilePacket>;
        constructor(arg0: $GameProfile, arg1: boolean);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundGameProfilePacket}.
     */
    export type $ClientboundGameProfilePacket_ = { gameProfile?: $GameProfile, strictErrorHandling?: boolean,  } | [gameProfile?: $GameProfile, strictErrorHandling?: boolean, ];
    export class $ClientboundCustomQueryPacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        transactionId(): number;
        payload(): $CustomQueryPayload;
        type(): $PacketType<$ClientboundCustomQueryPacket>;
        handle(arg0: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomQueryPacket>;
        constructor(arg0: number, arg1: $CustomQueryPayload);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomQueryPacket}.
     */
    export type $ClientboundCustomQueryPacket_ = { payload?: $CustomQueryPayload, transactionId?: number,  } | [payload?: $CustomQueryPayload, transactionId?: number, ];
    export class $ServerboundLoginAcknowledgedPacket implements $Packet<$ServerLoginPacketListener> {
        type(): $PacketType<$ServerboundLoginAcknowledgedPacket>;
        handle(arg0: $ServerLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static INSTANCE: $ServerboundLoginAcknowledgedPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ServerboundLoginAcknowledgedPacket>;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerboundHelloPacket extends $Record implements $Packet<$ServerLoginPacketListener> {
        name(): string;
        type(): $PacketType<$ServerboundHelloPacket>;
        handle(arg0: $ServerLoginPacketListener): void;
        profileId(): $UUID;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundHelloPacket>;
        constructor(arg0: string, arg1: $UUID_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundHelloPacket}.
     */
    export type $ServerboundHelloPacket_ = { name?: string, profileId?: $UUID_,  } | [name?: string, profileId?: $UUID_, ];
    export class $LoginPacketTypes {
        static CLIENTBOUND_GAME_PROFILE: $PacketType<$ClientboundGameProfilePacket>;
        static CLIENTBOUND_CUSTOM_QUERY: $PacketType<$ClientboundCustomQueryPacket>;
        static CLIENTBOUND_HELLO: $PacketType<$ClientboundHelloPacket>;
        static CLIENTBOUND_LOGIN_DISCONNECT: $PacketType<$ClientboundLoginDisconnectPacket>;
        static SERVERBOUND_KEY: $PacketType<$ServerboundKeyPacket>;
        static CLIENTBOUND_LOGIN_COMPRESSION: $PacketType<$ClientboundLoginCompressionPacket>;
        static SERVERBOUND_HELLO: $PacketType<$ServerboundHelloPacket>;
        static SERVERBOUND_CUSTOM_QUERY_ANSWER: $PacketType<$ServerboundCustomQueryAnswerPacket>;
        static SERVERBOUND_LOGIN_ACKNOWLEDGED: $PacketType<$ServerboundLoginAcknowledgedPacket>;
        constructor();
    }
    export class $ClientboundHelloPacket implements $Packet<$ClientLoginPacketListener> {
        getServerId(): string;
        getChallenge(): number[];
        shouldAuthenticate(): boolean;
        type(): $PacketType<$ClientboundHelloPacket>;
        handle(arg0: $ClientLoginPacketListener): void;
        getPublicKey(): $PublicKey;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHelloPacket>;
        constructor(arg0: string, arg1: number[], arg2: number[], arg3: boolean);
        get serverId(): string;
        get challenge(): number[];
        get publicKey(): $PublicKey;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ServerLoginPacketListener {
    }
    export interface $ServerLoginPacketListener extends $ServerCookiePacketListener, $ServerPacketListener {
        handleCustomQueryPacket(arg0: $ServerboundCustomQueryAnswerPacket_): void;
        handleKey(arg0: $ServerboundKeyPacket): void;
        handleLoginAcknowledgement(arg0: $ServerboundLoginAcknowledgedPacket): void;
        protocol(): $ConnectionProtocol;
        handleHello(arg0: $ServerboundHelloPacket_): void;
    }
    export class $ServerboundKeyPacket implements $Packet<$ServerLoginPacketListener> {
        isChallengeValid(arg0: number[], arg1: $PrivateKey): boolean;
        getSecretKey(arg0: $PrivateKey): $SecretKey;
        type(): $PacketType<$ServerboundKeyPacket>;
        handle(arg0: $ServerLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundKeyPacket>;
        constructor(arg0: $SecretKey, arg1: $PublicKey, arg2: number[]);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundLoginCompressionPacket implements $Packet<$ClientLoginPacketListener> {
        getCompressionThreshold(): number;
        type(): $PacketType<$ClientboundLoginCompressionPacket>;
        handle(arg0: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginCompressionPacket>;
        constructor(arg0: number);
        get compressionThreshold(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundLoginDisconnectPacket implements $Packet<$ClientLoginPacketListener> {
        getReason(): $Component;
        type(): $PacketType<$ClientboundLoginDisconnectPacket>;
        handle(arg0: $ClientLoginPacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginDisconnectPacket>;
        constructor(arg0: $Component_);
        get reason(): $Component;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientLoginPacketListener {
    }
    export interface $ClientLoginPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener {
        protocol(): $ConnectionProtocol;
        handleHello(arg0: $ClientboundHelloPacket): void;
        handleGameProfile(arg0: $ClientboundGameProfilePacket_): void;
        handleDisconnect(arg0: $ClientboundLoginDisconnectPacket): void;
        handleCompression(arg0: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(arg0: $ClientboundCustomQueryPacket_): void;
    }
}
