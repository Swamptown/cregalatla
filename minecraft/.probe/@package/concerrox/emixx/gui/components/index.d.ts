import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Button$OnPress_, $Button$CreateNarration, $WidgetTooltipHolder, $AbstractButton, $WidgetSprites } from "@package/net/minecraft/client/gui/components";
import { $SizedButtonWidget } from "@package/dev/emi/emi/screen/widget";
import { $Object } from "@package/java/lang";

declare module "@package/concerrox/emixx/gui/components" {
    export class $Switch$OnCheckedChangeListener {
        static Companion: $Switch$OnCheckedChangeListener$Companion;
    }
    export interface $Switch$OnCheckedChangeListener {
        onCheckedChanged(arg0: $Switch, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Switch$OnCheckedChangeListener}.
     */
    export type $Switch$OnCheckedChangeListener_ = ((arg0: $Switch, arg1: boolean) => void);
    export class $ImageButton$Companion {
        getTEXTURE$emixx_common(): $ResourceLocation;
        constructor($constructor_marker: $DefaultConstructorMarker);
        get TEXTURE$emixx_common(): $ResourceLocation;
    }
    export class $ImageButton extends $SizedButtonWidget {
        static withTexture$default(arg0: $ImageButton, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: $Object): $ImageButton;
        static access$getTEXTURE$cp(): $ResourceLocation;
        matchScreenManagerVisibility(): $ImageButton;
        withTexture(customTexture: $ResourceLocation_, width: number, height: number): $ImageButton;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        static Companion: $ImageButton$Companion;
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
        constructor(width: number, height: number, u: number, v: number, isActive: $BooleanSupplier_, action: $Button$OnPress_);
    }
    export class $Switch$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $Switch extends $AbstractButton {
        static access$setOnCheckedChangeListener$p($this: $Switch, <set-?>: $Switch$OnCheckedChangeListener_): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        static Companion: $Switch$Companion;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, message: $Component_, isChecked: boolean, $constructor_marker: $DefaultConstructorMarker);
    }
    export class $Switch$Builder {
        setChecked(isChecked: boolean): $Switch$Builder;
        setOnCheckedChangeListener(<set-?>: $Switch$OnCheckedChangeListener_): void;
        getOnCheckedChangeListener(): $Switch$OnCheckedChangeListener;
        getY(): number;
        build(): $Switch;
        setX(<set-?>: number): void;
        setY(<set-?>: number): void;
        getX(): number;
        constructor(message: $Component_);
        set checked(value: boolean);
    }
    export class $Switch$OnCheckedChangeListener$Companion {
        getNO_OPERATION(): $Switch$OnCheckedChangeListener;
        get NO_OPERATION(): $Switch$OnCheckedChangeListener;
    }
}
