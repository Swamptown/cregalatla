import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Color, $Color_ } from "@package/io/github/mortuusars/exposure/util/color";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $FocalRange } from "@package/io/github/mortuusars/exposure/world/camera/component";
import { $ItemPredicate_, $ItemPredicate } from "@package/net/minecraft/advancements/critereon";

declare module "@package/io/github/mortuusars/exposure/data" {
    export class $Filter extends $Record {
        predicate(): $ItemPredicate;
        attachmentTexture(): $ResourceLocation;
        attachmentTintColor(): $Color;
        shader(): $ResourceLocation;
        static CODEC: $Codec<$Filter>;
        static HOLDER_CODEC: $Codec<$Holder<$Filter>>;
        static DEFAULT_GLASS_TEXTURE: $ResourceLocation;
        constructor(predicate: $ItemPredicate_, shader: $ResourceLocation_, attachmentTexture: $ResourceLocation_, attachmentTintColor: $Color_);
    }
    /**
     * Values that may be interpreted as {@link $Filter}.
     */
    export type $Filter_ = RegistryTypes.ExposureFilter | { attachmentTexture?: $ResourceLocation_, predicate?: $ItemPredicate_, attachmentTintColor?: $Color_, shader?: $ResourceLocation_,  } | [attachmentTexture?: $ResourceLocation_, predicate?: $ItemPredicate_, attachmentTintColor?: $Color_, shader?: $ResourceLocation_, ];
    export interface $ColorPalette extends RegistryMarked<RegistryTypes.ExposureColorPaletteTag, RegistryTypes.ExposureColorPalette> {}
    export interface $Lens extends RegistryMarked<RegistryTypes.ExposureLensTag, RegistryTypes.ExposureLens> {}
    export class $Lens extends $Record {
        predicate(): $ItemPredicate;
        focalRange(): $FocalRange;
        static CODEC: $Codec<$Lens>;
        constructor(predicate: $ItemPredicate_, focalRange: $FocalRange);
    }
    /**
     * Values that may be interpreted as {@link $Lens}.
     */
    export type $Lens_ = RegistryTypes.ExposureLens | { focalRange?: $FocalRange, predicate?: $ItemPredicate_,  } | [focalRange?: $FocalRange, predicate?: $ItemPredicate_, ];
    export interface $Filter extends RegistryMarked<RegistryTypes.ExposureFilterTag, RegistryTypes.ExposureFilter> {}
    export class $ColorPalette extends $Record {
        toColorList(): $List<$Color>;
        closestTo(color: $Color_): number;
        byId(id: number): number;
        colors(): number[];
        static CODEC: $Codec<$ColorPalette>;
        constructor(colors: number[]);
        constructor(colors: $List_<$Color_>);
    }
    /**
     * Values that may be interpreted as {@link $ColorPalette}.
     */
    export type $ColorPalette_ = RegistryTypes.ExposureColorPalette | { colors?: number[],  } | [colors?: number[], ];
}
