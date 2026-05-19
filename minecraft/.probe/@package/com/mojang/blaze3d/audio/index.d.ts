import { $ChannelAccessor } from "@package/dev/ryanhcode/sable/mixin/sublevel_sounds";
import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $List, $OptionalInt } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/mojang/blaze3d/audio" {
    export class $Library$CountingChannelPool implements $Library$ChannelPool {
    }
    export class $ListenerTransform extends $Record {
        up(): $Vec3;
        position(): $Vec3;
        right(): $Vec3;
        forward(): $Vec3;
        static INITIAL: $ListenerTransform;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ListenerTransform}.
     */
    export type $ListenerTransform_ = { up?: $Vec3_, position?: $Vec3_, forward?: $Vec3_,  } | [up?: $Vec3_, position?: $Vec3_, forward?: $Vec3_, ];
    export class $Library {
        getDebugString(): string;
        getListener(): $Listener;
        init(arg0: string, arg1: boolean): void;
        cleanup(): void;
        getAvailableSoundDevices(): $List<string>;
        static getDefaultDeviceName(): string;
        acquireChannel(arg0: $Library$Pool_): $Channel;
        releaseChannel(arg0: $Channel): void;
        isCurrentDeviceDisconnected(): boolean;
        hasDefaultDeviceChanged(): boolean;
        getCurrentDeviceName(): string;
        constructor();
        get debugString(): string;
        get listener(): $Listener;
        get availableSoundDevices(): $List<string>;
        static get defaultDeviceName(): string;
        get currentDeviceDisconnected(): boolean;
        get currentDeviceName(): string;
    }
    export class $Library$Pool extends $Enum<$Library$Pool> {
        static values(): $Library$Pool[];
        static valueOf(arg0: string): $Library$Pool;
        static STREAMING: $Library$Pool;
        static STATIC: $Library$Pool;
    }
    /**
     * Values that may be interpreted as {@link $Library$Pool}.
     */
    export type $Library$Pool_ = "static" | "streaming";
    export class $Library$ChannelPool {
    }
    export interface $Library$ChannelPool {
    }
    export class $Listener {
        setTransform(arg0: $ListenerTransform_): void;
        getTransform(): $ListenerTransform;
        reset(): void;
        setGain(arg0: number): void;
        getGain(): number;
        constructor();
    }
    export class $OpenAlUtil {
        constructor();
    }
    export class $Channel implements $ChannelAccessor {
        playing(): boolean;
        setLooping(arg0: boolean): void;
        unpause(): void;
        setPitch(arg0: number): void;
        setRelative(arg0: boolean): void;
        stop(): void;
        destroy(): void;
        stopped(): boolean;
        play(): void;
        setVolume(arg0: number): void;
        pause(): void;
        attachBufferStream(arg0: $AudioStream): void;
        attachStaticBuffer(arg0: $SoundBuffer): void;
        linearAttenuation(arg0: number): void;
        disableAttenuation(): void;
        setSelfPosition(arg0: $Vec3_): void;
        updateStream(): void;
        getSource(): number;
        static BUFFER_DURATION_SECONDS: number;
        set looping(value: boolean);
        set pitch(value: number);
        set relative(value: boolean);
        set volume(value: number);
        set selfPosition(value: $Vec3_);
        get source(): number;
    }
    export class $SoundBuffer {
        releaseAlBuffer(): $OptionalInt;
        discardAlBuffer(): void;
        constructor(arg0: $ByteBuffer, arg1: $AudioFormat);
    }
}
