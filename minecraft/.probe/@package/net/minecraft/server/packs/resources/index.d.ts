import { $FilterInputStream, $InputStream, $BufferedReader } from "@package/java/io";
import { $Gson, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $PipelineReloadableResourceManagerAccessor } from "@package/foundry/veil/mixin/pipeline/accessor";
import { $Logger } from "@package/org/slf4j";
import { $ProfileResults, $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ReloadableResourceManagerImplAccessor } from "@package/me/pepperbell/continuity/client/mixin";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $ContextAwareReloadListener } from "@package/net/neoforged/neoforge/resource";
import { $List, $Map_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $ZipEntry, $ZipFile } from "@package/java/util/zip";
import { $Unit_, $Unit, $ResourceLocationPattern } from "@package/net/minecraft/util";
import { $MetadataSectionSerializer, $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $PackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Predicate_ } from "@package/java/util/function";
import { $ResourceRedirectHandler } from "@package/me/pepperbell/continuity/client/resource";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $AtomicLong } from "@package/java/util/concurrent/atomic";
import { $PackResources, $PackType_, $PackType } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LifecycledResourceManagerImplExtension } from "@package/me/pepperbell/continuity/client/mixinterface";
import { $FabricLifecycledResourceManager, $FabricResource } from "@package/net/fabricmc/fabric/impl/resource/loader";
import { $Enum, $Record, $AutoCloseable, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/server/packs/resources" {
    export class $ResourceProvider {
        static fromMap(arg0: $Map_<$ResourceLocation_, $Resource>): $ResourceProvider;
        static EMPTY: $ResourceProvider;
    }
    export interface $ResourceProvider {
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        open(arg0: $ResourceLocation_): $InputStream;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
    }
    /**
     * Values that may be interpreted as {@link $ResourceProvider}.
     */
    export type $ResourceProvider_ = ((arg0: $ResourceLocation) => ($Resource) | undefined);
    export class $PreparableReloadListener$PreparationBarrier {
    }
    export interface $PreparableReloadListener$PreparationBarrier {
        wait<T>(arg0: T): $CompletableFuture<T>;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener$PreparationBarrier}.
     */
    export type $PreparableReloadListener$PreparationBarrier_ = ((arg0: any) => $CompletableFuture<any>);
    export class $FallbackResourceManager$ResourceWithSource extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$ResourceWithSource}.
     */
    export type $FallbackResourceManager$ResourceWithSource_ = { resource?: $IoSupplier_<$InputStream>, source?: $PackResources,  } | [resource?: $IoSupplier_<$InputStream>, source?: $PackResources, ];
    export class $ResourceMetadata$Builder {
        put<T>(arg0: $MetadataSectionSerializer<T>, arg1: T): $ResourceMetadata$Builder;
        build(): $ResourceMetadata;
        constructor();
    }
    export class $SimpleReloadInstance$StateFactory<S> {
    }
    export interface $SimpleReloadInstance$StateFactory<S> {
        create(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $PreparableReloadListener_, arg3: $Executor_, arg4: $Executor_): $CompletableFuture<S>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleReloadInstance$StateFactory}.
     */
    export type $SimpleReloadInstance$StateFactory_<S> = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $PreparableReloadListener, arg3: $Executor, arg4: $Executor) => $CompletableFuture<S>);
    export class $IoSupplier<T> {
        static create(arg0: $Path_): $IoSupplier<$InputStream>;
        static create(arg0: $ZipFile, arg1: $ZipEntry): $IoSupplier<$InputStream>;
    }
    export interface $IoSupplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $IoSupplier}.
     */
    export type $IoSupplier_<T> = (() => T);
    export class $PreparableReloadListener {
    }
    export interface $PreparableReloadListener {
        getName(): string;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $PreparableReloadListener}.
     */
    export type $PreparableReloadListener_ = ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor) => $CompletableFuture<void>);
    export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $JsonElement>> {
        static scanDirectory(arg0: $ResourceManager, arg1: string, arg2: $Gson, arg3: $Map_<$ResourceLocation_, $JsonElement_>): void;
        getPreparedPath(arg0: $ResourceLocation_): $ResourceLocation;
        constructor(arg0: $Gson, arg1: string);
    }
    export class $FallbackResourceManager$1ResourceWithSourceAndIndex extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$1ResourceWithSourceAndIndex}.
     */
    export type $FallbackResourceManager$1ResourceWithSourceAndIndex_ = { packIndex?: number, resource?: $IoSupplier_<$InputStream>, packResources?: $PackResources,  } | [packIndex?: number, resource?: $IoSupplier_<$InputStream>, packResources?: $PackResources, ];
    export class $FallbackResourceManager$LeakedResourceWarningInputStream extends $FilterInputStream {
    }
    export class $ResourceMetadata {
        static fromJsonStream(arg0: $InputStream): $ResourceMetadata;
        static EMPTY_SUPPLIER: $IoSupplier<$ResourceMetadata>;
        static EMPTY: $ResourceMetadata;
    }
    export interface $ResourceMetadata {
        getSection<T>(arg0: $MetadataSectionSerializer<T>): (T) | undefined;
        copySections(arg0: $Collection_<$MetadataSectionSerializer<never>>): $ResourceMetadata;
    }
    /**
     * Values that may be interpreted as {@link $ResourceMetadata}.
     */
    export type $ResourceMetadata_ = ((arg0: $MetadataSectionSerializer<any>) => (T) | undefined);
    export class $ResourceManagerReloadListener {
    }
    export interface $ResourceManagerReloadListener extends $PreparableReloadListener {
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        onResourceManagerReload(arg0: $ResourceManager): void;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManagerReloadListener}.
     */
    export type $ResourceManagerReloadListener_ = ((arg0: $ResourceManager) => void);
    export class $MultiPackResourceManager implements $CloseableResourceManager, $LifecycledResourceManagerImplExtension, $FabricLifecycledResourceManager {
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        continuity$getRedirectHandler(): $ResourceRedirectHandler;
        fabric_getResourceType(): $PackType;
        open(arg0: $ResourceLocation_): $InputStream;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        namespacedManagers: $Map<string, $FallbackResourceManager>;
        packs: $List<$PackResources>;
        constructor(arg0: $PackType_, arg1: $List_<$PackResources>);
        get namespaces(): $Set<string>;
    }
    export class $CloseableResourceManager {
    }
    export interface $CloseableResourceManager extends $ResourceManager, $AutoCloseable {
        close(): void;
    }
    export class $SimpleReloadInstance<S> implements $ReloadInstance {
        done(): $CompletableFuture<never>;
        static of(arg0: $ResourceManager, arg1: $List_<$PreparableReloadListener_>, arg2: $Executor_, arg3: $Executor_, arg4: $CompletableFuture<$Unit_>): $SimpleReloadInstance<void>;
        static create(arg0: $ResourceManager, arg1: $List_<$PreparableReloadListener_>, arg2: $Executor_, arg3: $Executor_, arg4: $CompletableFuture<$Unit_>, arg5: boolean): $ReloadInstance;
        getActualProgress(): number;
        isDone(): boolean;
        checkExceptions(): void;
        allDone: $CompletableFuture<$List<S>>;
        preparingListeners: $Set<$PreparableReloadListener>;
        allPreparations: $CompletableFuture<$Unit>;
        constructor(arg0: $Executor_, arg1: $Executor_, arg2: $ResourceManager, arg3: $List_<$PreparableReloadListener_>, arg4: $SimpleReloadInstance$StateFactory_<S>, arg5: $CompletableFuture<$Unit_>);
        get actualProgress(): number;
    }
    export class $FallbackResourceManager$PackEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$PackEntry}.
     */
    export type $FallbackResourceManager$PackEntry_ = { name?: string, resources?: $PackResources, filter?: $Predicate_<$ResourceLocation>,  } | [name?: string, resources?: $PackResources, filter?: $Predicate_<$ResourceLocation>, ];
    export class $FallbackResourceManager implements $ResourceManager {
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        push(arg0: $PackResources, arg1: $Predicate_<$ResourceLocation>): void;
        push(arg0: $PackResources): void;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        static parseMetadata(arg0: $IoSupplier_<$InputStream>): $ResourceMetadata;
        getNamespaces(): $Set<string>;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        pushFilterOnly(arg0: string, arg1: $Predicate_<$ResourceLocation>): void;
        static getMetadataLocation(arg0: $ResourceLocation_): $ResourceLocation;
        open(arg0: $ResourceLocation_): $InputStream;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        fallbacks: $List<$FallbackResourceManager$PackEntry>;
        static LOGGER: $Logger;
        type: $PackType;
        constructor(arg0: $PackType_, arg1: string);
        get namespaces(): $Set<string>;
    }
    export class $ProfiledReloadInstance extends $SimpleReloadInstance<$ProfiledReloadInstance$State> {
        allDone: $CompletableFuture<$List<$ProfiledReloadInstance$State>>;
        preparingListeners: $Set<$PreparableReloadListener>;
        allPreparations: $CompletableFuture<$Unit>;
        constructor(arg0: $ResourceManager, arg1: $List_<$PreparableReloadListener_>, arg2: $Executor_, arg3: $Executor_, arg4: $CompletableFuture<$Unit_>);
    }
    export class $ProfiledReloadInstance$State {
        preparationResult: $ProfileResults;
        reloadResult: $ProfileResults;
        name: string;
        reloadNanos: $AtomicLong;
        preparationNanos: $AtomicLong;
        constructor(arg0: string, arg1: $ProfileResults, arg2: $ProfileResults, arg3: $AtomicLong, arg4: $AtomicLong);
    }
    export class $ResourceManager$Empty extends $Enum<$ResourceManager$Empty> implements $ResourceManager {
        static values(): $ResourceManager$Empty[];
        static valueOf(arg0: string): $ResourceManager$Empty;
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        open(arg0: $ResourceLocation_): $InputStream;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        static INSTANCE: $ResourceManager$Empty;
        get namespaces(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceManager$Empty}.
     */
    export type $ResourceManager$Empty_ = "instance";
    export class $FallbackResourceManager$EntryStack extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FallbackResourceManager$EntryStack}.
     */
    export type $FallbackResourceManager$EntryStack_ = { metaSources?: $Map_<$PackResources, $IoSupplier_<$InputStream>>, fileSources?: $List_<$FallbackResourceManager$ResourceWithSource_>, metadataLocation?: $ResourceLocation_, fileLocation?: $ResourceLocation_,  } | [metaSources?: $Map_<$PackResources, $IoSupplier_<$InputStream>>, fileSources?: $List_<$FallbackResourceManager$ResourceWithSource_>, metadataLocation?: $ResourceLocation_, fileLocation?: $ResourceLocation_, ];
    export class $ReloadableResourceManager implements $ResourceManager, $AutoCloseable, $PipelineReloadableResourceManagerAccessor, $ReloadableResourceManagerImplAccessor {
        getResource(arg0: $ResourceLocation_): ($Resource) | undefined;
        close(): void;
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        registerReloadListener(arg0: $PreparableReloadListener_): void;
        createReload(arg0: $Executor_, arg1: $Executor_, arg2: $CompletableFuture<$Unit_>, arg3: $List_<$PackResources>): $ReloadInstance;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        registerReloadListenerIfNotPresent(arg0: $PreparableReloadListener_): void;
        open(arg0: $ResourceLocation_): $InputStream;
        openAsReader(arg0: $ResourceLocation_): $BufferedReader;
        getResourceOrThrow(arg0: $ResourceLocation_): $Resource;
        getListeners(): $List<$PreparableReloadListener>;
        getActiveManager(): $CloseableResourceManager;
        resources: $CloseableResourceManager;
        type: $PackType;
        constructor(arg0: $PackType_);
        get namespaces(): $Set<string>;
        get listeners(): $List<$PreparableReloadListener>;
        get activeManager(): $CloseableResourceManager;
    }
    /**
     * @deprecated
     */
    export class $SimplePreparableReloadListener<T> extends $ContextAwareReloadListener implements $PreparableReloadListener {
        apply(arg0: T, arg1: $ResourceManager, arg2: $ProfilerFiller): void;
        prepare(arg0: $ResourceManager, arg1: $ProfilerFiller): T;
        fabric_getRegistryLookup(): $HolderLookup$Provider;
        fabric_applyResourceConditions(arg0: $ResourceManager, arg1: $ProfilerFiller, arg2: $Object, arg3: $HolderLookup$Provider): void;
        constructor();
    }
    export class $ResourceManager {
    }
    export interface $ResourceManager extends $ResourceProvider {
        listResourceStacks(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $List<$Resource>>;
        listPacks(): $Stream<$PackResources>;
        listResources(arg0: string, arg1: $Predicate_<$ResourceLocation>): $Map<$ResourceLocation, $Resource>;
        getNamespaces(): $Set<string>;
        getResourceStack(arg0: $ResourceLocation_): $List<$Resource>;
        get namespaces(): $Set<string>;
    }
    export class $Resource implements $FabricResource {
        source(): $PackResources;
        open(): $InputStream;
        getFabricPackSource(): $PackSource;
        knownPackInfo(): ($KnownPack) | undefined;
        openAsReader(): $BufferedReader;
        metadata(): $ResourceMetadata;
        sourcePackId(): string;
        constructor(arg0: $PackResources, arg1: $IoSupplier_<$InputStream>, arg2: $IoSupplier_<$ResourceMetadata>);
        constructor(arg0: $PackResources, arg1: $IoSupplier_<$InputStream>);
        get fabricPackSource(): $PackSource;
    }
    export class $ResourceFilterSection {
        isNamespaceFiltered(arg0: string): boolean;
        isPathFiltered(arg0: string): boolean;
        static TYPE: $MetadataSectionType<$ResourceFilterSection>;
        constructor(arg0: $List_<$ResourceLocationPattern>);
    }
    export class $ReloadInstance {
    }
    export interface $ReloadInstance {
        done(): $CompletableFuture<never>;
        isDone(): boolean;
        checkExceptions(): void;
        getActualProgress(): number;
        get actualProgress(): number;
    }
}
