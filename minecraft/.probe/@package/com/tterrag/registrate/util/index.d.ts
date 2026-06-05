import { $ItemLike, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $CreativeModeTab$TabVisibility_, $Item, $ItemStack_, $ItemStack, $CreativeModeTab$Output, $CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$TabVisibility } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Collection_ } from "@package/java/util";
import { $NonNullSupplier_ } from "@package/com/tterrag/registrate/util/nullness";
import { $ItemPredicate_, $InventoryChangeTrigger$TriggerInstance } from "@package/net/minecraft/advancements/critereon";
import { $Criterion } from "@package/net/minecraft/advancements";
import { $Predicate, $BiConsumer_, $Predicate_, $Supplier_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RegistrateRecipeProvider } from "@package/com/tterrag/registrate/providers";
import { $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
export * as nullness from "@package/com/tterrag/registrate/util/nullness";
export * as entry from "@package/com/tterrag/registrate/util/entry";

declare module "@package/com/tterrag/registrate/util" {
    export class $CreativeModeTabModifier implements $CreativeModeTab$Output {
        hasPermissions(): boolean;
        getFlags(): $FeatureFlagSet;
        accept(arg0: $Supplier_<$ItemLike>): void;
        accept(arg0: $ItemStack_, arg1: $CreativeModeTab$TabVisibility_): void;
        accept(arg0: $Supplier_<$ItemLike>, arg1: $CreativeModeTab$TabVisibility_): void;
        getParameters(): $CreativeModeTab$ItemDisplayParameters;
        accept(arg0: $ItemLike_): void;
        accept(arg0: $ItemStack_): void;
        accept(arg0: $ItemLike_, arg1: $CreativeModeTab$TabVisibility_): void;
        acceptAll(arg0: $Collection_<$ItemStack_>, arg1: $CreativeModeTab$TabVisibility_): void;
        acceptAll(arg0: $Collection_<$ItemStack_>): void;
        constructor(arg0: $Supplier_<$FeatureFlagSet>, arg1: $BooleanSupplier_, arg2: $BiConsumer_<$ItemStack, $CreativeModeTab$TabVisibility>, arg3: $Supplier_<$CreativeModeTab$ItemDisplayParameters>);
        get flags(): $FeatureFlagSet;
        get parameters(): $CreativeModeTab$ItemDisplayParameters;
    }
    export class $DataIngredient {
        static items<T extends $ItemLike>(arg0: $NonNullSupplier_<T>, ...arg1: $NonNullSupplier_<T>[]): $DataIngredient;
        static items<T extends $ItemLike>(arg0: T, ...arg1: T[]): $DataIngredient;
        static ingredient(arg0: $Ingredient_, arg1: $ItemLike_): $DataIngredient;
        static ingredient(arg0: $Ingredient_, arg1: $ResourceLocation_, ...arg2: $ItemPredicate_[]): $DataIngredient;
        static ingredient(arg0: $Ingredient_, arg1: $TagKey_<$Item>): $DataIngredient;
        toVanilla(): $Ingredient;
        getCriterion(arg0: $RegistrateRecipeProvider): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        getStackingIds(): $IntList;
        isCustom(): boolean;
        hasNoItems(): boolean;
        getCustomIngredient(): $ICustomIngredient;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static tag(arg0: $TagKey_<$Item>): $DataIngredient;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        test(arg0: $ItemStack_): boolean;
        isEmpty(): boolean;
        getId(): $ResourceLocation;
        isSimple(): boolean;
        static stacks(arg0: $ItemStack_, ...arg1: $ItemStack_[]): $DataIngredient;
        get stackingIds(): $IntList;
        get custom(): boolean;
        get customIngredient(): $ICustomIngredient;
        get empty(): boolean;
        get id(): $ResourceLocation;
        get simple(): boolean;
    }
}
