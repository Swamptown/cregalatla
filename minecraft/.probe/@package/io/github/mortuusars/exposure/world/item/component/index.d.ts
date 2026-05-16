import { $BiFunction_ } from "@package/java/util/function";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Class } from "@package/java/lang";
import { $ItemAndStack } from "@package/io/github/mortuusars/exposure/world/item/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/item/component" {
    export class $StoredItemStack {
        isEmpty(): boolean;
        getItemAndStackCopy<T extends $Item>(): $ItemAndStack<T>;
        mapIf<T, R>(clazz: $Class<T>, func: $BiFunction_<T, $ItemStack, R>): (R) | undefined;
        getForReading(): $ItemStack;
        getItem(): $Item;
        getCopy(): $ItemStack;
        static CODEC: $Codec<$StoredItemStack>;
        static EMPTY: $StoredItemStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StoredItemStack>;
        constructor(stack: $ItemStack_);
        get empty(): boolean;
        get itemAndStackCopy(): $ItemAndStack<T>;
        get forReading(): $ItemStack;
        get item(): $Item;
        get copy(): $ItemStack;
    }
}
