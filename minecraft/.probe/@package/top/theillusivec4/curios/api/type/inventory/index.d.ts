import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        shrink(arg0: number): void;
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        update(): void;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        hasCosmetic(): boolean;
        canToggleRendering(): boolean;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getCachedModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        clearCachedModifiers(): void;
        applySyncTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        getDropRule(): $ICurio$DropRule;
        getActiveStates(): $NonNullList<boolean>;
        getCosmeticStacks(): $IDynamicStackHandler;
        updateActiveState(arg0: number): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        clearModifiers(): void;
        getIdentifier(): string;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        getSlots(): number;
        getStacks(): $IDynamicStackHandler;
        getRenders(): $NonNullList<boolean>;
        removeModifier(arg0: $ResourceLocation_): void;
        addTransientModifier(arg0: $AttributeModifier_): void;
        isVisible(): boolean;
        deserializeNBT(arg0: $CompoundTag_): void;
        serializeNBT(): $CompoundTag;
        getSyncTag(): $CompoundTag;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get cachedModifiers(): $Set<$AttributeModifier>;
        get sizeShift(): number;
        get dropRule(): $ICurio$DropRule;
        get activeStates(): $NonNullList<boolean>;
        get cosmeticStacks(): $IDynamicStackHandler;
        get identifier(): string;
        get slots(): number;
        get stacks(): $IDynamicStackHandler;
        get renders(): $NonNullList<boolean>;
        get visible(): boolean;
        get syncTag(): $CompoundTag;
    }
}
