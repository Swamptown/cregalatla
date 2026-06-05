import { $PanoramaRenderer, $CubeMap } from "@package/net/minecraft/client/renderer";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $GuiSettings } from "@package/xaero/lib/client/gui";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $MapProcessor } from "@package/xaero/map";
import { $ConfigOptionScreenEntry } from "@package/xaero/lib/client/config/option/ui";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font } from "@package/net/minecraft/client/gui";
import { $PNGExportResult } from "@package/xaero/map/file/export";
export * as message from "@package/xaero/map/gui/message";

declare module "@package/xaero/map/gui" {
    export class $MapTileSelection {
        getStartZ(): number;
        getEndZ(): number;
        getStartX(): number;
        getTop(): number;
        setEnd(arg0: number, arg1: number): void;
        getRight(): number;
        getLeft(): number;
        getEndX(): number;
        getBottom(): number;
        constructor(arg0: number, arg1: number);
        get startZ(): number;
        get endZ(): number;
        get startX(): number;
        get top(): number;
        get right(): number;
        get left(): number;
        get endX(): number;
        get bottom(): number;
    }
    export class $ExportScreen extends $GuiSettings {
        onExportDone(arg0: $PNGExportResult): void;
        primaryOptionEntry<T>(arg0: $ConfigOption<T>): $ConfigOptionScreenEntry<T>;
        getSelection(): $MapTileSelection;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        fullExport: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        escape: $Screen;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $Screen, arg1: $Screen, arg2: $MapProcessor, arg3: $MapTileSelection);
        get selection(): $MapTileSelection;
    }
}
