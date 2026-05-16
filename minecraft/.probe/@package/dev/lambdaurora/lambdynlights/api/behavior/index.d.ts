import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $OptionalInt } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/lambdaurora/lambdynlights/api/behavior" {
    export class $BeaconLightBehavior extends $Record implements $DynamicLightBehavior {
        x(): number;
        z(): number;
        y(): $OptionalInt;
        level(): $Level;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        hasChanged(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        luminance(): number;
        isRemoved(): boolean;
        constructor(x: number, z: number, luminance: number, level: $Level_);
        constructor(x: number, y: $OptionalInt, z: number, luminance: number, level: $Level_);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BeaconLightBehavior}.
     */
    export type $BeaconLightBehavior_ = { z?: number, luminance?: number, y?: $OptionalInt, x?: number, level?: $Level_,  } | [z?: number, luminance?: number, y?: $OptionalInt, x?: number, level?: $Level_, ];
    export class $DynamicLightBehavior {
    }
    export interface $DynamicLightBehavior {
        lightAtPos(arg0: $BlockPos_, arg1: number): number;
        hasChanged(): boolean;
        isRemoved(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
    }
    export class $LineLightBehavior implements $DynamicLightBehavior {
        getStartPoint(): $Vector3d;
        getEndPoint(): $Vector3d;
        setStartPoint(x: number, y: number, z: number): void;
        setStartPoint(startPoint: $Vector3d): void;
        setEndPoint(x: number, y: number, z: number): void;
        setEndPoint(endPoint: $Vector3d): void;
        lightAtPos(pos: $BlockPos_, falloffRatio: number): number;
        hasChanged(): boolean;
        getBoundingBox(): $DynamicLightBehavior$BoundingBox;
        setLuminance(luminance: number): void;
        getLuminance(): number;
        isRemoved(): boolean;
        constructor(startPoint: $Vector3d, endPoint: $Vector3d, luminance: number);
        get boundingBox(): $DynamicLightBehavior$BoundingBox;
        get removed(): boolean;
    }
    export class $DynamicLightBehavior$BoundingBox extends $Record {
        startX(): number;
        startY(): number;
        endX(): number;
        endY(): number;
        startZ(): number;
        endZ(): number;
        constructor(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number);
    }
    /**
     * Values that may be interpreted as {@link $DynamicLightBehavior$BoundingBox}.
     */
    export type $DynamicLightBehavior$BoundingBox_ = { endZ?: number, endY?: number, endX?: number, startZ?: number, startY?: number, startX?: number,  } | [endZ?: number, endY?: number, endX?: number, startZ?: number, startY?: number, startX?: number, ];
}
