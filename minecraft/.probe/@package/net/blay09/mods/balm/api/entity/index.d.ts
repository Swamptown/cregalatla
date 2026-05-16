import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/blay09/mods/balm/api/entity" {
    export class $BalmEntity {
    }
    export interface $BalmEntity {
        getFabricBalmData(): $CompoundTag;
        setFabricBalmData(arg0: $CompoundTag_): void;
        getForgeBalmData(): $CompoundTag;
        setForgeBalmData(arg0: $CompoundTag_): void;
        getNeoForgeBalmData(): $CompoundTag;
        setNeoForgeBalmData(arg0: $CompoundTag_): void;
    }
}
