import { $ClientboundPacketListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerPacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/cookie" {
    export class $ServerCookiePacketListener {
    }
    export interface $ServerCookiePacketListener extends $ServerPacketListener {
        handleCookieResponse(arg0: $ServerboundCookieResponsePacket_): void;
    }
    export class $CookiePacketTypes {
        static SERVERBOUND_COOKIE_RESPONSE: $PacketType<$ServerboundCookieResponsePacket>;
        static CLIENTBOUND_COOKIE_REQUEST: $PacketType<$ClientboundCookieRequestPacket>;
        constructor();
    }
    export class $ClientboundCookieRequestPacket extends $Record implements $Packet<$ClientCookiePacketListener> {
        type(): $PacketType<$ClientboundCookieRequestPacket>;
        key(): $ResourceLocation;
        handle(arg0: $ClientCookiePacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCookieRequestPacket>;
        constructor(arg0: $ResourceLocation_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCookieRequestPacket}.
     */
    export type $ClientboundCookieRequestPacket_ = { key?: $ResourceLocation_,  } | [key?: $ResourceLocation_, ];
    export class $ServerboundCookieResponsePacket extends $Record implements $Packet<$ServerCookiePacketListener> {
        payload(): number[];
        type(): $PacketType<$ServerboundCookieResponsePacket>;
        key(): $ResourceLocation;
        handle(arg0: $ServerCookiePacketListener): void;
        isTerminal(): boolean;
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ServerboundCookieResponsePacket>;
        constructor(arg0: $ResourceLocation_, arg1: number[]);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerboundCookieResponsePacket}.
     */
    export type $ServerboundCookieResponsePacket_ = { key?: $ResourceLocation_, payload?: number[],  } | [key?: $ResourceLocation_, payload?: number[], ];
    export class $ClientCookiePacketListener {
    }
    export interface $ClientCookiePacketListener extends $ClientboundPacketListener {
        handleRequestCookie(arg0: $ClientboundCookieRequestPacket_): void;
    }
}
