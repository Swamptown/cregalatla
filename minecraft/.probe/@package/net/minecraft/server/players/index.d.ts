import { $JsonObject_ } from "@package/com/google/gson";
import { $MinecraftServer, $PlayerAdvancements, $RegistryLayer_, $ServerScoreboard } from "@package/net/minecraft/server";
import { $ServerAware } from "@package/com/illusivesoulworks/comforts/common/util";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity$RemovalReason_, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $List, $Map_, $UUID_, $Date, $List_, $Collection, $Map } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $SimpleDateFormat } from "@package/java/text";
import { $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $SocketAddress } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $GameProfileRepository_, $GameProfile } from "@package/com/mojang/authlib";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $RuntimeException, $Object } from "@package/java/lang";
import { $File, $File_ } from "@package/java/io";
import { $Level } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $ServerGamePacketListenerImpl, $CommonListenerCookie_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ServerStatsCounter } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/server/players" {
    export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
        getBypassesPlayerLimit(): boolean;
        getLevel(): number;
        constructor(arg0: $GameProfile, arg1: number, arg2: boolean);
        constructor(arg0: $JsonObject_);
        get bypassesPlayerLimit(): boolean;
        get level(): number;
    }
    export class $OldUsersConverter {
        static parseDate(arg0: string, arg1: $Date): $Date;
        static readOldListFormat(arg0: $File_, arg1: $Map_<string, string[]>): $List<string>;
        static convertUserBanlist(arg0: $MinecraftServer): boolean;
        static convertIpBanlist(arg0: $MinecraftServer): boolean;
        static convertOpsList(arg0: $MinecraftServer): boolean;
        static convertWhiteList(arg0: $MinecraftServer): boolean;
        static convertPlayers(arg0: $DedicatedServer): boolean;
        static ensureDirectoryExists(arg0: $File_): void;
        static serverReadyAfterUserconversion(arg0: $MinecraftServer): boolean;
        static convertMobOwnerIfNecessary(arg0: $MinecraftServer, arg1: string): $UUID;
        static OLD_OPLIST: $File;
        static OLD_USERBANLIST: $File;
        static LOGGER: $Logger;
        static OLD_IPBANLIST: $File;
        static OLD_WHITELIST: $File;
        constructor();
    }
    export class $GameProfileCache {
        clearExecutor(): void;
        getAsync(arg0: string): $CompletableFuture<($GameProfile) | undefined>;
        get(arg0: $UUID_): ($GameProfile) | undefined;
        get(arg0: string): ($GameProfile) | undefined;
        load(): $List<$GameProfileCache$GameProfileInfo>;
        add(arg0: $GameProfile): void;
        save(): void;
        static setUsesAuthentication(arg0: boolean): void;
        setExecutor(arg0: $Executor_): void;
        profilesByName: $Map<string, $GameProfileCache$GameProfileInfo>;
        constructor(arg0: $GameProfileRepository_, arg1: $File_);
        static set usesAuthentication(value: boolean);
        set executor(value: $Executor_);
    }
    export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(arg0: $GameProfile);
        constructor(arg0: $JsonObject_);
        constructor(arg0: $GameProfile, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
    }
    export class $BanListEntry<T> extends $StoredUserEntry<T> {
        getCreated(): $Date;
        getExpires(): $Date;
        getReason(): string;
        getSource(): string;
        getDisplayName(): $Component;
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(arg0: T, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
        constructor(arg0: T, arg1: $JsonObject_);
        get displayName(): $Component;
    }
    export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
        isBanned(arg0: string): boolean;
        isBanned(arg0: $SocketAddress): boolean;
        get(arg0: $SocketAddress): $IpBanListEntry;
        constructor(arg0: $File_);
    }
    export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
        constructor(arg0: $GameProfile);
        constructor(arg0: $JsonObject_);
    }
    export class $SleepStatus implements $ServerAware {
        comforts$getServer(): $ServerLevel;
        comforts$setServer(arg0: $ServerLevel): void;
        areEnoughDeepSleeping(arg0: number, arg1: $List_<$ServerPlayer>): boolean;
        removeAllSleepers(): void;
        amountSleeping(): number;
        sleepersNeeded(arg0: number): number;
        areEnoughSleeping(arg0: number): boolean;
        update(arg0: $List_<$ServerPlayer>): boolean;
        constructor();
    }
    export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
        canBypassPlayerLimit(arg0: $GameProfile): boolean;
        getKeyForUser(arg0: $GameProfile): string;
        constructor(arg0: $File_);
    }
    export class $GameProfileCache$GameProfileInfo {
    }
    export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
        isBanned(arg0: $GameProfile): boolean;
        getKeyForUser(arg0: $GameProfile): string;
        constructor(arg0: $File_);
    }
    export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
        getKeyForUser(arg0: $GameProfile): string;
        isWhiteListed(arg0: $GameProfile): boolean;
        constructor(arg0: $File_);
    }
    export class $PlayerList {
        getIpBans(): $IpBanList;
        reloadWhiteList(): void;
        isUsingWhitelist(): boolean;
        setUsingWhiteList(arg0: boolean): void;
        getWhiteListNames(): string[];
        deop(arg0: $GameProfile): void;
        handler$bja000$e4mc$injectListLoads(ci: $CallbackInfo): void;
        placeNewPlayer(arg0: $Connection, arg1: $ServerPlayer, arg2: $CommonListenerCookie_): void;
        updateEntireScoreboard(arg0: $ServerScoreboard, arg1: $ServerPlayer): void;
        canPlayerLogin(arg0: $SocketAddress, arg1: $GameProfile): $Component;
        handler$bja000$e4mc$allowOwnerLogin(socketAddress: $SocketAddress, gameProfile: $Object, cir: $CallbackInfoReturnable<any>): void;
        canBypassPlayerLimit(arg0: $GameProfile): boolean;
        getPlayerForLogin(arg0: $GameProfile, arg1: $ClientInformation_): $ServerPlayer;
        disconnectAllPlayersWithProfile(arg0: $GameProfile): boolean;
        getOpNames(): string[];
        handler$dce000$xaerominimap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$dkb001$xaeroworldmap$onSendWorldInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        handler$fjo000$xaerolib$onSendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $CallbackInfo): void;
        getPlayersWithAddress(arg0: string): $List<$ServerPlayer>;
        broadcastChatMessage(arg0: $PlayerChatMessage_, arg1: $ServerPlayer, arg2: $ChatType$Bound_): void;
        broadcastChatMessage(arg0: $PlayerChatMessage_, arg1: $CommandSourceStack, arg2: $ChatType$Bound_): void;
        setViewDistance(arg0: number): void;
        setSimulationDistance(arg0: number): void;
        setAllowCommandsForAllPlayers(arg0: boolean): void;
        addWorldborderListener(arg0: $ServerLevel): void;
        getSingleplayerData(): $CompoundTag;
        getMaxPlayers(): number;
        getPlayerCount(): number;
        getPlayerNamesArray(): string[];
        reloadResources(): void;
        getWhiteList(): $UserWhiteList;
        isWhiteListed(arg0: $GameProfile): boolean;
        isAllowCommandsForAllPlayers(): boolean;
        tick(): void;
        getPlayer(arg0: $UUID_): $ServerPlayer;
        isOp(arg0: $GameProfile): boolean;
        getPlayerByName(arg0: string): $ServerPlayer;
        getViewDistance(): number;
        getSimulationDistance(): number;
        getBans(): $UserBanList;
        saveAll(): void;
        getPlayers(): $List<$ServerPlayer>;
        getPlayerStats(arg0: $Player): $ServerStatsCounter;
        getPlayerAdvancements(arg0: $ServerPlayer): $PlayerAdvancements;
        broadcastSystemMessage(arg0: $Component_, arg1: boolean): void;
        broadcastSystemMessage(arg0: $Component_, arg1: $Function_<$ServerPlayer, $Component>, arg2: boolean): void;
        broadcastSystemToTeam(arg0: $Player, arg1: $Component_): void;
        broadcastSystemToAllExceptTeam(arg0: $Player, arg1: $Component_): void;
        sendPlayerPermissionLevel(arg0: $ServerPlayer): void;
        sendLevelInfo(arg0: $ServerPlayer, arg1: $ServerLevel): void;
        sendAllPlayerInfo(arg0: $ServerPlayer): void;
        sendActivePlayerEffects(arg0: $ServerPlayer): void;
        broadcastAll(arg0: $Packet<never>, arg1: $ResourceKey_<$Level>): void;
        broadcastAll(arg0: $Packet<never>): void;
        sendActiveEffects(arg0: $LivingEntity, arg1: $ServerGamePacketListenerImpl): void;
        remove(arg0: $ServerPlayer): void;
        load(arg0: $ServerPlayer): ($CompoundTag) | undefined;
        op(arg0: $GameProfile): void;
        save(arg0: $ServerPlayer): void;
        removeAll(): void;
        getOps(): $ServerOpList;
        broadcast(arg0: $Player, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $ResourceKey_<any>, arg6: $Packet<any>): void;
        getServer(): $MinecraftServer;
        respawn(arg0: $ServerPlayer, arg1: boolean, arg2: $Entity$RemovalReason_): $ServerPlayer;
        static WHITELIST_FILE: $File;
        maxPlayers: number;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(arg0: $MinecraftServer, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $PlayerDataStorage, arg3: number);
        get ipBans(): $IpBanList;
        get usingWhitelist(): boolean;
        set usingWhiteList(value: boolean);
        get whiteListNames(): string[];
        get opNames(): string[];
        get singleplayerData(): $CompoundTag;
        get playerCount(): number;
        get playerNamesArray(): string[];
        get whiteList(): $UserWhiteList;
        get bans(): $UserBanList;
        get players(): $List<$ServerPlayer>;
        get ops(): $ServerOpList;
        get server(): $MinecraftServer;
    }
    export class $StoredUserList<K, V extends $StoredUserEntry<K>> {
        getUserList(): string[];
        getKeyForUser(arg0: K): string;
        createEntry(arg0: $JsonObject_): $StoredUserEntry<K>;
        remove(arg0: $StoredUserEntry<K>): void;
        remove(arg0: K): void;
        get(arg0: K): V;
        load(): void;
        isEmpty(): boolean;
        add(arg0: V): void;
        contains(arg0: K): boolean;
        save(): void;
        getFile(): $File;
        getEntries(): $Collection<V>;
        constructor(arg0: $File_);
        get userList(): string[];
        get empty(): boolean;
        get file(): $File;
        get entries(): $Collection<V>;
    }
    export class $StoredUserEntry<T> {
        serialize(arg0: $JsonObject_): void;
        hasExpired(): boolean;
        getUser(): T;
        constructor(arg0: T);
        get user(): T;
    }
    export class $OldUsersConverter$ConversionError extends $RuntimeException {
    }
    export class $IpBanListEntry extends $BanListEntry<string> {
        reason: string;
        expires: $Date;
        static DATE_FORMAT: $SimpleDateFormat;
        static EXPIRES_NEVER: string;
        created: $Date;
        source: string;
        constructor(arg0: $JsonObject_);
        constructor(arg0: string, arg1: $Date, arg2: string, arg3: $Date, arg4: string);
        constructor(arg0: string);
    }
}
