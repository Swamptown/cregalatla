import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $ComponentPath } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/components/events" {
    export class $ContainerEventHandler {
    }
    export interface $ContainerEventHandler extends $GuiEventListener {
        children(): $List<$GuiEventListener>;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener): void;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        getRectangle(): $ScreenRectangle;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        isMouseOver(arg0: number, arg1: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
    }
    export class $AbstractContainerEventHandler implements $ContainerEventHandler {
        setFocused(arg0: $GuiEventListener): void;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getRectangle(): $ScreenRectangle;
        isMouseOver(arg0: number, arg1: number): boolean;
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
}
