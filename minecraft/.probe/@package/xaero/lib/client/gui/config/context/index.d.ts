import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Config } from "@package/xaero/lib/common/config";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getScreenTitleFormat(): string;
        isAutoConfirm(): boolean;
        getDropdownNarration(): $Component;
        isAutoDefaultProfile(): boolean;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getSyncMessage(): $Component;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        hasPermission(arg0: $ConfigChannel): boolean;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        isClientSide(): boolean;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get screenTitleFormat(): string;
        get autoConfirm(): boolean;
        get dropdownNarration(): $Component;
        get autoDefaultProfile(): boolean;
        get syncMessage(): $Component;
        get clientSide(): boolean;
    }
}
