import { $ColorPalette } from "@package/io/github/mortuusars/exposure/data";
import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $DitherMode, $DitherMode_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ExposureType, $ExposureType_ } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/github/mortuusars/exposure/world/camera/film/properties" {
    export class $Levels extends $Record {
        shadows(): number;
        midtones(): number;
        highlights(): number;
        black(): number;
        white(): number;
        static CODEC: $Codec<$Levels>;
        static EMPTY: $Levels;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Levels>;
        constructor(shadows: number, midtones: number, highlights: number, black: number, white: number);
    }
    /**
     * Values that may be interpreted as {@link $Levels}.
     */
    export type $Levels_ = { highlights?: number, white?: number, shadows?: number, black?: number, midtones?: number,  } | [highlights?: number, white?: number, shadows?: number, black?: number, midtones?: number, ];
    export class $HSB extends $Record {
        hue(): number;
        saturation(): number;
        brightness(): number;
        static CODEC: $Codec<$HSB>;
        static EMPTY: $HSB;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $HSB>;
        constructor(hue: number, saturation: number, brightness: number);
    }
    /**
     * Values that may be interpreted as {@link $HSB}.
     */
    export type $HSB_ = { hue?: number, saturation?: number, brightness?: number,  } | [hue?: number, saturation?: number, brightness?: number, ];
    export class $ColorBalance extends $Record {
        b(): number;
        g(): number;
        r(): number;
        static CODEC: $Codec<$ColorBalance>;
        static EMPTY: $ColorBalance;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ColorBalance>;
        constructor(r: number, g: number, b: number);
    }
    /**
     * Values that may be interpreted as {@link $ColorBalance}.
     */
    export type $ColorBalance_ = { b?: number, r?: number, g?: number,  } | [b?: number, r?: number, g?: number, ];
    export class $FilmProperties extends $Record {
        size(): (number) | undefined;
        type(): $ExposureType;
        getSize(): number;
        style(): $FilmStyle;
        colorPalette(): $ResourceKey<$ColorPalette>;
        getColorPalette(access: $RegistryAccess): $Holder<$ColorPalette>;
        withType(type: $ExposureType_): $FilmProperties;
        withStyle(style: $FilmStyle_): $FilmProperties;
        withSize(size: number): $FilmProperties;
        ditherMode(): $DitherMode;
        withColorPalette(colorPalette: $ResourceKey_<$ColorPalette>): $FilmProperties;
        withDitherMode(ditherMode: $DitherMode_): $FilmProperties;
        static CODEC: $Codec<$FilmProperties>;
        static EMPTY: $FilmProperties;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FilmProperties>;
        constructor(type: $ExposureType_, size: (number) | undefined, colorPalette: $ResourceKey_<$ColorPalette>, ditherMode: $DitherMode_, style: $FilmStyle_);
    }
    /**
     * Values that may be interpreted as {@link $FilmProperties}.
     */
    export type $FilmProperties_ = { ditherMode?: $DitherMode_, type?: $ExposureType_, style?: $FilmStyle_, colorPalette?: $ResourceKey_<$ColorPalette>, size?: (number) | undefined,  } | [ditherMode?: $DitherMode_, type?: $ExposureType_, style?: $FilmStyle_, colorPalette?: $ResourceKey_<$ColorPalette>, size?: (number) | undefined, ];
    export class $FilmStyle extends $Record {
        static create(): $FilmStyle;
        levels(): $Levels;
        contrast(): number;
        hsb(): $HSB;
        colorBalance(): $ColorBalance;
        withSensitivity(sensitivity: number): $FilmStyle;
        withNoise(noise: number): $FilmStyle;
        withContrast(contrast: number): $FilmStyle;
        withLevels(levels: $Levels_): $FilmStyle;
        withHSB(hsb: $HSB_): $FilmStyle;
        withColorBalance(colorBalance: $ColorBalance_): $FilmStyle;
        noise(): number;
        sensitivity(): number;
        static CODEC: $Codec<$FilmStyle>;
        static EMPTY: $FilmStyle;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FilmStyle>;
        constructor(sensitivity: number, contrast: number, levels: $Levels_, hsb: $HSB_, colorBalance: $ColorBalance_, noise: number);
    }
    /**
     * Values that may be interpreted as {@link $FilmStyle}.
     */
    export type $FilmStyle_ = { colorBalance?: $ColorBalance_, contrast?: number, hsb?: $HSB_, sensitivity?: number, levels?: $Levels_, noise?: number,  } | [colorBalance?: $ColorBalance_, contrast?: number, hsb?: $HSB_, sensitivity?: number, levels?: $Levels_, noise?: number, ];
}
