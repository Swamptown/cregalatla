import { $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $ICodecHelper } from "@package/mezz/jei/api/helpers";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";
export * as extensions from "@package/mezz/jei/api/recipe/category/extensions";

declare module "@package/mezz/jei/api/recipe/category" {
    export class $IRecipeCategory<T> {
    }
    export interface $IRecipeCategory<T> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
        onDisplayedIngredientsUpdate(arg0: T, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: T, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        handleInput(arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        isHandled(arg0: T): boolean;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        needsRecipeBorder(): boolean;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        getRegistryName(arg0: T): $ResourceLocation;
        getRecipeType(): $RecipeType<T>;
        getIcon(): $IDrawable;
        getTitle(): $Component;
        draw(arg0: T, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<T>;
        getWidth(): number;
        getHeight(): number;
        get background(): $IDrawable;
        get recipeType(): $RecipeType<T>;
        get icon(): $IDrawable;
        get title(): $Component;
        get width(): number;
        get height(): number;
    }
}
