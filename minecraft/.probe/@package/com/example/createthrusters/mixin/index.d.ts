import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";

declare module "@package/com/example/createthrusters/mixin" {
    export class $CreativeModeInventoryScreenAccessor {
    }
    export interface $CreativeModeInventoryScreenAccessor {
        getMenu(): $AbstractContainerMenu;
        getLeftPos(): number;
        getTopPos(): number;
        get menu(): $AbstractContainerMenu;
        get leftPos(): number;
        get topPos(): number;
    }
}
