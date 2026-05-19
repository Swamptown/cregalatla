import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $GeoModel } from "@package/software/bernie/geckolib/model";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BakedGeoModel_, $GeoBone, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $GeoRenderer } from "@package/software/bernie/geckolib/renderer";

declare module "@package/software/bernie/geckolib/renderer/layer" {
    export class $GeoRenderLayer<T extends $GeoAnimatable> {
        renderForBone(arg0: $PoseStack, arg1: T, arg2: $GeoBone, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        getGeoModel(): $GeoModel<T>;
        getDefaultBakedModel(arg0: T): $BakedGeoModel;
        preRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        getRenderer(): $GeoRenderer<T>;
        render(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $RenderType, arg4: $MultiBufferSource_, arg5: $VertexConsumer, arg6: number, arg7: number, arg8: number): void;
        constructor(arg0: $GeoRenderer<T>);
        get geoModel(): $GeoModel<T>;
        get renderer(): $GeoRenderer<T>;
    }
}
