import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/xaero/hud/path" {
    export class $XaeroPath {
        getSubPath(arg0: number): $XaeroPath;
        isSubOf(arg0: $XaeroPath): boolean;
        applyToFilePath(arg0: $Path_): $Path;
        getLastNode(): string;
        getNodeCount(): number;
        resolveSibling(arg0: string): $XaeroPath;
        resolve(arg0: string): $XaeroPath;
        resolve(arg0: $XaeroPath): $XaeroPath;
        getParent(): $XaeroPath;
        static root(arg0: string): $XaeroPath;
        static root(arg0: string, arg1: boolean): $XaeroPath;
        getRoot(): $XaeroPath;
        getAtIndex(arg0: number): $XaeroPath;
        get lastNode(): string;
        get nodeCount(): number;
        get parent(): $XaeroPath;
    }
}
