import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $EquipmentSlot, $EquipmentSlot_, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ArrayList } from "@package/java/util";
import { $BulkComponent_, $BulkComponent$ItemlessStack_, $BulkComponent } from "@package/com/beansgalaxy/backpacks/components";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Holder_, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $UtilityContainer } from "@package/com/beansgalaxy/backpacks/container";
import { $ViewableBackpack, $PlaceProgress } from "@package/com/beansgalaxy/backpacks/util";
import { $EnderStorage } from "@package/com/beansgalaxy/backpacks/data";
import { $DecoratedPotBlockEntity$WobbleStyle_ } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/beansgalaxy/backpacks/access" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        beans_Backpacks_2$getEnder(): $EnderStorage;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = (() => $EnderStorage);
    export class $ViewableAccessor {
    }
    export interface $ViewableAccessor {
        beans_Backpacks_3$getViewable(): $ViewableBackpack;
    }
    /**
     * Values that may be interpreted as {@link $ViewableAccessor}.
     */
    export type $ViewableAccessor_ = (() => $ViewableBackpack);
    export class $PlayerAccessor {
    }
    export interface $PlayerAccessor {
        isUtilityScoped(): boolean;
        setUtilityScoped(arg0: boolean): void;
        setItemUsed(arg0: $ItemStack_): void;
        set itemUsed(value: $ItemStack_);
    }
    export class $DecoratedPotEntityAccess {
        static onRemove(arg0: $Level_, arg1: $BlockPos_): void;
        static getAnalogOutputSignal(arg0: $Level_, arg1: $BlockPos_): number;
        static useWithoutItem(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): $InteractionResult;
        static attack(arg0: $Level_, arg1: $BlockPos_, arg2: $Player): boolean;
        static useItemOn(arg0: $ItemStack_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): $ItemInteractionResult;
        static SIZE: number;
    }
    export interface $DecoratedPotEntityAccess {
        isFull(): boolean;
        getBulkComponent(): $BulkComponent;
        setBulkComponent(arg0: $BulkComponent_): void;
        insertIntoFocus(arg0: $ItemStack_): boolean;
        tryFillFocusedItem(arg0: $Holder_<$Item>, arg1: $ArrayList<$BulkComponent$ItemlessStack_>): void;
        takeFromFocus(): $ItemStack;
        getFullness(): number;
        getLevel(): $Level;
        item(): $SlotAccess;
        getWeight(): $Fraction;
        wobble(arg0: $DecoratedPotBlockEntity$WobbleStyle_): void;
        setChanged(): void;
        get full(): boolean;
        get fullness(): number;
        get level(): $Level;
        get weight(): $Fraction;
    }
    export class $EquipmentSlotAccess {
        static EQUIPMENT_SLOT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EquipmentSlot>;
    }
    export interface $EquipmentSlotAccess {
        getSlot(): $EquipmentSlot;
        get slot(): $EquipmentSlot;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotAccess}.
     */
    export type $EquipmentSlotAccess_ = (() => $EquipmentSlot_);
    export class $TraitMenuAccessor {
    }
    export interface $TraitMenuAccessor {
        clickTraitMenu(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<boolean>): void;
    }
    /**
     * Values that may be interpreted as {@link $TraitMenuAccessor}.
     */
    export type $TraitMenuAccessor_ = ((arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<boolean>) => void);
    export class $BackData {
        static get(arg0: $Player): $BackData;
    }
    export interface $BackData {
        setActionKey(arg0: boolean): void;
        setMenuKey(arg0: boolean): void;
        getTinySlot(): number;
        setTinySlot(arg0: number): void;
        getPlaceProgress(): $PlaceProgress;
        isMenuKeyDown(): boolean;
        getUtility(): $UtilityContainer;
        beans_Backpacks_3$getBody(): $NonNullList<$ItemStack>;
        isActionKeyDown(): boolean;
        set actionKey(value: boolean);
        set menuKey(value: boolean);
        get placeProgress(): $PlaceProgress;
        get menuKeyDown(): boolean;
        get utility(): $UtilityContainer;
        get actionKeyDown(): boolean;
    }
}
