import { $Color } from "@package/java/awt";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Record } from "@package/java/lang";
export * as ui from "@package/de/keksuccino/fancymenu/util/rendering/ui";

declare module "@package/de/keksuccino/fancymenu/util/rendering" {
    export class $AspectRatio {
        getInputWidth(): number;
        getInputHeight(): number;
        getAspectRatioSizeByMaximumSize(arg0: number, arg1: number): number[];
        getAspectRatioHeight(arg0: number): number;
        getAspectRatioWidth(arg0: number): number;
        getAspectRatioSizeByMinimumSize(arg0: number, arg1: number): number[];
        constructor(arg0: number, arg1: number);
        get inputWidth(): number;
        get inputHeight(): number;
    }
    export class $DrawableColor {
        getAsFloats(): $DrawableColor$FloatColor;
        getHex(): string;
        static ofHtml(arg0: string): $DrawableColor;
        setAsShaderColor(arg0: $GuiGraphics): void;
        setAsShaderColor(arg0: $GuiGraphics, arg1: number): void;
        static of(arg0: number, arg1: number, arg2: number): $DrawableColor;
        static of(arg0: string): $DrawableColor;
        static of(arg0: number): $DrawableColor;
        static of(arg0: $Color): $DrawableColor;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $DrawableColor;
        copy(): $DrawableColor;
        getColor(): $Color;
        getColorInt(): number;
        resetShaderColor(arg0: $GuiGraphics): void;
        getColorIntWithAlpha(arg0: number): number;
        static WHITE: $DrawableColor;
        static BLACK: $DrawableColor;
        static FULLY_TRANSPARENT: $DrawableColor;
        static EMPTY: $DrawableColor;
        get asFloats(): $DrawableColor$FloatColor;
        get hex(): string;
        get color(): $Color;
        get colorInt(): number;
    }
    export class $DrawableColor$FloatColor extends $Record {
        red(): number;
        blue(): number;
        green(): number;
        alpha(): number;
        constructor(red: number, green: number, blue: number, alpha: number);
    }
    /**
     * Values that may be interpreted as {@link $DrawableColor$FloatColor}.
     */
    export type $DrawableColor$FloatColor_ = { alpha?: number, red?: number, blue?: number, green?: number,  } | [alpha?: number, red?: number, blue?: number, green?: number, ];
}
