import { $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Wolf } from "@package/net/minecraft/world/entity/animal";

declare module "@package/com/blackgear/vanillabackport/common/api/wolf" {
    export class $WolfSoundVariantHolder {
        static of(wolf: $Wolf): $WolfSoundVariantHolder;
    }
    export interface $WolfSoundVariantHolder {
        getSoundVariant(): $WolfSoundVariant;
        setSoundVariant(arg0: $WolfSoundVariant_): void;
    }
    export class $WolfSoundVariant extends $Record {
        ambientSound(): $Holder<$SoundEvent>;
        deathSound(): $Holder<$SoundEvent>;
        growlSound(): $Holder<$SoundEvent>;
        hurtSound(): $Holder<$SoundEvent>;
        pantSound(): $Holder<$SoundEvent>;
        whineSound(): $Holder<$SoundEvent>;
        static CODEC: $Codec<$WolfSoundVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WolfSoundVariant>;
        constructor(ambientSound: $SoundEvent_, deathSound: $SoundEvent_, growlSound: $SoundEvent_, hurtSound: $SoundEvent_, pantSound: $SoundEvent_, whineSound: $SoundEvent_);
        constructor(ambientSound: $Holder_<$SoundEvent>, deathSound: $Holder_<$SoundEvent>, growlSound: $Holder_<$SoundEvent>, hurtSound: $Holder_<$SoundEvent>, pantSound: $Holder_<$SoundEvent>, whineSound: $Holder_<$SoundEvent>);
    }
    /**
     * Values that may be interpreted as {@link $WolfSoundVariant}.
     */
    export type $WolfSoundVariant_ = { pantSound?: $Holder_<$SoundEvent>, hurtSound?: $Holder_<$SoundEvent>, whineSound?: $Holder_<$SoundEvent>, deathSound?: $Holder_<$SoundEvent>, growlSound?: $Holder_<$SoundEvent>, ambientSound?: $Holder_<$SoundEvent>,  } | [pantSound?: $Holder_<$SoundEvent>, hurtSound?: $Holder_<$SoundEvent>, whineSound?: $Holder_<$SoundEvent>, deathSound?: $Holder_<$SoundEvent>, growlSound?: $Holder_<$SoundEvent>, ambientSound?: $Holder_<$SoundEvent>, ];
}
