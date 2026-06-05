import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $VillageSiege } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $VillagerProfession, $VillagerTrades$ItemListing_, $VillagerTrades$ItemListing, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/neoforged/neoforge/event/village" {
    export class $WandererTradesEvent extends $Event {
        getGenericTrades(): $List<$VillagerTrades$ItemListing>;
        getRareTrades(): $List<$VillagerTrades$ItemListing>;
        getRegistryAccess(): $RegistryAccess;
        /**
         * @deprecated
         */
        constructor(arg0: $List_<$VillagerTrades$ItemListing_>, arg1: $List_<$VillagerTrades$ItemListing_>);
        constructor(arg0: $List_<$VillagerTrades$ItemListing_>, arg1: $List_<$VillagerTrades$ItemListing_>, arg2: $RegistryAccess);
        get genericTrades(): $List<$VillagerTrades$ItemListing>;
        get rareTrades(): $List<$VillagerTrades$ItemListing>;
        get registryAccess(): $RegistryAccess;
    }
    export class $VillagerTradesEvent extends $Event {
        getTrades(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>;
        getType(): $VillagerProfession;
        getRegistryAccess(): $RegistryAccess;
        /**
         * @deprecated
         */
        constructor(arg0: $Int2ObjectMap<$List_<$VillagerTrades$ItemListing_>>, arg1: $VillagerProfession_);
        constructor(arg0: $Int2ObjectMap<$List_<$VillagerTrades$ItemListing_>>, arg1: $VillagerProfession_, arg2: $RegistryAccess);
        get trades(): $Int2ObjectMap<$List<$VillagerTrades$ItemListing>>;
        get type(): $VillagerProfession;
        get registryAccess(): $RegistryAccess;
    }
    export class $VillageSiegeEvent extends $Event implements $ICancellableEvent {
        getAttemptedSpawnPos(): $Vec3;
        getSiege(): $VillageSiege;
        getPlayer(): $Player;
        getLevel(): $Level;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $VillageSiege, arg1: $Level_, arg2: $Player, arg3: $Vec3_);
        get attemptedSpawnPos(): $Vec3;
        get siege(): $VillageSiege;
        get player(): $Player;
        get level(): $Level;
    }
}
