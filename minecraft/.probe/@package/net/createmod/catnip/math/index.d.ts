import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/catnip/math" {
    export class $BlockFace extends $Pair<$BlockPos, $Direction> {
        static fromNBT(arg0: $CompoundTag_): $BlockFace;
        getOppositeFace(): $Direction;
        getConnectedPos(): $BlockPos;
        getFace(): $Direction;
        isEquivalent(arg0: $BlockFace): boolean;
        getPos(): $BlockPos;
        getOpposite(): $BlockFace;
        serializeNBT(): $CompoundTag;
        static CODEC: $Codec<$BlockFace>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockFace>;
        constructor(arg0: $BlockPos_, arg1: $Direction_);
        get oppositeFace(): $Direction;
        get connectedPos(): $BlockPos;
        get face(): $Direction;
        get pos(): $BlockPos;
        get opposite(): $BlockFace;
    }
}
