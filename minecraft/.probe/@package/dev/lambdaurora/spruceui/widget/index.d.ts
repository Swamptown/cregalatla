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
        getWidth(): number;
        getHeight(): number;
        setActive(arg0: boolean): void;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        setVisible(arg0: boolean): void;
        getX(): number;
        isVisible(): boolean;
        isFocusedOrHovered(): boolean;
        getEndX(): number;
        getEndY(): number;
        isMouseHovered(): boolean;
        get position(): $Position;
        get y(): number;
        get width(): number;
        get height(): number;
        get x(): number;
        get focusedOrHovered(): boolean;
        get endX(): number;
        get endY(): number;
        get mouseHovered(): boolean;
    }
}
