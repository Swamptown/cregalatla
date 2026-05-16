import { $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";

declare module "@package/io/github/mortuusars/exposure/network/packet" {
    export class $Packet {
    }
    export interface $Packet extends $CustomPacketPayload {
        handle(arg0: $PacketFlow_, arg1: $Player): boolean;
    }
}
