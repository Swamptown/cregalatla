import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $BlockSubLevelCollisionCallback, $BlockSubLevelCollisionCallback_ } from "@package/dev/ryanhcode/sable/api/physics/callback";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Iterable, $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/block" {
    export class $BlockEntitySubLevelReactionWheel {
    }
    export interface $BlockEntitySubLevelReactionWheel {
        sable$getAngularVelocity(arg0: $Vector3d): void;
        getBlockState(): $BlockState;
        get blockState(): $BlockState;
    }
    export class $BlockSubLevelLiftProvider$LiftProviderContext extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        dir(): $Vec3;
        constructor(pos: $BlockPos_, state: $BlockState_, dir: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelLiftProvider$LiftProviderContext}.
     */
    export type $BlockSubLevelLiftProvider$LiftProviderContext_ = { pos?: $BlockPos_, state?: $BlockState_, dir?: $Vec3_,  } | [pos?: $BlockPos_, state?: $BlockState_, dir?: $Vec3_, ];
    export class $BlockEntitySubLevelActor {
    }
    export interface $BlockEntitySubLevelActor {
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$tick(arg0: $ServerSubLevel): void;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
    }
    export class $BlockWithSubLevelCollisionCallback {
        static sable$getCallback(arg0: $BlockState_): $BlockSubLevelCollisionCallback;
        static hasCallback(arg0: $BlockState_): boolean;
    }
    export interface $BlockWithSubLevelCollisionCallback {
        sable$getCallback(): $BlockSubLevelCollisionCallback;
    }
    /**
     * Values that may be interpreted as {@link $BlockWithSubLevelCollisionCallback}.
     */
    export type $BlockWithSubLevelCollisionCallback_ = (() => $BlockSubLevelCollisionCallback_);
}
