import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $Logger } from "@package/org/apache/logging/log4j";
export * as io from "@package/xaero/lib/common/config/single/io";

declare module "@package/xaero/lib/common/config/single" {
    export class $SingleConfigManager<C extends $Config> {
        getEffective<T>(arg0: $ConfigOption<T>): T;
        setConfig(arg0: C): void;
        getRedirectorManager(): $OptionValueRedirectorManager;
        setRedirectorManager(arg0: $OptionValueRedirectorManager): void;
        setChangeListener(arg0: $IConfigChangeListener): void;
        getConfigId(): string;
        getChannel(): $ConfigChannel;
        getConfig(): C;
        setChannel(arg0: $ConfigChannel): void;
        logger: $Logger;
        constructor(arg0: $Logger, arg1: string);
        set changeListener(value: $IConfigChangeListener);
        get configId(): string;
    }
}
