import { $CreativeModeTab_ } from "@package/net/minecraft/world/item";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Executor } from "@package/java/util/concurrent";
import { $GridList, $ListEntry, $ListEntry$Companion, $GridList$TripleEntry, $GridListConfigScreen } from "@package/concerrox/emixx/gui";
import { $CycleButton, $WidgetTooltipHolder, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Set_ } from "@package/java/util";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ItemTabNavigationBar } from "@package/concerrox/emixx/content/creativemodetab/gui/itemtab";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnumEntries } from "@package/kotlin/enums";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Enum } from "@package/java/lang";
export * as itemtab from "@package/concerrox/emixx/content/creativemodetab/gui/itemtab";

declare module "@package/concerrox/emixx/content/creativemodetab/gui" {
    export class $CreativeModeTabGridList$StackGroupEntry extends $ListEntry {
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static WIDTH: number;
        static HEIGHT: number;
        static Companion: $ListEntry$Companion;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(id: $ResourceLocation_, triple: $GridList$TripleEntry<$ResourceLocation_>, disabledCreativeModeTabs: $Set_<$ResourceLocation_>, tab: $CreativeModeTab_);
    }
    export class $CreativeModeTabConfigScreen extends $GridListConfigScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $CreativeModeTabGui$TabTheme extends $Enum<$CreativeModeTabGui$TabTheme> {
        static values(): $CreativeModeTabGui$TabTheme[];
        static valueOf(value: string): $CreativeModeTabGui$TabTheme;
        static getEntries(): $EnumEntries<$CreativeModeTabGui$TabTheme>;
        static VANILLA: $CreativeModeTabGui$TabTheme;
        static DEFAULT: $CreativeModeTabGui$TabTheme;
        static get entries(): $EnumEntries<$CreativeModeTabGui$TabTheme>;
    }
    /**
     * Values that may be interpreted as {@link $CreativeModeTabGui$TabTheme}.
     */
    export type $CreativeModeTabGui$TabTheme_ = "default" | "vanilla";
    export class $CreativeModeTabGridList extends $GridList<$ResourceLocation> {
        getEntryForContent(content: $ResourceLocation_, triple: $GridList$TripleEntry<$ResourceLocation_>): $ListEntry;
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        headerHeight: number;
        hovered: $GridList$TripleEntry<$ResourceLocation>;
        height: number;
        constructor(screen: $CreativeModeTabConfigScreen, disabledCreativeModeTabs: $Set_<$ResourceLocation_>);
    }
    export class $CreativeModeTabGui {
        onMouseScrolled$emixx_common(amount: number): boolean;
        contains$emixx_common(mouseX: number, mouseY: number): boolean;
        getRightTabNavigationBar$emixx_common(): $ItemTabNavigationBar;
        setTabCount-WZ4Q5Ns$emixx_common(<set-?>: number): void;
        initialize$emixx_common(screen: $Screen): void;
        getTabCount-pVg5ArA$emixx_common(): number;
        selectTab$emixx_common(tabIndex: number, playClickSound: boolean): void;
        getCurrentTheme(): $CreativeModeTabGui$TabTheme;
        getTopTabNavigationBar$emixx_common(): $ItemTabNavigationBar;
        getLeftTabNavigationBar$emixx_common(): $ItemTabNavigationBar;
        static VERTICAL_TAB_WIDTH: number;
        static CREATIVE_MODE_TAB_HEIGHT: number;
        static INSTANCE: $CreativeModeTabGui;
        get rightTabNavigationBar$emixx_common(): $ItemTabNavigationBar;
        set tabCount-WZ4Q5Ns$emixx_common(value: number);
        get tabCount-pVg5ArA$emixx_common(): number;
        get currentTheme(): $CreativeModeTabGui$TabTheme;
        get topTabNavigationBar$emixx_common(): $ItemTabNavigationBar;
        get leftTabNavigationBar$emixx_common(): $ItemTabNavigationBar;
    }
}
