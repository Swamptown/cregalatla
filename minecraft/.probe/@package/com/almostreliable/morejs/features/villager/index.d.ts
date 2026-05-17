import { $Decoder, $Decoder$Simple, $Codec$ResultFunction, $DataResult, $MapEncoder, $DynamicOps, $Codec, $Decoder$Boxed, $Lifecycle, $Dynamic, $MapCodec, $Encoder, $Decoder$Terminal } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $List, $Map_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $VillagerTrades$ItemListing, $VillagerProfession, $VillagerTrades$ItemListing_, $VillagerProfession_ } from "@package/net/minecraft/world/entity/npc";
import { $RandomSource } from "@package/net/minecraft/util";
import { $IntPredicate, $IntPredicate_, $Supplier_, $Function_, $Consumer_, $UnaryOperator_ } from "@package/java/util/function";
import { $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EnchantedItemTrade, $TransformableTrade$Transformer_, $TreasureMapTrade, $SimpleTrade, $CustomTrade, $PotionTrade, $StewTrade } from "@package/com/almostreliable/morejs/features/villager/trades";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $MerchantOffer, $ItemCost, $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $BlockPosFinder_ } from "@package/com/almostreliable/morejs/util";
export * as trades from "@package/com/almostreliable/morejs/features/villager/trades";
export * as events from "@package/com/almostreliable/morejs/features/villager/events";

