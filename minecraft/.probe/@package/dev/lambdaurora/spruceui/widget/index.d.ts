import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        isActive(): boolean;
        getPosition(): $Position;
        getY(): number;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        getX(): number;
        setActive(arg0: boolean): void;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        getEndX(): number;
        getEndY(): number;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        getWidth(): number;
        getHeight(): number;
        get position(): $Position;
        get y(): number;
        get x(): number;
        get endX(): number;
        get endY(): number;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
        get width(): number;
        get height(): number;
    }
}
