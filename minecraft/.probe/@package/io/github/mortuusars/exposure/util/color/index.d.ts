import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/io/github/mortuusars/exposure/util/color" {
    export class $Color$Unbounded extends $Record {
        clamp(): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color$Unbounded;
        constructor(r: number, g: number, b: number, a: number);
    }
    /**
     * Values that may be interpreted as {@link $Color$Unbounded}.
     */
    export type $Color$Unbounded_ = { r?: number, a?: number, g?: number, b?: number,  } | [r?: number, a?: number, g?: number, b?: number, ];
    export class $Color extends $Record {
        static clamp(channel: number): number;
        add(other: $Color_): $Color;
        b(): number;
        a(): number;
        g(): number;
        r(): number;
        multiply(scalar: number): $Color;
        static red(argb: number): number;
        subtract(other: $Color_): $Color;
        withAlpha(alpha: number): $Color;
        getARGB(): number;
        static abgr(abgr: number): $Color;
        static bgr(bgr: number): $Color;
        static argbF(a: number, r: number, g: number, b: number): $Color;
        static rgbF(r: number, g: number, b: number): $Color;
        getR(): number;
        getAF(): number;
        getRF(): number;
        getGF(): number;
        getBF(): number;
        getABGR(): number;
        getBGR(): number;
        asHexString(): string;
        withAlphaF(alpha: number): $Color;
        addUnbounded(other: $Color_): $Color$Unbounded;
        addUnbounded(other: $Color$Unbounded_): $Color$Unbounded;
        subtractUnbounded(other: $Color_): $Color$Unbounded;
        squaredDifferenceTo(argb: number): number;
        squaredDifferenceTo(color: $Color_): number;
        static alphaF(argb: number): number;
        static redF(argb: number): number;
        static greenF(argb: number): number;
        static blueF(argb: number): number;
        static ABGRtoARGB(ABGR: number): number;
        static ARGBtoABGR(ARGB: number): number;
        static fromHex(hexColor: string): $Color;
        getG(): number;
        static pack(alpha: number, red: number, green: number, blue: number): number;
        getA(): number;
        getB(): number;
        getRGB(): number;
        static rgb(rgb: number): $Color;
        static rgb(r: number, g: number, b: number): $Color;
        static blue(argb: number): number;
        static green(argb: number): number;
        static alpha(argb: number): number;
        static argb(argb: number): $Color;
        static argb(a: number, r: number, g: number, b: number): $Color;
        static WHITE: $Color;
        static CODEC: $Codec<$Color>;
        static HEX_STRING_CODEC: $Codec<$Color>;
        static BLACK: $Color;
        static TRANSPARENT: $Color;
        constructor(a: number, r: number, g: number, b: number);
        get ARGB(): number;
        get AF(): number;
        get RF(): number;
        get GF(): number;
        get BF(): number;
        get ABGR(): number;
        get BGR(): number;
        get RGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $Color}.
     */
    export type $Color_ = { r?: number, a?: number, g?: number, b?: number,  } | [r?: number, a?: number, g?: number, b?: number, ];
}
