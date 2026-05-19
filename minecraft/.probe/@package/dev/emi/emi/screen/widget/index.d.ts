import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $Supplier_, $BooleanSupplier_, $IntSupplier_ } from "@package/java/util/function";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Button$OnPress_, $Button$CreateNarration, $WidgetTooltipHolder, $WidgetSprites, $Button } from "@package/net/minecraft/client/gui/components";
import { $List, $List_ } from "@package/java/util";
export * as config from "@package/dev/emi/emi/screen/widget/config";

declare module "@package/dev/emi/emi/screen/widget" {
    export class $SizedButtonWidget extends $Button implements $GlobalMixin {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $Button$OnPress_);
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $Button$OnPress_, vOffset: $IntSupplier_, text: $Supplier_<$List<$Component>>);
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $Button$OnPress_, vOffset: $IntSupplier_);
        constructor(x: number, y: number, width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $Button$OnPress_, text: $List_<$Component_>);
    }
}
