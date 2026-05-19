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
        closeAudioChannel(arg0: $UUID_): boolean;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        getMicThread(): $MicThread;
        getTalkCache(): $TalkCache;
        reloadSoundManager(): void;
        closeMicThread(): void;
        reloadAudio(): void;
        getInitializationData(): $InitializationData;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        onVoiceChatDisconnected(): void;
        toggleRecording(): boolean;
        setRecording(arg0: boolean): boolean;
        getConnection(): $ClientVoicechatConnection;
        getRecorder(): $AudioRecorder;
        connect(arg0: $InitializationData): void;
        close(): void;
        getStartTime(): number;
        getSoundManager(): $SoundManager;
        constructor();
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get micThread(): $MicThread;
        get talkCache(): $TalkCache;
        get initializationData(): $InitializationData;
        set recording(value: boolean);
        get connection(): $ClientVoicechatConnection;
        get recorder(): $AudioRecorder;
        get startTime(): number;
        get soundManager(): $SoundManager;
    }
    export class $AudioChannel extends $Thread {
        getSpeaker(): $Speaker;
        getLostPackets(): number;
        addToQueue(arg0: $SoundPacket<never>): void;
        getPacketBuffer(): $AudioPacketBuffer;
        canKill(): boolean;
        closeAndKill(): void;
        getChannelId(): $UUID;
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        isClosed(): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get speaker(): $Speaker;
        get lostPackets(): number;
        get packetBuffer(): $AudioPacketBuffer;
        get channelId(): $UUID;
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get closed(): boolean;
    }
    export class $AudioRecorder {
        getRecordedPlayerCount(): number;
        saveAndClose(): void;
        flushChunkThreaded(arg0: $UUID_): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        getStorage(arg0: number): string;
        getStorage(): string;
        getDuration(): string;
        getDuration(arg0: number): string;
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getStartTime(): number;
        constructor(arg0: $Path_, arg1: number);
        get recordedPlayerCount(): number;
        get location(): $Path;
        get startTime(): number;
    }
    export class $InitializationData {
        getMtuSize(): number;
        getServerPort(): number;
        getServerIP(): string;
        getPlayerUUID(): $UUID;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        allowRecording(): boolean;
        groupsEnabled(): boolean;
        getKeepAlive(): number;
        getCodec(): $ServerConfig$Codec;
        constructor(arg0: string, arg1: $SecretPacket);
        get mtuSize(): number;
        get serverPort(): number;
        get serverIP(): string;
        get playerUUID(): $UUID;
        get secret(): $Secret;
        get voiceChatDistance(): number;
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
        getMaxGain(): number;
        static checkAlcError(arg0: number): boolean;
        static getAlcError(arg0: number): string;
        static getAllSpeakers(): $List<string>;
        static canEnumerateAll(): boolean;
        static canEnumerate(): boolean;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        openContext(): boolean;
        closeContext(): void;
        static checkAlError(): boolean;
        static getAlError(arg0: number): string;
        static cleanDeviceName(arg0: string): string;
        close(): void;
        static create(arg0: string): $SoundManager;
        static create(): $SoundManager;
        isClosed(): boolean;
        constructor(arg0: string, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        get maxGain(): number;
        static get allSpeakers(): $List<string>;
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
        checkTimeout(): void;
        getSocket(): $ClientVoicechatSocket;
        isConnected(): boolean;
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        disconnect(): void;
        isInitialized(): boolean;
        sendToServer(arg0: $NetworkMessage): boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get socket(): $ClientVoicechatSocket;
        get connected(): boolean;
        get address(): $InetAddress;
        get data(): $InitializationData;
        get initialized(): boolean;
    }
    export class $MicThread extends $Thread {
        isTalking(): boolean;
        isWhispering(): boolean;
        pollMic(): number[];
        pollProcessedAudio(arg0: boolean): number[];
        shouldTransmitAudio(): boolean;
        setMicrophoneLocked(arg0: boolean): void;
        close(): void;
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
