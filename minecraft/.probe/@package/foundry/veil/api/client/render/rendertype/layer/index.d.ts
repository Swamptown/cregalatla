import { $Codec } from "@package/com/mojang/serialization";
import { $Object } from "@package/java/lang";
import { $RenderTypeLayerRegistry$LayerType } from "@package/foundry/veil/api/client/registry";
import { $VeilRenderTypeBuilder } from "@package/foundry/veil/api/client/render/rendertype";

declare module "@package/foundry/veil/api/client/render/rendertype/layer" {
    export class $RenderTypeLayer {
        static CODEC: $Codec<$RenderTypeLayer>;
    }
    export interface $RenderTypeLayer {
        getType(): $RenderTypeLayerRegistry$LayerType<never>;
        addShard(arg0: $VeilRenderTypeBuilder, ...arg1: $Object[]): void;
        get type(): $RenderTypeLayerRegistry$LayerType<never>;
    }
}
