import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/supermartijn642/core/mixin" {
    export class $BlockPropertiesAccessor {
    }
    export interface $BlockPropertiesAccessor {
        getLootTableSupplier(): $Supplier<$ResourceKey<$LootTable>>;
        setLootTableSupplier(supplier: $Supplier_<$ResourceKey<$LootTable>>): void;
    }
}
