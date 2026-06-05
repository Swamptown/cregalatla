import { $Level } from "@package/net/minecraft/world/level";
import { $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack, $DyeColor_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ToolboxBlockEntity } from "@package/com/simibubi/create/content/equipment/toolbox";
import { $List } from "@package/java/util";

declare module "@package/com/railwayteam/railways/content/conductor/toolbox" {
    export class $MountedToolbox extends $ToolboxBlockEntity {
        readFromItem(arg0: $ItemStack_): void;
        getDisplayStack(): $ItemStack;
        getConnectedPlayers(): $List<$Player>;
        getParent(): $ConductorEntity;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static read(arg0: $ConductorEntity, arg1: $CompoundTag_): $MountedToolbox;
        static openMenu(arg0: $ServerPlayer, arg1: $MountedToolbox): void;
        getCloneItemStack(): $ItemStack;
        worldPosition: $BlockPos;
        drawers: $LerpedFloat;
        level: $Level;
        lid: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $ConductorEntity, arg1: $DyeColor_);
        get displayStack(): $ItemStack;
        get connectedPlayers(): $List<$Player>;
        get parent(): $ConductorEntity;
        get cloneItemStack(): $ItemStack;
    }
}
