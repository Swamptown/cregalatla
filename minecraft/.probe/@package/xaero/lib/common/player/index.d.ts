import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ServerPlayerConfigChannelData } from "@package/xaero/lib/common/player/config";
import { $ServerPlayerConfigSynchronizer } from "@package/xaero/lib/common/config/server/sync";
export * as config from "@package/xaero/lib/common/player/config";

declare module "@package/xaero/lib/common/player" {
    export class $ServerPlayerData {
        static get(arg0: $ServerPlayer): $ServerPlayerData;
        getConfigChannelData(arg0: $ConfigChannel): $ServerPlayerConfigChannelData;
        setPlayer(arg0: $ServerPlayer): void;
        setShouldUpdateConfigPermissions(arg0: boolean): void;
        shouldUpdateConfigPermissions(): boolean;
        getPlayer(): $ServerPlayer;
        getConfigSynchronizer(): $ServerPlayerConfigSynchronizer;
        get configSynchronizer(): $ServerPlayerConfigSynchronizer;
    }
    export class $IServerPlayer {
    }
    export interface $IServerPlayer {
        xaerolib_getData(): $ServerPlayerData;
        xaerolib_setData(arg0: $ServerPlayerData): void;
    }
}
