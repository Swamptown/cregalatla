import { $DataResult, $MapEncoder, $DynamicOps, $Codec, $MapDecoder } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EquipmentSlot_, $Entity, $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $AttributeModifier, $AttributeModifier_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID_, $Map, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $DecimalFormat } from "@package/java/text";
import { $IntFunction, $Consumer_, $Predicate, $Consumer, $BiConsumer_ } from "@package/java/util/function";
import { $GlobalPos, $HolderSet_, $GlobalPos_, $HolderLookup$Provider, $Holder_, $HolderSet, $Holder, $NonNullList } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Enum, $Comparable, $Iterable, $Record } from "@package/java/lang";
import { $PropertyMap } from "@package/com/mojang/authlib/properties";
import { $BundleContentsAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack, $DyeItem } from "@package/net/minecraft/world/item";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Filterable, $Filterable_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IBundle, $IBundle$Mutable } from "@package/com/blackgear/vanillabackport/common/api/bundle";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $BundleContentsComponentAccessor, $ContainerComponentAccessor } from "@package/net/fabricmc/fabric/mixin/transfer";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/component" {
    export class $Fireworks extends $Record implements $TooltipProvider {
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        flightDuration(): number;
        explosions(): $List<$FireworkExplosion>;
        static CODEC: $Codec<$Fireworks>;
        static MAX_EXPLOSIONS: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Fireworks>;
        constructor(arg0: number, arg1: $List_<$FireworkExplosion_>);
    }
    /**
     * Values that may be interpreted as {@link $Fireworks}.
     */
    export type $Fireworks_ = { flightDuration?: number, explosions?: $List_<$FireworkExplosion_>,  } | [flightDuration?: number, explosions?: $List_<$FireworkExplosion_>, ];
    export class $BookContent<T, C> {
    }
    export interface $BookContent<T, C> {
        withReplacedPages(arg0: $List_<$Filterable_<T>>): C;
        pages(): $List<$Filterable<T>>;
    }
    export class $LodestoneTracker extends $Record {
        tick(arg0: $ServerLevel): $LodestoneTracker;
        target(): ($GlobalPos) | undefined;
        tracked(): boolean;
        static CODEC: $Codec<$LodestoneTracker>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LodestoneTracker>;
        constructor(arg0: ($GlobalPos_) | undefined, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LodestoneTracker}.
     */
    export type $LodestoneTracker_ = { tracked?: boolean, target?: ($GlobalPos_) | undefined,  } | [tracked?: boolean, target?: ($GlobalPos_) | undefined, ];
    export class $WritableBookContent extends $Record implements $BookContent<string, $WritableBookContent> {
        getPages(arg0: boolean): $Stream<string>;
        pages(): $List<$Filterable<string>>;
        withReplacedPages(arg0: $List_<$Filterable_<string>>): $WritableBookContent;
        static MAX_PAGES: number;
        static PAGE_EDIT_LENGTH: number;
        static CODEC: $Codec<$WritableBookContent>;
        static PAGES_CODEC: $Codec<$List<$Filterable<string>>>;
        static EMPTY: $WritableBookContent;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WritableBookContent>;
        constructor(arg0: $List_<$Filterable_<string>>);
    }
    /**
     * Values that may be interpreted as {@link $WritableBookContent}.
     */
    export type $WritableBookContent_ = { pages?: $List_<$Filterable_<string>>,  } | [pages?: $List_<$Filterable_<string>>, ];
    export class $DyedItemColor extends $Record implements $TooltipProvider {
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        showInTooltip(): boolean;
        withTooltip(arg0: boolean): $DyedItemColor;
        static applyDyes(arg0: $ItemStack_, arg1: $List_<$DyeItem>): $ItemStack;
        rgb(): number;
        static getOrDefault(arg0: $ItemStack_, arg1: number): number;
        static CODEC: $Codec<$DyedItemColor>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $DyedItemColor>;
        static LEATHER_COLOR: number;
        constructor(arg0: number, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $DyedItemColor}.
     */
    export type $DyedItemColor_ = { showInTooltip?: boolean, rgb?: number,  } | [showInTooltip?: boolean, rgb?: number, ];
    export class $ItemAttributeModifiers$Entry extends $Record {
        attribute(): $Holder<$Attribute>;
        modifier(): $AttributeModifier;
        slot(): $EquipmentSlotGroup;
        matches(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_): boolean;
        static CODEC: $Codec<$ItemAttributeModifiers$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttributeModifiers$Entry>;
        constructor(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_);
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeModifiers$Entry}.
     */
    export type $ItemAttributeModifiers$Entry_ = { slot?: $EquipmentSlotGroup_, attribute?: $Holder_<$Attribute>, modifier?: $AttributeModifier_,  } | [slot?: $EquipmentSlotGroup_, attribute?: $Holder_<$Attribute>, modifier?: $AttributeModifier_, ];
    export class $MapDecorations$Entry extends $Record {
        type(): $Holder<$MapDecorationType>;
        x(): number;
        z(): number;
        rotation(): number;
        static CODEC: $Codec<$MapDecorations$Entry>;
        constructor(arg0: $Holder_<$MapDecorationType>, arg1: number, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorations$Entry}.
     */
    export type $MapDecorations$Entry_ = { x?: number, rotation?: number, type?: $Holder_<$MapDecorationType>, z?: number,  } | [x?: number, rotation?: number, type?: $Holder_<$MapDecorationType>, z?: number, ];
    export class $SeededContainerLoot extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        seed(): number;
        static CODEC: $Codec<$SeededContainerLoot>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $SeededContainerLoot}.
     */
    export type $SeededContainerLoot_ = { lootTable?: $ResourceKey_<$LootTable>, seed?: number,  } | [lootTable?: $ResourceKey_<$LootTable>, seed?: number, ];
    export class $Unbreakable extends $Record implements $TooltipProvider {
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        showInTooltip(): boolean;
        withTooltip(arg0: boolean): $Unbreakable;
        static CODEC: $Codec<$Unbreakable>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Unbreakable>;
        constructor(arg0: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Unbreakable}.
     */
    export type $Unbreakable_ = { showInTooltip?: boolean,  } | [showInTooltip?: boolean, ];
    export class $ItemContainerContents$Slot extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ItemContainerContents$Slot}.
     */
    export type $ItemContainerContents$Slot_ = { item?: $ItemStack_, index?: number,  } | [item?: $ItemStack_, index?: number, ];
    export class $ItemAttributeModifiers$Builder {
        add(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_): $ItemAttributeModifiers$Builder;
        build(): $ItemAttributeModifiers;
        constructor();
    }
    export class $SuspiciousStewEffects$Entry extends $Record {
        createEffectInstance(): $MobEffectInstance;
        duration(): number;
        effect(): $Holder<$MobEffect>;
        static CODEC: $Codec<$SuspiciousStewEffects$Entry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SuspiciousStewEffects$Entry>;
        constructor(arg0: $Holder_<$MobEffect>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $SuspiciousStewEffects$Entry}.
     */
    export type $SuspiciousStewEffects$Entry_ = { duration?: number, effect?: $Holder_<$MobEffect>,  } | [duration?: number, effect?: $Holder_<$MobEffect>, ];
    export class $ItemLore extends $Record implements $TooltipProvider {
        styledLines(): $List<$Component>;
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        withLineAdded(arg0: $Component_): $ItemLore;
        lines(): $List<$Component>;
        static CODEC: $Codec<$ItemLore>;
        static MAX_LINES: number;
        static EMPTY: $ItemLore;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemLore>;
        constructor(arg0: $List_<$Component_>, arg1: $List_<$Component_>);
        constructor(arg0: $List_<$Component_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemLore}.
     */
    export type $ItemLore_ = { styledLines?: $List_<$Component_>, lines?: $List_<$Component_>,  } | [styledLines?: $List_<$Component_>, lines?: $List_<$Component_>, ];
    export class $CustomModelData extends $Record {
        value(): number;
        static CODEC: $Codec<$CustomModelData>;
        static DEFAULT: $CustomModelData;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CustomModelData>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $CustomModelData}.
     */
    export type $CustomModelData_ = { value?: number,  } | [value?: number, ];
    export class $BlockItemStateProperties extends $Record {
        get<T extends $Comparable<T>>(arg0: $Property<T>): T;
        isEmpty(): boolean;
        apply(arg0: $BlockState_): $BlockState;
        properties(): $Map<string, string>;
        with<T extends $Comparable<T>>(arg0: $Property<T>, arg1: $BlockState_): $BlockItemStateProperties;
        with<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T): $BlockItemStateProperties;
        static CODEC: $Codec<$BlockItemStateProperties>;
        static EMPTY: $BlockItemStateProperties;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockItemStateProperties>;
        constructor(arg0: $Map_<string, string>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockItemStateProperties}.
     */
    export type $BlockItemStateProperties_ = { properties?: $Map_<string, string>,  } | [properties?: $Map_<string, string>, ];
    export class $TooltipProvider {
    }
    export interface $TooltipProvider {
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
    }
    /**
     * Values that may be interpreted as {@link $TooltipProvider}.
     */
    export type $TooltipProvider_ = ((arg0: $Item$TooltipContext, arg1: $Consumer<$Component>, arg2: $TooltipFlag) => void);
    export class $MapPostProcessing extends $Enum<$MapPostProcessing> {
        static values(): $MapPostProcessing[];
        static valueOf(arg0: string): $MapPostProcessing;
        id(): number;
        static ID_MAP: $IntFunction<$MapPostProcessing>;
        static LOCK: $MapPostProcessing;
        static SCALE: $MapPostProcessing;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapPostProcessing>;
    }
    /**
     * Values that may be interpreted as {@link $MapPostProcessing}.
     */
    export type $MapPostProcessing_ = "lock" | "scale";
    export class $ChargedProjectiles {
        getItems(): $List<$ItemStack>;
        isEmpty(): boolean;
        static of(arg0: $ItemStack_): $ChargedProjectiles;
        static of(arg0: $List_<$ItemStack_>): $ChargedProjectiles;
        contains(arg0: $Item_): boolean;
        static CODEC: $Codec<$ChargedProjectiles>;
        static EMPTY: $ChargedProjectiles;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChargedProjectiles>;
        get items(): $List<$ItemStack>;
        get empty(): boolean;
    }
    export class $WrittenBookContent extends $Record implements $BookContent<$Component, $WrittenBookContent> {
        markResolved(): $WrittenBookContent;
        getPages(arg0: boolean): $List<$Component>;
        withReplacedPages(arg0: $List_<$Filterable_<$Component_>>): $WrittenBookContent;
        static pagesCodec(arg0: $Codec<$Component_>): $Codec<$List<$Filterable<$Component>>>;
        tryCraftCopy(): $WrittenBookContent;
        resolved(): boolean;
        resolve(arg0: $CommandSourceStack, arg1: $Player): $WrittenBookContent;
        title(): $Filterable<string>;
        pages(): $List<$Filterable<$Component>>;
        author(): string;
        generation(): number;
        static TITLE_LENGTH: number;
        static TITLE_MAX_LENGTH: number;
        static CODEC: $Codec<$WrittenBookContent>;
        static MAX_CRAFTABLE_GENERATION: number;
        static PAGES_CODEC: $Codec<$List<$Filterable<$Component>>>;
        static PAGE_LENGTH: number;
        static EMPTY: $WrittenBookContent;
        static CONTENT_CODEC: $Codec<$Component>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WrittenBookContent>;
        static MAX_GENERATION: number;
        constructor(arg0: $Filterable_<string>, arg1: string, arg2: number, arg3: $List_<$Filterable_<$Component_>>, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WrittenBookContent}.
     */
    export type $WrittenBookContent_ = { generation?: number, pages?: $List_<$Filterable_<$Component_>>, resolved?: boolean, title?: $Filterable_<string>, author?: string,  } | [generation?: number, pages?: $List_<$Filterable_<$Component_>>, resolved?: boolean, title?: $Filterable_<string>, author?: string, ];
    export class $FireworkExplosion$Shape extends $Enum<$FireworkExplosion$Shape> implements $StringRepresentable, $IExtensibleEnum {
        getName(): $MutableComponent;
        static values(): $FireworkExplosion$Shape[];
        static valueOf(arg0: string): $FireworkExplosion$Shape;
        getId(): number;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        static byId(arg0: number): $FireworkExplosion$Shape;
        getRemappedEnumConstantName(): string;
        static SMALL_BALL: $FireworkExplosion$Shape;
        static LARGE_BALL: $FireworkExplosion$Shape;
        static CODEC: $Codec<$FireworkExplosion$Shape>;
        static STAR: $FireworkExplosion$Shape;
        static CREEPER: $FireworkExplosion$Shape;
        static BURST: $FireworkExplosion$Shape;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FireworkExplosion$Shape>;
        get id(): number;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FireworkExplosion$Shape}.
     */
    export type $FireworkExplosion$Shape_ = "small_ball" | "large_ball" | "star" | "creeper" | "burst";
    export class $MapDecorations extends $Record {
        withDecoration(arg0: string, arg1: $MapDecorations$Entry_): $MapDecorations;
        decorations(): $Map<string, $MapDecorations$Entry>;
        static CODEC: $Codec<$MapDecorations>;
        static EMPTY: $MapDecorations;
        constructor(arg0: $Map_<string, $MapDecorations$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorations}.
     */
    export type $MapDecorations_ = { decorations?: $Map_<string, $MapDecorations$Entry_>,  } | [decorations?: $Map_<string, $MapDecorations$Entry_>, ];
    export class $SuspiciousStewEffects extends $Record {
        withEffectAdded(arg0: $SuspiciousStewEffects$Entry_): $SuspiciousStewEffects;
        effects(): $List<$SuspiciousStewEffects$Entry>;
        static CODEC: $Codec<$SuspiciousStewEffects>;
        static EMPTY: $SuspiciousStewEffects;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SuspiciousStewEffects>;
        constructor(arg0: $List_<$SuspiciousStewEffects$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $SuspiciousStewEffects}.
     */
    export type $SuspiciousStewEffects_ = { effects?: $List_<$SuspiciousStewEffects$Entry_>,  } | [effects?: $List_<$SuspiciousStewEffects$Entry_>, ];
    export class $Tool extends $Record {
        getMiningSpeed(arg0: $BlockState_): number;
        damagePerBlock(): number;
        isCorrectForDrops(arg0: $BlockState_): boolean;
        defaultMiningSpeed(): number;
        rules(): $List<$Tool$Rule>;
        static CODEC: $Codec<$Tool>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Tool>;
        constructor(arg0: $List_<$Tool$Rule_>, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $Tool}.
     */
    export type $Tool_ = { damagePerBlock?: number, rules?: $List_<$Tool$Rule_>, defaultMiningSpeed?: number,  } | [damagePerBlock?: number, rules?: $List_<$Tool$Rule_>, defaultMiningSpeed?: number, ];
    export class $BundleContents$Mutable implements $IBundle$Mutable {
        indexIsOutsideAllowedBounds(index: number): boolean;
        clearItems(): $BundleContents$Mutable;
        removeOne(): $ItemStack;
        tryInsert(arg0: $ItemStack_): number;
        toggleSelectedItem(index: number): void;
        weight(): $Fraction;
        tryTransfer(arg0: $Slot, arg1: $Player): number;
        toImmutable(): $BundleContents;
        constructor(arg0: $BundleContents);
    }
    export class $ResolvableProfile extends $Record {
        name(): (string) | undefined;
        id(): ($UUID) | undefined;
        resolve(): $CompletableFuture<$ResolvableProfile>;
        properties(): $PropertyMap;
        isResolved(): boolean;
        gameProfile(): $GameProfile;
        static CODEC: $Codec<$ResolvableProfile>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ResolvableProfile>;
        constructor(arg0: $GameProfile);
        constructor(arg0: (string) | undefined, arg1: ($UUID_) | undefined, arg2: $PropertyMap, arg3: $GameProfile);
        constructor(arg0: (string) | undefined, arg1: ($UUID_) | undefined, arg2: $PropertyMap);
        get resolved(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ResolvableProfile}.
     */
    export type $ResolvableProfile_ = { gameProfile?: $GameProfile, properties?: $PropertyMap, id?: ($UUID_) | undefined, name?: (string) | undefined,  } | [gameProfile?: $GameProfile, properties?: $PropertyMap, id?: ($UUID_) | undefined, name?: (string) | undefined, ];
    export class $ItemContainerContents implements $ContainerComponentAccessor {
        static fromItems(arg0: $List_<$ItemStack_>): $ItemContainerContents;
        copyOne(): $ItemStack;
        nonEmptyItemsCopy(): $Iterable<$ItemStack>;
        nonEmptyStream(): $Stream<$ItemStack>;
        nonEmptyItems(): $Iterable<$ItemStack>;
        copyInto(arg0: $NonNullList<$ItemStack_>): void;
        stream(): $Stream<$ItemStack>;
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        fabric_getStacks(): $NonNullList<$ItemStack>;
        static CODEC: $Codec<$ItemContainerContents>;
        static EMPTY: $ItemContainerContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemContainerContents>;
        get slots(): number;
    }
    export class $Tool$Rule extends $Record {
        static overrideSpeed(arg0: $List_<$Block_>, arg1: number): $Tool$Rule;
        static overrideSpeed(arg0: $TagKey_<$Block>, arg1: number): $Tool$Rule;
        static deniesDrops(arg0: $TagKey_<$Block>): $Tool$Rule;
        static minesAndDrops(arg0: $TagKey_<$Block>, arg1: number): $Tool$Rule;
        static minesAndDrops(arg0: $List_<$Block_>, arg1: number): $Tool$Rule;
        correctForDrops(): (boolean) | undefined;
        blocks(): $HolderSet<$Block>;
        speed(): (number) | undefined;
        static CODEC: $Codec<$Tool$Rule>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Tool$Rule>;
        constructor(arg0: $HolderSet_<$Block>, arg1: (number) | undefined, arg2: (boolean) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Tool$Rule}.
     */
    export type $Tool$Rule_ = { speed?: (number) | undefined, correctForDrops?: (boolean) | undefined, blocks?: $HolderSet_<$Block>,  } | [speed?: (number) | undefined, correctForDrops?: (boolean) | undefined, blocks?: $HolderSet_<$Block>, ];
    export class $DebugStickState extends $Record {
        withProperty(arg0: $Holder_<$Block>, arg1: $Property<never>): $DebugStickState;
        properties(): $Map<$Holder<$Block>, $Property<never>>;
        static CODEC: $Codec<$DebugStickState>;
        static EMPTY: $DebugStickState;
        constructor(arg0: $Map_<$Holder_<$Block>, $Property<never>>);
    }
    /**
     * Values that may be interpreted as {@link $DebugStickState}.
     */
    export type $DebugStickState_ = { properties?: $Map_<$Holder_<$Block>, $Property<never>>,  } | [properties?: $Map_<$Holder_<$Block>, $Property<never>>, ];
    export class $ItemAttributeModifiers extends $Record {
        showInTooltip(): boolean;
        withModifierAdded(arg0: $Holder_<$Attribute>, arg1: $AttributeModifier_, arg2: $EquipmentSlotGroup_): $ItemAttributeModifiers;
        withTooltip(arg0: boolean): $ItemAttributeModifiers;
        modifiers(): $List<$ItemAttributeModifiers$Entry>;
        static builder(): $ItemAttributeModifiers$Builder;
        compute(arg0: number, arg1: $EquipmentSlot_): number;
        forEach(arg0: $EquipmentSlotGroup_, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        forEach(arg0: $EquipmentSlot_, arg1: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        static CODEC: $Codec<$ItemAttributeModifiers>;
        static ATTRIBUTE_MODIFIER_FORMAT: $DecimalFormat;
        static EMPTY: $ItemAttributeModifiers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttributeModifiers>;
        constructor(arg0: $List_<$ItemAttributeModifiers$Entry_>, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ItemAttributeModifiers}.
     */
    export type $ItemAttributeModifiers_ = { modifiers?: $List_<$ItemAttributeModifiers$Entry_>, showInTooltip?: boolean,  } | [modifiers?: $List_<$ItemAttributeModifiers$Entry_>, showInTooltip?: boolean, ];
    export class $FireworkExplosion extends $Record implements $TooltipProvider {
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        fadeColors(): $IntList;
        hasTrail(): boolean;
        hasTwinkle(): boolean;
        addShapeNameTooltip(arg0: $Consumer_<$Component>): void;
        addAdditionalTooltip(arg0: $Consumer_<$Component>): void;
        withFadeColors(arg0: $IntList): $FireworkExplosion;
        shape(): $FireworkExplosion$Shape;
        colors(): $IntList;
        static CODEC: $Codec<$FireworkExplosion>;
        static DEFAULT: $FireworkExplosion;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FireworkExplosion>;
        static COLOR_LIST_CODEC: $Codec<$IntList>;
        constructor(shape: $FireworkExplosion$Shape_, colors: $IntList, fadeColors: $IntList, hasTrail: boolean, hasTwinkle: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FireworkExplosion}.
     */
    export type $FireworkExplosion_ = { hasTrail?: boolean, fadeColors?: $IntList, shape?: $FireworkExplosion$Shape_, hasTwinkle?: boolean, colors?: $IntList,  } | [hasTrail?: boolean, fadeColors?: $IntList, shape?: $FireworkExplosion$Shape_, hasTwinkle?: boolean, colors?: $IntList, ];
    export class $CustomData {
        loadInto(arg0: $Entity): void;
        loadInto(arg0: $BlockEntity, arg1: $HolderLookup$Provider): boolean;
        copyTag(): $CompoundTag;
        static itemMatcher(arg0: $DataComponentType_<$CustomData>, arg1: $CompoundTag_): $Predicate<$ItemStack>;
        matchedBy(arg0: $CompoundTag_): boolean;
        size(): number;
        update(arg0: $Consumer_<$CompoundTag>): $CustomData;
        static update(arg0: $DataComponentType_<$CustomData>, arg1: $ItemStack_, arg2: $Consumer_<$CompoundTag>): void;
        update<T>(arg0: $DynamicOps<$Tag_>, arg1: $MapEncoder<T>, arg2: T): $DataResult<$CustomData>;
        isEmpty(): boolean;
        static of(arg0: $CompoundTag_): $CustomData;
        contains(arg0: string): boolean;
        /**
         * @deprecated
         */
        getUnsafe(): $CompoundTag;
        static set(arg0: $DataComponentType_<$CustomData>, arg1: $ItemStack_, arg2: $CompoundTag_): void;
        read<T>(arg0: $MapDecoder<T>): $DataResult<T>;
        read<T>(arg0: $DynamicOps<$Tag_>, arg1: $MapDecoder<T>): $DataResult<T>;
        static CODEC: $Codec<$CustomData>;
        static CODEC_WITH_ID: $Codec<$CustomData>;
        static EMPTY: $CustomData;
        /**
         * @deprecated
         */
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CustomData>;
        get empty(): boolean;
        get unsafe(): $CompoundTag;
    }
    export class $BundleContents implements $TooltipComponent, $BundleContentsAccessor, $IBundle, $BundleContentsComponentAccessor {
        itemsCopy(): $Iterable<$ItemStack>;
        getItemUnsafe(arg0: number): $ItemStack;
        itemCopyStream(): $Stream<$ItemStack>;
        setSelectedItem(index: number): void;
        getSelectedItem(): number;
        getNumberOfItemsToShow(): number;
        static callGetWeight$vanillabackport_$md$4ca6b6$0(arg0: $ItemStack_): $Fraction;
        static getOccupancy$fabric_transfer_api_v1_$md$4ca6b6$1(arg0: $ItemStack_): $Fraction;
        items(): $Iterable<$ItemStack>;
        size(): number;
        isEmpty(): boolean;
        weight(): $Fraction;
        static getWeight(arg0: $ItemStack_): $Fraction;
        static CODEC: $Codec<$BundleContents>;
        static EMPTY: $BundleContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BundleContents>;
        constructor(arg0: $List_<$ItemStack_>, arg1: $Fraction);
        constructor(arg0: $List_<$ItemStack_>);
        get numberOfItemsToShow(): number;
        get empty(): boolean;
    }
    export class $MapItemColor extends $Record {
        rgb(): number;
        static CODEC: $Codec<$MapItemColor>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapItemColor>;
        static DEFAULT: $MapItemColor;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $MapItemColor}.
     */
    export type $MapItemColor_ = { rgb?: number,  } | [rgb?: number, ];
}
