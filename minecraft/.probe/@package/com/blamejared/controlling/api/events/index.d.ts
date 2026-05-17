import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        getMouseX(): number;
        getMouseY(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get buttonId(): number;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        getEntry(): $IKeyEntry;
        getSlotIndex(): number;
        getY(): number;
        getPartialTicks(): number;
        getX(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        isHovered(): boolean;
        getGuiGraphics(): $GuiGraphics;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        get entry(): $IKeyEntry;
        get slotIndex(): number;
        get y(): number;
        get partialTicks(): number;
        get x(): number;
        get mouseX(): number;
        get mouseY(): number;
        get rowWidth(): number;
        get rowLeft(): number;
        get hovered(): boolean;
        get guiGraphics(): $GuiGraphics;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        getMouseX(): number;
        getMouseY(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get entry(): $IKeyEntry;
        get buttonId(): number;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        constructor(arg0: $IKeyEntry);
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        getEntry(): $IKeyEntry;
        getSlotIndex(): number;
        getY(): number;
        getPartialTicks(): number;
        getX(): number;
        getMouseX(): number;
        getMouseY(): number;
        getRowWidth(): number;
        getRowLeft(): number;
        isHovered(): boolean;
        getGuiGraphics(): $GuiGraphics;
        get entry(): $IKeyEntry;
        get slotIndex(): number;
        get y(): number;
        get partialTicks(): number;
        get x(): number;
        get mouseX(): number;
        get mouseY(): number;
        get rowWidth(): number;
        get rowLeft(): number;
        get hovered(): boolean;
        get guiGraphics(): $GuiGraphics;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        getMouseX(): number;
        getMouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        getEntry(): $IKeyEntry;
        isHandled(): boolean;
        setHandled(arg0: boolean): void;
        getButtonId(): number;
        getMouseX(): number;
        getMouseY(): number;
        get entry(): $IKeyEntry;
        get buttonId(): number;
        get mouseX(): number;
        get mouseY(): number;
    }
}
