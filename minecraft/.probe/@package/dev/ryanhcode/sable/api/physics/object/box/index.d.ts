import { $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3d, $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/box" {
    export class $BoxHandle {
    }
    export interface $BoxHandle {
        getRuntimeId(): number;
        wakeUp(): void;
        readPose(arg0: $Pose3d): void;
        remove(): void;
        get runtimeId(): number;
    }
    export class $BoxPhysicsObject implements $ArbitraryPhysicsObject, $PhysicsPipelineBody {
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        getRuntimeId(): number;
        updatePose(): void;
        getMass(): number;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        getHalfExtents(): $Vector3dc;
        wakeUp(): void;
        isActive(): boolean;
        getBoundingBox(arg0: $BoundingBox3d): void;
        getPose(): $Pose3dc;
        isRemoved(): boolean;
        onRemoved(): void;
        getMassTracker(): $MassData;
        constructor(arg0: $Pose3dc, arg1: $Vector3dc, arg2: number);
        get runtimeId(): number;
        get mass(): number;
        get halfExtents(): $Vector3dc;
        get active(): boolean;
        get pose(): $Pose3dc;
        get removed(): boolean;
        get massTracker(): $MassData;
    }
}
