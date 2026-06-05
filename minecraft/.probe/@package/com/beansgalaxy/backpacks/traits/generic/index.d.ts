import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $LivingEntity, $EquipmentSlot_, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $ITraitData, $TraitComponentKind, $IClientTraits } from "@package/com/beansgalaxy/backpacks/traits";
import { $InteractionResult_, $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $TraitMenuClick$Kind_ } from "@package/com/beansgalaxy/backpacks/network/serverbound";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $TinyClickType_ } from "@package/com/beansgalaxy/backpacks/screen";
import { $Slot, $InventoryMenu, $ClickAction_, $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $DataComponentHolder_ } from "@package/net/minecraft/core/component";
import { $Runnable_ } from "@package/java/lang";
import { $ComponentHolder, $ModSound_, $ModSound } from "@package/com/beansgalaxy/backpacks/util";

declare module "@package/com/beansgalaxy/backpacks/traits/generic" {
    export class $ItemStorageTraits extends $GenericTraits {
        breakTrait(arg0: $ServerPlayer, arg1: $ItemStack_): void;
        hotkeyUse(arg0: $Slot, arg1: $EquipmentSlot_, arg2: number, arg3: $ClickType_, arg4: $Player, arg5: $CallbackInfo): void;
        hotkeyThrow(arg0: $Slot, arg1: $ComponentHolder, arg2: number, arg3: $Player, arg4: boolean, arg5: $CallbackInfo): void;
        canItemFit(arg0: $ComponentHolder, arg1: $ItemStack_): boolean;
        tinyHotbarClick(arg0: $ComponentHolder, arg1: number, arg2: $TinyClickType_, arg3: $InventoryMenu, arg4: $Player): void;
        tinyMenuClick(arg0: $ComponentHolder, arg1: number, arg2: $TinyClickType_, arg3: $SlotAccess, arg4: $Player): void;
        overflowFromInventory(arg0: $EquipmentSlot_, arg1: $Player, arg2: $ItemStack_, arg3: $CallbackInfoReturnable<boolean>): boolean;
        static get(arg0: $DataComponentHolder_): ($ItemStorageTraits) | undefined;
        getFirst(arg0: $ComponentHolder): $ItemStack;
        static runIfPresent(arg0: $ItemStack_, arg1: $Consumer_<$ItemStorageTraits>): void;
        static runIfPresent(arg0: $ItemStack_, arg1: $Consumer_<$ItemStorageTraits>, arg2: $Runnable_): void;
        constructor(arg0: $ModSound_);
    }
    export class $MutableBundleLike<T extends $BundleLikeTraits> implements $MutableItemStorage {
        removeItem(arg0: number): $ItemStack;
        removeItem(arg0: $ItemStack_, arg1: $Player): $ItemStack;
        addItem(arg0: $ItemStack_): $ItemStack;
        addItem(arg0: $ItemStack_, arg1: number): $ItemStack;
        getItemStacks(): $List<$ItemStack>;
        fullness(): $Fraction;
        limitSelectedSlot(arg0: number): void;
        getMaxAmountToAdd(arg0: $ItemStack_): number;
        growSelectedSlot(arg0: number): void;
        moveItemsTo(arg0: $MutableItemStorage, arg1: $Player, arg2: boolean): void;
        toAdd(arg0: $ItemStack_): number;
        push(): void;
        isEmpty(): boolean;
        getSelectedSlot(arg0: $Player): number;
        sound(): $ModSound;
        isFull(): boolean;
        push(arg0: $CallbackInfoReturnable<boolean>): void;
        stacks: $ITraitData<$List<$ItemStack>>;
        constructor(arg0: T, arg1: $ComponentHolder);
        get itemStacks(): $List<$ItemStack>;
        get empty(): boolean;
        get full(): boolean;
    }
    export class $BundleLikeTraits extends $ItemStorageTraits {
        fullness(arg0: $List_<$ItemStack_>): $Fraction;
        size(): number;
        static get(arg0: $ComponentHolder): ($BundleLikeTraits) | undefined;
        constructor(arg0: $ModSound_, arg1: number);
    }
    export class $GenericTraits {
        isFull(arg0: $ComponentHolder): boolean;
        isFull(arg0: $ItemStack_): boolean;
        fullness(arg0: $ItemStack_): $Fraction;
        fullness(arg0: $ComponentHolder): $Fraction;
        isStackable(arg0: $ComponentHolder): boolean;
        stackedOnOther(arg0: $ComponentHolder, arg1: $ItemStack_, arg2: $Slot, arg3: $ClickAction_, arg4: $Player, arg5: $CallbackInfoReturnable<boolean>): void;
        stackedOnMe(arg0: $ComponentHolder, arg1: $ItemStack_, arg2: $Slot, arg3: $ClickAction_, arg4: $Player, arg5: $SlotAccess, arg6: $CallbackInfoReturnable<boolean>): void;
        onPlayerInteract(arg0: $LivingEntity, arg1: $Player, arg2: $ItemStack_, arg3: $CallbackInfoReturnable<$InteractionResult_>): void;
        menuClick(arg0: $ComponentHolder, arg1: number, arg2: $TraitMenuClick$Kind_, arg3: $SlotAccess, arg4: $Player): void;
        name(): string;
        isEmpty(arg0: $ItemStack_): boolean;
        isEmpty(arg0: $ComponentHolder): boolean;
        kind(): $TraitComponentKind<$GenericTraits>;
        use(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_, arg3: $ComponentHolder, arg4: $CallbackInfoReturnable<$InteractionResultHolder<$ItemStack_>>): void;
        client<T extends $GenericTraits>(): $IClientTraits<T>;
        mutable(arg0: $ComponentHolder): $MutableTraits;
        sound(): $ModSound;
        constructor(arg0: $ModSound_);
    }
    export class $MutableTraits {
    }
    export interface $MutableTraits {
        isFull(): boolean;
        fullness(): $Fraction;
        push(): void;
        push(arg0: $CallbackInfoReturnable<boolean>): void;
        isEmpty(): boolean;
        sound(): $ModSound;
        get full(): boolean;
        get empty(): boolean;
    }
}
