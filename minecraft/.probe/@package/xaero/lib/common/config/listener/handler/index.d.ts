import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $Config } from "@package/xaero/lib/common/config";
import { $Consumer_ } from "@package/java/util/function";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";

declare module "@package/xaero/lib/common/config/listener/handler" {
    export class $HandlerBasedConfigChangeListener implements $IConfigChangeListener {
        register(arg0: $ConfigOption<never>, arg1: $Consumer_<$Config>): void;
        onFullChange(arg0: $Config): void;
        postLoad(): void;
        onChange(arg0: $Config, arg1: $ConfigOption<never>): void;
        onRemoved(arg0: $Config): void;
    }
}
