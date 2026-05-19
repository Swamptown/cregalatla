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
    export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $SoundManagerAccessor, $IMixinSoundManager, $IdentifiableResourceReloadListener {
        getDebugString(): string;
        getAvailableSounds(): $Collection<$ResourceLocation>;
        getSoundEvent(arg0: $ResourceLocation_): $WeighedSoundEvents;
        getListenerTransform(): $ListenerTransform;
        static validateSoundResource(arg0: $Sound, arg1: $ResourceLocation_, arg2: $ResourceProvider_): boolean;
        reload(): void;
        tick(arg0: boolean): void;
        apply(arg0: $SoundManager$Preparations, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        stop(arg0: $ResourceLocation_, arg1: $SoundSource_): void;
        stop(arg0: $SoundInstance): void;
        stop(): void;
        resume(): void;
        destroy(): void;
        isActive(arg0: $SoundInstance): boolean;
        playDelayed(arg0: $SoundInstance, arg1: number): void;
        removeListener(arg0: $SoundEventListener_): void;
        addListener(arg0: $SoundEventListener_): void;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        play(arg0: $SoundInstance): void;
        pause(): void;
        emergencyShutdown(): void;
        updateSource(arg0: $Camera): void;
        queueTickingSound(arg0: $TickableSoundInstance): void;
        updateSourceVolume(arg0: $SoundSource_, arg1: number): void;
        getAvailableSoundDevices(): $List<string>;
        getSoundEngine(): $SoundEngine;
        getSoundEngineMelody(): $SoundEngine;
        static EMPTY_SOUND: $Sound;
        static INTENTIONALLY_EMPTY_SOUND_EVENT: $WeighedSoundEvents;
        static EMPTY_SOUND_LOCATION: $ResourceLocation;
        soundEngine: $SoundEngine;
        static LOGGER: $Logger;
        static INTENTIONALLY_EMPTY_SOUND_LOCATION: $ResourceLocation;
        static INTENTIONALLY_EMPTY_SOUND: $Sound;
        constructor(arg0: $Options);
        get debugString(): string;
        get availableSounds(): $Collection<$ResourceLocation>;
        get listenerTransform(): $ListenerTransform;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get availableSoundDevices(): $List<string>;
        get soundEngineMelody(): $SoundEngine;
    }
    export class $LoopingAudioStream implements $AudioStream {
        getFormat(): $AudioFormat;
        read(arg0: number): $ByteBuffer;
        close(): void;
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
        getFormat(): $AudioFormat;
        read(arg0: number): $ByteBuffer;
        get format(): $AudioFormat;
    }
    export class $SoundEngine implements $SoundEngineAccessor, $DuckSoundEngine, $IMixinSoundEngine {
        getDebugString(): string;
        dynamic_fps$updateVolume(source: $SoundSource_): void;
        addEventListener(arg0: $SoundEventListener_): void;
        removeEventListener(arg0: $SoundEventListener_): void;
        stopAll(): void;
        getListenerTransform(): $ListenerTransform;
        updateCategoryVolume(arg0: $SoundSource_, arg1: number): void;
        reload(): void;
        tick(arg0: boolean): void;
        stop(arg0: $SoundInstance): void;
        stop(arg0: $ResourceLocation_, arg1: $SoundSource_): void;
        resume(): void;
        destroy(): void;
        isActive(arg0: $SoundInstance): boolean;
        playDelayed(arg0: $SoundInstance, arg1: number): void;
        play(arg0: $SoundInstance): void;
        pause(): void;
        emergencyShutdown(): void;
        updateSource(arg0: $Camera): void;
        queueTickingSound(arg0: $TickableSoundInstance): void;
        getAvailableSoundDevices(): $List<string>;
        requestPreload(arg0: $Sound): void;
        isLoaded(): boolean;
        getInstanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        callCalculateVolume(arg0: $SoundInstance): number;
        getLoadedMelody(): boolean;
        static MISSING_SOUND: string;
        soundManager: $SoundManager;
        static OPEN_AL_SOFT_PREFIX: string;
        static OPEN_AL_SOFT_PREFIX_LENGTH: number;
        constructor(arg0: $SoundManager, arg1: $Options, arg2: $ResourceProvider_);
        get debugString(): string;
        get listenerTransform(): $ListenerTransform;
        get availableSoundDevices(): $List<string>;
        get loaded(): boolean;
        get instanceToChannel(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>;
        get loadedMelody(): boolean;
    }
    export class $SoundBufferLibrary {
        getStream(arg0: $ResourceLocation_, arg1: boolean): $CompletableFuture<$AudioStream>;
        clear(): void;
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
        readChunk(arg0: $FloatConsumer_): boolean;
        getFormat(): $AudioFormat;
        close(): void;
        readAll(): $ByteBuffer;
        read(arg0: number): $ByteBuffer;
        constructor(arg0: $InputStream);
        get format(): $AudioFormat;
    }
    export class $SoundManager$Preparations {
    }
    export class $MusicManager implements $MusicManagerAccessor, $IMixinMusicManager {
        startPlaying(arg0: $Music): void;
        tick(): void;
        isPlayingMusic(arg0: $Music): boolean;
        stopPlaying(): void;
        stopPlaying(arg0: $Music): void;
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
        readChunk(arg0: $FloatConsumer_): boolean;
        readAll(): $ByteBuffer;
        read(arg0: number): $ByteBuffer;
    }
    export class $ChannelAccess {
        createHandle(arg0: $Library$Pool_): $CompletableFuture<$ChannelAccess$ChannelHandle>;
        clear(): void;
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
