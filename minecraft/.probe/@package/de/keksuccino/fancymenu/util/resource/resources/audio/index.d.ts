import { $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $PlayableResource } from "@package/de/keksuccino/fancymenu/util/resource";

declare module "@package/de/keksuccino/fancymenu/util/resource/resources/audio" {
    export class $PlayableResourceWithAudio {
    }
    export interface $PlayableResourceWithAudio extends $PlayableResource {
        getVolume(): number;
        setVolume(arg0: number): void;
    }
    export class $IAudio {
    }
    export interface $IAudio extends $PlayableResourceWithAudio {
        setSoundChannel(arg0: $SoundSource_): void;
        getSoundChannel(): $SoundSource;
        getPlayTime(): number;
        getDuration(): number;
        setPlayTime(arg0: number): void;
        play(): void;
        get duration(): number;
    }
}
