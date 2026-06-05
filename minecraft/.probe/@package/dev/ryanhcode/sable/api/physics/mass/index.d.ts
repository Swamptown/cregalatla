import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $BiFunction } from "@package/java/util/function";
import { $BoundingBox3ic } from "@package/dev/ryanhcode/sable/companion/math";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix3dc, $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/mass" {
    export class $MassTracker implements $MassData {
        getInverseMass(): number;
        getInverseInertiaTensor(): $Matrix3dc;
        getInertiaTensor(): $Matrix3dc;
        getCenterOfMass(): $Vector3dc;
        moveCenterOfMass(arg0: $Vector3d): void;
        getMass(): number;
        addBlockMass(arg0: $BlockGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: number, arg4: $Vec3_): void;
        static build(arg0: $BlockGetter, arg1: $BoundingBox3ic): $MassTracker;
        getInverseNormalMass(arg0: $Vector3dc, arg1: $Vector3dc): number;
        isInvalid(): boolean;
        static BLOCK_CENTER_OF_MASS: $BiFunction<$BlockGetter, $BlockState, $Vector3dc>;
        constructor();
        get inverseMass(): number;
        get inverseInertiaTensor(): $Matrix3dc;
        get inertiaTensor(): $Matrix3dc;
        get centerOfMass(): $Vector3dc;
        get mass(): number;
        get invalid(): boolean;
    }
    export class $MassData {
    }
    export interface $MassData {
        getInverseMass(): number;
        getInverseInertiaTensor(): $Matrix3dc;
        getInertiaTensor(): $Matrix3dc;
        getCenterOfMass(): $Vector3dc;
        getInverseNormalMass(arg0: $Vector3dc, arg1: $Vector3dc): number;
        getMass(): number;
        isInvalid(): boolean;
        get inverseMass(): number;
        get inverseInertiaTensor(): $Matrix3dc;
        get inertiaTensor(): $Matrix3dc;
        get centerOfMass(): $Vector3dc;
        get mass(): number;
        get invalid(): boolean;
    }
}
