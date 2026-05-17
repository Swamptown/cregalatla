import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $CampfireCookingRecipe, $RecipeType_, $CraftingInput, $CraftingInput$Positioned } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Services_ } from "@package/net/minecraft/server";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Mesh } from "@package/dev/tr7zw/skinlayers/api";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $AccessorAbstractFurnaceBlockEntity } from "@package/com/illusivesoulworks/polymorph/mixin/core";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorBlockEntity, $AccessorBlockEntityType } from "@package/com/railwayteam/railways/mixin";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer, $LockCode } from "@package/net/minecraft/world";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $BeaconLightBehavior_, $BeaconLightBehavior } from "@package/dev/lambdaurora/lambdynlights/api/behavior";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $DataComponentMap$Builder, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $UpdateReceiver, $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";
import { $InventoryChangeTracker, $InventoryChangeListener, $InventoryChangeEmitter } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SkullSettings } from "@package/dev/tr7zw/skinlayers/accessor";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $LecternBlockEntityAccessor } from "@package/io/github/mortuusars/exposure/mixin";
import { $ComparatorTracker } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $LithiumTransferConditionInventory, $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $BlockEntityAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $FabricBlockEntityType, $FabricBlockEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $BeaconBlockEntityLightSource } from "@package/dev/lambdaurora/lambdynlights/echo";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID } from "@package/java/util";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $ObjIntConsumer_, $UnaryOperator_, $BooleanSupplier_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ReferenceArraySet } from "@package/it/unimi/dsi/fastutil/objects";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $SetChangedHandlingBlockEntity, $SleepingBlockEntity } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $SectionedEntityMovementListener } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemLike_, $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Logger } from "@package/org/slf4j";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $SupportCache } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $FurnaceBEAccessor } from "@package/dev/lopyluna/dndesires/mixins";
import { $AbstractFurnaceBlockEntityAccess } from "@package/snownee/jade/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SculkCatalystBlockEntity): void;
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper, $LithiumInventory, $InventoryChangeListener, $UpdateReceiver, $SectionedEntityMovementListener, $InventoryChangeTracker, $SleepingBlockEntity {
        static addItem(arg0: $Container, arg1: $ItemEntity): boolean;
        static addItem(arg0: $Container, arg1: $Container, arg2: $ItemStack_, arg3: $Direction_): $ItemStack;
        lithium$handleInventoryContentModified(arg0: $Container): void;
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$startSleeping(): boolean;
        static pushItemsTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $HopperBlockEntity): void;
        lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: $Direction_): void;
        static getContainerAt(arg0: $Level_, arg1: $BlockPos_): $Container;
        getInsertInventory(arg0: $Level_): $Container;
        getInsertBlockInventory(arg0: $Level_): $Container;
        lithium$handleEntityMovement(arg0: $Class<any>): void;
        isOnCustomCooldown(): boolean;
        static getItemsAtAndAbove(arg0: $Level_, arg1: $Hopper): $List<$ItemEntity>;
        handler$bpn003$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getLastUpdateTime(): number;
        getExtractBlockInventory(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $Container;
        setCooldown(arg0: number): void;
        static suckInItems(arg0: $Level_, arg1: $Hopper): boolean;
        getLevelX(): number;
        getLevelY(): number;
        getLevelZ(): number;
        isGridAligned(): boolean;
        static entityInside(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity, arg4: $HopperBlockEntity): void;
        getSuckAabb(): $AABB;
        generateLootLithium(): void;
        handleStackListReplaced(arg0: $Container): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static HOPPER_CONTAINER_SIZE: number;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static MOVE_ITEM_SPEED: number;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get onCustomCooldown(): boolean;
        get lastUpdateTime(): number;
        set cooldown(value: number);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $SkullSettings {
        static clear(): void;
        static setup(arg0: $Services_, arg1: $Executor_): void;
        initialized(): boolean;
        setOwner(arg0: $ResolvableProfile_): void;
        getNoteBlockSound(): $ResourceLocation;
        static fetchProfileByName(arg0: string, arg1: $Services_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchProfileById(arg0: $UUID_, arg1: $Services_, arg2: $BooleanSupplier_): $CompletableFuture<($GameProfile) | undefined>;
        getAnimation(arg0: number): number;
        getOwnerProfile(): $ResolvableProfile;
        static fetchGameProfile(arg0: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        getHeadLayers(): $Mesh;
        setupHeadLayers(box: $Mesh): void;
        setLastTexture(texture: $ResourceLocation_): void;
        getLastTexture(): $ResourceLocation;
        setInitialized(initialized: boolean): void;
        static animation(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SkullBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getMesh(): $Mesh;
        worldPosition: $BlockPos;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set owner(value: $ResolvableProfile_);
        get noteBlockSound(): $ResourceLocation;
        get ownerProfile(): $ResolvableProfile;
        get headLayers(): $Mesh;
        set upHeadLayers(value: $Mesh);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get mesh(): $Mesh;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(arg0: number): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        getTranslatedName(): $Component;
        static byName(arg0: string): ($JigsawBlockEntity$JointType) | undefined;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        tickLid(): void;
        shouldBeOpen(arg0: boolean): void;
        getOpenness(arg0: number): number;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable, $BeaconBlockEntityLightSource {
        getName(): $Component;
        getDisplayName(): $Component;
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeaconBlockEntity): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        static filterEffect(arg0: $Holder_<$MobEffect>): $Holder<$MobEffect>;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        lambdynlights$getDynamicLightBeam(): $BeaconLightBehavior;
        lambdynlights$setDynamicLightBeam(beam: $BeaconLightBehavior_): void;
        lambdynlights$getLevels(): number;
        static playSound(arg0: $Level_, arg1: $BlockPos_, arg2: $SoundEvent_): void;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        primaryPower: $Holder<$MobEffect>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        worldPosition: $BlockPos;
        secondaryPower: $Holder<$MobEffect>;
        static DATA_SECONDARY: number;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        levels: number;
        static DATA_PRIMARY: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getMessage(arg0: number, arg1: boolean): $Component;
        setColor(arg0: $DyeColor_): $SignText;
        hasGlowingText(): boolean;
        hasAnyClickCommands(arg0: $Player): boolean;
        setHasGlowingText(arg0: boolean): $SignText;
        hasMessage(arg0: $Player): boolean;
        setMessage(arg0: number, arg1: $Component_, arg2: $Component_): $SignText;
        setMessage(arg0: number, arg1: $Component_): $SignText;
        getMessages(arg0: boolean): $Component[];
        getColor(): $DyeColor;
        getRenderMessages(arg0: boolean, arg1: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(arg0: $Component_[], arg1: $Component_[], arg2: $DyeColor_, arg3: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(arg0: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $BlockEntityTypeExtension<any>, $FabricBlockEntityType, $AccessorBlockEntityType {
        static getKey(arg0: $BlockEntityType_<never>): $ResourceLocation;
        create(arg0: $BlockPos_, arg1: $BlockState_): $Object;
        isValid(arg0: $BlockState_): boolean;
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        addSupportedBlock(arg0: $Block_): void;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $Object;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        getValidBlocks(): $Set<$Block>;
        neoforge$setValidBlocks(arg0: $Set_<$Block_>): void;
        setValidBlocks(arg0: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(arg0: $BlockEntityType$BlockEntitySupplier_<$Object>, arg1: $Set_<$Block_>, arg2: $Type<never>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable, $SleepingBlockEntity {
        getCookableRecipe(arg0: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        placeFood(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): boolean;
        getItems(): $NonNullList<$ItemStack>;
        static particleTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        static cookTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        static cooldownTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CampfireBlockEntity): void;
        dowse(): void;
        clearContent(): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        cookingTime: number[];
        remove: boolean;
        cookingProgress: number[];
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker {
        recheckOpen(): void;
        handler$bpj000$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        updateBlockState(arg0: $BlockState_, arg1: boolean): void;
        playSound(arg0: $BlockState_, arg1: $SoundEvent_): void;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        increaseHeight(): void;
        getColor(): number;
        getHeight(): number;
        color: number;
        constructor(arg0: number);
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        static load(arg0: $CompoundTag_): $PotDecorations;
        save(arg0: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        ordered(): $List<$Item>;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
        constructor(arg0: $Item_, arg1: $Item_, arg2: $Item_, arg3: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { right?: ($Item_) | undefined, left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined,  } | [right?: ($Item_) | undefined, left?: ($Item_) | undefined, back?: ($Item_) | undefined, front?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static LOGGER: $Logger;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $InventoryChangeEmitter, $LithiumInventory, $InventoryChangeTracker {
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ChestBlockEntity): void;
        recheckOpen(): void;
        handler$bpl001$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getOpenNess(arg0: number): number;
        static swapContents(arg0: $ChestBlockEntity, arg1: $ChestBlockEntity): void;
        signalOpenCount(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number): void;
        static getOpenCount(arg0: $BlockGetter, arg1: $BlockPos_): number;
        static playSound(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SoundEvent_): void;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        static of(arg0: $Entity): $BeehiveBlockEntity$Occupant;
        static create(arg0: number): $BeehiveBlockEntity$Occupant;
        ticksInHive(): number;
        minTicksInHive(): number;
        createEntity(arg0: $Level_, arg1: $BlockPos_): $Entity;
        entityData(): $CustomData;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { entityData?: $CustomData, minTicksInHive?: number, ticksInHive?: number,  } | [entityData?: $CustomData, minTicksInHive?: number, ticksInHive?: number, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $SupportCache, $ComparatorTracker, $SetChangedHandlingBlockEntity, $Cullable, $AccessorBlockEntity, $BlockEntityAccessor {
        getType(): $BlockEntityType<never>;
        setLevel(arg0: $Level_): void;
        getLevel(): $Level;
        setTimeout(): void;
        components(): $DataComponentMap;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        saveCustomAndMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        removeComponentsFromTag(arg0: $CompoundTag_): void;
        collectComponents(): $DataComponentMap;
        applyComponents(arg0: $DataComponentMap_, arg1: $DataComponentPatch_): void;
        isRemoved(): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        getPersistentData(): $CompoundTag;
        setRemoved(): void;
        setChanged(): void;
        static setChanged(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        isForcedVisible(): boolean;
        setCulled(value: boolean): void;
        isCulled(): boolean;
        setOutOfCamera(value: boolean): void;
        isOutOfCamera(): boolean;
        isValidBlockState(arg0: $BlockState_): boolean;
        static getPosFromTag(arg0: $CompoundTag_): $BlockPos;
        hasLevel(): boolean;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadWithComponents(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadCustomOnly(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveWithFullMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(arg0: $HolderLookup$Provider): $CompoundTag;
        saveWithId(arg0: $HolderLookup$Provider): $CompoundTag;
        saveCustomOnly(arg0: $HolderLookup$Provider): $CompoundTag;
        static addEntityType(arg0: $CompoundTag_, arg1: $BlockEntityType_<never>): void;
        saveToItem(arg0: $ItemStack_, arg1: $HolderLookup$Provider): void;
        static loadStatic(arg0: $BlockPos_, arg1: $BlockState_, arg2: $CompoundTag_, arg3: $HolderLookup$Provider): $BlockEntity;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        getUpdateTag(arg0: $HolderLookup$Provider): $CompoundTag;
        clearRemoved(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        handler$dam000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        /**
         * @deprecated
         */
        setBlockState(arg0: $BlockState_): void;
        applyImplicitComponents(arg0: $BlockEntity$DataComponentInput): void;
        applyComponentsFromItemStack(arg0: $ItemStack_): void;
        collectImplicitComponents(arg0: $DataComponentMap$Builder): void;
        setComponents(arg0: $DataComponentMap_): void;
        static parseCustomNameSafe(arg0: string, arg1: $HolderLookup$Provider): $Component;
        getRenderAttachmentData(): $Object;
        getRenderData(): $Object;
        lithium$isSupported(): boolean;
        lithium$onComparatorAdded(arg0: $Direction_, arg1: number): void;
        lithium$hasAnyComparatorNearby(): boolean;
        onLoad(): void;
        hasCustomOutlineRendering(arg0: $Player): boolean;
        invalidateCapabilities(): void;
        requestModelDataUpdate(): void;
        onDataPacket(arg0: $Connection, arg1: $ClientboundBlockEntityDataPacket, arg2: $HolderLookup$Provider): void;
        handleUpdateTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onChunkUnloaded(): void;
        getModelData(): $ModelData;
        lithium$handleSetChanged(): void;
        setWorldPosition(arg0: $BlockPos_): void;
        callSaveMetadata(arg0: $CompoundTag_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get type(): $BlockEntityType<never>;
        get blockPos(): $BlockPos;
        get persistentData(): $CompoundTag;
        get forcedVisible(): boolean;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderAttachmentData(): $Object;
        get renderData(): $Object;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ShulkerBoxBlockEntity): void;
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getProgress(arg0: number): number;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        loadFromTag(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        handler$bpo004$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        isClosed(): boolean;
        getColor(): $DyeColor;
        getBoundingBox(arg0: $BlockState_): $AABB;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        lockKey: $LockCode;
        hasComparators: number;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        lootTableSeed: number;
        static ROWS: number;
        constructor(arg0: $DyeColor_, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        get closed(): boolean;
        get color(): $DyeColor;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity {
        unpackLootTable(arg0: $Player): void;
        checkReset(): void;
        brush(arg0: number, arg1: $Player, arg2: $Direction_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        getHitDirection(): $Direction;
        getItem(): $ItemStack;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get hitDirection(): $Direction;
        get item(): $ItemStack;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        static lidAnimateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        getOpenNess(arg0: number): number;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        stillValid(arg0: $Player): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $InventoryChangeEmitter, $SpecialLogicInventory {
        getName(): $Component;
        isEmpty(): boolean;
        getDisplayName(): $Component;
        lithium$emitContentModified(): void;
        handler$bpk000$lithium$readNbtStackListReplacement(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        static canUnlock(arg0: $Player, arg1: $LockCode_, arg2: $Component_): boolean;
        wrapOperation$elh000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $BaseContainerBlockEntity, arg1: $Operation_<any>): void;
        fabric_setSuppress(arg0: boolean): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        createMenu(arg0: number, arg1: $Inventory): $AbstractContainerMenu;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        setItem(arg0: number, arg1: $ItemStack_): void;
        getItems(): $NonNullList<$ItemStack>;
        canOpen(arg0: $Player): boolean;
        clearContent(): void;
        getDefaultName(): $Component;
        setItems(arg0: $NonNullList<$ItemStack_>): void;
        lithium$emitStackListReplaced(): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        getCustomName(): $Component;
        stillValid(arg0: $Player): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        lithium$emitRemoved(): void;
        lithium$emitFirstComparatorAdded(): void;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        emitCallbackReplaced(): void;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
        get defaultName(): $Component;
        get customName(): $Component;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> implements $FabricBlockEntityType$Builder<any> {
        static of<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier_<T>, ...arg1: $Block_[]): $BlockEntityType$Builder<T>;
        build(): $BlockEntityType<any>;
        build(arg0: $Type<never>): $BlockEntityType<$Object>;
        validBlocks: $Set<$Block>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        isAutomatic(): boolean;
        getCommandBlock(): $BaseCommandBlock;
        onModeSwitch(): void;
        setAutomatic(arg0: boolean): void;
        isPowered(): boolean;
        setPowered(arg0: boolean): void;
        markConditionMet(): boolean;
        wasConditionMet(): boolean;
        isConditional(): boolean;
        getMode(): $CommandBlockEntity$Mode;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
        get mode(): $CommandBlockEntity$Mode;
    }
    export class $DecoratedPotPatterns {
        static bootstrap(arg0: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static getPatternFromItem(arg0: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        getListenerSource(): $PositionSource;
        handleGameEvent(arg0: $ServerLevel, arg1: $Holder_<$GameEvent>, arg2: $GameEvent$Context_, arg3: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        getListenerRadius(): number;
        static PULSE_TICKS: number;
        sculkSpreader: $SculkSpreader;
        constructor(arg0: $BlockState_, arg1: $PositionSource);
        get listenerSource(): $PositionSource;
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerRadius(): number;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        getRedstoneSignal(): number;
        setTriggered(arg0: boolean): void;
        setCraftingTicksRemaining(arg0: number): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CrafterBlockEntity): void;
        setSlotState(arg0: number, arg1: boolean): void;
        isSlotDisabled(arg0: number): boolean;
        isTriggered(): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        fillStackedContents(arg0: $StackedContents): void;
        getWidth(): number;
        getHeight(): number;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getItems(): $List<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static CONTAINER_WIDTH: number;
        level: $Level;
        static SLOT_ENABLED: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static NUM_DATA: number;
        remove: boolean;
        static CONTAINER_HEIGHT: number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static DATA_TRIGGERED: number;
        static CONTAINER_SIZE: number;
        lockKey: $LockCode;
        hasComparators: number;
        containerData: $ContainerData;
        lootTableSeed: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get redstoneSignal(): number;
        set craftingTicksRemaining(value: number);
        get width(): number;
        get height(): number;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
        get items(): $List<$ItemStack>;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BrewingStandBlockEntity): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        static DATA_BREW_TIME: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static FUEL_USES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $StructureBlockEntity extends $BlockEntity {
        setSeed(arg0: number): void;
        getSeed(): number;
        usedBy(arg0: $Player): boolean;
        createdBy(arg0: $LivingEntity): void;
        saveStructure(arg0: boolean): boolean;
        saveStructure(): boolean;
        placeStructure(arg0: $ServerLevel): void;
        unloadStructure(): void;
        isPowered(): boolean;
        setPowered(arg0: boolean): void;
        getStructureName(): string;
        setStructureName(arg0: $ResourceLocation_): void;
        setStructureName(arg0: string): void;
        hasStructureName(): boolean;
        getStructurePos(): $BlockPos;
        setStructurePos(arg0: $BlockPos_): void;
        getStructureSize(): $Vec3i;
        setStructureSize(arg0: $Vec3i): void;
        setMirror(arg0: $Mirror_): void;
        setRotation(arg0: $Rotation_): void;
        getMetaData(): string;
        setMetaData(arg0: string): void;
        isIgnoreEntities(): boolean;
        setIgnoreEntities(arg0: boolean): void;
        getIntegrity(): number;
        setIntegrity(arg0: number): void;
        detectSize(): boolean;
        static createRandom(arg0: number): $RandomSource;
        placeStructureIfSameSize(arg0: $ServerLevel): boolean;
        loadStructureInfo(arg0: $ServerLevel): boolean;
        isStructureLoadable(): boolean;
        getShowAir(): boolean;
        setShowAir(arg0: boolean): void;
        getShowBoundingBox(): boolean;
        setShowBoundingBox(arg0: boolean): void;
        setMode(arg0: $StructureMode_): void;
        getMode(): $StructureMode;
        getMirror(): $Mirror;
        getRotation(): $Rotation;
        worldPosition: $BlockPos;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        static MAX_SIZE_PER_AXIS: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get structureLoadable(): boolean;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity, $AccessorAbstractFurnaceBlockEntity, $SpecialLogicInventory, $Clearable, $AbstractFurnaceBlockEntityAccess, $FurnaceBEAccessor {
        static add(arg0: $Map_<$Item_, number>, arg1: $ItemLike_, arg2: number): void;
        static add(arg0: $Map_<$Item_, number>, arg1: $TagKey_<$Item>, arg2: number): void;
        static invalidateCache(): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AbstractFurnaceBlockEntity): void;
        awardUsedRecipes(arg0: $Player, arg1: $List_<$ItemStack_>): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        setRecipeUsed(arg0: $RecipeHolder_<never>): void;
        fillStackedContents(arg0: $StackedContents): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        getBurnDuration(arg0: $ItemStack_): number;
        static isFuel(arg0: $ItemStack_): boolean;
        getSlotsForFace(arg0: $Direction_): number[];
        canPlaceItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        canTakeItemThroughFace(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        handler$eld000$fabric_transfer_api_v1$setStackSuppressUpdate(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipesAndPopExperience(arg0: $ServerPlayer): void;
        getRecipesToAwardAndPopExperience(arg0: $ServerLevel, arg1: $Vec3_): $List<$RecipeHolder<never>>;
        setRecipeUsed(arg0: $Level_, arg1: $ServerPlayer, arg2: $RecipeHolder_<never>): boolean;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getCookingProgress(): number;
        getCookingTotalTime(): number;
        getCookingProgress$D2D(): number;
        getCookingTotalTime$D2D(): number;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $RecipeType_<$AbstractCookingRecipe>);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
        get cookingProgress$D2D(): number;
        get cookingTotalTime$D2D(): number;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        static bookAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnchantingTableBlockEntity): void;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        remove: boolean;
        worldPosition: $BlockPos;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        time: number;
        oRot: number;
        hasComparators: number;
        flip: number;
        open: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        isEmpty(): boolean;
        emptyAllLivingFromHive(arg0: $Player, arg1: $BlockState_, arg2: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        getOccupantCount(): number;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BeehiveBlockEntity): void;
        static getHoneyLevel(arg0: $BlockState_): number;
        addOccupant(arg0: $Entity): void;
        storeBee(arg0: $BeehiveBlockEntity$Occupant_): void;
        isFireNearby(): boolean;
        isSedated(): boolean;
        isFull(): boolean;
        static IGNORED_BEE_TAGS: $List<string>;
        worldPosition: $BlockPos;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get empty(): boolean;
        get occupantCount(): number;
        get fireNearby(): boolean;
        get sedated(): boolean;
        get full(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        getType(): string;
        tick(): void;
        isRemoved(): boolean;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        getSpawner(): $BaseSpawner;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get spawner(): $BaseSpawner;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $BellBlockEntity extends $BlockEntity {
        onHit(arg0: $Direction_): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BellBlockEntity): void;
        worldPosition: $BlockPos;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        shaking: boolean;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SignBlockEntity): void;
        getText(arg0: boolean): $SignText;
        updateSignText(arg0: $Player, arg1: boolean, arg2: $List_<$FilteredText_>): void;
        updateText(arg0: $UnaryOperator_<$SignText>, arg1: boolean): boolean;
        setWaxed(arg0: boolean): boolean;
        playerIsTooFarAwayToEdit(arg0: $UUID_): boolean;
        createDefaultSignText(): $SignText;
        getFrontText(): $SignText;
        getBackText(): $SignText;
        getTextLineHeight(): number;
        getMaxTextLineWidth(): number;
        canExecuteClickCommands(arg0: boolean, arg1: $Player): boolean;
        isWaxed(): boolean;
        isFacingFrontText(arg0: $Player): boolean;
        executeClickCommandsIfPresent(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        setAllowedPlayerEditor(arg0: $UUID_): void;
        getPlayerWhoMayEdit(): $UUID;
        setText(arg0: $SignText, arg1: boolean): boolean;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<any>, arg1: $BlockPos_, arg2: $BlockState_);
        get frontText(): $SignText;
        get backText(): $SignText;
        get textLineHeight(): number;
        get maxTextLineWidth(): number;
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_);
        get playerWhoMayEdit(): $UUID;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $SpecialLogicInventory {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $JukeboxBlockEntity): void;
        fabric_setSuppress(arg0: boolean): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getTheItem(): $ItemStack;
        setTheItem(arg0: $ItemStack_): void;
        onSongChanged(): void;
        splitTheItem(arg0: number): $ItemStack;
        handler$zid000$yungsapi$checkIfLevelNull(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(arg0: $ItemStack_): void;
        tryForcePlaySong(): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        popOutTheItem(): void;
        getSongPlayer(): $JukeboxSongPlayer;
        getComparatorOutput(): number;
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        stillValid(arg0: $Player): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        isEmpty(): boolean;
        setItem(arg0: number, arg1: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        worldPosition: $BlockPos;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(arg0: $BlockPos_, arg1: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(arg0: $Direction_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        add(arg0: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(arg0: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        /**
         * @deprecated
         */
        addIfRegistered(arg0: $HolderGetter<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>, arg2: $DyeColor_): $BannerPatternLayers$Builder;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        getVibrationData(): $VibrationSystem$Data;
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(arg0: number): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        getState(): $TrialSpawnerState;
        setState(arg0: $Level_, arg1: $TrialSpawnerState_): void;
        setEntityId(arg0: $EntityType_<never>, arg1: $RandomSource): void;
        getTrialSpawner(): $TrialSpawner;
        markUpdated(): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get trialSpawner(): $TrialSpawner;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker, $DispenserBlockEntityAccessor {
        getRandomSlot(arg0: $RandomSource): number;
        handler$bpm002$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        insertItem(arg0: $ItemStack_): $ItemStack;
        generateLootLithium(): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        static beamAnimationTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        static portalTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        isCoolingDown(): boolean;
        static triggerCooldown(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $TheEndGatewayBlockEntity): void;
        getPortalPosition(arg0: $ServerLevel, arg1: $BlockPos_): $Vec3;
        isSpawning(): boolean;
        getSpawnPercent(arg0: number): number;
        setExitPosition(arg0: $BlockPos_, arg1: boolean): void;
        getCooldownPercent(arg0: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get particleAmount(): number;
        get coolingDown(): boolean;
        get spawning(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPatterns {
        static register(arg0: $BootstrapContext<$BannerPattern_>, arg1: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(arg0: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        setLootTableSeed(arg0: number): void;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackLootTable(arg0: $Player): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        lockKey: $LockCode;
        hasComparators: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        lockKey: $LockCode;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        assetId(): $ResourceLocation;
        translationKey(): string;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { translationKey?: string, assetId?: $ResourceLocation_,  } | [translationKey?: string, assetId?: $ResourceLocation_, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider, $LecternBlockEntityAccessor {
        getDisplayName(): $Component;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        setBook(arg0: $ItemStack_, arg1: $Player): void;
        setBook(arg0: $ItemStack_): void;
        getBook(): $ItemStack;
        getRedstoneSignal(): number;
        clearContent(): void;
        hasBook(): boolean;
        onBookItemRemove(): void;
        setPage(arg0: number): void;
        getPage(): number;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        getBookAccess(): $Container;
        getDataAccess(): $ContainerData;
        worldPosition: $BlockPos;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        level: $Level;
        book: $ItemStack;
        static ATTACHMENTS_NBT_KEY: string;
        page: number;
        hasComparators: number;
        static SLOT_BOOK: number;
        static NUM_DATA: number;
        bookAccess: $Container;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayName(): $Component;
        get redstoneSignal(): number;
        get dataAccess(): $ContainerData;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
        getName(): $Component;
        fromItem(arg0: $ItemStack_, arg1: $DyeColor_): void;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        getItem(): $ItemStack;
        getCustomName(): $Component;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        static MAX_PATTERNS: number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: $DyeColor_);
        get name(): $Component;
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get item(): $ItemStack;
        get customName(): $Component;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        getSuckAabb(): $AABB;
        getLevelX(): number;
        getLevelY(): number;
        getLevelZ(): number;
        isGridAligned(): boolean;
        get suckAabb(): $AABB;
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container, $LithiumTransferConditionInventory {
        isEmpty(): boolean;
        count(): number;
        setItem(arg0: number, arg1: $ItemStack_): void;
        clearContent(): void;
        getLastInteractedSlot(): number;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        stillValid(arg0: $Player): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        worldPosition: $BlockPos;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get lastInteractedSlot(): number;
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        isActive(): boolean;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        getActiveRotation(arg0: number): number;
        isHunting(): boolean;
        static clientTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ConduitBlockEntity): void;
        worldPosition: $BlockPos;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get active(): boolean;
        get hunting(): boolean;
    }
    export class $ContainerOpenersCounter {
        onClose(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        onOpen(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        openerCountChanged(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: number, arg4: number): void;
        isOwnContainer(arg0: $Player): boolean;
        incrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        decrementOpeners(arg0: $Player, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getName(): $ResourceLocation;
        setName(arg0: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(arg0: $ResourceLocation_): void;
        generate(arg0: $ServerLevel, arg1: number, arg2: boolean): void;
        getFinalState(): string;
        getJoint(): $JigsawBlockEntity$JointType;
        getPlacementPriority(): number;
        getSelectionPriority(): number;
        setPool(arg0: $ResourceKey_<$StructureTemplatePool>): void;
        setFinalState(arg0: string): void;
        setJoint(arg0: $JigsawBlockEntity$JointType_): void;
        setPlacementPriority(arg0: number): void;
        setSelectionPriority(arg0: number): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static TARGET: string;
        worldPosition: $BlockPos;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        static JOINT: string;
        remove: boolean;
        static NAME: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>,  } | [color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        setLootTableSeed(arg0: number): void;
        getTheItem(): $ItemStack;
        setTheItem(arg0: $ItemStack_): void;
        getPotAsItem(): $ItemStack;
        setFromItem(arg0: $ItemStack_): void;
        static createDecoratedPotItem(arg0: $PotDecorations_): $ItemStack;
        splitTheItem(arg0: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        setLootTable(arg0: $ResourceKey_<$LootTable>): void;
        getDirection(): $Direction;
        getDecorations(): $PotDecorations;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        wobble(arg0: $DecoratedPotBlockEntity$WobbleStyle_): void;
        unpackLootTable(arg0: $Player): void;
        tryLoadLootTable(arg0: $CompoundTag_): boolean;
        trySaveLootTable(arg0: $CompoundTag_): boolean;
        setLootTable(arg0: $ResourceKey_<$LootTable>, arg1: number): void;
        stillValid(arg0: $Player): boolean;
        startOpen(arg0: $Player): void;
        stopOpen(arg0: $Player): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        countItem(arg0: $Item_): number;
        hasAnyOf(arg0: $Set_<$Item_>): boolean;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        getMaxStackSize(): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        clearContent(): void;
        removeTheItem(): $ItemStack;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(match: $ItemPredicate_): number;
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        static TAG_SHERDS: string;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        wobbleStartedAtTick: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        static EVENT_POT_WOBBLES: number;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get potAsItem(): $ItemStack;
        set fromItem(value: $ItemStack_);
        get containerBlockEntity(): $BlockEntity;
        get direction(): $Direction;
        get decorations(): $PotDecorations;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        static tryGetPlayer(arg0: $Entity): $ServerPlayer;
        tryRespond(arg0: $ServerLevel): void;
        tryShriek(arg0: $ServerLevel, arg1: $ServerPlayer): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
}
