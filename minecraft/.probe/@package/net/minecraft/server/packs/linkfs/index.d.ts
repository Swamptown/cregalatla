import { $File } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $FileSystem, $Path_, $WatchKey, $FileStore, $WatchEvent$Kind, $WatchService, $Path } from "@package/java/nio/file";
import { $BasicFileAttributes } from "@package/java/nio/file/attribute";
import { $Spliterator, $Iterator, $List_, $Map_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $FileSystemProvider } from "@package/java/nio/file/spi";

declare module "@package/net/minecraft/server/packs/linkfs" {
    export class $LinkFSPath implements $Path {
        resolveSibling(arg0: $Path_): $Path;
        resolveSibling(arg0: string): $Path;
        startsWith(arg0: string): boolean;
        iterator(): $Iterator<$Path>;
        endsWith(arg0: string): boolean;
        register(arg0: $WatchService, ...arg1: $WatchEvent$Kind<never>[]): $WatchKey;
        resolve(arg0: string): $Path;
        toFile(): $File;
        spliterator(): $Spliterator<$Path>;
        forEach(arg0: $Consumer_<$Path>): void;
        compareTo(arg0: $Path_): number;
        [Symbol.iterator](): Iterator<$Path>
    }
    export class $PathContents$FileContents extends $Record implements $PathContents {
        contents(): $Path;
        constructor(arg0: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $PathContents$FileContents}.
     */
    export type $PathContents$FileContents_ = { contents?: $Path_,  } | [contents?: $Path_, ];
    export class $LinkFSProvider extends $FileSystemProvider {
    }
    export class $PathContents$DirectoryContents extends $Record implements $PathContents {
        children(): $Map<string, $LinkFSPath>;
        constructor(arg0: $Map_<string, $LinkFSPath>);
    }
    /**
     * Values that may be interpreted as {@link $PathContents$DirectoryContents}.
     */
    export type $PathContents$DirectoryContents_ = { children?: $Map_<string, $LinkFSPath>,  } | [children?: $Map_<string, $LinkFSPath>, ];
    export class $LinkFileSystem$DirectoryEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $LinkFileSystem$DirectoryEntry}.
     */
    export type $LinkFileSystem$DirectoryEntry_ = { children?: $Map_<string, $LinkFileSystem$DirectoryEntry_>, files?: $Map_<string, $Path_>,  } | [children?: $Map_<string, $LinkFileSystem$DirectoryEntry_>, files?: $Map_<string, $Path_>, ];
    export class $LinkFileSystem$Builder {
        put(arg0: $List_<string>, arg1: $Path_): $LinkFileSystem$Builder;
        put(arg0: $List_<string>, arg1: string, arg2: $Path_): $LinkFileSystem$Builder;
        build(arg0: string): $FileSystem;
        constructor();
    }
    export class $LinkFileSystem extends $FileSystem {
        store(): $FileStore;
        static builder(): $LinkFileSystem$Builder;
        rootPath(): $LinkFSPath;
        static PATH_SEPARATOR: string;
        constructor(arg0: string, arg1: $LinkFileSystem$DirectoryEntry_);
    }
    export class $DummyFileAttributes implements $BasicFileAttributes {
    }
    export class $PathContents {
    }
    export interface $PathContents {
    }
    export class $LinkFSFileStore extends $FileStore {
    }
}
