import { $Supplier_ } from "@package/java/util/function";
import { $DataHolder } from "@package/dev/tr7zw/notenoughanimations/versionless/animations";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pose, $Pose_ } from "@package/net/minecraft/world/entity";

declare module "@package/dev/tr7zw/notenoughanimations/access" {
    export class $PlayerData {
    }
    export interface $PlayerData {
        getData<T>(arg0: $DataHolder<T>, arg1: $Supplier_<T>): T;
        setRotateBodyToHead(arg0: boolean): void;
        isUpdated(arg0: number): number;
        setUpdated(arg0: number): void;
        getLastHeldItems(): $ItemStack[];
        getItemSwapAnimationTimer(): number;
        setItemSwapAnimationTimer(arg0: number): void;
        getLastAnimationSwapTick(): number;
        setLastAnimationSwapTick(arg0: number): void;
        setPoseOverwrite(arg0: $Pose_): void;
        getPoseOverwrite(): $Pose;
        getLastRotations(): number[];
        getSideSword(): $ItemStack;
        setSideSword(arg0: $ItemStack_): void;
        isRotateBodyToHead(): boolean;
        isDisableBodyRotation(): boolean;
        setDisableBodyRotation(arg0: boolean): void;
        get lastHeldItems(): $ItemStack[];
        get lastRotations(): number[];
    }
}
