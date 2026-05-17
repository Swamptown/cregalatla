import { $Future } from "@package/java/util/concurrent";
import { $Entity, $ExperienceOrb, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $AdvancementHolder_, $AdvancementHolder, $AdvancementProgress } from "@package/net/minecraft/advancements";
import { $InteractionResult, $InteractionResultHolder, $InteractionHand, $ItemInteractionResult_, $InteractionHand_, $InteractionResult_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Connection } from "@package/net/minecraft/network";
import { $EnchantmentInstance } from "@package/net/minecraft/world/item/enchantment";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Runnable_ } from "@package/java/lang";
import { $MerchantOffer } from "@package/net/minecraft/world/item/trading";
import { $GameType, $GameType_, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $File, $File_ } from "@package/java/io";
import { $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $ICancellableEvent, $Event } from "@package/net/neoforged/bus/api";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player$BedSleepingProblem_, $Player, $Player$BedSleepingProblem } from "@package/net/minecraft/world/entity/player";
import { $ServerboundPlayerActionPacket$Action_ } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $AbstractVillager } from "@package/net/minecraft/world/entity/npc";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LivingEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Gui$HeartType_, $Gui$HeartType } from "@package/net/minecraft/client/gui";
import { $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/neoforged/neoforge/event/entity/player" {
    export class $PlayerHeartTypeEvent extends $PlayerEvent {
        getType(): $Gui$HeartType;
        getOriginalType(): $Gui$HeartType;
        setType(arg0: $Gui$HeartType_): void;
        constructor(arg0: $Player, arg1: $Gui$HeartType_);
        get originalType(): $Gui$HeartType;
    }
    export class $PlayerContainerEvent extends $PlayerEvent {
        getContainer(): $AbstractContainerMenu;
        constructor(arg0: $Player, arg1: $AbstractContainerMenu);
        get container(): $AbstractContainerMenu;
    }
    export class $ItemTooltipEvent extends $PlayerEvent {
        getContext(): $Item$TooltipContext;
        getFlags(): $TooltipFlag;
        getToolTip(): $List<$Component>;
        getItemStack(): $ItemStack;
        constructor(arg0: $ItemStack_, arg1: $Player, arg2: $List_<$Component_>, arg3: $TooltipFlag, arg4: $Item$TooltipContext);
        get context(): $Item$TooltipContext;
        get flags(): $TooltipFlag;
        get toolTip(): $List<$Component>;
        get itemStack(): $ItemStack;
    }
    export class $PlayerEvent extends $LivingEvent {
        constructor(arg0: $Player);
    }
    export class $SweepAttackEvent extends $PlayerEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        setSweeping(arg0: boolean): void;
        isVanillaSweep(): boolean;
        setCanceled(arg0: boolean): void;
        isSweeping(): boolean;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Entity, arg2: boolean);
        get target(): $Entity;
        get vanillaSweep(): boolean;
    }
    export class $AdvancementEvent$AdvancementEarnEvent extends $AdvancementEvent {
        constructor(arg0: $Player, arg1: $AdvancementHolder_);
    }
    export class $PlayerEvent$ItemCraftedEvent extends $PlayerEvent {
        getCrafting(): $ItemStack;
        getInventory(): $Container;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Container);
        get crafting(): $ItemStack;
        get inventory(): $Container;
    }
    export class $ItemFishedEvent extends $PlayerEvent implements $ICancellableEvent {
        getRodDamage(): number;
        damageRodBy(arg0: number): void;
        getHookEntity(): $FishingHook;
        getDrops(): $NonNullList<$ItemStack>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $List_<$ItemStack_>, arg1: number, arg2: $FishingHook);
        get rodDamage(): number;
        get hookEntity(): $FishingHook;
        get drops(): $NonNullList<$ItemStack>;
    }
    export class $AttackEntityEvent extends $PlayerEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Entity);
        get target(): $Entity;
    }
    export class $PlayerEnchantItemEvent extends $PlayerEvent {
        getEnchantments(): $List<$EnchantmentInstance>;
        getEnchantedItem(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $List_<$EnchantmentInstance>);
        get enchantments(): $List<$EnchantmentInstance>;
        get enchantedItem(): $ItemStack;
    }
    export class $PlayerWakeUpEvent extends $PlayerEvent {
        wakeImmediately(): boolean;
        updateLevel(): boolean;
        constructor(arg0: $Player, arg1: boolean, arg2: boolean);
    }
    export class $ArrowNockEvent extends $PlayerEvent implements $ICancellableEvent {
        getLevel(): $Level;
        getBow(): $ItemStack;
        setAction(arg0: $InteractionResultHolder<$ItemStack_>): void;
        hasAmmo(): boolean;
        getHand(): $InteractionHand;
        getAction(): $InteractionResultHolder<$ItemStack>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_, arg3: $Level_, arg4: boolean);
        get level(): $Level;
        get bow(): $ItemStack;
        get hand(): $InteractionHand;
    }
    export class $PlayerInteractEvent$RightClickItem extends $PlayerInteractEvent implements $ICancellableEvent {
        setCancellationResult(arg0: $InteractionResult_): void;
        getCancellationResult(): $InteractionResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_);
    }
    export class $CriticalHitEvent extends $PlayerEvent {
        getTarget(): $Entity;
        setDamageMultiplier(arg0: number): void;
        isVanillaCritical(): boolean;
        setCriticalHit(arg0: boolean): void;
        getVanillaMultiplier(): number;
        setDisableSweep(arg0: boolean): void;
        isCriticalHit(): boolean;
        getDamageMultiplier(): number;
        disableSweep(): boolean;
        constructor(arg0: $Player, arg1: $Entity, arg2: number, arg3: boolean);
        get target(): $Entity;
        get vanillaCritical(): boolean;
        get vanillaMultiplier(): number;
    }
    export class $PlayerInteractEvent$LeftClickBlock$Action extends $Enum<$PlayerInteractEvent$LeftClickBlock$Action> {
        static values(): $PlayerInteractEvent$LeftClickBlock$Action[];
        static convert(arg0: $ServerboundPlayerActionPacket$Action_): $PlayerInteractEvent$LeftClickBlock$Action;
        static valueOf(arg0: string): $PlayerInteractEvent$LeftClickBlock$Action;
        static ABORT: $PlayerInteractEvent$LeftClickBlock$Action;
        static STOP: $PlayerInteractEvent$LeftClickBlock$Action;
        static CLIENT_HOLD: $PlayerInteractEvent$LeftClickBlock$Action;
        static START: $PlayerInteractEvent$LeftClickBlock$Action;
    }
    /**
     * Values that may be interpreted as {@link $PlayerInteractEvent$LeftClickBlock$Action}.
     */
    export type $PlayerInteractEvent$LeftClickBlock$Action_ = "start" | "stop" | "abort" | "client_hold";
    export class $PlayerXpEvent$PickupXp extends $PlayerXpEvent implements $ICancellableEvent {
        getOrb(): $ExperienceOrb;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ExperienceOrb);
        get orb(): $ExperienceOrb;
    }
    export class $PlayerSpawnPhantomsEvent extends $PlayerEvent {
        getResult(): $PlayerSpawnPhantomsEvent$Result;
        setResult(arg0: $PlayerSpawnPhantomsEvent$Result_): void;
        getPhantomsToSpawn(): number;
        setPhantomsToSpawn(arg0: number): void;
        shouldSpawnPhantoms(arg0: $ServerLevel, arg1: $BlockPos_): boolean;
        constructor(arg0: $Player, arg1: number);
    }
    export class $UseItemOnBlockEvent extends $Event implements $ICancellableEvent {
        getLevel(): $Level;
        getPlayer(): $Player;
        getHand(): $InteractionHand;
        setCancellationResult(arg0: $ItemInteractionResult_): void;
        getFace(): $Direction;
        getUseOnContext(): $UseOnContext;
        getUsePhase(): $UseItemOnBlockEvent$UsePhase;
        cancelWithResult(arg0: $ItemInteractionResult_): void;
        getItemStack(): $ItemStack;
        getSide(): $LogicalSide;
        getPos(): $BlockPos;
        getCancellationResult(): $ItemInteractionResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $UseOnContext, arg1: $UseItemOnBlockEvent$UsePhase_);
        get level(): $Level;
        get player(): $Player;
        get hand(): $InteractionHand;
        get face(): $Direction;
        get useOnContext(): $UseOnContext;
        get usePhase(): $UseItemOnBlockEvent$UsePhase;
        get itemStack(): $ItemStack;
        get side(): $LogicalSide;
        get pos(): $BlockPos;
    }
    export class $TradeWithVillagerEvent extends $PlayerEvent {
        getMerchantOffer(): $MerchantOffer;
        getAbstractVillager(): $AbstractVillager;
        constructor(arg0: $Player, arg1: $MerchantOffer, arg2: $AbstractVillager);
        get merchantOffer(): $MerchantOffer;
        get abstractVillager(): $AbstractVillager;
    }
    export class $PlayerEvent$LoadFromFile extends $PlayerEvent {
        getPlayerDirectory(): $File;
        getPlayerFile(arg0: string): $File;
        getPlayerUUID(): string;
        constructor(arg0: $Player, arg1: $File_, arg2: string);
        get playerDirectory(): $File;
        get playerUUID(): string;
    }
    export class $ItemEntityPickupEvent$Post extends $ItemEntityPickupEvent {
        getOriginalStack(): $ItemStack;
        getCurrentStack(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemEntity, arg2: $ItemStack_);
        get originalStack(): $ItemStack;
        get currentStack(): $ItemStack;
    }
    export class $ItemEntityPickupEvent$Pre extends $ItemEntityPickupEvent {
        setCanPickup(arg0: $TriState_): void;
        canPickup(): $TriState;
        constructor(arg0: $Player, arg1: $ItemEntity);
    }
    export class $PlayerSetSpawnEvent extends $PlayerEvent implements $ICancellableEvent {
        getNewSpawn(): $BlockPos;
        isForced(): boolean;
        getSpawnLevel(): $ResourceKey<$Level>;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $BlockPos_, arg3: boolean);
        get newSpawn(): $BlockPos;
        get forced(): boolean;
        get spawnLevel(): $ResourceKey<$Level>;
    }
    export class $PlayerEvent$SaveToFile extends $PlayerEvent {
        getPlayerDirectory(): $File;
        getPlayerFile(arg0: string): $File;
        getPlayerUUID(): string;
        constructor(arg0: $Player, arg1: $File_, arg2: string);
        get playerDirectory(): $File;
        get playerUUID(): string;
    }
    export class $PlayerEvent$BreakSpeed extends $PlayerEvent implements $ICancellableEvent {
        getState(): $BlockState;
        getPosition(): ($BlockPos) | undefined;
        getNewSpeed(): number;
        setNewSpeed(arg0: number): void;
        getOriginalSpeed(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: number, arg3: $BlockPos_);
        get state(): $BlockState;
        get position(): ($BlockPos) | undefined;
        get originalSpeed(): number;
    }
    export class $PlayerRespawnPositionEvent extends $PlayerEvent {
        copyOriginalSpawnPosition(): boolean;
        getDimensionTransition(): $DimensionTransition;
        setDimensionTransition(arg0: $DimensionTransition_): void;
        setRespawnLevel(arg0: $ResourceKey_<$Level>): void;
        getOriginalDimensionTransition(): $DimensionTransition;
        setCopyOriginalSpawnPosition(arg0: boolean): void;
        isFromEndFight(): boolean;
        constructor(arg0: $ServerPlayer, arg1: $DimensionTransition_, arg2: boolean);
        set respawnLevel(value: $ResourceKey_<$Level>);
        get originalDimensionTransition(): $DimensionTransition;
        get fromEndFight(): boolean;
    }
    export class $PlayerContainerEvent$Close extends $PlayerContainerEvent {
        constructor(arg0: $Player, arg1: $AbstractContainerMenu);
    }
    export class $PlayerDestroyItemEvent extends $PlayerEvent {
        getHand(): $InteractionHand;
        getOriginal(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $InteractionHand_);
        get hand(): $InteractionHand;
        get original(): $ItemStack;
    }
    export class $ArrowLooseEvent extends $PlayerEvent implements $ICancellableEvent {
        getLevel(): $Level;
        getBow(): $ItemStack;
        setCharge(arg0: number): void;
        hasAmmo(): boolean;
        getCharge(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $Level_, arg3: number, arg4: boolean);
        get level(): $Level;
        get bow(): $ItemStack;
    }
    export class $PlayerEvent$TabListNameFormat extends $PlayerEvent {
        getDisplayName(): $Component;
        setDisplayName(arg0: $Component_): void;
        constructor(arg0: $Player);
    }
    export class $PlayerEvent$PlayerLoggedOutEvent extends $PlayerEvent {
        constructor(arg0: $Player);
    }
    export class $PlayerEvent$Clone extends $PlayerEvent {
        getOriginal(): $Player;
        isWasDeath(): boolean;
        constructor(arg0: $Player, arg1: $Player, arg2: boolean);
        get original(): $Player;
        get wasDeath(): boolean;
    }
    export class $PlayerInteractEvent$LeftClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {
        setUseItem(arg0: $TriState_): void;
        getUseBlock(): $TriState;
        setUseBlock(arg0: $TriState_): void;
        setCanceled(arg0: boolean): void;
        getAction(): $PlayerInteractEvent$LeftClickBlock$Action;
        getUseItem(): $TriState;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $PlayerInteractEvent$LeftClickBlock$Action_);
        get action(): $PlayerInteractEvent$LeftClickBlock$Action;
    }
    export class $PlayerSpawnPhantomsEvent$Result extends $Enum<$PlayerSpawnPhantomsEvent$Result> {
        static values(): $PlayerSpawnPhantomsEvent$Result[];
        static valueOf(arg0: string): $PlayerSpawnPhantomsEvent$Result;
        static DENY: $PlayerSpawnPhantomsEvent$Result;
        static ALLOW: $PlayerSpawnPhantomsEvent$Result;
        static DEFAULT: $PlayerSpawnPhantomsEvent$Result;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSpawnPhantomsEvent$Result}.
     */
    export type $PlayerSpawnPhantomsEvent$Result_ = "allow" | "default" | "deny";
    export class $PlayerEvent$ItemSmeltedEvent extends $PlayerEvent {
        getSmelting(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_);
        get smelting(): $ItemStack;
    }
    export class $PlayerInteractEvent$EntityInteract extends $PlayerInteractEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        setCancellationResult(arg0: $InteractionResult_): void;
        getCancellationResult(): $InteractionResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $Entity);
        get target(): $Entity;
    }
    export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {
        getHitVec(): $BlockHitResult;
        setUseItem(arg0: $TriState_): void;
        getUseBlock(): $TriState;
        setUseBlock(arg0: $TriState_): void;
        setCancellationResult(arg0: $InteractionResult_): void;
        setCanceled(arg0: boolean): void;
        getUseItem(): $TriState;
        getCancellationResult(): $InteractionResult;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $BlockHitResult);
        get hitVec(): $BlockHitResult;
    }
    export class $CanContinueSleepingEvent extends $LivingEvent {
        setContinueSleeping(arg0: boolean): void;
        mayContinueSleeping(): boolean;
        getProblem(): $Player$BedSleepingProblem;
        constructor(arg0: $LivingEntity, arg1: $Player$BedSleepingProblem_);
        set continueSleeping(value: boolean);
        get problem(): $Player$BedSleepingProblem;
    }
    export class $PlayerEvent$StopTracking extends $PlayerEvent {
        getTarget(): $Entity;
        constructor(arg0: $Player, arg1: $Entity);
        get target(): $Entity;
    }
    export class $PlayerEvent$NameFormat extends $PlayerEvent {
        getDisplayname(): $Component;
        setDisplayname(arg0: $Component_): void;
        getUsername(): $Component;
        constructor(arg0: $Player, arg1: $Component_);
        get username(): $Component;
    }
    export class $PlayerEvent$PlayerLoggedInEvent extends $PlayerEvent {
        constructor(arg0: $Player);
    }
    export class $AnvilRepairEvent extends $PlayerEvent {
        getBreakChance(): number;
        setBreakChance(arg0: number): void;
        getOutput(): $ItemStack;
        getLeft(): $ItemStack;
        getRight(): $ItemStack;
        constructor(arg0: $Player, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ItemStack_);
        get output(): $ItemStack;
        get left(): $ItemStack;
        get right(): $ItemStack;
    }
    export class $PermissionsChangedEvent extends $PlayerEvent implements $ICancellableEvent {
        getNewLevel(): number;
        getOldLevel(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ServerPlayer, arg1: number, arg2: number);
        get newLevel(): number;
        get oldLevel(): number;
    }
    export class $PlayerXpEvent$LevelChange extends $PlayerXpEvent implements $ICancellableEvent {
        setLevels(arg0: number): void;
        getLevels(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: number);
    }
    export class $PlayerEvent$PlayerChangeGameModeEvent extends $PlayerEvent implements $ICancellableEvent {
        getCurrentGameMode(): $GameType;
        setNewGameMode(arg0: $GameType_): void;
        getNewGameMode(): $GameType;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $GameType_, arg2: $GameType_);
        get currentGameMode(): $GameType;
    }
    export class $PlayerXpEvent extends $PlayerEvent {
        constructor(arg0: $Player);
    }
    export class $AdvancementEvent$AdvancementProgressEvent extends $AdvancementEvent {
        getCriterionName(): string;
        getProgressType(): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        getAdvancementProgress(): $AdvancementProgress;
        constructor(arg0: $Player, arg1: $AdvancementHolder_, arg2: $AdvancementProgress, arg3: string, arg4: $AdvancementEvent$AdvancementProgressEvent$ProgressType_);
        get criterionName(): string;
        get progressType(): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        get advancementProgress(): $AdvancementProgress;
    }
    export class $ItemEntityPickupEvent extends $Event {
        getItemEntity(): $ItemEntity;
        getPlayer(): $Player;
        constructor(arg0: $Player, arg1: $ItemEntity);
        get itemEntity(): $ItemEntity;
        get player(): $Player;
    }
    export class $PlayerNegotiationEvent extends $Event {
        getProfile(): $GameProfile;
        enqueueWork(arg0: $Runnable_): void;
        enqueueWork(arg0: $Future<void>): void;
        getConnection(): $Connection;
        constructor(arg0: $Connection, arg1: $GameProfile, arg2: $List_<$Future<void>>);
        get profile(): $GameProfile;
        get connection(): $Connection;
    }
    export class $CanPlayerSleepEvent extends $PlayerEvent {
        getState(): $BlockState;
        getLevel(): $Level;
        setProblem(arg0: $Player$BedSleepingProblem_): void;
        getVanillaProblem(): $Player$BedSleepingProblem;
        getProblem(): $Player$BedSleepingProblem;
        getPos(): $BlockPos;
        constructor(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $Player$BedSleepingProblem_);
        get state(): $BlockState;
        get level(): $Level;
        get vanillaProblem(): $Player$BedSleepingProblem;
        get pos(): $BlockPos;
    }
    export class $PlayerInteractEvent extends $PlayerEvent {
        getLevel(): $Level;
        getHand(): $InteractionHand;
        getFace(): $Direction;
        getItemStack(): $ItemStack;
        getSide(): $LogicalSide;
        getPos(): $BlockPos;
        get level(): $Level;
        get hand(): $InteractionHand;
        get face(): $Direction;
        get itemStack(): $ItemStack;
        get side(): $LogicalSide;
        get pos(): $BlockPos;
    }
    export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent implements $ICancellableEvent {
        getTarget(): $Entity;
        getLocalPos(): $Vec3;
        setCancellationResult(arg0: $InteractionResult_): void;
        getCancellationResult(): $InteractionResult;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $InteractionHand_, arg2: $Entity, arg3: $Vec3_);
        get target(): $Entity;
        get localPos(): $Vec3;
    }
    export class $PlayerEvent$StartTracking extends $PlayerEvent {
        getTarget(): $Entity;
        constructor(arg0: $Player, arg1: $Entity);
        get target(): $Entity;
    }
    export class $PlayerXpEvent$XpChange extends $PlayerXpEvent implements $ICancellableEvent {
        setAmount(arg0: number): void;
        getAmount(): number;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: number);
    }
    export class $AdvancementEvent$AdvancementProgressEvent$ProgressType extends $Enum<$AdvancementEvent$AdvancementProgressEvent$ProgressType> {
        static values(): $AdvancementEvent$AdvancementProgressEvent$ProgressType[];
        static valueOf(arg0: string): $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        static GRANT: $AdvancementEvent$AdvancementProgressEvent$ProgressType;
        static REVOKE: $AdvancementEvent$AdvancementProgressEvent$ProgressType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementEvent$AdvancementProgressEvent$ProgressType}.
     */
    export type $AdvancementEvent$AdvancementProgressEvent$ProgressType_ = "grant" | "revoke";
    export class $BonemealEvent extends $Event implements $ICancellableEvent {
        getState(): $BlockState;
        getStack(): $ItemStack;
        getLevel(): $Level;
        setSuccessful(arg0: boolean): void;
        getPlayer(): $Player;
        isSuccessful(): boolean;
        isValidBonemealTarget(): boolean;
        setCanceled(arg0: boolean): void;
        getPos(): $BlockPos;
        isCanceled(): boolean;
        constructor(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ItemStack_);
        get state(): $BlockState;
        get stack(): $ItemStack;
        get level(): $Level;
        get player(): $Player;
        get validBonemealTarget(): boolean;
        get pos(): $BlockPos;
    }
    export class $PlayerFlyableFallEvent extends $PlayerEvent {
        getMultiplier(): number;
        setMultiplier(arg0: number): void;
        getDistance(): number;
        setDistance(arg0: number): void;
        constructor(arg0: $Player, arg1: number, arg2: number);
    }
    export class $PlayerEvent$HarvestCheck extends $PlayerEvent {
        getLevel(): $BlockGetter;
        getTargetBlock(): $BlockState;
        setCanHarvest(arg0: boolean): void;
        canHarvest(): boolean;
        getPos(): $BlockPos;
        constructor(arg0: $Player, arg1: $BlockState_, arg2: $BlockGetter, arg3: $BlockPos_, arg4: boolean);
        get level(): $BlockGetter;
        get targetBlock(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $ClientInformationUpdatedEvent extends $PlayerEvent {
        getUpdatedInformation(): $ClientInformation;
        getOldInformation(): $ClientInformation;
        constructor(arg0: $ServerPlayer, arg1: $ClientInformation_, arg2: $ClientInformation_);
        get updatedInformation(): $ClientInformation;
        get oldInformation(): $ClientInformation;
    }
    export class $PlayerInteractEvent$LeftClickEmpty extends $PlayerInteractEvent {
        constructor(arg0: $Player);
    }
    export class $PlayerInteractEvent$RightClickEmpty extends $PlayerInteractEvent {
        constructor(arg0: $Player, arg1: $InteractionHand_);
    }
    export class $PlayerContainerEvent$Open extends $PlayerContainerEvent {
        constructor(arg0: $Player, arg1: $AbstractContainerMenu);
    }
    export class $PlayerEvent$PlayerRespawnEvent extends $PlayerEvent {
        isEndConquered(): boolean;
        constructor(arg0: $Player, arg1: boolean);
        get endConquered(): boolean;
    }
    export class $UseItemOnBlockEvent$UsePhase extends $Enum<$UseItemOnBlockEvent$UsePhase> {
        static values(): $UseItemOnBlockEvent$UsePhase[];
        static valueOf(arg0: string): $UseItemOnBlockEvent$UsePhase;
        static ITEM_BEFORE_BLOCK: $UseItemOnBlockEvent$UsePhase;
        static BLOCK: $UseItemOnBlockEvent$UsePhase;
        static ITEM_AFTER_BLOCK: $UseItemOnBlockEvent$UsePhase;
    }
    /**
     * Values that may be interpreted as {@link $UseItemOnBlockEvent$UsePhase}.
     */
    export type $UseItemOnBlockEvent$UsePhase_ = "item_before_block" | "block" | "item_after_block";
    export class $AdvancementEvent extends $PlayerEvent {
        getAdvancement(): $AdvancementHolder;
        constructor(arg0: $Player, arg1: $AdvancementHolder_);
        get advancement(): $AdvancementHolder;
    }
    export class $PlayerEvent$PlayerChangedDimensionEvent extends $PlayerEvent {
        getFrom(): $ResourceKey<$Level>;
        getTo(): $ResourceKey<$Level>;
        constructor(arg0: $Player, arg1: $ResourceKey_<$Level>, arg2: $ResourceKey_<$Level>);
        get from(): $ResourceKey<$Level>;
        get to(): $ResourceKey<$Level>;
    }
}
