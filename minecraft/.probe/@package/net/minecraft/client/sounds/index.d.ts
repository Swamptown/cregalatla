import { $IMixinMusicManager } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $IMixinSoundEngine, $IMixinSoundManager } from "@package/de/keksuccino/melody/mixin/mixins/common/client";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $SoundBuffer, $ListenerTransform, $Library$Pool_, $Library, $Channel } from "@package/com/mojang/blaze3d/audio";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ResourceManager, $SimplePreparableReloadListener, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $List, $Collection_, $Collection, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Runnable } from "@package/java/lang";
import { $SoundEngineAccessor, $SoundManagerAccessor } from "@package/com/blackgear/vanillabackport/core/mixin/access";
import { $FilterInputStream, $InputStream, $Closeable } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $MusicManagerAccessor } from "@package/dev/eriksonn/aeronautics/mixin/custom_situational_music";
import { $FloatConsumer_, $FloatConsumer } from "@package/it/unimi/dsi/fastutil/floats";
import { $DuckSoundEngine } from "@package/dynamic_fps/impl/util/duck";
import { $Stream } from "@package/java/util/stream";
import { $BlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/client/sounds" {
    export class $SoundEventListener {
    }
    export interface $SoundEventListener {
        onPlaySound(arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SoundEventListener}.
     */
    export type $SoundEventListener_ = ((arg0: $SoundInstance, arg1: $WeighedSoundEvents, arg2: number) => void);
    export class $SoundEngineExecutor extends $BlockableEventLoop<$Runnable> {
        flush(): void;
        constructor();
    }
    export class $LoopingAudioStream$NoCloseBuffer extends $FilterInputStream {
    }
    export class $SoundEngine$DeviceCheckState extends $Enum<$SoundEngine$DeviceCheckState> {
    }
    /**
     * Values that may be interpreted as {@link $SoundEngine$DeviceCheckState}.
     */
    export type $SoundEngine$DeviceCheckState_ = "ongoing" | "change_detected" | "no_change";
    export class $LoopingAudioStream$AudioStreamProvider {
    }
    export interface $LoopingAudioStream$AudioStreamProvider {
        create(arg0: $InputStream): $AudioStream;
    }
    /**
     * Values that may be interpreted as {@link $LoopingAudioStream$AudioStreamProvider}.
     */
    export type $LoopingAudioStream$AudioStreamProvider_ = ((arg0: $InputStream) => $AudioStream);
    export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $IMixinSoundManager, $SoundManagerAccessor, $IdentifiableResourceReloadListener {
        apply(arg0: $SoundManager$Preparations, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        stop(arg0: $SoundInstance): void;
        stop(): void;
        stop(arg0: $ResourceLocation_, arg1: $SoundSource_): void;
        destroy(): void;
        prepare(arg0: $ResourceManager, arg1: $ProfilerFiller): $SoundManager$Preparations;
        isActive(arg0: $SoundInstance): boolean;
        tick(arg0: boolean): void;
        reload(): void;
        getAvailableSounds(): $Collection<$ResourceLocation>;
        getListenerTransform(): $ListenerTransform;
        static validateSoundResource(arg0: $Sound, arg1: $ResourceLocation_, arg2: $ResourceProvider_): boolean;
        getDebugString(): string;
        getSoundEvent(arg0: $ResourceLocation_): $WeighedSoundEvents;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        removeListener(arg0: $SoundEventListener_): void;
        addListener(arg0: $SoundEventListener_): void;
        playDelayed(arg0: $SoundInstance, arg1: number): void;
        play(arg0: $SoundInstance): void;
        pause(): void;
        emergencyShutdown(): void;
        resume(): void;
        updateSource(arg0: $Camera): void;
        queueTickingSound(arg0: $TickableSoundInstance): void;
        updateSourceVolume(arg0: $SoundSource_, arg1: number): void;
        getAvailableSoundDevices(): $List<string>;
        getSoundEngineMelody(): $SoundEngine;
        getSoundEngine(): $SoundEngine;
        static EMPTY_SOUND: $Sound;
        static INTENTIONALLY_EMPTY_SOUND_EVENT: $WeighedSoundEvents;
        static EMPTY_SOUND_LOCATION: $ResourceLocation;
        soundEngine: $SoundEngine;
        static LOGGER: $Logger;
        static INTENTIONALLY_EMPTY_SOUND_LOCATION: $ResourceLocation;
        static INTENTIONALLY_EMPTY_SOUND: $Sound;
        constructor(arg0: $Options);
        get availableSounds(): $Collection<$ResourceLocation>;
        get listenerTransform(): $ListenerTransform;
        get debugString(): string;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get availableSoundDevices(): $List<string>;
        get soundEngineMelody(): $SoundEngine;
    }
    export class $LoopingAudioStream implements $AudioStream {
        close(): void;
        read(arg0: number): $ByteBuffer;
        getFormat(): $AudioFormat;
        constructor(arg0: $LoopingAudioStream$AudioStreamProvider_, arg1: $InputStream);
        get format(): $AudioFormat;
    }
    export class $ChannelAccess$ChannelHandle {
        execute(arg0: $Consumer_<$Channel>): void;
        release(): void;
        isStopped(): boolean;
        this$0: $ChannelAccess;
        channel: $Channel;
        constructor(arg0: $ChannelAccess, arg1: $Channel);
        get stopped(): boolean;
    }
    export class $AudioStream {
    }
    export interface $AudioStream extends $Closeable {
        read(arg0: number): $ByteBuffer;
        getFormat(): $AudioFormat;
        get format(): $AudioFormat;
    }
    export class $SoundEngine implements $IMixinSoundEngine, $SoundEngineAccessor, $DuckSoundEngine {
        stop(arg0: $ResourceLocation_, arg1: $SoundSource_): void;
        stop(arg0: $SoundInstance): void;
        destroy(): void;
        isActive(arg0: $SoundInstance): boolean;
        tick(arg0: boolean): void;
        reload(): void;
        dynamic_fps$updateVolume(source: $SoundSource_): void;
        getListenerTransform(): $ListenerTransform;
        updateCategoryVolume(arg0: $SoundSource_, arg1: number): void;
        getDebugString(): string;
        removeEventListener(arg0: $SoundEventListener_): void;
        addEventListener(arg0: $SoundEventListener_): void;
        stopAll(): void;
        playDelayed(arg0: $SoundInstance, arg1: number): void;
        play(arg0: $SoundInstance): void;
        pause(): void;
        emergencyShutdown(): void;
        resume(): void;
        updateSource(arg0: $Camera): void;
        queueTickingSound(arg0: $TickableSoundInstance): void;
        getAvailableSoundDevices(): $List<string>;
        requestPreload(arg0: $Sound): void;
        isLoaded(): boolean;
        getLoadedMelody(): boolean;
        getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        callCalculateVolume(arg0: $SoundInstance): number;
        static MISSING_SOUND: string;
        soundManager: $SoundManager;
        static OPEN_AL_SOFT_PREFIX: string;
        static OPEN_AL_SOFT_PREFIX_LENGTH: number;
        constructor(arg0: $SoundManager, arg1: $Options, arg2: $ResourceProvider_);
        get listenerTransform(): $ListenerTransform;
        get debugString(): string;
        get availableSoundDevices(): $List<string>;
        get loaded(): boolean;
        get loadedMelody(): boolean;
        get instanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
    }
    export class $SoundBufferLibrary {
        clear(): void;
        getStream(arg0: $ResourceLocation_, arg1: boolean): $CompletableFuture<$AudioStream>;
        preload(arg0: $Collection_<$Sound>): $CompletableFuture<never>;
        getCompleteBuffer(arg0: $ResourceLocation_): $CompletableFuture<$SoundBuffer>;
        constructor(arg0: $ResourceProvider_);
    }
    export class $ChunkedSampleByteBuf implements $FloatConsumer {
        size(): number;
        get(): $ByteBuffer;
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<number>): $Consumer<number>;
        andThen(arg0: $FloatConsumer_): $FloatConsumer;
        constructor(arg0: number);
    }
    export class $Weighted<T> {
    }
    export interface $Weighted<T> {
        getWeight(): number;
        getSound(arg0: $RandomSource): T;
        preloadIfRequired(arg0: $SoundEngine): void;
        get weight(): number;
    }
    export class $JOrbisAudioStream implements $FloatSampleSource {
        close(): void;
        getFormat(): $AudioFormat;
        readChunk(arg0: $FloatConsumer_): boolean;
        read(arg0: number): $ByteBuffer;
        readAll(): $ByteBuffer;
        constructor(arg0: $InputStream);
        get format(): $AudioFormat;
    }
    export class $SoundManager$Preparations {
    }
    export class $MusicManager implements $MusicManagerAccessor, $IMixinMusicManager {
        tick(): void;
        startPlaying(arg0: $Music): void;
        isPlayingMusic(arg0: $Music): boolean;
        stopPlaying(arg0: $Music): void;
        stopPlaying(): void;
        getNextSongDelay(): number;
        setNextSongDelay(arg0: number): void;
        getCurrentMusic(): $SoundInstance;
        getCurrentMusic_FancyMenu(): $SoundInstance;
        constructor(arg0: $Minecraft);
        get currentMusic(): $SoundInstance;
        get currentMusic_FancyMenu(): $SoundInstance;
    }
    export class $FiniteAudioStream {
    }
    export interface $FiniteAudioStream extends $AudioStream {
        readAll(): $ByteBuffer;
    }
    export class $FloatSampleSource {
        static EXPECTED_MAX_FRAME_SIZE: number;
    }
    export interface $FloatSampleSource extends $FiniteAudioStream {
        read(arg0: number): $ByteBuffer;
        readChunk(arg0: $FloatConsumer_): boolean;
        readAll(): $ByteBuffer;
    }
    export class $ChannelAccess {
        clear(): void;
        createHandle(arg0: $Library$Pool_): $CompletableFuture<$ChannelAccess$ChannelHandle>;
        scheduleTick(): void;
        executeOnChannels(arg0: $Consumer_<$Stream<$Channel>>): void;
        library: $Library;
        executor: $Executor;
        constructor(arg0: $Library, arg1: $Executor_);
    }
    export class $WeighedSoundEvents implements $Weighted<$Sound> {
        addSound(arg0: $Weighted<$Sound>): void;
        getSubtitle(): $Component;
        getWeight(): number;
        preloadIfRequired(arg0: $SoundEngine): void;
        getSound(arg0: $RandomSource): $Sound;
        constructor(arg0: $ResourceLocation_, arg1: string);
        get subtitle(): $Component;
        get weight(): number;
    }
}
