import { $JsonObject_, $JsonObject, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $HTTPResponse } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $List, $Collection, $Map, $Set } from "@package/java/util";
import { $WeakReference } from "@package/java/lang/ref";
import { $Predicate, $Function_, $BiFunction, $Predicate_, $Supplier } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Registry } from "@package/net/minecraft/core";
import { $Lazy, $LogType, $RegistryAccessContainer, $LogType_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ClassFilter } from "@package/dev/latvian/mods/kubejs/plugin";
import { $DataComponentType, $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Thread, $Throwable, $Enum, $Record, $Class, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $Logger } from "@package/org/slf4j";
import { $Event } from "@package/net/neoforged/bus/api";
import { $WSHandler } from "@package/dev/latvian/apps/tinyserver/ws";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Pattern } from "@package/java/util/regex";
import { $NativeEventWrapper$Listeners, $NativeEventWrapper$Listeners$Key } from "@package/dev/latvian/mods/kubejs/plugin/builtin/wrapper";
import { $RegistryType } from "@package/dev/latvian/mods/kubejs/registry";
import { $TypeWrappers, $TypeWrapperValidator_, $TypeWrapperFactory, $DirectTypeWrapperFactory_, $TypeWrapperFactory_ } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $KJSHTTPRequest, $KJSWSSession } from "@package/dev/latvian/mods/kubejs/web";
import { $Context, $Scriptable, $NativeJavaClass, $ContextFactory } from "@package/dev/latvian/mods/rhino";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as data from "@package/dev/latvian/mods/kubejs/script/data";

