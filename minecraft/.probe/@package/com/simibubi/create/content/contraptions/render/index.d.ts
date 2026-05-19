import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $BitSet, $List } from "@package/java/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Visual } from "@package/dev/engine_room/flywheel/api/visual";
import { $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/com/simibubi/create/content/contraptions/render" {
    export class $ActorVisual implements $Visual {
        tick(): void;
        update(arg0: number): void;
        delete(): void;
        beginFrame(): void;
        constructor(arg0: $VisualizationContext, arg1: $BlockAndTintGetter, arg2: $MovementContext);
    }
    export class $ContraptionMatrices {
        static translateToEntity(arg0: $Matrix4f, arg1: $Entity, arg2: number): void;
        getModelViewProjection(): $PoseStack;
        getViewProjection(): $PoseStack;
        getWorld(): $Matrix4f;
        getLight(): $Matrix4f;
        static transform(arg0: $PoseStack, arg1: $PoseStack): void;
        static clearStack(arg0: $PoseStack): void;
        getModel(): $PoseStack;
        constructor();
        get modelViewProjection(): $PoseStack;
        get viewProjection(): $PoseStack;
        get world(): $Matrix4f;
        get light(): $Matrix4f;
        get model(): $PoseStack;
    }
    export class $ClientContraption$RenderedBlocks extends $Record {
        lookup(): $Function<$BlockPos, $BlockState>;
        positions(): $Iterable<$BlockPos>;
        constructor(lookup: $Function_<$BlockPos, $BlockState>, positions: $Iterable_<$BlockPos>);
    }
    /**
     * Values that may be interpreted as {@link $ClientContraption$RenderedBlocks}.
     */
    export type $ClientContraption$RenderedBlocks_ = { positions?: $Iterable_<$BlockPos>, lookup?: $Function_<$BlockPos, $BlockState>,  } | [positions?: $Iterable_<$BlockPos>, lookup?: $Function_<$BlockPos, $BlockState>, ];
    export class $ClientContraption {
        childrenVersion(): number;
        readBlockEntity(arg0: $Level_, arg1: $StructureTemplate$StructureBlockInfo_, arg2: boolean): $BlockEntity;
        getRenderLevel(): $VirtualRenderWorld;
        getMatrices(): $ContraptionMatrices;
        getRenderedBlocks(): $ClientContraption$RenderedBlocks;
        getAndAdjustShouldRenderBlockEntities(): $BitSet;
        structureVersion(): number;
        resetRenderLevel(): void;
        invalidateStructure(): void;
        invalidateChildren(): void;
        getBlockEntity(arg0: $BlockPos_): $BlockEntity;
        shouldRenderBlockEntities: $BitSet;
        renderedBlockEntityView: $List<$BlockEntity>;
        scratchErroredBlockEntities: $BitSet;
        constructor(arg0: $Contraption);
        get renderLevel(): $VirtualRenderWorld;
        get matrices(): $ContraptionMatrices;
        get renderedBlocks(): $ClientContraption$RenderedBlocks;
        get andAdjustShouldRenderBlockEntities(): $BitSet;
    }
}
