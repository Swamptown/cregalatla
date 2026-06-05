import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack, $Item } from "@package/net/minecraft/world/item";
import { $Fraction } from "@package/org/apache/commons/lang3/math";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $List, $List_ } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as equipable from "@package/com/beansgalaxy/backpacks/components/equipable";

declare module "@package/com/beansgalaxy/backpacks/components" {
    export class $BulkComponent extends $Record {
        item(): $Holder<$Item>;
        isEmpty(): boolean;
        weight(): $Fraction;
        stacks(): $List<$BulkComponent$ItemlessStack>;
        static CODEC: $Codec<$BulkComponent>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BulkComponent>;
        constructor(arg0: $Holder_<$Item>, arg1: $List_<$BulkComponent$ItemlessStack_>);
        constructor(item: $Holder_<$Item>, stacks: $List_<$BulkComponent$ItemlessStack_>, weight: $Fraction);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BulkComponent}.
     */
    export type $BulkComponent_ = { stacks?: $List_<$BulkComponent$ItemlessStack_>, item?: $Holder_<$Item>, weight?: $Fraction,  } | [stacks?: $List_<$BulkComponent$ItemlessStack_>, item?: $Holder_<$Item>, weight?: $Fraction, ];
    export class $BulkComponent$ItemlessStack extends $Record {
        withItem(arg0: $Holder_<$Item>): $ItemStack;
        count(): number;
        patch(): $DataComponentPatch;
        static CODEC: $Codec<$BulkComponent$ItemlessStack>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BulkComponent$ItemlessStack>;
        constructor(patch: $DataComponentPatch_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $BulkComponent$ItemlessStack}.
     */
    export type $BulkComponent$ItemlessStack_ = { count?: number, patch?: $DataComponentPatch_,  } | [count?: number, patch?: $DataComponentPatch_, ];
}
