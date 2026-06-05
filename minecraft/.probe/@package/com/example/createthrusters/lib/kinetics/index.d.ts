import { $Direction$Axis_ } from "@package/net/minecraft/core";

declare module "@package/com/example/createthrusters/lib/kinetics" {
    export class $HeldKineticAngleAccess {
    }
    export interface $HeldKineticAngleAccess {
        ct$setHeldAngle(arg0: $Direction$Axis_, arg1: number): boolean;
        ct$clearHeldAngles(): boolean;
        ct$hasHeldAngle(arg0: $Direction$Axis_): boolean;
        ct$getAbsoluteRotationAngle(arg0: $Direction$Axis_): number;
    }
    export class $PreciseKineticOutputAccess {
    }
    export interface $PreciseKineticOutputAccess {
        ct$applyPreciseAngleOutput(arg0: number): void;
        ct$clearPreciseAngleOutput(): void;
    }
}
