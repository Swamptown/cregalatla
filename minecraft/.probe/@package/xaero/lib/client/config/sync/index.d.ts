import { $Config } from "@package/xaero/lib/common/config";
import { $AbstractConfigPacket$OptionEntry } from "@package/xaero/lib/common/packet/config";
import { $ConfigOptionManager } from "@package/xaero/lib/common/config/option";
import { $CommonConfigChannelSynchronizer } from "@package/xaero/lib/common/config/sync";
import { $ConfigProfileInfoPacket$Entry } from "@package/xaero/lib/common/packet/config/profile";
import { $SingleConfigManager } from "@package/xaero/lib/common/config/single";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $List_ } from "@package/java/util";
import { $Iterable_ } from "@package/java/lang";
import { $ConfigProfile } from "@package/xaero/lib/common/config/profile";
import { $SyncedConfigProfileInfoManager } from "@package/xaero/lib/client/config/sync/profile";
export * as profile from "@package/xaero/lib/client/config/sync/profile";

declare module "@package/xaero/lib/client/config/sync" {
    export class $SyncedConfigManager extends $SingleConfigManager<$Config> {
        reset(): void;
        setSyncingEditedProfile(arg0: boolean): void;
        resetEdit(): void;
        getEditedProfile(): $ConfigProfile;
        receiveEditedProfile(arg0: $ConfigProfile): void;
        confirmEdit(arg0: $ConfigProfile): void;
        getDesiredEditedProfileId(): string;
        setDesiredEditedProfileId(arg0: string): void;
        isSyncingEditedProfile(): boolean;
        confirmChannelPresenceOnServer(): void;
        isChannelPresentOnServer(): boolean;
        getProfileInfoManager(): $SyncedConfigProfileInfoManager;
        setSynchronizer(arg0: $ClientConfigChannelSynchronizer): void;
        logger: $Logger;
        get editedProfile(): $ConfigProfile;
        get channelPresentOnServer(): boolean;
        get profileInfoManager(): $SyncedConfigProfileInfoManager;
        set synchronizer(value: $ClientConfigChannelSynchronizer);
    }
    export class $ClientConfigChannelSynchronizer extends $CommonConfigChannelSynchronizer {
        reset(): void;
        syncDirtyOptions(arg0: $ConfigProfile): void;
        requestProfile(arg0: string): void;
        deleteProfile(arg0: string): void;
        changeDefaultEnforcedProfileId(arg0: string): void;
        onEditProfilePacket(arg0: string, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>): void;
        onEnforcedConfigPacket(arg0: boolean, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>): void;
        onConfigProfileInfoPacket(arg0: $List_<$ConfigProfileInfoPacket$Entry>, arg1: string, arg2: boolean): void;
        onDeleteConfigProfilePacket(arg0: string): void;
        createProfile(arg0: string, arg1: string, arg2: string): void;
        logger: $Logger;
        constructor(arg0: $ConfigOptionManager, arg1: $SyncedConfigManager, arg2: $Logger);
    }
}
