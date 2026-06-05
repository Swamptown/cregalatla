import { $Function_ } from "@package/java/util/function";
import { $GlyphInfo, $SheetGlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ReverseRenderableBakedGlyph } from "@package/com/kipti/bnb/mixin_accessor";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        a: number;
        r: number;
        b: number;
        depth: number;
        y0: number;
        g: number;
        x0: number;
        y1: number;
        x1: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $BakedGlyph implements $ReverseRenderableBakedGlyph {
        renderEffect(arg0: $BakedGlyph$Effect, arg1: $Matrix4f, arg2: $VertexConsumer, arg3: number): void;
        bits_n_bobs$renderReverse(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        renderType(arg0: $Font$DisplayMode_): $RenderType;
        render(arg0: boolean, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $GlyphRenderTypes_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
    }
    export class $SpecialGlyphs$PixelProvider {
    }
    export interface $SpecialGlyphs$PixelProvider {
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs$PixelProvider}.
     */
    export type $SpecialGlyphs$PixelProvider_ = (() => void);
    export class $EmptyGlyph extends $BakedGlyph {
        static INSTANCE: $EmptyGlyph;
        constructor();
    }
    export class $SpecialGlyphs extends $Enum<$SpecialGlyphs> implements $GlyphInfo {
        getAdvance(): number;
        static values(): $SpecialGlyphs[];
        static valueOf(arg0: string): $SpecialGlyphs;
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getBoldOffset(): number;
        getShadowOffset(): number;
        getAdvance(arg0: boolean): number;
        image: $NativeImage;
        static WHITE: $SpecialGlyphs;
        static MISSING: $SpecialGlyphs;
        get boldOffset(): number;
        get shadowOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs}.
     */
    export type $SpecialGlyphs_ = "white" | "missing";
}
