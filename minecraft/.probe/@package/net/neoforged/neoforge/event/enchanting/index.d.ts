import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Holder_, $Holder, $Holder$Reference, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemEnchantments$Mutable, $Enchantment, $Enchantment_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/net/neoforged/neoforge/event/enchanting" {
    export class $EnchantmentLevelSetEvent extends $Event {
        getLevel(): $Level;
        getEnchantLevel(): number;
        getEnchantRow(): number;
        getOriginalLevel(): number;
        setEnchantLevel(arg0: number): void;
        getItem(): $ItemStack;
        getPos(): $BlockPos;
        getPower(): number;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: $ItemStack_, arg5: number);
        get level(): $Level;
        get enchantRow(): number;
        get originalLevel(): number;
        get item(): $ItemStack;
        get pos(): $BlockPos;
        get power(): number;
    }
    export class $GetEnchantmentLevelEvent extends $Event {
        getStack(): $ItemStack;
        getTargetEnchant(): $Holder<$Enchantment>;
        isTargetting(arg0: $Holder_<$Enchantment>): boolean;
        isTargetting(arg0: $ResourceKey_<$Enchantment>): boolean;
        getEnchantments(): $ItemEnchantments$Mutable;
        getLookup(): $HolderLookup$RegistryLookup<$Enchantment>;
        getHolder(arg0: $ResourceKey_<$Enchantment>): ($Holder$Reference<$Enchantment>) | undefined;
        constructor(arg0: $ItemStack_, arg1: $ItemEnchantments$Mutable, arg2: $Holder_<$Enchantment>, arg3: $HolderLookup$RegistryLookup<$Enchantment_>);
        get stack(): $ItemStack;
        get targetEnchant(): $Holder<$Enchantment>;
        get enchantments(): $ItemEnchantments$Mutable;
        get lookup(): $HolderLookup$RegistryLookup<$Enchantment>;
    }
}