declare module "@package/com/almostreliable/morejs/features/villager" {
    export class $TradeMatcher$OnMatch {
    }
    export interface $TradeMatcher$OnMatch {
        notify(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $TradeMatcher$OnMatch}.
     */
    export type $TradeMatcher$OnMatch_ = ((arg0: $ItemStack, arg1: $ItemStack, arg2: $ItemStack) => void);
    export class $MerchantOfferCodecPatch implements $Codec<$MerchantOffer> {
        decode<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$Pair<$MerchantOffer, T>>;
        encode<T>(arg0: $MerchantOffer, arg1: $DynamicOps<T>, arg2: T): $DataResult<T>;
        static patch(): void;
        dispatch<E>(arg0: $Function_<E, $MerchantOffer>, arg1: $Function_<$MerchantOffer, $MapCodec<E>>): $Codec<E>;
        dispatch<E>(arg0: string, arg1: $Function_<E, $MerchantOffer>, arg2: $Function_<$MerchantOffer, $MapCodec<E>>): $Codec<E>;
        validate(arg0: $Function_<$MerchantOffer, $DataResult<$MerchantOffer>>): $Codec<$MerchantOffer>;
        orElse(arg0: $Consumer_<string>, arg1: $MerchantOffer): $Codec<$MerchantOffer>;
        orElse(arg0: $UnaryOperator_<string>, arg1: $MerchantOffer): $Codec<$MerchantOffer>;
        orElse(arg0: $MerchantOffer): $Codec<$MerchantOffer>;
        orElseGet(arg0: $Consumer_<string>, arg1: $Supplier_<$MerchantOffer>): $Codec<$MerchantOffer>;
        orElseGet(arg0: $UnaryOperator_<string>, arg1: $Supplier_<$MerchantOffer>): $Codec<$MerchantOffer>;
        orElseGet(arg0: $Supplier_<$MerchantOffer>): $Codec<$MerchantOffer>;
        deprecated(arg0: number): $Codec<$MerchantOffer>;
        comapFlatMap<S>(arg0: $Function_<$MerchantOffer, $DataResult<S>>, arg1: $Function_<S, $MerchantOffer>): $Codec<S>;
        optionalFieldOf(arg0: string): $MapCodec<($MerchantOffer) | undefined>;
        optionalFieldOf(arg0: string, arg1: $MerchantOffer): $MapCodec<$MerchantOffer>;
        optionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $MerchantOffer, arg3: $Lifecycle): $MapCodec<$MerchantOffer>;
        optionalFieldOf(arg0: string, arg1: $MerchantOffer, arg2: $Lifecycle): $MapCodec<$MerchantOffer>;
        listOf(): $Codec<$List<$MerchantOffer>>;
        listOf(arg0: number, arg1: number): $Codec<$List<$MerchantOffer>>;
        xmap<S>(arg0: $Function_<$MerchantOffer, S>, arg1: $Function_<S, $MerchantOffer>): $Codec<S>;
        stable(): $Codec<$MerchantOffer>;
        flatXmap<S>(arg0: $Function_<$MerchantOffer, $DataResult<S>>, arg1: $Function_<S, $DataResult<$MerchantOffer>>): $Codec<S>;
        lenientOptionalFieldOf(arg0: string, arg1: $MerchantOffer): $MapCodec<$MerchantOffer>;
        lenientOptionalFieldOf(arg0: string, arg1: $MerchantOffer, arg2: $Lifecycle): $MapCodec<$MerchantOffer>;
        lenientOptionalFieldOf(arg0: string, arg1: $Lifecycle, arg2: $MerchantOffer, arg3: $Lifecycle): $MapCodec<$MerchantOffer>;
        lenientOptionalFieldOf(arg0: string): $MapCodec<($MerchantOffer) | undefined>;
        mapResult(arg0: $Codec$ResultFunction<$MerchantOffer>): $Codec<$MerchantOffer>;
        partialDispatch<E>(arg0: string, arg1: $Function_<E, $DataResult<$MerchantOffer>>, arg2: $Function_<$MerchantOffer, $DataResult<$MapCodec<E>>>): $Codec<E>;
        dispatchMap<E>(arg0: $Function_<E, $MerchantOffer>, arg1: $Function_<$MerchantOffer, $MapCodec<E>>): $MapCodec<E>;
        dispatchMap<E>(arg0: string, arg1: $Function_<E, $MerchantOffer>, arg2: $Function_<$MerchantOffer, $MapCodec<E>>): $MapCodec<E>;
        sizeLimitedListOf(arg0: number): $Codec<$List<$MerchantOffer>>;
        flatComapMap<S>(arg0: $Function_<$MerchantOffer, S>, arg1: $Function_<S, $DataResult<$MerchantOffer>>): $Codec<S>;
        dispatchStable<E>(arg0: $Function_<E, $MerchantOffer>, arg1: $Function_<$MerchantOffer, $MapCodec<E>>): $Codec<E>;
        encodeStart<T>(arg0: $DynamicOps<T>, arg1: $MerchantOffer): $DataResult<T>;
        comap<B>(arg0: $Function_<B, $MerchantOffer>): $Encoder<B>;
        flatComap<B>(arg0: $Function_<B, $DataResult<$MerchantOffer>>): $Encoder<B>;
        decode<T>(arg0: $Dynamic<T>): $DataResult<$Pair<$MerchantOffer, T>>;
        map<B>(arg0: $Function_<$MerchantOffer, B>): $Decoder<B>;
        parse<T>(arg0: $Dynamic<T>): $DataResult<$MerchantOffer>;
        parse<T>(arg0: $DynamicOps<T>, arg1: T): $DataResult<$MerchantOffer>;
        flatMap<B>(arg0: $Function_<$MerchantOffer, $DataResult<B>>): $Decoder<B>;
        boxed(): $Decoder$Boxed<$MerchantOffer>;
        terminal(): $Decoder$Terminal<$MerchantOffer>;
        simple(): $Decoder$Simple<$MerchantOffer>;
        withLifecycle(arg0: $Lifecycle): $Encoder<$MerchantOffer>;
        fieldOf(arg0: string): $MapEncoder<$MerchantOffer>;
        promotePartial(arg0: $Consumer_<string>): $Decoder<$MerchantOffer>;
        static KEY: string;
        constructor(arg0: $Codec<$MerchantOffer>);
    }
    export class $TradeMatcher extends $Record {
        filter(): $TradeFilter;
        match(arg0: $ItemStack_, arg1: $ItemCost_, arg2: $ItemStack_, arg3: $TradeTypes_): boolean;
        match(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: $TradeTypes_): boolean;
        match(arg0: $ItemCost_, arg1: $ItemStack_, arg2: $TradeTypes_): boolean;
        match(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $TradeTypes_): boolean;
        match(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $TradeTypes_): boolean;
        matchProfession(arg0: $VillagerProfession_): boolean;
        matchMerchantLevel(arg0: number): boolean;
        matchType(arg0: $TradeTypes_): boolean;
        onMatch(): $TradeMatcher$OnMatch;
        constructor(filter: $TradeFilter_, onMatch: $TradeMatcher$OnMatch_);
    }
    /**
     * Values that may be interpreted as {@link $TradeMatcher}.
     */
    export type $TradeMatcher_ = { onMatch?: $TradeMatcher$OnMatch_, filter?: $TradeFilter_,  } | [onMatch?: $TradeMatcher$OnMatch_, filter?: $TradeFilter_, ];
    export class $TradeFilter extends $Record {
        first(): ($Ingredient) | undefined;
        second(): ($Ingredient) | undefined;
        types(): ($List<$TradeTypes>) | undefined;
        level(): ($IntRange) | undefined;
        output(): ($Ingredient) | undefined;
        professions(): ($HolderSet<$VillagerProfession>) | undefined;
        outputCount(): ($IntRange) | undefined;
        firstCount(): ($IntRange) | undefined;
        secondCount(): ($IntRange) | undefined;
        constructor(first: ($Ingredient_) | undefined, second: ($Ingredient_) | undefined, output: ($Ingredient_) | undefined, firstCount: ($IntRange) | undefined, secondCount: ($IntRange) | undefined, outputCount: ($IntRange) | undefined, level: ($IntRange) | undefined, types: ($List_<$TradeTypes_>) | undefined, professions: ($HolderSet_<$VillagerProfession>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TradeFilter}.
     */
    export type $TradeFilter_ = { first?: ($Ingredient_) | undefined, output?: ($Ingredient_) | undefined, outputCount?: ($IntRange) | undefined, types?: ($List_<$TradeTypes_>) | undefined, level?: ($IntRange) | undefined, professions?: ($HolderSet_<$VillagerProfession>) | undefined, secondCount?: ($IntRange) | undefined, firstCount?: ($IntRange) | undefined, second?: ($Ingredient_) | undefined,  } | [first?: ($Ingredient_) | undefined, output?: ($Ingredient_) | undefined, outputCount?: ($IntRange) | undefined, types?: ($List_<$TradeTypes_>) | undefined, level?: ($IntRange) | undefined, professions?: ($HolderSet_<$VillagerProfession>) | undefined, secondCount?: ($IntRange) | undefined, firstCount?: ($IntRange) | undefined, second?: ($Ingredient_) | undefined, ];
    export class $IntRange implements $IntPredicate {
        test(arg0: number): boolean;
        static all(): $IntRange;
        getMin(): number;
        getMax(): number;
        getRandom(arg0: $RandomSource): number;
        or(arg0: $IntPredicate_): $IntPredicate;
        negate(): $IntPredicate;
        and(arg0: $IntPredicate_): $IntPredicate;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        get min(): number;
        get max(): number;
    }
    export class $VillagerUtils {
        static getAbstractTrades(arg0: $Map_<number, $VillagerTrades$ItemListing_[]>, arg1: number): $List<$VillagerTrades$ItemListing>;
        static getRandomVillagerTrade(arg0: $VillagerProfession_): $VillagerTrades$ItemListing;
        static getRandomVillagerTrade(arg0: $VillagerProfession_, arg1: number): $VillagerTrades$ItemListing;
        static getRandomWandererTrade(arg0: number): $VillagerTrades$ItemListing;
        static isVanillaTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static isCustomTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static getVillagerTrades(arg0: $VillagerProfession_): $List<$VillagerTrades$ItemListing>;
        static getVillagerTrades(arg0: $VillagerProfession_, arg1: number): $List<$VillagerTrades$ItemListing>;
        static getWandererTrades(arg0: number): $List<$VillagerTrades$ItemListing>;
        static isModdedTypedTrade(arg0: $VillagerTrades$ItemListing_): boolean;
        static getProfessions(): $Collection<$VillagerProfession>;
        static createSimpleTrade(arg0: $TradeItem[], arg1: $TradeItem): $SimpleTrade;
        static createCustomTrade(arg0: $TransformableTrade$Transformer_): $CustomTrade;
        static createStructureMapTrade(arg0: $TradeItem[], arg1: $HolderSet_<$Structure>): $TreasureMapTrade;
        static createBiomeMapTrade(arg0: $TradeItem[], arg1: $HolderSet_<$Biome>): $TreasureMapTrade;
        static createCustomMapTrade(arg0: $TradeItem[], arg1: $BlockPosFinder_): $TreasureMapTrade;
        static createEnchantedItemTrade(arg0: $TradeItem[], arg1: $ItemStack_, arg2: $HolderSet_<$Enchantment>): $EnchantedItemTrade;
        static createEnchantedItemTrade(arg0: $TradeItem[], arg1: $ItemStack_): $EnchantedItemTrade;
        static createStewTrade(arg0: $TradeItem[]): $StewTrade;
        static createPotionTrade(arg0: $TradeItem[]): $PotionTrade;
        static setAbstractTrades(arg0: $Map_<number, $VillagerTrades$ItemListing_[]>, arg1: number, arg2: $List_<$VillagerTrades$ItemListing_>): void;
        static getProfession(arg0: $ResourceLocation_): $VillagerProfession;
        static CACHED_PROFESSION_TRADES: $Map<$VillagerProfession, $List<$VillagerTrades$ItemListing>>;
        static VANILLA_TRADE_TYPES: $Set<$Class<$VillagerTrades$ItemListing>>;
        constructor();
        static get professions(): $Collection<$VillagerProfession>;
    }
    export class $TradingManager {
        static invokeVillagerTradeEvent(): void;
        static invokeWanderingTradeEvent(): void;
        constructor();
    }
    export class $TradeMatcher$Filterable {
    }
    export interface $TradeMatcher$Filterable {
        matchesTradeFilter(arg0: $TradeMatcher_): boolean;
    }
    export class $TradeItem {
        static of(arg0: $ItemStack_): $TradeItem;
        static of(arg0: $ItemStack_, arg1: number, arg2: number): $TradeItem;
        static of(arg0: $ItemStack_, arg1: number): $TradeItem;
        isEmpty(): boolean;
        createItemCost(arg0: $RandomSource): $ItemCost;
        getCountRange(): $IntRange;
        getItemStack(): $ItemStack;
        createItemStack(arg0: $RandomSource): $ItemStack;
        static EMPTY: $TradeItem;
        constructor(arg0: $ItemStack_, arg1: $IntRange);
        get empty(): boolean;
        get countRange(): $IntRange;
        get itemStack(): $ItemStack;
    }
    export class $OfferExtension {
    }
    export interface $OfferExtension {
        isDisabled(): boolean;
        setDisabled(arg0: boolean): void;
        self(): $MerchantOffer;
        getFirstCost(): $ItemStack;
        setFirstCost(arg0: $ItemStack_): void;
        getSecondCost(): $ItemStack;
        setSecondCost(arg0: $ItemStack_): void;
        getOutput(): $ItemStack;
        setOutput(arg0: $ItemStack_): void;
        setMaxUses(arg0: number): void;
        setDemand(arg0: number): void;
        setVillagerExperience(arg0: number): void;
        setPriceMultiplier(arg0: number): void;
        setRewardExp(arg0: boolean): void;
        isRewardingExp(): boolean;
        replaceEmeralds(arg0: $Item_): void;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        set maxUses(value: number);
        set demand(value: number);
        set villagerExperience(value: number);
        set priceMultiplier(value: number);
        set rewardExp(value: boolean);
        get rewardingExp(): boolean;
    }
    export class $TradeTypes extends $Enum<$TradeTypes> {
        static values(): $TradeTypes[];
        static valueOf(arg0: string): $TradeTypes;
        static TreasureMapForEmeralds: $TradeTypes;
        static EnchantedItemForEmeralds: $TradeTypes;
        static ItemsForEmeralds: $TradeTypes;
        static ForgeBasic: $TradeTypes;
        static EmeraldsForVillagerTypeItem: $TradeTypes;
        static SuspiciousStewForEmeralds: $TradeTypes;
        static TippedArrowForItemsAndEmeralds: $TradeTypes;
        static DyedArmorForEmeralds: $TradeTypes;
        static EmeraldForItems: $TradeTypes;
        static EnchantBookForEmeralds: $TradeTypes;
        static ItemsAndEmeraldsToItems: $TradeTypes;
    }
    /**
     * Values that may be interpreted as {@link $TradeTypes}.
     */
    export type $TradeTypes_ = "dyedarmorforemeralds" | "enchantbookforemeralds" | "enchanteditemforemeralds" | "itemsforemeralds" | "itemsandemeraldstoitems" | "emeraldforitems" | "tippedarrowforitemsandemeralds" | "suspiciousstewforemeralds" | "treasuremapforemeralds" | "emeraldsforvillagertypeitem" | "forgebasic";
}
