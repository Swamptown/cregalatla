import { $ServerConfigChangeListener } from "@package/xaero/lib/common/config/server/listener";
import { $ConfigOptionManager } from "@package/xaero/lib/common/config/option";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";

declare module "@package/xaero/lib/common/config/channel/register/handler" {
    export class $IConfigChannelCommonRegistryHandler {
    }
    export interface $IConfigChannelCommonRegistryHandler {
        registerPrimaryCommonOptions(arg0: $ConfigOptionManager): void;
        registerProfiledOptions(arg0: $ConfigOptionManager): void;
        registerServerOptionChangeHandlers(arg0: $ServerConfigChangeListener): void;
        registerOptionServerRedirectors(arg0: $OptionValueRedirectorManager): void;
    }
}
