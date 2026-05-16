import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $LootTableAccessor as $LootTableAccessor$1, $LootPoolAccessor as $LootPoolAccessor$1 } from "@package/net/fabricmc/fabric/mixin/loot";
import { $LootPoolAccess } from "@package/com/blackgear/platform/common/data/neoforge";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $ProblemReporter } from "@package/net/minecraft/util";
import { $BiConsumer, $Consumer, $BiConsumer_, $Function_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $Container } from "@package/net/minecraft/world";
import { $HolderGetter$Provider, $Holder, $HolderGetter$Provider_, $Registry } from "@package/net/minecraft/core";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Iterable_, $Enum, $Record, $Object } from "@package/java/lang";
import { $LootUnificationHandler } from "@package/com/almostreliable/unified/unification/loot";
import { $LootPoolAccessor, $LootTableAccessor, $BoundedIntUnaryOperatorAccessor } from "@package/fzzyhmstrs/emi_loot/mixins";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ItemContainerContents, $ChargedProjectiles, $BundleContents } from "@package/net/minecraft/world/item/component";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $FabricLootPoolBuilder as $FabricLootPoolBuilder$1, $FabricLootTableBuilder } from "@package/net/fabricmc/fabric/api/loot/v2";
import { $UnificationLookup } from "@package/com/almostreliable/unified/api/unification";
import { $Stream } from "@package/java/util/stream";
import { $LootTableAccessor as $LootTableAccessor$2 } from "@package/com/blackgear/platform/core/mixin/neoforge/access";
import { $FabricLootPoolBuilder, $FabricLootTableBuilder as $FabricLootTableBuilder$1 } from "@package/net/fabricmc/fabric/api/loot/v3";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootContextParam, $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as parameters from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as predicates from "@package/net/minecraft/world/level/storage/loot/predicates";
export * as providers from "@package/net/minecraft/world/level/storage/loot/providers";
export * as entries from "@package/net/minecraft/world/level/storage/loot/entries";
export * as functions from "@package/net/minecraft/world/level/storage/loot/functions";

