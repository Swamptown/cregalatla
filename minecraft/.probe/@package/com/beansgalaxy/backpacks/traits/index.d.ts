import { $BackpackEntity } from "@package/com/beansgalaxy/backpacks/traits/common";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RecordBuilder, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $InteractionResult, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ItemStorageTraits, $GenericTraits, $BundleLikeTraits } from "@package/com/beansgalaxy/backpacks/traits/generic";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Slot, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $ComponentHolder, $ModSound_, $ModSound } from "@package/com/beansgalaxy/backpacks/util";
import { $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ItemDisplayContext_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemContainerContents } from "@package/net/minecraft/world/item/component";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UtilityComponent, $SlotSelection } from "@package/com/beansgalaxy/backpacks/components";
import { $EquipmentGroups } from "@package/com/beansgalaxy/backpacks/components/equipable";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TraitMenu, $TinyClickType_ } from "@package/com/beansgalaxy/backpacks/screen";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as common from "@package/com/beansgalaxy/backpacks/traits/common";
export * as generic from "@package/com/beansgalaxy/backpacks/traits/generic";
export * as backpack from "@package/com/beansgalaxy/backpacks/traits/backpack";

declare module "@package/com/beansgalaxy/backpacks/traits" {
    export class $ITraitData<T> {
        markDirty(): void;
        push(): void;
        remove(): T;
        get(): T;
        type(): $DataComponentType<T>;
        isEmpty(): boolean;
        isEmpty(arg0: T): boolean;
        static register<T>(arg0: string, arg1: $Codec<T>, arg2: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg3: $Function_<$ComponentHolder, $ITraitData<T>>): $ITraitData$TraitDataComponentType<T>;
        static register(): void;
        set(arg0: T): $ITraitData<T>;
        holder(): $ComponentHolder;
        static CHEST: $DataComponentType<$ItemContainerContents>;
        static SOLO_STACK: $ITraitData$TraitDataComponentType<$ItemStack>;
        static UTILITIES: $DataComponentType<$UtilityComponent>;
        static AMOUNT: $ITraitData$TraitDataComponentType<number>;
        static SLOT_SELECTION: $DataComponentType<$SlotSelection>;
        static ITEM_STACKS: $ITraitData$TraitDataComponentType<$List<$ItemStack>>;
        static NON_EDIBLES: $ITraitData$TraitDataComponentType<$List<$ItemStack>>;
    }
    export class $TraitComponentKind<T extends $GenericTraits> implements $DataComponentType<T> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static registerBundleLike<T extends $BundleLikeTraits>(arg0: string, arg1: $ITraitCodec<T>): $TraitComponentKind<T>;
        static registerItemStorage<T extends $ItemStorageTraits>(arg0: string, arg1: $ITraitCodec<T>): $TraitComponentKind<T>;
        static get(arg0: number): $TraitComponentKind<$GenericTraits>;
        static get(arg0: string): $TraitComponentKind<$GenericTraits>;
        static encode<T extends $GenericTraits, A>(arg0: T, arg1: $DynamicOps<A>, arg2: $RecordBuilder<A>): $RecordBuilder<A>;
        static encode<T extends $GenericTraits>(arg0: $RegistryFriendlyByteBuf, arg1: T): void;
        static register<T extends $GenericTraits>(arg0: string, arg1: $ITraitCodec<T>): $TraitComponentKind<T>;
        codec(): $Codec<T>;
        codecOrThrow(): $Codec<T>;
        isTransient(): boolean;
        static CODEC: $Codec<$TraitComponentKind<$GenericTraits>>;
        i: number;
        static TRAITS: $List<$TraitComponentKind<$GenericTraits>>;
        static STORAGE_TRAITS: $List<$TraitComponentKind<$ItemStorageTraits>>;
        static BUNDLE_TRAITS: $List<$TraitComponentKind<$BundleLikeTraits>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TraitComponentKind<$GenericTraits>>;
        constructor(arg0: number, arg1: string, arg2: $ITraitCodec<T>);
        get transient(): boolean;
    }
    export class $ITraitCodec<A extends $GenericTraits> {
    }
    export interface $ITraitCodec<A extends $GenericTraits> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, A>;
        decode(arg0: $RegistryFriendlyByteBuf): A;
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<A, T>>;
        encode(arg0: $RegistryFriendlyByteBuf, arg1: A): void;
        encode<T>(arg0: A, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        codec(): $Codec<A>;
    }
    export class $IClientTraits<T extends $GenericTraits> {
        static RED_BAR: number;
        static BLUE_BAR: number;
        static BAR_COLOR: number;
    }
    export interface $IClientTraits<T extends $GenericTraits> {
        appendTooltipLines(arg0: T, arg1: $Consumer_<$Component>): void;
        renderItemInHand(arg0: $ItemRenderer, arg1: T, arg2: $LivingEntity, arg3: $ComponentHolder, arg4: $ItemDisplayContext_, arg5: boolean, arg6: $PoseStack, arg7: $MultiBufferSource_, arg8: number, arg9: $CallbackInfo): void;
        createTooltip(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Slot, arg6: $ComponentHolder, arg7: T): $TraitMenu<T>;
        renderItemDecorations(arg0: T, arg1: $ComponentHolder, arg2: $GuiGraphics, arg3: $Font, arg4: $ItemStack_, arg5: number, arg6: number): void;
        isBarVisible(arg0: T, arg1: $ComponentHolder): boolean;
        getBarWidth(arg0: T, arg1: $ComponentHolder): number;
        getBarColor(arg0: T, arg1: $ComponentHolder): number;
    }
    export class $IEntityTraits<T extends $GenericTraits> {
    }
    export interface $IEntityTraits<T extends $GenericTraits> {
        onBreak(arg0: $BackpackEntity, arg1: boolean): void;
        createHopperContainer(arg0: $BackpackEntity): $Container;
        getAnalogOutput(arg0: $BackpackEntity): number;
        tinyHotbarClick(arg0: $ComponentHolder, arg1: number, arg2: $TinyClickType_, arg3: $InventoryMenu, arg4: $Player): void;
        tinyMenuClick(arg0: $ComponentHolder, arg1: number, arg2: $TinyClickType_, arg3: $SlotAccess, arg4: $Player): void;
        onDamage(arg0: $BackpackEntity, arg1: boolean, arg2: $ModSound_): void;
        size(): number;
        isEmpty(arg0: $ComponentHolder): boolean;
        slots(): $EquipmentGroups;
        getTexture(): $ResourceLocation;
        onPlace(arg0: $BackpackEntity, arg1: $Player, arg2: $ItemStack_): void;
        sound(): $ModSound;
        interact(arg0: $BackpackEntity, arg1: $Player, arg2: $InteractionHand_): $InteractionResult;
        get texture(): $ResourceLocation;
    }
}
