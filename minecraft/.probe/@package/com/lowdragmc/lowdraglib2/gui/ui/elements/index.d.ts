import { $ConfigNumber$Type } from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";
import { $Codec } from "@package/com/mojang/serialization";
import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $ISearch, $IResultHandler_ } from "@package/com/lowdragmc/lowdraglib2/utils/search";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IGuiTexture_, $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $ISceneBlockRenderHook, $ParticleManager, $WorldSceneRenderer } from "@package/com/lowdragmc/lowdraglib2/client/scene";
import { $Map, $Set, $List, $Collection_, $List_ } from "@package/java/util";
import { $StringConfigurator, $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $FormattedCharSequence, $Tuple } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $Predicate, $BiConsumer, $BiConsumer_, $Function_, $IntConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $IngredientIO_ } from "@package/com/lowdragmc/lowdraglib2/integration/xei";
import { $IPersistedSerializable, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Style, $ModularUI, $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $UIEventListener_, $UIEvent } from "@package/com/lowdragmc/lowdraglib2/gui/ui/event";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Enum, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $TaffyDimension } from "@package/dev/vfyjxf/taffy/style";
import { $StyleSizeLength } from "@package/org/appliedenergistics/yoga/style";
import { $File_, $File } from "@package/java/io";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $BiMap } from "@package/com/google/common/collect";
import { $ITreeNode, $FileNode } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Cursor, $FillDirection, $FillDirection_, $TextWrap_, $ScrollerMode_, $Vertical, $ScrollerMode, $Horizontal, $Cursor_, $ScrollDisplay, $TextWrap, $ScrollDisplay_, $Horizontal_, $Vertical_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $IHistoryStack, $UIElementProvider, $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $IConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $FloatConsumer_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $IBinding, $IObservable, $IDataProvider, $IDataConsumer, $IObserver_, $IDataSource, $IBindable } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $TrackedDummyWorld } from "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel";
import { $Font } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockPosFace, $BlockPosFace_ } from "@package/com/lowdragmc/lowdraglib2/utils/data";
import { $Vector3f } from "@package/org/joml";
export * as inventory from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/inventory";
export * as codeeditor from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements" {
    export class $SearchComponent$ISearchUI$Empty<T> implements $SearchComponent$ISearchUI<T> {
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
        search(arg0: string, arg1: $IResultHandler_<T>): void;
        constructor();
    }
    export class $Selector$SelectorStyle extends $Style {
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        maxItemCount(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        static init(): void;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        holder: $UIElement;
    }
    export class $TextField extends $BindableUIElement<string> {
        setSelection(arg0: number, arg1: number): void;
        deleteChars(arg0: number): void;
        isEditable(): boolean;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        setResourceLocationOnly(): $TextField;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        setAnyString(): $TextField;
        getWheelDur(): number;
        getSelectionStart(): number;
        getSelectionEnd(): number;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        getHistoryStack(): $HistoryStack<string>;
        getCursorUnderMouseX(arg0: number): number;
        getWordPosition(arg0: number): number;
        getCursorPos(): number;
        getHighlighted(): string;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setWheelDur(arg0: number): $TextField;
        deleteWords(arg0: number): void;
        deleteCharsToPos(arg0: number): void;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        setTextRegexValidator(arg0: string): $TextField;
        setCompoundTagOnly(): $TextField;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        getRawText(): string;
        getDisplayOffset(): number;
        setFormatter(arg0: $Function_<string, $Component>): $TextField;
        getFormatter(): $Function<string, $Component>;
        getMode(): $TextField$Mode;
        setText(arg0: string, arg1: boolean): $TextField;
        setText(arg0: string): $TextField;
        setValue(arg0: string, arg1: boolean): $TextField;
        isError(): boolean;
        getText(): string;
        insertText(arg0: string): void;
        getFont(): $Font;
        setCursor(arg0: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get editable(): boolean;
        set textResponder(value: $Consumer_<string>);
        set textValidator(value: $Predicate_<string>);
        get selectionStart(): number;
        get selectionEnd(): number;
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<string>;
        get cursorPos(): number;
        get highlighted(): string;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        set textRegexValidator(value: string);
        get rawText(): string;
        get displayOffset(): number;
        get mode(): $TextField$Mode;
        get error(): boolean;
        get font(): $Font;
        set cursor(value: number);
    }
    export class $GraphView extends $UIElement {
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        addContentChild(arg0: $UIElement): $GraphView;
        removeContentChild(arg0: $UIElement): $GraphView;
        clearAllContentChildren(): $GraphView;
        fitToChildren(arg0: number, arg1: number): void;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        getOffsetX(): number;
        getOffsetY(): number;
        setOffsetX(arg0: number): void;
        setOffsetY(arg0: number): void;
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getScale(): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scale(): number;
    }
    export class $Scroller$ScrollerStyle extends $Style {
        scrollDelta(): number;
        scrollDelta(arg0: number): $Scroller$ScrollerStyle;
        scrollBarSize(): number;
        scrollBarSize(arg0: number): $Scroller$ScrollerStyle;
        static init(): void;
        holder: $UIElement;
        constructor(arg0: $Scroller);
    }
    export class $FluidSlot$SlotStyle extends $Style {
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getTabView(): $TabView;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        getTabStyle(): $Tab$TabStyle;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        setText(arg0: string): $Tab;
        setText(arg0: $Component_): $Tab;
        setText(arg0: string, arg1: boolean): $Tab;
        getContent(): $UIElement;
        setSelected(arg0: boolean): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get tabView(): $TabView;
        set onTabSelected(value: $Runnable_);
        set dynamicText(value: $Supplier_<$Component>);
        set onTabUnselected(value: $Runnable_);
        get content(): $UIElement;
        set selected(value: boolean);
    }
    export class $TextField$TextFieldStyle extends $Style {
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        errorColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        cursorColor(): number;
        static init(): void;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        fontSize(): number;
        placeholder(): $Component;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        textColor(): number;
        textColor(arg0: number): $TextField$TextFieldStyle;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        pressedTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Button);
    }
    export class $Scroller$Horizontal extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Button$State extends $Enum<$Button$State> {
        static values(): $Button$State[];
        static valueOf(arg0: string): $Button$State;
        static PRESSED: $Button$State;
        static HOVERED: $Button$State;
        static DEFAULT: $Button$State;
    }
    /**
     * Values that may be interpreted as {@link $Button$State}.
     */
    export type $Button$State_ = "default" | "hovered" | "pressed";
    export class $Toggle$ToggleStyle extends $Style {
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        unmarkTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        static init(): void;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        removeScrollViewChild(arg0: $UIElement): boolean;
        clearAllScrollViewChildren(): void;
        hasScrollViewChild(arg0: $UIElement): boolean;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        getContainerWidth(): number;
        getContainerHeight(): number;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get containerWidth(): number;
        get containerHeight(): number;
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        maxItemCount(): number;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        static init(): void;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        getNormalizedValue(): number;
        scrollValue(arg0: number): void;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        getClampNormalizedValue(): $Function<number, number>;
        getMinValue(): number;
        getMaxValue(): number;
        setMinValue(arg0: number): $Scroller;
        getValue(): number;
        setValue(arg0: number): $Scroller;
        setValue(arg0: number, arg1: boolean): $Scroller;
        isDragging(): boolean;
        setRange(arg0: number, arg1: number): $Scroller;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onValueChanged(value: $FloatConsumer_);
        set scrollBarSize(value: number);
        get dragging(): boolean;
    }
    export class $ToggleGroupElement extends $UIElement {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        toggleGroup: $Toggle$ToggleGroup;
        constructor();
    }
    export class $BindableUIElement<T> extends $UIElement implements $IBindable<T>, $IObservable<T>, $IDataConsumer<T> {
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        bindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        unbindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        unbindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        getValue(): T;
        setValue(arg0: T, arg1: boolean): $BindableUIElement<T>;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        bindObserver(arg0: $IObserver_<T>): $UIElement;
        setValue(arg0: T): $IDataSource<T>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $ItemSlot extends $BindableUIElement<$ItemStack> {
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Stream<$ItemStack_>): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        xeiRecipeSlot(): $ItemSlot;
        updateSlotPosition(): void;
        getFullTooltipTexts(): $List<$Component>;
        xeiPhantom(): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Stream<$ItemStack_>): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        getSlotStyle(): $ItemSlot$SlotStyle;
        setItem(arg0: $ItemStack_): $ItemSlot;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        bind(arg0: $Slot): $ItemSlot;
        bind(arg0: $IItemHandlerModifiable, arg1: number): $ItemSlot;
        setValue(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        getSlot(): $Slot;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static DRAGGING_BG: $IGuiTexture;
        static ITEM_SLOT_TEXTURE: $IGuiTexture;
        constructor();
        constructor(arg0: $Slot);
        get fullTooltipTexts(): $List<$Component>;
        get slot(): $Slot;
    }
    export class $SearchComponent$ISearchUI<T> {
        static empty<T>(): $SearchComponent$ISearchUI<T>;
        static EMPTY: $SearchComponent$ISearchUI$Empty<any>;
    }
    export interface $SearchComponent$ISearchUI<T> extends $ISearch<T> {
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
    }
    export class $Tab$TabStyle extends $Style {
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        hoverTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        baseTexture(): $IGuiTexture;
        selectedTexture(): $IGuiTexture;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        bindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $TextArea$History extends $Record {
        cursor(): $Cursor;
        lines(): string[];
        constructor(lines: string[], cursor: $Cursor_);
    }
    /**
     * Values that may be interpreted as {@link $TextArea$History}.
     */
    export type $TextArea$History_ = { cursor?: $Cursor_, lines?: string[],  } | [cursor?: $Cursor_, lines?: string[], ];
    export class $TreeList<NODE extends $ITreeNode<never, never>> extends $UIElement {
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        reloadList(): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        isNodeExpanded(arg0: NODE): boolean;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        collapseNode(arg0: NODE): void;
        createNodeUI(arg0: NODE): $UIElement;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        isNodeSelected(arg0: NODE): boolean;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        getTreeListStyle(): $TreeList$TreeListStyle;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        getHoveredNode(): NODE;
        getExpandedNodes(): $Set<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        getSelected(): $Set<NODE>;
        getRoot(): NODE;
        setRoot(arg0: NODE): $TreeList<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        set staticTree(value: boolean);
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        set flattenRoot(value: boolean);
        get treeListStyle(): $TreeList$TreeListStyle;
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set doubleClickToExpand(value: boolean);
        set clickToExpand(value: boolean);
        get nodeUIs(): $BiMap<NODE, $UIElement>;
        get hoveredNode(): NODE;
        get expandedNodes(): $Set<NODE>;
        set supportMultipleSelection(value: boolean);
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        collapseSelectionToCursor(): void;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        isEditable(): boolean;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        cursorPos(): $Cursor;
        pushHistory(): void;
        hasSelection(): boolean;
        getCursorLine(): number;
        getSelStartLine(): number;
        getSelEndLine(): number;
        getCursorCol(): number;
        drawContentView(arg0: $GUIContext): void;
        getScrollY(): number;
        getScrollX(): number;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        setLines(arg0: $List_<string>): $TextArea;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        getSelStartCol(): number;
        getSelEndCol(): number;
        lineHeight(): number;
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[], arg1: boolean): $TextArea;
        setValue(arg0: string[]): $TextArea;
        isError(): boolean;
        getLines(): $List<string>;
        getFont(): $Font;
        setCursor(arg0: number, arg1: number): void;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get editable(): boolean;
        set textValidator(value: $Predicate_<string[]>);
        get cursorLine(): number;
        get selStartLine(): number;
        get selEndLine(): number;
        get cursorCol(): number;
        get scrollY(): number;
        get scrollX(): number;
        set linesResponder(value: $Consumer_<string[]>);
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<$TextArea$History>;
        get selStartCol(): number;
        get selEndCol(): number;
        get error(): boolean;
        get font(): $Font;
    }
    export class $Switch$SwitchStyle extends $Style {
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        static init(): void;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        expandIcon(): $IGuiTexture;
        collapseIcon(): $IGuiTexture;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        nodeTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        show(): void;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        isSearchOnServer(): boolean;
        hide(): void;
        isOpen(): boolean;
        setSelected(arg0: T): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        preview: $UIElement;
        dialog: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        scrollerView: $ScrollerView;
        textField: $TextField;
        constructor();
        constructor(arg0: $SearchComponent$ISearchUI<T>);
        set onValueChanged(value: $Consumer_<T>);
        set candidateUIProvider(value: $UIElementProvider_<T>);
        get open(): boolean;
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        setFluid(arg0: $FluidStack_): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Stream<$FluidStack_>): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiPhantom(): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Stream<$FluidStack_>): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        getFluidAmountText(): $Component;
        isAllowClickFilled(): boolean;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        getFluid(): $FluidStack;
        setCapacity(arg0: number): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        getValue(): $FluidStack;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        getCapacity(): number;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fullTooltipTexts(): $List<$Component>;
        get fluidAmountText(): $Component;
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        setCompoundTagOnly(): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setListOnly(): $TagField;
        setAny(): $TagField;
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        textField: $TextField;
        constructor();
        set tagValidator(value: $Predicate_<$Tag>);
        set tagResponder(value: $Consumer_<$Tag>);
    }
    export class $Button extends $UIElement {
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        enableText(): $Button;
        setText(arg0: $Component_): $Button;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        setOnServerClick(arg0: $UIEventListener_): $Button;
        addPreIcon(arg0: $IGuiTexture_): $Button;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        setText(arg0: string, arg1: boolean): $Button;
        getState(): $Button$State;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        set onClick(value: $UIEventListener_);
        set onServerClick(value: $UIEventListener_);
        get state(): $Button$State;
    }
    export class $GraphView$GraphViewStyle extends $Style {
        minScale(arg0: number): $GraphView$GraphViewStyle;
        minScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        maxScale(): number;
        allowPan(): boolean;
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        gridTexture(): $IGuiTexture;
        gridTexture(arg0: $IGuiTexture_): $GraphView$GraphViewStyle;
        gridSize(): number;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        holder: $UIElement;
        constructor(arg0: $GraphView);
    }
    export class $SplitView$Horizontal extends $SplitView {
        setPercentage(arg0: number): $SplitView$Horizontal;
        left(arg0: $UIElement): $SplitView$Horizontal;
        right(arg0: $UIElement): $SplitView$Horizontal;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        isPlayerSlot(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        showItemTooltips(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        quickMovePriority(): number;
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        fillDirection(): $FillDirection;
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        holder: $UIElement;
        constructor(arg0: $ProgressBar);
    }
    export class $Scroller$Vertical extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu<K, T> extends $UIElement {
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        close(): void;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set autoClose(value: boolean);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set uiProvider(value: $UIElementProvider_<K>);
        set onClose(value: $Runnable_);
    }
    export class $Dialog extends $UIElement {
        addButton(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        show(arg0: $UIElement): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        allowInteraction(): $Dialog;
        darkenBackground(): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        bottom(): $Dialog;
        close(): void;
        top(): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        setTitle(arg0: string): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set autoClose(value: boolean);
        set clickOutsideClose(value: boolean);
        set onClose(value: $Runnable_);
        set title(value: string);
    }
    export class $TabView extends $UIElement {
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        getSelectedTab(): $Tab;
        removeTab(arg0: $Tab): $TabView;
        selectTab(arg0: $Tab): $TabView;
        clear(): $TabView;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get tabContents(): $BiMap<$Tab, $UIElement>;
        set onTabSelected(value: $Consumer_<$Tab>);
        get selectedTab(): $Tab;
    }
    export class $Scene extends $UIElement {
        getParticleManager(): $ParticleManager;
        setRenderFacing(arg0: boolean): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        createScene(arg0: $Level_, arg1: boolean, arg2: $Size): $Scene;
        createScene(arg0: $Level_): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        setZoom(arg0: number): $Scene;
        setOrthoRange(arg0: number): $Scene;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        getDummyWorld(): $TrackedDummyWorld;
        isRenderFacing(): boolean;
        isRenderSelect(): boolean;
        isDraggable(): boolean;
        setDraggable(arg0: boolean): $Scene;
        isScalable(): boolean;
        setScalable(arg0: boolean): $Scene;
        isIntractable(): boolean;
        setIntractable(arg0: boolean): $Scene;
        isShowHoverBlockTips(): boolean;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        getRotationPitch(): number;
        getRotationYaw(): number;
        getZoom(): number;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        isUseCache(): boolean;
        isUseOrtho(): boolean;
        isAutoReleased(): boolean;
        isTickWorld(): boolean;
        setTickWorld(arg0: boolean): $Scene;
        getLastHoverItem(): $ItemStack;
        getLastClickPosFace(): $BlockPosFace;
        getLastHoverPosFace(): $BlockPosFace;
        getLastSelectedPosFace(): $BlockPosFace;
        useOrtho(arg0: boolean): $Scene;
        useOrtho(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        useCacheBuffer(): $Scene;
        camZoom(): number;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        releaseRendererResource(): void;
        needCompileCache(): void;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        setCenter(arg0: $Vector3f): $Scene;
        getRange(): number;
        isDragging(): boolean;
        getRenderer(): $WorldSceneRenderer;
        getCenter(): $Vector3f;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get particleManager(): $ParticleManager;
        set orthoRange(value: number);
        get dummyWorld(): $TrackedDummyWorld;
        get rotationPitch(): number;
        get rotationYaw(): number;
        get useCache(): boolean;
        get autoReleased(): boolean;
        get lastHoverItem(): $ItemStack;
        get lastClickPosFace(): $BlockPosFace;
        get lastHoverPosFace(): $BlockPosFace;
        get lastSelectedPosFace(): $BlockPosFace;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        set afterWorldRender(value: $Consumer_<$Scene>);
        get range(): number;
        get dragging(): boolean;
        get renderer(): $WorldSceneRenderer;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        adaptiveWidth(): boolean;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        scrollerViewMargin(): number;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        errorColor(): number;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(): number;
        scrollerViewMargin(): number;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        lineSpacing(): number;
        static init(): void;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        fontSize(): number;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        placeholder(): $Component;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        textColor(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        holder: $UIElement;
        constructor(arg0: $TextArea);
    }
    export class $TextField$Mode extends $Enum<$TextField$Mode> {
        getNumberType(): $ConfigNumber$Type;
        static values(): $TextField$Mode[];
        static valueOf(arg0: string): $TextField$Mode;
        isNumber(): boolean;
        static NUMBER_FLOAT: $TextField$Mode;
        static RESOURCE_LOCATION: $TextField$Mode;
        static NUMBER_INT: $TextField$Mode;
        static NUMBER_BYTE: $TextField$Mode;
        static INTERNAL: $TextField$Mode;
        static COMPOUND_TAG: $TextField$Mode;
        static STRING: $TextField$Mode;
        static NUMBER_DOUBLE: $TextField$Mode;
        static NUMBER_SHORT: $TextField$Mode;
        static NUMBER_LONG: $TextField$Mode;
        get numberType(): $ConfigNumber$Type;
        get number(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextField$Mode}.
     */
    export type $TextField$Mode_ = "internal" | "string" | "compound_tag" | "resource_location" | "number_long" | "number_int" | "number_float" | "number_double" | "number_short" | "number_byte";
    export class $BindableValue<T> extends $BindableUIElement<T> {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: T);
    }
    export class $TextElement extends $UIElement {
        getTextStyle(): $TextElement$TextStyle;
        recompute(): void;
        setText(arg0: $Component_): $TextElement;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $TextElement;
        setText(arg0: string, arg1: boolean): $TextElement;
        getText(): $Component;
        getFont(): $Font;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get font(): $Font;
    }
    export class $UITemplateElement extends $UIElement {
        setTemplate(arg0: $IResourcePath): $UITemplateElement;
        getPath(): $IResourcePath;
        getTemplate(): $UITemplate;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: $IResourcePath);
        get path(): $IResourcePath;
    }
    export class $Switch extends $BindableUIElement<boolean> {
        setOn(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean): $Switch;
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
        getSwitchStyle(): $Switch$SwitchStyle;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Switch;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        placeholder: $UIElement;
        markIcon: $UIElement;
        constructor();
        set onSwitchChanged(value: $BooleanConsumer_);
    }
    export class $SplitView$Vertical extends $SplitView {
        setPercentage(arg0: number): $SplitView$Vertical;
        bottom(arg0: $UIElement): $SplitView$Vertical;
        top(arg0: $UIElement): $SplitView$Vertical;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $TextElement$TextStyle extends $Style {
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        rollSpeed(): number;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        textWrap(): $TextWrap;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextElement$TextStyle;
        static init(): void;
        font(): $ResourceLocation;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        fontSize(arg0: number): $TextElement$TextStyle;
        fontSize(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        textColor(): number;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getToggleGroup(): $Toggle$ToggleGroup;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        noText(): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        setOn(arg0: boolean): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        enableText(): $Toggle;
        setText(arg0: $Component_): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        setText(arg0: string, arg1: boolean): $Toggle;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        getToggles(): $List<$Toggle>;
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getCurrentToggle(): $Toggle;
        beforeSerialize(): void;
        writeToBuff(arg0: $ByteBuf): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        afterSerialize(): void;
        beforeDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        afterDeserialize(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        constructor();
        get toggles(): $List<$Toggle>;
        set allowEmpty(value: boolean);
        get currentToggle(): $Toggle;
        get configurableName(): string;
    }
    export class $SplitView extends $UIElement {
        getPercentage(): number;
        getBorderSize(): number;
        setPercentage(arg0: number): $SplitView;
        getMinPercentage(): number;
        getMaxPercentage(): number;
        setBorderSize(arg0: number): $SplitView;
        setMinPercentage(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        first(arg0: $UIElement): $SplitView;
        second(arg0: $UIElement): $SplitView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(): $IGuiTexture;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(): $IGuiTexture;
        arrowIcon(): $IGuiTexture;
        arrowIcon(arg0: $IGuiTexture_): $Menu$MenuStyle;
        holder: $UIElement;
        constructor(arg0: $Menu<any, any>);
    }
    export class $ProgressBar extends $UIElement implements $IBindable<number>, $IDataConsumer<number> {
        getNormalizedValue(arg0: number): number;
        getNormalizedValue(): number;
        setMaxValue(arg0: number): $ProgressBar;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getMinValue(): number;
        getMaxValue(): number;
        setProgress(arg0: number): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        label(arg0: $Consumer_<$Label>): $ProgressBar;
        setValue(arg0: number): $ProgressBar;
        setRange(arg0: number, arg1: number): $ProgressBar;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
        bindDataSource(arg0: $IDataProvider<number>): $UIElement;
        unbindDataSource(arg0: $IDataProvider<number>): $UIElement;
        getValue(): number;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        barBackground: $UIElement;
        constructor();
        set progress(value: number);
    }
    export class $Selector<T> extends $BindableUIElement<T> {
        show(): void;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        getCandidates(): $List<T>;
        getSelectorStyle(): $Selector$SelectorStyle;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        hide(): void;
        isOpen(): boolean;
        setSelected(arg0: T): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        preview: $UIElement;
        dialog: $UIElement;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        display: $UIElement;
        scrollerView: $ScrollerView;
        constructor();
        set onValueChanged(value: $Consumer_<T>);
        set candidateUIProvider(value: $UIElementProvider_<T>);
        get open(): boolean;
    }
    export class $Inspector extends $UIElement {
        getHistoryStack(): $IHistoryStack;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        getInspectedConfigurable(): $IConfigurable;
        clear(): void;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Consumer_<T>): $ConfiguratorGroup;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        get inspectedConfigurable(): $IConfigurable;
    }
    export class $ColorSelector extends $BindableUIElement<number> {
        setOnColorChangeListener(arg0: $IntConsumer_): $ColorSelector;
        setColor(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number): $ColorSelector;
        setValue(arg0: number, arg1: boolean): $ColorSelector;
        getColor(): number;
        hexConfigurator: $StringConfigurator;
        colorSlider: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        pickerContainer: $UIElement;
        hsbButton: $Button;
        textContainer: $UIElement;
        colorPreview: $UIElement;
        alphaSlider: $UIElement;
        constructor();
        set onColorChangeListener(value: $IntConsumer_);
    }
}
