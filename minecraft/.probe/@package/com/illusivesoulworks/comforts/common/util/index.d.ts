import { $ServerLevel } from "@package/net/minecraft/server/level";

declare module "@package/com/illusivesoulworks/comforts/common/util" {
    export class $ServerAware {
    }
    export interface $ServerAware {
        comforts$getServer(): $ServerLevel;
        comforts$setServer(arg0: $ServerLevel): void;
    }
}
