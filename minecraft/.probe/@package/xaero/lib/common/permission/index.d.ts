import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
export * as config from "@package/xaero/lib/common/permission/config";

declare module "@package/xaero/lib/common/permission" {
    export class $PermissionNode<T> {
        getDefaultPath(): string;
        getActualPath(): string;
        getDisplayName(): $Component;
        getType(): $Class<T>;
        getComment(): $Component;
        getModId(): string;
        get defaultPath(): string;
        get actualPath(): string;
        get displayName(): $Component;
        get type(): $Class<T>;
        get comment(): $Component;
        get modId(): string;
    }
}
