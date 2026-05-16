import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $Config } from "@package/xaero/lib/common/config";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";

declare module "@package/xaero/lib/common/config/option/value/redirect" {
    export class $OptionValueRedirectorManager {
        getValue<T>(arg0: $ConfigOption<T>): T;
        register<T>(arg0: $ConfigOption<T>, arg1: $Supplier_<T>, arg2: $Predicate_<$ConfigChannel>): void;
        freeze(): void;
        setChangeListener(arg0: $IConfigChangeListener): void;
        shouldRedirect(arg0: $ConfigOption<never>): boolean;
        getCacheConfig(): $Config;
        setChannel(arg0: $ConfigChannel): void;
        set changeListener(value: $IConfigChangeListener);
        get cacheConfig(): $Config;
        set channel(value: $ConfigChannel);
    }
}
