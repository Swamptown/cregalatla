import { $ArmorMaterial, $Item_, $Item, $ItemStack_, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $Map_, $Map } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $Holder_, $Holder$Reference, $Holder } from "@package/net/minecraft/core";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/armortrim" {
    export class $TrimMaterial extends $Record {
        ingredient(): $Holder<$Item>;
        itemModelIndex(): number;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        assetName(): string;
        static create(arg0: string, arg1: $Item_, arg2: number, arg3: $Component_, arg4: $Map_<$Holder_<$ArmorMaterial>, string>): $TrimMaterial;
        description(): $Component;
        static CODEC: $Codec<$Holder<$TrimMaterial>>;
        static DIRECT_CODEC: $Codec<$TrimMaterial>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimMaterial>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimMaterial>>;
        constructor(arg0: string, arg1: $Holder_<$Item>, arg2: number, arg3: $Map_<$Holder_<$ArmorMaterial>, string>, arg4: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $TrimMaterial}.
     */
    export type $TrimMaterial_ = RegistryTypes.TrimMaterial | { itemModelIndex?: number, assetName?: string, description?: $Component_, ingredient?: $Holder_<$Item>, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>,  } | [itemModelIndex?: number, assetName?: string, description?: $Component_, ingredient?: $Holder_<$Item>, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ];
    export class $TrimPattern extends $Record {
        assetId(): $ResourceLocation;
        decal(): boolean;
        templateItem(): $Holder<$Item>;
        copyWithStyle(arg0: $Holder_<$TrimMaterial>): $Component;
        description(): $Component;
        static CODEC: $Codec<$Holder<$TrimPattern>>;
        static DIRECT_CODEC: $Codec<$TrimPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Item>, arg2: $Component_, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TrimPattern}.
     */
    export type $TrimPattern_ = RegistryTypes.TrimPattern | { decal?: boolean, templateItem?: $Holder_<$Item>, description?: $Component_, assetId?: $ResourceLocation_,  } | [decal?: boolean, templateItem?: $Holder_<$Item>, description?: $Component_, assetId?: $ResourceLocation_, ];
    export class $TrimPatterns {
        static getFromTemplate(arg0: $HolderLookup$Provider, arg1: $ItemStack_): ($Holder$Reference<$TrimPattern>) | undefined;
        static register(arg0: $BootstrapContext<$TrimPattern_>, arg1: $Item_, arg2: $ResourceKey_<$TrimPattern>): void;
        static bootstrap(arg0: $BootstrapContext<$TrimPattern_>): void;
        static WAYFINDER: $ResourceKey<$TrimPattern>;
        static WILD: $ResourceKey<$TrimPattern>;
        static COAST: $ResourceKey<$TrimPattern>;
        static SNOUT: $ResourceKey<$TrimPattern>;
        static RAISER: $ResourceKey<$TrimPattern>;
        static SHAPER: $ResourceKey<$TrimPattern>;
        static SILENCE: $ResourceKey<$TrimPattern>;
        static DUNE: $ResourceKey<$TrimPattern>;
        static VEX: $ResourceKey<$TrimPattern>;
        static SPIRE: $ResourceKey<$TrimPattern>;
        static HOST: $ResourceKey<$TrimPattern>;
        static RIB: $ResourceKey<$TrimPattern>;
        static BOLT: $ResourceKey<$TrimPattern>;
        static SENTRY: $ResourceKey<$TrimPattern>;
        static FLOW: $ResourceKey<$TrimPattern>;
        static EYE: $ResourceKey<$TrimPattern>;
        static TIDE: $ResourceKey<$TrimPattern>;
        static WARD: $ResourceKey<$TrimPattern>;
        constructor();
    }
    export interface $TrimMaterial extends RegistryMarked<RegistryTypes.TrimMaterialTag, RegistryTypes.TrimMaterial> {}
    export class $ArmorTrim implements $TooltipProvider {
        addToTooltip(arg0: $Item$TooltipContext, arg1: $Consumer_<$Component>, arg2: $TooltipFlag): void;
        material(): $Holder<$TrimMaterial>;
        withTooltip(arg0: boolean): $ArmorTrim;
        innerTexture(arg0: $Holder_<$ArmorMaterial>): $ResourceLocation;
        outerTexture(arg0: $Holder_<$ArmorMaterial>): $ResourceLocation;
        hasPatternAndMaterial(arg0: $Holder_<$TrimPattern>, arg1: $Holder_<$TrimMaterial>): boolean;
        pattern(): $Holder<$TrimPattern>;
        static CODEC: $Codec<$ArmorTrim>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ArmorTrim>;
        constructor(arg0: $Holder_<$TrimMaterial>, arg1: $Holder_<$TrimPattern>, arg2: boolean);
        constructor(arg0: $Holder_<$TrimMaterial>, arg1: $Holder_<$TrimPattern>);
    }
    export class $TrimMaterials {
        static getFromIngredient(arg0: $HolderLookup$Provider, arg1: $ItemStack_): ($Holder$Reference<$TrimMaterial>) | undefined;
        static bootstrap(arg0: $BootstrapContext<$TrimMaterial_>): void;
        static GOLD: $ResourceKey<$TrimMaterial>;
        static EMERALD: $ResourceKey<$TrimMaterial>;
        static AMETHYST: $ResourceKey<$TrimMaterial>;
        static NETHERITE: $ResourceKey<$TrimMaterial>;
        static REDSTONE: $ResourceKey<$TrimMaterial>;
        static DIAMOND: $ResourceKey<$TrimMaterial>;
        static LAPIS: $ResourceKey<$TrimMaterial>;
        static IRON: $ResourceKey<$TrimMaterial>;
        static COPPER: $ResourceKey<$TrimMaterial>;
        static QUARTZ: $ResourceKey<$TrimMaterial>;
        constructor();
    }
    export interface $TrimPattern extends RegistryMarked<RegistryTypes.TrimPatternTag, RegistryTypes.TrimPattern> {}
}
