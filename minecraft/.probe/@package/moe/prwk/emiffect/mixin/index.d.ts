import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/moe/prwk/emiffect/mixin" {
    export class $TextureAtlasHolderInvoker {
    }
    export interface $TextureAtlasHolderInvoker {
        emiffect$invokeGetSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $TextureAtlasHolderInvoker}.
     */
    export type $TextureAtlasHolderInvoker_ = ((arg0: $ResourceLocation) => $TextureAtlasSprite);
}
