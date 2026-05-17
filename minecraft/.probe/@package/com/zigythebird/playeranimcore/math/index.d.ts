import { $Record } from "@package/java/lang";

declare module "@package/com/zigythebird/playeranimcore/math" {
    export class $Vec3f extends $Record {
        add(other: $Vec3f_): $Vec3f;
        x(): number;
        z(): number;
        y(): number;
        mul(scalar: number): $Vec3f;
        static ZERO: $Vec3f;
        static ONE: $Vec3f;
        constructor(x: number, y: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $Vec3f}.
     */
    export type $Vec3f_ = { z?: number, x?: number, y?: number,  } | [z?: number, x?: number, y?: number, ];
}
