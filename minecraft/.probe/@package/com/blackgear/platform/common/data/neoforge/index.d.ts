import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/blackgear/platform/common/data/neoforge" {
    export class $LootPoolAccess {
    }
    export interface $LootPoolAccess {
        getEntries(): $List<$LootPoolEntryContainer>;
        setEntries(arg0: $List_<$LootPoolEntryContainer>): void;
    }
}
