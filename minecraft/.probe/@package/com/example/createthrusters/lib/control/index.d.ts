import { $Record } from "@package/java/lang";

declare module "@package/com/example/createthrusters/lib/control" {
    export class $DirectionalAnalogSnapshot extends $Record {
        forwardRedstone(): number;
        backwardRedstone(): number;
        leftRedstone(): number;
        rightRedstone(): number;
        static toRedstone(arg0: number): number;
        localZ(): number;
        left(): number;
        right(): number;
        magnitude(): number;
        forward(): number;
        backward(): number;
        localX(): number;
        static ZERO: $DirectionalAnalogSnapshot;
        constructor(localX: number, localZ: number, forward: number, backward: number, left: number, right: number, magnitude: number);
    }
    /**
     * Values that may be interpreted as {@link $DirectionalAnalogSnapshot}.
     */
    export type $DirectionalAnalogSnapshot_ = { forward?: number, backward?: number, right?: number, localX?: number, magnitude?: number, left?: number, localZ?: number,  } | [forward?: number, backward?: number, right?: number, localX?: number, magnitude?: number, left?: number, localZ?: number, ];
    export class $DirectionalAnalogSource {
    }
    export interface $DirectionalAnalogSource {
        getDirectionalAnalogSnapshot(): $DirectionalAnalogSnapshot;
        isDirectionalAnalogActive(): boolean;
        get directionalAnalogSnapshot(): $DirectionalAnalogSnapshot;
        get directionalAnalogActive(): boolean;
    }
}
