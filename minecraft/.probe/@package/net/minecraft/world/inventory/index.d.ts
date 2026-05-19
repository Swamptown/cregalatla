import { $IModularUIHolderMenu } from "@package/com/lowdragmc/lowdraglib2/gui/holder";
import { $UISyncManager } from "@package/com/lowdragmc/lowdraglib2/gui/sync";
import { $CraftingResultSlotAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $RecipeType_, $Recipe, $RecipeHolder, $CraftingInput, $AbstractCookingRecipe, $CraftingInput$Positioned, $RecipeHolder_, $CraftingRecipe, $SingleRecipeInput, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $EquipmentSlot_, $EquipmentSlot, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RecipeBookCategories } from "@package/net/minecraft/client";
import { $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $Set_, $Map, $OptionalInt, $List, $List_, $Optional } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorCraftingMenu, $AccessorCrafterMenu, $AccessorInventoryMenu } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AbstractHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SlotAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $ContainerListener as $ContainerListener$1, $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $BiFunction, $Predicate_, $Predicate, $BiConsumer_, $BiFunction_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Registry, $Holder_, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IMenuTypeExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Enum, $Record, $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $MerchantOffer, $MerchantOffers, $Merchant } from "@package/net/minecraft/world/item/trading";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $SlotAccessor as $SlotAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player, $StackedContents, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ItemSlot } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Stream } from "@package/java/util/stream";
import { $ContainerLevelAccessMixin } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $EnchantmentMenuExtension } from "@package/com/almostreliable/morejs/features/enchantment";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $MenuTypeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $BlockEntity, $EnderChestBlockEntity, $BannerPattern } from "@package/net/minecraft/world/level/block/entity";
export * as tooltip from "@package/net/minecraft/world/inventory/tooltip";

