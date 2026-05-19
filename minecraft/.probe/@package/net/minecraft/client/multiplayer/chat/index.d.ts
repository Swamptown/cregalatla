import { $Instant } from "@package/java/time";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MessageSignature_, $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $GuiMessageTag } from "@package/net/minecraft/client";
import { $UUID, $UUID_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as report from "@package/net/minecraft/client/multiplayer/chat/report";

declare module "@package/net/minecraft/client/multiplayer/chat" {
    export class $LoggedChatMessage$Player extends $Record implements $LoggedChatMessage {
        trustLevel(): $ChatTrustLevel;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        toHeadingComponent(): $Component;
        canReport(arg0: $UUID_): boolean;
        type(): $LoggedChatEvent$Type;
        profile(): $GameProfile;
        message(): $PlayerChatMessage;
        profileId(): $UUID;
        static CODEC: $MapCodec<$LoggedChatMessage$Player>;
        constructor(arg0: $GameProfile, arg1: $PlayerChatMessage_, arg2: $ChatTrustLevel_);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$Player}.
     */
    export type $LoggedChatMessage$Player_ = { message?: $PlayerChatMessage_, trustLevel?: $ChatTrustLevel_, profile?: $GameProfile,  } | [message?: $PlayerChatMessage_, trustLevel?: $ChatTrustLevel_, profile?: $GameProfile, ];
    export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
        static values(): $LoggedChatEvent$Type[];
        static valueOf(arg0: string): $LoggedChatEvent$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAYER: $LoggedChatEvent$Type;
        static SYSTEM: $LoggedChatEvent$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent$Type}.
     */
    export type $LoggedChatEvent$Type_ = "player" | "system";
    export class $ChatTrustLevel extends $Enum<$ChatTrustLevel> implements $StringRepresentable {
        createTag(arg0: $PlayerChatMessage_): $GuiMessageTag;
        isNotSecure(): boolean;
        static evaluate(arg0: $PlayerChatMessage_, arg1: $Component_, arg2: $Instant): $ChatTrustLevel;
        static values(): $ChatTrustLevel[];
        static valueOf(arg0: string): $ChatTrustLevel;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ChatTrustLevel>;
        static SECURE: $ChatTrustLevel;
        static MODIFIED: $ChatTrustLevel;
        static NOT_SECURE: $ChatTrustLevel;
        get notSecure(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTrustLevel}.
     */
    export type $ChatTrustLevel_ = "secure" | "modified" | "not_secure";
    export class $ChatListener {
        handleSystemMessage(arg0: $Component_, arg1: boolean): void;
        handler$cop000$xaerominimap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        handler$dfk001$xaeroworldmap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        handler$cop000$xaerominimap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        handler$dfk001$xaeroworldmap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        tick(): void;
        queueSize(): number;
        setMessageDelay(arg0: number): void;
        clearQueue(): void;
        handleChatMessageError(arg0: $UUID_, arg1: $ChatType$Bound_): void;
        handlePlayerChatMessage(arg0: $PlayerChatMessage_, arg1: $GameProfile, arg2: $ChatType$Bound_): void;
        handleDisguisedChatMessage(arg0: $Component_, arg1: $ChatType$Bound_): void;
        removeFromDelayedMessageQueue(arg0: $MessageSignature_): boolean;
        acceptNextDelayedMessage(): void;
        static $assertionsDisabled: boolean;
        constructor(arg0: $Minecraft);
        set messageDelay(value: number);
    }
    export class $LoggedChatMessage {
        static system(arg0: $Component_, arg1: $Instant): $LoggedChatMessage$System;
        static player(arg0: $GameProfile, arg1: $PlayerChatMessage_, arg2: $ChatTrustLevel_): $LoggedChatMessage$Player;
    }
    export interface $LoggedChatMessage extends $LoggedChatEvent {
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        canReport(arg0: $UUID_): boolean;
    }
    export class $ChatListener$Message extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatListener$Message}.
     */
    export type $ChatListener$Message_ = { signature?: $MessageSignature_, handler?: $BooleanSupplier_,  } | [signature?: $MessageSignature_, handler?: $BooleanSupplier_, ];
    export class $LoggedChatMessage$System extends $Record implements $LoggedChatMessage {
        toContentComponent(): $Component;
        canReport(arg0: $UUID_): boolean;
        timeStamp(): $Instant;
        type(): $LoggedChatEvent$Type;
        message(): $Component;
        toNarrationComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$System>;
        constructor(arg0: $Component_, arg1: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$System}.
     */
    export type $LoggedChatMessage$System_ = { message?: $Component_, timeStamp?: $Instant,  } | [message?: $Component_, timeStamp?: $Instant, ];
    export class $LoggedChatEvent {
        static CODEC: $Codec<$LoggedChatEvent>;
    }
    export interface $LoggedChatEvent {
        type(): $LoggedChatEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent}.
     */
    export type $LoggedChatEvent_ = (() => $LoggedChatEvent$Type_);
    export class $ChatLog {
        end(): number;
        lookup(arg0: number): $LoggedChatEvent;
        start(): number;
        push(arg0: $LoggedChatEvent_): void;
        static codec(arg0: number): $Codec<$ChatLog>;
        constructor(arg0: number);
    }
}
