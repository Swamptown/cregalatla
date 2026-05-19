import { $AbstractWidget, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        getXWithOffset(): number;
        getRenderYWithOffset(): number;
        getRenderY(): number;
        selectId(arg0: number, arg1: boolean): void;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        setClosed(arg0: boolean): void;
        getSelected(): number;
        size(): number;
        isClosed(): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        setActive(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static LINE_HEIGHT: number;
        packedFGColor: number;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        height: number;
        get XWithOffset(): number;
        get renderYWithOffset(): number;
        get renderY(): number;
        get selected(): number;
    }
}
