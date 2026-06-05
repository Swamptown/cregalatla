import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/blackgear/vanillabackport/common/api/extensions" {
    export class $MotionAwareEntity {
    }
    export interface $MotionAwareEntity {
        getHeadLookAngle(): $Vec3;
        computeSpeed(): void;
        getKnownSpeed(): $Vec3;
        get headLookAngle(): $Vec3;
        get knownSpeed(): $Vec3;
    }
}
