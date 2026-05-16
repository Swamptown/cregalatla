import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractSelectionList, $AbstractSliderButton, $ObjectSelectionList$Entry, $Button$OnPress_, $Button$CreateNarration_, $Button$CreateNarration, $WidgetTooltipHolder, $Button$Builder, $WidgetSprites, $ObjectSelectionList, $Renderable, $Button } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ModListScreen } from "@package/net/neoforged/neoforge/client/gui";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/neoforged/neoforge/client/gui/widget" {
    export class $ExtendedSlider extends $AbstractSliderButton {
        getValue(): number;
        setValue(arg0: number): void;
        getValueLong(): number;
        getValueInt(): number;
        getValueString(): string;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: boolean);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: number, arg7: number, arg8: number, arg9: boolean);
        get valueLong(): number;
        get valueInt(): number;
        get valueString(): string;
    }
    export class $ModListWidget extends $ObjectSelectionList<$ModListWidget$ModEntry> {
        refreshList(): void;
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
        hovered: $ModListWidget$ModEntry;
        height: number;
        constructor(arg0: $ModListScreen, arg1: number, arg2: number, arg3: number);
    }
    export class $ScrollPanel extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isActive(): boolean;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
        get active(): boolean;
    }
    export class $ExtendedButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_, arg6: $Button$CreateNarration_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Button$OnPress_);
    }
    export class $ModsButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
    }
    export class $ModListWidget$ModEntry extends $ObjectSelectionList$Entry<$ModListWidget$ModEntry> {
        getContainer(): $ModContainer;
        getInfo(): $IModInfo;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$ModListWidget$ModEntry>;
        get container(): $ModContainer;
        get info(): $IModInfo;
    }
    export class $UnicodeGlyphButton extends $ExtendedButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        glyph: string;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        glyphScale: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: string, arg6: number, arg7: $Button$OnPress_);
    }
}
