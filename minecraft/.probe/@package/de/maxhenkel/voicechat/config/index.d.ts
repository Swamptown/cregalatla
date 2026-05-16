import { $ConfigEntry } from "@package/de/maxhenkel/voicechat/configbuilder/entry";
import { $OpusEncoder$Application } from "@package/de/maxhenkel/opus4j";
import { $ConfigBuilder } from "@package/de/maxhenkel/voicechat/configbuilder";
import { $OpusEncoderMode } from "@package/de/maxhenkel/voicechat/api/opus";
import { $Enum } from "@package/java/lang";

declare module "@package/de/maxhenkel/voicechat/config" {
    export class $ServerConfig$Codec extends $Enum<$ServerConfig$Codec> {
        static values(): $ServerConfig$Codec[];
        static valueOf(arg0: string): $ServerConfig$Codec;
        getApplication(): $OpusEncoder$Application;
        getMode(): $OpusEncoderMode;
        static RESTRICTED_LOWDELAY: $ServerConfig$Codec;
        static VOIP: $ServerConfig$Codec;
        static AUDIO: $ServerConfig$Codec;
        get application(): $OpusEncoder$Application;
        get mode(): $OpusEncoderMode;
    }
    /**
     * Values that may be interpreted as {@link $ServerConfig$Codec}.
     */
    export type $ServerConfig$Codec_ = "voip" | "audio" | "restricted_lowdelay";
    export class $ServerConfig {
        groupsEnabled: $ConfigEntry<boolean>;
        tcpRateLimit: $ConfigEntry<number>;
        keepAlive: $ConfigEntry<number>;
        voiceChatCodec: $ConfigEntry<$ServerConfig$Codec>;
        whisperDistance: $ConfigEntry<number>;
        voiceHost: $ConfigEntry<string>;
        broadcastRange: $ConfigEntry<number>;
        voiceChatMtuSize: $ConfigEntry<number>;
        voiceChatPort: $ConfigEntry<number>;
        useNatives: $ConfigEntry<boolean>;
        allowRecording: $ConfigEntry<boolean>;
        voiceChatDistance: $ConfigEntry<number>;
        allowPings: $ConfigEntry<boolean>;
        voiceChatBindAddress: $ConfigEntry<string>;
        spectatorPlayerPossession: $ConfigEntry<boolean>;
        loginTimeout: $ConfigEntry<number>;
        spectatorInteraction: $ConfigEntry<boolean>;
        forceVoiceChat: $ConfigEntry<boolean>;
        constructor(arg0: $ConfigBuilder);
    }
}
