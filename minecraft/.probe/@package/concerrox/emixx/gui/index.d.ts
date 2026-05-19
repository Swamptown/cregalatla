import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $GridLayout } from "@package/net/minecraft/client/gui/layouts";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $WidgetTooltipHolder, $AbstractContainerWidget, $AbstractSelectionList, $ContainerObjectSelectionList$Entry, $ContainerObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $List_, $Collection } from "@package/java/util";
import { $GridLayoutTab } from "@package/net/minecraft/client/gui/components/tabs";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as components from "@package/concerrox/emixx/gui/components";

declare module "@package/concerrox/emixx/gui" {
    export class $GridList$TripleEntry<Contents> extends $ContainerObjectSelectionList$Entry<$GridList$TripleEntry<Contents>> {
        getListWidget(): $GridList<Contents>;
        static Companion: $GridList$TripleEntry$Companion;
        static GUTTER: number;
        static WIDTH: number;
        static HEIGHT: number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$GridList$TripleEntry<Contents>>;
        constructor(listWidget: $GridList<Contents>, contentsList: $List_<Contents>);
        get listWidget(): $GridList<Contents>;
    }
    export class $GridListConfigScreen extends $Screen {
        reload(): void;
        getName(): string;
        save(): void;
        createList(): $GridList<never>;
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
        constructor(name: string);
        get name(): string;
    }
    export class $GridListConfigScreen$PrebuiltTab extends $GridLayoutTab {
        layout: $GridLayout;
    }
    export class $GridList<Contents> extends $ContainerObjectSelectionList<$GridList$TripleEntry<Contents>> {
        getEntryForContent(arg0: Contents, arg1: $GridList$TripleEntry<Contents>): $ListEntry;
        static access$getScreen$p($this: $GridList<any>): $Screen;
        getContents(): $Collection<Contents>;
        add(): void;
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
        hovered: $GridList$TripleEntry<Contents>;
        height: number;
        constructor(screen: $Screen);
        get contents(): $Collection<Contents>;
    }
    export class $ListEntry$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
    export class $ListEntry extends $AbstractContainerWidget {
        shouldRenderSwitch(): boolean;
        getEntryTitle(): $Component;
        renderEntry(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
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
        constructor(container: $ContainerEventHandler);
        get entryTitle(): $Component;
    }
    export class $GridList$TripleEntry$Companion {
        constructor($constructor_marker: $DefaultConstructorMarker);
    }
}
