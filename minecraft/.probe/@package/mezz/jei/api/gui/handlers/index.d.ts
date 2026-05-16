import { $ITooltipBuilder, $IClickableIngredientFactory } from "@package/mezz/jei/api/gui/builder";
import { $Consumer, $Function } from "@package/java/util/function";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $List, $Collection } from "@package/java/util";
import { $Class } from "@package/java/lang";
import { $IRecipesGui, $IClickableIngredient } from "@package/mezz/jei/api/runtime";

declare module "@package/mezz/jei/api/gui/handlers" {
    export class $IGuiClickableArea {
        static createBasic(arg0: number, arg1: number, arg2: number, arg3: number, ...arg4: $RecipeType<never>[]): $IGuiClickableArea;
    }
    export interface $IGuiClickableArea {
        getArea(): $Rect2i;
        /**
         * @deprecated
         */
        getTooltipStrings(): $List<$Component>;
        getTooltip(arg0: $ITooltipBuilder): void;
        isTooltipEnabled(): boolean;
        onClick(arg0: $IFocusFactory, arg1: $IRecipesGui): void;
        get area(): $Rect2i;
        get tooltipStrings(): $List<$Component>;
        get tooltipEnabled(): boolean;
    }
    export class $IGuiContainerHandler<T extends $AbstractContainerScreen<never>> {
    }
    export interface $IGuiContainerHandler<T extends $AbstractContainerScreen<never>> {
        /**
         * @deprecated
         */
        getClickableIngredientUnderMouse(arg0: T, arg1: number, arg2: number): ($IClickableIngredient<never>) | undefined;
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: T, arg2: number, arg3: number): ($IClickableIngredient<never>) | undefined;
        getGuiExtraAreas(arg0: T): $List<$Rect2i>;
        getGuiClickableAreas(arg0: T, arg1: number, arg2: number): $Collection<$IGuiClickableArea>;
    }
    export class $IGhostIngredientHandler<T extends $Screen> {
    }
    export interface $IGhostIngredientHandler<T extends $Screen> {
        getTargetsTyped<I>(arg0: T, arg1: $ITypedIngredient<I>, arg2: boolean): $List<$IGhostIngredientHandler$Target<I>>;
        onComplete(): void;
        shouldHighlightTargets(): boolean;
    }
    export class $IGuiProperties {
    }
    export interface $IGuiProperties {
        guiXSize(): number;
        guiYSize(): number;
        guiLeft(): number;
        guiTop(): number;
        screenWidth(): number;
        screenHeight(): number;
        screenClass(): $Class<$Screen>;
    }
    export class $IScreenHandler<T extends $Screen> {
    }
    export interface $IScreenHandler<T extends $Screen> extends $Function<T, $IGuiProperties> {
        apply(arg0: T): $IGuiProperties;
    }
    /**
     * Values that may be interpreted as {@link $IScreenHandler}.
     */
    export type $IScreenHandler_<T> = ((arg0: T) => $IGuiProperties);
    export class $IGhostIngredientHandler$Target<I> {
    }
    export interface $IGhostIngredientHandler$Target<I> extends $Consumer<I> {
        accept(arg0: I): void;
        getArea(): $Rect2i;
        get area(): $Rect2i;
    }
    export class $IGlobalGuiHandler {
    }
    export interface $IGlobalGuiHandler {
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: number, arg2: number): ($IClickableIngredient<never>) | undefined;
        /**
         * @deprecated
         */
        getClickableIngredientUnderMouse(arg0: number, arg1: number): ($IClickableIngredient<never>) | undefined;
        getGuiExtraAreas(): $Collection<$Rect2i>;
        get guiExtraAreas(): $Collection<$Rect2i>;
    }
}
