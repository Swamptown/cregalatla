import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $EmiRecipe } from "@package/dev/emi/emi/api/recipe";
import { $DataComponentType_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object, $Class } from "@package/java/lang";
export * as serializer from "@package/dev/emi/emi/api/stack/serializer";

declare module "@package/dev/emi/emi/api/stack" {
    export class $EmiIngredient {
        static of(ingredient: $Ingredient_): $EmiIngredient;
        static of(ingredient: $Ingredient_, amount: number): $EmiIngredient;
        static of(list: $List_<$EmiIngredient>): $EmiIngredient;
        static of(list: $List_<$EmiIngredient>, amount: number): $EmiIngredient;
        static of<T>(key: $TagKey_<T>, amount: number): $EmiIngredient;
        static of<T>(key: $TagKey_<T>): $EmiIngredient;
        static areEqual(a: $EmiIngredient, b: $EmiIngredient): boolean;
        static RENDER_AMOUNT: number;
        static RENDER_INGREDIENT: number;
        static RENDER_ICON: number;
        static RENDER_REMAINDER: number;
    }
    export interface $EmiIngredient extends $EmiRenderable {
        copy(): $EmiIngredient;
        isEmpty(): boolean;
        getEmiStacks(): $List<$EmiStack>;
        setChance(arg0: number): $EmiIngredient;
        getChance(): number;
        setAmount(arg0: number): $EmiIngredient;
        getTooltip(): $List<$ClientTooltipComponent>;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getAmount(): number;
        get empty(): boolean;
        get emiStacks(): $List<$EmiStack>;
        get tooltip(): $List<$ClientTooltipComponent>;
    }
    export class $EmiStackInteraction {
        isEmpty(): boolean;
        getStack(): $EmiIngredient;
        getRecipeContext(): $EmiRecipe;
        isClickable(): boolean;
        static EMPTY: $EmiStackInteraction;
        constructor(stack: $EmiIngredient);
        constructor(stack: $EmiIngredient, recipe: $EmiRecipe, clickable: boolean);
        get empty(): boolean;
        get stack(): $EmiIngredient;
        get recipeContext(): $EmiRecipe;
        get clickable(): boolean;
    }
    export class $EmiRegistryAdapter$StackConstructor<T> {
    }
    export interface $EmiRegistryAdapter$StackConstructor<T> {
        of(arg0: T, arg1: $DataComponentPatch_, arg2: number): $EmiStack;
    }
    /**
     * Values that may be interpreted as {@link $EmiRegistryAdapter$StackConstructor}.
     */
    export type $EmiRegistryAdapter$StackConstructor_<T> = ((arg0: T, arg1: $DataComponentPatch, arg2: number) => $EmiStack);
    export class $Comparison {
        compare(a: $EmiStack, b: $EmiStack): boolean;
        static of(comparator: $Comparison$Predicate_, hashFunction: $Comparison$HashFunction_): $Comparison;
        static of(comparator: $Comparison$Predicate_): $Comparison;
        static compareData<T>(_function: $Function_<$EmiStack, T>): $Comparison;
        static compareComponents(): $Comparison;
        getHash(stack: $EmiStack): number;
        static DEFAULT_COMPARISON: $Comparison;
    }
    export class $Comparison$Predicate {
    }
    export interface $Comparison$Predicate {
        test(arg0: $EmiStack, arg1: $EmiStack): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Comparison$Predicate}.
     */
    export type $Comparison$Predicate_ = ((arg0: $EmiStack, arg1: $EmiStack) => boolean);
    export class $EmiStack implements $EmiIngredient {
        getName(): $Component;
        get<T>(type: $DataComponentType_<T>): T;
        static of(stack: $ItemStack_): $EmiStack;
        static of(item: $ItemLike_): $EmiStack;
        static of(stack: $ItemStack_, amount: number): $EmiStack;
        static of(item: $ItemLike_, componentChanges: $DataComponentPatch_): $EmiStack;
        static of(item: $ItemLike_, amount: number): $EmiStack;
        static of(fluid: $Fluid_, amount: number): $EmiStack;
        static of(fluid: $Fluid_, componentChanges: $DataComponentPatch_): $EmiStack;
        static of(fluid: $Fluid_, componentChanges: $DataComponentPatch_, amount: number): $EmiStack;
        static of(fluid: $Fluid_): $EmiStack;
        static of(item: $ItemLike_, componentChanges: $DataComponentPatch_, amount: number): $EmiStack;
        copy(): $EmiStack;
        isEmpty(): boolean;
        getKey(): $Object;
        getId(): $ResourceLocation;
        getOrDefault<T>(type: $DataComponentType_<T>, fallback: T): T;
        isEqual(stack: $EmiStack, comparison: $Comparison): boolean;
        isEqual(stack: $EmiStack): boolean;
        getComponentChanges(): $DataComponentPatch;
        getKeyOfType<T>(clazz: $Class<T>): T;
        getTooltipText(): $List<$Component>;
        getEmiStacks(): $List<$EmiStack>;
        getRemainder(): $EmiStack;
        setRemainder(stack: $EmiStack): $EmiStack;
        getChance(): number;
        setAmount(amount: number): $EmiStack;
        getTooltip(): $List<$ClientTooltipComponent>;
        comparison(comparison: $Comparison): $EmiStack;
        comparison(comparison: $Function_<$Comparison, $Comparison>): $EmiStack;
        getItemStack(): $ItemStack;
        getAmount(): number;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        setChance(arg0: number): $EmiIngredient;
        static EMPTY: $EmiStack;
        constructor();
        get name(): $Component;
        get empty(): boolean;
        get key(): $Object;
        get id(): $ResourceLocation;
        get componentChanges(): $DataComponentPatch;
        get tooltipText(): $List<$Component>;
        get emiStacks(): $List<$EmiStack>;
        get tooltip(): $List<$ClientTooltipComponent>;
        get itemStack(): $ItemStack;
    }
    export class $Comparison$HashFunction {
    }
    export interface $Comparison$HashFunction {
        hash(arg0: $EmiStack): number;
    }
    /**
     * Values that may be interpreted as {@link $Comparison$HashFunction}.
     */
    export type $Comparison$HashFunction_ = ((arg0: $EmiStack) => number);
    export class $EmiRegistryAdapter<T> {
        static simple<T>(clazz: $Class<T>, registry: $Registry<T>, constructor: $EmiRegistryAdapter$StackConstructor_<T>): $EmiRegistryAdapter<T>;
    }
    export interface $EmiRegistryAdapter<T> {
        of(arg0: T, arg1: $DataComponentPatch_, arg2: number): $EmiStack;
        getBaseClass(): $Class<T>;
        getRegistry(): $Registry<T>;
        get baseClass(): $Class<T>;
        get registry(): $Registry<T>;
    }
}
