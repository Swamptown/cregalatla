import { $IRecipeLayoutBuilder, $IIngredientConsumer, $ITooltipBuilder, $IRecipeSlotBuilder } from "@package/mezz/jei/api/gui/builder";
import { $IIngredientType_, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Stream } from "@package/java/util/stream";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RecipeIngredientRole, $RecipeIngredientRole_ } from "@package/mezz/jei/api/recipe";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/mezz/jei/api/gui/ingredient" {
    export class $IRecipeSlotView {
    }
    export interface $IRecipeSlotView {
        isEmpty(): boolean;
        getRole(): $RecipeIngredientRole;
        getAllIngredients(): $Stream<$ITypedIngredient<never>>;
        getDisplayedIngredient<T>(arg0: $IIngredientType_<T>): (T) | undefined;
        getDisplayedIngredient(): ($ITypedIngredient<never>) | undefined;
        getAllIngredientsList(): $List<$ITypedIngredient<never>>;
        drawHighlight(arg0: $GuiGraphics, arg1: number): void;
        getDisplayedItemStack(): ($ItemStack) | undefined;
        getSlotName(): (string) | undefined;
        getItemStacks(): $Stream<$ItemStack>;
        getIngredients<T>(arg0: $IIngredientType_<T>): $Stream<T>;
        get empty(): boolean;
        get role(): $RecipeIngredientRole;
        get allIngredients(): $Stream<$ITypedIngredient<never>>;
        get allIngredientsList(): $List<$ITypedIngredient<never>>;
        get displayedItemStack(): ($ItemStack) | undefined;
        get slotName(): (string) | undefined;
        get itemStacks(): $Stream<$ItemStack>;
    }
    export class $IRecipeSlotRichTooltipCallback {
    }
    export interface $IRecipeSlotRichTooltipCallback {
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotRichTooltipCallback}.
     */
    export type $IRecipeSlotRichTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $ITooltipBuilder) => void);
    export class $IRecipeSlotsView {
    }
    export interface $IRecipeSlotsView {
        findSlotByName(arg0: string): ($IRecipeSlotView) | undefined;
        getSlotViews(): $List<$IRecipeSlotView>;
        getSlotViews(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotView>;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotsView}.
     */
    export type $IRecipeSlotsView_ = (() => $List_<$IRecipeSlotView>);
    export class $IRecipeSlotDrawable {
    }
    export interface $IRecipeSlotDrawable extends $IRecipeSlotView {
        drawHoverOverlays(arg0: $GuiGraphics): void;
        drawTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        createDisplayOverrides(): $IIngredientConsumer;
        clearDisplayOverrides(): void;
        /**
         * @deprecated
         */
        getRect(): $Rect2i;
        /**
         * @deprecated
         */
        addTooltipCallback(arg0: $IRecipeSlotTooltipCallback_): void;
        getAreaIncludingBackground(): $Rect2i;
        /**
         * @deprecated
         */
        getTooltip(): $List<$Component>;
        /**
         * @deprecated
         */
        getTooltip(arg0: $ITooltipBuilder): void;
        draw(arg0: $GuiGraphics): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        setPosition(arg0: number, arg1: number): void;
        get rect(): $Rect2i;
        get areaIncludingBackground(): $Rect2i;
    }
    export class $IRecipeSlotDrawablesView {
    }
    export interface $IRecipeSlotDrawablesView {
        findSlotByName(arg0: string): ($IRecipeSlotDrawable) | undefined;
        getSlots(arg0: $RecipeIngredientRole_): $List<$IRecipeSlotDrawable>;
        getSlots(): $List<$IRecipeSlotDrawable>;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotDrawablesView}.
     */
    export type $IRecipeSlotDrawablesView_ = (() => $List_<$IRecipeSlotDrawable>);
    export class $ICraftingGridHelper {
    }
    export interface $ICraftingGridHelper {
        createAndSetIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Ingredient_>, arg2: number, arg3: number): void;
        setInputs<T>(arg0: $List_<$IRecipeSlotBuilder>, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): void;
        createAndSetNamedInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$Pair<string, $List_<T>>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
        createAndSetNamedInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $List_<$ItemStack_>>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetInputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$List_<$ItemStack_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
        createAndSetInputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<$List_<T>>, arg3: number, arg4: number): $List<$IRecipeSlotBuilder>;
        createAndSetOutputs(arg0: $IRecipeLayoutBuilder, arg1: $List_<$ItemStack_>): $IRecipeSlotBuilder;
        createAndSetOutputs<T>(arg0: $IRecipeLayoutBuilder, arg1: $IIngredientType_<T>, arg2: $List_<T>): $IRecipeSlotBuilder;
        createAndSetNamedIngredients(arg0: $IRecipeLayoutBuilder, arg1: $List_<$Pair<string, $Ingredient_>>, arg2: number, arg3: number): $List<$IRecipeSlotBuilder>;
    }
    /**
     * @deprecated
     */
    export class $IRecipeSlotTooltipCallback {
    }
    export interface $IRecipeSlotTooltipCallback {
        /**
         * @deprecated
         */
        onRichTooltip(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        onTooltip(arg0: $IRecipeSlotView, arg1: $List_<$Component_>): void;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeSlotTooltipCallback}.
     */
    export type $IRecipeSlotTooltipCallback_ = ((arg0: $IRecipeSlotView, arg1: $List<$Component>) => void);
}
