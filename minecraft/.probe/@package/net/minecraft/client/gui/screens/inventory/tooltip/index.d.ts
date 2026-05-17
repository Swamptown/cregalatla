import { $OrderedTextTooltipComponentAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $ProfileResult_, $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $BundleContents } from "@package/net/minecraft/world/item/component";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Matrix4f, $Vector2ic } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/screens/inventory/tooltip" {
    export class $ClientActivePlayersTooltip$ActivePlayersTooltip extends $Record implements $TooltipComponent {
        profiles(): $List<$ProfileResult>;
        constructor(arg0: $List_<$ProfileResult_>);
    }
    /**
     * Values that may be interpreted as {@link $ClientActivePlayersTooltip$ActivePlayersTooltip}.
     */
    export type $ClientActivePlayersTooltip$ActivePlayersTooltip_ = { profiles?: $List_<$ProfileResult_>,  } | [profiles?: $List_<$ProfileResult_>, ];
    export class $DefaultTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
        static INSTANCE: $ClientTooltipPositioner;
    }
    export class $ClientTooltipPositioner {
    }
    export interface $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
    }
    /**
     * Values that may be interpreted as {@link $ClientTooltipPositioner}.
     */
    export type $ClientTooltipPositioner_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => $Vector2ic);
    export class $ClientBundleTooltip$Texture extends $Enum<$ClientBundleTooltip$Texture> {
        static values(): $ClientBundleTooltip$Texture[];
        static valueOf(arg0: string): $ClientBundleTooltip$Texture;
        static BLOCKED_SLOT: $ClientBundleTooltip$Texture;
        w: number;
        static SLOT: $ClientBundleTooltip$Texture;
        sprite: $ResourceLocation;
        h: number;
    }
    /**
     * Values that may be interpreted as {@link $ClientBundleTooltip$Texture}.
     */
    export type $ClientBundleTooltip$Texture_ = "blocked_slot" | "slot";
    export class $ClientTooltipComponent {
        static create(arg0: $FormattedCharSequence_): $ClientTooltipComponent;
        static create(arg0: $TooltipComponent): $ClientTooltipComponent;
    }
    export interface $ClientTooltipComponent {
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getWidth(arg0: $Font): number;
        getHeight(): number;
        get height(): number;
    }
    export class $BelowOrAboveWidgetTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
        constructor(arg0: $ScreenRectangle_);
    }
    export class $ClientBundleTooltip implements $ClientTooltipComponent {
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getWidth(font: $Font): number;
        getHeight(): number;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        constructor(arg0: $BundleContents);
        get height(): number;
    }
    export class $ClientActivePlayersTooltip implements $ClientTooltipComponent {
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getWidth(arg0: $Font): number;
        getHeight(): number;
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        constructor(arg0: $ClientActivePlayersTooltip$ActivePlayersTooltip_);
        get height(): number;
    }
    export class $TooltipRenderUtil {
        static renderTooltipBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        static renderTooltipBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static MOUSE_OFFSET: number;
        static PADDING_LEFT: number;
        static PADDING_RIGHT: number;
        static PADDING_TOP: number;
        static PADDING_BOTTOM: number;
        constructor();
    }
    export class $MenuTooltipPositioner implements $ClientTooltipPositioner {
        positionTooltip(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector2ic;
        static MAX_OVERLAP_WITH_WIDGET: number;
        static MAX_DISTANCE_TO_WIDGET: number;
        constructor(arg0: $ScreenRectangle_);
    }
    export class $ClientTextTooltip implements $ClientTooltipComponent, $OrderedTextTooltipComponentAccessor {
        renderText(arg0: $Font, arg1: number, arg2: number, arg3: $Matrix4f, arg4: $MultiBufferSource$BufferSource): void;
        getWidth(arg0: $Font): number;
        getHeight(): number;
        renderImage(arg0: $Font, arg1: number, arg2: number, arg3: $GuiGraphics): void;
        getText(): $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_);
        get height(): number;
        get text(): $FormattedCharSequence;
    }
}
