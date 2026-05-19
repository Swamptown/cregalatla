import { $File_ } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $RealmsDownloadLatestWorldScreen$DownloadStatus, $UploadResult } from "@package/com/mojang/realmsclient/gui/screens";
import { $Minecraft, $User } from "@package/net/minecraft/client";
import { $LevelStorageSource } from "@package/net/minecraft/world/level/storage";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $RealmsHttpException } from "@package/com/mojang/realmsclient/exception";
import { $UploadInfo, $RealmsServer, $RealmsServerPlayerLists, $PendingInvitesList, $Subscription, $RealmsWorldOptions, $RealmsNews, $ServerActivityList, $RealmsServerAddress, $Ops, $RealmsServerList, $BackupList, $WorldTemplatePaginatedList, $RegionPingResult, $PingResult, $WorldDownload, $RealmsServer$WorldType_, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";
import { $InputStreamEntity } from "@package/org/apache/http/entity";
import { $Consumer_ } from "@package/java/util/function";
import { $CountingOutputStream } from "@package/org/apache/commons/io/output";
import { $Proxy, $HttpURLConnection } from "@package/java/net";
import { $ActionListener } from "@package/java/awt/event";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/com/mojang/realmsclient/client" {
    export class $RealmsError$AuthenticationError extends $Record implements $RealmsError {
        errorCode(): number;
        message(): string;
        logMessage(): string;
        errorMessage(): $Component;
        static ERROR_CODE: number;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$AuthenticationError}.
     */
    export type $RealmsError$AuthenticationError_ = { message?: string,  } | [message?: string, ];
    export class $FileDownload {
        static findAvailableFolderName(arg0: string): string;
        isExtracting(): boolean;
        isFinished(): boolean;
        contentLength(arg0: string): number;
        cancel(): void;
        isError(): boolean;
        download(arg0: $WorldDownload, arg1: string, arg2: $RealmsDownloadLatestWorldScreen$DownloadStatus, arg3: $LevelStorageSource): void;
        constructor();
        get extracting(): boolean;
        get finished(): boolean;
        get error(): boolean;
    }
    export class $RealmsError$ErrorWithJsonPayload extends $Record implements $RealmsError {
        httpCode(): number;
        errorCode(): number;
        code(): number;
        message(): string;
        reason(): string;
        logMessage(): string;
        errorMessage(): $Component;
        constructor(arg0: number, arg1: number, arg2: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$ErrorWithJsonPayload}.
     */
    export type $RealmsError$ErrorWithJsonPayload_ = { message?: string, httpCode?: number, code?: number, reason?: string,  } | [message?: string, httpCode?: number, code?: number, reason?: string, ];
    export class $RealmsClient {
        notificationsDismiss(arg0: $List_<$UUID_>): void;
        sendPingResults(arg0: $PingResult): void;
        notificationsSeen(arg0: $List_<$UUID_>): void;
        getNotifications(): $List<$RealmsNotification>;
        pendingInvitesCount(): number;
        trialAvailable(): boolean;
        getNews(): $RealmsNews;
        getLiveStats(): $RealmsServerPlayerLists;
        listRealms(): $RealmsServerList;
        listSnapshotEligibleRealms(): $List<$RealmsServer>;
        update(arg0: number, arg1: string, arg2: string): void;
        join(arg0: number): $RealmsServerAddress;
        op(arg0: number, arg1: $UUID_): $Ops;
        close(arg0: number): boolean;
        open(arg0: number): boolean;
        static create(): $RealmsClient;
        static create(arg0: $Minecraft): $RealmsClient;
        getActivity(arg0: number): $ServerActivityList;
        createSnapshotRealm(arg0: number): $RealmsServer;
        getOwnRealm(arg0: number): $RealmsServer;
        initializeRealm(arg0: number, arg1: string, arg2: string): void;
        hasParentalConsent(): boolean;
        clientCompatible(): $RealmsClient$CompatibleVersionResponse;
        uninvite(arg0: number, arg1: $UUID_): void;
        uninviteMyselfFrom(arg0: number): void;
        invite(arg0: number, arg1: string): $RealmsServer;
        backupsFor(arg0: number): $BackupList;
        updateSlot(arg0: number, arg1: number, arg2: $RealmsWorldOptions): void;
        switchSlot(arg0: number, arg1: number): boolean;
        restoreWorld(arg0: number, arg1: string): void;
        fetchWorldTemplates(arg0: number, arg1: number, arg2: $RealmsServer$WorldType_): $WorldTemplatePaginatedList;
        putIntoMinigameMode(arg0: number, arg1: string): boolean;
        deop(arg0: number, arg1: $UUID_): $Ops;
        resetWorldWithSeed(arg0: number, arg1: $WorldGenerationInfo_): boolean;
        resetWorldWithTemplate(arg0: number, arg1: string): boolean;
        subscriptionFor(arg0: number): $Subscription;
        pendingInvites(): $PendingInvitesList;
        acceptInvitation(arg0: string): void;
        requestDownloadInfo(arg0: number, arg1: number): $WorldDownload;
        requestUploadInfo(arg0: number, arg1: string): $UploadInfo;
        rejectInvitation(arg0: string): void;
        agreeToTos(): void;
        deleteRealm(arg0: number): void;
        static ENVIRONMENT: $RealmsClient$Environment;
        constructor(arg0: string, arg1: string, arg2: $Minecraft);
        get notifications(): $List<$RealmsNotification>;
        get news(): $RealmsNews;
        get liveStats(): $RealmsServerPlayerLists;
    }
    export class $RealmsError$CustomError extends $Record implements $RealmsError {
        httpCode(): number;
        errorCode(): number;
        static retry(arg0: number): $RealmsError$CustomError;
        payload(): $Component;
        logMessage(): string;
        errorMessage(): $Component;
        static noPayload(arg0: number): $RealmsError$CustomError;
        static unknownCompatibilityResponse(arg0: string): $RealmsError$CustomError;
        static connectivityError(arg0: $RealmsHttpException): $RealmsError$CustomError;
        static SERVICE_BUSY: $RealmsError$CustomError;
        static RETRY_MESSAGE: $Component;
        constructor(arg0: number, arg1: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$CustomError}.
     */
    export type $RealmsError$CustomError_ = { payload?: $Component_, httpCode?: number,  } | [payload?: $Component_, httpCode?: number, ];
    export class $Request$Post extends $Request<$Request$Post> {
        doConnect(): $Request$Post;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    export class $UploadStatus {
        bytesWritten: number;
        totalBytes: number;
        constructor();
    }
    export class $Request$Put extends $Request<$Request$Put> {
        doConnect(): $Request$Put;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    export class $RealmsError {
        static parse(arg0: number, arg1: string): $RealmsError;
        static LOGGER: $Logger;
        static NO_MESSAGE: $Component;
    }
    export interface $RealmsError {
        errorCode(): number;
        logMessage(): string;
        errorMessage(): $Component;
    }
    export class $Ping$Region extends $Enum<$Ping$Region> {
    }
    /**
     * Values that may be interpreted as {@link $Ping$Region}.
     */
    export type $Ping$Region_ = "us_east_1" | "us_west_2" | "us_west_1" | "eu_west_1" | "ap_southeast_1" | "ap_southeast_2" | "ap_northeast_1" | "sa_east_1";
    export class $RealmsClient$Environment extends $Enum<$RealmsClient$Environment> {
        static values(): $RealmsClient$Environment[];
        static valueOf(arg0: string): $RealmsClient$Environment;
        static byName(arg0: string): ($RealmsClient$Environment) | undefined;
        baseUrl: string;
        protocol: string;
        static STAGE: $RealmsClient$Environment;
        static LOCAL: $RealmsClient$Environment;
        static PRODUCTION: $RealmsClient$Environment;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$Environment}.
     */
    export type $RealmsClient$Environment_ = "production" | "stage" | "local";
    export class $FileDownload$ProgressListener implements $ActionListener {
    }
    export class $RealmsClient$CompatibleVersionResponse extends $Enum<$RealmsClient$CompatibleVersionResponse> {
        static values(): $RealmsClient$CompatibleVersionResponse[];
        static valueOf(arg0: string): $RealmsClient$CompatibleVersionResponse;
        static OTHER: $RealmsClient$CompatibleVersionResponse;
        static COMPATIBLE: $RealmsClient$CompatibleVersionResponse;
        static OUTDATED: $RealmsClient$CompatibleVersionResponse;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$CompatibleVersionResponse}.
     */
    export type $RealmsClient$CompatibleVersionResponse_ = "compatible" | "outdated" | "other";
    export class $RealmsError$ErrorWithRawPayload extends $Record implements $RealmsError {
        httpCode(): number;
        errorCode(): number;
        payload(): string;
        logMessage(): string;
        errorMessage(): $Component;
        constructor(arg0: number, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$ErrorWithRawPayload}.
     */
    export type $RealmsError$ErrorWithRawPayload_ = { payload?: string, httpCode?: number,  } | [payload?: string, httpCode?: number, ];
    export class $Request$Delete extends $Request<$Request$Delete> {
        doConnect(): $Request$Delete;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $RealmsClientConfig {
        static setProxy(arg0: $Proxy): void;
        static getProxy(): $Proxy;
        constructor();
    }
    export class $Request$Get extends $Request<$Request$Get> {
        doConnect(): $Request$Get;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $FileDownload$DownloadCountingOutputStream extends $CountingOutputStream {
    }
    export class $FileUpload$CustomInputStreamEntity extends $InputStreamEntity {
    }
    export class $Ping {
        static ping(...arg0: $Ping$Region_[]): $List<$RegionPingResult>;
        static pingAllRegions(): $List<$RegionPingResult>;
        constructor();
    }
    export class $Request<T extends $Request<T>> {
        static cookie(arg0: $HttpURLConnection, arg1: string, arg2: string): void;
        cookie(arg0: string, arg1: string): void;
        responseCode(): number;
        static getHeader(arg0: $HttpURLConnection, arg1: string): string;
        getHeader(arg0: string): string;
        static post(arg0: string, arg1: string, arg2: number, arg3: number): $Request<never>;
        static post(arg0: string, arg1: string): $Request<never>;
        text(): string;
        static get(arg0: string, arg1: number, arg2: number): $Request<never>;
        static get(arg0: string): $Request<never>;
        static put(arg0: string, arg1: string): $Request<never>;
        static put(arg0: string, arg1: string, arg2: number, arg3: number): $Request<never>;
        static delete(arg0: string): $Request<never>;
        addSnapshotHeader(arg0: boolean): void;
        static getRetryAfterHeader(arg0: $HttpURLConnection): number;
        getRetryAfterHeader(): number;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $FileUpload {
        isFinished(): boolean;
        cancel(): void;
        upload(arg0: $Consumer_<$UploadResult>): void;
        constructor(arg0: $File_, arg1: number, arg2: number, arg3: $UploadInfo, arg4: $User, arg5: string, arg6: string, arg7: $UploadStatus);
        get finished(): boolean;
    }
    export class $FileDownload$ResourcePackProgressListener implements $ActionListener {
    }
}
