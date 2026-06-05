import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BalmConfigSchema } from "@package/net/blay09/mods/balm/api/config/schema";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $InteractionResult, $InteractionResult_, $InteractionHand, $Container, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as client from "@package/net/blay09/mods/balm/api/event/client";
export * as server from "@package/net/blay09/mods/balm/api/event/server";

declare module "@package/net/blay09/mods/balm/api/event" {
    export class $LivingDeathEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getDamageSource(): $DamageSource;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
        get entity(): $LivingEntity;
        get damageSource(): $DamageSource;
    }
    export class $CommandEvent extends $BalmEvent {
        getParseResults(): $ParseResults<$CommandSourceStack>;
        constructor(arg0: $ParseResults<$CommandSourceStack>);
        get parseResults(): $ParseResults<$CommandSourceStack>;
    }
    export class $ConfigReloadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor(arg0: $BalmConfigSchema);
        constructor();
        get schema(): $BalmConfigSchema;
    }
    export class $BalmEvent extends $Event implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor();
    }
    export class $CropGrowEvent extends $BalmEvent {
        getLevel(): $Level;
        getState(): $BlockState;
        getPos(): $BlockPos;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
        get level(): $Level;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $BreakBlockEvent extends $BalmEvent {
        getPlayer(): $Player;
        getLevel(): $Level;
        getState(): $BlockState;
        getPos(): $BlockPos;
        getBlockEntity(): $BlockEntity;
        constructor(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockEntity);
        get player(): $Player;
        get level(): $Level;
        get state(): $BlockState;
        get pos(): $BlockPos;
        get blockEntity(): $BlockEntity;
    }
    export class $CropGrowEvent$Pre extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $LivingDamageEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getDamageSource(): $DamageSource;
        setDamageAmount(arg0: number): void;
        getDamageAmount(): number;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number);
        get entity(): $LivingEntity;
        get damageSource(): $DamageSource;
    }
    export class $PlayerRespawnEvent extends $BalmEvent {
        getOldPlayer(): $ServerPlayer;
        getNewPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $ServerPlayer);
        get oldPlayer(): $ServerPlayer;
        get newPlayer(): $ServerPlayer;
    }
    export class $PlayerAttackEvent extends $BalmEvent {
        getPlayer(): $Player;
        getTarget(): $Entity;
        constructor(arg0: $Player, arg1: $Entity);
        get player(): $Player;
        get target(): $Entity;
    }
    export class $UseBlockEvent extends $BalmEvent {
        getInteractionResult(): $InteractionResult;
        getPlayer(): $Player;
        getHitResult(): $BlockHitResult;
        getHand(): $InteractionHand;
        setResult(arg0: $InteractionResult_): void;
        getLevel(): $Level;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_, arg3: $BlockHitResult);
        get interactionResult(): $InteractionResult;
        get player(): $Player;
        get hitResult(): $BlockHitResult;
        get hand(): $InteractionHand;
        set result(value: $InteractionResult_);
        get level(): $Level;
    }
    export class $PlayerLogoutEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $EntityAddedEvent extends $BalmEvent {
        getEntity(): $Entity;
        getLevel(): $Level;
        constructor(arg0: $Entity, arg1: $Level_);
        get entity(): $Entity;
        get level(): $Level;
    }
    export class $PlayerOpenMenuEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        getMenu(): $AbstractContainerMenu;
        constructor(arg0: $ServerPlayer, arg1: $AbstractContainerMenu);
        get player(): $ServerPlayer;
        get menu(): $AbstractContainerMenu;
    }
    export class $DigSpeedEvent extends $BalmEvent {
        getSpeedOverride(): number;
        setSpeedOverride(arg0: number): void;
        getPlayer(): $Player;
        getState(): $BlockState;
        getSpeed(): number;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: number);
        get player(): $Player;
        get state(): $BlockState;
        get speed(): number;
    }
    export class $TossItemEvent extends $BalmEvent {
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $LivingFallEvent extends $BalmEvent {
        getFallDamageOverride(): number;
        setFallDamageOverride(arg0: number): void;
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $CropGrowEvent$Post extends $CropGrowEvent {
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ConfigLoadedEvent extends $BalmEvent {
        getSchema(): $BalmConfigSchema;
        constructor(arg0: $BalmConfigSchema);
        get schema(): $BalmConfigSchema;
    }
    export class $UseItemEvent extends $BalmEvent {
        getInteractionResult(): $InteractionResult;
        getPlayer(): $Player;
        getHand(): $InteractionHand;
        setResult(arg0: $InteractionResult_): void;
        getLevel(): $Level;
        constructor(arg0: $Player, arg1: $Level_, arg2: $InteractionHand_);
        get interactionResult(): $InteractionResult;
        get player(): $Player;
        get hand(): $InteractionHand;
        set result(value: $InteractionResult_);
        get level(): $Level;
    }
    export class $LivingHealEvent extends $BalmEvent {
        getEntity(): $LivingEntity;
        getAmount(): number;
        constructor(arg0: $LivingEntity, arg1: number);
        get entity(): $LivingEntity;
        get amount(): number;
    }
    export class $PlayerChangedDimensionEvent extends $BalmEvent {
        getFromDim(): $ResourceKey<$Level>;
        getToDim(): $ResourceKey<$Level>;
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get fromDim(): $ResourceKey<$Level>;
        get toDim(): $ResourceKey<$Level>;
        get player(): $ServerPlayer;
    }
    export class $PlayerConnectedEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $ItemCraftedEvent extends $BalmEvent {
        getCraftMatrix(): $Container;
        getPlayer(): $Player;
        getItemStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Container);
        get craftMatrix(): $Container;
        get player(): $Player;
        get itemStack(): $ItemStack;
    }
    export class $PlayerLoginEvent extends $BalmEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
}
