import { $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/dev/devce/rocketnautics/client" {
    export class $StarBufferExposer {
    }
    export interface $StarBufferExposer {
        rocketnautics$starBuffer(): $VertexBuffer;
    }
    /**
     * Values that may be interpreted as {@link $StarBufferExposer}.
     */
    export type $StarBufferExposer_ = (() => $VertexBuffer);
}
