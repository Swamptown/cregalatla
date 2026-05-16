import { $EmiStack, $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $Predicate } from "@package/java/util/function";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $WidgetHolder } from "@package/dev/emi/emi/api/widget";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EmiRenderable_, $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Comparator, $List, $List_, $Map } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as handler from "@package/dev/emi/emi/api/recipe/handler";

declare module "@package/dev/emi/emi/api/recipe" {
    export class $EmiPlayerInventory {
        static of(entity: $Player): $EmiPlayerInventory;
        isEqual(other: $EmiPlayerInventory): boolean;
        getCraftAvailability(recipe: $EmiRecipe): $List<boolean>;
        getCraftables(): $List<$EmiIngredient>;
        canCraft(recipe: $EmiRecipe, amount: number): boolean;
        canCraft(recipe: $EmiRecipe): boolean;
        getPredicate(): $Predicate<$EmiRecipe>;
        inventory: $Map<$EmiStack, $EmiStack>;
        /**
         * @deprecated
         */
        constructor(entity: $Player);
        constructor(stacks: $List_<$EmiStack>);
        get craftables(): $List<$EmiIngredient>;
        get predicate(): $Predicate<$EmiRecipe>;
    }
    export class $EmiRecipe {
    }
    export interface $EmiRecipe {
        getId(): $ResourceLocation;
        getInputs(): $List<$EmiIngredient>;
        getCatalysts(): $List<$EmiIngredient>;
        getDisplayWidth(): number;
        getDisplayHeight(): number;
        supportsRecipeTree(): boolean;
        hideCraftable(): boolean;
        getBackingRecipe(): $RecipeHolder<never>;
        getOutputs(): $List<$EmiStack>;
        getCategory(): $EmiRecipeCategory;
        addWidgets(arg0: $WidgetHolder): void;
        get id(): $ResourceLocation;
        get inputs(): $List<$EmiIngredient>;
        get catalysts(): $List<$EmiIngredient>;
        get displayWidth(): number;
        get displayHeight(): number;
        get backingRecipe(): $RecipeHolder<never>;
        get outputs(): $List<$EmiStack>;
        get category(): $EmiRecipeCategory;
    }
    export class $EmiRecipeCategory implements $EmiRenderable {
        getName(): $Component;
        getId(): $ResourceLocation;
        renderSimplified(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getTooltip(): $List<$ClientTooltipComponent>;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getSort(): $Comparator<$EmiRecipe>;
        simplified: $EmiRenderable;
        sorter: $Comparator<$EmiRecipe>;
        icon: $EmiRenderable;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_, sorter: $Comparator<$EmiRecipe>);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_, simplified: $EmiRenderable_);
        constructor(id: $ResourceLocation_, icon: $EmiRenderable_);
        get name(): $Component;
        get tooltip(): $List<$ClientTooltipComponent>;
        get sort(): $Comparator<$EmiRecipe>;
    }
    export class $EmiRecipeDecorator {
    }
    export interface $EmiRecipeDecorator {
        decorateRecipe(arg0: $EmiRecipe, arg1: $WidgetHolder): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiRecipeDecorator}.
     */
    export type $EmiRecipeDecorator_ = ((arg0: $EmiRecipe, arg1: $WidgetHolder) => void);
}
