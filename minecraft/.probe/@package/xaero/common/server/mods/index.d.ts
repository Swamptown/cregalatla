import { $SupportOPACServer } from "@package/xaero/common/server/mods/opac";
import { $SupportArgonautsServer } from "@package/xaero/common/server/mods/argonauts";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $SupportFTBTeamsServer } from "@package/xaero/common/server/mods/ftbteams";
export * as argonauts from "@package/xaero/common/server/mods/argonauts";
export * as ftbteams from "@package/xaero/common/server/mods/ftbteams";
export * as opac from "@package/xaero/common/server/mods/opac";

declare module "@package/xaero/common/server/mods" {
    export class $SupportServerMods {
        hasFtbTeams(): boolean;
        getFtbTeams(): $SupportFTBTeamsServer;
        hasArgonauts(): boolean;
        getArgonauts(): $SupportArgonautsServer;
        hasOpac(): boolean;
        getOpac(): $SupportOPACServer;
        hasWorldmap(): boolean;
        getWorldmap(): $SupportWorldMapServer;
        check(arg0: $IXaeroMinimap): void;
        constructor();
        get ftbTeams(): $SupportFTBTeamsServer;
        get argonauts(): $SupportArgonautsServer;
        get opac(): $SupportOPACServer;
        get worldmap(): $SupportWorldMapServer;
    }
    export class $SupportWorldMapServer {
        supportsTrackedPlayers(): boolean;
        constructor();
    }
}
