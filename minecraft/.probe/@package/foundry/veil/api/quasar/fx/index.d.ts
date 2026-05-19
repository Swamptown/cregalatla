import { $Function_ } from "@package/java/util/function";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TrailSettings } from "@package/foundry/veil/api/quasar/emitters/module/render";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/foundry/veil/api/quasar/fx" {
    export class $Trail {
        setParentRotation(arg0: boolean): void;
        setBillboard(arg0: boolean): void;
        setFrequency(arg0: number): void;
        setMinDistance(arg0: number): void;
        setPoints(arg0: $Vec3_[]): void;
        setWidthFunction(arg0: $Function_<number, number>): void;
        pushPoint(arg0: $Vec3_): void;
        pushRotatedPoint(arg0: $Vec3_, arg1: $Vec3_): void;
        setTilingMode(arg0: $Trail$TilingMode_): void;
        setColor(arg0: number): void;
        getLength(): number;
        setLength(arg0: number): void;
        render(arg0: $MatrixStack, arg1: $VertexConsumer, arg2: number): void;
        getTexture(): $ResourceLocation;
        setTexture(arg0: $ResourceLocation_): void;
        constructor(arg0: $Vec3_[], arg1: number, arg2: $Function_<number, number>);
        constructor(arg0: number, arg1: $Function_<number, number>);
        constructor(arg0: $TrailSettings);
        set parentRotation(value: boolean);
        set billboard(value: boolean);
        set frequency(value: number);
        set minDistance(value: number);
        set points(value: $Vec3_[]);
        set widthFunction(value: $Function_<number, number>);
        set tilingMode(value: $Trail$TilingMode_);
        set color(value: number);
    }
    export class $Trail$TilingMode extends $Enum<$Trail$TilingMode> {
        static values(): $Trail$TilingMode[];
        static valueOf(arg0: string): $Trail$TilingMode;
        static CODEC: $Codec<$Trail$TilingMode>;
        static REPEAT: $Trail$TilingMode;
        static STRETCH: $Trail$TilingMode;
        static NONE: $Trail$TilingMode;
    }
    /**
     * Values that may be interpreted as {@link $Trail$TilingMode}.
     */
    export type $Trail$TilingMode_ = "none" | "stretch" | "repeat";
}
