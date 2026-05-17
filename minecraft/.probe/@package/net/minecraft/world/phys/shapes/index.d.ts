import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $VoxelShapeAccessor } from "@package/com/copycatsplus/copycats/mixin/copycat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Iterator, $List, $SequencedCollection, $BitSet } from "@package/java/util";
import { $FastVoxelShapeIterable } from "@package/dev/ryanhcode/sable/mixinterface/voxel_shape_iteration";
import { $BitSetDiscreteVoxelShapeAccessor as $BitSetDiscreteVoxelShapeAccessor$1, $ArrayVoxelShapeInvoker } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/collisions/empty_space";
import { $Predicate_ } from "@package/java/util/function";
import { $Direction$Axis_, $BlockPos_, $Direction_, $AxisCycle_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $OffsetVoxelShapeCache } from "@package/net/caffeinemc/mods/lithium/common/shapes";
import { $SubShapeAccess, $DiscreteVSAccess, $VoxelShapeAccess, $BitSetDVSAccess, $ArrayVSAccess, $SliceShapeAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $AbstractDoubleList, $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Iterable_, $Object } from "@package/java/lang";
import { $DiscreteVoxelShapeAccessor, $BitSetDiscreteVoxelShapeAccessor } from "@package/dev/ryanhcode/sable/mixin/voxel_shape_iteration";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/phys/shapes" {
    export class $ArrayVoxelShape extends $VoxelShape implements $ArrayVoxelShapeInvoker, $VoxelShapeAccess, $ArrayVSAccess {
        static init$lithium_$md$d858b6$0(arg0: $DiscreteVoxelShape, arg1: $DoubleList, arg2: $DoubleList, arg3: $DoubleList): $ArrayVoxelShape;
        setXPoints(arg0: $DoubleList): void;
        setYPoints(arg0: $DoubleList): void;
        setZPoints(arg0: $DoubleList): void;
        getXPoints(): $DoubleList;
        getYPoints(): $DoubleList;
        getZPoints(): $DoubleList;
        shape: $DiscreteVoxelShape;
        constructor(arg0: $DiscreteVoxelShape, arg1: number[], arg2: number[], arg3: number[]);
        constructor(arg0: $DiscreteVoxelShape, arg1: $DoubleList, arg2: $DoubleList, arg3: $DoubleList);
    }
    export class $BitSetDiscreteVoxelShape extends $DiscreteVoxelShape implements $BitSetDiscreteVoxelShapeAccessor$1, $DiscreteVoxelShapeAccessor, $BitSetDiscreteVoxelShapeAccessor, $DiscreteVSAccess, $BitSetDVSAccess {
        static join(arg0: $DiscreteVoxelShape, arg1: $DiscreteVoxelShape, arg2: $IndexMerger, arg3: $IndexMerger, arg4: $IndexMerger, arg5: $BooleanOp_): $BitSetDiscreteVoxelShape;
        getIndex(arg0: number, arg1: number, arg2: number): number;
        isInterior(arg0: number, arg1: number, arg2: number): boolean;
        static withFilledBounds(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): $BitSetDiscreteVoxelShape;
        static forAllBoxes(arg0: $DiscreteVoxelShape, arg1: $DiscreteVoxelShape$IntLineConsumer_, arg2: boolean): void;
        getStorage(): $BitSet;
        invokeIsZStripFull(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        invokeIsXZRectangleFull(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        invokeClearZStrip(arg0: number, arg1: number, arg2: number, arg3: number): void;
        getXMin(): number;
        getYMin(): number;
        getZMin(): number;
        getXMax(): number;
        getYMax(): number;
        getZMax(): number;
        zSize: number;
        ySize: number;
        xSize: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $DiscreteVoxelShape);
        get storage(): $BitSet;
        get XMin(): number;
        get YMin(): number;
        get ZMin(): number;
        get XMax(): number;
        get YMax(): number;
        get ZMax(): number;
    }
    export class $SubShape extends $DiscreteVoxelShape implements $DiscreteVSAccess, $SubShapeAccess {
        getParent(): $DiscreteVoxelShape;
        getStartZ(): number;
        getEndZ(): number;
        getStartX(): number;
        getStartY(): number;
        getEndX(): number;
        getEndY(): number;
        zSize: number;
        ySize: number;
        xSize: number;
        constructor(arg0: $DiscreteVoxelShape, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        get parent(): $DiscreteVoxelShape;
        get startZ(): number;
        get endZ(): number;
        get startX(): number;
        get startY(): number;
        get endX(): number;
        get endY(): number;
    }
    export class $EntityCollisionContext implements $CollisionContext {
        handler$bon000$lithium$isHolding(arg0: $Item_, arg1: $CallbackInfoReturnable<any>): void;
        handler$bon000$lithium$canWalkOnFluid(arg0: $FluidState, arg1: $FluidState, arg2: $CallbackInfoReturnable<any>): void;
        getHeldItem(): $ItemStack;
        isAbove(arg0: $VoxelShape, arg1: $BlockPos_, arg2: boolean): boolean;
        isHoldingItem(arg0: $Item_): boolean;
        getEntity(): $Entity;
        canStandOnFluid(arg0: $FluidState, arg1: $FluidState): boolean;
        isDescending(): boolean;
        static EMPTY: $CollisionContext;
        constructor(arg0: boolean, arg1: number, arg2: $ItemStack_, arg3: $Predicate_<$FluidState>, arg4: $Entity);
        /**
         * @deprecated
         */
        constructor(arg0: $Entity);
        get heldItem(): $ItemStack;
        get entity(): $Entity;
        get descending(): boolean;
    }
    export class $Shapes {
        static join(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $BooleanOp_): $VoxelShape;
        static empty(): $VoxelShape;
        static create(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $VoxelShape;
        static create(arg0: $AABB_): $VoxelShape;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $VoxelShape;
        static collide(arg0: $Direction$Axis_, arg1: $AABB_, arg2: $Iterable_<$VoxelShape>, arg3: number): number;
        static block(): $VoxelShape;
        static or(arg0: $VoxelShape, arg1: $VoxelShape): $VoxelShape;
        static or(arg0: $VoxelShape, ...arg1: $VoxelShape[]): $VoxelShape;
        static lcm(arg0: number, arg1: number): number;
        static findBits(arg0: number, arg1: number): number;
        static createIndexMerger(arg0: number, arg1: $DoubleList, arg2: $DoubleList, arg3: boolean, arg4: boolean): $IndexMerger;
        static joinUnoptimized(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $BooleanOp_): $VoxelShape;
        static blockOccudes(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $Direction_): boolean;
        static mergedFaceOccludes(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $Direction_): boolean;
        static faceShapeOccludes(arg0: $VoxelShape, arg1: $VoxelShape): boolean;
        static joinIsNotEmpty(arg0: $VoxelShape, arg1: $VoxelShape, arg2: $BooleanOp_): boolean;
        static getFaceShape(arg0: $VoxelShape, arg1: $Direction_): $VoxelShape;
        static INFINITY: $VoxelShape;
        static BIG_EPSILON: number;
        static EPSILON: number;
        constructor();
    }
    export class $CollisionContext {
        static of(arg0: $Entity): $CollisionContext;
        static empty(): $CollisionContext;
    }
    export interface $CollisionContext {
        isAbove(arg0: $VoxelShape, arg1: $BlockPos_, arg2: boolean): boolean;
        isHoldingItem(arg0: $Item_): boolean;
        canStandOnFluid(arg0: $FluidState, arg1: $FluidState): boolean;
        isDescending(): boolean;
        get descending(): boolean;
    }
    export class $VoxelShape implements $OffsetVoxelShapeCache, $VoxelShapeAccessor, $FastVoxelShapeIterable, $VoxelShapeAccess {
        get(arg0: $Direction$Axis_, arg1: number): number;
        min(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        min(arg0: $Direction$Axis_): number;
        max(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        max(arg0: $Direction$Axis_): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        collide(arg0: $Direction$Axis_, arg1: $AABB_, arg2: number): number;
        move(arg0: number, arg1: number, arg2: number): $VoxelShape;
        optimize(): $VoxelShape;
        singleEncompassing(): $VoxelShape;
        lithium$setShape(arg0: number, arg1: $Direction_, arg2: $VoxelShape): void;
        lithium$getOffsetSimplifiedShape(arg0: number, arg1: $Direction_): $VoxelShape;
        sable$allBoxes(): $Iterator<any>;
        forAllBoxes(arg0: $Shapes$DoubleLineConsumer_): void;
        forAllEdges(arg0: $Shapes$DoubleLineConsumer_): void;
        findIndex(arg0: $Direction$Axis_, arg1: number): number;
        collideX(arg0: $AxisCycle_, arg1: $AABB_, arg2: number): number;
        getCoords(arg0: $Direction$Axis_): $DoubleList;
        clip(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_): $BlockHitResult;
        closestPointTo(arg0: $Vec3_): ($Vec3) | undefined;
        toAabbs(): $List<$AABB>;
        getFaceShape(arg0: $Direction_): $VoxelShape;
        getShape(): $DiscreteVoxelShape;
        copycats$getShape(): $DiscreteVoxelShape;
        copycats$setShape(arg0: $DiscreteVoxelShape): void;
        copycats$callGetCoords(arg0: $Direction$Axis_): $DoubleList;
        getFaces(): $VoxelShape[];
        setShape(arg0: $DiscreteVoxelShape): void;
        setFaces(arg0: $VoxelShape[]): void;
        shape: $DiscreteVoxelShape;
        constructor(arg0: $DiscreteVoxelShape);
        get empty(): boolean;
    }
    export class $CubePointRange extends $AbstractDoubleList {
        handler$bop000$lithium$initScale(arg0: number, arg1: $CallbackInfo): void;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        top(): number;
        pop(): number;
        reversed(): $SequencedCollection<number>;
        constructor(arg0: number);
    }
    export class $DiscreteVoxelShape$IntLineConsumer {
    }
    export interface $DiscreteVoxelShape$IntLineConsumer {
        consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntLineConsumer}.
     */
    export type $DiscreteVoxelShape$IntLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $BooleanOp {
        static SAME: $BooleanOp;
        static OR: $BooleanOp;
        static TRUE: $BooleanOp;
        static NOT_AND: $BooleanOp;
        static ONLY_SECOND: $BooleanOp;
        static FIRST: $BooleanOp;
        static CAUSED_BY: $BooleanOp;
        static NOT_SAME: $BooleanOp;
        static NOT_OR: $BooleanOp;
        static AND: $BooleanOp;
        static FALSE: $BooleanOp;
        static SECOND: $BooleanOp;
        static CAUSES: $BooleanOp;
        static ONLY_FIRST: $BooleanOp;
        static NOT_FIRST: $BooleanOp;
        static NOT_SECOND: $BooleanOp;
    }
    export interface $BooleanOp {
        apply(arg0: boolean, arg1: boolean): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BooleanOp}.
     */
    export type $BooleanOp_ = ((arg0: boolean, arg1: boolean) => boolean);
    export class $IndirectMerger implements $IndexMerger {
        size(): number;
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        constructor(arg0: $DoubleList, arg1: $DoubleList, arg2: boolean, arg3: boolean);
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape$IntFaceConsumer {
    }
    export interface $DiscreteVoxelShape$IntFaceConsumer {
        consume(arg0: $Direction_, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntFaceConsumer}.
     */
    export type $DiscreteVoxelShape$IntFaceConsumer_ = ((arg0: $Direction, arg1: number, arg2: number, arg3: number) => void);
    export class $CubeVoxelShape extends $VoxelShape {
        shape: $DiscreteVoxelShape;
        constructor(arg0: $DiscreteVoxelShape);
    }
    export class $NonOverlappingMerger extends $AbstractDoubleList implements $IndexMerger {
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        top(): number;
        pop(): number;
        reversed(): $SequencedCollection<number>;
        constructor(arg0: $DoubleList, arg1: $DoubleList, arg2: boolean);
        get list(): $DoubleList;
    }
    export class $DiscreteVoxelShape implements $DiscreteVoxelShapeAccessor, $DiscreteVSAccess {
        isEmpty(): boolean;
        fill(arg0: number, arg1: number, arg2: number): void;
        getSize(arg0: $Direction$Axis_): number;
        forAllFaces(arg0: $DiscreteVoxelShape$IntFaceConsumer_): void;
        firstFull(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        firstFull(arg0: $Direction$Axis_): number;
        lastFull(arg0: $Direction$Axis_, arg1: number, arg2: number): number;
        lastFull(arg0: $Direction$Axis_): number;
        forAllBoxes(arg0: $DiscreteVoxelShape$IntLineConsumer_, arg1: boolean): void;
        forAllEdges(arg0: $DiscreteVoxelShape$IntLineConsumer_, arg1: boolean): void;
        isFullWide(arg0: number, arg1: number, arg2: number): boolean;
        isFullWide(arg0: $AxisCycle_, arg1: number, arg2: number, arg3: number): boolean;
        isFull(arg0: number, arg1: number, arg2: number): boolean;
        isFull(arg0: $AxisCycle_, arg1: number, arg2: number, arg3: number): boolean;
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        zSize: number;
        ySize: number;
        xSize: number;
        constructor(arg0: number, arg1: number, arg2: number);
        get empty(): boolean;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
    export class $OffsetDoubleList extends $AbstractDoubleList {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        top(): number;
        pop(): number;
        reversed(): $SequencedCollection<number>;
        constructor(arg0: $DoubleList, arg1: number);
    }
    export class $IndexMerger$IndexConsumer {
    }
    export interface $IndexMerger$IndexConsumer {
        merge(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IndexMerger$IndexConsumer}.
     */
    export type $IndexMerger$IndexConsumer_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $IdenticalMerger implements $IndexMerger {
        size(): number;
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        constructor(arg0: $DoubleList);
        get list(): $DoubleList;
    }
    export class $DiscreteCubeMerger implements $IndexMerger {
        size(): number;
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        constructor(arg0: number, arg1: number);
        get list(): $DoubleList;
    }
    export class $IndexMerger {
    }
    export interface $IndexMerger {
        size(): number;
        forMergedIndexes(arg0: $IndexMerger$IndexConsumer_): boolean;
        getList(): $DoubleList;
        get list(): $DoubleList;
    }
    export class $SliceShape extends $VoxelShape implements $SliceShapeAccess, $VoxelShapeAccess {
        getDelegate(): $VoxelShape;
        getAxis(): $Direction$Axis;
        shape: $DiscreteVoxelShape;
        constructor(arg0: $VoxelShape, arg1: $Direction$Axis_, arg2: number);
        get delegate(): $VoxelShape;
        get axis(): $Direction$Axis;
    }
    export class $Shapes$DoubleLineConsumer {
    }
    export interface $Shapes$DoubleLineConsumer {
        consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Shapes$DoubleLineConsumer}.
     */
    export type $Shapes$DoubleLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
