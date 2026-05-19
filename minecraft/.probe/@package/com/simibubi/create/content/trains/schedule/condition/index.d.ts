import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ScheduleDataEntry } from "@package/com/simibubi/create/content/trains/schedule";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/schedule/condition" {
    export class $ScheduleWaitCondition extends $ScheduleDataEntry {
        tickCompletion(arg0: $Level_, arg1: $Train, arg2: $CompoundTag_): boolean;
        getWaitingStatus(arg0: $Level_, arg1: $Train, arg2: $CompoundTag_): $MutableComponent;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleWaitCondition;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
}
