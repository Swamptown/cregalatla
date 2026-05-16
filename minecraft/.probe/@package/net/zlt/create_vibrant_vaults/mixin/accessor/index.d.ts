import { $IItemHandler } from "@package/net/neoforged/neoforge/items";

declare module "@package/net/zlt/create_vibrant_vaults/mixin/accessor" {
    export class $PackagePortBlockEntityAccessor {
    }
    export interface $PackagePortBlockEntityAccessor {
        createVibrantVaults$getItemHandler(): $IItemHandler;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortBlockEntityAccessor}.
     */
    export type $PackagePortBlockEntityAccessor_ = (() => $IItemHandler);
}
