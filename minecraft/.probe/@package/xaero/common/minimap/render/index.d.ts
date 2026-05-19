import { $RadarRenderer as $RadarRenderer$1 } from "@package/xaero/hud/minimap/radar/render/element";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $HudMod } from "@package/xaero/common";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Iterator } from "@package/java/util";
import { $WaypointMapRenderer } from "@package/xaero/hud/minimap/waypoint/render";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $RadarColor_ } from "@package/xaero/hud/minimap/radar/color";
import { $MultiTextureRenderTypeRenderer } from "@package/xaero/common/graphics/renderer/multitexture";
import { $CompassRenderer } from "@package/xaero/hud/minimap/compass/render";
import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RadarRenderer } from "@package/xaero/common/minimap/render/radar/element";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ModSettings } from "@package/xaero/common/settings";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f } from "@package/org/joml";
export * as radar from "@package/xaero/common/minimap/render/radar";

declare module "@package/xaero/common/minimap/render" {
    export class $MinimapFBORenderer extends $MinimapRenderer {
        renderChunksToFBO(arg0: $MinimapSession, arg1: $GuiGraphics, arg2: $MinimapProcessor, arg3: $Vec3_, arg4: $ResourceKey_<$Level>, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: boolean, arg11: number, arg12: number, arg13: number, arg14: boolean, arg15: $CustomVertexConsumers): void;
        loadFrameBuffer(arg0: $MinimapProcessor): void;
        setLoadedFBO(arg0: boolean): void;
        onRadarIconModelRenderTrace(arg0: $EntityModel<never>, arg1: $VertexConsumer, arg2: number): void;
        onEntityIconModelPartRenderTrace(arg0: $ModelPart, arg1: number): void;
        renderMainEntityDot(arg0: $GuiGraphics, arg1: $Entity, arg2: boolean, arg3: $MultiBufferSource$BufferSource): void;
        /**
         * @deprecated
         */
        getRadarRenderer(): $RadarRenderer;
        getEntityRadarRenderer(): $RadarRenderer$1;
        isTriedFBO(): boolean;
        deleteFramebuffers(): void;
        isLoadedFBO(): boolean;
        resetEntityIcons(): void;
        resetEntityIconsResources(): void;
        assumeUsingFBO(): boolean;
        static black: number;
        static slime: number;
        constructor(arg0: $HudMod, arg1: $Minecraft, arg2: $WaypointMapRenderer, arg3: $Minimap, arg4: $CompassRenderer);
        get radarRenderer(): $RadarRenderer;
        get entityRadarRenderer(): $RadarRenderer$1;
        get triedFBO(): boolean;
    }
    export class $MinimapRendererHelper {
        defaultOrtho(arg0: $RenderTarget): void;
        prepareMyTexturedColoredModalRect(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: $MultiTextureRenderTypeRenderer): void;
        addColoredLineToExistingBuffer(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        drawMyTexturedModalRect(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
        drawMyTexturedModalRect(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        addTexturedRectToExistingBuffer(arg0: $Matrix4f, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        drawIconOutline(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        prepareMyTexturedModalRect(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $MultiTextureRenderTypeRenderer): void;
        drawMyColoredRect(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawMyColoredRect(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        static restoreDefaultShaderBlendState(): void;
        constructor();
    }
    export class $MinimapRenderer {
        getHelper(): $MinimapRendererHelper;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        renderMinimap(arg0: $MinimapSession, arg1: $GuiGraphics, arg2: $MinimapProcessor, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: $CustomVertexConsumers): void;
        setZoom(arg0: number): void;
        getZoom(): number;
        getSunBrightness(arg0: $MinimapProcessor, arg1: boolean): number;
        getRenderAngle(arg0: boolean): number;
        static black: number;
        static slime: number;
        constructor(arg0: $HudMod, arg1: $Minecraft, arg2: $WaypointMapRenderer, arg3: $Minimap, arg4: $CompassRenderer);
        get helper(): $MinimapRendererHelper;
        get lastPlayerDimDiv(): number;
    }
    export class $MinimapSafeModeRenderer extends $MinimapRenderer {
        renderEntityListSafeMode(arg0: $MinimapProcessor, arg1: $Entity, arg2: $Iterator<$Entity>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: boolean, arg14: number, arg15: $RadarColor_, arg16: $RadarColor_, arg17: number): void;
        renderEntityDotSafeMode(arg0: $MinimapProcessor, arg1: $Entity, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: boolean, arg14: number, arg15: $RadarColor_, arg16: $RadarColor_, arg17: number): boolean;
        updateMapFrameSafeMode(arg0: $MinimapSession, arg1: $MinimapProcessor, arg2: $Player, arg3: $Entity, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number, arg10: number, arg11: number, arg12: boolean, arg13: $ModSettings): void;
        static black: number;
        static slime: number;
        constructor(arg0: $HudMod, arg1: $Minecraft, arg2: $WaypointMapRenderer, arg3: $Minimap, arg4: $CompassRenderer);
    }
}
