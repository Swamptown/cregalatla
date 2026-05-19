import { $Record } from "@package/java/lang";

declare module "@package/com/zigythebird/playeranimcore/math" {
    export class $Vec3f extends $Record {
        mul(scalar: number): $Vec3f;
        add(other: $Vec3f_): $Vec3f;
        x(): number;
        z(): number;
        y(): number;
        static ZERO: $Vec3f;
        static ONE: $Vec3f;
        constructor(x: number, y: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $Vec3f}.
     */
    export type $Vec3f_ = { y?: number, x?: number, z?: number,  } | [y?: number, x?: number, z?: number, ];
}
