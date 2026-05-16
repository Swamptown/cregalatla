import { $Consumer_ } from "@package/java/util/function";
import { $LinearLayout, $GridLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget, $TabButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Iterable_ } from "@package/java/lang";
import { $TabNavigationBarAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    export class $TabNavigationBar$Builder {
        build(): $TabNavigationBar;
        addTabs(...arg0: $Tab[]): $TabNavigationBar$Builder;
        constructor(arg0: $TabManager, arg1: number);
    }
    export class $TabManager {
        getCurrentTab(): $Tab;
        setTabArea(arg0: $ScreenRectangle_): void;
        setCurrentTab(arg0: $Tab, arg1: boolean): void;
        constructor(arg0: $Consumer_<$AbstractWidget>, arg1: $Consumer_<$AbstractWidget>);
        set tabArea(value: $ScreenRectangle_);
    }
    export class $Tab {
    }
    export interface $Tab {
        getTabTitle(): $Component;
        doLayout(arg0: $ScreenRectangle_): void;
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        get tabTitle(): $Component;
    }
    export class $GridLayoutTab implements $Tab {
        getTabTitle(): $Component;
        doLayout(arg0: $ScreenRectangle_): void;
        visitChildren(arg0: $Consumer_<$AbstractWidget>): void;
        layout: $GridLayout;
        constructor(arg0: $Component_);
        get tabTitle(): $Component;
    }
    export class $TabNavigationBar extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $TabNavigationBarAccessor {
        static builder(arg0: $TabManager, arg1: number): $TabNavigationBar$Builder;
        selectTab(arg0: number, arg1: boolean): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        arrangeElements(): void;
        keyPressed(arg0: number): boolean;
        setWidth(arg0: number): void;
        narrateListElementPosition(arg0: $NarrationElementOutput, arg1: $TabButton): void;
        isActive(): boolean;
        yacl$getWidth(): number;
        yacl$getTabManager(): $TabManager;
        yacl$getTabs(): $ImmutableList<$Tab>;
        yacl$getTabButtons(): $ImmutableList<$TabButton>;
        yacl$getLayout(): $LinearLayout;
        layout: $LinearLayout;
        width: number;
        tabs: $ImmutableList<$Tab>;
        tabButtons: $ImmutableList<$TabButton>;
        constructor(arg0: number, arg1: $TabManager, arg2: $Iterable_<$Tab>);
        get active(): boolean;
    }
}
