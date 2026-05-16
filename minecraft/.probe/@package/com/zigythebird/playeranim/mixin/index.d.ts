import { $ModelPart } from "@package/net/minecraft/client/model/geom";

declare module "@package/com/zigythebird/playeranim/mixin" {
    export class $CameraAccessor {
    }
    export interface $CameraAccessor {
        setDetached(arg0: boolean): void;
        set detached(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $CameraAccessor}.
     */
    export type $CameraAccessor_ = ((arg0: boolean) => void);
    export class $PlayerModelAccessor {
    }
    export interface $PlayerModelAccessor {
        getCloak(): $ModelPart;
        get cloak(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelAccessor}.
     */
    export type $PlayerModelAccessor_ = (() => $ModelPart);
}
