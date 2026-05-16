import { $Frustum } from "@package/net/minecraft/client/renderer/culling";

declare module "@package/me/flashyreese/mods/sodiumextra/mixin/optimizations/beacon_beam_rendering" {
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        getCullingFrustum(): $Frustum;
        get cullingFrustum(): $Frustum;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => $Frustum);
}
