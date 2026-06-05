import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component_ } from "@package/net/minecraft/network/chat";
export * as thread from "@package/net/minecraft/server/rcon/thread";

declare module "@package/net/minecraft/server/rcon" {
    export class $RconConsoleSource implements $CommandSource {
        prepareForCommand(): void;
        getCommandResponse(): string;
        sendSystemMessage(arg0: $Component_): void;
        createCommandSourceStack(): $CommandSourceStack;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        alwaysAccepts(): boolean;
        constructor(arg0: $MinecraftServer);
        get commandResponse(): string;
    }
    export class $NetworkDataOutputStream {
        writeFloat(arg0: number): void;
        toByteArray(): number[];
        writeShort(arg0: number): void;
        reset(): void;
        write(arg0: number): void;
        writeInt(arg0: number): void;
        writeBytes(arg0: number[]): void;
        writeString(arg0: string): void;
        constructor(arg0: number);
    }
    export class $PktUtils {
        static stringFromByteArray(arg0: number[], arg1: number, arg2: number): string;
        static intFromByteArray(arg0: number[], arg1: number): number;
        static intFromByteArray(arg0: number[], arg1: number, arg2: number): number;
        static intFromNetworkByteArray(arg0: number[], arg1: number, arg2: number): number;
        static toHexString(arg0: number): string;
        static MAX_PACKET_SIZE: number;
        static HEX_CHAR: string[];
        constructor();
    }
}
