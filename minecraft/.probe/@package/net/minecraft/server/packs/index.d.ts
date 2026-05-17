import { $IMixinCompositePackResources, $IMixinFilePackResourcesSharedZipFileAccess, $IMixinFilePackResources, $IMixinPathPackResources, $IMixinVanillaPackResources } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FileTime } from "@package/java/nio/file/attribute";
import { $IoSupplier, $ResourceProvider } from "@package/net/minecraft/server/packs/resources";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $UUID, $List, $Map_, $UUID_, $Set_, $List_, $Map, $Set } from "@package/java/util";
import { $InclusiveRange, $StringRepresentable, $HttpUtil$DownloadProgressListener, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $BiConsumer, $Consumer, $Consumer_ } from "@package/java/util/function";
import { $IPackResourcesExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Proxy, $URL } from "@package/java/net";
import { $Enum, $Record, $AutoCloseable, $Class } from "@package/java/lang";
import { $File, $InputStream, $File_ } from "@package/java/io";
import { $HashFunction, $HashCode } from "@package/com/google/common/hash";
import { $PackResourcesExtension as $PackResourcesExtension$1 } from "@package/com/supermartijn642/fusion/extensions";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ICachingResourcePack } from "@package/org/embeddedt/modernfix/resources";
import { $PackResourcesExtension$PackResourceConsumer_, $PackResourcesExtension } from "@package/foundry/veil/ext";
import { $ZipFile } from "@package/java/util/zip";
import { $Instant } from "@package/java/time";
import { $Pack$Position_, $PackSource, $Pack$Metadata_, $Pack$Position, $KnownPack_, $Pack$ResourcesSupplier, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
export * as repository from "@package/net/minecraft/server/packs/repository";
export * as linkfs from "@package/net/minecraft/server/packs/linkfs";
export * as resources from "@package/net/minecraft/server/packs/resources";
export * as metadata from "@package/net/minecraft/server/packs/metadata";

declare module "@package/net/minecraft/server/packs" {
    export class $VanillaPackResources implements $PackResources, $PackResourcesExtension, $IMixinVanillaPackResources {
        getResource(arg0: $PackType_, arg1: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        getRootResource(...arg0: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        listResources(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_): void;
        getNamespaces(arg0: $PackType_): $Set<string>;
        asProvider(): $ResourceProvider;
        listRawPaths(arg0: $PackType_, arg1: $ResourceLocation_, arg2: $Consumer_<$Path>): void;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$isStatic(): boolean;
        veil$getRawResourceRoots(): $List<any>;
        veil$getIcon(): $IoSupplier<any>;
        veil$blurIcon(): boolean;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        veil$listPacks(): $Stream<$PackResources>;
        isHidden(): boolean;
        getPathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
        getRootPaths_FancyMenu(): $List<$Path>;
        constructor(arg0: $PackLocationInfo_, arg1: $BuiltInMetadata, arg2: $Set_<string>, arg3: $List_<$Path_>, arg4: $Map_<$PackType_, $List_<$Path_>>);
        get hidden(): boolean;
        get pathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
        get rootPaths_FancyMenu(): $List<$Path>;
    }
    export class $PathPackResources$PathResourcesSupplier implements $Pack$ResourcesSupplier {
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
        constructor(arg0: $Path_);
    }
    export class $DownloadQueue$LogEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$LogEntry}.
     */
    export type $DownloadQueue$LogEntry_ = { id?: $UUID_, url?: string, hash?: (string) | undefined, time?: $Instant, errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>,  } | [id?: $UUID_, url?: string, hash?: (string) | undefined, time?: $Instant, errorOrFileInfo?: $Either<string, $DownloadQueue$FileInfoEntry_>, ];
    export class $DownloadCacheCleaner$PathAndTime extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndTime}.
     */
    export type $DownloadCacheCleaner$PathAndTime_ = { modifiedTime?: $FileTime, path?: $Path_,  } | [modifiedTime?: $FileTime, path?: $Path_, ];
    export class $DownloadCacheCleaner$PathAndPriority extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadCacheCleaner$PathAndPriority}.
     */
    export type $DownloadCacheCleaner$PathAndPriority_ = { removalPriority?: number, path?: $Path_,  } | [removalPriority?: number, path?: $Path_, ];
    export class $DownloadQueue implements $AutoCloseable {
        close(): void;
        downloadBatch(arg0: $DownloadQueue$BatchConfig_, arg1: $Map_<$UUID_, $DownloadQueue$DownloadRequest_>): $CompletableFuture<$DownloadQueue$BatchResult>;
        constructor(arg0: $Path_);
    }
    export class $DownloadQueue$BatchResult extends $Record {
        failed(): $Set<$UUID>;
        downloaded(): $Map<$UUID, $Path>;
        constructor();
        constructor(arg0: $Map_<$UUID_, $Path_>, arg1: $Set_<$UUID_>);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchResult}.
     */
    export type $DownloadQueue$BatchResult_ = { downloaded?: $Map_<$UUID_, $Path_>, failed?: $Set_<$UUID_>,  } | [downloaded?: $Map_<$UUID_, $Path_>, failed?: $Set_<$UUID_>, ];
    export class $BuiltInMetadata {
        get<T>(arg0: $MetadataSectionSerializer<T>): T;
        static of<T>(arg0: $MetadataSectionSerializer<T>, arg1: T): $BuiltInMetadata;
        static of<T1, T2>(arg0: $MetadataSectionSerializer<T1>, arg1: T1, arg2: $MetadataSectionSerializer<T2>, arg3: T2): $BuiltInMetadata;
        static of(): $BuiltInMetadata;
    }
    export class $DownloadCacheCleaner {
        static vacuumCacheDir(arg0: $Path_, arg1: number): void;
        constructor();
    }
    export class $CompositePackResources implements $PackResources, $PackResourcesExtension$1, $IMixinCompositePackResources {
        getResource(arg0: $PackType_, arg1: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        getRootResource(...arg0: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        listResources(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_): void;
        getNamespaces(arg0: $PackType_): $Set<string>;
        setFusionOverridesFolder(folder: string): void;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        isHidden(): boolean;
        getPackResourcesStack_FancyMenu(): $List<$PackResources>;
        getPrimaryPackResources_FancyMenu(): $PackResources;
        constructor(arg0: $PackResources, arg1: $List_<$PackResources>);
        set fusionOverridesFolder(value: string);
        get hidden(): boolean;
        get packResourcesStack_FancyMenu(): $List<$PackResources>;
        get primaryPackResources_FancyMenu(): $PackResources;
    }
    export class $FeatureFlagsMetadataSection extends $Record {
        flags(): $FeatureFlagSet;
        static TYPE: $MetadataSectionType<$FeatureFlagsMetadataSection>;
        constructor(arg0: $FeatureFlagSet);
    }
    /**
     * Values that may be interpreted as {@link $FeatureFlagsMetadataSection}.
     */
    export type $FeatureFlagsMetadataSection_ = { flags?: $FeatureFlagSet,  } | [flags?: $FeatureFlagSet, ];
    export class $FilePackResources$SharedZipFileAccess implements $AutoCloseable, $IMixinFilePackResourcesSharedZipFileAccess {
        finalize(): void;
        close(): void;
        getOrCreateZipFile(): $ZipFile;
        getOrCreateZipFile_FancyMenu(): $ZipFile;
        file: $File;
        constructor(arg0: $File_);
        get orCreateZipFile(): $ZipFile;
        get orCreateZipFile_FancyMenu(): $ZipFile;
    }
    export class $PackResources {
        static PACK_META: string;
        static METADATA_EXTENSION: string;
    }
    export interface $PackResources extends $AutoCloseable, $IPackResourcesExtension {
        getResource(arg0: $PackType_, arg1: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        knownPackInfo(): ($KnownPack) | undefined;
        getRootResource(...arg0: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        listResources(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_): void;
        getNamespaces(arg0: $PackType_): $Set<string>;
        packId(): string;
    }
    export class $FilePackResources extends $AbstractPackResources implements $PackResourcesExtension$1, $IMixinFilePackResources {
        setFusionOverridesFolder(folder: string): void;
        static extractNamespace(arg0: string, arg1: string): string;
        getZipFileAccess_FancyMenu(): $FilePackResources$SharedZipFileAccess;
        getPrefix_FancyMenu(): string;
        static LOGGER: $Logger;
        constructor(arg0: $PackLocationInfo_, arg1: $FilePackResources$SharedZipFileAccess, arg2: string);
        set fusionOverridesFolder(value: string);
        get zipFileAccess_FancyMenu(): $FilePackResources$SharedZipFileAccess;
        get prefix_FancyMenu(): string;
    }
    export class $DownloadQueue$FileInfoEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$FileInfoEntry}.
     */
    export type $DownloadQueue$FileInfoEntry_ = { name?: string, size?: number,  } | [name?: string, size?: number, ];
    export class $OverlayMetadataSection extends $Record {
        overlays(): $List<$OverlayMetadataSection$OverlayEntry>;
        overlaysForVersion(arg0: number): $List<string>;
        static NEOFORGE_TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        static TYPE: $MetadataSectionType<$OverlayMetadataSection>;
        constructor(overlays: $List_<$OverlayMetadataSection$OverlayEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection}.
     */
    export type $OverlayMetadataSection_ = { overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>,  } | [overlays?: $List_<$OverlayMetadataSection$OverlayEntry_>, ];
    export class $DownloadQueue$BatchConfig extends $Record {
        maxSize(): number;
        proxy(): $Proxy;
        listener(): $HttpUtil$DownloadProgressListener;
        headers(): $Map<string, string>;
        hashFunction(): $HashFunction;
        constructor(arg0: $HashFunction, arg1: number, arg2: $Map_<string, string>, arg3: $Proxy, arg4: $HttpUtil$DownloadProgressListener);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$BatchConfig}.
     */
    export type $DownloadQueue$BatchConfig_ = { listener?: $HttpUtil$DownloadProgressListener, proxy?: $Proxy, maxSize?: number, headers?: $Map_<string, string>, hashFunction?: $HashFunction,  } | [listener?: $HttpUtil$DownloadProgressListener, proxy?: $Proxy, maxSize?: number, headers?: $Map_<string, string>, hashFunction?: $HashFunction, ];
    export class $PackLocationInfo extends $Record {
        id(): string;
        source(): $PackSource;
        knownPackInfo(): ($KnownPack) | undefined;
        title(): $Component;
        createChatLink(arg0: boolean, arg1: $Component_): $Component;
        constructor(arg0: string, arg1: $Component_, arg2: $PackSource, arg3: ($KnownPack_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PackLocationInfo}.
     */
    export type $PackLocationInfo_ = { id?: string, source?: $PackSource, title?: $Component_, knownPackInfo?: ($KnownPack_) | undefined,  } | [id?: string, source?: $PackSource, title?: $Component_, knownPackInfo?: ($KnownPack_) | undefined, ];
    export class $VanillaPackResourcesBuilder {
        build(arg0: $PackLocationInfo_): $VanillaPackResources;
        setMetadata(arg0: $BuiltInMetadata): $VanillaPackResourcesBuilder;
        exposeNamespace(...arg0: string[]): $VanillaPackResourcesBuilder;
        applyDevelopmentConfig(): $VanillaPackResourcesBuilder;
        pushJarResources(): $VanillaPackResourcesBuilder;
        pushAssetPath(arg0: $PackType_, arg1: $Path_): $VanillaPackResourcesBuilder;
        pushClasspathResources(arg0: $PackType_, arg1: $Class<never>): $VanillaPackResourcesBuilder;
        pushUniversalPath(arg0: $Path_): $VanillaPackResourcesBuilder;
        static developmentConfig: $Consumer<$VanillaPackResourcesBuilder>;
        constructor();
        set metadata(value: $BuiltInMetadata);
    }
    export class $PathPackResources extends $AbstractPackResources implements $PackResources, $PackResourcesExtension, $PackResourcesExtension$1, $IMixinPathPackResources, $ICachingResourcePack {
        static getResource(arg0: $ResourceLocation_, arg1: $Path_): $IoSupplier<$InputStream>;
        invalidateCache(): void;
        static validatePath(arg0: $Path_): boolean;
        static listPath(arg0: string, arg1: $Path_, arg2: $List_<string>, arg3: $PackResources$ResourceOutput_): void;
        veil$listResources(arg0: $PackResourcesExtension$PackResourceConsumer_): void;
        veil$isStatic(): boolean;
        veil$getRawResourceRoots(): $List<any>;
        veil$getIcon(): $IoSupplier<any>;
        veil$blurIcon(): boolean;
        setFusionOverridesFolder(folder: string): void;
        static returnFileIfExists(arg0: $Path_): $IoSupplier<$InputStream>;
        veil$listPacks(): $Stream<$PackResources>;
        getRoot_FancyMenu(): $Path;
        constructor(arg0: $PackLocationInfo_, arg1: $Path_);
        set fusionOverridesFolder(value: string);
        get root_FancyMenu(): $Path;
    }
    export class $FilePackResources$FileResourcesSupplier implements $Pack$ResourcesSupplier {
        openPrimary(arg0: $PackLocationInfo_): $PackResources;
        openFull(arg0: $PackLocationInfo_, arg1: $Pack$Metadata_): $PackResources;
        constructor(arg0: $Path_);
        constructor(arg0: $File_);
    }
    export class $DownloadQueue$DownloadRequest extends $Record {
        hash(): $HashCode;
        url(): $URL;
        constructor(arg0: $URL, arg1: $HashCode);
    }
    /**
     * Values that may be interpreted as {@link $DownloadQueue$DownloadRequest}.
     */
    export type $DownloadQueue$DownloadRequest_ = { hash?: $HashCode, url?: $URL,  } | [hash?: $HashCode, url?: $URL, ];
    export class $PackResources$ResourceOutput {
    }
    export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
    }
    /**
     * Values that may be interpreted as {@link $PackResources$ResourceOutput}.
     */
    export type $PackResources$ResourceOutput_ = (() => void);
    export class $PackType extends $Enum<$PackType> implements $StringRepresentable {
        static values(): $PackType[];
        static valueOf(arg0: string): $PackType;
        getSerializedName(): string;
        getDirectory(): string;
        getRemappedEnumConstantName(): string;
        static CLIENT_RESOURCES: $PackType;
        static SERVER_DATA: $PackType;
        get serializedName(): string;
        get directory(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PackType}.
     */
    export type $PackType_ = "client_resources" | "server_data";
    export class $AbstractPackResources implements $PackResources {
        location(): $PackLocationInfo;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        static getMetadataFromStream<T>(arg0: $MetadataSectionSerializer<T>, arg1: $InputStream): T;
        knownPackInfo(): ($KnownPack) | undefined;
        packId(): string;
        isHidden(): boolean;
        constructor(arg0: $PackLocationInfo_);
        get hidden(): boolean;
    }
    export class $PackSelectionConfig extends $Record {
        required(): boolean;
        defaultPosition(): $Pack$Position;
        fixedPosition(): boolean;
        constructor(arg0: boolean, arg1: $Pack$Position_, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PackSelectionConfig}.
     */
    export type $PackSelectionConfig_ = { defaultPosition?: $Pack$Position_, fixedPosition?: boolean, required?: boolean,  } | [defaultPosition?: $Pack$Position_, fixedPosition?: boolean, required?: boolean, ];
    export class $OverlayMetadataSection$OverlayEntry extends $Record {
        format(): $InclusiveRange<number>;
        isApplicable(arg0: number): boolean;
        overlay(): string;
        static CODEC: $Codec<$OverlayMetadataSection$OverlayEntry>;
        constructor(format: $InclusiveRange_<number>, overlay: string);
    }
    /**
     * Values that may be interpreted as {@link $OverlayMetadataSection$OverlayEntry}.
     */
    export type $OverlayMetadataSection$OverlayEntry_ = { format?: $InclusiveRange_<number>, overlay?: string,  } | [format?: $InclusiveRange_<number>, overlay?: string, ];
}
