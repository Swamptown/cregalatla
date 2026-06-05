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
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $SyncedBlockEntity extends $BlockEntity {
        notifyUpdate(): void;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        blockHolderGetter(): $HolderGetter<$Block>;
        sendData(): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        removeItem(arg0: number, arg1: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        setChanged(): void;
        getMaxStackSize(): number;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
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
        self(): $Container;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        isEmpty(): boolean;
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
        getTank(arg0: number): $IFluidTank;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        hasTank(): boolean;
        getFluid(arg0: number): $FluidStack;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
        setLazyTickRate(arg0: number): void;
        lazyTick(): void;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        markVirtual(): void;
        isChunkUnloaded(): boolean;
        canPlayerUse(arg0: $Player): boolean;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        refreshBlockState(): void;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        tick(): void;
        invalidate(): void;
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        award(arg0: $CreateAdvancement): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set lazyTickRate(value: number);
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
        get chunkUnloaded(): boolean;
        get virtual(): boolean;
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        getExtraData(): $Object;
        setController(arg0: $BlockPos_): void;
        removeController(arg0: boolean): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        getLastKnownPos(): $BlockPos;
        preventConnectivityUpdate(): void;
        notifyMultiUpdated(): void;
        getMainConnectionAxis(): $Direction$Axis;
        setExtraData(arg0: $Object): void;
        modifyExtraData(arg0: $Object): $Object;
        getControllerBE<T extends $BlockEntity>(): T;
        isController(): boolean;
        getController(): $BlockPos;
        getMaxWidth(): number;
        getWidth(): number;
        getHeight(): number;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        get lastKnownPos(): $BlockPos;
        get mainConnectionAxis(): $Direction$Axis;
        get controllerBE(): T;
        get maxWidth(): number;
    }
}
