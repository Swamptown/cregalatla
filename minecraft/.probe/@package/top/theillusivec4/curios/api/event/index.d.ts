import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Multimap, $ImmutableList } from "@package/com/google/common/collect";
import { $AttributeModifier_, $Attribute, $AttributeModifier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Set, $Set_, $Collection_, $Collection } from "@package/java/util";
import { $Tuple } from "@package/net/minecraft/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $SlotContext_, $SlotContext } from "@package/top/theillusivec4/curios/api";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $ICuriosItemHandler, $ICurio$DropRule_, $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/top/theillusivec4/curios/api/event" {
    export class $CurioChangeEvent extends $LivingEvent {
        getFrom(): $ItemStack;
        getSlotIndex(): number;
        getIdentifier(): string;
        getTo(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: string, arg2: number, arg3: $ItemStack_, arg4: $ItemStack_);
        get from(): $ItemStack;
        get slotIndex(): number;
        get identifier(): string;
        get to(): $ItemStack;
    }
    export class $DropRulesEvent extends $LivingEvent {
        getCurioHandler(): $ICuriosItemHandler;
        isRecentlyHit(): boolean;
        getSource(): $DamageSource;
        getOverrides(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
        addOverride(arg0: $Predicate_<$ItemStack>, arg1: $ICurio$DropRule_): void;
        getLootingLevel(): number;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: number, arg4: boolean);
        get curioHandler(): $ICuriosItemHandler;
        get recentlyHit(): boolean;
        get source(): $DamageSource;
        get overrides(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>;
        get lootingLevel(): number;
    }
    export class $CurioCanEquipEvent extends $LivingEvent {
        getStack(): $ItemStack;
        getSlotContext(): $SlotContext;
        getEquipResult(): $TriState;
        setEquipResult(arg0: $TriState_): void;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $TriState_);
        /**
         * @deprecated
         */
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
        get stack(): $ItemStack;
        get slotContext(): $SlotContext;
    }
    export class $SlotModifiersUpdatedEvent extends $LivingEvent {
        getTypes(): $Set<string>;
        constructor(arg0: $LivingEntity, arg1: $Set_<string>);
        get types(): $Set<string>;
    }
    export class $CurioCanUnequipEvent extends $LivingEvent {
        getStack(): $ItemStack;
        getSlotContext(): $SlotContext;
        getUnequipResult(): $TriState;
        setUnequipResult(arg0: $TriState_): void;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_);
        get stack(): $ItemStack;
        get slotContext(): $SlotContext;
    }
    export class $CurioAttributeModifierEvent extends $Event {
        getModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        getId(): $ResourceLocation;
        getSlotContext(): $SlotContext;
        getOriginalModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        addModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        clearModifiers(): void;
        removeAttribute(arg0: $Holder_<$Attribute>): $Collection<$AttributeModifier>;
        getItemStack(): $ItemStack;
        removeModifier(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_): boolean;
        constructor(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $ResourceLocation_, arg3: $Multimap<$Holder_<$Attribute>, $AttributeModifier_>);
        get modifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get id(): $ResourceLocation;
        get slotContext(): $SlotContext;
        get originalModifiers(): $Multimap<$Holder<$Attribute>, $AttributeModifier>;
        get itemStack(): $ItemStack;
    }
    export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent {
        getCurioHandler(): $ICuriosItemHandler;
        isRecentlyHit(): boolean;
        getSource(): $DamageSource;
        getLootingLevel(): number;
        getDrops(): $Collection<$ItemEntity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ICuriosItemHandler, arg2: $DamageSource_, arg3: $Collection_<$ItemEntity>, arg4: number, arg5: boolean);
        get curioHandler(): $ICuriosItemHandler;
        get recentlyHit(): boolean;
        get source(): $DamageSource;
        get lootingLevel(): number;
        get drops(): $Collection<$ItemEntity>;
    }
}
