import { $Level } from "@package/net/minecraft/world/level";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $MinecraftServerData } from "@package/xaero/common/server";
import { $ServerPlayerData } from "@package/xaero/common/server/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID_, $UUID } from "@package/java/util";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/common/server/radar/tracker" {
    export class $SyncedTrackedPlayer {
        update(arg0: $Player): void;
        getId(): $UUID;
        copyFrom(arg0: $SyncedTrackedPlayer): void;
        setDimension(arg0: $ResourceKey_<$Level>): $SyncedTrackedPlayer;
        matchesEnough(arg0: $Player, arg1: number): boolean;
        getY(): number;
        getX(): number;
        getZ(): number;
        setPos(arg0: number, arg1: number, arg2: number): $SyncedTrackedPlayer;
        getDimensionKey(): $ResourceKey<$Level>;
        constructor(arg0: $UUID_, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>);
        get id(): $UUID;
        set dimension(value: $ResourceKey_<$Level>);
        get y(): number;
        get x(): number;
        get z(): number;
        get dimensionKey(): $ResourceKey<$Level>;
    }
    export class $SyncedPlayerTrackerSystemManager {
        register(arg0: string, arg1: $ISyncedPlayerTrackerSystem): void;
        getSystems(): $Iterable<$ISyncedPlayerTrackerSystem>;
        constructor();
        get systems(): $Iterable<$ISyncedPlayerTrackerSystem>;
    }
    export class $SyncedPlayerTracker {
        onTick(arg0: $MinecraftServer, arg1: $ServerPlayer, arg2: $MinecraftServerData, arg3: $ServerPlayerData): void;
        constructor(arg0: $IXaeroMinimap);
    }
    export class $ISyncedPlayerTrackerSystem {
    }
    export interface $ISyncedPlayerTrackerSystem {
        getTrackingLevel(arg0: $Player, arg1: $Player): number;
        isPartySystem(): boolean;
        get partySystem(): boolean;
    }
}
