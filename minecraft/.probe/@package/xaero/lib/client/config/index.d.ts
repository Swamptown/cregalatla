import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $SingleConfigManager } from "@package/xaero/lib/common/config/single";
import { $ClientOptionValueRedirectorManager } from "@package/xaero/lib/client/config/option/value/redirect";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
import { $SyncedConfigManager } from "@package/xaero/lib/client/config/sync";
import { $ClientConfigChangeListener } from "@package/xaero/lib/client/config/listener";
export * as sync from "@package/xaero/lib/client/config/sync";
export * as option from "@package/xaero/lib/client/config/option";
export * as listener from "@package/xaero/lib/client/config/listener";
export * as channel from "@package/xaero/lib/client/config/channel";

declare module "@package/xaero/lib/client/config" {
    export class $ClientConfigManager {
        getProfileManager(): $ConfigProfileManager;
        getRedirectorManager(): $ClientOptionValueRedirectorManager;
        getServerSynced(): $SyncedConfigManager;
        getEffective<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ConfigOption<T>): T;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): boolean;
        shouldIgnoreServerEnforcement<T>(arg0: $ConfigOption<T>): boolean;
        getPrimaryConfigManager(): $SingleConfigManager<$Config>;
        postLoad(): void;
        getChannel(): $ConfigChannel;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ConfigOption<T>): T;
        setChannel(arg0: $ConfigChannel): void;
        getChangeListener(): $ClientConfigChangeListener;
        getCurrentProfile(): $ConfigProfile;
        get profileManager(): $ConfigProfileManager;
        get redirectorManager(): $ClientOptionValueRedirectorManager;
        get serverSynced(): $SyncedConfigManager;
        get primaryConfigManager(): $SingleConfigManager<$Config>;
        get changeListener(): $ClientConfigChangeListener;
        get currentProfile(): $ConfigProfile;
    }
}
