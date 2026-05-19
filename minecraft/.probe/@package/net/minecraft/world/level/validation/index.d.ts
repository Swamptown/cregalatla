import { $BufferedReader } from "@package/java/io";
import { $PathMatcher, $FileSystem, $Path_, $PathMatcher_, $Path } from "@package/java/nio/file";
import { $List, $List_ } from "@package/java/util";
import { $Exception, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/validation" {
    export class $ContentValidationException extends $Exception {
        static getMessage(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): string;
        constructor(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>);
    }
    export class $ForbiddenSymlinkInfo extends $Record {
        link(): $Path;
        target(): $Path;
        constructor(arg0: $Path_, arg1: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $ForbiddenSymlinkInfo}.
     */
    export type $ForbiddenSymlinkInfo_ = { link?: $Path_, target?: $Path_,  } | [link?: $Path_, target?: $Path_, ];
    export class $PathAllowList$EntryType {
        static FILESYSTEM: $PathAllowList$EntryType;
        static PREFIX: $PathAllowList$EntryType;
    }
    export interface $PathAllowList$EntryType {
        compile(arg0: $FileSystem, arg1: string): $PathMatcher;
    }
    /**
     * Values that may be interpreted as {@link $PathAllowList$EntryType}.
     */
    export type $PathAllowList$EntryType_ = ((arg0: $FileSystem, arg1: string) => $PathMatcher_);
    export class $DirectoryValidator {
        validateKnownDirectory(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): void;
        validateSymlink(arg0: $Path_, arg1: $List_<$ForbiddenSymlinkInfo_>): void;
        validateSymlink(arg0: $Path_): $List<$ForbiddenSymlinkInfo>;
        validateDirectory(arg0: $Path_, arg1: boolean): $List<$ForbiddenSymlinkInfo>;
        constructor(arg0: $PathMatcher_);
    }
    export class $PathAllowList implements $PathMatcher {
        getForFileSystem(arg0: $FileSystem): $PathMatcher;
        matches(arg0: $Path_): boolean;
        static readPlain(arg0: $BufferedReader): $PathAllowList;
        constructor(arg0: $List_<$PathAllowList$ConfigEntry_>);
    }
    export class $PathAllowList$ConfigEntry extends $Record {
        static glob(arg0: string): $PathAllowList$ConfigEntry;
        type(): $PathAllowList$EntryType;
        compile(arg0: $FileSystem): $PathMatcher;
        static prefix(arg0: string): $PathAllowList$ConfigEntry;
        static regex(arg0: string): $PathAllowList$ConfigEntry;
        pattern(): string;
        static parse(arg0: string): ($PathAllowList$ConfigEntry) | undefined;
        constructor(arg0: $PathAllowList$EntryType_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $PathAllowList$ConfigEntry}.
     */
    export type $PathAllowList$ConfigEntry_ = { pattern?: string, type?: $PathAllowList$EntryType_,  } | [pattern?: string, type?: $PathAllowList$EntryType_, ];
}
