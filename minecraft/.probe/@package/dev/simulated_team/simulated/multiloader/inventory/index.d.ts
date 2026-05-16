import { $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Set_, $List, $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/dev/simulated_team/simulated/multiloader/inventory" {
    export class $AbstractContainer {
    }
    export interface $AbstractContainer extends $NBTSerializable, $Container {
        isEmpty(): boolean;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        populateFields(arg0: $ContainerSlot): void;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        removeItem(arg0: number, arg1: number): $ItemStack;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        setChanged(): void;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        get empty(): boolean;
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get maxStackSize(): number;
        get containerSize(): number;
    }
    export class $SingleSlotContainer implements $AbstractContainer {
        isEmpty(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        insertGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        insertSlot(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        extractGeneral(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractSlot(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        canInsertItem(arg0: $ItemInfoWrapper_): boolean;
        canInsertItem(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot): boolean;
        onStackItemChange(arg0: $ContainerSlot, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getInventoryAsList(): $List<$ContainerSlot>;
        getPopulatedSlots(): $Set<$ContainerSlot>;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        setChanged(): void;
        getContainerSize(): number;
        commonInsert(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        commonExtract(arg0: $ItemInfoWrapper_, arg1: $ContainerSlot, arg2: number, arg3: boolean): number;
        canExtractFromSlot(arg0: $ContainerSlot): boolean;
        populateFields(arg0: $ContainerSlot): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
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
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: number);
        get inventoryAsList(): $List<$ContainerSlot>;
        get populatedSlots(): $Set<$ContainerSlot>;
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $NBTSerializable {
    }
    export interface $NBTSerializable {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
    }
    export class $ItemInfoWrapper extends $Record {
        type(): $Item;
        patchMap(): $DataComponentPatch;
        static generateFromStack(arg0: $ItemStack_): $ItemInfoWrapper;
        static generateFromInfo(arg0: $ItemInfoWrapper_): $ItemStack;
        constructor(type: $Item_, patchMap: $DataComponentPatch_);
    }
    /**
     * Values that may be interpreted as {@link $ItemInfoWrapper}.
     */
    export type $ItemInfoWrapper_ = { patchMap?: $DataComponentPatch_, type?: $Item_,  } | [patchMap?: $DataComponentPatch_, type?: $Item_, ];
    export class $ContainerSlot implements $NBTSerializable {
        clear(): void;
        static of(arg0: number, arg1: $Item_, arg2: $AbstractContainer): $ContainerSlot;
        static of(arg0: number, arg1: $ItemStack_, arg2: $AbstractContainer): $ContainerSlot;
        isEmpty(): boolean;
        getParent(): $AbstractContainer;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        getType(): $Item;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getIndex(): number;
        getStack(): $ItemStack;
        canInsert(arg0: $ItemInfoWrapper_): boolean;
        insertStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        extractStack(arg0: $ItemInfoWrapper_, arg1: number, arg2: boolean): number;
        canExtract(): boolean;
        setStack(arg0: $ItemStack_): void;
        shrink(arg0: number): void;
        static EMPTY: $ContainerSlot;
        constructor();
        constructor(arg0: number, arg1: $ItemStack_, arg2: $Item_, arg3: $AbstractContainer);
        get empty(): boolean;
        get parent(): $AbstractContainer;
        get type(): $Item;
        get index(): number;
    }
}
