import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $RepositorySource } from "@package/net/minecraft/server/packs/repository";
import { $HolderSet$ListBacked, $Registry } from "@package/net/minecraft/core";
import { $DynamicCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ResourceOrTagKeyArgument$Result } from "@package/net/minecraft/commands/arguments";
import { $Set_, $Set } from "@package/java/util";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Structure, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
export * as level from "@package/com/faboslav/structurify/common/mixin/level";
export * as structure from "@package/com/faboslav/structurify/common/mixin/structure";

declare module "@package/com/faboslav/structurify/common/mixin" {
    export class $ResourcePackManagerAccessor {
    }
    export interface $ResourcePackManagerAccessor {
        getSources(): $Set<$RepositorySource>;
        get sources(): $Set<$RepositorySource>;
    }
    /**
     * Values that may be interpreted as {@link $ResourcePackManagerAccessor}.
     */
    export type $ResourcePackManagerAccessor_ = (() => $Set_<$RepositorySource>);
    export class $ResourceKeyArgumentInvoker {
        static structurify$invokegetRegistryKey<T>(arg0: $CommandContext<$CommandSourceStack>, arg1: string, arg2: $ResourceKey_<$Registry<T>>, arg3: $DynamicCommandExceptionType): $ResourceKey<T>;
    }
    export interface $ResourceKeyArgumentInvoker {
    }
    export class $LocateCommandInvoker {
        static structurify$getMaxStructureSearchRadius(): number;
        static structurify$getStructureNotFoundError(): $DynamicCommandExceptionType;
        static structurify$getStructureInvalidError(): $DynamicCommandExceptionType;
        static structurify$invokeGetHolders(arg0: $ResourceOrTagKeyArgument$Result<$Structure_>, arg1: $Registry<$Structure_>): ($HolderSet$ListBacked<$Structure>) | undefined;
    }
    export interface $LocateCommandInvoker {
    }
    export class $AbstractWidgetInvoker {
    }
    export interface $AbstractWidgetInvoker {
    }
}
