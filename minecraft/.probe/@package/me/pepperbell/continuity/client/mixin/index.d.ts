import { $CloseableResourceManager } from "@package/net/minecraft/server/packs/resources";

declare module "@package/me/pepperbell/continuity/client/mixin" {
    export class $ReloadableResourceManagerImplAccessor {
    }
    export interface $ReloadableResourceManagerImplAccessor {
        getActiveManager(): $CloseableResourceManager;
        get activeManager(): $CloseableResourceManager;
    }
    /**
     * Values that may be interpreted as {@link $ReloadableResourceManagerImplAccessor}.
     */
    export type $ReloadableResourceManagerImplAccessor_ = (() => $CloseableResourceManager);
}
