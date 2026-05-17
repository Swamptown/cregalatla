import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $AdvancementHolder_, $DisplayInfo, $AdvancementProgress, $AdvancementType_, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $ClientAdvancements, $ClientAdvancements$Listener } from "@package/net/minecraft/client/multiplayer";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/screens/advancements" {
    export class $AdvancementTabType extends $Enum<$AdvancementTabType> {
        static values(): $AdvancementTabType[];
        static valueOf(arg0: string): $AdvancementTabType;
        getMax(): number;
        getY(arg0: number): number;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        getX(arg0: number): number;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
        drawIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $ItemStack_): void;
        static MAX_TABS: number;
        static BELOW: $AdvancementTabType;
        static LEFT: $AdvancementTabType;
        static RIGHT: $AdvancementTabType;
        static ABOVE: $AdvancementTabType;
        get max(): number;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType}.
     */
    export type $AdvancementTabType_ = "above" | "below" | "left" | "right";
    export class $AdvancementTabType$Sprites extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $AdvancementTabType$Sprites}.
     */
    export type $AdvancementTabType$Sprites_ = { last?: $ResourceLocation_, first?: $ResourceLocation_, middle?: $ResourceLocation_,  } | [last?: $ResourceLocation_, first?: $ResourceLocation_, middle?: $ResourceLocation_, ];
    export class $AdvancementsScreen extends $Screen implements $ClientAdvancements$Listener {
        renderWindow(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        onAddAdvancementRoot(arg0: $AdvancementNode): void;
        onRemoveAdvancementRoot(arg0: $AdvancementNode): void;
        onAddAdvancementTask(arg0: $AdvancementNode): void;
        onRemoveAdvancementTask(arg0: $AdvancementNode): void;
        onUpdateAdvancementProgress(arg0: $AdvancementNode, arg1: $AdvancementProgress): void;
        getAdvancementWidget(arg0: $AdvancementNode): $AdvancementWidget;
        onSelectedTabChanged(arg0: $AdvancementHolder_): void;
        onAdvancementsCleared(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static WINDOW_INSIDE_HEIGHT: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static WINDOW_INSIDE_WIDTH: number;
        static BACKGROUND_TILE_WIDTH: number;
        static PANORAMA: $PanoramaRenderer;
        static BACKGROUND_TILE_HEIGHT: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static WINDOW_HEIGHT: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static WINDOW_WIDTH: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        static BACKGROUND_TILE_COUNT_X: number;
        static BACKGROUND_TILE_COUNT_Y: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        font: $Font;
        constructor(arg0: $ClientAdvancements);
        constructor(arg0: $ClientAdvancements, arg1: $Screen);
    }
    export class $AdvancementWidgetType extends $Enum<$AdvancementWidgetType> {
        static values(): $AdvancementWidgetType[];
        static valueOf(arg0: string): $AdvancementWidgetType;
        frameSprite(arg0: $AdvancementType_): $ResourceLocation;
        boxSprite(): $ResourceLocation;
        static OBTAINED: $AdvancementWidgetType;
        static UNOBTAINED: $AdvancementWidgetType;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementWidgetType}.
     */
    export type $AdvancementWidgetType_ = "obtained" | "unobtained";
    export class $AdvancementTab {
        getType(): $AdvancementTabType;
        static create(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: number, arg3: $AdvancementNode): $AdvancementTab;
        getIndex(): number;
        getDisplay(): $DisplayInfo;
        getPage(): number;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getRootNode(): $AdvancementNode;
        getTitle(): $Component;
        getScreen(): $AdvancementsScreen;
        getWidget(arg0: $AdvancementHolder_): $AdvancementWidget;
        scroll(arg0: number, arg1: number): void;
        drawContents(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        drawTab(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        drawIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        drawTooltips(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addAdvancement(arg0: $AdvancementNode): void;
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: $AdvancementNode, arg5: $DisplayInfo);
        constructor(arg0: $Minecraft, arg1: $AdvancementsScreen, arg2: $AdvancementTabType_, arg3: number, arg4: number, arg5: $AdvancementNode, arg6: $DisplayInfo);
        get type(): $AdvancementTabType;
        get index(): number;
        get display(): $DisplayInfo;
        get page(): number;
        get rootNode(): $AdvancementNode;
        get title(): $Component;
        get screen(): $AdvancementsScreen;
    }
    export class $AdvancementWidget {
        drawConnectivity(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean): void;
        attachToParent(): void;
        drawHover(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        addChild(arg0: $AdvancementWidget): void;
        setProgress(arg0: $AdvancementProgress): void;
        getY(): number;
        isMouseOver(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getX(): number;
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getWidth(): number;
        constructor(arg0: $AdvancementTab, arg1: $Minecraft, arg2: $AdvancementNode, arg3: $DisplayInfo);
        set progress(value: $AdvancementProgress);
        get y(): number;
        get x(): number;
        get width(): number;
    }
}
