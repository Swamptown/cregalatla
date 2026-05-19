import { $PermissionNode } from "@package/xaero/lib/common/permission";

declare module "@package/xaero/lib/common/permission/config/channel" {
    export class $BuiltInConfigChannelPermissions {
        getEnforcedServerProfileNode(): $PermissionNode<string>;
        register(): void;
        get enforcedServerProfileNode(): $PermissionNode<string>;
    }
}
