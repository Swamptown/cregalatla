import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        columnSpacing(arg0: number): $GridLayout;
        rowSpacing(arg0: number): $GridLayout;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: number, arg3: $LayoutSettings): T;
        defaultCellSetting(): $LayoutSettings;
        spacing(arg0: number): $GridLayout;
        createRowHelper(arg0: number): $GridLayout$RowHelper;
        newCellSettings(): $LayoutSettings;
        width: number;
        height: number;
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        getGrid(): $GridLayout;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number, arg2: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: number): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
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
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        setMinDimensions(arg0: number, arg1: number): $FrameLayout;
        static alignInDimension(arg0: number, arg1: number, arg2: number, arg3: $Consumer_<number>, arg4: number): void;
        setMinWidth(arg0: number): $FrameLayout;
        setMinHeight(arg0: number): $FrameLayout;
        static centerInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
        static centerInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_): void;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        static alignInRectangle(arg0: $LayoutElement, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        static alignInRectangle(arg0: $LayoutElement, arg1: $ScreenRectangle_, arg2: number, arg3: number): void;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor();
        constructor(arg0: number, arg1: number);
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        static vertical(): $LinearLayout;
        getY(): number;
        addChild<T extends $LayoutElement>(arg0: T): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        getWidth(): number;
        getHeight(): number;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        static horizontal(): $LinearLayout;
        arrangeElements(): void;
        defaultCellSetting(): $LayoutSettings;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getX(): number;
        spacing(arg0: number): $LinearLayout;
        newCellSettings(): $LayoutSettings;
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
        getWidth(): number;
        getHeight(): number;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getX(): number;
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
        getWidth(): number;
        getHeight(): number;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getX(): number;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        addChild<T extends $LayoutElement>(arg0: $GridLayout, arg1: T, arg2: number, arg3: $LayoutSettings): T;
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
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
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(arg0: number): $LayoutSettings;
        alignVertically(arg0: number): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingRight(arg0: number): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        copy(): $LayoutSettings;
        padding(arg0: number): $LayoutSettings;
        padding(arg0: number, arg1: number): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        align(arg0: number, arg1: number): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        static width(arg0: number): $SpacerElement;
        static height(arg0: number): $SpacerElement;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getX(): number;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_, arg3: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(arg0: $Font, arg1: $LayoutElement, arg2: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(arg0: T): T;
        width: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $EqualSpacingLayout$Orientation_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        paddingRight(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number): $LayoutSettings$LayoutSettingsImpl;
        padding(arg0: number, arg1: number): $LayoutSettings$LayoutSettingsImpl;
        align(arg0: number, arg1: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        paddingLeft(arg0: number): $LayoutSettings;
        paddingBottom(arg0: number): $LayoutSettings;
        paddingHorizontal(arg0: number): $LayoutSettings;
        paddingVertical(arg0: number): $LayoutSettings;
        copy(): $LayoutSettings;
        padding(arg0: number, arg1: number, arg2: number, arg3: number): $LayoutSettings;
        paddingTop(arg0: number): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor(arg0: $LayoutSettings$LayoutSettingsImpl);
        constructor();
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        getSecondaryLength(arg0: $EqualSpacingLayout$ChildContainer): number;
        getSecondaryLength(arg0: $LayoutElement): number;
        getPrimaryLength(arg0: $LayoutElement): number;
        getPrimaryLength(arg0: $EqualSpacingLayout$ChildContainer): number;
        getPrimaryPosition(arg0: $LayoutElement): number;
        setPrimaryPosition(arg0: $EqualSpacingLayout$ChildContainer, arg1: number): void;
        getSecondaryPosition(arg0: $LayoutElement): number;
        setSecondaryPosition(arg0: $EqualSpacingLayout$ChildContainer, arg1: number, arg2: number): void;
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
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
        getFooterHeight(): number;
        getHeaderHeight(): number;
        setHeaderHeight(arg0: number): void;
        addToHeader<T extends $LayoutElement>(arg0: T): T;
        addToHeader<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        setFooterHeight(arg0: number): void;
        getContentHeight(): number;
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        visitChildren(arg0: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        addTitleHeader(arg0: $Component_, arg1: $Font): void;
        addToContents<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToContents<T extends $LayoutElement>(arg0: T): T;
        addToFooter<T extends $LayoutElement>(arg0: T, arg1: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(arg0: T): T;
        setX(arg0: number): void;
        setY(arg0: number): void;
        getX(): number;
        visitWidgets(arg0: $Consumer_<$AbstractWidget>): void;
        getRectangle(): $ScreenRectangle;
        setPosition(arg0: number, arg1: number): void;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(arg0: $Screen);
        constructor(arg0: $Screen, arg1: number);
        constructor(arg0: $Screen, arg1: number, arg2: number);
        get contentHeight(): number;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
