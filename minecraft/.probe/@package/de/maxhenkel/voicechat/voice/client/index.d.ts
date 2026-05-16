import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ALCCapabilities, $ALCapabilities } from "@package/org/lwjgl/openal";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        close(): void;
        connect(arg0: $InitializationData): void;
        reloadSoundManager(): void;
        closeMicThread(): void;
        reloadAudio(): void;
        getInitializationData(): $InitializationData;
        closeAudioChannel(arg0: $UUID_): boolean;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        getMicThread(): $MicThread;
        getTalkCache(): $TalkCache;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        onVoiceChatDisconnected(): void;
        toggleRecording(): boolean;
        getRecorder(): $AudioRecorder;
        setRecording(arg0: boolean): boolean;
        getConnection(): $ClientVoicechatConnection;
        getStartTime(): number;
        getSoundManager(): $SoundManager;
        constructor();
        get initializationData(): $InitializationData;
        get micThread(): $MicThread;
        get talkCache(): $TalkCache;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get recorder(): $AudioRecorder;
        set recording(value: boolean);
        get connection(): $ClientVoicechatConnection;
        get startTime(): number;
        get soundManager(): $SoundManager;
    }
    export class $AudioChannel extends $Thread {
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        canKill(): boolean;
        closeAndKill(): void;
        getPacketBuffer(): $AudioPacketBuffer;
        getChannelId(): $UUID;
        addToQueue(arg0: $SoundPacket<never>): void;
        getLostPackets(): number;
        getSpeaker(): $Speaker;
        isClosed(): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get packetBuffer(): $AudioPacketBuffer;
        get channelId(): $UUID;
        get lostPackets(): number;
        get speaker(): $Speaker;
        get closed(): boolean;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(arg0: number): string;
        getDuration(): string;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        flushChunkThreaded(arg0: $UUID_): void;
        saveAndClose(): void;
        getStorage(): string;
        getStorage(arg0: number): string;
        getRecordedPlayerCount(): number;
        getStartTime(): number;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get recordedPlayerCount(): number;
        get startTime(): number;
    }
    export class $InitializationData {
        getServerIP(): string;
        getServerPort(): number;
        getMtuSize(): number;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        allowRecording(): boolean;
        groupsEnabled(): boolean;
        getPlayerUUID(): $UUID;
        getKeepAlive(): number;
        getCodec(): $ServerConfig$Codec;
        constructor(arg0: string, arg1: $SecretPacket);
        get serverIP(): string;
        get serverPort(): number;
        get mtuSize(): number;
        get secret(): $Secret;
        get voiceChatDistance(): number;
        get playerUUID(): $UUID;
        get keepAlive(): number;
        get codec(): $ServerConfig$Codec;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        clear(): void;
        getSize(): number;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        close(): void;
        static create(arg0: string): $SoundManager;
        static create(): $SoundManager;
        openContext(): boolean;
        closeContext(): void;
        static checkAlError(): boolean;
        static getAlError(arg0: number): string;
        static cleanDeviceName(arg0: string): string;
        static checkAlcError(arg0: number): boolean;
        static getAlcError(arg0: number): string;
        static getAllSpeakers(): $List<string>;
        static canEnumerateAll(): boolean;
        static canEnumerate(): boolean;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        getMaxGain(): number;
        isClosed(): boolean;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        static get allSpeakers(): $List<string>;
        get maxGain(): number;
        get closed(): boolean;
    }
    export class $TalkCache {
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        getPlayerAudioLevel(arg0: $UUID_): number;
        getCategoryAudioLevel(arg0: string): number;
        updateLevel(arg0: $UUID_, arg1: string, arg2: boolean, arg3: number[]): void;
        isTalking(arg0: $UUID_): boolean;
        isTalking(arg0: $Entity): boolean;
        isWhispering(arg0: $Entity): boolean;
        isWhispering(arg0: $UUID_): boolean;
        updateCategoryVolume(arg0: string, arg1: number): void;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        close(): void;
        getAddress(): $InetAddress;
        isConnected(): boolean;
        getData(): $InitializationData;
        checkTimeout(): void;
        getSocket(): $ClientVoicechatSocket;
        sendToServer(arg0: $NetworkMessage): boolean;
        disconnect(): void;
        isInitialized(): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get address(): $InetAddress;
        get connected(): boolean;
        get data(): $InitializationData;
        get socket(): $ClientVoicechatSocket;
        get initialized(): boolean;
    }
    export class $MicThread extends $Thread {
        close(): void;
        isTalking(): boolean;
        isWhispering(): boolean;
        pollMic(): number[];
        pollProcessedAudio(arg0: boolean): number[];
        shouldTransmitAudio(): boolean;
        setMicrophoneLocked(arg0: boolean): void;
        isClosed(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $ClientVoicechatConnection, arg2: $Consumer_<$MicrophoneException>);
        get talking(): boolean;
        get whispering(): boolean;
        set microphoneLocked(value: boolean);
        get closed(): boolean;
    }
}
