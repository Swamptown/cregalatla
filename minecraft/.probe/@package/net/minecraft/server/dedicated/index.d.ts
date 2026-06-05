import { $DataPackConfig, $LevelSettings, $GameType } from "@package/net/minecraft/world/level";
import { $JsonObject_ } from "@package/com/google/gson";
import { $File } from "@package/java/io";
import { $MinecraftServer$ServerResourcePackInfo, $Services, $ServerInterface, $WorldStem_, $MinecraftServer$ReloadableResources, $RegistryLayer_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $Logger } from "@package/org/slf4j";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $Properties } from "@package/java/util";
import { $PlayerDataStorage, $WorldData, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $UnaryOperator_, $IntFunction_, $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $Difficulty } from "@package/net/minecraft/world";
import { $RegistryAccess, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $Proxy } from "@package/java/net";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Thread, $Record, $Runnable } from "@package/java/lang";
import { $WorldDimensions, $WorldOptions } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/server/dedicated" {
    export class $Settings<T extends $Settings<T>> {
        static dispatchNumberOrString<V>(arg0: $IntFunction_<V>, arg1: $Function_<string, V>): $Function<string, V>;
        getLegacyBoolean(arg0: string): boolean;
        getLegacyString(arg0: string): string;
        getLegacy<V>(arg0: string, arg1: $Function_<string, V>): V;
        cloneProperties(): $Properties;
        getMutable<V>(arg0: string, arg1: $Function_<string, V>, arg2: V): $Settings$MutableValue<V>;
        getMutable(arg0: string, arg1: boolean): $Settings$MutableValue<boolean>;
        getMutable<V>(arg0: string, arg1: $Function_<string, V>, arg2: $Function_<V, string>, arg3: V): $Settings$MutableValue<V>;
        getMutable(arg0: string, arg1: number): $Settings$MutableValue<number>;
        reload(arg0: $RegistryAccess, arg1: $Properties): T;
        get<V>(arg0: string, arg1: $Function_<string, V>, arg2: $UnaryOperator_<V>, arg3: $Function_<V, string>, arg4: V): V;
        get<V>(arg0: string, arg1: $Function_<string, V>, arg2: V): V;
        get<V>(arg0: string, arg1: $Function_<string, V>, arg2: $Function_<V, string>, arg3: V): V;
        get(arg0: string, arg1: number): number;
        get(arg0: string, arg1: $UnaryOperator_<number>, arg2: number): number;
        get(arg0: string, arg1: number): number;
        get(arg0: string, arg1: boolean): boolean;
        get(arg0: string, arg1: string): string;
        store(arg0: $Path_): void;
        static loadFromFile(arg0: $Path_): $Properties;
        properties: $Properties;
        constructor(arg0: $Properties);
    }
    export class $DedicatedServerSettings {
        forceSave(): void;
        update(arg0: $UnaryOperator_<$DedicatedServerProperties>): $DedicatedServerSettings;
        getProperties(): $DedicatedServerProperties;
        constructor(arg0: $Path_);
        get properties(): $DedicatedServerProperties;
    }
    export class $DedicatedServerProperties$WorldDimensionData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DedicatedServerProperties$WorldDimensionData}.
     */
    export type $DedicatedServerProperties$WorldDimensionData_ = { generatorSettings?: $JsonObject_, levelType?: string,  } | [generatorSettings?: $JsonObject_, levelType?: string, ];
    export class $ServerWatchdog implements $Runnable {
        run(): void;
        constructor(arg0: $DedicatedServer);
    }
    export class $DedicatedPlayerList extends $PlayerList {
        static WHITELIST_FILE: $File;
        maxPlayers: number;
        static USERBANLIST_FILE: $File;
        static IPBANLIST_FILE: $File;
        static OPLIST_FILE: $File;
        static CHAT_FILTERED_FULL: $Component;
        static DUPLICATE_LOGIN_DISCONNECT_MESSAGE: $Component;
        constructor(arg0: $DedicatedServer, arg1: $LayeredRegistryAccess<$RegistryLayer_>, arg2: $PlayerDataStorage);
    }
    export class $Settings$MutableValue<V> implements $Supplier<V> {
        get(): V;
        update(arg0: $RegistryAccess, arg1: V): V;
        this$0: $Settings<any>;
    }
    export class $DedicatedServer extends $MinecraftServer implements $ServerInterface {
        getServerName(): string;
        convertOldUsers(): boolean;
        getLevelIdName(): string;
        getMaxTickLength(): number;
        getServerPort(): number;
        handleConsoleInputs(): void;
        handleConsoleInput(arg0: string, arg1: $CommandSourceStack): void;
        getServerIp(): string;
        showGui(): void;
        getPluginNames(): string;
        storeUsingWhiteList(arg0: boolean): void;
        getProperties(): $DedicatedServerProperties;
        runCommand(arg0: string): string;
        static VANILLA_BRAND: string;
        proxy: $Proxy;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        nextTickTimeNanos: number;
        resources: $MinecraftServer$ReloadableResources;
        worldData: $WorldData;
        static LOGGER: $Logger;
        services: $Services;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        constructor(arg0: $Thread, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $PackRepository, arg3: $WorldStem_, arg4: $DedicatedServerSettings, arg5: $DataFixer, arg6: $Services_, arg7: $ChunkProgressListenerFactory_);
        get serverName(): string;
        get levelIdName(): string;
        get maxTickLength(): number;
        get serverPort(): number;
        get serverIp(): string;
        get pluginNames(): string;
        get properties(): $DedicatedServerProperties;
    }
    export class $DedicatedServerProperties extends $Settings<$DedicatedServerProperties> {
        static fromFile(arg0: $Path_): $DedicatedServerProperties;
        createDimensions(arg0: $RegistryAccess): $WorldDimensions;
        onlineMode: boolean;
        opPermissionLevel: number;
        allowNether: boolean;
        regionFileComression: string;
        useNativeTransport: boolean;
        maxChainedNeighborUpdates: number;
        spawnNpcs: boolean;
        serverResourcePackInfo: ($MinecraftServer$ServerResourcePackInfo) | undefined;
        gamemode: $GameType;
        broadcastConsoleToOps: boolean;
        functionPermissionLevel: number;
        enableQuery: boolean;
        spawnAnimals: boolean;
        maxTickTime: number;
        entityBroadcastRangePercentage: number;
        forceGameMode: boolean;
        announcePlayerAchievements: boolean;
        rconPort: number;
        enforceSecureProfile: boolean;
        acceptsTransfers: boolean;
        motd: string;
        queryPort: number;
        maxPlayers: number;
        enableRcon: boolean;
        worldOptions: $WorldOptions;
        pvp: boolean;
        bugReportLink: string;
        rateLimitPacketsPerSecond: number;
        difficulty: $Difficulty;
        networkCompressionThreshold: number;
        maxWorldSize: number;
        static LOGGER: $Logger;
        whiteList: $Settings$MutableValue<boolean>;
        rconPassword: string;
        enableStatus: boolean;
        viewDistance: number;
        spawnProtection: number;
        hideOnlinePlayers: boolean;
        serverPort: number;
        allowFlight: boolean;
        broadcastRconToOps: boolean;
        enableJmxMonitoring: boolean;
        textFilteringConfig: string;
        preventProxyConnections: boolean;
        spawnMonsters: boolean;
        enforceWhitelist: boolean;
        syncChunkWrites: boolean;
        hardcore: boolean;
        playerIdleTimeout: $Settings$MutableValue<number>;
        levelName: string;
        initialDataPackConfiguration: $DataPackConfig;
        serverIp: string;
        simulationDistance: number;
        enableCommandBlock: boolean;
        properties: $Properties;
        logIPs: boolean;
        constructor(arg0: $Properties);
    }
}
