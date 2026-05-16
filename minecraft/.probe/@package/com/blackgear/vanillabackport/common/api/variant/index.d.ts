import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as spawn from "@package/com/blackgear/vanillabackport/common/api/variant/spawn";

declare module "@package/com/blackgear/vanillabackport/common/api/variant" {
    export class $VariantDataHolder<T> {
        static trySetOffspringVariant<A, B>(child: $LivingEntity, father: $LivingEntity, mother: $LivingEntity): void;
        static getHolder<T>(entity: $LivingEntity): $VariantDataHolder<T>;
    }
    export interface $VariantDataHolder<T> {
        setVariantData(arg0: T): void;
        getVariantData(): (T) | undefined;
    }
    export class $ClientAsset extends $Record {
        id(): $ResourceLocation;
        path(): $ResourceLocation;
        static CODEC: $Codec<$ClientAsset>;
        static DEFAULT_FIELD_CODEC: $MapCodec<$ClientAsset>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClientAsset>;
        constructor(path: $ResourceLocation_);
        constructor(id: $ResourceLocation_, path: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ClientAsset}.
     */
    export type $ClientAsset_ = { id?: $ResourceLocation_, path?: $ResourceLocation_,  } | [id?: $ResourceLocation_, path?: $ResourceLocation_, ];
    export class $ModelAndTexture<T> extends $Record {
        model(): T;
        asset(): $ClientAsset;
        static streamCodec<T>(modelCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>): $StreamCodec<$RegistryFriendlyByteBuf, $ModelAndTexture<T>>;
        static codec<T>(codec: $Codec<T>, entry: T): $MapCodec<$ModelAndTexture<T>>;
        constructor(model: T, path: $ResourceLocation_);
        constructor(model: T, asset: $ClientAsset_);
    }
    /**
     * Values that may be interpreted as {@link $ModelAndTexture}.
     */
    export type $ModelAndTexture_<T> = { asset?: $ClientAsset_, model?: any,  } | [asset?: $ClientAsset_, model?: any, ];
}
