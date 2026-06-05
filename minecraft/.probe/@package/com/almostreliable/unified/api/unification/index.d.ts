import { $Predicate_ } from "@package/java/util/function";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Holder_, $Holder$Reference } from "@package/net/minecraft/core";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection } from "@package/java/util";

declare module "@package/com/almostreliable/unified/api/unification" {
    export class $UnificationEntry<T> {
    }
    export interface $UnificationEntry<T> {
        asHolderOrThrow(): $Holder$Reference<T>;
        tag(): $TagKey<T>;
        value(): T;
        id(): $ResourceLocation;
        key(): $ResourceKey<T>;
    }
    export class $UnificationLookup {
    }
    export interface $UnificationLookup {
        getItemEntry(arg0: $ResourceLocation_): $UnificationEntry<$Item>;
        getItemEntry(item: $Holder_<$Item>): $UnificationEntry<$Item>;
        getItemEntry(item: $Item_): $UnificationEntry<$Item>;
        getTagEntries(arg0: $TagKey_<$Item>): $Collection<$UnificationEntry<$Item>>;
        getRelevantItemTag(item: $Holder_<$Item>): $TagKey<$Item>;
        getRelevantItemTag(item: $Item_): $TagKey<$Item>;
        getRelevantItemTag(arg0: $ResourceLocation_): $TagKey<$Item>;
        getTagTargetItem(arg0: $TagKey_<$Item>, arg1: $Predicate_<$ResourceLocation>): $UnificationEntry<$Item>;
        getTagTargetItem(tag: $TagKey_<$Item>): $UnificationEntry<$Item>;
        isUnifiedIngredientItem(arg0: $Ingredient_, arg1: $ItemStack_): boolean;
        getVariantItemTarget(item: $UnificationEntry<$Item_>): $UnificationEntry<$Item>;
        getVariantItemTarget(arg0: $ResourceLocation_): $UnificationEntry<$Item>;
        getVariantItemTarget(item: $Item_): $UnificationEntry<$Item>;
        getVariantItemTarget(item: $Holder_<$Item>): $UnificationEntry<$Item>;
        getTags(): $Collection<$TagKey<$Item>>;
        get tags(): $Collection<$TagKey<$Item>>;
    }
}
