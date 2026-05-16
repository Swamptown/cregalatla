import { $Long2ObjectFunction_, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SectionBufferBuilderPack, $RenderBuffers, $SectionBufferBuilderPool, $RenderType, $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Queue, $List, $Set_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $RenderSectionAccessor } from "@package/dev/ryanhcode/sable/mixin/sublevel_render";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $AddSectionGeometryEvent$AdditionalSectionRenderer_ } from "@package/net/neoforged/neoforge/client/event";
import { $Supplier_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos, $BlockPos$MutableBlockPos, $Holder, $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $Level, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $ChunkBuilderAccess } from "@package/me/cominixo/betterf3/ducks";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $RenderDataMapConsumer } from "@package/net/fabricmc/fabric/impl/blockview/client";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $MeshData, $MeshData$SortState, $VertexSorting_, $ByteBufferBuilder$Result, $VertexSorting, $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $RenderSectionExtension, $RenderSectionExtension$DirtyListener_ } from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/vanilla";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/net/minecraft/client/renderer/chunk" {
    export class $SectionRenderDispatcher$RenderSection implements $RenderSectionAccessor, $RenderSectionExtension {
        isDirty(): boolean;
        cancelTasks(): boolean;
        getBuffer(arg0: $RenderType): $VertexBuffer;
        compileSync(arg0: $RenderRegionCache): void;
        releaseBuffers(): void;
        setOrigin(arg0: number, arg1: number, arg2: number): void;
        getDistToPlayerSqr(): number;
        handler$fob000$sable$setDirty(arg0: boolean, arg1: $CallbackInfo): void;
        resortTransparency(arg0: $RenderType, arg1: $SectionRenderDispatcher): boolean;
        createCompileTask(arg0: $RenderRegionCache): $SectionRenderDispatcher$RenderSection$CompileTask;
        isAxisAlignedWith(arg0: number, arg1: number, arg2: number): boolean;
        setCompiled(arg0: $SectionRenderDispatcher$CompiledSection): void;
        createVertexSorting(): $VertexSorting;
        sable$addDirtyListener(arg0: $RenderSectionExtension$DirtyListener_): void;
        sable$setListening(arg0: boolean): void;
        setDirty(arg0: boolean): void;
        getOrigin(): $BlockPos;
        updateGlobalBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        getBoundingBox(): $AABB;
        getCompiled(): $SectionRenderDispatcher$CompiledSection;
        isDirtyFromPlayer(): boolean;
        setNotDirty(): void;
        rebuildSectionAsync(arg0: $SectionRenderDispatcher, arg1: $RenderRegionCache): void;
        hasAllNeighbors(): boolean;
        getRelativeOrigin(arg0: $Direction_): $BlockPos;
        getGlobalBlockEntities(): $Set<$BlockEntity>;
        compiled: $AtomicReference<$SectionRenderDispatcher$CompiledSection>;
        static SIZE: number;
        origin: $BlockPos$MutableBlockPos;
        this$0: $SectionRenderDispatcher;
        index: number;
        constructor(arg0: $SectionRenderDispatcher, arg1: number, arg2: number, arg3: number, arg4: number);
        get distToPlayerSqr(): number;
        get boundingBox(): $AABB;
        get dirtyFromPlayer(): boolean;
        get globalBlockEntities(): $Set<$BlockEntity>;
    }
    export class $SectionRenderDispatcher implements $ChunkBuilderAccess {
        schedule(arg0: $SectionRenderDispatcher$RenderSection$CompileTask): void;
        setLevel(arg0: $ClientLevel): void;
        dispose(): void;
        uploadSectionLayer(arg0: $MeshData, arg1: $VertexBuffer): $CompletableFuture<void>;
        uploadSectionIndexBuffer(arg0: $ByteBufferBuilder$Result, arg1: $VertexBuffer): $CompletableFuture<void>;
        betterF3$getQueuedTaskCount(): number;
        betterF3$getUploadQueue(): $Queue<any>;
        betterF3$getBufferCount(): number;
        isQueueEmpty(): boolean;
        getCameraPosition(): $Vec3;
        getToBatchCount(): number;
        getToUpload(): number;
        getFreeBufferCount(): number;
        setCamera(arg0: $Vec3_): void;
        blockUntilClear(): void;
        getStats(): string;
        rebuildSectionSync(arg0: $SectionRenderDispatcher$RenderSection, arg1: $RenderRegionCache): void;
        uploadAllPendingUploads(): void;
        bufferPool: $SectionBufferBuilderPool;
        renderer: $LevelRenderer;
        sectionCompiler: $SectionCompiler;
        level: $ClientLevel;
        fixedBuffers: $SectionBufferBuilderPack;
        constructor(arg0: $ClientLevel, arg1: $LevelRenderer, arg2: $Executor_, arg3: $RenderBuffers, arg4: $BlockRenderDispatcher, arg5: $BlockEntityRenderDispatcher);
        get queueEmpty(): boolean;
        get cameraPosition(): $Vec3;
        get toBatchCount(): number;
        get toUpload(): number;
        get freeBufferCount(): number;
        set camera(value: $Vec3_);
        get stats(): string;
    }
    export class $RenderRegionCache$ChunkInfo {
        renderChunk(): $RenderChunk;
        chunk(): $LevelChunk;
        constructor(arg0: $LevelChunk);
    }
    export class $RenderChunk {
    }
    export class $SectionRenderDispatcher$CompiledSection {
        isEmpty(arg0: $RenderType): boolean;
        getRenderableBlockEntities(): $List<$BlockEntity>;
        hasNoRenderableLayers(): boolean;
        facesCanSeeEachother(arg0: $Direction_, arg1: $Direction_): boolean;
        transparencyState: $MeshData$SortState;
        hasBlocks: $Set<$RenderType>;
        visibilitySet: $VisibilitySet;
        static UNCOMPILED: $SectionRenderDispatcher$CompiledSection;
        static EMPTY: $SectionRenderDispatcher$CompiledSection;
        renderableBlockEntities: $List<$BlockEntity>;
        constructor();
    }
    export class $RenderChunkRegion implements $BlockAndTintGetter, $RenderDataMapConsumer, $RenderAttachedBlockView, $SubLevelContainerHolder {
        static index(arg0: number, arg1: number, arg2: number, arg3: number): number;
        fabric_acceptRenderDataMap(arg0: $Long2ObjectMap<any>): void;
        getHeight(): number;
        getFluidState(arg0: $BlockPos_): $FluidState;
        getBlockState(arg0: $BlockPos_): $BlockState;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        sable$getPlotContainer(): $SubLevelContainer;
        getMinBuildHeight(): number;
        getLightEngine(): $LevelLightEngine;
        getModelData(arg0: $BlockPos_): $ModelData;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getShade(arg0: $Direction_, arg1: boolean): number;
        getBlockTint(arg0: $BlockPos_, arg1: $ColorResolver_): number;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        canSeeSky(arg0: $BlockPos_): boolean;
        getBrightness(arg0: $LightLayer_, arg1: $BlockPos_): number;
        getRawBrightness(arg0: $BlockPos_, arg1: number): number;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockPos_, arg1: $BlockEntityType_<T>): (T) | undefined;
        clip(arg0: $ClipContext): $BlockHitResult;
        getLightEmission(arg0: $BlockPos_): number;
        getMaxLightLevel(): number;
        getBlockStates(arg0: $AABB_): $Stream<$BlockState>;
        isBlockInLine(arg0: $ClipBlockStateContext): $BlockHitResult;
        clipWithInteractionOverride(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $VoxelShape, arg4: $BlockState_): $BlockHitResult;
        getBlockFloorHeight(arg0: $VoxelShape, arg1: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(arg0: $BlockPos_): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(arg0: $BlockPos_): boolean;
        isOutsideBuildHeight(arg0: number): boolean;
        getSectionIndex(arg0: number): number;
        getSectionIndexFromSectionY(arg0: number): number;
        getSectionYFromSectionIndex(arg0: number): number;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
        static RADIUS: number;
        level: $Level;
        chunks: $RenderChunk[];
        static SIZE: number;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $RenderChunk[], arg4: $Long2ObjectFunction_<$ModelData>);
        /**
         * @deprecated
         */
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $RenderChunk[]);
        get height(): number;
        get minBuildHeight(): number;
        get lightEngine(): $LevelLightEngine;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $SectionCompiler {
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack, arg4: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>): $SectionCompiler$Results;
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack): $SectionCompiler$Results;
        constructor(arg0: $BlockRenderDispatcher, arg1: $BlockEntityRenderDispatcher);
    }
    export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable<$SectionRenderDispatcher$RenderSection$CompileTask> {
    }
    export class $VisGraph {
        resolve(): $VisibilitySet;
        setOpaque(arg0: $BlockPos_): void;
        constructor();
        set opaque(value: $BlockPos_);
    }
    export class $VisibilitySet {
        add(arg0: $Set_<$Direction_>): void;
        set(arg0: $Direction_, arg1: $Direction_, arg2: boolean): void;
        setAll(arg0: boolean): void;
        visibilityBetween(arg0: $Direction_, arg1: $Direction_): boolean;
        constructor();
        set all(value: boolean);
    }
    export class $RenderRegionCache {
        createRegion(arg0: $Level_, arg1: $SectionPos): $RenderChunkRegion;
        createRegion(arg0: $Level_, arg1: $SectionPos, arg2: boolean): $RenderChunkRegion;
        constructor();
    }
    export class $SectionRenderDispatcher$RenderSection$RebuildTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$SectionTaskResult extends $Enum<$SectionRenderDispatcher$SectionTaskResult> {
    }
    /**
     * Values that may be interpreted as {@link $SectionRenderDispatcher$SectionTaskResult}.
     */
    export type $SectionRenderDispatcher$SectionTaskResult_ = "successful" | "cancelled";
    export class $SectionCompiler$Results {
        release(): void;
        transparencyState: $MeshData$SortState;
        visibilitySet: $VisibilitySet;
        globalBlockEntities: $List<$BlockEntity>;
        blockEntities: $List<$BlockEntity>;
        renderedLayers: $Map<$RenderType, $MeshData>;
        constructor();
    }
}