declare module "@package/net/minecraft/world/inventory" {
    export class $FurnaceFuelSlot extends $Slot {
        static isBucket(arg0: $ItemStack_): boolean;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $AbstractFurnaceMenu, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $InventoryMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorInventoryMenu {
        static isHotbarSlot(arg0: number): boolean;
        getResultSlots(): $ResultContainer;
        getOwner(): $Player;
        getCraftSlots(): $CraftingContainer;
        static CRAFT_SLOT_END: number;
        static BLOCK_ATLAS: $ResourceLocation;
        static EMPTY_ARMOR_SLOT_BOOTS: $ResourceLocation;
        static TEXTURE_EMPTY_SLOTS: $Map<$EquipmentSlot, $ResourceLocation>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static USE_ROW_SLOT_START: number;
        static EMPTY_ARMOR_SLOT_CHESTPLATE: $ResourceLocation;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static CRAFT_SLOT_COUNT: number;
        static SHIELD_SLOT: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static ARMOR_SLOT_START: number;
        static ARMOR_SLOT_COUNT: number;
        static INV_SLOT_START: number;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        static CRAFT_SLOT_START: number;
        owner: $Player;
        static EMPTY_ARMOR_SLOT_HELMET: $ResourceLocation;
        static SLOT_IDS: $EquipmentSlot[];
        active: boolean;
        lastSlots: $NonNullList<$ItemStack>;
        static ARMOR_SLOT_END: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static USE_ROW_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_SHIELD: $ResourceLocation;
        static SLOT_CLICKED_OUTSIDE: number;
        static INV_SLOT_END: number;
        static EMPTY_ARMOR_SLOT_LEGGINGS: $ResourceLocation;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        static CONTAINER_ID: number;
        constructor(arg0: $Inventory, arg1: boolean, arg2: $Player);
        get resultSlots(): $ResultContainer;
        get craftSlots(): $CraftingContainer;
    }
    export class $BeaconMenu$PaymentSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MerchantResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $Merchant, arg2: $MerchantContainer, arg3: number, arg4: number, arg5: number);
    }
    export class $SlotRanges {
        static allNames(): $Stream<string>;
        static nameToIds(arg0: string): $SlotRange;
        static singleSlotNames(): $Stream<string>;
        static CODEC: $Codec<$SlotRange>;
        constructor();
    }
    export class $ArmorSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: $LivingEntity, arg2: $EquipmentSlot_, arg3: number, arg4: number, arg5: number, arg6: $ResourceLocation_);
    }
    export class $ResultSlot extends $Slot implements $CraftingResultSlotAccessor {
        getInput(): $CraftingContainer;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $CraftingContainer, arg2: $Container, arg3: number, arg4: number, arg5: number);
        get input(): $CraftingContainer;
    }
    export class $HorseInventoryMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $AbstractHorse, arg4: number);
    }
    export class $BrewingStandMenu$IngredientsSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $SmithingMenu extends $ItemCombinerMenu {
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static ADDITIONAL_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static SLOT_Y_PLACEMENT: number;
        static TEMPLATE_SLOT_X_PLACEMENT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        static TEMPLATE_SLOT: number;
        lastSlots: $NonNullList<$ItemStack>;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static BASE_SLOT_X_PLACEMENT: number;
        ldlib2$modularUI: $ModularUI;
        static BASE_SLOT: number;
        menuType: $MenuType<never>;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IMenuTypeExtension<T>, $MenuTypeKJS {
        create(arg0: number, arg1: $Inventory): T;
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        requiredFeatures(): $FeatureFlagSet;
        kjs$getKey(): $ResourceKey<any>;
        kjs$getId(): string;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        asHolder(): $Holder<T>;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        static ENCHANTMENT: $MenuType<$EnchantmentMenu>;
        static LOOM: $MenuType<$LoomMenu>;
        static BLAST_FURNACE: $MenuType<$BlastFurnaceMenu>;
        static CARTOGRAPHY_TABLE: $MenuType<$CartographyTableMenu>;
        static BEACON: $MenuType<$BeaconMenu>;
        static MERCHANT: $MenuType<$MerchantMenu>;
        static CRAFTER_3x3: $MenuType<$CrafterMenu>;
        static FURNACE: $MenuType<$FurnaceMenu>;
        static ANVIL: $MenuType<$AnvilMenu>;
        static STONECUTTER: $MenuType<$StonecutterMenu>;
        static GENERIC_3x3: $MenuType<$DispenserMenu>;
        static CRAFTING: $MenuType<$CraftingMenu>;
        static GENERIC_9x1: $MenuType<$ChestMenu>;
        static GENERIC_9x2: $MenuType<$ChestMenu>;
        static GENERIC_9x3: $MenuType<$ChestMenu>;
        static GENERIC_9x4: $MenuType<$ChestMenu>;
        static GENERIC_9x5: $MenuType<$ChestMenu>;
        static GENERIC_9x6: $MenuType<$ChestMenu>;
        static BREWING_STAND: $MenuType<$BrewingStandMenu>;
        static SMOKER: $MenuType<$SmokerMenu>;
        static SMITHING: $MenuType<$SmithingMenu>;
        static HOPPER: $MenuType<$HopperMenu>;
        static LECTERN: $MenuType<$LecternMenu>;
        static GRINDSTONE: $MenuType<$GrindstoneMenu>;
        static SHULKER_BOX: $MenuType<$ShulkerBoxMenu>;
        constructor(arg0: $MenuType$MenuSupplier_<T>, arg1: $FeatureFlagSet);
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<T>>;
        get tags(): $List<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $MenuType}.
     */
    export type $MenuType_<T> = RegistryTypes.Menu;
    export class $MerchantContainer implements $Container {
        getActiveOffer(): $MerchantOffer;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        updateSellItem(): void;
        setSelectionHint(arg0: number): void;
        getFutureXp(): number;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
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
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        constructor(arg0: $Merchant);
        get activeOffer(): $MerchantOffer;
        set selectionHint(value: number);
        get futureXp(): number;
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeaconMenu extends $AbstractContainerMenu {
        static encodeEffect(arg0: $Holder_<$MobEffect>): number;
        static decodeEffect(arg0: number): $Holder<$MobEffect>;
        getPrimaryEffect(): $Holder<$MobEffect>;
        getSecondaryEffect(): $Holder<$MobEffect>;
        updateEffects(arg0: ($Holder_<$MobEffect>) | undefined, arg1: ($Holder_<$MobEffect>) | undefined): void;
        hasPayment(): boolean;
        getLevels(): number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Container);
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData, arg3: $ContainerLevelAccess_);
        get primaryEffect(): $Holder<$MobEffect>;
        get secondaryEffect(): $Holder<$MobEffect>;
        get levels(): number;
    }
    export class $CraftingMenu extends $RecipeBookMenu<$CraftingInput, $CraftingRecipe> implements $AccessorCraftingMenu {
        static slotChangedCraftingGrid(arg0: $AbstractContainerMenu, arg1: $Level_, arg2: $Player, arg3: $CraftingContainer, arg4: $ResultContainer, arg5: $RecipeHolder_<$CraftingRecipe>): void;
        getPlayer(): $Player;
        getResultSlots(): $ResultContainer;
        getCraftSlots(): $CraftingContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
        get resultSlots(): $ResultContainer;
        get craftSlots(): $CraftingContainer;
    }
    export class $CrafterSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number, arg4: $CrafterMenu);
    }
    export class $ChestMenu extends $AbstractContainerMenu {
        getContainer(): $Container;
        static oneRow(arg0: number, arg1: $Inventory): $ChestMenu;
        static twoRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static fourRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static fiveRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static sixRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        getRowCount(): number;
        static threeRows(arg0: number, arg1: $Inventory): $ChestMenu;
        static threeRows(arg0: number, arg1: $Inventory, arg2: $Container): $ChestMenu;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $Container, arg4: number);
        get container(): $Container;
        get rowCount(): number;
    }
    export class $SmokerMenu extends $AbstractFurnaceMenu {
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $ClickAction extends $Enum<$ClickAction> {
        static values(): $ClickAction[];
        static valueOf(arg0: string): $ClickAction;
        static SECONDARY: $ClickAction;
        static PRIMARY: $ClickAction;
    }
    /**
     * Values that may be interpreted as {@link $ClickAction}.
     */
    export type $ClickAction_ = "primary" | "secondary";
    export class $BrewingStandMenu extends $AbstractContainerMenu {
        getBrewingTicks(): number;
        getFuel(): number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
        get brewingTicks(): number;
        get fuel(): number;
    }
    export class $BrewingStandMenu$PotionSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
    }
    export interface $MenuType$MenuSupplier<T extends $AbstractContainerMenu> {
        create(arg0: number, arg1: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $MenuType$MenuSupplier}.
     */
    export type $MenuType$MenuSupplier_<T> = ((arg0: number, arg1: $Inventory) => T);
    export class $LecternMenu extends $AbstractContainerMenu {
        getBook(): $ItemStack;
        getPage(): number;
        static BUTTON_PREV_PAGE: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static BUTTON_PAGE_JUMP_RANGE_START: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static BUTTON_NEXT_PAGE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static BUTTON_TAKE_BOOK: number;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Container, arg2: $ContainerData);
        constructor(arg0: number);
        get book(): $ItemStack;
        get page(): number;
    }
    export class $CraftingContainer {
    }
    export interface $CraftingContainer extends $Container, $StackedContentsCompatible {
        getItems(): $List<$ItemStack>;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        getWidth(): number;
        getHeight(): number;
        get items(): $List<$ItemStack>;
        get width(): number;
        get height(): number;
    }
    export class $LoomMenu extends $AbstractContainerMenu {
        getSelectedBannerPatternIndex(): number;
        getResultSlot(): $Slot;
        getSelectablePatterns(): $List<$Holder<$BannerPattern>>;
        registerUpdateListener(arg0: $Runnable_): void;
        getBannerSlot(): $Slot;
        getDyeSlot(): $Slot;
        getPatternSlot(): $Slot;
        slotUpdateListener: $Runnable;
        lastSoundTime: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        bannerSlot: $Slot;
        lastSlots: $NonNullList<$ItemStack>;
        dyeSlot: $Slot;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        selectedBannerPatternIndex: $DataSlot;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get resultSlot(): $Slot;
        get selectablePatterns(): $List<$Holder<$BannerPattern>>;
        get patternSlot(): $Slot;
    }
    export class $DispenserMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $StackedContentsCompatible {
    }
    export interface $StackedContentsCompatible {
        fillStackedContents(arg0: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $StackedContentsCompatible}.
     */
    export type $StackedContentsCompatible_ = ((arg0: $StackedContents) => void);
    export class $ShulkerBoxSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $PlayerEnderChestContainer extends $SimpleContainer {
        isActiveChest(arg0: $EnderChestBlockEntity): boolean;
        setActiveChest(arg0: $EnderChestBlockEntity): void;
        size: number;
        listeners: $List<$ContainerListener$1>;
        items: $NonNullList<$ItemStack>;
        constructor();
    }
    export class $ItemCombinerMenuSlotDefinition {
        getResultSlotIndex(): number;
        getNumOfInputSlots(): number;
        getInputSlotIndexes(): $List<number>;
        getResultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        getSlot(arg0: number): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        static create(): $ItemCombinerMenuSlotDefinition$Builder;
        getSlots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
        hasSlot(arg0: number): boolean;
        constructor(arg0: $List_<$ItemCombinerMenuSlotDefinition$SlotDefinition_>, arg1: $ItemCombinerMenuSlotDefinition$SlotDefinition_);
        get resultSlotIndex(): number;
        get numOfInputSlots(): number;
        get inputSlotIndexes(): $List<number>;
        get resultSlot(): $ItemCombinerMenuSlotDefinition$SlotDefinition;
        get slots(): $List<$ItemCombinerMenuSlotDefinition$SlotDefinition>;
    }
    export class $SlotRange {
        static of(arg0: string, arg1: $IntList): $SlotRange;
    }
    export interface $SlotRange extends $StringRepresentable {
        size(): number;
        slots(): $IntList;
    }
    export class $MenuConstructor {
    }
    export interface $MenuConstructor {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
    }
    /**
     * Values that may be interpreted as {@link $MenuConstructor}.
     */
    export type $MenuConstructor_ = ((arg0: number, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu);
    export class $ContainerData {
    }
    export interface $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        get count(): number;
    }
    export class $EnchantmentMenu extends $AbstractContainerMenu implements $EnchantmentMenuExtension {
        getGoldCount(): number;
        morejs$getState(): $Optional<any>;
        morejs$getContainer(): $Container;
        morejs$getCosts(): number[];
        morejs$getEnchantmentClues(): number[];
        morejs$getLevelClues(): number[];
        morejs$getRandom(): $RandomSource;
        getEnchantmentSeed(): number;
        costs: number[];
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        static EMPTY_SLOT_LAPIS_LAZULI: $ResourceLocation;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        enchantClue: number[];
        containerId: number;
        levelClue: number[];
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        get goldCount(): number;
        get enchantmentSeed(): number;
    }
    export class $ContainerLevelAccess {
        static create(arg0: $Level_, arg1: $BlockPos_): $ContainerLevelAccess;
        static NULL: $ContainerLevelAccess;
    }
    export interface $ContainerLevelAccess extends $ContainerLevelAccessMixin {
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>, arg1: T): T;
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
        execute(arg0: $BiConsumer_<$Level, $BlockPos>): void;
    }
    /**
     * Values that may be interpreted as {@link $ContainerLevelAccess}.
     */
    export type $ContainerLevelAccess_ = ((arg0: $BiFunction<$Level, $BlockPos, any>) => (T) | undefined);
    export class $CartographyTableMenu extends $AbstractContainerMenu {
        container: $Container;
        static ADDITIONAL_SLOT: number;
        lastSoundTime: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        static MAP_SLOT: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
    }
    export class $ItemCombinerMenu extends $AbstractContainerMenu {
        mayPickup(arg0: $Player, arg1: boolean): boolean;
        onTake(arg0: $Player, arg1: $ItemStack_): void;
        createInputSlotDefinitions(): $ItemCombinerMenuSlotDefinition;
        isValidBlock(arg0: $BlockState_): boolean;
        createResult(): void;
        getResultSlot(): number;
        canMoveIntoInputSlots(arg0: $ItemStack_): boolean;
        getSlotToQuickMoveTo(arg0: $ItemStack_): number;
        access: $ContainerLevelAccess;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        inputSlots: $Container;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ContainerLevelAccess_);
        get resultSlot(): number;
    }
    export class $ResultContainer implements $Container, $RecipeCraftingHolder {
        setItem(arg0: number, arg1: $ItemStack_): void;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        clearContent(): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
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
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        constructor();
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $FurnaceMenu extends $AbstractFurnaceMenu {
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AbstractFurnaceMenu extends $RecipeBookMenu<$SingleRecipeInput, $AbstractCookingRecipe> {
        canSmelt(arg0: $ItemStack_): boolean;
        getBurnProgress(): number;
        getLitProgress(): number;
        isFuel(arg0: $ItemStack_): boolean;
        isLit(): boolean;
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: $RecipeType_<$AbstractCookingRecipe>, arg2: $RecipeBookType_, arg3: number, arg4: $Inventory, arg5: $Container, arg6: $ContainerData);
        constructor(arg0: $MenuType_<never>, arg1: $RecipeType_<$AbstractCookingRecipe>, arg2: $RecipeBookType_, arg3: number, arg4: $Inventory);
        get burnProgress(): number;
        get litProgress(): number;
        get lit(): boolean;
    }
    export class $HopperMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        static CONTAINER_SIZE: number;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $SimpleContainerData implements $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        constructor(arg0: number);
        get count(): number;
    }
    export class $StonecutterMenu extends $AbstractContainerMenu {
        setupResultSlot(): void;
        registerUpdateListener(arg0: $Runnable_): void;
        getSelectedRecipeIndex(): number;
        getRecipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        getNumRecipes(): number;
        hasInputItem(): boolean;
        static INPUT_SLOT: number;
        container: $Container;
        lastSoundTime: number;
        slotUpdateListener: $Runnable;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        resultSlot: $Slot;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        inputSlot: $Slot;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        resultContainer: $ResultContainer;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
        get selectedRecipeIndex(): number;
        get recipes(): $List<$RecipeHolder<$StonecutterRecipe>>;
        get numRecipes(): number;
    }
    export class $ShulkerBoxMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Container);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $AbstractContainerMenu implements $IModularUIHolderMenu {
        addSlotListener(arg0: $ContainerListener): void;
        setSynchronizer(arg0: $ContainerSynchronizer): void;
        transferState(arg0: $AbstractContainerMenu): void;
        findSlot(arg0: $Container, arg1: number): $OptionalInt;
        setRemoteSlot(arg0: number, arg1: $ItemStack_): void;
        setItem(arg0: number, arg1: number, arg2: $ItemStack_): void;
        getItems(): $NonNullList<$ItemStack>;
        addSlot(arg0: $Slot): $Slot;
        suppressRemoteUpdates(): void;
        static checkContainerSize(arg0: $Container, arg1: number): void;
        static checkContainerDataCount(arg0: $ContainerData, arg1: number): void;
        isValidSlotIndex(arg0: number): boolean;
        addDataSlot(arg0: $DataSlot): $DataSlot;
        addDataSlots(arg0: $ContainerData): void;
        sendAllDataToRemote(): void;
        removeSlotListener(arg0: $ContainerListener): void;
        broadcastFullState(): void;
        wrapOperation$ddk000$geckolib$forceGeckolibSlotChange(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        wrapOperation$ddk000$geckolib$forceGeckolibIdSync(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        setRemoteSlotNoCopy(arg0: number, arg1: $ItemStack_): void;
        setRemoteCarried(arg0: $ItemStack_): void;
        clickMenuButton(arg0: $Player, arg1: number): boolean;
        quickMoveStack(arg0: $Player, arg1: number): $ItemStack;
        clicked(arg0: number, arg1: number, arg2: $ClickType_, arg3: $Player): void;
        static getQuickcraftHeader(arg0: number): number;
        resetQuickCraft(): void;
        static getQuickcraftType(arg0: number): number;
        static isValidQuickcraftType(arg0: number, arg1: $Player): boolean;
        static canItemQuickReplace(arg0: $Slot, arg1: $ItemStack_, arg2: boolean): boolean;
        canDragTo(arg0: $Slot): boolean;
        static getQuickCraftPlaceCount(arg0: $Set_<$Slot>, arg1: number, arg2: $ItemStack_): number;
        wrapOperation$ddk000$geckolib$removeGeckolibIdOnCopy(arg0: $ItemStack_, arg1: number, arg2: $Operation_<any>): $ItemStack;
        canTakeItemForPickAll(arg0: $ItemStack_, arg1: $Slot): boolean;
        clearContainer(arg0: $Player, arg1: $Container): void;
        slotsChanged(arg0: $Container): void;
        initializeContents(arg0: number, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): void;
        moveItemStackTo(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        resumeRemoteUpdates(): void;
        getStateId(): number;
        incrementStateId(): number;
        ldlib2$getItemSlot(arg0: $Slot): $ItemSlot;
        ldlib2$addSlot(arg0: $ItemSlot): void;
        ldlib2$getModularUI(): $ModularUI;
        ldlib2$setModularUI(arg0: $ModularUI): void;
        static getRedstoneSignalFromBlockEntity(arg0: $BlockEntity): number;
        static getRedstoneSignalFromContainer(arg0: $Container): number;
        setData(arg0: number, arg1: number): void;
        getType(): $MenuType<never>;
        getSlot(arg0: number): $Slot;
        removed(arg0: $Player): void;
        static stillValid(arg0: $ContainerLevelAccess_, arg1: $Player, arg2: $Block_): boolean;
        stillValid(arg0: $Player): boolean;
        broadcastChanges(): void;
        getCarried(): $ItemStack;
        setCarried(arg0: $ItemStack_): void;
        addSlot(arg0: $ItemSlot): void;
        getModularUI(): $ModularUI;
        getItemSlot(arg0: $Slot): $ItemSlot;
        setModularUI(arg0: $ModularUI): void;
        hasModularUI(): boolean;
        getSyncManager(): $UISyncManager;
        isItemSlot(arg0: $Slot): boolean;
        self(): $AbstractContainerMenu;
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number);
        set synchronizer(value: $ContainerSynchronizer);
        get items(): $NonNullList<$ItemStack>;
        set remoteCarried(value: $ItemStack_);
        get stateId(): number;
        get type(): $MenuType<never>;
        get syncManager(): $UISyncManager;
    }
    export class $Slot implements $SlotAccessor, $SlotAccessor$1 {
        checkTakeAchievements(arg0: $ItemStack_): void;
        getNoItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        getSlotIndex(): number;
        isSameInventory(arg0: $Slot): boolean;
        setBackground(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $Slot;
        isHighlightable(): boolean;
        isFake(): boolean;
        mayPlace(arg0: $ItemStack_): boolean;
        setByPlayer(arg0: $ItemStack_, arg1: $ItemStack_): void;
        setByPlayer(arg0: $ItemStack_): void;
        mayPickup(arg0: $Player): boolean;
        safeInsert(arg0: $ItemStack_): $ItemStack;
        safeInsert(arg0: $ItemStack_, arg1: number): $ItemStack;
        tryRemove(arg0: number, arg1: number, arg2: $Player): ($ItemStack) | undefined;
        onSwapCraft(arg0: number): void;
        onTake(arg0: $Player, arg1: $ItemStack_): void;
        safeTake(arg0: number, arg1: number, arg2: $Player): $ItemStack;
        getContainerSlot(): number;
        onQuickCraft(arg0: $ItemStack_, arg1: $ItemStack_): void;
        onQuickCraft(arg0: $ItemStack_, arg1: number): void;
        allowModification(arg0: $Player): boolean;
        hasItem(): boolean;
        getItem(): $ItemStack;
        remove(arg0: number): $ItemStack;
        set(arg0: $ItemStack_): void;
        isActive(): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        setChanged(): void;
        getY(): number;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
        get noItemIcon(): $Pair<$ResourceLocation, $ResourceLocation>;
        get slotIndex(): number;
        get highlightable(): boolean;
        get fake(): boolean;
        get containerSlot(): number;
        get item(): $ItemStack;
        get active(): boolean;
    }
    export class $DataSlot {
        static standalone(): $DataSlot;
        checkAndClearUpdateFlag(): boolean;
        get(): number;
        set(arg0: number): void;
        static shared(arg0: number[], arg1: number): $DataSlot;
        static forContainer(arg0: $ContainerData, arg1: number): $DataSlot;
        constructor();
    }
    export class $BrewingStandMenu$FuelSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
    }
    export class $RecipeBookType extends $Enum<$RecipeBookType> implements $IExtensibleEnum {
        static values(): $RecipeBookType[];
        static valueOf(arg0: string): $RecipeBookType;
        static getExtensionInfo(): $ExtensionInfo;
        static FURNACE: $RecipeBookType;
        static BLAST_FURNACE: $RecipeBookType;
        static SMOKER: $RecipeBookType;
        static CRAFTING: $RecipeBookType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookType}.
     */
    export type $RecipeBookType_ = "crafting" | "furnace" | "blast_furnace" | "smoker";
    export class $ItemCombinerMenuSlotDefinition$SlotDefinition extends $Record {
        mayPlace(): $Predicate<$ItemStack>;
        slotIndex(): number;
        x(): number;
        y(): number;
        static EMPTY: $ItemCombinerMenuSlotDefinition$SlotDefinition;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $ItemCombinerMenuSlotDefinition$SlotDefinition}.
     */
    export type $ItemCombinerMenuSlotDefinition$SlotDefinition_ = { y?: number, x?: number, slotIndex?: number, mayPlace?: $Predicate_<$ItemStack>,  } | [y?: number, x?: number, slotIndex?: number, mayPlace?: $Predicate_<$ItemStack>, ];
    export class $ClickType extends $Enum<$ClickType> {
        static values(): $ClickType[];
        static valueOf(arg0: string): $ClickType;
        static QUICK_MOVE: $ClickType;
        static SWAP: $ClickType;
        static PICKUP_ALL: $ClickType;
        static THROW: $ClickType;
        static QUICK_CRAFT: $ClickType;
        static PICKUP: $ClickType;
        static CLONE: $ClickType;
    }
    /**
     * Values that may be interpreted as {@link $ClickType}.
     */
    export type $ClickType_ = "pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all";
    export class $TransientCraftingContainer implements $CraftingContainer {
        setItem(arg0: number, arg1: $ItemStack_): void;
        getItems(): $List<$ItemStack>;
        fillStackedContents(arg0: $StackedContents): void;
        clearContent(): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getWidth(): number;
        getHeight(): number;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
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
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        menu: $AbstractContainerMenu;
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number);
        constructor(arg0: $AbstractContainerMenu, arg1: number, arg2: number, arg3: $NonNullList<$ItemStack_>);
        get items(): $List<$ItemStack>;
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ContainerSynchronizer {
    }
    export interface $ContainerSynchronizer {
        sendInitialData(arg0: $AbstractContainerMenu, arg1: $NonNullList<$ItemStack_>, arg2: $ItemStack_, arg3: number[]): void;
        sendSlotChange(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        sendDataChange(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        sendCarriedChange(arg0: $AbstractContainerMenu, arg1: $ItemStack_): void;
    }
    export class $MerchantMenu extends $AbstractContainerMenu {
        tryMoveItems(arg0: number): void;
        setXp(arg0: number): void;
        setOffers(arg0: $MerchantOffers): void;
        getOffers(): $MerchantOffers;
        canRestock(): boolean;
        showProgressBar(): boolean;
        setMerchantLevel(arg0: number): void;
        setCanRestock(arg0: boolean): void;
        handler$dge000$item_obliterator$getOffers(arg0: $CallbackInfoReturnable<any>): void;
        handler$dfa000$morejs$invokeOpenTradeEvent(arg0: number, arg1: $Inventory, arg2: $Merchant, arg3: $CallbackInfo): void;
        setShowProgressBar(arg0: boolean): void;
        setSelectionHint(arg0: number): void;
        getTraderXp(): number;
        getFutureTraderXp(): number;
        getTraderLevel(): number;
        static PAYMENT2_SLOT: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static PAYMENT1_SLOT: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $Merchant);
        constructor(arg0: number, arg1: $Inventory);
        set xp(value: number);
        set merchantLevel(value: number);
        set selectionHint(value: number);
        get traderXp(): number;
        get futureTraderXp(): number;
        get traderLevel(): number;
    }
    export class $GrindstoneMenu extends $AbstractContainerMenu {
        computeResult(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        static INPUT_SLOT: number;
        static ADDITIONAL_SLOT: number;
        repairSlots: $Container;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
    }
    export class $RecipeCraftingHolder {
    }
    export interface $RecipeCraftingHolder {
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
    }
    export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<I>> extends $AbstractContainerMenu {
        fillCraftSlotsStackedContents(arg0: $StackedContents): void;
        beginPlacingRecipe(): void;
        finishPlacingRecipe(arg0: $RecipeHolder_<R>): void;
        clearCraftingContent(): void;
        recipeMatches(arg0: $RecipeHolder_<R>): boolean;
        getResultSlotIndex(): number;
        getGridWidth(): number;
        getGridHeight(): number;
        getRecipeBookType(): $RecipeBookType;
        shouldMoveToInventory(arg0: number): boolean;
        handlePlacement(arg0: boolean, arg1: $RecipeHolder_<never>, arg2: $ServerPlayer): void;
        getRecipeBookCategories(): $List<$RecipeBookCategories>;
        getSize(): number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number);
        get resultSlotIndex(): number;
        get gridWidth(): number;
        get gridHeight(): number;
        get recipeBookType(): $RecipeBookType;
        get recipeBookCategories(): $List<$RecipeBookCategories>;
        get size(): number;
    }
    export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener, $AccessorCrafterMenu {
        getContainer(): $Container;
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
        setSlotState(arg0: number, arg1: boolean): void;
        isSlotDisabled(arg0: number): boolean;
        isPowered(): boolean;
        callRefreshRecipeResult(): void;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $CraftingContainer, arg3: $ContainerData);
        get container(): $Container;
        get powered(): boolean;
    }
    export class $NonInteractiveResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Container, arg1: number, arg2: number, arg3: number);
    }
    export class $FurnaceResultSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        constructor(arg0: $Player, arg1: $Container, arg2: number, arg3: number, arg4: number);
    }
    export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
        level: $Level;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static INGREDIENT_SLOT: number;
        static DATA_COUNT: number;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_COUNT: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static FUEL_SLOT: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory);
        constructor(arg0: number, arg1: $Inventory, arg2: $Container, arg3: $ContainerData);
    }
    export class $AnvilMenu extends $ItemCombinerMenu {
        setItemName(arg0: string): boolean;
        getCost(): number;
        setMaximumCost(arg0: number): void;
        static calculateIncreasedRepairCost(arg0: number): number;
        static INPUT_SLOT: number;
        repairItemCountCost: number;
        access: $ContainerLevelAccess;
        static ADDITIONAL_SLOT: number;
        resultSlots: $ResultContainer;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static MAX_NAME_LENGTH: number;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        inputSlots: $Container;
        static RESULT_SLOT: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(arg0: number, arg1: $Inventory, arg2: $ContainerLevelAccess_);
        constructor(arg0: number, arg1: $Inventory);
        set itemName(value: string);
        get cost(): number;
        set maximumCost(value: number);
    }
    export interface $MenuType<T> extends RegistryMarked<RegistryTypes.MenuTag, RegistryTypes.Menu> {}
    export class $ContainerListener {
    }
    export interface $ContainerListener {
        slotChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: $ItemStack_): void;
        dataChanged(arg0: $AbstractContainerMenu, arg1: number, arg2: number): void;
    }
    export class $ItemCombinerMenuSlotDefinition$Builder {
        withSlot(arg0: number, arg1: number, arg2: number, arg3: $Predicate_<$ItemStack>): $ItemCombinerMenuSlotDefinition$Builder;
        withResultSlot(arg0: number, arg1: number, arg2: number): $ItemCombinerMenuSlotDefinition$Builder;
        build(): $ItemCombinerMenuSlotDefinition;
        constructor();
    }
}
