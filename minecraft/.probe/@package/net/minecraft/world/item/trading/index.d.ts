import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ArrayList, $SequencedCollection } from "@package/java/util";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPredicate$Builder, $DataComponentPredicate } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/trading" {
    export class $MerchantOffer {
        copy(): $MerchantOffer;
        getResult(): $ItemStack;
        take(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        static createFromStream(arg0: $RegistryFriendlyByteBuf): $MerchantOffer;
        satisfiedBy(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        getDemand(): number;
        getUses(): number;
        assemble(): $ItemStack;
        getXp(): number;
        resetSpecialPriceDiff(): void;
        updateDemand(): void;
        resetUses(): void;
        needsRestock(): boolean;
        getPriceMultiplier(): number;
        addToSpecialPriceDiff(arg0: number): void;
        getBaseCostA(): $ItemStack;
        shouldRewardExp(): boolean;
        increaseUses(): void;
        getItemCostA(): $ItemCost;
        getItemCostB(): ($ItemCost) | undefined;
        getMaxUses(): number;
        getSpecialPriceDiff(): number;
        setSpecialPriceDiff(arg0: number): void;
        setToOutOfStock(): void;
        isOutOfStock(): boolean;
        getCostA(): $ItemStack;
        getCostB(): $ItemStack;
        static CODEC: $Codec<$MerchantOffer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MerchantOffer>;
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $ItemCost_, arg1: $ItemStack_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ItemCost_, arg1: ($ItemCost_) | undefined, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number);
        get result(): $ItemStack;
        get demand(): number;
        get uses(): number;
        get xp(): number;
        get priceMultiplier(): number;
        get baseCostA(): $ItemStack;
        get itemCostA(): $ItemCost;
        get itemCostB(): ($ItemCost) | undefined;
        get maxUses(): number;
        get outOfStock(): boolean;
        get costA(): $ItemStack;
        get costB(): $ItemStack;
    }
    export class $MerchantOffers extends $ArrayList<$MerchantOffer> {
        copy(): $MerchantOffers;
        getRecipeFor(arg0: $ItemStack_, arg1: $ItemStack_, arg2: number): $MerchantOffer;
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
        test(arg0: $ItemStack_): boolean;
        count(): number;
        item(): $Holder<$Item>;
        withComponents(arg0: $UnaryOperator_<$DataComponentPredicate$Builder>): $ItemCost;
        components(): $DataComponentPredicate;
        itemStack(): $ItemStack;
        static CODEC: $Codec<$ItemCost>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($ItemCost) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemCost>;
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate, arg3: $ItemStack_);
        constructor(arg0: $Holder_<$Item>, arg1: number, arg2: $DataComponentPredicate);
        constructor(arg0: $ItemLike_, arg1: number);
        constructor(arg0: $ItemLike_);
    }
    /**
     * Values that may be interpreted as {@link $ItemCost}.
     */
    export type $ItemCost_ = { count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_, item?: $Holder_<$Item>,  } | [count?: number, components?: $DataComponentPredicate, itemStack?: $ItemStack_, item?: $Holder_<$Item>, ];
}
