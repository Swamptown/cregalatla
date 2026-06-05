import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $List, $Map, $List_ } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Clearable, $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InvManipulationBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Record } from "@package/java/lang";
import { $PackagerBlockEntityAccessor } from "@package/net/zlt/create_vibrant_vaults/mixin/accessor";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/packager" {
    export class $PackagerBlockEntity extends $SmartBlockEntity implements $Clearable, $PackagerBlockEntityAccessor {
        triggerStockCheck(): void;
        unwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        recheckIfLinksPresent(): void;
        getAvailableItems(): $InventorySummary;
        updateSignAddress(): void;
        flashLink(): void;
        isTooBusyFor(arg0: $LogisticallyLinkedBehaviour$RequestType_): boolean;
        getTrayOffset(arg0: number): number;
        isTargetingSameInventory(arg0: $IdentifiedInventory_): boolean;
        attemptToSend(arg0: $List_<$PackagingRequest_>): void;
        redstoneModeActive(): boolean;
        getRenderedBox(): $ItemStack;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        clearContent(): void;
        activate(): void;
        createVibrantVaults$getInventory(): $PackagerItemHandler;
        targetInventory: $InvManipulationBehaviour;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        hasComparators: number;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get availableItems(): $InventorySummary;
        get renderedBox(): $ItemStack;
    }
    export class $PackagerItemHandler implements $IItemHandlerModifiable {
        getSlots(): number;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getStackInSlot(arg0: number): $ItemStack;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        isEmpty(): boolean;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        constructor(arg0: $PackagerBlockEntity);
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $IdentifiedInventory extends $Record {
        identifier(): $InventoryIdentifier;
        handler(): $IItemHandler;
        constructor(identifier: $InventoryIdentifier_, handler: $IItemHandler);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedInventory}.
     */
    export type $IdentifiedInventory_ = { handler?: $IItemHandler, identifier?: $InventoryIdentifier_,  } | [handler?: $IItemHandler, identifier?: $InventoryIdentifier_, ];
    export class $InventorySummary {
        getItemMap(): $Map<$Item, $List<$BigItemStack>>;
        addAllBigItemStacks(arg0: $List_<$BigItemStack>): void;
        addAllItemStacks(arg0: $List_<$ItemStack_>): void;
        getTotalOfMatching(arg0: $Predicate_<$ItemStack>): number;
        getCountOf(arg0: $ItemStack_): number;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getStacksByCount(): $List<$BigItemStack>;
        getStacks(): $List<$BigItemStack>;
        isEmpty(): boolean;
        add(arg0: $BigItemStack): void;
        add(arg0: $ItemStack_): void;
        add(arg0: $InventorySummary): void;
        add(arg0: $ItemStack_, arg1: number): void;
        copy(): $InventorySummary;
        erase(arg0: $ItemStack_): boolean;
        getTotalCount(): number;
        static CODEC: $Codec<$InventorySummary>;
        contributingLinks: number;
        static EMPTY: $InventorySummary;
        constructor();
        get itemMap(): $Map<$Item, $List<$BigItemStack>>;
        get stacksByCount(): $List<$BigItemStack>;
        get stacks(): $List<$BigItemStack>;
        get empty(): boolean;
        get totalCount(): number;
    }
    export class $PackagingRequest extends $Record {
        finalLink(): $MutableBoolean;
        packageCounter(): $MutableInt;
        orderId(): number;
        linkIndex(): number;
        item(): $ItemStack;
        context(): $PackageOrderWithCrafts;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $PackageOrderWithCrafts_): $PackagingRequest;
        address(): string;
        subtract(arg0: number): void;
        constructor(item: $ItemStack_, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $PackageOrderWithCrafts_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackagingRequest}.
     */
    export type $PackagingRequest_ = { linkIndex?: number, orderId?: number, count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt,  } | [linkIndex?: number, orderId?: number, count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt, ];
}
