import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $Function_ } from "@package/java/util/function";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $GlyphProviderDefinition, $GlyphProviderType, $GlyphProviderDefinition$Reference, $GlyphProviderDefinition$Loader } from "@package/net/minecraft/client/gui/font/providers";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $FontOption$Filter } from "@package/net/minecraft/client/gui/font";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/blaze3d/font" {
    export class $GlyphInfo$SpaceGlyphInfo {
    }
    export interface $GlyphInfo$SpaceGlyphInfo extends $GlyphInfo {
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
    }
    /**
     * Values that may be interpreted as {@link $GlyphInfo$SpaceGlyphInfo}.
     */
    export type $GlyphInfo$SpaceGlyphInfo_ = (() => void);
    export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable {
        filter(): $FontOption$Filter;
        provider(): $GlyphProvider;
        close(): void;
        constructor(arg0: $GlyphProvider_, arg1: $FontOption$Filter);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider$Conditional}.
     */
    export type $GlyphProvider$Conditional_ = { filter?: $FontOption$Filter, provider?: $GlyphProvider_,  } | [filter?: $FontOption$Filter, provider?: $GlyphProvider_, ];
    export class $GlyphInfo {
    }
    export interface $GlyphInfo {
        getBoldOffset(): number;
        getShadowOffset(): number;
        getAdvance(): number;
        getAdvance(arg0: boolean): number;
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        get boldOffset(): number;
        get shadowOffset(): number;
    }
    export class $TrueTypeGlyphProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        close(): void;
        constructor(arg0: $ByteBuffer, arg1: $FT_Face, arg2: number, arg3: number, arg4: number, arg5: number, arg6: string);
        get supportedGlyphs(): $IntSet;
    }
    export class $SpaceProvider$Definition extends $Record implements $GlyphProviderDefinition {
        advances(): $Map<number, number>;
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$SpaceProvider$Definition>;
        constructor(arg0: $Map_<number, number>);
    }
    /**
     * Values that may be interpreted as {@link $SpaceProvider$Definition}.
     */
    export type $SpaceProvider$Definition_ = { advances?: $Map_<number, number>,  } | [advances?: $Map_<number, number>, ];
    export class $TrueTypeGlyphProvider$Glyph implements $GlyphInfo {
        getBoldOffset(): number;
        getShadowOffset(): number;
        getAdvance(arg0: boolean): number;
        get boldOffset(): number;
        get shadowOffset(): number;
    }
    export class $SpaceProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        close(): void;
        constructor(arg0: $Map_<number, number>);
        get supportedGlyphs(): $IntSet;
    }
    export class $SheetGlyphInfo {
    }
    export interface $SheetGlyphInfo {
        getPixelWidth(): number;
        getPixelHeight(): number;
        getOversample(): number;
        getBearingLeft(): number;
        getBearingTop(): number;
        getTop(): number;
        getRight(): number;
        getLeft(): number;
        upload(arg0: number, arg1: number): void;
        isColored(): boolean;
        getBottom(): number;
        get pixelWidth(): number;
        get pixelHeight(): number;
        get oversample(): number;
        get bearingLeft(): number;
        get bearingTop(): number;
        get top(): number;
        get right(): number;
        get left(): number;
        get colored(): boolean;
        get bottom(): number;
    }
    export class $GlyphProvider {
        static BASELINE: number;
    }
    export interface $GlyphProvider extends $AutoCloseable {
        getSupportedGlyphs(): $IntSet;
        getGlyph(arg0: number): $GlyphInfo;
        close(): void;
        get supportedGlyphs(): $IntSet;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider}.
     */
    export type $GlyphProvider_ = (() => $IntSet);
}
