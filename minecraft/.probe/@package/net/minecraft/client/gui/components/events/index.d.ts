import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $List } from "@package/java/util";
import { $ComponentPath } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/events" {
    export class $ContainerEventHandler {
    }
    export interface $ContainerEventHandler extends $GuiEventListener {
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        children(): $List<$GuiEventListener>;
        getCurrentFocusPath(): $ComponentPath;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        setFocused(arg0: $GuiEventListener): void;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        get currentFocusPath(): $ComponentPath;
    }
    export class $GuiEventListener {
        static DOUBLE_CLICK_THRESHOLD_MS: number;
    }
    export interface $GuiEventListener extends $TabOrderedElement {
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        getCurrentFocusPath(): $ComponentPath;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
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
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        setFocused(arg0: $GuiEventListener): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getCurrentFocusPath(): $ComponentPath;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRectangle(): $ScreenRectangle;
        getTabOrderGroup(): number;
        constructor();
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
}
