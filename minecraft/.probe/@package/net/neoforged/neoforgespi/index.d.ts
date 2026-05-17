import { $IEnvironment } from "@package/cpw/mods/modlauncher/api";
import { $Logger } from "@package/org/slf4j";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $Class } from "@package/java/lang";
import { $ServiceLoader$Provider, $List } from "@package/java/util";
import { $ModLoadingIssue_, $ModLoadingIssue } from "@package/net/neoforged/fml";
export * as earlywindow from "@package/net/neoforged/neoforgespi/earlywindow";
export * as language from "@package/net/neoforged/neoforgespi/language";
export * as locating from "@package/net/neoforged/neoforgespi/locating";

declare module "@package/net/neoforged/neoforgespi" {
    export class $ILaunchContext {
        static LOGGER: $Logger;
    }
    export interface $ILaunchContext {
        mods(): $List<string>;
        environment(): $IEnvironment;
        loadServices<T>(arg0: $Class<T>): $Stream<$ServiceLoader$Provider<T>>;
        isLocated(arg0: $Path_): boolean;
        addLocated(arg0: $Path_): boolean;
        modLists(): $List<string>;
        mavenRoots(): $List<string>;
    }
    export class $IIssueReporting {
    }
    export interface $IIssueReporting {
        addIssue(arg0: $ModLoadingIssue_): void;
    }
    /**
     * Values that may be interpreted as {@link $IIssueReporting}.
     */
    export type $IIssueReporting_ = ((arg0: $ModLoadingIssue) => void);
}
