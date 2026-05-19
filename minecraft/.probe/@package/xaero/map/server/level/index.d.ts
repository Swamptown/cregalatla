import { $PrintWriter, $BufferedReader } from "@package/java/io";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/xaero/map/server/level" {
    export class $LevelMapProperties {
        setUsable(arg0: boolean): void;
        isUsable(): boolean;
        write(arg0: $FriendlyByteBuf): void;
        write(arg0: $PrintWriter): void;
        static read(arg0: $FriendlyByteBuf): $LevelMapProperties;
        read(arg0: $BufferedReader): void;
        getId(): number;
        constructor();
        get id(): number;
    }
}
