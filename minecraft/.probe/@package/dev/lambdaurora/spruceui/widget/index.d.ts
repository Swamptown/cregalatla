import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        getPosition(): $Position;
        isActive(): boolean;
        isVisible(): boolean;
        setActive(arg0: boolean): void;
        setVisible(arg0: boolean): void;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        getX(): number;
        isFocusedOrHovered(): boolean;
        getEndX(): number;
        getEndY(): number;
        isMouseHovered(): boolean;
        get y(): number;
        get width(): number;
        get height(): number;
        get position(): $Position;
        get x(): number;
        get focusedOrHovered(): boolean;
        get endX(): number;
        get endY(): number;
        get mouseHovered(): boolean;
    }
}
