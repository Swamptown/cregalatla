import { $Record } from "@package/java/lang";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger" {
    export class $CameraMovement extends $Record {
        hasChanged(): boolean;
        end(): $Vector3dc;
        start(): $Vector3dc;
        constructor(start: $Vector3dc, end: $Vector3dc);
    }
    /**
     * Values that may be interpreted as {@link $CameraMovement}.
     */
    export type $CameraMovement_ = { start?: $Vector3dc, end?: $Vector3dc,  } | [start?: $Vector3dc, end?: $Vector3dc, ];
}
