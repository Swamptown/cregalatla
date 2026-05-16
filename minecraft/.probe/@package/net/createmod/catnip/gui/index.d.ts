import { $BindableTexture } from "@package/net/createmod/catnip/render";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as widget from "@package/net/createmod/catnip/gui/widget";
export * as element from "@package/net/createmod/catnip/gui/element";

declare module "@package/net/createmod/catnip/gui" {
    export class $TextureSheetSegment {
    }
    export interface $TextureSheetSegment extends $BindableTexture {
        getStartX(): number;
        getStartY(): number;
        getWidth(): number;
        getHeight(): number;
        get startX(): number;
        get startY(): number;
        get width(): number;
        get height(): number;
    }
    export class $TickableGuiEventListener {
    }
    export interface $TickableGuiEventListener extends $GuiEventListener {
        tick(): void;
    }
}
