import { $IntSet, $IntCollection } from "@package/it/unimi/dsi/fastutil/ints";
import { $Unit, $Either } from "@package/com/mojang/datafixers/util";
import { $Component_, $ThrowingComponent, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Tooltip } from "@package/net/minecraft/client/gui/components";
import { $AbuseReport_, $AbuseReportLimits_, $AbuseReport, $AbuseReportLimits } from "@package/com/mojang/authlib/minecraft/report";
import { $AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$RealmInfo, $AbuseReportRequest$ClientInfo } from "@package/com/mojang/authlib/yggdrasil/request";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID, $UUID_ } from "@package/java/util";
import { $LoggedChatMessage$Player_, $LoggedChatMessage$Player, $ChatLog } from "@package/net/minecraft/client/multiplayer/chat";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";
import { $Instant } from "@package/java/time";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Throwable, $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/multiplayer/chat/report" {
    export class $ChatReportContextBuilder {
        isActive(): boolean;
        acceptContext(arg0: $PlayerChatMessage_): boolean;
        trackContext(arg0: $PlayerChatMessage_): void;
        collectAllContext(arg0: $ChatLog, arg1: $IntCollection, arg2: $ChatReportContextBuilder$Handler_): void;
        leadingCount: number;
        constructor(arg0: number);
        get active(): boolean;
    }
    export class $ChatReport extends $Report {
        toggleReported(arg0: number, arg1: $AbuseReportLimits_): void;
        reportedProfileId: $UUID;
        reportedMessages: $IntSet;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_);
    }
    export class $ReportEnvironment$Server {
    }
    export interface $ReportEnvironment$Server {
    }
    export class $NameReport$Builder extends $Report$Builder<$NameReport> {
        limits: $AbuseReportLimits;
        constructor(arg0: $NameReport, arg1: $AbuseReportLimits_);
        constructor(arg0: $UUID_, arg1: string, arg2: $AbuseReportLimits_);
    }
    export class $Report$Builder<R extends $Report> {
        comments(): string;
        reason(): $ReportReason;
        build(arg0: $ReportingContext): $Either<$Report$Result, $Report$CannotBuildReason>;
        setComments(arg0: string): void;
        hasContent(): boolean;
        report(): R;
        setReason(arg0: $ReportReason_): void;
        reportedProfileId(): $UUID;
        attested(): boolean;
        checkBuildable(): $Report$CannotBuildReason;
        setAttested(arg0: boolean): void;
        limits: $AbuseReportLimits;
        constructor(arg0: R, arg1: $AbuseReportLimits_);
    }
    export class $Report$CannotBuildReason extends $Record {
        message(): $Component;
        tooltip(): $Tooltip;
        static NO_REPORTED_MESSAGES: $Report$CannotBuildReason;
        static NOT_ATTESTED: $Report$CannotBuildReason;
        static COMMENT_TOO_LONG: $Report$CannotBuildReason;
        static NO_REASON: $Report$CannotBuildReason;
        static TOO_MANY_MESSAGES: $Report$CannotBuildReason;
        constructor(arg0: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $Report$CannotBuildReason}.
     */
    export type $Report$CannotBuildReason_ = { message?: $Component_,  } | [message?: $Component_, ];
    export class $AbuseReportSender$Services extends $Record implements $AbuseReportSender {
        isEnabled(): boolean;
        environment(): $ReportEnvironment;
        send(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_): $CompletableFuture<$Unit>;
        userApiService(): $UserApiService;
        reportLimits(): $AbuseReportLimits;
        constructor(arg0: $ReportEnvironment_, arg1: $UserApiService);
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbuseReportSender$Services}.
     */
    export type $AbuseReportSender$Services_ = { userApiService?: $UserApiService, environment?: $ReportEnvironment_,  } | [userApiService?: $UserApiService, environment?: $ReportEnvironment_, ];
    export class $ReportingContext {
        matches(arg0: $ReportEnvironment_): boolean;
        static create(arg0: $ReportEnvironment_, arg1: $UserApiService): $ReportingContext;
        setReportDraft(arg0: $Report): void;
        hasDraftReportFor(arg0: $UUID_): boolean;
        chatLog(): $ChatLog;
        sender(): $AbuseReportSender;
        hasDraftReport(): boolean;
        draftReportHandled(arg0: $Minecraft, arg1: $Screen, arg2: $Runnable_, arg3: boolean): void;
        constructor(arg0: $AbuseReportSender, arg1: $ReportEnvironment_, arg2: $ChatLog);
        set reportDraft(value: $Report);
    }
    export class $ReportEnvironment extends $Record {
        static create(arg0: $ReportEnvironment$Server): $ReportEnvironment;
        static local(): $ReportEnvironment;
        static thirdParty(arg0: string): $ReportEnvironment;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        clientVersion(): string;
        server(): $ReportEnvironment$Server;
        static realm(arg0: $RealmsServer): $ReportEnvironment;
        constructor(arg0: string, arg1: $ReportEnvironment$Server);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment}.
     */
    export type $ReportEnvironment_ = { server?: $ReportEnvironment$Server, clientVersion?: string,  } | [server?: $ReportEnvironment$Server, clientVersion?: string, ];
    export class $AbuseReportSender$SendException extends $ThrowingComponent {
        constructor(arg0: $Component_, arg1: $Throwable);
    }
    export class $SkinReport extends $Report {
        getSkinGetter(): $Supplier<$PlayerSkin>;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        skinGetter: $Supplier<$PlayerSkin>;
        attested: boolean;
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_, arg3: $Supplier_<$PlayerSkin>);
    }
    export class $ReportEnvironment$Server$ThirdParty extends $Record implements $ReportEnvironment$Server {
        ip(): string;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment$Server$ThirdParty}.
     */
    export type $ReportEnvironment$Server$ThirdParty_ = { ip?: string,  } | [ip?: string, ];
    export class $SkinReport$Builder extends $Report$Builder<$SkinReport> {
        limits: $AbuseReportLimits;
        constructor(arg0: $SkinReport, arg1: $AbuseReportLimits_);
        constructor(arg0: $UUID_, arg1: $Supplier_<$PlayerSkin>, arg2: $AbuseReportLimits_);
    }
    export class $ReportReason extends $Enum<$ReportReason> {
        static values(): $ReportReason[];
        static valueOf(arg0: string): $ReportReason;
        description(): $Component;
        title(): $Component;
        backendName(): string;
        static HATE_SPEECH: $ReportReason;
        static ALCOHOL_TOBACCO_DRUGS: $ReportReason;
        static GENERIC: $ReportReason;
        static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: $ReportReason;
        static NON_CONSENSUAL_INTIMATE_IMAGERY: $ReportReason;
        static SELF_HARM_OR_SUICIDE: $ReportReason;
        static HARASSMENT_OR_BULLYING: $ReportReason;
        static CHILD_SEXUAL_EXPLOITATION_OR_ABUSE: $ReportReason;
        static IMMINENT_HARM: $ReportReason;
        static TERRORISM_OR_VIOLENT_EXTREMISM: $ReportReason;
    }
    /**
     * Values that may be interpreted as {@link $ReportReason}.
     */
    export type $ReportReason_ = "generic" | "hate_speech" | "harassment_or_bullying" | "self_harm_or_suicide" | "imminent_harm" | "defamation_impersonation_false_information" | "alcohol_tobacco_drugs" | "child_sexual_exploitation_or_abuse" | "terrorism_or_violent_extremism" | "non_consensual_intimate_imagery";
    export class $ChatReport$Builder extends $Report$Builder<$ChatReport> {
        copy(): $ChatReport$Builder;
        toggleReported(arg0: number): void;
        isReported(arg0: number): boolean;
        reportedMessages(): $IntSet;
        limits: $AbuseReportLimits;
        constructor(arg0: $ChatReport, arg1: $AbuseReportLimits_);
        constructor(arg0: $UUID_, arg1: $AbuseReportLimits_);
    }
    export class $ReportType extends $Enum<$ReportType> {
        static values(): $ReportType[];
        static valueOf(arg0: string): $ReportType;
        backendName(): string;
        static CHAT: $ReportType;
        static USERNAME: $ReportType;
        static SKIN: $ReportType;
    }
    /**
     * Values that may be interpreted as {@link $ReportType}.
     */
    export type $ReportType_ = "chat" | "skin" | "username";
    export class $BanReason extends $Enum<$BanReason> {
        static values(): $BanReason[];
        static valueOf(arg0: string): $BanReason;
        title(): $Component;
        static byId(arg0: number): $BanReason;
        static HATE_SPEECH: $BanReason;
        static FRAUD: $BanReason;
        static SPAM_OR_ADVERTISING: $BanReason;
        static FALSE_REPORTING: $BanReason;
        static GENERIC_VIOLATION: $BanReason;
        static HARASSMENT_OR_BULLYING: $BanReason;
        static SEXUALLY_INAPPROPRIATE: $BanReason;
        static HATE_TERRORISM_NOTORIOUS_FIGURE: $BanReason;
        static DEFAMATION_IMPERSONATION_FALSE_INFORMATION: $BanReason;
        static NUDITY_OR_PORNOGRAPHY: $BanReason;
        static DRUGS: $BanReason;
        static EXTREME_VIOLENCE_OR_GORE: $BanReason;
        static IMMINENT_HARM_TO_PERSON_OR_PROPERTY: $BanReason;
    }
    /**
     * Values that may be interpreted as {@link $BanReason}.
     */
    export type $BanReason_ = "generic_violation" | "false_reporting" | "hate_speech" | "hate_terrorism_notorious_figure" | "harassment_or_bullying" | "defamation_impersonation_false_information" | "drugs" | "fraud" | "spam_or_advertising" | "nudity_or_pornography" | "sexually_inappropriate" | "extreme_violence_or_gore" | "imminent_harm_to_person_or_property";
    export class $ReportEnvironment$Server$Realm extends $Record implements $ReportEnvironment$Server {
        realmId(): number;
        slotId(): number;
        constructor(arg0: $RealmsServer);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment$Server$Realm}.
     */
    export type $ReportEnvironment$Server$Realm_ = { realmId?: number, slotId?: number,  } | [realmId?: number, slotId?: number, ];
    export class $AbuseReportSender {
        static create(arg0: $ReportEnvironment_, arg1: $UserApiService): $AbuseReportSender;
    }
    export interface $AbuseReportSender {
        isEnabled(): boolean;
        send(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_): $CompletableFuture<$Unit>;
        reportLimits(): $AbuseReportLimits;
        get enabled(): boolean;
    }
    export class $ChatReportContextBuilder$Handler {
    }
    export interface $ChatReportContextBuilder$Handler {
        accept(arg0: number, arg1: $LoggedChatMessage$Player_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChatReportContextBuilder$Handler}.
     */
    export type $ChatReportContextBuilder$Handler_ = ((arg0: number, arg1: $LoggedChatMessage$Player) => void);
    export class $ChatReportContextBuilder$Collector {
    }
    export class $Report {
        copy(): $Report;
        isReportedPlayer(arg0: $UUID_): boolean;
        createScreen(arg0: $Screen, arg1: $ReportingContext): $Screen;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_);
    }
    export class $NameReport extends $Report {
        getReportedName(): string;
        reportedProfileId: $UUID;
        createdAt: $Instant;
        reason: $ReportReason;
        comments: string;
        reportId: $UUID;
        attested: boolean;
        constructor(arg0: $UUID_, arg1: $Instant, arg2: $UUID_, arg3: string);
        get reportedName(): string;
    }
    export class $Report$Result extends $Record {
        id(): $UUID;
        report(): $AbuseReport;
        reportType(): $ReportType;
        constructor(arg0: $UUID_, arg1: $ReportType_, arg2: $AbuseReport_);
    }
    /**
     * Values that may be interpreted as {@link $Report$Result}.
     */
    export type $Report$Result_ = { reportType?: $ReportType_, report?: $AbuseReport_, id?: $UUID_,  } | [reportType?: $ReportType_, report?: $AbuseReport_, id?: $UUID_, ];
}
