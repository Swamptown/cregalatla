import { $Path } from "@package/java/nio/file";
import { $PackType } from "@package/net/minecraft/server/packs";

declare module "@package/com/yungnickyoung/minecraft/paxi/mixin/accessor" {
    export class $FolderRepositorySourceAccessor {
    }
    export interface $FolderRepositorySourceAccessor {
        getPackType(): $PackType;
        getFolder(): $Path;
        get packType(): $PackType;
        get folder(): $Path;
    }
}
