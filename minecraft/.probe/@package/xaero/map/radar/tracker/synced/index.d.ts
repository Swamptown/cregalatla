import { $Level } from "@package/net/minecraft/world/level";
import { $SyncedTrackedPlayer } from "@package/xaero/map/server/radar/tracker";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $UUID_ } from "@package/java/util";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/map/radar/tracker/synced" {
    export class $ClientSyncedTrackedPlayerManager {
        getPlayers(): $Iterable<$SyncedTrackedPlayer>;
        remove(arg0: $UUID_): void;
        reset(): void;
        update(arg0: $UUID_, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>): void;
        constructor();
        get players(): $Iterable<$SyncedTrackedPlayer>;
    }
}
