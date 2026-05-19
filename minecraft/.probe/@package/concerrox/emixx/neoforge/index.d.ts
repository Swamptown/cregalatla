import { $EmiPlusPlusPlatform } from "@package/concerrox/emixx";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $Path } from "@package/java/nio/file";
import { $ModContainer } from "@package/net/neoforged/fml";
export * as mixinplugin from "@package/concerrox/emixx/neoforge/mixinplugin";

declare module "@package/concerrox/emixx/neoforge" {
    export class $EmiPlusPlusPlatformNeoForge implements $EmiPlusPlusPlatform {
        getConfigDirectoryPath(): $Path;
        static INSTANCE: $EmiPlusPlusPlatformNeoForge;
        get configDirectoryPath(): $Path;
    }
    export class $EmiPlusPlusClientNeoForge {
        constructor(eventBus: $IEventBus, container: $ModContainer);
    }
    export class $EmiPlusPlusNeoForge {
        constructor(eventBus: $IEventBus, container: $ModContainer);
    }
}
