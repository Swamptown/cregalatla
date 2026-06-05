import { $Function1_, $Function1 } from "@package/kotlin/jvm/functions";
import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $WidgetTooltipHolder, $TabButton } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $List, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $TabManager, $Tab } from "@package/net/minecraft/client/gui/components/tabs";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Enum } from "@package/java/lang";
import { $Unit } from "@package/kotlin";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/concerrox/emixx/content/creativemodetab/gui/itemtab" {
    export class $ItemTabButton extends $TabButton {
        static Companion: $ItemTabButton$Companion;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(tabManager: $ItemTabManager, tab: $ItemTab, width: number, height: number, style: $ItemTabButton$ButtonStyle_, isFirst: boolean);
        constructor(arg0: $ItemTabManager, arg1: $ItemTab, arg2: number, arg3: number, arg4: $ItemTabButton$ButtonStyle_, arg5: boolean, arg6: number, arg7: $DefaultConstructorMarker);
    }
    export class $ItemTabButton$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $ItemTabNavigationBar extends $AbstractWidget {
        getTabButtons$emixx_common(): $List<$TabButton>;
        setFocusedChild(child: $GuiEventListener): void;
        setTabs(tabs: $List_<$ItemTab>): void;
        setTabButtons$emixx_common(<set-?>: $List_<$TabButton>): void;
        getVisibleTabs(): $List<$ItemTab>;
        pos(x: number, y: number): $ItemTabNavigationBar;
        arrangeElements(): void;
        static Companion: $ItemTabNavigationBar$Companion;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(tabManager: $ItemTabManager, isVertical: boolean, isRightSide: boolean);
        constructor(arg0: $ItemTabManager, arg1: boolean, arg2: boolean, arg3: number, arg4: $DefaultConstructorMarker);
        set focusedChild(value: $GuiEventListener);
        set tabs(value: $List_<$ItemTab>);
        get visibleTabs(): $List<$ItemTab>;
    }
    export class $ItemTabNavigationBar$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $ItemTabButton$ButtonStyle extends $Enum<$ItemTabButton$ButtonStyle> {
        static values(): $ItemTabButton$ButtonStyle[];
        static valueOf(value: string): $ItemTabButton$ButtonStyle;
        static getEntries(): $EnumEntries<$ItemTabButton$ButtonStyle>;
        static TOP: $ItemTabButton$ButtonStyle;
        static LEFT: $ItemTabButton$ButtonStyle;
        static RIGHT: $ItemTabButton$ButtonStyle;
        static get entries(): $EnumEntries<$ItemTabButton$ButtonStyle>;
    }
    /**
     * Values that may be interpreted as {@link $ItemTabButton$ButtonStyle}.
     */
    export type $ItemTabButton$ButtonStyle_ = "top" | "left" | "right";
    export class $ItemTab implements $Tab {
        doLayout(rectangle: $ScreenRectangle_): void;
        getTabTitle(): $Component;
        getCreativeModeTab(): $CreativeModeTab;
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        constructor(creativeModeTab: $CreativeModeTab_);
        get tabTitle(): $Component;
        get creativeModeTab(): $CreativeModeTab;
    }
    export class $ItemTabManager extends $TabManager {
        getOnTabSelectedListener(): $Function1<$ItemTab, $Unit>;
        setOnTabSelectedListener(<set-?>: $Function1_<$ItemTab, $Unit>): void;
        onTabSelected(tab: $ItemTab): void;
        constructor(addWidget: $Consumer_<$AbstractWidget>, removeWidget: $Consumer_<$AbstractWidget>);
    }
}
