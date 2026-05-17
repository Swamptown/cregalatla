import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ParticleRenderType_, $ParticleRenderType, $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $Comparator, $Map, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PositionedRect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Consumer_, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix3f, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/client/scene" {
    export class $ISceneBlockRenderHook {
    }
    export interface $ISceneBlockRenderHook {
        apply(arg0: $RenderType): void;
        applyBESR(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $PoseStack, arg4: number): void;
        applyVertexConsumerWrapper(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $WorldSceneRenderer$VertexConsumerWrapper, arg4: $RenderType, arg5: number): void;
    }
    export class $ISceneEntityRenderHook {
    }
    export interface $ISceneEntityRenderHook {
        applyEntity(arg0: $Level_, arg1: $Entity, arg2: $PoseStack, arg3: number): void;
    }
    export class $WorldSceneRenderer {
        rayTrace(arg0: $Vector3f): $BlockHitResult;
        deleteCacheBuffer(): $WorldSceneRenderer;
        removeAllRenderedBlocks(): $WorldSceneRenderer;
        getPositionedRect(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        unProject(arg0: number, arg1: number): $Vector3f;
        unProject(arg0: number, arg1: number, arg2: boolean): $Vector3f;
        getPositionRectRevert(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        static setDefaultRenderLayerState(arg0: $RenderType): void;
        isEndBatchLast(): boolean;
        setEndBatchLast(arg0: boolean): $WorldSceneRenderer;
        setSceneEntityRenderHook(arg0: $ISceneEntityRenderHook): $WorldSceneRenderer;
        getLastHit(): $Vector3f;
        getLookAt(): $Vector3f;
        getWorldUp(): $Vector3f;
        getParticleManager(): $ParticleManager;
        setOnLookingAt(arg0: $Consumer_<$BlockHitResult>): $WorldSceneRenderer;
        useOrtho(arg0: boolean): $WorldSceneRenderer;
        useCacheBuffer(arg0: boolean): $WorldSceneRenderer;
        setCameraOrtho(arg0: number, arg1: number, arg2: number): void;
        setCameraOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setCameraLookAt(arg0: $Vector3f, arg1: number, arg2: number, arg3: number): void;
        setCameraLookAt(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f): void;
        setBeforeWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        releaseResource(): void;
        needCompileCache(): $WorldSceneRenderer;
        setBeforeBatchEnd(arg0: $BiConsumer_<$MultiBufferSource, number>): $WorldSceneRenderer;
        setAfterWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        setParticleManager(arg0: $ParticleManager): $WorldSceneRenderer;
        removeRenderedBlocks(arg0: $Collection_<$BlockPos_>): $WorldSceneRenderer;
        addRenderedBlocks(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $WorldSceneRenderer;
        getLastTraceResult(): $BlockHitResult;
        getEyePos(): $Vector3f;
        isCompiling(): boolean;
        getCompileProgress(): number;
        isUseCache(): boolean;
        setBlocked(arg0: $Set_<$BlockPos_>): $WorldSceneRenderer;
        setFov(arg0: number): $WorldSceneRenderer;
        render(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getFov(): number;
        project(arg0: $Vector3f): $Vector3f;
        world: $Level;
        renderedBlocksMap: $Map<$Collection<$BlockPos>, $ISceneBlockRenderHook>;
        constructor(arg0: $Level_);
        static set defaultRenderLayerState(value: $RenderType);
        set sceneEntityRenderHook(value: $ISceneEntityRenderHook);
        get lastHit(): $Vector3f;
        get lookAt(): $Vector3f;
        get worldUp(): $Vector3f;
        set onLookingAt(value: $Consumer_<$BlockHitResult>);
        set beforeWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set beforeBatchEnd(value: $BiConsumer_<$MultiBufferSource, number>);
        set afterWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        get lastTraceResult(): $BlockHitResult;
        get eyePos(): $Vector3f;
        get compiling(): boolean;
        get compileProgress(): number;
        get useCache(): boolean;
        set blocked(value: $Set_<$BlockPos_>);
    }
    export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        clearOffset(): void;
        setOffsetX(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetY(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setColorMultiplier(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setOffsetZ(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        clearColor(): void;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        setColor(arg0: number): $VertexConsumer;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        setOverlay(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        constructor(arg0: $VertexConsumer);
        set offsetX(value: number);
        set offsetY(value: number);
        set offsetZ(value: number);
        set whiteAlpha(value: number);
        set light(value: number);
        set overlay(value: number);
    }
    export class $ParticleManager {
        tick(): void;
        setLevel(arg0: $Level_): void;
        static makeParticleRenderTypeComparator(arg0: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        clearAllParticles(): void;
        getParticleAmount(): number;
        render(arg0: $PoseStack, arg1: $Camera, arg2: number, arg3: $Predicate_<$ParticleRenderType>): void;
        addParticle(arg0: $Particle): void;
        level: $Level;
        constructor();
        get particleAmount(): number;
    }
}
