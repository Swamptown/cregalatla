import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $BlockEntityRenderPredicate_, $BlockEntityRenderPredicate } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $Camera } from "@package/net/minecraft/client";
import { $Map_, $Map, $ArrayDeque, $Collection } from "@package/java/util";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $CameraTransform, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $CameraMovement_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
import { $Enum, $Record } from "@package/java/lang";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
import { $RenderSectionManagerAccessor as $RenderSectionManagerAccessor$1 } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $ChunkBuilderMeshingTask, $ChunkBuilderSortingTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
import { $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $RenderSectionExtension } from "@package/foundry/veil/forge/ext";
import { $SortedRenderLists, $ChunkRenderListIterable_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc, $Matrix4fc } from "@package/org/joml";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        updateChunks(arg0: boolean): void;
        getDebugStrings(): $Collection<string>;
        getTotalSections(): number;
        getVisibleChunkCount(): number;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        getBuilder(): $ChunkBuilder;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        needsUpdate(): boolean;
        markGraphDirty(): void;
        updateCameraState(arg0: $Vector3dc, arg1: $Camera): void;
        processGFNIMovement(arg0: $CameraMovement_): void;
        cleanupAndFlip(): void;
        uploadChunks(): void;
        tickVisibleRenders(): void;
        onChunkAdded(arg0: number, arg1: number): void;
        onChunkRemoved(arg0: number, arg1: number): void;
        getRenderLists(): $SortedRenderLists;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        handler$znk000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        scheduleSort(arg0: number, arg1: boolean): void;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        getChunkRenderer(): $ChunkRenderer;
        getTaskLists(): $Map<$ChunkUpdateType, $ArrayDeque<$RenderSection>>;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$ChunkUpdateType_, $ArrayDeque<$RenderSection>>): void;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $CommandList);
        get debugStrings(): $Collection<string>;
        get totalSections(): number;
        get visibleChunkCount(): number;
        get builder(): $ChunkBuilder;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        get chunkRenderer(): $ChunkRenderer;
    }
    export class $ChunkUpdateType extends $Enum<$ChunkUpdateType> {
        static values(): $ChunkUpdateType[];
        static valueOf(arg0: string): $ChunkUpdateType;
        getMaximumQueueSize(): number;
        getTaskEffort(): number;
        isImportant(): boolean;
        static getPromotionUpdateType(arg0: $ChunkUpdateType_, arg1: $ChunkUpdateType_): $ChunkUpdateType;
        static SORT: $ChunkUpdateType;
        static REBUILD: $ChunkUpdateType;
        static INITIAL_BUILD: $ChunkUpdateType;
        static IMPORTANT_REBUILD: $ChunkUpdateType;
        static IMPORTANT_SORT: $ChunkUpdateType;
        get maximumQueueSize(): number;
        get taskEffort(): number;
        get important(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkUpdateType}.
     */
    export type $ChunkUpdateType_ = "sort" | "initial_build" | "rebuild" | "important_rebuild" | "important_sort";
    export class $RenderSection implements $RenderSectionExtension {
        delete(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        getPosition(): $SectionPos;
        getOriginZ(): number;
        getVisibilityData(): number;
        getIncomingDirections(): number;
        getAdjacentMask(): number;
        setLastVisibleFrame(arg0: number): void;
        setIncomingDirections(arg0: number): void;
        addIncomingDirections(arg0: number): void;
        veil$markRendered(): void;
        veil$addIncomingDirections(arg0: number): void;
        handler$znl000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        getAdjacent(arg0: number): $RenderSection;
        getCenterY(): number;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        getSectionIndex(): number;
        getCenterX(): number;
        getCenterZ(): number;
        getCulledBlockEntities(): $BlockEntity[];
        getGlobalBlockEntities(): $BlockEntity[];
        setPendingUpdate(arg0: $ChunkUpdateType_): void;
        getTranslucentData(): $TranslucentData;
        getAnimatedSprites(): $TextureAtlasSprite[];
        getLastVisibleFrame(): number;
        setTranslucentData(arg0: $TranslucentData): void;
        getTaskCancellationToken(): $CancellationToken;
        getLastSubmittedFrame(): number;
        setTaskCancellationToken(arg0: $CancellationToken): void;
        setLastUploadFrame(arg0: number): void;
        isDisposed(): boolean;
        getLastUploadFrame(): number;
        getPendingUpdate(): $ChunkUpdateType;
        setLastSubmittedFrame(arg0: number): void;
        prepareTrigger(arg0: boolean): void;
        isBuilt(): boolean;
        getSquaredDistance(arg0: $BlockPos_): number;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        getChunkX(): number;
        getChunkY(): number;
        getChunkZ(): number;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        veil$hasNotRendered(): boolean;
        getOriginX(): number;
        getOriginY(): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get region(): $RenderRegion;
        get flags(): number;
        get position(): $SectionPos;
        get originZ(): number;
        get visibilityData(): number;
        get adjacentMask(): number;
        get centerY(): number;
        set info(value: $BuiltSectionInfo);
        get sectionIndex(): number;
        get centerX(): number;
        get centerZ(): number;
        get culledBlockEntities(): $BlockEntity[];
        get globalBlockEntities(): $BlockEntity[];
        get animatedSprites(): $TextureAtlasSprite[];
        get disposed(): boolean;
        get built(): boolean;
        get chunkX(): number;
        get chunkY(): number;
        get chunkZ(): number;
        get originX(): number;
        get originY(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        delete(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform): void;
    }
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        projection(): $Matrix4fc;
        modelView(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderMatrices}.
     */
    export type $ChunkRenderMatrices_ = { projection?: $Matrix4fc, modelView?: $Matrix4fc,  } | [projection?: $Matrix4fc, modelView?: $Matrix4fc, ];
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType_<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
    }
}
