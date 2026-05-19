import { $Codec } from "@package/com/mojang/serialization";
import { $SpawnPrioritySelectors_, $PriorityProvider, $SpawnCondition, $SpawnContext, $SpawnPrioritySelectors, $PriorityProvider$Selector } from "@package/com/blackgear/vanillabackport/common/api/variant/spawn";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $List } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $ModelAndTexture_, $ClientAsset, $ModelAndTexture, $ClientAsset_ } from "@package/com/blackgear/vanillabackport/common/api/variant";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/blackgear/vanillabackport/common/level/entities/animal" {
    export class $WolfDataVariant$AssetInfo extends $Record {
        angry(): $ClientAsset;
        wild(): $ClientAsset;
        tame(): $ClientAsset;
        static CODEC: $Codec<$WolfDataVariant$AssetInfo>;
        constructor(wild: $ClientAsset_, tame: $ClientAsset_, angry: $ClientAsset_);
    }
    /**
     * Values that may be interpreted as {@link $WolfDataVariant$AssetInfo}.
     */
    export type $WolfDataVariant$AssetInfo_ = { wild?: $ClientAsset_, angry?: $ClientAsset_, tame?: $ClientAsset_,  } | [wild?: $ClientAsset_, angry?: $ClientAsset_, tame?: $ClientAsset_, ];
    export class $CatDataVariant extends $Record implements $PriorityProvider<$SpawnContext, $SpawnCondition> {
        assetInfo(): $ClientAsset;
        spawnConditions(): $SpawnPrioritySelectors;
        selectors(): $List<$PriorityProvider$Selector<$SpawnContext, $SpawnCondition>>;
        static CODEC: $Codec<$CatDataVariant>;
        constructor(assetInfo: $ClientAsset_, spawnConditions: $SpawnPrioritySelectors_);
    }
    /**
     * Values that may be interpreted as {@link $CatDataVariant}.
     */
    export type $CatDataVariant_ = { spawnConditions?: $SpawnPrioritySelectors_, assetInfo?: $ClientAsset_,  } | [spawnConditions?: $SpawnPrioritySelectors_, assetInfo?: $ClientAsset_, ];
    export class $WolfDataVariant extends $Record implements $PriorityProvider<$SpawnContext, $SpawnCondition> {
        assetInfo(): $WolfDataVariant$AssetInfo;
        spawnConditions(): $SpawnPrioritySelectors;
        selectors(): $List<$PriorityProvider$Selector<$SpawnContext, $SpawnCondition>>;
        static CODEC: $Codec<$WolfDataVariant>;
        constructor(assetInfo: $WolfDataVariant$AssetInfo_, spawnConditions: $SpawnPrioritySelectors_);
    }
    /**
     * Values that may be interpreted as {@link $WolfDataVariant}.
     */
    export type $WolfDataVariant_ = { spawnConditions?: $SpawnPrioritySelectors_, assetInfo?: $WolfDataVariant$AssetInfo_,  } | [spawnConditions?: $SpawnPrioritySelectors_, assetInfo?: $WolfDataVariant$AssetInfo_, ];
    export class $FrogDataVariant extends $Record implements $PriorityProvider<$SpawnContext, $SpawnCondition> {
        assetInfo(): $ClientAsset;
        spawnConditions(): $SpawnPrioritySelectors;
        selectors(): $List<$PriorityProvider$Selector<$SpawnContext, $SpawnCondition>>;
        static CODEC: $Codec<$FrogDataVariant>;
        constructor(assetInfo: $ClientAsset_, spawnConditions: $SpawnPrioritySelectors_);
    }
    /**
     * Values that may be interpreted as {@link $FrogDataVariant}.
     */
    export type $FrogDataVariant_ = { spawnConditions?: $SpawnPrioritySelectors_, assetInfo?: $ClientAsset_,  } | [spawnConditions?: $SpawnPrioritySelectors_, assetInfo?: $ClientAsset_, ];
    export class $PigVariant$ModelType extends $Enum<$PigVariant$ModelType> implements $StringRepresentable {
        static values(): $PigVariant$ModelType[];
        static valueOf(name: string): $PigVariant$ModelType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$PigVariant$ModelType>;
        static COLD: $PigVariant$ModelType;
        static NORMAL: $PigVariant$ModelType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PigVariant$ModelType}.
     */
    export type $PigVariant$ModelType_ = "normal" | "cold";
    export class $ChickenVariant extends $Record implements $PriorityProvider<$SpawnContext, $SpawnCondition> {
        modelAndTexture(): $ModelAndTexture<$ChickenVariant$ModelType>;
        spawnConditions(): $SpawnPrioritySelectors;
        selectors(): $List<$PriorityProvider$Selector<$SpawnContext, $SpawnCondition>>;
        static CODEC: $Codec<$ChickenVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChickenVariant>;
        constructor(modelAndTexture: $ModelAndTexture_<$ChickenVariant$ModelType_>, spawnConditions: $SpawnPrioritySelectors_);
    }
    /**
     * Values that may be interpreted as {@link $ChickenVariant}.
     */
    export type $ChickenVariant_ = { spawnConditions?: $SpawnPrioritySelectors_, modelAndTexture?: $ModelAndTexture_<$ChickenVariant$ModelType_>,  } | [spawnConditions?: $SpawnPrioritySelectors_, modelAndTexture?: $ModelAndTexture_<$ChickenVariant$ModelType_>, ];
    export class $CowVariant extends $Record implements $PriorityProvider<$SpawnContext, $SpawnCondition> {
        modelAndTexture(): $ModelAndTexture<$CowVariant$ModelType>;
        spawnConditions(): $SpawnPrioritySelectors;
        selectors(): $List<$PriorityProvider$Selector<$SpawnContext, $SpawnCondition>>;
        static CODEC: $Codec<$CowVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CowVariant>;
        constructor(modelAndTexture: $ModelAndTexture_<$CowVariant$ModelType_>, spawnConditions: $SpawnPrioritySelectors_);
    }
    /**
     * Values that may be interpreted as {@link $CowVariant}.
     */
    export type $CowVariant_ = { spawnConditions?: $SpawnPrioritySelectors_, modelAndTexture?: $ModelAndTexture_<$CowVariant$ModelType_>,  } | [spawnConditions?: $SpawnPrioritySelectors_, modelAndTexture?: $ModelAndTexture_<$CowVariant$ModelType_>, ];
    export class $ChickenVariant$ModelType extends $Enum<$ChickenVariant$ModelType> implements $StringRepresentable {
        static values(): $ChickenVariant$ModelType[];
        static valueOf(name: string): $ChickenVariant$ModelType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ChickenVariant$ModelType>;
        static COLD: $ChickenVariant$ModelType;
        static NORMAL: $ChickenVariant$ModelType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChickenVariant$ModelType}.
     */
    export type $ChickenVariant$ModelType_ = "normal" | "cold";
    export class $CowVariant$ModelType extends $Enum<$CowVariant$ModelType> implements $StringRepresentable {
        static values(): $CowVariant$ModelType[];
        static valueOf(name: string): $CowVariant$ModelType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CowVariant$ModelType>;
        static COLD: $CowVariant$ModelType;
        static WARM: $CowVariant$ModelType;
        static NORMAL: $CowVariant$ModelType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CowVariant$ModelType}.
     */
    export type $CowVariant$ModelType_ = "normal" | "cold" | "warm";
    export class $PigVariant extends $Record implements $PriorityProvider<$SpawnContext, $SpawnCondition> {
        modelAndTexture(): $ModelAndTexture<$PigVariant$ModelType>;
        spawnConditions(): $SpawnPrioritySelectors;
        selectors(): $List<$PriorityProvider$Selector<$SpawnContext, $SpawnCondition>>;
        static CODEC: $Codec<$PigVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PigVariant>;
        constructor(modelAndTexture: $ModelAndTexture_<$PigVariant$ModelType_>, spawnConditions: $SpawnPrioritySelectors_);
    }
    /**
     * Values that may be interpreted as {@link $PigVariant}.
     */
    export type $PigVariant_ = { spawnConditions?: $SpawnPrioritySelectors_, modelAndTexture?: $ModelAndTexture_<$PigVariant$ModelType_>,  } | [spawnConditions?: $SpawnPrioritySelectors_, modelAndTexture?: $ModelAndTexture_<$PigVariant$ModelType_>, ];
}
