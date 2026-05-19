import { $Consumer_ } from "@package/java/util/function";
import { $Spliterator, $Iterator } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/config/sync/profile" {
    export class $SyncedConfigProfileInfoManager implements $Iterable<$IConfigProfileInfo> {
        getDefaultEnforcedProfileId(): string;
        setDefaultEnforcedProfileId(arg0: string): void;
        remove(arg0: string): void;
        reset(): void;
        get(arg0: string): $SyncedConfigProfileInfo;
        add(arg0: string, arg1: string): void;
        iterator(): $Iterator<$IConfigProfileInfo>;
        spliterator(): $Spliterator<$IConfigProfileInfo>;
        forEach(arg0: $Consumer_<$IConfigProfileInfo>): void;
        [Symbol.iterator](): Iterator<$IConfigProfileInfo>
    }
}
