import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Comparator, $List_, $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as packagerLink from "@package/com/simibubi/create/content/logistics/packagerLink";
export * as packagePort from "@package/com/simibubi/create/content/logistics/packagePort";
export * as filter from "@package/com/simibubi/create/content/logistics/filter";
export * as item from "@package/com/simibubi/create/content/logistics/item";
export * as stockTicker from "@package/com/simibubi/create/content/logistics/stockTicker";
export * as packager from "@package/com/simibubi/create/content/logistics/packager";
export * as factoryBoard from "@package/com/simibubi/create/content/logistics/factoryBoard";

declare module "@package/com/simibubi/create/content/logistics" {
    export class $BigItemStack {
        static receive(arg0: $RegistryFriendlyByteBuf): $BigItemStack;
        static duplicateWrappers(arg0: $List_<$BigItemStack>): $List<$BigItemStack>;
        isInfinite(): boolean;
        static comparator(): $Comparator<$BigItemStack>;
        static INF: number;
        stack: $ItemStack;
        static CODEC: $Codec<$BigItemStack>;
        count: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BigItemStack>;
        constructor(arg0: $ItemStack_);
        constructor(arg0: $ItemStack_, arg1: number);
        get infinite(): boolean;
    }
}
