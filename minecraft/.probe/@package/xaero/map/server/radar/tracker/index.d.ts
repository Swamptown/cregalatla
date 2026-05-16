import { $Level } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServerData } from "@package/xaero/map/server";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerPlayerData } from "@package/xaero/map/server/player";
import { $UUID_, $UUID } from "@package/java/util";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/map/server/radar/tracker" {
    export class $SyncedTrackedPlayer {
        update(arg0: $Player): void;
        getId(): $UUID;
        copyFrom(arg0: $SyncedTrackedPlayer): void;
        setDimension(arg0: $ResourceKey_<$Level>): $SyncedTrackedPlayer;
        matchesEnough(arg0: $Player, arg1: number): boolean;
        getY(): number;
        getDimension(): $ResourceKey<$Level>;
        getX(): number;
        getZ(): number;
        setPos(arg0: number, arg1: number, arg2: number): $SyncedTrackedPlayer;
        constructor(arg0: $UUID_, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>);
        get id(): $UUID;
        get y(): number;
        get x(): number;
        get z(): number;
    }
    export class $SyncedPlayerTracker {
        onTick(arg0: $MinecraftServer, arg1: $ServerPlayer, arg2: $MinecraftServerData, arg3: $ServerPlayerData): void;
        constructor();
    }
    export class $ISyncedPlayerTrackerSystem {
    }
    export interface $ISyncedPlayerTrackerSystem {
        getTrackingLevel(arg0: $Player, arg1: $Player): number;
        isPartySystem(): boolean;
        get partySystem(): boolean;
    }
    export class $SyncedPlayerTrackerSystemManager {
        register(arg0: string, arg1: $ISyncedPlayerTrackerSystem): void;
        getSystems(): $Iterable<$ISyncedPlayerTrackerSystem>;
        constructor();
        get systems(): $Iterable<$ISyncedPlayerTrackerSystem>;
    }
}
