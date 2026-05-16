import { $TaffySize, $FloatPoint, $FloatRect, $FloatSize } from "@package/dev/vfyjxf/taffy/geometry";
import { $List, $List_, $Set } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $TaffyStyle, $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";
import { $MeasureFunc_, $MeasureFunc } from "@package/dev/vfyjxf/taffy/util";

declare module "@package/dev/vfyjxf/taffy/tree" {
    export class $LayoutOutput extends $Record {
        size(): $FloatSize;
        firstBaselines(): $FloatPoint;
        bottomMargin(): $CollapsibleMarginSet;
        marginsCanCollapseThrough(): boolean;
        static fromSizesAndBaselines(arg0: $FloatSize, arg1: $FloatSize, arg2: $FloatPoint): $LayoutOutput;
        static fromSizes(arg0: $FloatSize, arg1: $FloatSize): $LayoutOutput;
        static fromOuterSize(arg0: $FloatSize): $LayoutOutput;
        contentSize(): $FloatSize;
        topMargin(): $CollapsibleMarginSet;
        static hidden(): $LayoutOutput;
        static HIDDEN: $LayoutOutput;
        static DEFAULT: $LayoutOutput;
        constructor(size: $FloatSize, contentSize: $FloatSize, firstBaselines: $FloatPoint, topMargin: $CollapsibleMarginSet, bottomMargin: $CollapsibleMarginSet, marginsCanCollapseThrough: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LayoutOutput}.
     */
    export type $LayoutOutput_ = { contentSize?: $FloatSize, marginsCanCollapseThrough?: boolean, topMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, bottomMargin?: $CollapsibleMarginSet, size?: $FloatSize,  } | [contentSize?: $FloatSize, marginsCanCollapseThrough?: boolean, topMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, bottomMargin?: $CollapsibleMarginSet, size?: $FloatSize, ];
    export class $Layout extends $Record {
        size(): $FloatSize;
        copy(): $Layout;
        location(): $FloatPoint;
        order(): number;
        contentSize(): $FloatSize;
        margin(): $FloatRect;
        contentBoxWidth(): number;
        contentBoxHeight(): number;
        scrollbarSize(): $FloatSize;
        static withOrder(arg0: number): $Layout;
        contentBoxSize(): $FloatSize;
        contentBoxX(): number;
        contentBoxY(): number;
        scrollWidth(): number;
        scrollHeight(): number;
        border(): $FloatRect;
        padding(): $FloatRect;
        constructor(order: number, location: $FloatPoint, size: $FloatSize, contentSize: $FloatSize, scrollbarSize: $FloatSize, border: $FloatRect, padding: $FloatRect, margin: $FloatRect);
        constructor(arg0: number);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Layout}.
     */
    export type $Layout_ = { location?: $FloatPoint, size?: $FloatSize, padding?: $FloatRect, order?: number, margin?: $FloatRect, border?: $FloatRect, contentSize?: $FloatSize, scrollbarSize?: $FloatSize,  } | [location?: $FloatPoint, size?: $FloatSize, padding?: $FloatRect, order?: number, margin?: $FloatRect, border?: $FloatRect, contentSize?: $FloatSize, scrollbarSize?: $FloatSize, ];
    export class $RunMode extends $Enum<$RunMode> {
        static values(): $RunMode[];
        static valueOf(arg0: string): $RunMode;
        static PERFORM_HIDDEN_LAYOUT: $RunMode;
        static COMPUTE_SIZE: $RunMode;
        static PERFORM_LAYOUT: $RunMode;
    }
    /**
     * Values that may be interpreted as {@link $RunMode}.
     */
    export type $RunMode_ = "perform_layout" | "compute_size" | "perform_hidden_layout";
    export class $CollapsibleMarginSet {
        copy(): $CollapsibleMarginSet;
        resolve(): number;
        static zero(): $CollapsibleMarginSet;
        static fromMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithSet(arg0: $CollapsibleMarginSet): $CollapsibleMarginSet;
        static ZERO: $CollapsibleMarginSet;
    }
    export class $LayoutChangeListener {
    }
    export interface $LayoutChangeListener {
        onLayoutChanged(arg0: $NodeId_, arg1: $Layout_, arg2: $Layout_): void;
    }
    /**
     * Values that may be interpreted as {@link $LayoutChangeListener}.
     */
    export type $LayoutChangeListener_ = ((arg0: $NodeId, arg1: $Layout, arg2: $Layout) => void);
    export class $NodeId extends $Record {
        value(): number;
        static of(arg0: number): $NodeId;
        getId(): number;
        toIndex(): number;
        constructor(value: number);
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NodeId}.
     */
    export type $NodeId_ = { value?: number,  } | [value?: number, ];
    export class $TaffyTree {
        remove(arg0: $NodeId_): void;
        clear(): void;
        getParent(arg0: $NodeId_): $NodeId;
        isDirty(arg0: $NodeId_): boolean;
        clearCache(arg0: $NodeId_): void;
        getChildren(arg0: $NodeId_): $List<$NodeId>;
        childCount(arg0: $NodeId_): number;
        newWithChildren(arg0: $TaffyStyle, arg1: $List_<$NodeId_>): $NodeId;
        newWithChildren(arg0: $TaffyStyle, ...arg1: $NodeId_[]): $NodeId;
        removeChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        getUnroundedLayout(arg0: $NodeId_): $Layout;
        hasNewLayout(arg0: $NodeId_): boolean;
        hasDirtyDescendant(arg0: $NodeId_): boolean;
        needsVisit(arg0: $NodeId_): boolean;
        acknowledgeLayout(arg0: $NodeId_): void;
        setUnroundedLayout(arg0: $NodeId_, arg1: $Layout_): void;
        computeLayoutWithMeasure(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>, arg2: $MeasureFunc_): void;
        enableRounding(): void;
        roundingEnabled(): boolean;
        getLayoutChangeListener(): $LayoutChangeListener;
        newLeafWithMeasure(arg0: $TaffyStyle, arg1: $MeasureFunc_): $NodeId;
        setMeasureFunc(arg0: $NodeId_, arg1: $MeasureFunc_): void;
        getMeasureFunc(arg0: $NodeId_): $MeasureFunc;
        setChildren(arg0: $NodeId_, ...arg1: $NodeId_[]): void;
        getChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        replaceChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): $NodeId;
        totalNodeCount(): number;
        /**
         * @deprecated
         */
        hasUnconsumedLayout(arg0: $NodeId_): boolean;
        acknowledgeSubtree(arg0: $NodeId_): void;
        getCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_): $LayoutOutput;
        storeCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_, arg4: $LayoutOutput_): void;
        printTree(arg0: $NodeId_): void;
        computeLayout(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>): void;
        disableRounding(): void;
        setLayoutChangeListener(arg0: $LayoutChangeListener_): void;
        newLeaf(arg0: $TaffyStyle): $NodeId;
        insertChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): void;
        markDirty(arg0: $NodeId_): void;
        removeChild(arg0: $NodeId_, arg1: $NodeId_): void;
        addChild(arg0: $NodeId_, arg1: $NodeId_): void;
        getLayout(arg0: $NodeId_): $Layout;
        setLayout(arg0: $NodeId_, arg1: $Layout_): void;
        containsNode(arg0: $NodeId_): boolean;
        getAllNodes(): $Set<$NodeId>;
        setStyle(arg0: $NodeId_, arg1: $TaffyStyle): void;
        getStyle(arg0: $NodeId_): $TaffyStyle;
        constructor();
        constructor(arg0: number);
        get allNodes(): $Set<$NodeId>;
    }
}
