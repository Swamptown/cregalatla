import { $ServerLevelAccessor, $BaseSpawner } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $EquipmentSlot_, $EntityType, $SpawnGroupData, $Entity, $EquipmentSlot, $LivingEntity, $AgeableMob, $Mob, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $EnumMap, $Collection_, $List_, $Collection, $Map } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Animal } from "@package/net/minecraft/world/entity/animal";
import { $InteractionHand, $InteractionHand_, $DifficultyInstance } from "@package/net/minecraft/world";
import { $IReductionFunction_, $DamageContainer$Reduction_, $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $Holder_, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/event/entity/living" {
    export class $MobSpawnEvent extends $EntityEvent {
        getLevel(): $ServerLevelAccessor;
        getY(): number;
        getX(): number;
        getZ(): number;
        get level(): $ServerLevelAccessor;
        get y(): number;
        get x(): number;
        get z(): number;
    }
    export class $LivingDrownEvent extends $LivingEvent implements $ICancellableEvent {
        setDrowning(arg0: boolean): void;
        setDamageAmount(arg0: number): void;
        setBubbleCount(arg0: number): void;
        isDrowning(): boolean;
        getBubbleCount(): number;
        getDamageAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: boolean, arg2: number, arg3: number);
        constructor(arg0: $LivingEntity);
    }
    export class $LivingEntityUseItemEvent extends $LivingEvent {
        setDuration(arg0: number): void;
        getHand(): $InteractionHand;
        getDuration(): number;
        getItem(): $ItemStack;
        get hand(): $InteractionHand;
        get item(): $ItemStack;
    }
    export class $LivingDropsEvent extends $LivingEvent implements $ICancellableEvent {
        isRecentlyHit(): boolean;
        getSource(): $DamageSource;
        getDrops(): $Collection<$ItemEntity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $Collection_<$ItemEntity>, arg3: boolean);
        get recentlyHit(): boolean;
        get source(): $DamageSource;
        get drops(): $Collection<$ItemEntity>;
    }
    export class $LivingChangeTargetEvent$LivingTargetType extends $Enum<$LivingChangeTargetEvent$LivingTargetType> implements $LivingChangeTargetEvent$ILivingTargetType {
        static values(): $LivingChangeTargetEvent$LivingTargetType[];
        static valueOf(arg0: string): $LivingChangeTargetEvent$LivingTargetType;
        static MOB_TARGET: $LivingChangeTargetEvent$LivingTargetType;
        static BEHAVIOR_TARGET: $LivingChangeTargetEvent$LivingTargetType;
    }
    /**
     * Values that may be interpreted as {@link $LivingChangeTargetEvent$LivingTargetType}.
     */
    export type $LivingChangeTargetEvent$LivingTargetType_ = "mob_target" | "behavior_target";
    export class $MobSpawnEvent$SpawnPlacementCheck extends $Event {
        getDefaultResult(): boolean;
        getPlacementCheckResult(): boolean;
        getSpawnType(): $MobSpawnType;
        setResult(arg0: $MobSpawnEvent$SpawnPlacementCheck$Result_): void;
        getLevel(): $ServerLevelAccessor;
        getResult(): $MobSpawnEvent$SpawnPlacementCheck$Result;
        getRandom(): $RandomSource;
        getEntityType(): $EntityType<never>;
        getPos(): $BlockPos;
        constructor(arg0: $EntityType_<never>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BlockPos_, arg4: $RandomSource, arg5: boolean);
        get defaultResult(): boolean;
        get placementCheckResult(): boolean;
        get spawnType(): $MobSpawnType;
        get level(): $ServerLevelAccessor;
        get random(): $RandomSource;
        get entityType(): $EntityType<never>;
        get pos(): $BlockPos;
    }
    export class $LivingGetProjectileEvent extends $LivingEvent {
        getProjectileWeaponItemStack(): $ItemStack;
        setProjectileItemStack(arg0: $ItemStack_): void;
        getProjectileItemStack(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $ItemStack_);
        get projectileWeaponItemStack(): $ItemStack;
    }
    export class $LivingDeathEvent extends $LivingEvent implements $ICancellableEvent {
        getSource(): $DamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_);
        get source(): $DamageSource;
    }
    export class $LivingSwapItemsEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $LivingUseTotemEvent extends $LivingEvent implements $ICancellableEvent {
        getTotem(): $ItemStack;
        getHandHolding(): $InteractionHand;
        getSource(): $DamageSource;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageSource_, arg2: $ItemStack_, arg3: $InteractionHand_);
        get totem(): $ItemStack;
        get handHolding(): $InteractionHand;
        get source(): $DamageSource;
    }
    export class $MobSpawnEvent$SpawnPlacementCheck$Result extends $Enum<$MobSpawnEvent$SpawnPlacementCheck$Result> {
        static values(): $MobSpawnEvent$SpawnPlacementCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$SpawnPlacementCheck$Result;
        static SUCCEED: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static DEFAULT: $MobSpawnEvent$SpawnPlacementCheck$Result;
        static FAIL: $MobSpawnEvent$SpawnPlacementCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$SpawnPlacementCheck$Result}.
     */
    export type $MobSpawnEvent$SpawnPlacementCheck$Result_ = "succeed" | "default" | "fail";
    export class $LivingEquipmentChangeEvent extends $LivingEvent {
        getFrom(): $ItemStack;
        getSlot(): $EquipmentSlot;
        getTo(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: $ItemStack_);
        get from(): $ItemStack;
        get slot(): $EquipmentSlot;
        get to(): $ItemStack;
    }
    export class $LivingEntityUseItemEvent$Start extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        /**
         * @deprecated
         */
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: number);
    }
    export class $LivingConversionEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $MobEffectEvent$Applicable extends $MobEffectEvent {
        getApplicationResult(): boolean;
        getEffectSource(): $Entity;
        setResult(arg0: $MobEffectEvent$Applicable$Result_): void;
        getResult(): $MobEffectEvent$Applicable$Result;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $Entity);
        get applicationResult(): boolean;
        get effectSource(): $Entity;
    }
    export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
    export class $LivingDamageEvent$Pre extends $LivingDamageEvent {
        getContainer(): $DamageContainer;
        getOriginalDamage(): number;
        getSource(): $DamageSource;
        getNewDamage(): number;
        setNewDamage(arg0: number): void;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get container(): $DamageContainer;
        get originalDamage(): number;
        get source(): $DamageSource;
    }
    export class $ArmorHurtEvent$ArmorEntry {
        originalDamage: number;
        newDamage: number;
        armorItemStack: $ItemStack;
        constructor(arg0: $ItemStack_, arg1: number);
    }
    export class $BabyEntitySpawnEvent extends $Event implements $ICancellableEvent {
        getParentA(): $Mob;
        getParentB(): $Mob;
        getCausedByPlayer(): $Player;
        setChild(arg0: $AgeableMob): void;
        getChild(): $AgeableMob;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $Mob, arg2: $AgeableMob);
        get parentA(): $Mob;
        get parentB(): $Mob;
        get causedByPlayer(): $Player;
    }
    export class $LivingEntityUseItemEvent$Tick extends $LivingEntityUseItemEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number);
    }
    export class $MobDespawnEvent$Result extends $Enum<$MobDespawnEvent$Result> {
        static values(): $MobDespawnEvent$Result[];
        static valueOf(arg0: string): $MobDespawnEvent$Result;
        static DENY: $MobDespawnEvent$Result;
        static ALLOW: $MobDespawnEvent$Result;
        static DEFAULT: $MobDespawnEvent$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobDespawnEvent$Result}.
     */
    export type $MobDespawnEvent$Result_ = "allow" | "default" | "deny";
    export class $LivingEvent extends $EntityEvent {
        getEntity(): $LivingEntity;
        constructor(arg0: $LivingEntity);
        get entity(): $LivingEntity;
    }
    export class $LivingSwapItemsEvent$Hands extends $LivingSwapItemsEvent implements $ICancellableEvent {
        setItemSwappedToMainHand(arg0: $ItemStack_): void;
        setItemSwappedToOffHand(arg0: $ItemStack_): void;
        getItemSwappedToOffHand(): $ItemStack;
        getItemSwappedToMainHand(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity);
    }
    export class $LivingKnockBackEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalStrength(): number;
        getOriginalRatioX(): number;
        getOriginalRatioZ(): number;
        setRatioX(arg0: number): void;
        setRatioZ(arg0: number): void;
        setStrength(arg0: number): void;
        getStrength(): number;
        getRatioX(): number;
        getRatioZ(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number);
        get originalStrength(): number;
        get originalRatioX(): number;
        get originalRatioZ(): number;
    }
    export class $MobSplitEvent extends $Event implements $ICancellableEvent {
        getChildren(): $List<$Mob>;
        getParent(): $Mob;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $List_<$Mob>);
        get children(): $List<$Mob>;
        get parent(): $Mob;
    }
    export class $SpawnClusterSizeEvent extends $LivingEvent {
        setSize(arg0: number): void;
        getSize(): number;
        constructor(arg0: $Mob);
    }
    export class $MobEffectEvent extends $LivingEvent {
        getEffectInstance(): $MobEffectInstance;
        get effectInstance(): $MobEffectInstance;
    }
    export class $FinalizeSpawnEvent extends $MobSpawnEvent implements $ICancellableEvent {
        getSpawnData(): $SpawnGroupData;
        setSpawnData(arg0: $SpawnGroupData): void;
        isSpawnCancelled(): boolean;
        getSpawner(): $Either<$BlockEntity, $Entity>;
        getSpawnType(): $MobSpawnType;
        setSpawnCancelled(arg0: boolean): void;
        getDifficulty(): $DifficultyInstance;
        setDifficulty(arg0: $DifficultyInstance): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: number, arg3: number, arg4: number, arg5: $DifficultyInstance, arg6: $MobSpawnType_, arg7: $SpawnGroupData, arg8: $Either<$BlockEntity, $Entity>);
        get spawner(): $Either<$BlockEntity, $Entity>;
        get spawnType(): $MobSpawnType;
    }
    export class $LivingHealEvent extends $LivingEvent implements $ICancellableEvent {
        setAmount(arg0: number): void;
        getAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number);
    }
    export class $LivingConversionEvent$Post extends $LivingConversionEvent {
        getOutcome(): $LivingEntity;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity);
        get outcome(): $LivingEntity;
    }
    export class $EnderManAngerEvent extends $LivingEvent implements $ICancellableEvent {
        getPlayer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $EnderMan, arg1: $Player);
        get player(): $Player;
    }
    export class $MobDespawnEvent extends $MobSpawnEvent {
        setResult(arg0: $MobDespawnEvent$Result_): void;
        getResult(): $MobDespawnEvent$Result;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor);
    }
    export class $MobEffectEvent$Applicable$Result extends $Enum<$MobEffectEvent$Applicable$Result> {
        static values(): $MobEffectEvent$Applicable$Result[];
        static valueOf(arg0: string): $MobEffectEvent$Applicable$Result;
        static DO_NOT_APPLY: $MobEffectEvent$Applicable$Result;
        static APPLY: $MobEffectEvent$Applicable$Result;
        static DEFAULT: $MobEffectEvent$Applicable$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectEvent$Applicable$Result}.
     */
    export type $MobEffectEvent$Applicable$Result_ = "apply" | "default" | "do_not_apply";
    export class $LivingFallEvent extends $LivingEvent implements $ICancellableEvent {
        setDamageMultiplier(arg0: number): void;
        getDamageMultiplier(): number;
        getDistance(): number;
        setDistance(arg0: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: number, arg2: number);
    }
    export class $MobEffectEvent$Added extends $MobEffectEvent {
        getEffectSource(): $Entity;
        getOldEffectInstance(): $MobEffectInstance;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $MobEffectInstance, arg3: $Entity);
        get effectSource(): $Entity;
        get oldEffectInstance(): $MobEffectInstance;
    }
    export class $LivingEvent$LivingVisibilityEvent extends $LivingEvent {
        modifyVisibility(arg0: number): void;
        getLookingEntity(): $Entity;
        getVisibilityModifier(): number;
        constructor(arg0: $LivingEntity, arg1: $Entity, arg2: number);
        get lookingEntity(): $Entity;
        get visibilityModifier(): number;
    }
    export class $LivingBreatheEvent extends $LivingEvent {
        setCanBreathe(arg0: boolean): void;
        setConsumeAirAmount(arg0: number): void;
        setRefillAirAmount(arg0: number): void;
        canBreathe(): boolean;
        getRefillAirAmount(): number;
        getConsumeAirAmount(): number;
        constructor(arg0: $LivingEntity, arg1: boolean, arg2: number, arg3: number);
    }
    export class $MobSpawnEvent$PositionCheck$Result extends $Enum<$MobSpawnEvent$PositionCheck$Result> {
        static values(): $MobSpawnEvent$PositionCheck$Result[];
        static valueOf(arg0: string): $MobSpawnEvent$PositionCheck$Result;
        static SUCCEED: $MobSpawnEvent$PositionCheck$Result;
        static DEFAULT: $MobSpawnEvent$PositionCheck$Result;
        static FAIL: $MobSpawnEvent$PositionCheck$Result;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnEvent$PositionCheck$Result}.
     */
    export type $MobSpawnEvent$PositionCheck$Result_ = "succeed" | "default" | "fail";
    export class $LivingConversionEvent$Pre extends $LivingConversionEvent implements $ICancellableEvent {
        setConversionTimer(arg0: number): void;
        getOutcome(): $EntityType<$LivingEntity>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $EntityType_<$LivingEntity>, arg2: $Consumer_<number>);
        set conversionTimer(value: number);
        get outcome(): $EntityType<$LivingEntity>;
    }
    export class $LivingIncomingDamageEvent extends $LivingEvent implements $ICancellableEvent {
        getContainer(): $DamageContainer;
        setAmount(arg0: number): void;
        getOriginalAmount(): number;
        addReductionModifier(arg0: $DamageContainer$Reduction_, arg1: $IReductionFunction_): void;
        setInvulnerabilityTicks(arg0: number): void;
        getSource(): $DamageSource;
        getAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get container(): $DamageContainer;
        get originalAmount(): number;
        set invulnerabilityTicks(value: number);
        get source(): $DamageSource;
    }
    export class $LivingExperienceDropEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalExperience(): number;
        getAttackingPlayer(): $Player;
        setDroppedExperience(arg0: number): void;
        getDroppedExperience(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $Player, arg2: number);
        get originalExperience(): number;
        get attackingPlayer(): $Player;
    }
    export class $AnimalTameEvent extends $LivingEvent implements $ICancellableEvent {
        getAnimal(): $Animal;
        getTamer(): $Player;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Animal, arg1: $Player);
        get animal(): $Animal;
        get tamer(): $Player;
    }
    export class $LivingChangeTargetEvent extends $LivingEvent implements $ICancellableEvent {
        setNewAboutToBeSetTarget(arg0: $LivingEntity): void;
        getOriginalAboutToBeSetTarget(): $LivingEntity;
        getNewAboutToBeSetTarget(): $LivingEntity;
        getTargetType(): $LivingChangeTargetEvent$ILivingTargetType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $LivingEntity, arg2: $LivingChangeTargetEvent$ILivingTargetType);
        get originalAboutToBeSetTarget(): $LivingEntity;
        get targetType(): $LivingChangeTargetEvent$ILivingTargetType;
    }
    export class $MobEffectEvent$Remove extends $MobEffectEvent implements $ICancellableEvent {
        getCure(): $EffectCure;
        getEffect(): $Holder<$MobEffect>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $Holder_<$MobEffect>, arg2: $EffectCure);
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance, arg2: $EffectCure);
        get cure(): $EffectCure;
        get effect(): $Holder<$MobEffect>;
    }
    export class $EffectParticleModificationEvent extends $LivingEvent {
        getOriginalParticleOptions(): $ParticleOptions;
        setParticleOptions(arg0: $ParticleOptions_): void;
        getEffect(): $MobEffectInstance;
        isVisible(): boolean;
        getParticleOptions(): $ParticleOptions;
        setVisible(arg0: boolean): void;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
        get originalParticleOptions(): $ParticleOptions;
        get effect(): $MobEffectInstance;
    }
    export class $LivingEvent$LivingJumpEvent extends $LivingEvent {
        constructor(arg0: $LivingEntity);
    }
    export class $LivingDamageEvent$Post extends $LivingDamageEvent {
        getOriginalDamage(): number;
        getShieldDamage(): number;
        getSource(): $DamageSource;
        getNewDamage(): number;
        getBlockedDamage(): number;
        getPostAttackInvulnerabilityTicks(): number;
        getReduction(arg0: $DamageContainer$Reduction_): number;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer);
        get originalDamage(): number;
        get shieldDamage(): number;
        get source(): $DamageSource;
        get newDamage(): number;
        get blockedDamage(): number;
        get postAttackInvulnerabilityTicks(): number;
    }
    export class $LivingDestroyBlockEvent extends $LivingEvent implements $ICancellableEvent {
        getState(): $BlockState;
        getPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $LivingChangeTargetEvent$ILivingTargetType {
    }
    export interface $LivingChangeTargetEvent$ILivingTargetType {
    }
    export class $LivingShieldBlockEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalBlockedDamage(): number;
        getDamageSource(): $DamageSource;
        setShieldDamage(arg0: number): void;
        getOriginalBlock(): boolean;
        setBlocked(arg0: boolean): void;
        getBlocked(): boolean;
        setBlockedDamage(arg0: number): void;
        shieldDamage(): number;
        getBlockedDamage(): number;
        getDamageContainer(): $DamageContainer;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $DamageContainer, arg2: boolean);
        get originalBlockedDamage(): number;
        get damageSource(): $DamageSource;
        get originalBlock(): boolean;
        get damageContainer(): $DamageContainer;
    }
    export class $LivingEntityUseItemEvent$Finish extends $LivingEntityUseItemEvent {
        setResultStack(arg0: $ItemStack_): void;
        getResultStack(): $ItemStack;
        constructor(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: $ItemStack_);
    }
    export class $ArmorHurtEvent extends $LivingEvent implements $ICancellableEvent {
        getOriginalDamage(arg0: $EquipmentSlot_): number;
        getDamageSource(): $DamageSource;
        getArmorItemStack(arg0: $EquipmentSlot_): $ItemStack;
        getArmorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
        getNewDamage(arg0: $EquipmentSlot_): number;
        setNewDamage(arg0: $EquipmentSlot_, arg1: number): void;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $EnumMap<$EquipmentSlot_, $ArmorHurtEvent$ArmorEntry>, arg1: $LivingEntity, arg2: $DamageSource_);
        get damageSource(): $DamageSource;
        get armorMap(): $Map<$EquipmentSlot, $ArmorHurtEvent$ArmorEntry>;
    }
    export class $MobSpawnEvent$PositionCheck extends $MobSpawnEvent {
        getSpawner(): $BaseSpawner;
        getSpawnType(): $MobSpawnType;
        setResult(arg0: $MobSpawnEvent$PositionCheck$Result_): void;
        getResult(): $MobSpawnEvent$PositionCheck$Result;
        constructor(arg0: $Mob, arg1: $ServerLevelAccessor, arg2: $MobSpawnType_, arg3: $BaseSpawner);
        get spawner(): $BaseSpawner;
        get spawnType(): $MobSpawnType;
    }
    export class $LivingDamageEvent extends $LivingEvent {
    }
    export class $MobEffectEvent$Expired extends $MobEffectEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $LivingEntity, arg1: $MobEffectInstance);
    }
}
