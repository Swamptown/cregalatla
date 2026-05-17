import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEvent$BreakEvent } from "@package/net/neoforged/neoforge/event/level";

declare module "@package/fr/rakambda/fallingtree/neoforge/event" {
    export class $FallingTreeBlockBreakEvent extends $BlockEvent$BreakEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player);
    }
}
