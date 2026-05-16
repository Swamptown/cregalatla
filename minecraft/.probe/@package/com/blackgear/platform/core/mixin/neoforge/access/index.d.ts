import { $List_, $List } from "@package/java/util";
import { $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/blackgear/platform/core/mixin/neoforge/access" {
    export class $LootTableAccessor {
    }
    export interface $LootTableAccessor {
        getPools(): $List<$LootPool>;
        get pools(): $List<$LootPool>;
    }
    /**
     * Values that may be interpreted as {@link $LootTableAccessor}.
     */
    export type $LootTableAccessor_ = (() => $List_<$LootPool>);
}
