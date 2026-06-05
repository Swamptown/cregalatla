import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $Supplier_ } from "@package/java/util/function";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $WidgetTooltipHolder, $EditBox, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $EmiConfig$ConfigGroup } from "@package/dev/emi/emi/config";

declare module "@package/dev/emi/emi/screen/widget/config" {
    export class $ConfigEntryWidget extends $ListWidget$Entry implements $GlobalMixin {
        getSearchableText(): string;
        isParentVisible(): boolean;
        setChildren(children: $List_<$GuiEventListener>): void;
        update(y: number, x: number, width: number, height: number): void;
        isVisible(): boolean;
        endGroup: boolean;
        parentGroups: $List<$GroupNameWidget>;
        parentList: $ListWidget;
        group: $EmiConfig$ConfigGroup;
        constructor(name: $Component_, tooltip: $List_<$ClientTooltipComponent>, search: $Supplier_<string>, height: number);
        get searchableText(): string;
        get parentVisible(): boolean;
        get visible(): boolean;
    }
    export class $ConfigSearch$ConfigSearchWidgetField extends $EditBox implements $GlobalMixin {
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static FORWARDS: number;
        height: number;
    }
    export class $ConfigSearch implements $GlobalMixin {
        getSearch(): string;
        setText(query: string): void;
        field: $ConfigSearch$ConfigSearchWidgetField;
        constructor(x: number, y: number, width: number, height: number);
        get search(): string;
        set text(value: string);
    }
    export class $ListWidget$Entry extends $AbstractContainerEventHandler implements $GlobalMixin {
        getTooltip(mouseX: number, mouseY: number): $List<$ClientTooltipComponent>;
        getHeight(): number;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number): void;
        parentList: $ListWidget;
        constructor();
        get height(): number;
    }
    export class $GroupNameWidget extends $ListWidget$Entry implements $GlobalMixin {
        collapsed: boolean;
        id: string;
        text: $Component;
        parentList: $ListWidget;
        constructor(id: string, text: $Component_);
    }
    export class $ListWidget extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $GlobalMixin {
        getMaxScroll(): number;
        setRenderSelection(renderSelection: boolean): void;
        getSelectedOrNull(): $ListWidget$Entry;
        setLeftPos(left: number): void;
        unfocusTextField(): void;
        getFocusedTextField(): $EditBox;
        updateSize(width: number, height: number, top: number, bottom: number): void;
        setScrollAmount(amount: number): void;
        centerScrollOn(entry: $ListWidget$Entry): void;
        getHoveredEntry(): $ListWidget$Entry;
        getLogicalHeight(): number;
        addEntry(entry: $ListWidget$Entry): number;
        render(draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
        updateNarration(var1: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        setSelected(entry: $ListWidget$Entry): void;
        getTotalHeight(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        getRowRight(): number;
        getScrollAmount(): number;
        isActive(): boolean;
        padding: number;
        constructor(client: $Minecraft, width: number, height: number, top: number, bottom: number);
        get maxScroll(): number;
        set renderSelection(value: boolean);
        get selectedOrNull(): $ListWidget$Entry;
        set leftPos(value: number);
        get focusedTextField(): $EditBox;
        get hoveredEntry(): $ListWidget$Entry;
        get logicalHeight(): number;
        set selected(value: $ListWidget$Entry);
        get totalHeight(): number;
        get rowWidth(): number;
        get rowLeft(): number;
        get rowRight(): number;
        get active(): boolean;
    }
}
