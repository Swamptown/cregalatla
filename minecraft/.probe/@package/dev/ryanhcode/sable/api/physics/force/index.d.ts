import { $MassTracker, $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/force" {
    export class $ForceGroup extends $Record {
        defaultDisplayed(): boolean;
        name(): $Component;
        color(): number;
        description(): $Component;
        constructor(name: $Component_, description: $Component_, color: number, defaultDisplayed: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ForceGroup}.
     */
    export type $ForceGroup_ = RegistryTypes.SableForceGroups | { name?: $Component_, description?: $Component_, defaultDisplayed?: boolean, color?: number,  } | [name?: $Component_, description?: $Component_, defaultDisplayed?: boolean, color?: number, ];
    export interface $ForceGroup extends RegistryMarked<RegistryTypes.SableForceGroupsTag, RegistryTypes.SableForceGroups> {}
    export class $ForceTotal {
        applyAngularImpulse(arg0: $Vector3dc): void;
        applyLinearImpulse(arg0: $Vector3dc): void;
        applyTorqueImpulse(arg0: $Vector3dc): void;
        applyLinearAndAngularImpulse(arg0: $Vector3dc, arg1: $Vector3dc): void;
        applyForces(arg0: $RigidBodyHandle): void;
        applyForceTotal(arg0: $ForceTotal): void;
        getLocalForce(): $Vector3d;
        getLocalTorque(): $Vector3d;
        applyImpulseAtPoint(arg0: $ServerSubLevel, arg1: $Vector3dc, arg2: $Vector3dc): void;
        applyImpulseAtPoint(arg0: $MassData, arg1: $Vector3dc, arg2: $Vector3dc): void;
        applyImpulseAtPoint(arg0: $MassTracker, arg1: $Vec3_, arg2: $Vec3_): void;
        reset(): void;
        constructor();
        get localForce(): $Vector3d;
        get localTorque(): $Vector3d;
    }
    export class $QueuedForceGroup {
        getRecordedPointForces(): $List<$QueuedForceGroup$PointForce>;
        getForceTotal(): $ForceTotal;
        recordPointForce(arg0: $Vector3dc, arg1: $Vector3dc): void;
        applyAndRecordPointForce(arg0: $Vector3dc, arg1: $Vector3dc): void;
        reset(): void;
        constructor(arg0: $ServerSubLevel);
        get recordedPointForces(): $List<$QueuedForceGroup$PointForce>;
        get forceTotal(): $ForceTotal;
    }
    export class $QueuedForceGroup$PointForce extends $Record {
        point(): $Vector3dc;
        force(): $Vector3dc;
        constructor(point: $Vector3dc, force: $Vector3dc);
    }
    /**
     * Values that may be interpreted as {@link $QueuedForceGroup$PointForce}.
     */
    export type $QueuedForceGroup$PointForce_ = { force?: $Vector3dc, point?: $Vector3dc,  } | [force?: $Vector3dc, point?: $Vector3dc, ];
}
