import { $PermissionNode, $PermissionDynamicContext } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection, $Set, $Collection_ } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/server/permission/handler" {
    export class $IPermissionHandler {
    }
    export interface $IPermissionHandler {
        getOfflinePermission<T>(arg0: $UUID_, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        getRegisteredNodes(): $Set<$PermissionNode<never>>;
        getPermission<T>(arg0: $ServerPlayer, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        getIdentifier(): $ResourceLocation;
        get registeredNodes(): $Set<$PermissionNode<never>>;
        get identifier(): $ResourceLocation;
    }
    export class $IPermissionHandlerFactory {
    }
    export interface $IPermissionHandlerFactory {
        create(arg0: $Collection_<$PermissionNode<never>>): $IPermissionHandler;
    }
    /**
     * Values that may be interpreted as {@link $IPermissionHandlerFactory}.
     */
    export type $IPermissionHandlerFactory_ = ((arg0: $Collection<$PermissionNode<never>>) => $IPermissionHandler);
    export class $DefaultPermissionHandler implements $IPermissionHandler {
        getOfflinePermission<T>(arg0: $UUID_, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        getRegisteredNodes(): $Set<$PermissionNode<never>>;
        getPermission<T>(arg0: $ServerPlayer, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        getIdentifier(): $ResourceLocation;
        static IDENTIFIER: $ResourceLocation;
        constructor(arg0: $Collection_<$PermissionNode<never>>);
        get registeredNodes(): $Set<$PermissionNode<never>>;
        get identifier(): $ResourceLocation;
    }
}
