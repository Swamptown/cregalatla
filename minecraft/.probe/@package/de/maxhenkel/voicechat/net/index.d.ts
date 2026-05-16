import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ServerConfig$Codec, $ServerConfig } from "@package/de/maxhenkel/voicechat/config";
import { $Secret } from "@package/de/maxhenkel/voicechat/voice/common";
import { $CustomPacketPayload, $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";

declare module "@package/de/maxhenkel/voicechat/net" {
    export class $SecretPacket implements $Packet<$SecretPacket> {
        type(): $CustomPacketPayload$Type<$SecretPacket>;
        toBytes(arg0: $FriendlyByteBuf): void;
        getVoiceHost(): string;
        getServerPort(): number;
        getMtuSize(): number;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        allowRecording(): boolean;
        groupsEnabled(): boolean;
        getPlayerUUID(): $UUID;
        getKeepAlive(): number;
        getCodec(): $ServerConfig$Codec;
        fromBytes(arg0: $FriendlyByteBuf): $SecretPacket;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static SECRET: $CustomPacketPayload$Type<$SecretPacket>;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $Secret, arg2: number, arg3: $ServerConfig);
        get voiceHost(): string;
        get serverPort(): number;
        get mtuSize(): number;
        get secret(): $Secret;
        get voiceChatDistance(): number;
        get playerUUID(): $UUID;
        get keepAlive(): number;
    }
    export class $Packet<T extends $Packet<T>> {
    }
    export interface $Packet<T extends $Packet<T>> extends $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<T>;
        toBytes(arg0: $FriendlyByteBuf): void;
        fromBytes(arg0: $FriendlyByteBuf): T;
    }
}