declare module "@package/net/minecraft/world/level/storage/loot" {
    export class $IntRange$IntLimiter {
    }
    export interface $IntRange$IntLimiter {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntLimiter}.
     */
    export type $IntRange$IntLimiter_ = (() => void);
    export class $LootParams$Builder {
        create(arg0: $LootContextParamSet): $LootParams;
        getLevel(): $ServerLevel;
        getOptionalParameter<T>(arg0: $LootContextParam<T>): T;
        withDynamicDrop(arg0: $ResourceLocation_, arg1: $LootParams$DynamicDrop_): $LootParams$Builder;
        getParameter<T>(arg0: $LootContextParam<T>): T;
        withParameter<T>(arg0: $LootContextParam<T>, arg1: T): $LootParams$Builder;
        withOptionalParameter<T>(arg0: $LootContextParam<T>, arg1: T): $LootParams$Builder;
        withLuck(arg0: number): $LootParams$Builder;
        constructor(arg0: $ServerLevel);
        get level(): $ServerLevel;
    }
    export class $LootTable$Builder implements $FunctionUserBuilder<$LootTable$Builder>, $FabricLootTableBuilder, $FabricLootTableBuilder$1 {
        apply(arg0: $LootItemFunction$Builder_): $LootTable$Builder;
        apply(arg0: $LootItemFunction): $LootTable$Builder;
        apply(arg0: $Collection_<any>): $LootTable$Builder;
        pool(arg0: $LootPool): $LootTable$Builder;
        build(): $LootTable;
        withPool(arg0: $LootPool$Builder): $LootTable$Builder;
        modifyPools(arg0: $Consumer_<any>): $LootTable$Builder;
        setRandomSequence(arg0: $ResourceLocation_): $LootTable$Builder;
        setParamSet(arg0: $LootContextParamSet): $LootTable$Builder;
        pools(arg0: $Collection_<any>): $LootTable$Builder;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        unwrap(): $LootTable$Builder;
        constructor();
        set randomSequence(value: $ResourceLocation_);
        set paramSet(value: $LootContextParamSet);
    }
    export class $LootPool$Builder implements $FunctionUserBuilder<$LootPool$Builder>, $ConditionUserBuilder<$LootPool$Builder>, $FabricLootPoolBuilder$1, $FabricLootPoolBuilder {
        name(arg0: string): $LootPool$Builder;
        add(arg0: $LootPoolEntryContainer$Builder<never>): $LootPool$Builder;
        apply(arg0: $LootItemFunction$Builder_): $LootPool$Builder;
        apply(arg0: $LootItemFunction): $LootPool$Builder;
        apply(arg0: $Collection_<any>): $LootPool$Builder;
        with(arg0: $LootPoolEntryContainer): $LootPool$Builder;
        with(arg0: $Collection_<any>): $LootPool$Builder;
        unwrap(): $LootPool$Builder;
        build(): $LootPool;
        when(arg0: $LootItemCondition$Builder_): $LootPool$Builder;
        conditionally(arg0: $Collection_<any>): $LootPool$Builder;
        conditionally(arg0: $LootItemCondition): $LootPool$Builder;
        setRolls(arg0: $NumberProvider_): $LootPool$Builder;
        setBonusRolls(arg0: $NumberProvider_): $LootPool$Builder;
        apply<E>(arg0: E[], arg1: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        apply<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): $LootPool$Builder;
        constructor();
        set rolls(value: $NumberProvider_);
        set bonusRolls(value: $NumberProvider_);
    }
    export class $LootContext$EntityTarget extends $Enum<$LootContext$EntityTarget> implements $StringRepresentable {
        getName(): string;
        static values(): $LootContext$EntityTarget[];
        static valueOf(arg0: string): $LootContext$EntityTarget;
        static getByName(arg0: string): $LootContext$EntityTarget;
        getParam(): $LootContextParam<$Entity>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static DIRECT_ATTACKER: $LootContext$EntityTarget;
        static CODEC: $StringRepresentable$EnumCodec<$LootContext$EntityTarget>;
        static ATTACKER: $LootContext$EntityTarget;
        static ATTACKING_PLAYER: $LootContext$EntityTarget;
        static THIS: $LootContext$EntityTarget;
        get param(): $LootContextParam<$Entity>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LootContext$EntityTarget}.
     */
    export type $LootContext$EntityTarget_ = "this" | "attacker" | "direct_attacker" | "attacking_player" | string;
    export class $LootDataType<T> extends $Record {
        static values(): $Stream<$LootDataType<never>>;
        defaultValue(): T;
        handler$cfp000$probejs$apply(resourceLocation: $ResourceLocation_, ops: $DynamicOps<any>, value: $Object, cir: $CallbackInfoReturnable<any>): void;
        idSetter(): $BiConsumer<T, $ResourceLocation>;
        runValidation(arg0: $ValidationContext, arg1: $ResourceKey_<T>, arg2: T): void;
        conditionalCodec(): $Codec<(T) | undefined>;
        deserialize<V>(arg0: $ResourceLocation_, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        validator(): $LootDataType$Validator<T>;
        codec(): $Codec<T>;
        registryKey(): $ResourceKey<$Registry<T>>;
        static TABLE: $LootDataType<$LootTable>;
        static MODIFIER: $LootDataType<$LootItemFunction>;
        static PREDICATE: $LootDataType<$LootItemCondition>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>, validator: $LootDataType$Validator_<T>, defaultValue: T, conditionalCodec: $Codec<(T) | undefined>, idSetter: $BiConsumer_<T, $ResourceLocation>);
    }
    /**
     * Values that may be interpreted as {@link $LootDataType}.
     */
    export type $LootDataType_<T> = { conditionalCodec?: $Codec<(T) | undefined>, idSetter?: $BiConsumer_<any, $ResourceLocation>, validator?: $LootDataType$Validator_<any>, registryKey?: $ResourceKey_<$Registry<any>>, codec?: $Codec<any>, defaultValue?: any,  } | [conditionalCodec?: $Codec<(T) | undefined>, idSetter?: $BiConsumer_<any, $ResourceLocation>, validator?: $LootDataType$Validator_<any>, registryKey?: $ResourceKey_<$Registry<any>>, codec?: $Codec<any>, defaultValue?: any, ];
    export class $LootContext {
        getLevel(): $ServerLevel;
        getResolver(): $HolderGetter$Provider;
        setQueriedLootTableId(arg0: $ResourceLocation_): void;
        static createVisitedEntry(arg0: $LootItemFunction): $LootContext$VisitedEntry<$LootItemFunction>;
        static createVisitedEntry(arg0: $LootTable): $LootContext$VisitedEntry<$LootTable>;
        static createVisitedEntry(arg0: $LootItemCondition): $LootContext$VisitedEntry<$LootItemCondition>;
        pushVisitedElement(arg0: $LootContext$VisitedEntry_<never>): boolean;
        hasParam(arg0: $LootContextParam<never>): boolean;
        getParam<T>(arg0: $LootContextParam<T>): T;
        addDynamicDrops(arg0: $ResourceLocation_, arg1: $Consumer_<$ItemStack>): void;
        hasVisitedElement(arg0: $LootContext$VisitedEntry_<never>): boolean;
        popVisitedElement(arg0: $LootContext$VisitedEntry_<never>): void;
        getQueriedLootTableId(): $ResourceLocation;
        getParamOrNull<T>(arg0: $LootContextParam<T>): T;
        getRandom(): $RandomSource;
        getLuck(): number;
        constructor(arg0: $LootParams, arg1: $RandomSource, arg2: $HolderGetter$Provider_);
        get level(): $ServerLevel;
        get resolver(): $HolderGetter$Provider;
        get random(): $RandomSource;
        get luck(): number;
    }
    export class $ValidationContext {
        resolver(): $HolderGetter$Provider;
        reporter(): $ProblemReporter;
        enterElement(arg0: string, arg1: $ResourceKey_<never>): $ValidationContext;
        forChild(arg0: string): $ValidationContext;
        validateUser(arg0: $LootContextUser): void;
        hasVisitedElement(arg0: $ResourceKey_<never>): boolean;
        allowsReferences(): boolean;
        reportProblem(arg0: string): void;
        setParams(arg0: $LootContextParamSet): $ValidationContext;
        constructor(arg0: $ProblemReporter, arg1: $LootContextParamSet);
        constructor(arg0: $ProblemReporter, arg1: $LootContextParamSet, arg2: $HolderGetter$Provider_);
        set params(value: $LootContextParamSet);
    }
    export class $LootContextUser {
    }
    export interface $LootContextUser {
        validate(arg0: $ValidationContext): void;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $IntRange implements $BoundedIntUnaryOperatorAccessor {
        test(arg0: $LootContext, arg1: number): boolean;
        clamp(arg0: $LootContext, arg1: number): number;
        static exact(arg0: number): $IntRange;
        static range(arg0: number, arg1: number): $IntRange;
        static upperBound(arg0: number): $IntRange;
        static lowerBound(arg0: number): $IntRange;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getMin(): $NumberProvider;
        getMax(): $NumberProvider;
        static CODEC: $Codec<$IntRange>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get min(): $NumberProvider;
        get max(): $NumberProvider;
    }
    export class $LootDataType$Validator<T> {
    }
    export interface $LootDataType$Validator<T> {
        run(arg0: $ValidationContext, arg1: $ResourceKey_<T>, arg2: T): void;
    }
    /**
     * Values that may be interpreted as {@link $LootDataType$Validator}.
     */
    export type $LootDataType$Validator_<T> = ((arg0: $ValidationContext, arg1: $ResourceKey<T>, arg2: T) => void);
    export class $LootParams$DynamicDrop {
    }
    export interface $LootParams$DynamicDrop {
        add(arg0: $Consumer_<$ItemStack>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootParams$DynamicDrop}.
     */
    export type $LootParams$DynamicDrop_ = ((arg0: $Consumer<$ItemStack>) => void);
    export class $ContainerComponentManipulators {
        static ALL_MANIPULATORS: $Map<$DataComponentType<never>, $ContainerComponentManipulator<never>>;
        static CODEC: $Codec<$ContainerComponentManipulator<never>>;
        static CHARGED_PROJECTILES: $ContainerComponentManipulator<$ChargedProjectiles>;
        static CONTAINER: $ContainerComponentManipulator<$ItemContainerContents>;
        static BUNDLE_CONTENTS: $ContainerComponentManipulator<$BundleContents>;
    }
    export interface $ContainerComponentManipulators {
    }
    export class $LootParams {
        getLevel(): $ServerLevel;
        getOptionalParameter<T>(arg0: $LootContextParam<T>): T;
        hasParam(arg0: $LootContextParam<never>): boolean;
        addDynamicDrops(arg0: $ResourceLocation_, arg1: $Consumer_<$ItemStack>): void;
        getParameter<T>(arg0: $LootContextParam<T>): T;
        getParamOrNull<T>(arg0: $LootContextParam<T>): T;
        getLuck(): number;
        constructor(arg0: $ServerLevel, arg1: $Map_<$LootContextParam<never>, $Object>, arg2: $Map_<$ResourceLocation_, $LootParams$DynamicDrop_>, arg3: number);
        get level(): $ServerLevel;
        get luck(): number;
    }
    export class $ContainerComponentManipulator<T> {
    }
    export interface $ContainerComponentManipulator<T> {
        type(): $DataComponentType<T>;
        empty(): T;
        getContents(arg0: T): $Stream<$ItemStack>;
        setContents(arg0: $ItemStack_, arg1: T, arg2: $Stream<$ItemStack_>): void;
        setContents(arg0: $ItemStack_, arg1: $Stream<$ItemStack_>): void;
        setContents(arg0: T, arg1: $Stream<$ItemStack_>): T;
        modifyItems(arg0: $ItemStack_, arg1: $UnaryOperator_<$ItemStack>): void;
    }
    export class $LootTable implements $LootTableAccessor$1, $LootTableAccessor, $LootTableAccessor$2, $LootUnificationHandler {
        fill(arg0: $Container, arg1: $LootParams, arg2: number): void;
        validate(arg0: $ValidationContext): void;
        getPool(arg0: string): $LootPool;
        isFrozen(): boolean;
        freeze(): void;
        static lootTable(): $LootTable$Builder;
        getParamSet(): $LootContextParamSet;
        static createStackSplitter(arg0: $ServerLevel, arg1: $Consumer_<$ItemStack>): $Consumer<$ItemStack>;
        /**
         * @deprecated
         */
        getRandomItemsRaw(arg0: $LootParams, arg1: $Consumer_<$ItemStack>): void;
        /**
         * @deprecated
         */
        getRandomItemsRaw(arg0: $LootContext, arg1: $Consumer_<$ItemStack>): void;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        getLootTableId(): $ResourceLocation;
        handler$bcl000$balm$getRandomItems(arg0: $LootContext, arg1: $CallbackInfoReturnable<any>): void;
        setLootTableId(arg0: $ResourceLocation_): void;
        removePool(arg0: string): $LootPool;
        addPool(arg0: $LootPool): void;
        getRandomItems(arg0: $LootParams, arg1: number): $ObjectArrayList<$ItemStack>;
        getRandomItems(arg0: $LootParams): $ObjectArrayList<$ItemStack>;
        getRandomItems(arg0: $LootParams, arg1: $RandomSource): $ObjectArrayList<$ItemStack>;
        getRandomItems(arg0: $LootContext, arg1: $Consumer_<$ItemStack>): void;
        getRandomItems(arg0: $LootParams, arg1: $Consumer_<$ItemStack>): void;
        getRandomItems(arg0: $LootParams, arg1: number, arg2: $Consumer_<$ItemStack>): void;
        fabric_getPools(): $List<$LootPool>;
        fabric_getFunctions(): $List<$LootItemFunction>;
        fabric_getRandomSequenceId(): ($ResourceLocation) | undefined;
        getPools(): $List<$LootPool>;
        static CODEC: $Codec<$Holder<$LootTable>>;
        static DEFAULT_PARAM_SET: $LootContextParamSet;
        pools: $List<$LootPool>;
        static DIRECT_CODEC: $Codec<$LootTable>;
        static RANDOMIZE_SEED: number;
        static EMPTY: $LootTable;
        constructor(arg0: $LootContextParamSet, arg1: ($ResourceLocation_) | undefined, arg2: $List_<$LootPool>, arg3: $List_<$LootItemFunction>);
        get frozen(): boolean;
        get paramSet(): $LootContextParamSet;
    }
    export class $LootPool implements $LootPoolAccessor$1, $LootPoolAccessor, $LootPoolAccess, $LootUnificationHandler {
        getName(): string;
        validate(arg0: $ValidationContext): void;
        setName(arg0: string): void;
        isFrozen(): boolean;
        getEntries(): $List<any>;
        freeze(): void;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        getBonusRolls(): $NumberProvider;
        setRolls(arg0: $NumberProvider_): void;
        setBonusRolls(arg0: $NumberProvider_): void;
        static lootPool(): $LootPool$Builder;
        setEntries(entries: $List_<any>): void;
        addRandomItems(arg0: $Consumer_<$ItemStack>, arg1: $LootContext): void;
        fabric_getRolls(): $NumberProvider;
        fabric_getBonusRolls(): $NumberProvider;
        fabric_getEntries(): $List<$LootPoolEntryContainer>;
        fabric_getConditions(): $List<$LootItemCondition>;
        getRolls(): $NumberProvider;
        fabric_getFunctions(): $List<$LootItemFunction>;
        getConditions(): $List<$LootItemCondition>;
        getFunctions(): $List<$LootItemFunction>;
        entries: $List<$LootPoolEntryContainer>;
        static CODEC: $Codec<$LootPool>;
        functions: $List<$LootItemFunction>;
        conditions: $List<$LootItemCondition>;
        rolls: $NumberProvider;
        bonusRolls: $NumberProvider;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>, arg2: $List_<$LootItemFunction>, arg3: $NumberProvider_, arg4: $NumberProvider_, arg5: (string) | undefined);
        get frozen(): boolean;
    }
    export class $IntRange$IntChecker {
    }
    export interface $IntRange$IntChecker {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntChecker}.
     */
    export type $IntRange$IntChecker_ = (() => void);
    export class $LootContext$Builder {
        create(arg0: ($ResourceLocation_) | undefined): $LootContext;
        getLevel(): $ServerLevel;
        withQueriedLootTableId(arg0: $ResourceLocation_): $LootContext$Builder;
        withOptionalRandomSeed(arg0: number): $LootContext$Builder;
        withOptionalRandomSource(arg0: $RandomSource): $LootContext$Builder;
        constructor(arg0: $LootParams);
        constructor(arg0: $LootContext);
        get level(): $ServerLevel;
    }
    export class $LootContext$VisitedEntry<T> extends $Record {
        type(): $LootDataType<T>;
        value(): T;
        constructor(type: $LootDataType_<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $LootContext$VisitedEntry}.
     */
    export type $LootContext$VisitedEntry_<T> = { type?: $LootDataType_<any>, value?: any,  } | [type?: $LootDataType_<any>, value?: any, ];
    export class $BuiltInLootTables {
        static all(): $Set<$ResourceKey<$LootTable>>;
        static PANDA_SNEEZE: $ResourceKey<$LootTable>;
        static ANCIENT_CITY_ICE_BOX: $ResourceKey<$LootTable>;
        static PILLAGER_OUTPOST: $ResourceKey<$LootTable>;
        static SHEEP_CYAN: $ResourceKey<$LootTable>;
        static DESERT_WELL_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static CLERIC_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_PURPLE: $ResourceKey<$LootTable>;
        static VILLAGE_SHEPHERD: $ResourceKey<$LootTable>;
        static STRONGHOLD_LIBRARY: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static BASTION_OTHER: $ResourceKey<$LootTable>;
        static SHEEP_BLACK: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_BIG: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_WARM_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_GRAY: $ResourceKey<$LootTable>;
        static RUINED_PORTAL: $ResourceKey<$LootTable>;
        static VILLAGE_TOOLSMITH: $ResourceKey<$LootTable>;
        static VILLAGE_BUTCHER: $ResourceKey<$LootTable>;
        static VILLAGE_WEAPONSMITH: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_BLUE: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_SMALL: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_RARE: $ResourceKey<$LootTable>;
        static BURIED_TREASURE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_RANGED: $ResourceKey<$LootTable>;
        static SHIPWRECK_SUPPLY: $ResourceKey<$LootTable>;
        static SHEEP_YELLOW: $ResourceKey<$LootTable>;
        static ABANDONED_MINESHAFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION_BARREL: $ResourceKey<$LootTable>;
        static FISHING_JUNK: $ResourceKey<$LootTable>;
        static SHEEP_GRAY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_WATER_DISPENSER: $ResourceKey<$LootTable>;
        static SHEEP_PINK: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static VILLAGE_SAVANNA_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_UNIQUE: $ResourceKey<$LootTable>;
        static VILLAGE_MASON: $ResourceKey<$LootTable>;
        static FISHING: $ResourceKey<$LootTable>;
        static FISHERMAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR: $ResourceKey<$LootTable>;
        static BUTCHER_GIFT: $ResourceKey<$LootTable>;
        static CAT_MORNING_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_COMMON: $ResourceKey<$LootTable>;
        static VILLAGE_TANNERY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_RARE: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_COMMON: $ResourceKey<$LootTable>;
        static BOGGED_SHEAR: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_DISPENSER: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID: $ResourceKey<$LootTable>;
        static SHEEP_BLUE: $ResourceKey<$LootTable>;
        static CARTOGRAPHER_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_ENTRANCE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_MELEE: $ResourceKey<$LootTable>;
        static STRONGHOLD_CROSSING: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_UNIQUE: $ResourceKey<$LootTable>;
        static SHEEP_MAGENTA: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CHAMBER_DISPENSER: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_ITEMS_TO_DROP_WHEN_OMINOUS: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_RED: $ResourceKey<$LootTable>;
        static ARMORER_GIFT: $ResourceKey<$LootTable>;
        static MASON_GIFT: $ResourceKey<$LootTable>;
        static SHIPWRECK_TREASURE: $ResourceKey<$LootTable>;
        static FISHING_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_RARE: $ResourceKey<$LootTable>;
        static VILLAGE_ARMORER: $ResourceKey<$LootTable>;
        static SIMPLE_DUNGEON: $ResourceKey<$LootTable>;
        static NETHER_BRIDGE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE_DISPENSER: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER: $ResourceKey<$LootTable>;
        static VILLAGE_CARTOGRAPHER: $ResourceKey<$LootTable>;
        static FARMER_GIFT: $ResourceKey<$LootTable>;
        static END_CITY_TREASURE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE: $ResourceKey<$LootTable>;
        static FISHING_FISH: $ResourceKey<$LootTable>;
        static ANCIENT_CITY: $ResourceKey<$LootTable>;
        static SNIFFER_DIGGING: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static FLETCHER_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_GREEN: $ResourceKey<$LootTable>;
        static SHEEP_ORANGE: $ResourceKey<$LootTable>;
        static BASTION_BRIDGE: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_COLD_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static WOODLAND_MANSION: $ResourceKey<$LootTable>;
        static PIGLIN_BARTERING: $ResourceKey<$LootTable>;
        static SPAWN_BONUS_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_BROWN: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_SUPPLY: $ResourceKey<$LootTable>;
        static VILLAGE_DESERT_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS: $ResourceKey<$LootTable>;
        static EMPTY: $ResourceKey<$LootTable>;
        static SHIPWRECK_MAP: $ResourceKey<$LootTable>;
        static SHEPHERD_GIFT: $ResourceKey<$LootTable>;
        static STRONGHOLD_CORRIDOR: $ResourceKey<$LootTable>;
        static LIBRARIAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_HOGLIN_STABLE: $ResourceKey<$LootTable>;
        static VILLAGE_FLETCHER: $ResourceKey<$LootTable>;
        static VILLAGE_TEMPLE: $ResourceKey<$LootTable>;
        static SHEEP_LIME: $ResourceKey<$LootTable>;
        static IGLOO_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_WHITE: $ResourceKey<$LootTable>;
        static TOOLSMITH_GIFT: $ResourceKey<$LootTable>;
        static WEAPONSMITH_GIFT: $ResourceKey<$LootTable>;
        static VILLAGE_SNOWY_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_COMMON: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_POT: $ResourceKey<$LootTable>;
        static VILLAGE_TAIGA_HOUSE: $ResourceKey<$LootTable>;
        static VILLAGE_FISHER: $ResourceKey<$LootTable>;
        static VILLAGE_PLAINS_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION: $ResourceKey<$LootTable>;
        static LEATHERWORKER_GIFT: $ResourceKey<$LootTable>;
        constructor();
    }
}
