import { $SyncedTrackedPlayer } from "@package/xaero/map/server/radar/tracker";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $UUID_, $Set, $UUID } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/map/server/player" {
    export class $ServerPlayerData {
        static get(arg0: $ServerPlayer): $ServerPlayerData;
        getLastSyncedData(): $SyncedTrackedPlayer;
        ensureLastSyncedData(): $SyncedTrackedPlayer;
        getCurrentlySyncedPlayers(): $Set<$UUID>;
        ensureCurrentlySyncedPlayers(): $Set<$UUID>;
        getLastTrackedPlayerSync(): number;
        setLastTrackedPlayerSync(arg0: number): void;
        hasMod(): boolean;
        setClientModNetworkVersion(arg0: number): void;
        getClientModNetworkVersion(): number;
        setOpacData(arg0: $Object): void;
        getOpacData(): $Object;
        constructor(arg0: $UUID_);
        get lastSyncedData(): $SyncedTrackedPlayer;
        get currentlySyncedPlayers(): $Set<$UUID>;
    }
    export class $IServerPlayer {
    }
    export interface $IServerPlayer {
        getXaeroWorldMapPlayerData(): $ServerPlayerData;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData): void;
    }
}
