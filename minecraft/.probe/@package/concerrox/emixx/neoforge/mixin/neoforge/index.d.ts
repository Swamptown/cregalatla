import { $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/concerrox/emixx/neoforge/mixin/neoforge" {
    export class $BasicItemListingAccessor {
    }
    export interface $BasicItemListingAccessor {
        getPrice2(): $ItemStack;
        getForSale(): $ItemStack;
        getPrice(): $ItemStack;
        get price2(): $ItemStack;
        get forSale(): $ItemStack;
        get price(): $ItemStack;
    }
}
