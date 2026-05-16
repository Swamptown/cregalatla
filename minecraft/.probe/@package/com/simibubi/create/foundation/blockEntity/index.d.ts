import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $List, $Set_, $List_, $Collection } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction$Axis, $Direction$Axis_, $HolderGetter } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Object } from "@package/java/lang";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $SyncedBlockEntity extends $BlockEntity {
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        sendData(): void;
        blockHolderGetter(): $HolderGetter<$Block>;
        notifyUpdate(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ItemHandlerContainer implements $Container {
        isEmpty(): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        setChanged(): void;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getAllItems(): $List<$ItemStack>;
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $IMultiBlockEntityContainer$Fluid {
    }
    export interface $IMultiBlockEntityContainer$Fluid extends $IMultiBlockEntityContainer {
        hasTank(): boolean;
        getTank(arg0: number): $IFluidTank;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getFluid(arg0: number): $FluidStack;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
        remove(): void;
        initialize(): void;
        isVirtual(): boolean;
        destroy(): void;
        invalidate(): void;
        tick(): void;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        lazyTick(): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        setLazyTickRate(arg0: number): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        markVirtual(): void;
        isChunkUnloaded(): boolean;
        canPlayerUse(arg0: $Player): boolean;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        refreshBlockState(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        award(arg0: $CreateAdvancement): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get virtual(): boolean;
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
        set lazyTickRate(value: number);
        get chunkUnloaded(): boolean;
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        setExtraData(arg0: $Object): void;
        removeController(arg0: boolean): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        getLastKnownPos(): $BlockPos;
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        getMainConnectionAxis(): $Direction$Axis;
        modifyExtraData(arg0: $Object): $Object;
        setController(arg0: $BlockPos_): void;
        isController(): boolean;
        getControllerBE<T extends $BlockEntity>(): T;
        getController(): $BlockPos;
        getMaxWidth(): number;
        getWidth(): number;
        getHeight(): number;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        getExtraData(): $Object;
        get lastKnownPos(): $BlockPos;
        get mainConnectionAxis(): $Direction$Axis;
        get controllerBE(): T;
        get maxWidth(): number;
    }
}
