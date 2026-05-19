import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Record } from "@package/java/lang";

declare module "@package/io/github/mortuusars/exposure/world/sound" {
    export class $SoundEffect extends $Record {
        pitchVariability(): number;
        getFinalPitch(): number;
        get(): $SoundEvent;
        volume(): number;
        sound(): $Supplier<$SoundEvent>;
        pitch(): number;
        constructor(sound: $Supplier_<$SoundEvent>, volume: number, pitch: number);
        constructor(sound: $Supplier_<$SoundEvent>, volume: number, pitch: number, pitchVariability: number);
        constructor(sound: $Supplier_<$SoundEvent>, volume: number);
        constructor(sound: $Supplier_<$SoundEvent>);
        get finalPitch(): number;
    }
    /**
     * Values that may be interpreted as {@link $SoundEffect}.
     */
    export type $SoundEffect_ = { pitchVariability?: number, pitch?: number, sound?: $Supplier_<$SoundEvent>, volume?: number,  } | [pitchVariability?: number, pitch?: number, sound?: $Supplier_<$SoundEvent>, volume?: number, ];
}
