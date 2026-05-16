import { $BlockPos_, $Position, $SectionPos } from "@package/net/minecraft/core";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $FrustumExtension } from "@package/foundry/veil/ext";
import { $ViewportProvider, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Vector4fc, $Vector2dc, $Matrix4f, $Matrix4fc, $Vector3dc, $Vector3ic, $Vector2fc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $FrustumExtension, $CullFrustum, $ViewportProvider {
        prepare(arg0: number, arg1: number, arg2: number): void;
        getPosition(): $Vector3dc;
        veil$setupFrustum(arg0: $Matrix4fc, arg1: $Matrix4fc): void;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testLineSegment(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getPlanes(): $Vector4fc[];
        getModelViewProjectionMatrix(): $Matrix4fc;
        toFrustum(): $Frustum;
        offsetToFullyIncludeCameraCube(arg0: number): $Frustum;
        sodium$createViewport(): $Viewport;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testAab(arg0: $AABB_): boolean;
        isVisible(arg0: $AABB_): boolean;
        getViewVector(): $Vector3fc;
        cubeInFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testBlock(arg0: $BlockPos_): boolean;
        testSection(arg0: $SectionPos): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testPoint(arg0: $Position): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        static OFFSET_STEP: number;
        constructor(arg0: $Matrix4f, arg1: $Matrix4f);
        constructor(arg0: $Frustum);
        get position(): $Vector3dc;
        get planes(): $Vector4fc[];
        get modelViewProjectionMatrix(): $Matrix4fc;
        get viewVector(): $Vector3fc;
    }
}
