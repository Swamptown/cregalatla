import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $VoicechatSocket, $Group$Type } from "@package/de/maxhenkel/voicechat/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $SocketAddress } from "@package/java/net";
import { $Packet, $Secret, $NetworkMessage, $MicPacket, $PingPacket, $SoundPacket, $ClientGroup, $PlayerState } from "@package/de/maxhenkel/voicechat/voice/common";
import { $UUID, $Map, $UUID_, $Collection_, $Collection } from "@package/java/util";
import { $Thread } from "@package/java/lang";
import { $CategoryManager } from "@package/de/maxhenkel/voicechat/plugins";

declare module "@package/de/maxhenkel/voicechat/voice/server" {
    export class $PingManager$PingListener {
    }
    export interface $PingManager$PingListener {
        onFailedAttempt(arg0: number): void;
        onTimeout(arg0: number): void;
        onPong(arg0: number, arg1: number): void;
    }
    export class $Server extends $Thread {
        disconnectClient(arg0: $UUID_): void;
        hasSecret(arg0: $UUID_): boolean;
        sendSoundPacket(arg0: $ServerPlayer, arg1: $PlayerState, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $ClientConnection, arg5: $SoundPacket<never>, arg6: string): void;
        getUnconnectedSender(arg0: $NetworkMessage): $ClientConnection;
        sendPacketRaw(arg0: $Packet<never>, arg1: $ClientConnection): void;
        generateNewSecret(arg0: $UUID_): $Secret;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        getGroupManager(): $ServerGroupManager;
        onMicPacket(arg0: $UUID_, arg1: $MicPacket): void;
        getPingManager(): $PingManager;
        changePort(arg0: number): void;
        getCategoryManager(): $ServerCategoryManager;
        getSender(arg0: $NetworkMessage): $ClientConnection;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        getSecret(arg0: $UUID_): $Secret;
        getBroadcastRange(arg0: number): number;
        getPlayerStateManager(): $PlayerStateManager;
        getSocket(): $VoicechatSocket;
        getConnection(arg0: $UUID_): $ClientConnection;
        close(): void;
        getPort(): number;
        isClosed(): boolean;
        sendPacket(arg0: $Packet<never>, arg1: $ClientConnection): boolean;
        getServer(): $MinecraftServer;
        broadcast(arg0: $Collection_<$ServerPlayer>, arg1: $SoundPacket<never>, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $UUID_, arg5: string): void;
        getConnections(): $Map<$UUID, $ClientConnection>;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $MinecraftServer);
        get groupManager(): $ServerGroupManager;
        get pingManager(): $PingManager;
        get categoryManager(): $ServerCategoryManager;
        get playerStateManager(): $PlayerStateManager;
        get socket(): $VoicechatSocket;
        get port(): number;
        get closed(): boolean;
        get server(): $MinecraftServer;
        get connections(): $Map<$UUID, $ClientConnection>;
    }
    export class $PingManager {
        onPongPacket(arg0: $PingPacket): void;
        checkTimeouts(): void;
        sendPing(arg0: $ClientConnection, arg1: number, arg2: number, arg3: $PingManager$PingListener): void;
        constructor(arg0: $Server);
    }
    export class $PlayerStateManager {
        static defaultDisconnectedState(arg0: $ServerPlayer): $PlayerState;
        broadcastRemoveState(arg0: $ServerPlayer): void;
        broadcastState(arg0: $ServerPlayer, arg1: $PlayerState): void;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        getState(arg0: $UUID_): $PlayerState;
        setGroup(arg0: $ServerPlayer, arg1: $UUID_): void;
        getStates(): $Collection<$PlayerState>;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
        get states(): $Collection<$PlayerState>;
    }
    export class $ClientConnection {
        setLastKeepAliveResponse(arg0: number): void;
        getLastKeepAliveResponse(): number;
        getPlayerUUID(): $UUID;
        getAddress(): $SocketAddress;
        send(arg0: $Server, arg1: $NetworkMessage): void;
        constructor(arg0: $UUID_, arg1: $SocketAddress);
        get playerUUID(): $UUID;
        get address(): $SocketAddress;
    }
    export class $ServerCategoryManager extends $CategoryManager {
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
    }
    export class $ServerGroupManager {
        cleanupGroups(): void;
        getPlayerGroup(arg0: $ServerPlayer): $Group;
        joinGroup(arg0: $Group, arg1: $ServerPlayer, arg2: string): void;
        leaveGroup(arg0: $ServerPlayer): void;
        addGroup(arg0: $Group, arg1: $ServerPlayer): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        removeGroup(arg0: $UUID_): boolean;
        getGroup(arg0: $UUID_): $Group;
        getGroups(): $Map<$UUID, $Group>;
        constructor(arg0: $Server);
        get groups(): $Map<$UUID, $Group>;
    }
    export class $Group {
        toClientGroup(): $ClientGroup;
        isIsolated(): boolean;
        isNormal(): boolean;
        getName(): string;
        isHidden(): boolean;
        isOpen(): boolean;
        getId(): $UUID;
        getType(): $Group$Type;
        getPassword(): string;
        isPersistent(): boolean;
        constructor(arg0: $UUID_, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: $Group$Type);
        constructor(arg0: $UUID_, arg1: string, arg2: string);
        constructor(arg0: $UUID_, arg1: string);
        constructor();
        constructor(arg0: $UUID_, arg1: string, arg2: string, arg3: boolean);
        get isolated(): boolean;
        get normal(): boolean;
        get name(): string;
        get hidden(): boolean;
        get open(): boolean;
        get id(): $UUID;
        get type(): $Group$Type;
        get password(): string;
        get persistent(): boolean;
    }
}