declare module "@package/dev/latvian/mods/kubejs/script" {
    export class $SourceLine extends $Record {
        static of(): $SourceLine;
        static of(source: string, line: number): $SourceLine;
        line(): number;
        source(): string;
        static write(buf: $FriendlyByteBuf, sourceLine: $SourceLine_): void;
        static read(buf: $FriendlyByteBuf): $SourceLine;
        static fromJson(json: $JsonObject_): $SourceLine;
        toJson(): $JsonObject;
        isUnknown(): boolean;
        static UNKNOWN: $SourceLine;
        constructor(source: string, line: number);
        get unknown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SourceLine}.
     */
    export type $SourceLine_ = { source?: string, line?: number,  } | [source?: string, line?: number, ];
    export class $ScriptManager {
        unload(): void;
        reload(): void;
        loadFromDirectory(): void;
        collectScripts(pack: $ScriptPack, dir: $Path_, path: string): void;
        loadPackFromDirectory(path: $Path_, name: string, exampleFile: boolean): void;
        isClassAllowed(name: string): boolean;
        getRegistries(): $RegistryAccessContainer;
        loadAdditional(): void;
        scriptType: $ScriptType;
        canListenEvents: boolean;
        packs: $Map<string, $ScriptPack>;
        contextFactory: $KubeJSContextFactory;
        constructor(t: $ScriptType_);
        get registries(): $RegistryAccessContainer;
    }
    export class $TypeWrapperRegistry$ContextFromFunction<T> {
    }
    export interface $TypeWrapperRegistry$ContextFromFunction<T> extends $BiFunction<$Context, $Object, T> {
    }
    /**
     * Values that may be interpreted as {@link $TypeWrapperRegistry$ContextFromFunction}.
     */
    export type $TypeWrapperRegistry$ContextFromFunction_<T> = (() => void);
    export class $KubeJSFileWatcherThread extends $Thread {
        reload: $Runnable;
        scriptType: $ScriptType;
        static MIN_PRIORITY: number;
        files: $ScriptFile[];
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(scriptType: $ScriptType_, files: $ScriptFile[], reload: $Runnable_);
    }
    export class $ConsoleLine implements $Supplier<$JsonElement> {
        get(): $JsonElement;
        getText(): string;
        withSourceLine(source: string, line: number): $ConsoleLine;
        withSourceLine(sourceLine: $SourceLine_): $ConsoleLine;
        customData(key: string, data: $JsonElement_, override: boolean): $ConsoleLine;
        toJson(): $JsonObject;
        withExternalFile(path: $Path_): $ConsoleLine;
        console: $ConsoleJS;
        static EMPTY_ARRAY: $ConsoleLine[];
        sourceLines: $Collection<$SourceLine>;
        externalFile: $Path;
        stackTrace: $List<string>;
        message: string;
        type: $LogType;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ConsoleLine>;
        timestamp: number;
        group: string;
        constructor(console: $ConsoleJS, timestamp: number, message: string);
        get text(): string;
    }
    export class $MapCodecTypeWrapper<T> extends $Record implements $TypeWrapperFactory<T> {
        target(): $Class<T>;
        wrap(o: $Object, target: $TypeInfo_): T;
        defaultValue(): T;
        codec(): $MapCodec<T>;
        constructor(target: $Class<T>, codec: $MapCodec_<T>, defaultValue: T);
    }
    /**
     * Values that may be interpreted as {@link $MapCodecTypeWrapper}.
     */
    export type $MapCodecTypeWrapper_<T> = { defaultValue?: any, codec?: $MapCodec_<any>, target?: $Class<any>,  } | [defaultValue?: any, codec?: $MapCodec_<any>, target?: $Class<any>, ];
    export class $PlatformWrapper$ModInfo {
        getName(): string;
        setName(n: string): void;
        getId(): string;
        getVersion(): string;
        getCustomName(): string;
        constructor(i: string);
        get id(): string;
        get version(): string;
        get customName(): string;
    }
    export class $ScriptType extends $Enum<$ScriptType> implements $ScriptTypePredicate, $ScriptTypeHolder {
        static values(): $ScriptType[];
        test(type: $ScriptType_): boolean;
        static valueOf(name: string): $ScriptType;
        negate(): $ScriptTypePredicate;
        isClient(): boolean;
        kjs$getScriptType(): $ScriptType;
        getLogFile(): $Path;
        isServer(): boolean;
        isStartup(): boolean;
        getValidTypes(): $List<$ScriptType>;
        or(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        and(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        console: $ConsoleJS;
        path: $Path;
        nativeEventListeners: $Map<$NativeEventWrapper$Listeners$Key, $NativeEventWrapper$Listeners>;
        static SERVER: $ScriptType;
        fileWatcherThread: $KubeJSFileWatcherThread;
        static VALUES: $ScriptType[];
        static STARTUP: $ScriptType;
        classFilter: $Lazy<$ClassFilter>;
        static CLIENT: $ScriptType;
        nameStrip: string;
        get client(): boolean;
        get logFile(): $Path;
        get server(): boolean;
        get startup(): boolean;
        get validTypes(): $List<$ScriptType>;
    }
    /**
     * Values that may be interpreted as {@link $ScriptType}.
     */
    export type $ScriptType_ = "startup" | "server" | "client";
    export class $TypeDescriptionRegistry {
    }
    export interface $TypeDescriptionRegistry {
        register(target: $Class<never>, typeInfo: $TypeInfo_): void;
        scriptType(): $ScriptType;
    }
    export class $KubeJSContextFactory extends $ContextFactory {
        manager: $ScriptManager;
        constructor(manager: $ScriptManager);
    }
    export class $ConsoleJS {
        group(): void;
        log(...message: $Object[]): void;
        flush(sync: boolean): void;
        info(message: $Object): $ConsoleLine;
        getLogger(): $Logger;
        trace(): void;
        error(message: string, sourceLine: $SourceLine_, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        error(message: string, throwable: $Throwable): $ConsoleLine;
        error(message: $Object): $ConsoleLine;
        error(message: string, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        warn(message: string, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        warn(message: string, sourceLine: $SourceLine_, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        warn(message: string, error: $Throwable): $ConsoleLine;
        warn(message: $Object): $ConsoleLine;
        debug(message: $Object): $ConsoleLine;
        groupEnd(): void;
        startCapturingErrors(): void;
        writeToFile(type: $LogType_, timestamp: number, line: string): void;
        writeToFile(type: $LogType_, line: string): void;
        printObject(o: $Object, tree: boolean): void;
        printObject(o: $Object): void;
        handleError(line: $ConsoleLine, error: $Throwable, exitPattern: $Pattern, print: boolean): void;
        stopCapturingErrors(): void;
        static getCurrent(): $ConsoleJS;
        resetFile(): void;
        shouldPrintDebug(): boolean;
        printClass(className: string): void;
        printClass(className: string, tree: boolean): void;
        static methodPattern(c: $Class<never>, method: string): $Pattern;
        setMuted(m: boolean): void;
        getMuted(): boolean;
        setDebugEnabled(m: boolean): void;
        getDebugEnabled(): boolean;
        setWriteToFile(m: boolean): void;
        getWriteToFile(): boolean;
        infof(message: string, ...args: $Object[]): $ConsoleLine;
        warnf(message: string, ...args: $Object[]): $ConsoleLine;
        errorf(message: string, ...args: $Object[]): $ConsoleLine;
        debugf(message: string, ...args: $Object[]): $ConsoleLine;
        getScriptLine(): number;
        errorsComponent(command: string): $Component;
        getErrorsResponse(ctx: $KJSHTTPRequest): $HTTPResponse;
        getWarningsResponse(ctx: $KJSHTTPRequest): $HTTPResponse;
        static SERVER: $ConsoleJS;
        scriptType: $ScriptType;
        static STARTUP: $ConsoleJS;
        wsBroadcaster: $WSHandler<$KJSHTTPRequest, $KJSWSSession>;
        static CLIENT: $ConsoleJS;
        contextFactory: $WeakReference<$ContextFactory>;
        constructor(m: $ScriptType_, log: $Logger);
        get logger(): $Logger;
        static get current(): $ConsoleJS;
        get scriptLine(): number;
    }
    export class $ScriptFileInfo {
        path: $Path;
        file: string;
        location: string;
        id: $ResourceLocation;
        pack: $ScriptPackInfo;
        locationPath: string;
        constructor(p: $ScriptPackInfo, ph: $Path_, f: string);
    }
    export class $DataComponentTypeInfoRegistry {
    }
    export interface $DataComponentTypeInfoRegistry {
        register(type: $DataComponentType_<never>, typeInfo: $TypeInfo_): void;
        scanClass(clz: $Class<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentTypeInfoRegistry}.
     */
    export type $DataComponentTypeInfoRegistry_ = ((type: $DataComponentType<never>, typeInfo: $TypeInfo) => void);
    export class $ScriptPackInfo {
        displayName: $Component;
        namespace: string;
        pathStart: string;
        scripts: $List<$ScriptFileInfo>;
        constructor(n: string, p: string);
    }
    export class $WithScriptContext {
    }
    export interface $WithScriptContext {
        cx(): $Context;
    }
    /**
     * Values that may be interpreted as {@link $WithScriptContext}.
     */
    export type $WithScriptContext_ = (() => $Context);
    export class $ScriptFile implements $Comparable<$ScriptFile> {
        getProperty(s: string, def: string): string;
        compareTo(o: $ScriptFile): number;
        load(): void;
        getProperties(s: string): $List<string>;
        getPriority(): number;
        skipLoading(): string;
        lastModified: number;
        lines: string[];
        pack: $ScriptPack;
        info: $ScriptFileInfo;
        constructor(pack: $ScriptPack, info: $ScriptFileInfo);
        get priority(): number;
    }
    export class $PlatformWrapper {
        /**
         * @deprecated
         */
        static getName(): string;
        static isLoaded(modId: string): boolean;
        static breakpoint(...args: $Object[]): void;
        static getMcVersion(): string;
        static setModName(modId: string, name: string): void;
        static getMinecraftVersionString(): string;
        static getCurrentThreadName(): string;
        static getPackMode(): string;
        static isGeneratingData(): boolean;
        static getList(): $Set<string>;
        static getModVersion(): string;
        static getMods(): $Map<string, $PlatformWrapper$ModInfo>;
        static isDevelopmentEnvironment(): boolean;
        static isClientEnvironment(): boolean;
        /**
         * @deprecated
         */
        static isFabric(): boolean;
        /**
         * @deprecated
         */
        static isForge(): boolean;
        static getMinecraftVersion(): number;
        static getInfo(modID: string): $PlatformWrapper$ModInfo;
        constructor();
        static get name(): string;
        static get mcVersion(): string;
        static get minecraftVersionString(): string;
        static get currentThreadName(): string;
        static get packMode(): string;
        static get generatingData(): boolean;
        static get list(): $Set<string>;
        static get modVersion(): string;
        static get mods(): $Map<string, $PlatformWrapper$ModInfo>;
        static get developmentEnvironment(): boolean;
        static get clientEnvironment(): boolean;
        static get fabric(): boolean;
        static get forge(): boolean;
        static get minecraftVersion(): number;
    }
    export class $CodecTypeWrapper<T> extends $Record implements $TypeWrapperFactory<T> {
        target(): $Class<T>;
        wrap(o: $Object, target: $TypeInfo_): T;
        defaultValue(): T;
        codec(): $Codec<T>;
        constructor(target: $Class<T>, codec: $Codec<T>, defaultValue: T);
    }
    /**
     * Values that may be interpreted as {@link $CodecTypeWrapper}.
     */
    export type $CodecTypeWrapper_<T> = { defaultValue?: any, codec?: $Codec<any>, target?: $Class<any>,  } | [defaultValue?: any, codec?: $Codec<any>, target?: $Class<any>, ];
    export class $ScriptPack {
        manager: $ScriptManager;
        scripts: $List<$ScriptFile>;
        info: $ScriptPackInfo;
        constructor(m: $ScriptManager, i: $ScriptPackInfo);
    }
    export class $KubeJSContext extends $Context {
        getType(): $ScriptType;
        loadJavaClass(name: string, error: boolean): $NativeJavaClass;
        lookupRegistryType(type: $TypeInfo_, from: $Object): $RegistryType<never>;
        lookupRegistry(type: $TypeInfo_, from: $Object): $Registry<never>;
        getJavaClassCache(): $Map<string, $Either<$NativeJavaClass, boolean>>;
        getRegistries(): $RegistryAccessContainer;
        getConsole(): $ConsoleJS;
        static JSTYPE_JAVA_CLASS: number;
        factory: $ContextFactory;
        static JSTYPE_JAVA_ARRAY: number;
        kjsFactory: $KubeJSContextFactory;
        topLevelScope: $Scriptable;
        static CONVERSION_TRIVIAL: number;
        static CONVERSION_NONE: number;
        generateObserverCount: boolean;
        static CONVERSION_EXACT: number;
        static JSTYPE_BOOLEAN: number;
        static JSTYPE_UNDEFINED: number;
        static JSTYPE_OBJECT: number;
        lock: $Object;
        static JSTYPE_STRING: number;
        static JSTYPE_NULL: number;
        static JSTYPE_JAVA_OBJECT: number;
        static JSTYPE_NUMBER: number;
        constructor(factory: $KubeJSContextFactory);
        get type(): $ScriptType;
        get javaClassCache(): $Map<string, $Either<$NativeJavaClass, boolean>>;
        get registries(): $RegistryAccessContainer;
        get console(): $ConsoleJS;
    }
    export class $RecordDefaultsRegistry {
    }
    export interface $RecordDefaultsRegistry {
        register(record: $Record): void;
    }
    /**
     * Values that may be interpreted as {@link $RecordDefaultsRegistry}.
     */
    export type $RecordDefaultsRegistry_ = ((record: $Record) => void);
    export class $ConsoleJS$VarFunc implements $Comparable<$ConsoleJS$VarFunc> {
    }
    export class $KubeJSServerContext extends $KubeJSContext {
        static JSTYPE_JAVA_CLASS: number;
        factory: $ContextFactory;
        static JSTYPE_JAVA_ARRAY: number;
        kjsFactory: $KubeJSContextFactory;
        topLevelScope: $Scriptable;
        static CONVERSION_TRIVIAL: number;
        static CONVERSION_NONE: number;
        generateObserverCount: boolean;
        static CONVERSION_EXACT: number;
        static JSTYPE_BOOLEAN: number;
        static JSTYPE_UNDEFINED: number;
        static JSTYPE_OBJECT: number;
        lock: $Object;
        static JSTYPE_STRING: number;
        static JSTYPE_NULL: number;
        static JSTYPE_JAVA_OBJECT: number;
        static JSTYPE_NUMBER: number;
        constructor(factory: $KubeJSContextFactory);
    }
    export class $ScriptTypePredicate {
        static ALL: $ScriptTypePredicate;
        static STARTUP_OR_CLIENT: $ScriptTypePredicate;
        static COMMON: $ScriptTypePredicate;
        static STARTUP_OR_SERVER: $ScriptTypePredicate;
    }
    export interface $ScriptTypePredicate extends $Predicate<$ScriptType> {
        test(type: $ScriptType_): boolean;
        getValidTypes(): $List<$ScriptType>;
        get validTypes(): $List<$ScriptType>;
    }
    /**
     * Values that may be interpreted as {@link $ScriptTypePredicate}.
     */
    export type $ScriptTypePredicate_ = ((type: $ScriptType) => boolean);
    export class $KubeJSBackgroundThread extends $Thread {
        static shutdown(): void;
        static running: boolean;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor();
    }
    export class $TypeWrapperRegistry {
        register<T>(target: $Class<T>, factory: $TypeWrapperRegistry$RegistriesFromFunction_<T>): void;
        register<T>(target: $Class<T>, factory: $TypeWrapperRegistry$ContextFromFunction_<T>): void;
        register<T>(target: $Class<T>, validator: $TypeWrapperValidator_, factory: $TypeWrapperRegistry$ContextFromFunction_<T>): void;
        register<T>(target: $Class<T>, validator: $TypeWrapperValidator_, factory: $DirectTypeWrapperFactory_<T>): void;
        register<T>(target: $Class<T>, factory: $DirectTypeWrapperFactory_<T>): void;
        register<T>(target: $Class<T>, factory: $TypeWrapperFactory_<T>): void;
        register<T>(target: $Class<T>, validator: $TypeWrapperValidator_, factory: $TypeWrapperFactory_<T>): void;
        registerEnumFromStringCodec<T extends $Enum<T>>(target: $Class<T>, codec: $Codec<T>): void;
        registerEnumFromStringCodec<T extends $Enum<T>>(target: $Class<T>, codec: $Codec<T>, defaultValue: T, forceLowerCase: boolean): void;
        registerAlias<F, T>(target: $Class<T>, from: $TypeInfo_, converter: $Function_<F, T>): void;
        registerAlias<F, T>(target: $Class<T>, from: $Class<F>, converter: $Function_<F, T>): void;
        registerCodec<T>(target: $Class<T>, codec: $Codec<T>): void;
        registerCodec<T>(target: $Class<T>, codec: $Codec<T>, defaultValue: T): void;
        registerMapCodec<T>(target: $Class<T>, codec: $MapCodec_<T>): void;
        registerMapCodec<T>(target: $Class<T>, codec: $MapCodec_<T>, defaultValue: T): void;
        hasTypeWrapper<T>(target: $Class<T>): boolean;
        scriptType(): $ScriptType;
        constructor(type: $ScriptType_, typeWrappers: $TypeWrappers);
    }
    export class $TypeWrapperRegistry$RegistriesFromFunction<T> {
    }
    export interface $TypeWrapperRegistry$RegistriesFromFunction<T> extends $BiFunction<$RegistryAccessContainer, $Object, T> {
    }
    /**
     * Values that may be interpreted as {@link $TypeWrapperRegistry$RegistriesFromFunction}.
     */
    export type $TypeWrapperRegistry$RegistriesFromFunction_<T> = (() => void);
    export class $BindingRegistry extends $Record {
        scope(): $Scriptable;
        type(): $ScriptType;
        add(name: string, value: $Object): void;
        context(): $KubeJSContext;
        constructor(scope: $Scriptable);
    }
    /**
     * Values that may be interpreted as {@link $BindingRegistry}.
     */
    export type $BindingRegistry_ = { context?: $KubeJSContext, scope?: $Scriptable,  } | [context?: $KubeJSContext, scope?: $Scriptable, ];
    export class $ScriptTypeHolder {
    }
    export interface $ScriptTypeHolder {
        kjs$getScriptType(): $ScriptType;
    }
    /**
     * Values that may be interpreted as {@link $ScriptTypeHolder}.
     */
    export type $ScriptTypeHolder_ = (() => $ScriptType_);
    export class $ScriptsLoadedEvent extends $Event {
        constructor();
    }
}
