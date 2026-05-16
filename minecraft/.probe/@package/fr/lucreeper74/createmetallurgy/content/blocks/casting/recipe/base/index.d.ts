import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/fr/lucreeper74/createmetallurgy/content/blocks/casting/recipe/base" {
    export class $CastingOutput {
        getStack(): $ItemStack;
        static fromStack(arg0: $ItemStack_): $CastingOutput;
        getStacks(): $List<$ItemStack>;
        static fromTag(arg0: $TagKey_<$Item>, arg1: number): $CastingOutput;
        static CODEC: $MapCodec<$CastingOutput>;
        static EMPTY: $CastingOutput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CastingOutput>;
        constructor();
        get stack(): $ItemStack;
        get stacks(): $List<$ItemStack>;
    }
}
