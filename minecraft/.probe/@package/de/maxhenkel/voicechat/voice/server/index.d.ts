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
        onTimeout(arg0: number): void;
        onFailedAttempt(arg0: number): void;
        onPong(arg0: number, arg1: number): void;
    }
    export class $Server extends $Thread {
        close(): void;
        getPort(): number;
        broadcast(arg0: $Collection_<$ServerPlayer>, arg1: $SoundPacket<never>, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $UUID_, arg5: string): void;
        changePort(arg0: number): void;
        getCategoryManager(): $ServerCategoryManager;
        generateNewSecret(arg0: $UUID_): $Secret;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        getPingManager(): $PingManager;
        getGroupManager(): $ServerGroupManager;
        onMicPacket(arg0: $UUID_, arg1: $MicPacket): void;
        disconnectClient(arg0: $UUID_): void;
        hasSecret(arg0: $UUID_): boolean;
        sendSoundPacket(arg0: $ServerPlayer, arg1: $PlayerState, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $ClientConnection, arg5: $SoundPacket<never>, arg6: string): void;
        getUnconnectedSender(arg0: $NetworkMessage): $ClientConnection;
        sendPacketRaw(arg0: $Packet<never>, arg1: $ClientConnection): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        getSecret(arg0: $UUID_): $Secret;
        getBroadcastRange(arg0: number): number;
        getPlayerStateManager(): $PlayerStateManager;
        getSender(arg0: $NetworkMessage): $ClientConnection;
        getSocket(): $VoicechatSocket;
        isClosed(): boolean;
        sendPacket(arg0: $Packet<never>, arg1: $ClientConnection): boolean;
        getServer(): $MinecraftServer;
        getConnections(): $Map<$UUID, $ClientConnection>;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        getConnection(arg0: $UUID_): $ClientConnection;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $MinecraftServer);
        get port(): number;
        get categoryManager(): $ServerCategoryManager;
        get pingManager(): $PingManager;
        get groupManager(): $ServerGroupManager;
        get playerStateManager(): $PlayerStateManager;
        get socket(): $VoicechatSocket;
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
        getState(arg0: $UUID_): $PlayerState;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        static defaultDisconnectedState(arg0: $ServerPlayer): $PlayerState;
        broadcastState(arg0: $ServerPlayer, arg1: $PlayerState): void;
        broadcastRemoveState(arg0: $ServerPlayer): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        setGroup(arg0: $ServerPlayer, arg1: $UUID_): void;
        getStates(): $Collection<$PlayerState>;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
        get states(): $Collection<$PlayerState>;
    }
    export class $ClientConnection {
        getAddress(): $SocketAddress;
        getLastKeepAliveResponse(): number;
        setLastKeepAliveResponse(arg0: number): void;
        getPlayerUUID(): $UUID;
        send(arg0: $Server, arg1: $NetworkMessage): void;
        constructor(arg0: $UUID_, arg1: $SocketAddress);
        get address(): $SocketAddress;
        get playerUUID(): $UUID;
    }
    export class $ServerCategoryManager extends $CategoryManager {
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
    }
    export class $ServerGroupManager {
        joinGroup(arg0: $Group, arg1: $ServerPlayer, arg2: string): void;
        leaveGroup(arg0: $ServerPlayer): void;
        cleanupGroups(): void;
        getPlayerGroup(arg0: $ServerPlayer): $Group;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        removeGroup(arg0: $UUID_): boolean;
        getGroup(arg0: $UUID_): $Group;
        getGroups(): $Map<$UUID, $Group>;
        addGroup(arg0: $Group, arg1: $ServerPlayer): void;
        constructor(arg0: $Server);
        get groups(): $Map<$UUID, $Group>;
    }
    export class $Group {
        getName(): string;
        isHidden(): boolean;
        isOpen(): boolean;
        getId(): $UUID;
        getType(): $Group$Type;
        isIsolated(): boolean;
        toClientGroup(): $ClientGroup;
        getPassword(): string;
        isPersistent(): boolean;
        isNormal(): boolean;
        constructor();
        constructor(arg0: $UUID_, arg1: string);
        constructor(arg0: $UUID_, arg1: string, arg2: string);
        constructor(arg0: $UUID_, arg1: string, arg2: string, arg3: boolean);
        constructor(arg0: $UUID_, arg1: string, arg2: string, arg3: boolean, arg4: boolean, arg5: $Group$Type);
        get name(): string;
        get hidden(): boolean;
        get open(): boolean;
        get id(): $UUID;
        get type(): $Group$Type;
        get isolated(): boolean;
        get password(): string;
        get persistent(): boolean;
        get normal(): boolean;
    }
}
