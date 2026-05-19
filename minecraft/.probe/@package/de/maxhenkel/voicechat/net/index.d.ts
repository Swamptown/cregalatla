import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ServerConfig$Codec, $ServerConfig } from "@package/de/maxhenkel/voicechat/config";
import { $Secret } from "@package/de/maxhenkel/voicechat/voice/common";
import { $CustomPacketPayload, $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";

declare module "@package/de/maxhenkel/voicechat/net" {
    export class $SecretPacket implements $Packet<$SecretPacket> {
        getMtuSize(): number;
        getVoiceHost(): string;
        getServerPort(): number;
        getPlayerUUID(): $UUID;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        allowRecording(): boolean;
        groupsEnabled(): boolean;
        getKeepAlive(): number;
        type(): $CustomPacketPayload$Type<$SecretPacket>;
        toBytes(arg0: $FriendlyByteBuf): void;
        getCodec(): $ServerConfig$Codec;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        fromBytes(arg0: $FriendlyByteBuf): $SecretPacket;
        static SECRET: $CustomPacketPayload$Type<$SecretPacket>;
        constructor();
        constructor(arg0: $ServerPlayer, arg1: $Secret, arg2: number, arg3: $ServerConfig);
        get mtuSize(): number;
        get voiceHost(): string;
        get serverPort(): number;
        get playerUUID(): $UUID;
        get secret(): $Secret;
        get voiceChatDistance(): number;
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
