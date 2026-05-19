import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Runnable_ } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/com/simibubi/create/content/logistics/packagerLink" {
    export class $RequestPromiseQueue {
        setOnChanged(arg0: $Runnable_): void;
        forceClear(arg0: $ItemStack_): void;
        getTotalPromisedAndRemoveExpired(arg0: $ItemStack_, arg1: number): number;
        itemEnteredSystem(arg0: $ItemStack_, arg1: number): void;
        flatten(arg0: boolean): $List<$RequestPromise>;
        tick(): void;
        isEmpty(): boolean;
        add(arg0: $RequestPromise): void;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Runnable_): $RequestPromiseQueue;
        constructor(arg0: $Runnable_);
        set onChanged(value: $Runnable_);
        get empty(): boolean;
    }
}
