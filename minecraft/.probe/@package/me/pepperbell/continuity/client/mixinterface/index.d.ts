import { $ModelWrappingHandler, $ResourceRedirectHandler } from "@package/me/pepperbell/continuity/client/resource";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/me/pepperbell/continuity/client/mixinterface" {
    export class $LifecycledResourceManagerImplExtension {
    }
    export interface $LifecycledResourceManagerImplExtension {
        continuity$getRedirectHandler(): $ResourceRedirectHandler;
    }
    /**
     * Values that may be interpreted as {@link $LifecycledResourceManagerImplExtension}.
     */
    export type $LifecycledResourceManagerImplExtension_ = (() => $ResourceRedirectHandler);
    export class $ModelLoaderExtension {
    }
    export interface $ModelLoaderExtension {
        continuity$getModelWrappingHandler(): $ModelWrappingHandler;
        continuity$setModelWrappingHandler(arg0: $ModelWrappingHandler): void;
    }
    export class $SpriteExtension {
    }
    export interface $SpriteExtension {
        continuity$getEmissiveSprite(): $TextureAtlasSprite;
        continuity$setEmissiveSprite(arg0: $TextureAtlasSprite): void;
    }
}
