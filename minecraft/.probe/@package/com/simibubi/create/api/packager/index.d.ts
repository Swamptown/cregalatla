import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockFace } from "@package/net/createmod/catnip/math";

declare module "@package/com/simibubi/create/api/packager" {
    export class $InventoryIdentifier {
        static get(arg0: $Level_, arg1: $BlockFace): $InventoryIdentifier;
        static REGISTRY: $SimpleRegistry<$Block, $InventoryIdentifier$Finder>;
    }
    export interface $InventoryIdentifier {
        contains(arg0: $BlockFace): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier}.
     */
    export type $InventoryIdentifier_ = ((arg0: $BlockFace) => boolean);
    export class $InventoryIdentifier$Finder {
    }
    export interface $InventoryIdentifier$Finder {
        find(arg0: $Level_, arg1: $BlockState_, arg2: $BlockFace): $InventoryIdentifier;
    }
    /**
     * Values that may be interpreted as {@link $InventoryIdentifier$Finder}.
     */
    export type $InventoryIdentifier$Finder_ = ((arg0: $Level, arg1: $BlockState, arg2: $BlockFace) => $InventoryIdentifier_);
}
