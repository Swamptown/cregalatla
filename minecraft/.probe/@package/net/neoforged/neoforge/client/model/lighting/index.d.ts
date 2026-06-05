import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $PoseStack, $VertexConsumer, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $ThreadLocal } from "@package/java/lang";
import { $ModelBlockRenderer, $ModelBlockRenderer$Cache } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/neoforged/neoforge/client/model/lighting" {
    export class $FlatQuadLighter extends $QuadLighter {
        constructor(arg0: $BlockColors);
    }
    export class $LightPipelineAwareModelBlockRenderer extends $ModelBlockRenderer {
        getQuadLighter(arg0: boolean): $QuadLighter;
        static render(arg0: $VertexConsumer, arg1: $QuadLighter, arg2: $BlockAndTintGetter, arg3: $BakedModel, arg4: $BlockState_, arg5: $BlockPos_, arg6: $PoseStack, arg7: boolean, arg8: $RandomSource, arg9: number, arg10: number, arg11: $ModelData, arg12: $RenderType): boolean;
        static CACHE: $ThreadLocal<$ModelBlockRenderer$Cache>;
        static DIRECTIONS: $Direction[];
        constructor(arg0: $BlockColors);
    }
    export class $SmoothQuadLighter extends $QuadLighter {
        constructor(arg0: $BlockColors);
    }
    export class $QuadLighter {
        computeLightingForQuad(arg0: $BakedQuad): void;
        computeLightingForQuad(arg0: number[], arg1: boolean): void;
        getComputedBrightness(): number[];
        getComputedLightmap(): number[];
        process(arg0: $VertexConsumer, arg1: $PoseStack$Pose, arg2: $BakedQuad, arg3: number): void;
        reset(): void;
        setup(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_): void;
        static calculateShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        get computedBrightness(): number[];
        get computedLightmap(): number[];
    }
}
