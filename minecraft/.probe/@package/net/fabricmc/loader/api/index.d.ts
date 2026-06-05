import { $ModMetadata, $ModOrigin } from "@package/net/fabricmc/loader/api/metadata";
import { $Path } from "@package/java/nio/file";
import { $Comparable } from "@package/java/lang";
import { $Collection, $List } from "@package/java/util";
export * as metadata from "@package/net/fabricmc/loader/api/metadata";

declare module "@package/net/fabricmc/loader/api" {
    export class $Version {
        static parse(string: string): $Version;
    }
    export interface $Version extends $Comparable<$Version> {
        getFriendlyString(): string;
        get friendlyString(): string;
    }
    export class $ModContainer {
    }
    export interface $ModContainer {
        getOrigin(): $ModOrigin;
        /**
         * @deprecated
         */
        getRoot(): $Path;
        /**
         * @deprecated
         */
        getPath(arg0: string): $Path;
        /**
         * @deprecated
         */
        getRootPath(): $Path;
        getMetadata(): $ModMetadata;
        findPath(file: string): ($Path) | undefined;
        getRootPaths(): $List<$Path>;
        getContainingMod(): ($ModContainer) | undefined;
        getContainedMods(): $Collection<$ModContainer>;
        get origin(): $ModOrigin;
        get root(): $Path;
        get rootPath(): $Path;
        get metadata(): $ModMetadata;
        get rootPaths(): $List<$Path>;
        get containingMod(): ($ModContainer) | undefined;
        get containedMods(): $Collection<$ModContainer>;
    }
}
