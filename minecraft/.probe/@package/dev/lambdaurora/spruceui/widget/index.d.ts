import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        getY(): number;
        getPosition(): $Position;
        getWidth(): number;
        getHeight(): number;
        isActive(): boolean;
        setActive(arg0: boolean): void;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        setVisible(arg0: boolean): void;
        getX(): number;
        isVisible(): boolean;
        getEndX(): number;
        getEndY(): number;
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        setDragging(arg0: boolean): void;
        isDragging(): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        get y(): number;
        get position(): $Position;
        get width(): number;
        get height(): number;
        get x(): number;
        get endX(): number;
        get endY(): number;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
    }
}
