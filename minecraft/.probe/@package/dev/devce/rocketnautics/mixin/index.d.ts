import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $TickingTracker } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Camera } from "@package/net/minecraft/client";

declare module "@package/dev/devce/rocketnautics/mixin" {
    export class $BucketItemAccessor {
    }
    export interface $BucketItemAccessor {
        rocketnautics$playEmptySound(arg0: $Player, arg1: $LevelAccessor, arg2: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $BucketItemAccessor}.
     */
    export type $BucketItemAccessor_ = ((arg0: $Player, arg1: $LevelAccessor, arg2: $BlockPos) => void);
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        rocketnautics$getFov(arg0: $Camera, arg1: number, arg2: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $GameRendererAccessor}.
     */
    export type $GameRendererAccessor_ = ((arg0: $Camera, arg1: number, arg2: boolean) => number);
    export class $DistanceManagerAccessor {
    }
    export interface $DistanceManagerAccessor {
        rocketnautics$tickingTicketsTracker(): $TickingTracker;
    }
    /**
     * Values that may be interpreted as {@link $DistanceManagerAccessor}.
     */
    export type $DistanceManagerAccessor_ = (() => $TickingTracker);
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        rocketnautics$isJumping(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => boolean);
}
