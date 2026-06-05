import { $BackpackEntity } from "@package/com/beansgalaxy/backpacks/traits/common";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $EquipmentSlot, $LivingEntity, $EquipmentSlot_, $SlotAccess } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $ITraitData, $IEntityTraits } from "@package/com/beansgalaxy/backpacks/traits";
import { $InteractionResult, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BiConsumer_, $BiPredicate_ } from "@package/java/util/function";
import { $EquipmentGroups_, $EquipmentGroups } from "@package/com/beansgalaxy/backpacks/components/equipable";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MutableBundleLike, $BundleLikeTraits } from "@package/com/beansgalaxy/backpacks/traits/generic";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ComponentHolder, $ModSound_ } from "@package/com/beansgalaxy/backpacks/util";

declare module "@package/com/beansgalaxy/backpacks/traits/backpack" {
    export class $BackpackMutable extends $MutableBundleLike<$BackpackTraits> {
        pickItem(arg0: number, arg1: number, arg2: $SlotAccess): void;
        pickBlock(arg0: $Player, arg1: number, arg2: number, arg3: number): void;
        stacks: $ITraitData<$List<$ItemStack>>;
        constructor(arg0: $BackpackTraits, arg1: $ComponentHolder);
    }
    export class $BackpackTraits extends $BundleLikeTraits implements $IEntityTraits<$BackpackTraits> {
        onBreak(arg0: $BackpackEntity, arg1: boolean): void;
        createHopperContainer(arg0: $BackpackEntity): $Container;
        static runAllEquipped(arg0: $LivingEntity, arg1: $BiConsumer_<$BackpackTraits, $EquipmentSlot>): void;
        pickupToBackpack(arg0: $Player, arg1: $EquipmentSlot_, arg2: $Inventory, arg3: $ItemStack_, arg4: $ItemStack_, arg5: $CallbackInfoReturnable<boolean>): boolean;
        pickItemClient(arg0: $Player, arg1: $EquipmentSlot_, arg2: $SlotAccess, arg3: $AbstractContainerMenu, arg4: $ItemStack_, arg5: $CallbackInfoReturnable<boolean>): boolean;
        static get(arg0: $ItemStack_): $BackpackTraits;
        slots(): $EquipmentGroups;
        getTexture(): $ResourceLocation;
        mutable(arg0: $ComponentHolder): $BackpackMutable;
        interact(arg0: $BackpackEntity, arg1: $Player, arg2: $InteractionHand_): $InteractionResult;
        static runIfEquipped(arg0: $Player, arg1: $BiPredicate_<$BackpackTraits, $EquipmentSlot>): void;
        pickBlockClient(arg0: $Player, arg1: $EquipmentSlot_, arg2: $Inventory, arg3: $ItemStack_, arg4: $CallbackInfo): void;
        getAnalogOutput(arg0: $BackpackEntity): number;
        onDamage(arg0: $BackpackEntity, arg1: boolean, arg2: $ModSound_): void;
        onPlace(arg0: $BackpackEntity, arg1: $Player, arg2: $ItemStack_): void;
        static NAME: string;
        constructor(arg0: $ModSound_, arg1: number, arg2: $EquipmentGroups_, arg3: $ResourceLocation_);
        get texture(): $ResourceLocation;
    }
}
