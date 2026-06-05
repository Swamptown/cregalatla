import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/simibubi/create/content/equipment/clipboard" {
    export class $ClipboardCloneable {
    }
    export interface $ClipboardCloneable {
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        get clipboardKey(): string;
    }
}
