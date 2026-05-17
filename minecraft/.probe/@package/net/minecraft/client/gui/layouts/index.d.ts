import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number): T;
        spacing(arg0: number): $GridLayout;
        createRowHelper(arg0: number): $GridLayout$RowHelper;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        columnSpacing(arg0: number): $GridLayout;
        rowSpacing(arg0: number): $GridLayout;
        width: number;
        height: number;
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        getGrid(): $GridLayout;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        this$0: $GridLayout;
        constructor(arg0: $GridLayout, arg1: number);
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        defaultChildLayoutSetting(): $LayoutSettings;
        setMinDimensions(arg0: number, arg1: number): $FrameLayout;
        static alignInDimension(arg0: number, arg1: number, arg2: number, arg3: $Consumer_<number>, arg4: number): void;
        newChildLayoutSettings(): $LayoutSettings;
        static centerInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static centerInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_): void;
        setMinWidth(arg0: number): $FrameLayout;
        setMinHeight(arg0: number): $FrameLayout;
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        static alignInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_, arg2: number, arg3: number): void;
        static alignInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number);
        constructor();
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        static vertical(): $LinearLayout;
        getY(): number;
        getX(): number;
        spacing(arg0: number): $LinearLayout;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        static horizontal(): $LinearLayout;
        setX(arg0: number): void;
        setY(arg0: number): void;
        newCellSettings(): $LayoutSettings;
        defaultCellSetting(): $LayoutSettings;
        arrangeElements(): void;
        getWidth(): number;
        getHeight(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number, arg2: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getY(): number;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getWidth(): number;
        getHeight(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        arrangeElements(): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getY(): number;
        getRectangle(): $ScreenRectangle;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        setPosition(arg0: number, arg1: number): void;
        getWidth(): number;
        getHeight(): number;
        get rectangle(): $ScreenRectangle;
        get width(): number;
        get height(): number;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        addChild<T extends $LayoutElement>(arg0: $GridLayout, arg1: T, arg2: number, arg3: $LayoutSettings): T;
        setSpacing(arg0: $GridLayout, arg1: number): void;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        copy(): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        alignVertically(arg0: number): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(arg0: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        padding(arg0: number): $LayoutSettings;
        padding(arg0: number, arg1: number): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        static width(arg0: number): $SpacerElement;
        getY(): number;
        static height(arg0: number): $SpacerElement;
        getX(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getWidth(): number;
        getHeight(): number;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_): $Layout;
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_, arg3: $Consumer_<$LayoutSettings>): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        defaultChildLayoutSetting(): $LayoutSettings;
        newChildLayoutSettings(): $LayoutSettings;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $EqualSpacingLayout$Orientation_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        copy(): $LayoutSettings$LayoutSettingsImpl;
        align(arg0: number, arg1: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignVertically(arg0: number): $LayoutSettings;
        alignHorizontally(arg0: number): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        padding(arg0: number): $LayoutSettings;
        padding(arg0: number, arg1: number): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor();
        constructor(arg0: $LayoutSettings$LayoutSettingsImpl);
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        getSecondaryLength(arg0: $EqualSpacingLayout$ChildContainer): number;
        getSecondaryLength(arg0: $LayoutElement): number;
        setPrimaryPosition(arg0: $EqualSpacingLayout$ChildContainer, arg1: number): void;
        setSecondaryPosition(arg0: $EqualSpacingLayout$ChildContainer, arg1: number, arg2: number): void;
        getPrimaryPosition(arg0: $LayoutElement): number;
        getSecondaryPosition(arg0: $LayoutElement): number;
        getPrimaryLength(arg0: $LayoutElement): number;
        getPrimaryLength(arg0: $EqualSpacingLayout$ChildContainer): number;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        setHeaderHeight(arg0: number): void;
        addToHeader<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(arg0: T): T;
        setFooterHeight(arg0: number): void;
        getFooterHeight(): number;
        getHeaderHeight(): number;
        getContentHeight(): number;
        getY(): number;
        getX(): number;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        setX(arg0: number): void;
        setY(arg0: number): void;
        addTitleHeader(arg0: $Component_, arg1: $Font): void;
        addToContents<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(arg0: T): T;
        addToFooter<T extends $LayoutElement>(arg0: T): T;
        addToFooter<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        arrangeElements(): void;
        getWidth(): number;
        getHeight(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(arg0: $Screen, arg1: number, arg2: number);
        constructor(arg0: $Screen, arg1: number);
        constructor(arg0: $Screen);
        get contentHeight(): number;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
