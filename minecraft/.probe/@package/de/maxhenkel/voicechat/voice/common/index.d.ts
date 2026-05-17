import { $SecretKeySpec } from "@package/javax/crypto/spec";
import { $RawUdpPacket } from "@package/de/maxhenkel/voicechat/api";
import { $SocketAddress } from "@package/java/net";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ClientConnection, $Server } from "@package/de/maxhenkel/voicechat/voice/server";
import { $UUID_, $UUID } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";

declare module "@package/de/maxhenkel/voicechat/voice/common" {
    export class $PingPacket implements $Packet<$PingPacket> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getId(): $UUID;
        getTimestamp(): number;
        fromBytes(arg0: $FriendlyByteBuf): $PingPacket;
        getTTL(): number;
        constructor(arg0: $UUID_, arg1: number);
        constructor();
        get id(): $UUID;
        get timestamp(): number;
        get TTL(): number;
    }
    export class $MicPacket implements $Packet<$MicPacket> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getData(): number[];
        getTTL(): number;
        isWhispering(): boolean;
        getSequenceNumber(): number;
        setData(arg0: number[]): void;
        fromBytes(arg0: $FriendlyByteBuf): $MicPacket;
        constructor(arg0: number[], arg1: boolean, arg2: number);
        constructor();
        get TTL(): number;
        get whispering(): boolean;
        get sequenceNumber(): number;
    }
    export class $PlayerState {
        getName(): string;
        toBytes(arg0: $FriendlyByteBuf): void;
        setName(arg0: string): void;
        setDisabled(arg0: boolean): void;
        isDisconnected(): boolean;
        setUuid(arg0: $UUID_): void;
        hasGroup(): boolean;
        isDisabled(): boolean;
        setGroup(arg0: $UUID_): void;
        static fromBytes(arg0: $FriendlyByteBuf): $PlayerState;
        getGroup(): $UUID;
        getUuid(): $UUID;
        setDisconnected(arg0: boolean): void;
        constructor(arg0: $UUID_, arg1: string, arg2: boolean, arg3: boolean);
    }
    export class $Packet<T extends $Packet<any>> {
    }
    export interface $Packet<T extends $Packet<any>> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getTTL(): number;
        fromBytes(arg0: $FriendlyByteBuf): T;
        get TTL(): number;
    }
    export class $Secret {
        toBytes(arg0: $ByteBuf): void;
        decrypt(arg0: number[]): number[];
        static generateIV(): number[];
        getSecret(): number[];
        getKeySpec(): $SecretKeySpec;
        static fromBytes(arg0: number[]): $Secret;
        static fromBytes(arg0: $ByteBuf): $Secret;
        encrypt(arg0: number[]): number[];
        static generateNewRandomSecret(): $Secret;
        static IV_SIZE_BYTES: number;
        static CIPHER: string;
        static SECRET_SIZE_BYTES: number;
        static TAG_LEN_BITS: number;
        get secret(): number[];
        get keySpec(): $SecretKeySpec;
    }
    export class $SoundPacket<T extends $SoundPacket<any>> implements $Packet<T> {
        getData(): number[];
        isFromClientAudioChannel(): boolean;
        getChannelId(): $UUID;
        getSender(): $UUID;
        getSequenceNumber(): number;
        getCategory(): string;
        getTTL(): number;
        static WHISPER_MASK: number;
        static HAS_CATEGORY_MASK: number;
        constructor();
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: string);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: number, arg4: string);
        get data(): number[];
        get fromClientAudioChannel(): boolean;
        get channelId(): $UUID;
        get sender(): $UUID;
        get sequenceNumber(): number;
        get category(): string;
        get TTL(): number;
    }
    export class $NetworkMessage {
        write(arg0: $Secret): number[];
        getAddress(): $SocketAddress;
        getTimestamp(): number;
        writeServer(arg0: $Server, arg1: $ClientConnection): number[];
        getTTL(): number;
        static readPacketServer(arg0: $RawUdpPacket, arg1: $Server): $NetworkMessage;
        static readFromBytes(arg0: $SocketAddress, arg1: $Secret, arg2: number[], arg3: number): $NetworkMessage;
        getPacket(): $Packet<$Packet<any>>;
        static MAGIC_BYTE: number;
        constructor(arg0: $Packet<never>);
        constructor(arg0: number, arg1: $Packet<never>);
        get address(): $SocketAddress;
        get timestamp(): number;
        get TTL(): number;
        get packet(): $Packet<$Packet<any>>;
    }
}
