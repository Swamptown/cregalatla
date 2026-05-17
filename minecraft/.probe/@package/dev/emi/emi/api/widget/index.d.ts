import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $BiFunction, $Supplier_, $Function_, $BiFunction_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EmiTexture } from "@package/dev/emi/emi/api/render";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $EmiRecipe } from "@package/dev/emi/emi/api/recipe";
import { $Random, $List, $List_ } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Enum, $Record } from "@package/java/lang";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";

declare module "@package/dev/emi/emi/api/widget" {
    export class $TankWidget extends $SlotWidget {
        constructor(stack: $EmiIngredient, x: number, y: number, width: number, height: number, capacity: number);
    }
    export class $DrawableWidget extends $Widget implements $WidgetTooltipHolder<$DrawableWidget> {
        tooltip(tooltipSupplier: $BiFunction_<number, number, $List<$ClientTooltipComponent>>): $DrawableWidget;
        tooltipText(tooltip: $List_<$Component_>): $DrawableWidget;
        tooltipText(tooltipSupplier: $BiFunction_<number, number, $List<$Component>>): $DrawableWidget;
        tooltip(tooltip: $List_<$ClientTooltipComponent>): $DrawableWidget;
        constructor(x: number, y: number, w: number, h: number, consumer: $DrawableWidget$DrawableWidgetConsumer_);
    }
    export class $Widget implements $Renderable {
        getBounds(): $Bounds;
        getTooltip(mouseX: number, mouseY: number): $List<$ClientTooltipComponent>;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseClicked(mouseX: number, mouseY: number, button: number): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        constructor();
        get bounds(): $Bounds;
    }
    export class $TextureWidget extends $Widget implements $WidgetTooltipHolder<$TextureWidget> {
        tooltip(tooltipSupplier: $BiFunction_<number, number, $List<$ClientTooltipComponent>>): $TextureWidget;
        tooltipText(tooltip: $List_<$Component_>): $TextureWidget;
        tooltipText(tooltipSupplier: $BiFunction_<number, number, $List<$Component>>): $TextureWidget;
        tooltip(tooltip: $List_<$ClientTooltipComponent>): $TextureWidget;
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number);
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number);
    }
    export class $SlotWidget extends $Widget {
        getStack(): $EmiIngredient;
        drawStack(draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        drawSlotHighlight(draw: $GuiGraphics, bounds: $Bounds_): void;
        shouldDrawSlotHighlight(mouseX: number, mouseY: number): boolean;
        drawBack(drawBack: boolean): $SlotWidget;
        catalyst(catalyst: boolean): $SlotWidget;
        appendTooltip(text: $Component_): $SlotWidget;
        appendTooltip(_function: $Function_<$EmiIngredient, $ClientTooltipComponent>): $SlotWidget;
        appendTooltip(supplier: $Supplier_<$ClientTooltipComponent>): $SlotWidget;
        drawOverlay(draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        large(large: boolean): $SlotWidget;
        getRecipe(): $EmiRecipe;
        recipeContext(recipe: $EmiRecipe): $SlotWidget;
        backgroundTexture(id: $ResourceLocation_, u: number, v: number): $SlotWidget;
        customBackground(id: $ResourceLocation_, u: number, v: number, width: number, height: number): $SlotWidget;
        drawBackground(draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        constructor(stack: $EmiIngredient, x: number, y: number);
        get stack(): $EmiIngredient;
        get recipe(): $EmiRecipe;
    }
    export class $ButtonWidget$ClickAction {
    }
    export interface $ButtonWidget$ClickAction {
        click(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ButtonWidget$ClickAction}.
     */
    export type $ButtonWidget$ClickAction_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $TextWidget extends $Widget {
        horizontalAlign(alignment: $TextWidget$Alignment_): $TextWidget;
        verticalAlign(alignment: $TextWidget$Alignment_): $TextWidget;
        constructor(text: $FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean);
    }
    export class $Bounds extends $Record {
        bottom(): number;
        x(): number;
        contains(x: number, y: number): boolean;
        empty(): boolean;
        top(): number;
        y(): number;
        left(): number;
        right(): number;
        width(): number;
        overlap(another: $Bounds_): $Bounds;
        height(): number;
        static EMPTY: $Bounds;
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $Bounds}.
     */
    export type $Bounds_ = { width?: number, height?: number, x?: number, y?: number,  } | [width?: number, height?: number, x?: number, y?: number, ];
    export class $WidgetTooltipHolder<T> {
    }
    export interface $WidgetTooltipHolder<T> {
        tooltipText(tooltip: $List_<$Component_>): T;
        tooltipText(tooltipSupplier: $BiFunction_<number, number, $List<$Component>>): T;
        tooltip(tooltip: $List_<$ClientTooltipComponent>): T;
        tooltip(arg0: $BiFunction_<number, number, $List<$ClientTooltipComponent>>): T;
    }
    /**
     * Values that may be interpreted as {@link $WidgetTooltipHolder}.
     */
    export type $WidgetTooltipHolder_<T> = ((arg0: $BiFunction<number, number, $List<$ClientTooltipComponent>>) => T);
    export class $AnimatedTextureWidget extends $TextureWidget {
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean);
        constructor(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean);
    }
    export class $DrawableWidget$DrawableWidgetConsumer {
    }
    export interface $DrawableWidget$DrawableWidgetConsumer {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DrawableWidget$DrawableWidgetConsumer}.
     */
    export type $DrawableWidget$DrawableWidgetConsumer_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $FillingArrowWidget extends $AnimatedTextureWidget {
        constructor(x: number, y: number, time: number);
    }
    export class $GeneratedSlotWidget extends $SlotWidget {
        constructor(stackSupplier: $Function_<$Random, $EmiIngredient>, unique: number, x: number, y: number);
    }
    export class $ButtonWidget extends $Widget {
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_);
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, texture: $ResourceLocation_, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_);
    }
    export class $TextWidget$Alignment extends $Enum<$TextWidget$Alignment> {
        static values(): $TextWidget$Alignment[];
        static valueOf(name: string): $TextWidget$Alignment;
        offset(length: number): number;
        static CENTER: $TextWidget$Alignment;
        static START: $TextWidget$Alignment;
        static END: $TextWidget$Alignment;
    }
    /**
     * Values that may be interpreted as {@link $TextWidget$Alignment}.
     */
    export type $TextWidget$Alignment_ = "start" | "center" | "end";
    export class $WidgetHolder {
    }
    export interface $WidgetHolder {
        add<T extends $Widget>(arg0: T): T;
        addTank(stack: $EmiIngredient, x: number, y: number, width: number, height: number, capacity: number): $TankWidget;
        addDrawable(x: number, y: number, width: number, height: number, consumer: $DrawableWidget$DrawableWidgetConsumer_): $DrawableWidget;
        addTooltipText(tooltip: $List_<$Component_>, x: number, y: number, width: number, height: number): $TooltipWidget;
        addFillingArrow(x: number, y: number, time: number): $FillingArrowWidget;
        addAnimatedTexture(texture: $EmiTexture, x: number, y: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean): $AnimatedTextureWidget;
        addAnimatedTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean): $AnimatedTextureWidget;
        addAnimatedTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, time: number, horizontal: boolean, endToStart: boolean, fullToEmpty: boolean): $AnimatedTextureWidget;
        addGeneratedSlot(stackSupplier: $Function_<$Random, $EmiIngredient>, unique: number, x: number, y: number): $GeneratedSlotWidget;
        addButton(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_): $ButtonWidget;
        addButton(x: number, y: number, width: number, height: number, u: number, v: number, texture: $ResourceLocation_, isActive: $BooleanSupplier_, action: $ButtonWidget$ClickAction_): $ButtonWidget;
        addTexture(texture: $EmiTexture, x: number, y: number): $TextureWidget;
        addTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number): $TextureWidget;
        addTexture(texture: $ResourceLocation_, x: number, y: number, width: number, height: number, u: number, v: number): $TextureWidget;
        addTooltip(tooltip: $List_<$ClientTooltipComponent>, x: number, y: number, width: number, height: number): $TooltipWidget;
        addTooltip(tooltipSupplier: $BiFunction_<number, number, $List<$ClientTooltipComponent>>, x: number, y: number, width: number, height: number): $TooltipWidget;
        addSlot(x: number, y: number): $SlotWidget;
        addSlot(ingredient: $EmiIngredient, x: number, y: number): $SlotWidget;
        addText(text: $FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean): $TextWidget;
        addText(text: $Component_, x: number, y: number, color: number, shadow: boolean): $TextWidget;
        getWidth(): number;
        getHeight(): number;
        get width(): number;
        get height(): number;
    }
    export class $TooltipWidget extends $Widget {
        constructor(tooltipSupplier: $BiFunction_<number, number, $List<$ClientTooltipComponent>>, x: number, y: number, width: number, height: number);
    }
}
