import { $RecipeType_, $Recipe, $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EquipmentSlot, $LivingEntity, $Mob, $MobCategory, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType_, $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementHolder, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $DecimalFormat } from "@package/java/text";
import { $InteractionResult, $MenuProvider, $InteractionHand_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $TriState, $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $PacketSendListener, $Connection, $RegistryFriendlyByteBuf, $PacketListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DataComponentType, $DataComponentType_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $IBlockStateExtensionMixin, $IBlockExtensionMixin } from "@package/net/fabricmc/fabric/mixin/block";
import { $SoundAction, $ItemAbility_, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IWithData } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $IContainerFactory_ } from "@package/net/neoforged/neoforge/network";
import { $Item, $Item$Properties, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack, $ArmorMaterial$Layer } from "@package/net/minecraft/world/item";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MutableComponent, $Component_, $TextColor, $TextColor_, $Component } from "@package/net/minecraft/network/chat";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ModelDataManager, $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $RailShape, $RailShape_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $SoundType, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $EnderMan } from "@package/net/minecraft/world/entity/monster";
import { $HitResult, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Boat, $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $Transformation } from "@package/com/mojang/math";
import { $FabricItem } from "@package/net/fabricmc/fabric/api/item/v1";
import { $Vector3f, $Vector4f } from "@package/org/joml";
import { $ItemCapability, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $TagsProvider$TagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "@package/net/minecraft/data/tags";
import { $AttributeModifier$Operation_, $AttributeModifier_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $Set_, $Map, $OptionalInt, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $IntFunction_, $Supplier_, $Consumer_, $BiConsumer_, $BiPredicate_, $BiFunction_ } from "@package/java/util/function";
import { $FabricBlockState, $FabricBlock } from "@package/net/fabricmc/fabric/api/block/v1";
import { $BlockPos, $HolderLookup$RegistryLookup, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer$RespawnPosAngle, $ServerChunkCache, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $Enchantment, $EnchantmentInstance, $Enchantment_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Enum, $Iterable_, $Runnable_ } from "@package/java/lang";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $ChunkPos, $BlockGetter, $SignalGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagBuilder, $TagEntry, $TagKey_ } from "@package/net/minecraft/tags";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $FluidState, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ItemAttributeModifiers, $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $FoodProperties } from "@package/net/minecraft/world/food";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $TriConsumer_ } from "@package/org/apache/commons/lang3/function";
import { $StreamEncoder_, $StreamDecoder_ } from "@package/net/minecraft/network/codec";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/neoforged/neoforge/common/extensions" {
    export class $IServerCommonPacketListenerExtension {
    }
    export interface $IServerCommonPacketListenerExtension extends $ICommonPacketListener {
        send(arg0: $CustomPacketPayload_): void;
        send(arg0: $Packet<never>, arg1: $PacketSendListener): void;
        send(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
    }
    export class $IEnchantmentExtension {
    }
    export interface $IEnchantmentExtension {
    }
    export class $ILevelExtension {
        static TRANSLATION_PREFIX: string;
    }
    export interface $ILevelExtension {
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: C): T;
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_): T;
        getCapability<T>(arg0: $BlockCapability<T, void>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity): T;
        invalidateCapabilities(arg0: $BlockPos_): void;
        invalidateCapabilities(arg0: $ChunkPos): void;
        getModelDataManager(): $ModelDataManager;
        getPartEntities(): $Collection<$PartEntity<never>>;
        getMaxEntityRadius(): number;
        increaseMaxEntityRadius(arg0: number): number;
        getDescriptionKey(): string;
        getDescription(): $Component;
        get modelDataManager(): $ModelDataManager;
        get partEntities(): $Collection<$PartEntity<never>>;
        get maxEntityRadius(): number;
        get descriptionKey(): string;
        get description(): $Component;
    }
    export class $IPackResourcesExtension {
    }
    export interface $IPackResourcesExtension {
        isHidden(): boolean;
        get hidden(): boolean;
    }
    export class $IAttributeExtension {
        static isNullOrAddition(arg0: $AttributeModifier$Operation_): boolean;
        static FORMAT: $DecimalFormat;
    }
    export interface $IAttributeExtension {
        getBaseId(): $ResourceLocation;
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: $TooltipFlag): $MutableComponent;
        getMergedStyle(arg0: boolean): $TextColor;
        toValueComponent(arg0: $AttributeModifier$Operation_, arg1: number, arg2: $TooltipFlag): $MutableComponent;
        getDebugInfo(arg0: $AttributeModifier_, arg1: $TooltipFlag): $Component;
        toComponent(arg0: $AttributeModifier_, arg1: $TooltipFlag): $MutableComponent;
        get baseId(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IAttributeExtension}.
     */
    export type $IAttributeExtension_ = ((arg0: boolean) => $TextColor_);
    export class $IItemPropertiesExtensions {
    }
    export interface $IItemPropertiesExtensions {
        component<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $Item$Properties;
    }
    export class $IBlockExtension {
    }
    export interface $IBlockExtension extends $FabricBlock, $IBlockExtensionMixin {
        isEmpty(arg0: $BlockState_): boolean;
        rotate(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $Rotation_): $BlockState;
        makesOpenTrapdoorAboveClimbable(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        getCloneItemStack(arg0: $BlockState_, arg1: $HitResult, arg2: $LevelReader, arg3: $BlockPos_, arg4: $Player): $ItemStack;
        collisionExtendsVertically(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        addLandingEffects(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockState_, arg4: $LivingEntity, arg5: number): boolean;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        getFriction(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): number;
        isScaffolding(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        isBed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        setBedOccupied(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $LivingEntity, arg4: boolean): void;
        getBedDirection(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): $Direction;
        addRunningEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): boolean;
        getPistonPushReaction(arg0: $BlockState_): $PushReaction;
        hasDynamicLightEmission(arg0: $BlockState_): boolean;
        getLightEmission(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        ignitedByLava(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        isLadder(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        canHarvestBlock(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Player): boolean;
        onDestroyedByPlayer(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: boolean, arg5: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $FluidState): void;
        getRespawnPosition(arg0: $BlockState_, arg1: $EntityType_<never>, arg2: $LevelReader, arg3: $BlockPos_, arg4: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        getExplosionResistance(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        canSustainPlant(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_): $TriState;
        onTreeGrow(arg0: $BlockState_, arg1: $LevelReader, arg2: $BiConsumer_<$BlockPos, $BlockState>, arg3: $RandomSource, arg4: $BlockPos_, arg5: $TreeConfiguration): boolean;
        isFertile(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        isConduitFrame(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): boolean;
        isPortalFrame(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getExpDrop(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockEntity, arg4: $Entity, arg5: $ItemStack_): number;
        getEnchantPowerBonus(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): number;
        onNeighborChange(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): void;
        shouldCheckWeakPower(arg0: $BlockState_, arg1: $SignalGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        getWeakChanges(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getBeaconColorMultiplier(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockPos_): number;
        getStateAtViewpoint(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Vec3_): $BlockState;
        isSlimeBlock(arg0: $BlockState_): boolean;
        isStickyBlock(arg0: $BlockState_): boolean;
        canStickTo(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getFlammability(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isFlammable(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        onCaughtFire(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_, arg4: $LivingEntity): void;
        getFireSpreadSpeed(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        isFireSource(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Entity): boolean;
        isBurning(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getBlockPathType(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob): $PathType;
        getAdjacentBlockPathType(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        canDropFromExplosion(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): boolean;
        onBlockExploded(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Explosion): void;
        shouldDisplayFluidOverlay(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $FluidState): boolean;
        getToolModifiedState(arg0: $BlockState_, arg1: $UseOnContext, arg2: $ItemAbility_, arg3: boolean): $BlockState;
        canConnectRedstone(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $Direction_): boolean;
        supportsExternalFaceHiding(arg0: $BlockState_): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): void;
        canBeHydrated(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $FluidState, arg4: $BlockPos_): boolean;
        getAppearance(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_): $BlockState;
        getBubbleColumnDirection(arg0: $BlockState_): $BubbleColumnDirection;
        shouldHideAdjacentFluidFace(arg0: $BlockState_, arg1: $Direction_, arg2: $FluidState): boolean;
        getMapColor(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $MapColor): $MapColor;
    }
    export class $IHolderExtension<T> {
    }
    export interface $IHolderExtension<T> extends $IWithData<T> {
        getKey(): $ResourceKey<T>;
        unwrapLookup(): $HolderLookup$RegistryLookup<T>;
        getDelegate(): $Holder<T>;
        get key(): $ResourceKey<T>;
        get delegate(): $Holder<T>;
    }
    export class $IAbstractMinecartExtension {
        static DEFAULT_AIR_DRAG: number;
        static DEFAULT_MAX_SPEED_AIR_VERTICAL: number;
        static DEFAULT_MAX_SPEED_AIR_LATERAL: number;
    }
    export interface $IAbstractMinecartExtension {
        getComparatorLevel(): number;
        canUseRail(): boolean;
        getMaxCartSpeedOnRail(): number;
        canBeRidden(): boolean;
        getMaxSpeedAirLateral(): number;
        getMaxSpeedAirVertical(): number;
        getDragAir(): number;
        getSlopeAdjustment(): number;
        shouldDoRailFunctions(): boolean;
        moveMinecartOnRail(arg0: $BlockPos_): void;
        isPoweredCart(): boolean;
        setCanUseRail(arg0: boolean): void;
        getCurrentCartSpeedCapOnRail(): number;
        setCurrentCartSpeedCapOnRail(arg0: number): void;
        getMaxSpeedWithRail(): number;
        getCurrentRailPosition(): $BlockPos;
        setMaxSpeedAirLateral(arg0: number): void;
        setMaxSpeedAirVertical(arg0: number): void;
        setDragAir(arg0: number): void;
        get comparatorLevel(): number;
        get maxCartSpeedOnRail(): number;
        get slopeAdjustment(): number;
        get poweredCart(): boolean;
        get maxSpeedWithRail(): number;
        get currentRailPosition(): $BlockPos;
    }
    export class $IPacketFlowExtension {
    }
    export interface $IPacketFlowExtension {
        self(): $PacketFlow;
        getReceptionSide(): $LogicalSide;
        isServerbound(): boolean;
        isClientbound(): boolean;
        get receptionSide(): $LogicalSide;
        get serverbound(): boolean;
        get clientbound(): boolean;
    }
    export class $IBaseRailBlockExtension {
    }
    export interface $IBaseRailBlockExtension {
        isFlexibleRail(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canMakeSlopes(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        getRailMaxSpeed(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $AbstractMinecart): number;
        onMinecartPass(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $AbstractMinecart): void;
        isValidRailShape(arg0: $RailShape_): boolean;
        getRailDirection(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $AbstractMinecart): $RailShape;
    }
    export class $IDispensibleContainerItemExtension {
    }
    export interface $IDispensibleContainerItemExtension {
        emptyContents(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockHitResult, arg4: $ItemStack_): boolean;
    }
    export class $ITagBuilderExtension {
    }
    export interface $ITagBuilderExtension {
        /**
         * @deprecated
         */
        remove(arg0: $TagEntry, arg1: string): $TagBuilder;
        /**
         * @deprecated
         */
        removeElement(arg0: $ResourceLocation_, arg1: string): $TagBuilder;
        removeElement(arg0: $ResourceLocation_): $TagBuilder;
        getRawBuilder(): $TagBuilder;
        /**
         * @deprecated
         */
        removeTag(arg0: $ResourceLocation_, arg1: string): $TagBuilder;
        removeTag(arg0: $ResourceLocation_): $TagBuilder;
        get rawBuilder(): $TagBuilder;
    }
    export class $IEntityExtension {
    }
    export interface $IEntityExtension extends $INBTSerializable<$CompoundTag> {
        getPickedResult(arg0: $HitResult): $ItemStack;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>): boolean;
        isInFluidType(arg0: $FluidState): boolean;
        isInFluidType(arg0: $FluidType_): boolean;
        isInFluidType(): boolean;
        isInFluidType(arg0: $BiPredicate_<$FluidType, number>, arg1: boolean): boolean;
        captureDrops(arg0: $Collection_<$ItemEntity>): $Collection<$ItemEntity>;
        captureDrops(): $Collection<$ItemEntity>;
        getMaxHeightFluidType(): $FluidType;
        getFluidTypeHeight(arg0: $FluidType_): number;
        canFluidExtinguish(arg0: $FluidType_): boolean;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        getEyeInFluidType(): $FluidType;
        isPushedByFluid(arg0: $FluidType_): boolean;
        /**
         * @deprecated
         */
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getPersistentData(): $CompoundTag;
        shouldRiderSit(): boolean;
        canRiderInteract(): boolean;
        canBeRiddenUnderFluidType(arg0: $FluidType_, arg1: $Entity): boolean;
        canTrample(arg0: $BlockState_, arg1: $BlockPos_, arg2: number): boolean;
        getClassification(arg0: boolean): $MobCategory;
        isAddedToLevel(): boolean;
        onAddedToLevel(): void;
        onRemovedFromLevel(): void;
        revive(): void;
        isMultipartEntity(): boolean;
        getParts(): $PartEntity<never>[];
        isEyeInFluidType(arg0: $FluidType_): boolean;
        canStartSwimming(): boolean;
        getFluidMotionScale(arg0: $FluidType_): number;
        getFluidFallDistanceModifier(arg0: $FluidType_): number;
        canHydrateInFluidType(arg0: $FluidType_): boolean;
        getSoundFromFluidType(arg0: $FluidType_, arg1: $SoundAction): $SoundEvent;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        sendPairingData(arg0: $ServerPlayer, arg1: $Consumer_<$CustomPacketPayload>): void;
        copyAttachmentsFrom(arg0: $Entity, arg1: boolean): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get maxHeightFluidType(): $FluidType;
        get persistentData(): $CompoundTag;
        get addedToLevel(): boolean;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
    }
    export class $IClientCommonPacketListenerExtension {
    }
    export interface $IClientCommonPacketListenerExtension extends $ICommonPacketListener {
        disconnect(arg0: $Component_): void;
        send(arg0: $CustomPacketPayload_): void;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $IAdvancementBuilderExtension {
    }
    export interface $IAdvancementBuilderExtension {
        save(arg0: $Consumer_<$AdvancementHolder>, arg1: $ResourceLocation_, arg2: $ExistingFileHelper): $AdvancementHolder;
    }
    export class $IOwnedSpawner {
    }
    export interface $IOwnedSpawner {
        getOwner(): $Either<$BlockEntity, $Entity>;
        get owner(): $Either<$BlockEntity, $Entity>;
    }
    /**
     * Values that may be interpreted as {@link $IOwnedSpawner}.
     */
    export type $IOwnedSpawner_ = (() => $Either<$BlockEntity, $Entity>);
    export class $IMobEffectExtension {
    }
    export interface $IMobEffectExtension {
        fillEffectCures(arg0: $Set_<$EffectCure>, arg1: $MobEffectInstance): void;
        getSortOrder(arg0: $MobEffectInstance): number;
    }
    export class $IFluidExtension {
    }
    export interface $IFluidExtension {
        move(arg0: $FluidState, arg1: $LivingEntity, arg2: $Vec3_, arg3: number): boolean;
        canConvertToSource(arg0: $FluidState, arg1: $Level_, arg2: $BlockPos_): boolean;
        supportsBoating(arg0: $FluidState, arg1: $Boat): boolean;
        getFluidType(): $FluidType;
        canExtinguish(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_): boolean;
        canHydrate(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        getExplosionResistance(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Explosion): number;
        getBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: boolean): $PathType;
        getAdjacentBlockPathType(arg0: $FluidState, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Mob, arg4: $PathType_): $PathType;
        get fluidType(): $FluidType;
    }
    /**
     * Values that may be interpreted as {@link $IFluidExtension}.
     */
    export type $IFluidExtension_ = (() => $FluidType_);
    export class $IHolderLookupProviderExtension {
    }
    export interface $IHolderLookupProviderExtension {
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
    }
    export class $IRecipeOutputExtension {
    }
    export interface $IRecipeOutputExtension {
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_, ...arg3: $ICondition[]): void;
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeOutputExtension}.
     */
    export type $IRecipeOutputExtension_ = ((arg0: $ResourceLocation, arg1: $Recipe<never>, arg2: $AdvancementHolder, arg3: $ICondition[]) => void);
    export class $ILevelReaderExtension {
    }
    export interface $ILevelReaderExtension {
        holder<T>(arg0: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        holderOrThrow<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(arg0: $BlockPos_, arg1: number): boolean;
    }
    export class $IServerConfigurationPacketListenerExtension {
    }
    export interface $IServerConfigurationPacketListenerExtension extends $IServerCommonPacketListenerExtension {
        finishCurrentTask(arg0: $ConfigurationTask$Type_): void;
    }
    export class $IItemExtension {
    }
    export interface $IItemExtension extends $FabricItem {
        onDestroyed(arg0: $ItemEntity, arg1: $DamageSource_): void;
        getCraftingRemainingItem(arg0: $ItemStack_): $ItemStack;
        hasCraftingRemainingItem(arg0: $ItemStack_): boolean;
        getEnchantmentValue(arg0: $ItemStack_): number;
        getDefaultAttributeModifiers(arg0: $ItemStack_): $ItemAttributeModifiers;
        isRepairable(arg0: $ItemStack_): boolean;
        isDamageable(arg0: $ItemStack_): boolean;
        canFitInsideContainerItems(arg0: $ItemStack_): boolean;
        getEnchantmentLevel(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): number;
        getAllEnchantments(arg0: $ItemStack_, arg1: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        shouldCauseReequipAnimation(arg0: $ItemStack_, arg1: $ItemStack_, arg2: boolean): boolean;
        modifyReturnValue$ddo000$fabric_item_api_v1$shouldCauseReequipAnimation(arg0: boolean, arg1: $ItemStack_, arg2: $ItemStack_, arg3: boolean): boolean;
        shouldCauseBlockBreakReset(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        handler$ddo000$fabric_item_api_v1$shouldCauseBlockBreakReset(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $CallbackInfoReturnable<any>): void;
        getCreatorModId(arg0: $ItemStack_): string;
        getBurnTime(arg0: $ItemStack_, arg1: $RecipeType_<never>): number;
        onAnimalArmorTick(arg0: $ItemStack_, arg1: $Level_, arg2: $Mob): void;
        damageItem<T extends $LivingEntity>(arg0: $ItemStack_, arg1: number, arg2: T, arg3: $Consumer_<$Item>): number;
        isEnderMask(arg0: $ItemStack_, arg1: $Player, arg2: $EnderMan): boolean;
        isNotReplaceableByPickAction(arg0: $ItemStack_, arg1: $Player, arg2: number): boolean;
        canGrindstoneRepair(arg0: $ItemStack_): boolean;
        canBeHurtBy(arg0: $ItemStack_, arg1: $DamageSource_): boolean;
        applyEnchantments(arg0: $ItemStack_, arg1: $List_<$EnchantmentInstance>): $ItemStack;
        isDamaged(arg0: $ItemStack_): boolean;
        getMaxDamage(arg0: $ItemStack_): number;
        onDroppedByPlayer(arg0: $ItemStack_, arg1: $Player): boolean;
        getHighlightTip(arg0: $ItemStack_, arg1: $Component_): $Component;
        onItemUseFirst(arg0: $ItemStack_, arg1: $UseOnContext): $InteractionResult;
        isPiglinCurrency(arg0: $ItemStack_): boolean;
        handler$ecb000$connector$redirectIsPiglinCurrency(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        getXpRepairRatio(arg0: $ItemStack_): number;
        onLeftClickEntity(arg0: $ItemStack_, arg1: $Player, arg2: $Entity): boolean;
        handler$ddj000$fabric_item_api_v1$getCraftingRemainingItem(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        handler$ddj000$fabric_item_api_v1$hasCraftingRemainingItem(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        getEntityLifespan(arg0: $ItemStack_, arg1: $Level_): number;
        hasCustomEntity(arg0: $ItemStack_): boolean;
        onEntityItemUpdate(arg0: $ItemStack_, arg1: $ItemEntity): boolean;
        doesSneakBypassUse(arg0: $ItemStack_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): boolean;
        canEquip(arg0: $ItemStack_, arg1: $EquipmentSlot_, arg2: $LivingEntity): boolean;
        handler$ddj000$fabric_item_api_v1$getEquipmentSlot(arg0: $ItemStack_, arg1: $CallbackInfoReturnable<any>): void;
        isBookEnchantable(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getArmorTexture(arg0: $ItemStack_, arg1: $Entity, arg2: $EquipmentSlot_, arg3: $ArmorMaterial$Layer, arg4: boolean): $ResourceLocation;
        setDamage(arg0: $ItemStack_, arg1: number): void;
        isPrimaryItemFor(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): boolean;
        supportsEnchantment(arg0: $ItemStack_, arg1: $Holder_<$Enchantment>): boolean;
        createEntity(arg0: $Level_, arg1: $Entity, arg2: $ItemStack_): $Entity;
        getMaxStackSize(arg0: $ItemStack_): number;
        canWalkOnPowderedSnow(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        makesPiglinsNeutral(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        getEquipmentSlot(arg0: $ItemStack_): $EquipmentSlot;
        onEntitySwing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $InteractionHand_): boolean;
        /**
         * @deprecated
         */
        onEntitySwing(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        canElytraFly(arg0: $ItemStack_, arg1: $LivingEntity): boolean;
        elytraFlightTick(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): boolean;
        canContinueUsing(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        onStopUsing(arg0: $ItemStack_, arg1: $LivingEntity, arg2: number): void;
        canPerformAction(arg0: $ItemStack_, arg1: $ItemAbility_): boolean;
        getFoodProperties(arg0: $ItemStack_, arg1: $LivingEntity): $FoodProperties;
        canDisableShield(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $LivingEntity, arg3: $LivingEntity): boolean;
        getSweepHitBox(arg0: $ItemStack_, arg1: $Player, arg2: $Entity): $AABB;
        getDamage(arg0: $ItemStack_): number;
    }
    /**
     * Values that may be interpreted as {@link $IItemExtension}.
     */
    export type $IItemExtension_ = ((arg0: $ItemStack) => boolean);
    export class $IDataComponentMapBuilderExtensions {
    }
    export interface $IDataComponentMapBuilderExtensions {
        set<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): $DataComponentMap$Builder;
    }
    export class $IDataComponentHolderExtension {
    }
    export interface $IDataComponentHolderExtension {
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
        has(arg0: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(arg0: $DataComponentType_<T>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(arg0: $Supplier_<$DataComponentType<T>>, arg1: $Item$TooltipContext, arg2: $Consumer_<$Component>, arg3: $TooltipFlag): void;
    }
    export class $IBlockEntityExtension {
    }
    export interface $IBlockEntityExtension {
        onLoad(): void;
        getPersistentData(): $CompoundTag;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        invalidateCapabilities(): void;
        requestModelDataUpdate(): void;
        onDataPacket(arg0: $Connection, arg1: $ClientboundBlockEntityDataPacket, arg2: $HolderLookup$Provider): void;
        handleUpdateTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onChunkUnloaded(): void;
        getModelData(): $ModelData;
        get persistentData(): $CompoundTag;
        get modelData(): $ModelData;
    }
    /**
     * Values that may be interpreted as {@link $IBlockEntityExtension}.
     */
    export type $IBlockEntityExtension_ = (() => $CompoundTag_);
    export class $IItemStackExtension {
    }
    export interface $IItemStackExtension {
        getAttributeModifiers(): $ItemAttributeModifiers;
        onDestroyed(arg0: $ItemEntity, arg1: $DamageSource_): void;
        getCraftingRemainingItem(): $ItemStack;
        hasCraftingRemainingItem(): boolean;
        getEnchantmentValue(): number;
        isRepairable(): boolean;
        canFitInsideContainerItems(): boolean;
        getEnchantmentLevel(arg0: $Holder_<$Enchantment>): number;
        getAllEnchantments(arg0: $HolderLookup$RegistryLookup<$Enchantment_>): $ItemEnchantments;
        shouldCauseBlockBreakReset(arg0: $ItemStack_): boolean;
        getBurnTime(arg0: $RecipeType_<never>): number;
        onAnimalArmorTick(arg0: $Level_, arg1: $Mob): void;
        isEnderMask(arg0: $Player, arg1: $EnderMan): boolean;
        isNotReplaceableByPickAction(arg0: $Player, arg1: number): boolean;
        canGrindstoneRepair(): boolean;
        onDroppedByPlayer(arg0: $Player): boolean;
        getHighlightTip(arg0: $Component_): $Component;
        onItemUseFirst(arg0: $UseOnContext): $InteractionResult;
        isPiglinCurrency(): boolean;
        getXpRepairRatio(): number;
        getEntityLifespan(arg0: $Level_): number;
        onEntityItemUpdate(arg0: $ItemEntity): boolean;
        doesSneakBypassUse(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Player): boolean;
        canEquip(arg0: $EquipmentSlot_, arg1: $LivingEntity): boolean;
        isBookEnchantable(arg0: $ItemStack_): boolean;
        isPrimaryItemFor(arg0: $Holder_<$Enchantment>): boolean;
        supportsEnchantment(arg0: $Holder_<$Enchantment>): boolean;
        handler$bgg000$fabric_entity_events_v1$canElytraFly(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        canWalkOnPowderedSnow(arg0: $LivingEntity): boolean;
        makesPiglinsNeutral(arg0: $LivingEntity): boolean;
        getEquipmentSlot(): $EquipmentSlot;
        onEntitySwing(arg0: $LivingEntity, arg1: $InteractionHand_): boolean;
        /**
         * @deprecated
         */
        onEntitySwing(arg0: $LivingEntity): boolean;
        canElytraFly(arg0: $LivingEntity): boolean;
        elytraFlightTick(arg0: $LivingEntity, arg1: number): boolean;
        onStopUsing(arg0: $LivingEntity, arg1: number): void;
        canPerformAction(arg0: $ItemAbility_): boolean;
        getFoodProperties(arg0: $LivingEntity): $FoodProperties;
        canDisableShield(arg0: $ItemStack_, arg1: $LivingEntity, arg2: $LivingEntity): boolean;
        getSweepHitBox(arg0: $Player, arg1: $Entity): $AABB;
        getCapability<T>(arg0: $ItemCapability<T, void>): T;
        getCapability<T, C>(arg0: $ItemCapability<T, C>, arg1: C): T;
        get attributeModifiers(): $ItemAttributeModifiers;
        get craftingRemainingItem(): $ItemStack;
        get enchantmentValue(): number;
        get repairable(): boolean;
        get piglinCurrency(): boolean;
        get xpRepairRatio(): number;
        get equipmentSlot(): $EquipmentSlot;
    }
    export class $IBoatExtension {
    }
    export interface $IBoatExtension {
        canBoatInFluid(arg0: $FluidState): boolean;
        canBoatInFluid(arg0: $FluidType_): boolean;
    }
    export class $IFriendlyByteBufExtension {
    }
    export interface $IFriendlyByteBufExtension {
        writeByte(arg0: number): $FriendlyByteBuf;
        writeObjectCollection<T>(arg0: $Collection_<T>, arg1: $BiConsumer_<T, $FriendlyByteBuf>): void;
        writeMap<K, V>(arg0: $Map_<K, V>, arg1: $StreamEncoder_<$FriendlyByteBuf, K>, arg2: $TriConsumer_<$FriendlyByteBuf, K, V>): void;
        readMap<K, V>(arg0: $StreamDecoder_<$FriendlyByteBuf, K>, arg1: $BiFunction_<$FriendlyByteBuf, K, V>): $Map<K, V>;
        readArray<T>(arg0: $IntFunction_<T[]>, arg1: $StreamDecoder_<$FriendlyByteBuf, T>): T[];
        writeArray<T>(arg0: T[], arg1: $StreamEncoder_<$FriendlyByteBuf, T>): $FriendlyByteBuf;
    }
    export class $IPlayerListExtension {
    }
    export interface $IPlayerListExtension {
        self(): $PlayerList;
        broadcast(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ResourceKey_<$Level>, arg5: $CustomPacketPayload_): void;
        broadcast(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $ResourceKey_<$Level>, arg6: $CustomPacketPayload_): void;
        broadcastAll(arg0: $CustomPacketPayload_): void;
        broadcastAll(arg0: $CustomPacketPayload_, arg1: $ResourceKey_<$Level>): void;
    }
    export class $ITagAppenderExtension<T> {
    }
    export interface $ITagAppenderExtension<T> {
        remove(arg0: $TagKey_<T>, ...arg1: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_, ...arg1: $ResourceLocation_[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $TagsProvider$TagAppender<T>;
        remove(arg0: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        remove(arg0: $ResourceLocation_): $TagsProvider$TagAppender<T>;
        replace(arg0: boolean): $TagsProvider$TagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
        addTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
        addOptionalTag(arg0: $TagKey_<T>): $TagsProvider$TagAppender<T>;
        addOptionalTags(...arg0: $TagKey_<T>[]): $TagsProvider$TagAppender<T>;
    }
    export class $IFluidStateExtension {
    }
    export interface $IFluidStateExtension {
        move(arg0: $LivingEntity, arg1: $Vec3_, arg2: number): boolean;
        canConvertToSource(arg0: $Level_, arg1: $BlockPos_): boolean;
        supportsBoating(arg0: $Boat): boolean;
        getFluidType(): $FluidType;
        canExtinguish(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        canHydrate(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockPos_): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: boolean): $PathType;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        get fluidType(): $FluidType;
    }
    export class $ILivingEntityExtension {
    }
    export interface $ILivingEntityExtension extends $IEntityExtension {
        self(): $LivingEntity;
        onDamageTaken(arg0: $DamageContainer): void;
        sinkInFluid(arg0: $FluidType_): void;
        moveInFluid(arg0: $FluidState, arg1: $Vec3_, arg2: number): boolean;
        jumpInFluid(arg0: $FluidType_): void;
        canSwimInFluidType(arg0: $FluidType_): boolean;
        canDrownInFluidType(arg0: $FluidType_): boolean;
    }
    export class $IPlayerExtension {
    }
    export interface $IPlayerExtension {
        openMenu(arg0: $MenuProvider, arg1: $Consumer_<$RegistryFriendlyByteBuf>): $OptionalInt;
        openMenu(arg0: $MenuProvider, arg1: $BlockPos_): $OptionalInt;
        mayFly(): boolean;
        isCloseEnough(arg0: $Entity, arg1: number): boolean;
        isFakePlayer(): boolean;
        get fakePlayer(): boolean;
    }
    export class $IServerGamePacketListenerExtension {
    }
    export interface $IServerGamePacketListenerExtension extends $IServerCommonPacketListenerExtension {
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        sendBundled(arg0: $Iterable_<$CustomPacketPayload>): void;
    }
    export class $IHolderSetExtension<T> {
    }
    export interface $IHolderSetExtension<T> {
        addInvalidationListener(arg0: $Runnable_): void;
        serializationType(): $IHolderSetExtension$SerializationType;
    }
    export class $IServerChunkCacheExtension {
    }
    export interface $IServerChunkCacheExtension {
        self(): $ServerChunkCache;
        broadcast(arg0: $Entity, arg1: $CustomPacketPayload_): void;
        broadcastAndSend(arg0: $Entity, arg1: $CustomPacketPayload_): void;
    }
    export class $ICommonPacketListener {
    }
    export interface $ICommonPacketListener extends $PacketListener {
        getConnectionType(): $ConnectionType;
        disconnect(arg0: $Component_): void;
        send(arg0: $Packet<never>): void;
        send(arg0: $CustomPacketPayload_): void;
        hasChannel(arg0: $CustomPacketPayload_): boolean;
        hasChannel(arg0: $ResourceLocation_): boolean;
        hasChannel(arg0: $CustomPacketPayload$Type_<never>): boolean;
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        getConnection(): $Connection;
        get connectionType(): $ConnectionType;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        get connection(): $Connection;
    }
    export class $IBlockGetterExtension {
    }
    export interface $IBlockGetterExtension {
        getModelData(arg0: $BlockPos_): $ModelData;
        getAuxLightManager(arg0: $ChunkPos): $AuxiliaryLightManager;
        getAuxLightManager(arg0: $BlockPos_): $AuxiliaryLightManager;
    }
    export class $IIntrinsicHolderTagAppenderExtension<T> {
    }
    export interface $IIntrinsicHolderTagAppenderExtension<T> extends $ITagAppenderExtension<T> {
        remove(arg0: $ResourceKey_<T>, ...arg1: $ResourceKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: $ResourceKey_<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T, ...arg1: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        replace(arg0: boolean): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        getKey(arg0: T): $ResourceKey<T>;
        addTags(...arg0: $TagKey_<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        replace(): $TagsProvider$TagAppender<T>;
    }
    /**
     * Values that may be interpreted as {@link $IIntrinsicHolderTagAppenderExtension}.
     */
    export type $IIntrinsicHolderTagAppenderExtension_<T> = ((arg0: T) => $ResourceKey_<T>);
    export class $IBlockStateExtension {
    }
    export interface $IBlockStateExtension extends $IBlockStateExtensionMixin, $FabricBlockState {
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        isScaffolding(arg0: $LivingEntity): boolean;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        hasDynamicLightEmission(): boolean;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        isSlimeBlock(): boolean;
        isStickyBlock(): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        handler$zcj000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        supportsExternalFaceHiding(): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        get empty(): boolean;
        get slimeBlock(): boolean;
        get stickyBlock(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
    }
    export class $ITransformationExtension {
    }
    export interface $ITransformationExtension {
        isIdentity(): boolean;
        transformNormal(arg0: $Vector3f): void;
        transformPosition(arg0: $Vector4f): void;
        applyOrigin(arg0: $Vector3f): $Transformation;
        rotateTransform(arg0: $Direction_): $Direction;
        blockCenterToCorner(): $Transformation;
        blockCornerToCenter(): $Transformation;
        get identity(): boolean;
    }
    export class $IBucketPickupExtension {
    }
    export interface $IBucketPickupExtension {
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
    }
    export class $ICommandSourceStackExtension {
    }
    export interface $ICommandSourceStackExtension {
        getAdvancement(arg0: $ResourceLocation_): $AdvancementHolder;
        getUnsidedLevel(): $Level;
        getRecipeManager(): $RecipeManager;
        getScoreboard(): $Scoreboard;
        get unsidedLevel(): $Level;
        get recipeManager(): $RecipeManager;
        get scoreboard(): $Scoreboard;
    }
    export class $IBlockAndTintGetterExtension {
    }
    export interface $IBlockAndTintGetterExtension {
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    }
    export class $IHolderSetExtension$SerializationType extends $Enum<$IHolderSetExtension$SerializationType> {
        static values(): $IHolderSetExtension$SerializationType[];
        static valueOf(arg0: string): $IHolderSetExtension$SerializationType;
        static STRING: $IHolderSetExtension$SerializationType;
        static UNKNOWN: $IHolderSetExtension$SerializationType;
        static OBJECT: $IHolderSetExtension$SerializationType;
        static LIST: $IHolderSetExtension$SerializationType;
    }
    /**
     * Values that may be interpreted as {@link $IHolderSetExtension$SerializationType}.
     */
    export type $IHolderSetExtension$SerializationType_ = "unknown" | "string" | "list" | "object";
    export class $IMenuTypeExtension<T> {
        static create<T extends $AbstractContainerMenu>(arg0: $IContainerFactory_<T>): $MenuType<T>;
    }
    export interface $IMenuTypeExtension<T> {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
    }
    /**
     * Values that may be interpreted as {@link $IMenuTypeExtension}.
     */
    export type $IMenuTypeExtension_<T> = ((arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
}
