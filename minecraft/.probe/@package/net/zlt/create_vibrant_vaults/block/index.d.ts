import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/zlt/create_vibrant_vaults/block" {
    export class $ModBlocks$VibrantVaultColor extends $Enum<$ModBlocks$VibrantVaultColor> implements $StringRepresentable {
        static values(): $ModBlocks$VibrantVaultColor[];
        static valueOf(arg0: string): $ModBlocks$VibrantVaultColor;
        static byName(arg0: string): $ModBlocks$VibrantVaultColor;
        asId(): string;
        getSerializedName(): string;
        static byId(arg0: number): $ModBlocks$VibrantVaultColor;
        getRemappedEnumConstantName(): string;
        static WHITE: $ModBlocks$VibrantVaultColor;
        static GRAY: $ModBlocks$VibrantVaultColor;
        static CODEC: $StringRepresentable$EnumCodec<$ModBlocks$VibrantVaultColor>;
        static BLUE: $ModBlocks$VibrantVaultColor;
        static PURPLE: $ModBlocks$VibrantVaultColor;
        static GREEN: $ModBlocks$VibrantVaultColor;
        static BASE: $ModBlocks$VibrantVaultColor;
        static RED: $ModBlocks$VibrantVaultColor;
        static PINK: $ModBlocks$VibrantVaultColor;
        static LIGHT_GRAY: $ModBlocks$VibrantVaultColor;
        static LIGHT_BLUE: $ModBlocks$VibrantVaultColor;
        static LIME: $ModBlocks$VibrantVaultColor;
        mapColor: $MapColor;
        static MAGENTA: $ModBlocks$VibrantVaultColor;
        static BLACK: $ModBlocks$VibrantVaultColor;
        static YELLOW: $ModBlocks$VibrantVaultColor;
        static CYAN: $ModBlocks$VibrantVaultColor;
        static BROWN: $ModBlocks$VibrantVaultColor;
        static ORANGE: $ModBlocks$VibrantVaultColor;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ModBlocks$VibrantVaultColor}.
     */
    export type $ModBlocks$VibrantVaultColor_ = "white" | "orange" | "magenta" | "light_blue" | "yellow" | "lime" | "pink" | "gray" | "light_gray" | "cyan" | "purple" | "blue" | "brown" | "green" | "red" | "black" | "base";
}
