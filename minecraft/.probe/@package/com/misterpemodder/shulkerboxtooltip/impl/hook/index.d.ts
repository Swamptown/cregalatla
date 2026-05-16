import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $List_, $List } from "@package/java/util";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";

declare module "@package/com/misterpemodder/shulkerboxtooltip/impl/hook" {
    export class $GuiGraphicsExtensions {
    }
    export interface $GuiGraphicsExtensions {
        getMouseX(): number;
        getMouseY(): number;
        getTooltipTopYPosition(): number;
        getTooltipBottomYPosition(): number;
        setTooltipTopYPosition(arg0: number): void;
        setTooltipBottomYPosition(arg0: number): void;
        setMouseX(arg0: number): void;
        setMouseY(arg0: number): void;
    }
    export class $ContainerScreenDrawTooltip {
    }
    export interface $ContainerScreenDrawTooltip {
        shulkerboxtooltip$drawMouseoverTooltip(arg0: $GuiGraphics, arg1: $Font, arg2: $List_<$Component_>, arg3: ($TooltipComponent) | undefined, arg4: $ItemStack_, arg5: number, arg6: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ContainerScreenDrawTooltip}.
     */
    export type $ContainerScreenDrawTooltip_ = ((arg0: $GuiGraphics, arg1: $Font, arg2: $List<$Component>, arg3: ($TooltipComponent) | undefined, arg4: $ItemStack, arg5: number, arg6: number) => void);
    export class $ContainerScreenLockTooltip {
    }
    export interface $ContainerScreenLockTooltip {
        shulkerboxtooltip$lockTooltipPosition(arg0: $GuiGraphics, arg1: $Font, arg2: $List_<$Component_>, arg3: ($TooltipComponent) | undefined, arg4: $ItemStack_, arg5: number, arg6: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ContainerScreenLockTooltip}.
     */
    export type $ContainerScreenLockTooltip_ = ((arg0: $GuiGraphics, arg1: $Font, arg2: $List<$Component>, arg3: ($TooltipComponent) | undefined, arg4: $ItemStack, arg5: number, arg6: number) => void);
}
