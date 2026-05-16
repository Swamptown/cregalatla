import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ClientboundRulesPacket } from "@package/xaero/hud/packet/basic";

declare module "@package/xaero/common/minimap/mcworld" {
    export class $MinimapClientWorldData {
        getServerModNetworkVersion(): number;
        getSyncedRules(): $ClientboundRulesPacket;
        setServerModNetworkVersion(arg0: number): void;
        setSyncedRules(arg0: $ClientboundRulesPacket): void;
        serverLevelId: number;
        shadowR: number;
        shadowB: number;
        shadowG: number;
        constructor(arg0: $ClientLevel);
    }
    export class $IXaeroMinimapClientWorld {
    }
    export interface $IXaeroMinimapClientWorld {
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
    }
}
