import { $PrintWriter, $BufferedReader } from "@package/java/io";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/xaero/map/server/level" {
    export class $LevelMapProperties {
        getId(): number;
        write(arg0: $FriendlyByteBuf): void;
        write(arg0: $PrintWriter): void;
        read(arg0: $BufferedReader): void;
        static read(arg0: $FriendlyByteBuf): $LevelMapProperties;
        setUsable(arg0: boolean): void;
        isUsable(): boolean;
        constructor();
        get id(): number;
    }
}
