import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/stockTicker" {
    export class $PackageOrderWithCrafts$CraftingEntry extends $Record {
        count(): number;
        pattern(): $PackageOrder;
        static CODEC: $Codec<$PackageOrderWithCrafts$CraftingEntry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageOrderWithCrafts$CraftingEntry>;
        constructor(pattern: $PackageOrder_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $PackageOrderWithCrafts$CraftingEntry}.
     */
    export type $PackageOrderWithCrafts$CraftingEntry_ = { count?: number, pattern?: $PackageOrder_,  } | [count?: number, pattern?: $PackageOrder_, ];
    export class $PackageOrder extends $Record {
        isEmpty(): boolean;
        static empty(): $PackageOrder;
        stacks(): $List<$BigItemStack>;
        static CODEC: $Codec<$PackageOrder>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageOrder>;
        constructor(stacks: $List_<$BigItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $PackageOrder}.
     */
    export type $PackageOrder_ = { stacks?: $List_<$BigItemStack>,  } | [stacks?: $List_<$BigItemStack>, ];
    export class $PackageOrderWithCrafts extends $Record {
        orderedCrafts(): $List<$PackageOrderWithCrafts$CraftingEntry>;
        orderedStacksMatchOrderedRecipes(): boolean;
        static singleRecipe(arg0: $List_<$BigItemStack>): $PackageOrderWithCrafts;
        orderedStacks(): $PackageOrder;
        static hasCraftingInformation(arg0: $PackageOrderWithCrafts_): boolean;
        getCraftingInformation(): $List<$BigItemStack>;
        isEmpty(): boolean;
        static empty(): $PackageOrderWithCrafts;
        static simple(arg0: $List_<$BigItemStack>): $PackageOrderWithCrafts;
        stacks(): $List<$BigItemStack>;
        static CODEC: $Codec<$PackageOrderWithCrafts>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageOrderWithCrafts>;
        constructor(orderedStacks: $PackageOrder_, orderedCrafts: $List_<$PackageOrderWithCrafts$CraftingEntry_>);
        get craftingInformation(): $List<$BigItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $PackageOrderWithCrafts}.
     */
    export type $PackageOrderWithCrafts_ = { orderedCrafts?: $List_<$PackageOrderWithCrafts$CraftingEntry_>, orderedStacks?: $PackageOrder_,  } | [orderedCrafts?: $List_<$PackageOrderWithCrafts$CraftingEntry_>, orderedStacks?: $PackageOrder_, ];
}
