import { $PotionAccessor } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $BrewingRecipeRegistryAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FabricBrewingRecipeRegistryBuilder } from "@package/net/fabricmc/fabric/api/registry";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $PotionBrewingAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $List, $List_, $OptionalInt } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess, $Registry, $Holder } from "@package/net/minecraft/core";
import { $IBrewingRecipe } from "@package/net/neoforged/neoforge/common/brewing";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/alchemy" {
    export class $PotionBrewing$Builder implements $FabricBrewingRecipeRegistryBuilder {
        build(): $PotionBrewing;
        addContainerRecipe(arg0: $Item_, arg1: $Item_, arg2: $Item_): void;
        addMix(arg0: $Holder_<$Potion>, arg1: $Item_, arg2: $Holder_<$Potion>): void;
        addStartMix(arg0: $Item_, arg1: $Holder_<$Potion>): void;
        registerItemRecipe(arg0: $Item_, arg1: $Ingredient_, arg2: $Item_): void;
        registerPotionRecipe(arg0: $Holder_<any>, arg1: $Ingredient_, arg2: $Holder_<any>): void;
        getEnabledFeatures(): $FeatureFlagSet;
        addRecipe(arg0: $IBrewingRecipe): void;
        addRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_): void;
        registerRecipes(arg0: $Ingredient_, arg1: $Holder_<any>): void;
        addContainer(arg0: $Item_): void;
        constructor(arg0: $FeatureFlagSet);
        get enabledFeatures(): $FeatureFlagSet;
    }
    export class $PotionContents extends $Record {
        is(arg0: $Holder_<$Potion>): boolean;
        withEffectAdded(arg0: $MobEffectInstance): $PotionContents;
        forEachEffect(arg0: $Consumer_<$MobEffectInstance>): void;
        addPotionTooltip(arg0: $Consumer_<$Component>, arg1: number, arg2: number): void;
        static addPotionTooltip(arg0: $Iterable_<$MobEffectInstance>, arg1: $Consumer_<$Component>, arg2: number, arg3: number): void;
        customColor(): (number) | undefined;
        customEffects(): $List<$MobEffectInstance>;
        getAllEffects(): $Iterable<$MobEffectInstance>;
        withPotion(arg0: $Holder_<$Potion>): $PotionContents;
        static getColorOptional(arg0: $Iterable_<$MobEffectInstance>): $OptionalInt;
        hasEffects(): boolean;
        static getColor(arg0: $Holder_<$Potion>): number;
        static getColor(arg0: $Iterable_<$MobEffectInstance>): number;
        getColor(): number;
        static createItemStack(arg0: $Item_, arg1: $Holder_<$Potion>): $ItemStack;
        potion(): ($Holder<$Potion>) | undefined;
        static CODEC: $Codec<$PotionContents>;
        static EMPTY: $PotionContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotionContents>;
        constructor(arg0: $Holder_<$Potion>);
        constructor(potion: ($Holder_<$Potion>) | undefined, customColor: (number) | undefined, customEffects: $List_<$MobEffectInstance>);
        get allEffects(): $Iterable<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $PotionContents}.
     */
    export type $PotionContents_ = { potion?: ($Holder_<$Potion>) | undefined, customColor?: (number) | undefined, customEffects?: $List_<$MobEffectInstance>,  } | [potion?: ($Holder_<$Potion>) | undefined, customColor?: (number) | undefined, customEffects?: $List_<$MobEffectInstance>, ];
    export class $Potions {
        static bootstrap(arg0: $Registry<$Potion_>): $Holder<$Potion>;
        static SLOWNESS: $Holder<$Potion>;
        static INVISIBILITY: $Holder<$Potion>;
        static STRONG_REGENERATION: $Holder<$Potion>;
        static SLOW_FALLING: $Holder<$Potion>;
        static STRONG_SWIFTNESS: $Holder<$Potion>;
        static LONG_WATER_BREATHING: $Holder<$Potion>;
        static LEAPING: $Holder<$Potion>;
        static WEAKNESS: $Holder<$Potion>;
        static LONG_NIGHT_VISION: $Holder<$Potion>;
        static LUCK: $Holder<$Potion>;
        static FIRE_RESISTANCE: $Holder<$Potion>;
        static LONG_SLOW_FALLING: $Holder<$Potion>;
        static WIND_CHARGED: $Holder<$Potion>;
        static LONG_FIRE_RESISTANCE: $Holder<$Potion>;
        static WATER_BREATHING: $Holder<$Potion>;
        static OOZING: $Holder<$Potion>;
        static LONG_LEAPING: $Holder<$Potion>;
        static STRONG_TURTLE_MASTER: $Holder<$Potion>;
        static LONG_WEAKNESS: $Holder<$Potion>;
        static HARMING: $Holder<$Potion>;
        static STRONG_POISON: $Holder<$Potion>;
        static SWIFTNESS: $Holder<$Potion>;
        static WATER: $Holder<$Potion>;
        static LONG_POISON: $Holder<$Potion>;
        static TURTLE_MASTER: $Holder<$Potion>;
        static AWKWARD: $Holder<$Potion>;
        static REGENERATION: $Holder<$Potion>;
        static INFESTED: $Holder<$Potion>;
        static WEAVING: $Holder<$Potion>;
        static STRENGTH: $Holder<$Potion>;
        static MUNDANE: $Holder<$Potion>;
        static HEALING: $Holder<$Potion>;
        static LONG_SWIFTNESS: $Holder<$Potion>;
        static STRONG_LEAPING: $Holder<$Potion>;
        static STRONG_HEALING: $Holder<$Potion>;
        static LONG_STRENGTH: $Holder<$Potion>;
        static LONG_REGENERATION: $Holder<$Potion>;
        static POISON: $Holder<$Potion>;
        static STRONG_HARMING: $Holder<$Potion>;
        static STRONG_STRENGTH: $Holder<$Potion>;
        static LONG_SLOWNESS: $Holder<$Potion>;
        static LONG_TURTLE_MASTER: $Holder<$Potion>;
        static THICK: $Holder<$Potion>;
        static NIGHT_VISION: $Holder<$Potion>;
        static STRONG_SLOWNESS: $Holder<$Potion>;
        static LONG_INVISIBILITY: $Holder<$Potion>;
        constructor();
    }
    export class $PotionBrewing implements $BrewingRecipeRegistryAccessor, $PotionBrewingAccessor {
        /**
         * @deprecated
         */
        static bootstrap(arg0: $FeatureFlagSet): $PotionBrewing;
        static bootstrap(arg0: $FeatureFlagSet, arg1: $RegistryAccess): $PotionBrewing;
        mix(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        isContainerIngredient(arg0: $ItemStack_): boolean;
        isPotionIngredient(arg0: $ItemStack_): boolean;
        hasContainerMix(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        hasPotionMix(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static addVanillaMixes(arg0: $PotionBrewing$Builder): void;
        isBrewablePotion(arg0: $Holder_<$Potion>): boolean;
        isIngredient(arg0: $ItemStack_): boolean;
        hasMix(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        isInput(arg0: $ItemStack_): boolean;
        getRecipes(): $List<$IBrewingRecipe>;
        create$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        create$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
        create$isContainer(arg0: $ItemStack_): boolean;
        getPotionTypes(): $List<$Ingredient>;
        getPotionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        getItemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
        containerMixes: $List<$PotionBrewing$Mix<$Item>>;
        containers: $List<$Ingredient>;
        static BREWING_TIME_SECONDS: number;
        potionMixes: $List<$PotionBrewing$Mix<$Potion>>;
        static EMPTY: $PotionBrewing;
        constructor(arg0: $List_<$Ingredient_>, arg1: $List_<$PotionBrewing$Mix_<$Potion_>>, arg2: $List_<$PotionBrewing$Mix_<$Item_>>);
        constructor(arg0: $List_<$Ingredient_>, arg1: $List_<$PotionBrewing$Mix_<$Potion_>>, arg2: $List_<$PotionBrewing$Mix_<$Item_>>, arg3: $List_<$IBrewingRecipe>);
        get recipes(): $List<$IBrewingRecipe>;
        get potionTypes(): $List<$Ingredient>;
        get potionRecipes(): $List<$PotionBrewing$Mix<$Potion>>;
        get itemRecipes(): $List<$PotionBrewing$Mix<$Item>>;
    }
    export class $PotionBrewing$Mix<T> extends $Record {
        from(): $Holder<T>;
        to(): $Holder<T>;
        ingredient(): $Ingredient;
        constructor(from: $Holder_<T>, ingredient: $Ingredient_, to: $Holder_<T>);
    }
    /**
     * Values that may be interpreted as {@link $PotionBrewing$Mix}.
     */
    export type $PotionBrewing$Mix_<T> = { ingredient?: $Ingredient_, to?: $Holder_<any>, from?: $Holder_<any>,  } | [ingredient?: $Ingredient_, to?: $Holder_<any>, from?: $Holder_<any>, ];
    export interface $Potion extends RegistryMarked<RegistryTypes.PotionTag, RegistryTypes.Potion> {}
    export class $Potion implements $FeatureElement, $PotionAccessor {
        static getName(arg0: ($Holder_<$Potion>) | undefined, arg1: string): string;
        hasInstantEffects(): boolean;
        requiredFeatures(...arg0: $FeatureFlag[]): $Potion;
        requiredFeatures(): $FeatureFlagSet;
        getEffects(): $List<$MobEffectInstance>;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        getName(): string;
        setName(arg0: string): void;
        static CODEC: $Codec<$Holder<$Potion>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Potion>>;
        constructor(arg0: string, ...arg1: $MobEffectInstance[]);
        constructor(...arg0: $MobEffectInstance[]);
        get effects(): $List<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $Potion}.
     */
    export type $Potion_ = RegistryTypes.Potion;
}
