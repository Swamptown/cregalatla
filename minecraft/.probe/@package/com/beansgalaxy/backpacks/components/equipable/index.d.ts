import { $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $EquipmentSlot, $EquipmentSlotGroup_, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/beansgalaxy/backpacks/components/equipable" {
    export class $EquipmentGroups extends $Enum<$EquipmentGroups> implements $StringRepresentable {
        getValues(): $List<$EquipmentSlot>;
        static values(): $EquipmentGroups[];
        test(arg0: $EquipmentSlotGroup_): boolean;
        test(arg0: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentGroups;
        getId(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentGroups;
        static HEAD: $EquipmentGroups;
        static CODEC: $Codec<$EquipmentGroups>;
        static ARMOR: $EquipmentGroups;
        static LEGS: $EquipmentGroups;
        static TORSO: $EquipmentGroups;
        static BY_ID: $IntFunction<$EquipmentGroups>;
        static BODY: $EquipmentGroups;
        static FEET: $EquipmentGroups;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentGroups>;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentGroups}.
     */
    export type $EquipmentGroups_ = "feet" | "legs" | "chest" | "head" | "armor" | "body" | "torso";
}
