import { $Predicate_, $Supplier_, $Function_, $BooleanSupplier_, $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $HashSet } from "@package/java/util";
import { $Resource$DisplayMode_, $ResourceInstance, $IResourcePath, $IResourceProvider } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $Editor } from "@package/com/lowdragmc/lowdraglib2/editor/ui";
import { $ScrollerView, $SplitView$Horizontal } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui/resource" {
    export class $ResourceContainer<T> extends $UIElement {
        setOnResourceSelect(arg0: $Consumer_<$CompoundTag>): void;
        getSelectedProvider(): $IResourceProvider<$CompoundTag>;
        selectProvider(arg0: $IResourceProvider<$CompoundTag_>): void;
        loadResource(): void;
        editor: $Editor;
        static CODEC: $Codec<$UIElement>;
        splitView: $SplitView$Horizontal;
        resourceInstance: $ResourceInstance<$CompoundTag>;
        static EMPTY_LAYOUT: $Layout;
        providerContainer: $UIElement;
        providerList: $ScrollerView;
        constructor(arg0: $ResourceInstance<$CompoundTag_>, arg1: $Editor);
        set onResourceSelect(value: $Consumer_<$CompoundTag>);
        get selectedProvider(): $IResourceProvider<$CompoundTag>;
    }
    export class $ResourceProviderContainer<T> extends $UIElement {
        renameResource(arg0: $IResourcePath): void;
        editResource(arg0: $IResourcePath): void;
        markResourceDirty(arg0: $IResourcePath): void;
        setUiSupplier(arg0: $UIElementProvider_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setCanRename(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setCanEdit(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setCanCopy(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setOnDragProvider(arg0: $Function_<$IResourcePath, never>): $ResourceProviderContainer<$CompoundTag>;
        setSupportAdd(arg0: $BooleanSupplier_): $ResourceProviderContainer<$CompoundTag>;
        setOnEdit(arg0: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        setOnMenu(arg0: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $TreeBuilder$Menu>): $ResourceProviderContainer<$CompoundTag>;
        setOnResourceSelect(arg0: $Consumer_<$CompoundTag>): $ResourceProviderContainer<$CompoundTag>;
        getDirtyResources(): $HashSet<$IResourcePath>;
        getEditor(): $Editor;
        setEditor(arg0: $Editor): $ResourceProviderContainer<$CompoundTag>;
        selectResource(arg0: $IResourcePath): void;
        setUiWidth(arg0: number): void;
        reloadResourceContainer(): void;
        reloadSpecificResource(arg0: $IResourcePath): void;
        setDisplayMode(arg0: $Resource$DisplayMode_): void;
        addNewResource(arg0: $CompoundTag_): void;
        appendResourceUI(arg0: $IResourcePath): void;
        setAddDefault(arg0: $Supplier_<$CompoundTag>): $ResourceProviderContainer<$CompoundTag>;
        setCanRemove(arg0: $Predicate_<$IResourcePath>): $ResourceProviderContainer<$CompoundTag>;
        removeResource(arg0: $IResourcePath, arg1: boolean): void;
        getSelected(): $IResourcePath;
        copyResource(arg0: $IResourcePath): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        resourceProvider: $IResourceProvider<$CompoundTag>;
        constructor(arg0: $IResourceProvider<$CompoundTag_>);
        set uiSupplier(value: $UIElementProvider_<$IResourcePath>);
        set canRename(value: $Predicate_<$IResourcePath>);
        set canEdit(value: $Predicate_<$IResourcePath>);
        set canCopy(value: $Predicate_<$IResourcePath>);
        set onDragProvider(value: $Function_<$IResourcePath, never>);
        set supportAdd(value: $BooleanSupplier_);
        set onEdit(value: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $IResourcePath>);
        set onMenu(value: $BiConsumer_<$ResourceProviderContainer<$CompoundTag>, $TreeBuilder$Menu>);
        set onResourceSelect(value: $Consumer_<$CompoundTag>);
        get dirtyResources(): $HashSet<$IResourcePath>;
        set uiWidth(value: number);
        set displayMode(value: $Resource$DisplayMode_);
        set addDefault(value: $Supplier_<$CompoundTag>);
        set canRemove(value: $Predicate_<$IResourcePath>);
        get selected(): $IResourcePath;
    }
}
