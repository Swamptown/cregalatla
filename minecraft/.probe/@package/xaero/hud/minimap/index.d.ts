import { $MinimapElementOverMapRendererHandler } from "@package/xaero/hud/minimap/element/render/over";
import { $WaypointWorldRenderer } from "@package/xaero/hud/minimap/waypoint/render/world";
import { $WaypointsIngameRenderer, $WaypointsGuiRenderer } from "@package/xaero/common/minimap/waypoints/render";
import { $MinimapSafeModeRenderer, $MinimapFBORenderer } from "@package/xaero/common/minimap/render";
import { $InfoDisplays } from "@package/xaero/hud/minimap/info";
import { $HudMod } from "@package/xaero/common";
import { $MinimapElementWorldRendererHandler } from "@package/xaero/hud/minimap/element/render/world";
import { $Throwable } from "@package/java/lang";
import { $WaypointMapRenderer, $WaypointsGuiRenderer as $WaypointsGuiRenderer$1 } from "@package/xaero/hud/minimap/waypoint/render";
import { $CompassRenderer } from "@package/xaero/hud/minimap/compass/render";
export * as element from "@package/xaero/hud/minimap/element";
export * as radar from "@package/xaero/hud/minimap/radar";
export * as waypoint from "@package/xaero/hud/minimap/waypoint";
export * as info from "@package/xaero/hud/minimap/info";
export * as world from "@package/xaero/hud/minimap/world";
export * as module from "@package/xaero/hud/minimap/module";
export * as player from "@package/xaero/hud/minimap/player";
export * as compass from "@package/xaero/hud/minimap/compass";
export * as common from "@package/xaero/hud/minimap/common";

declare module "@package/xaero/hud/minimap" {
    export class $Minimap {
        getInfoDisplays(): $InfoDisplays;
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        getWorldRendererHandler(): $MinimapElementWorldRendererHandler;
        setCrashedWith(arg0: $Throwable): void;
        getWaypointWorldRenderer(): $WaypointWorldRenderer;
        getMinimapFBORenderer(): $MinimapFBORenderer;
        getCrashedWith(): $Throwable;
        checkCrashes(): void;
        /**
         * @deprecated
         */
        getWaypointsGuiRenderer(): $WaypointsGuiRenderer;
        /**
         * @deprecated
         */
        getWaypointGuiRenderer(): $WaypointsGuiRenderer$1;
        getWaypointMapRenderer(): $WaypointMapRenderer;
        /**
         * @deprecated
         */
        getWaypointsIngameRenderer(): $WaypointsIngameRenderer;
        getMinimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        usingFBO(): boolean;
        getCompassRenderer(): $CompassRenderer;
        getModMain(): $HudMod;
        constructor(arg0: $HudMod);
        get infoDisplays(): $InfoDisplays;
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        get worldRendererHandler(): $MinimapElementWorldRendererHandler;
        get waypointWorldRenderer(): $WaypointWorldRenderer;
        get minimapFBORenderer(): $MinimapFBORenderer;
        get waypointsGuiRenderer(): $WaypointsGuiRenderer;
        get waypointGuiRenderer(): $WaypointsGuiRenderer$1;
        get waypointMapRenderer(): $WaypointMapRenderer;
        get waypointsIngameRenderer(): $WaypointsIngameRenderer;
        get minimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        get compassRenderer(): $CompassRenderer;
        get modMain(): $HudMod;
    }
}
