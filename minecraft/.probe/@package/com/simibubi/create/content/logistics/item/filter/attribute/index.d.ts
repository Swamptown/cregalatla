import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Object } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/item/filter/attribute" {
    export interface $ItemAttributeType extends RegistryMarked<RegistryTypes.CreateItemAttributeTypeTag, RegistryTypes.CreateItemAttributeType> {}
    export class $ItemAttribute {
        static getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        static saveStatic(arg0: $ItemAttribute, arg1: $HolderLookup$Provider): $CompoundTag;
        static loadStatic(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ItemAttribute;
        static CODEC: $Codec<$ItemAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
    }
    export interface $ItemAttribute {
        format(arg0: boolean): $MutableComponent;
        getType(): $ItemAttributeType;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level_): boolean;
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    export class $ItemAttributeType {
    }
    export interface $ItemAttributeType {
        getAllAttributes(arg0: $ItemStack_, arg1: $Level_): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        createAttribute(): $ItemAttribute;
        codec(): $MapCodec<$ItemAttribute>;
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeType}.
     */
    export type $ItemAttributeType_ = RegistryTypes.CreateItemAttributeType;
}
