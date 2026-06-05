import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $PackagerItemHandler } from "@package/com/simibubi/create/content/logistics/packager";

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
    export class $PackagerBlockEntityAccessor {
    }
    export interface $PackagerBlockEntityAccessor {
        createVibrantVaults$getInventory(): $PackagerItemHandler;
    }
    /**
     * Values that may be interpreted as {@link $PackagerBlockEntityAccessor}.
     */
    export type $PackagerBlockEntityAccessor_ = (() => $PackagerItemHandler);
}
