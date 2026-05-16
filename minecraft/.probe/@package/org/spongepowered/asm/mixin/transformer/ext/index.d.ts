import { $ISyntheticClassRegistry } from "@package/org/spongepowered/asm/service";
import { $Class } from "@package/java/lang";
import { $List } from "@package/java/util";

declare module "@package/org/spongepowered/asm/mixin/transformer/ext" {
    export class $IExtensionRegistry {
    }
    export interface $IExtensionRegistry {
        getExtension<T extends $IExtension>(arg0: $Class<$IExtension>): T;
        getExtensions(): $List<$IExtension>;
        getSyntheticClassRegistry(): $ISyntheticClassRegistry;
        getActiveExtensions(): $List<$IExtension>;
        get extensions(): $List<$IExtension>;
        get syntheticClassRegistry(): $ISyntheticClassRegistry;
        get activeExtensions(): $List<$IExtension>;
    }
}
