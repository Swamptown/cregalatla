import { $ColorPalette } from "@package/io/github/mortuusars/exposure/data";
import { $FilmProperties, $FilmStyle } from "@package/io/github/mortuusars/exposure/world/camera/film/properties";
import { $DitherMode } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ExposureType, $ExposureType_ } from "@package/io/github/mortuusars/exposure/world/camera";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";
export * as camera from "@package/io/github/mortuusars/exposure/world/item/camera";
export * as util from "@package/io/github/mortuusars/exposure/world/item/util";
export * as component from "@package/io/github/mortuusars/exposure/world/item/component";

declare module "@package/io/github/mortuusars/exposure/world/item" {
    export class $FilmRollItem extends $Item implements $SensitiveFilmItem {
        canAddFrame(stack: $ItemStack_): boolean;
        addFrame(stack: $ItemStack_, frame: $Frame_): void;
        getType(): $ExposureType;
        getFilmProperties(stack: $ItemStack_): $FilmProperties;
        addFrameSizeToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        addPaletteToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        addStyleToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        getColorPalette(stack: $ItemStack_): $ResourceKey<$ColorPalette>;
        getDitherMode(stack: $ItemStack_): $DitherMode;
        getFilmStyle(stack: $ItemStack_): $FilmStyle;
        getFrameSize(stack: $ItemStack_): number;
        getDefaultFrameSize(stack: $ItemStack_): number;
        getDefaultMaxFrameCount(stack: $ItemStack_): number;
        getStoredFrames(stack: $ItemStack_): $List<$Frame>;
        hasFrameAt(stack: $ItemStack_, index: number): boolean;
        getStoredFramesCount(stack: $ItemStack_): number;
        getMaxFrameCount(stack: $ItemStack_): number;
        isFull(stack: $ItemStack_): boolean;
        getFullness(stack: $ItemStack_): number;
        hasFrames(stack: $ItemStack_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BAR_COLOR: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        static BAR_BLACK_AND_WHITE: number;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(type: $ExposureType_, barColor: number, properties: $Item$Properties);
        get type(): $ExposureType;
    }
    export class $FilmItem {
    }
    export interface $FilmItem {
        getFrameSize(stack: $ItemStack_): number;
        getDefaultFrameSize(stack: $ItemStack_): number;
        getDefaultMaxFrameCount(stack: $ItemStack_): number;
        getStoredFrames(stack: $ItemStack_): $List<$Frame>;
        hasFrameAt(stack: $ItemStack_, index: number): boolean;
        getStoredFramesCount(stack: $ItemStack_): number;
        getMaxFrameCount(stack: $ItemStack_): number;
        isFull(stack: $ItemStack_): boolean;
        getFullness(stack: $ItemStack_): number;
        hasFrames(stack: $ItemStack_): boolean;
        getType(): $ExposureType;
        get type(): $ExposureType;
    }
    /**
     * Values that may be interpreted as {@link $FilmItem}.
     */
    export type $FilmItem_ = (() => $ExposureType_);
    export class $SensitiveFilmItem {
    }
    export interface $SensitiveFilmItem extends $FilmItem {
        getFilmProperties(stack: $ItemStack_): $FilmProperties;
        addFrameSizeToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        addPaletteToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        addStyleToTooltip(stack: $ItemStack_, list: $List_<$Component_>): void;
        getColorPalette(stack: $ItemStack_): $ResourceKey<$ColorPalette>;
        getDitherMode(stack: $ItemStack_): $DitherMode;
        getFilmStyle(stack: $ItemStack_): $FilmStyle;
    }
    /**
     * Values that may be interpreted as {@link $SensitiveFilmItem}.
     */
    export type $SensitiveFilmItem_ = (() => void);
}
