import { $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ServerConfigChangeListener } from "@package/xaero/lib/common/config/server/listener";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/server/sync";
export * as listener from "@package/xaero/lib/common/config/server/listener";

declare module "@package/xaero/lib/common/config/server" {
    export class $ServerConfigManager {
        getChannel(): $ConfigChannel;
        getProfileManager(): $ConfigProfileManager;
        getRedirectorManager(): $OptionValueRedirectorManager;
        setChangeListener(arg0: $ServerConfigChangeListener): void;
        setDefaultEnforcedProfileId(arg0: string): void;
        getPermissionBasedProfileId(arg0: $ServerPlayerData): string;
        hasServerProfileEditPermission(arg0: $ServerPlayerData): boolean;
        getEnforcedProfileForPlayer(arg0: $ServerPlayerData): $ConfigProfile;
        usesDefaultEnforcedProfile(arg0: $ServerPlayer): boolean;
        usesDefaultEnforcedProfile(arg0: $ServerPlayerData): boolean;
        getPermissionBasedProfile(arg0: $ServerPlayerData): $ConfigProfile;
        getEffective<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        getDefaultEnforcedProfile(): $ConfigProfile;
        postLoad(): void;
        getRaw<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        setChannel(arg0: $ConfigChannel): void;
        getServer(): $MinecraftServer;
        getChangeListener(): $ServerConfigChangeListener;
        setServer(arg0: $MinecraftServer): void;
        get profileManager(): $ConfigProfileManager;
        get redirectorManager(): $OptionValueRedirectorManager;
        set defaultEnforcedProfileId(value: string);
        get defaultEnforcedProfile(): $ConfigProfile;
    }
}
