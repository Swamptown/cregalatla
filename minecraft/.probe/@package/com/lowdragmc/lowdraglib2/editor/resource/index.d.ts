import { $Event } from "@package/net/neoforged/bus/api";
import { $Codec } from "@package/com/mojang/serialization";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Spliterator, $Iterator, $List, $Map, $Map$Entry, $List_ } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $Dialog } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $IRenderer } from "@package/com/lowdragmc/lowdraglib2/client/renderer";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $ResourceProviderContainer, $ResourceContainer } from "@package/com/lowdragmc/lowdraglib2/editor/ui/resource";
import { $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Runnable_, $Enum, $Iterable } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/editor/resource" {
    export class $IResourcePath {
        static parse(arg0: string): $IResourcePath;
        static CODEC: $Codec<$IResourcePath>;
        static PATH_WITH_TYPE_PATTERN: $Pattern;
        /**
         * @deprecated
         */
        static V0: $Codec<$IResourcePath>;
        /**
         * @deprecated
         */
        static V1: $Codec<$IResourcePath>;
        static V2: $Codec<$IResourcePath>;
    }
    export interface $IResourcePath {
        getPathWithType(): string;
        getType(): $ResourceProviderType;
        getPath(): string;
        getResourceName(): string;
        get pathWithType(): string;
        get type(): $ResourceProviderType;
        get path(): string;
        get resourceName(): string;
    }
    export class $EditorResourceEvent extends $Event {
        resourceInstance: $ResourceInstance<never>;
        constructor(arg0: $ResourceInstance<never>);
    }
    export class $IRendererResource extends $Resource<$IRenderer> {
        serializeResource(arg0: $IRenderer, arg1: $HolderLookup$Provider): $Tag;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): $IRenderer;
        static INSTANCE: $IRendererResource;
        constructor();
    }
    export class $Resource<T> {
        getResourceInstance(): $ResourceInstance<T>;
        serializeResource(arg0: T, arg1: $HolderLookup$Provider): $Tag;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): T;
        createResourceProviderContainer(arg0: $IResourceProvider<T>): $ResourceProviderContainer<T>;
        buildBuiltin(arg0: $ResourceInstance<T>): void;
        buildBuiltin(arg0: $BuiltinResourceProvider<T>): void;
        getDefaultDisplayMode(): $Resource$DisplayMode;
        setDefaultDisplayMode(arg0: $Resource$DisplayMode_): void;
        getDefaultUIWidth(): number;
        setDefaultUIWidth(arg0: number): void;
        getDisplayName(): $Component;
        getName(): string;
        getIcon(): $IGuiTexture;
        getFileExtension(): string;
        constructor();
        get resourceInstance(): $ResourceInstance<T>;
        get displayName(): $Component;
        get name(): string;
        get icon(): $IGuiTexture;
        get fileExtension(): string;
    }
    export class $EditorResourceEvent$LoadBuiltin extends $EditorResourceEvent {
        resourceInstance: $ResourceInstance<never>;
        constructor<T>(arg0: $ResourceInstance<T>);
    }
    export class $BuiltinResourceProvider<T> extends $ResourceProvider<T> {
        resourceInstance: $ResourceInstance<T>;
        name: string;
        static TYPE: $ResourceProviderType;
        constructor(arg0: string, arg1: $ResourceInstance<T>);
    }
    export class $Resources {
        static of(...arg0: $Resource<never>[]): $Resources;
        resources: $ImmutableList<$Resource<never>>;
        static EMPTY: $Resources;
        constructor(arg0: $List_<$Resource<never>>);
    }
    export class $ColorsResource extends $Resource<number> {
        serializeResource(arg0: number, arg1: $HolderLookup$Provider): $Tag;
        static INSTANCE: $ColorsResource;
        constructor();
    }
    export class $ResourceProviderType {
        createFullPath(arg0: string): $IResourcePath;
        supportCustom(): boolean;
        onCreateCustom<T>(arg0: $ResourceContainer<T>): void;
        fromNbt<T>(arg0: $ResourceInstance<T>, arg1: $CompoundTag_): $ResourceProvider<T>;
        getTypeName(): string;
        getIcon(): $IGuiTexture;
        constructor();
        get typeName(): string;
        get icon(): $IGuiTexture;
    }
    export class $IResourceProvider<T> {
    }
    export interface $IResourceProvider<T> extends $Iterable<$Map$Entry<$IResourcePath, T>> {
        getResourceInstance(): $ResourceInstance<$Map$Entry<$IResourcePath, T>>;
        canRename(arg0: $IResourcePath): boolean;
        canCopy(arg0: $IResourcePath): boolean;
        supportAdd(): boolean;
        removeResource(arg0: $IResourcePath): $Map$Entry<$IResourcePath, T>;
        hasResource(arg0: $IResourcePath): boolean;
        getResourceOrDefault(arg0: $IResourcePath, arg1: $Map$Entry<$IResourcePath, T>): $Map$Entry<$IResourcePath, T>;
        getResourceOrSupply(arg0: $IResourcePath, arg1: $Supplier_<$Map$Entry<$IResourcePath, T>>): $Map$Entry<$IResourcePath, T>;
        checkAndUpdateResourceProvider(): boolean;
        createProviderToggle(): $UIElement;
        onMenu(arg0: $TreeBuilder$Menu): void;
        getName(): string;
        getResource(arg0: $IResourcePath): $Map$Entry<$IResourcePath, T>;
        getType(): $ResourceProviderType;
        createSubPath(arg0: string): $IResourcePath;
        addResource(arg0: $IResourcePath, arg1: $Map$Entry<$IResourcePath, T>): boolean;
        canRemove(arg0: $IResourcePath): boolean;
        getResourceName(arg0: $IResourcePath): string;
        serializeNBT(): $CompoundTag;
        canEdit(arg0: $IResourcePath): boolean;
        get resourceInstance(): $ResourceInstance<$Map$Entry<$IResourcePath, T>>;
        get name(): string;
        get type(): $ResourceProviderType;
    }
    export class $ResourceInstance<T> implements $INBTSerializable<$CompoundTag> {
        listAllResources(): $List<$Map$Entry<$IResourcePath, $CompoundTag>>;
        createSelectorDialog(arg0: number, arg1: number, arg2: $Consumer_<$CompoundTag>, arg3: $Runnable_): $Dialog;
        addCustomProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getDisplayMode(): $Resource$DisplayMode;
        removeBuiltinProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getUiWidth(): number;
        setUiWidth(arg0: number): void;
        setDisplayMode(arg0: $Resource$DisplayMode_): void;
        addBuiltinProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        removeCustomProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        getBuiltinProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        getCustomProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        clearCache(): void;
        getResource(arg0: $IResourcePath): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        resource: $Resource<$CompoundTag>;
        constructor(arg0: $Resource<$CompoundTag_>);
        get builtinProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
        get customProviders(): $Map<$ResourceProviderType, $List<$IResourceProvider<$CompoundTag>>>;
    }
    export class $Resource$DisplayMode extends $Enum<$Resource$DisplayMode> {
        static values(): $Resource$DisplayMode[];
        static valueOf(arg0: string): $Resource$DisplayMode;
        static GRID: $Resource$DisplayMode;
        static LIST: $Resource$DisplayMode;
    }
    /**
     * Values that may be interpreted as {@link $Resource$DisplayMode}.
     */
    export type $Resource$DisplayMode_ = "list" | "grid";
    export class $TexturesResource extends $Resource<$IGuiTexture> {
        serializeResource(arg0: $IGuiTexture_, arg1: $HolderLookup$Provider): $Tag;
        static INSTANCE: $TexturesResource;
        constructor();
    }
    export class $ResourceProvider<T> implements $IResourceProvider<T> {
        getResourceInstance(): $ResourceInstance<T>;
        supportResourcePath(arg0: $IResourcePath): boolean;
        canRename(arg0: $IResourcePath): boolean;
        canCopy(arg0: $IResourcePath): boolean;
        removeResource(arg0: $IResourcePath): T;
        removeResource(arg0: string): T;
        hasResource(arg0: $IResourcePath): boolean;
        getContents(): $Map<$IResourcePath, T>;
        iterator(): $Iterator<$Map$Entry<$IResourcePath, T>>;
        getResource(arg0: $IResourcePath): T;
        addResource(arg0: $IResourcePath, arg1: T): boolean;
        addResource(arg0: string, arg1: T): boolean;
        canRemove(arg0: $IResourcePath): boolean;
        canEdit(arg0: $IResourcePath): boolean;
        supportAdd(): boolean;
        getResourceOrDefault(arg0: $IResourcePath, arg1: T): T;
        getResourceOrSupply(arg0: $IResourcePath, arg1: $Supplier_<T>): T;
        checkAndUpdateResourceProvider(): boolean;
        createProviderToggle(): $UIElement;
        onMenu(arg0: $TreeBuilder$Menu): void;
        getResourceName(arg0: $IResourcePath): string;
        serializeNBT(): $CompoundTag;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        resourceInstance: $ResourceInstance<T>;
        [Symbol.iterator](): Iterator<$Map$Entry<$IResourcePath, T>>
        get contents(): $Map<$IResourcePath, T>;
    }
    export class $UIResource extends $Resource<$UITemplate> {
        serializeResource(arg0: $UITemplate, arg1: $HolderLookup$Provider): $Tag;
        deserializeResource(arg0: $Tag_, arg1: $HolderLookup$Provider): $UITemplate;
        static INSTANCE: $UIResource;
        constructor();
    }
}
