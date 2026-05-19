import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $MerchantOfferAccessor } from "@package/com/almostreliable/morejs/mixin/villager";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ArrayList, $SequencedCollection } from "@package/java/util";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPredicate, $DataComponentPredicate$Builder } from "@package/net/minecraft/core/component";
import { $OfferExtension } from "@package/com/almostreliable/morejs/features/villager";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/trading" {
    export class $MerchantOffer implements $MerchantOfferAccessor, $OfferExtension {
        morejs$setVillagerExperience(arg0: number): void;
        morejs$isDisabled(): boolean;
        morejs$setDisabled(arg0: boolean): void;
        getCostA(): $ItemStack;
        getCostB(): $ItemStack;
        getMaxUses(): number;
        getDemand(): number;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(arg0: number): void;
        isOutOfStock(): boolean;
        setToOutOfStock(): void;
        satisfiedBy(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static createFromStream(arg0: $RegistryFriendlyByteBuf): $MerchantOffer;
        morejs$self(): $MerchantOffer;
        morejs$getFirstCost(): $ItemStack;
        morejs$setFirstCost(arg0: $ItemStack_): void;
        morejs$getSecondCost(): $ItemStack;
        morejs$setSecondCost(arg0: $ItemStack_): void;
        morejs$getOutput(): $ItemStack;
        morejs$setOutput(arg0: $ItemStack_): void;
        morejs$setMaxUses(arg0: number): void;
        morejs$setDemand(arg0: number): void;
        morejs$setPriceMultiplier(arg0: number): void;
        morejs$setRewardExp(arg0: boolean): void;
        morejs$isRewardingExp(): boolean;
        static setCodec$morejs_$md$4ca6b6$0(arg0: $Codec<any>): void;
        assemble(): $ItemStack;
        getUses(): number;
        getXp(): number;
        resetSpecialPriceDiff(): void;
        updateDemand(): void;
        resetUses(): void;
        needsRestock(): boolean;
        getPriceMultiplier(): number;
        addToSpecialPriceDiff(arg0: number): void;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        getItemCostA(): $ItemCost;
        getItemCostB(): ($ItemCost) | undefined;
        increaseUses(): void;
        getResult(): $ItemStack;
        take(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        copy(): $MerchantOffer;
        replaceEmeralds(arg0: $Item_): void;
        replaceItems(arg0: $Ingredient_, arg1: $ItemStack_): void;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        get costA(): $ItemStack;
        get costB(): $ItemStack;
        get maxUses(): number;
        get demand(): number;
        get outOfStock(): boolean;
        static set codec$morejs_$md$4ca6b6$0(value: $Codec<any>);
        get uses(): number;
        get xp(): number;
        get priceMultiplier(): number;
        get baseCostA(): $ItemStack;
        get itemCostA(): $ItemCost;
        get itemCostB(): ($ItemCost) | undefined;
        get result(): $ItemStack;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        getRecipeFor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): $MerchantOffer;
        copy(): $MerchantOffers;
        reversed(): $SequencedCollection<$MerchantOffer>;
        static CODEC: $Codec<$MerchantOffers>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffers>;
        constructor();
    }
    export class $Merchant {
    }
    export interface $Merchant {
        getOffers(): $MerchantOffers;
        getVillagerXp(): number;
        setTradingPlayer(arg0: $Player): void;
        openTradingScreen(arg0: $Player, arg1: $Component_, arg2: number): void;
        getTradingPlayer(): $Player;
        canRestock(): boolean;
        showProgressBar(): boolean;
        overrideOffers(arg0: $MerchantOffers): void;
        overrideXp(arg0: number): void;
        notifyTrade(arg0: $MerchantOffer): void;
        notifyTradeUpdated(arg0: $ItemStack_): void;
        getNotifyTradeSound(): $SoundEvent;
        isClientSide(): boolean;
        get offers(): $MerchantOffers;
        get villagerXp(): number;
        get notifyTradeSound(): $SoundEvent;
        get clientSide(): boolean;
    }
    export class $ItemCost extends $Record {
        withComponents(arg0: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        item(): $Holder<$Item>;
        test(arg0: $ItemStack_): boolean;
        count(): number;
        components(): $DataComponentPredicate;
        itemStack(): $ItemStack;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $ItemLike_);
        constructor(arg0: $ItemLike_, arg1: number);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $ItemCost}.
     */
    export type $ItemCost_ = { count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_, item?: $Holder_<$Item>,  } | [count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_, item?: $Holder_<$Item>, ];
}
