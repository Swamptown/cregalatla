import { $InputStream, $BufferedReader } from "@package/java/io";
import { $Path_, $WatchEvent, $Path } from "@package/java/nio/file";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Component } from "@package/net/minecraft/network/chat";
import { $PackType, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ResourceMetadata, $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $List, $OptionalInt } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $ResourceFileEditor$Factory_ } from "@package/foundry/veil/api/resource/editor";
export * as editor from "@package/foundry/veil/api/resource/editor";

declare module "@package/foundry/veil/api/resource" {
    export class $VeilEditorEnvironment {
    }
    export interface $VeilEditorEnvironment {
        open<T extends $VeilResource<never>>(arg0: T, arg1: $ResourceFileEditor$Factory_<T>): void;
        open(arg0: $VeilResource<never>, arg1: $ResourceLocation_): void;
        getResourceManager(): $VeilResourceManager;
        get resourceManager(): $VeilResourceManager;
    }
    export class $VeilResourceInfo extends $Record {
        modResourcePath(): $Path;
        getResourceOrThrow(arg0: $VeilResourceManager): $Resource;
        openAsReader(arg0: $VeilResourceManager): $BufferedReader;
        filePath(): $Path;
        fileName(): string;
        getResource(arg0: $VeilResourceManager): ($Resource) | undefined;
        isStatic(): boolean;
        location(): $ResourceLocation;
        open(arg0: $VeilResourceManager): $InputStream;
        hidden(): boolean;
        packType(): $PackType;
        constructor(packType: $PackType_, location: $ResourceLocation_, filePath: $Path_, modResourcePath: $Path_, hidden: boolean);
        get static(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VeilResourceInfo}.
     */
    export type $VeilResourceInfo_ = { modResourcePath?: $Path_, packType?: $PackType_, filePath?: $Path_, location?: $ResourceLocation_, hidden?: boolean,  } | [modResourcePath?: $Path_, packType?: $PackType_, filePath?: $Path_, location?: $ResourceLocation_, hidden?: boolean, ];
    export class $VeilResourceAction<T extends $VeilResource<never>> {
    }
    export interface $VeilResourceAction<T extends $VeilResource<never>> {
        perform(arg0: $VeilEditorEnvironment, arg1: T): void;
        getDescription(): $Component;
        getName(): $Component;
        getIcon(): $OptionalInt;
        get description(): $Component;
        get name(): $Component;
        get icon(): $OptionalInt;
    }
    export class $VeilResource<T extends $VeilResource<never>> {
    }
    export interface $VeilResource<T extends $VeilResource<never>> {
        onFileSystemChange(arg0: $VeilResourceManager, arg1: $WatchEvent<$Path_>): $CompletableFuture<never>;
        resourceInfo(): $VeilResourceInfo;
        canHotReload(): boolean;
        hotReload(arg0: $VeilResourceManager): void;
        copyToResources(): void;
        getIconCode(): number;
        getActions(): $List<$VeilResourceAction<T>>;
        render(arg0: boolean, arg1: boolean): void;
        get iconCode(): number;
        get actions(): $List<$VeilResourceAction<T>>;
    }
    export class $VeilResourceManager {
        static get(): $VeilResourceManager;
    }
    export interface $VeilResourceManager {
        getVeilResource(arg0: $ResourceLocation_): $VeilResource<never>;
        getVeilResource(arg0: string, arg1: string): $VeilResource<never>;
        getResourceMetadata(arg0: string, arg1: string): $ResourceMetadata;
        getResourceMetadata(arg0: $ResourceLocation_): $ResourceMetadata;
        serverResources(): $ResourceManager;
        clientResources(): $ResourceManager;
        resources(arg0: $VeilResourceInfo_): $ResourceManager;
    }
}
