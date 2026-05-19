import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Level } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$1 } from "@package/xaero/hud/minimap/player/tracker/synced";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $ClientSyncedTrackedPlayerManager } from "@package/xaero/common/minimap/radar/tracker/synced";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/common/minimap/element/render/over";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as radar from "@package/xaero/common/minimap/radar";
export * as region from "@package/xaero/common/minimap/region";
export * as waypoints from "@package/xaero/common/minimap/waypoints";
export * as render from "@package/xaero/common/minimap/render";
export * as highlight from "@package/xaero/common/minimap/highlight";
export * as write from "@package/xaero/common/minimap/write";
export * as mcworld from "@package/xaero/common/minimap/mcworld";
export * as element from "@package/xaero/common/minimap/element";

declare module "@package/xaero/common/minimap" {
    export class $MinimapProcessor {
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        getMinimapItem(): $Item;
        checkFBO(): void;
        getMinimapSize(): number;
        isCaveModeDisplayed(): boolean;
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        canUseFrameBuffer(): boolean;
        getMinimapBufferSize(arg0: number): number;
        getFBOBufferSize(): number;
        updateZoom(): void;
        setLastMapDimensionScale(arg0: number): void;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        setServerModNetworkVersion(arg0: number): void;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        toggleManualCaveMode(): void;
        getNoMinimapMessageReceived(): boolean;
        getServerModNetworkVersion(): number;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        isConsideringNetherFairPlayMessage(): boolean;
        getTargetZoom(): number;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        getRadarSession(): $RadarSession;
        onPlayerTick(): void;
        getMinimapWriter(): $MinimapWriter;
        isEnlargedMap(): boolean;
        isToResetImage(): boolean;
        setToResetImage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        updateMinimapItem(): void;
        static hasMinimapItem(arg0: $Player): boolean;
        getSession(): $MinimapSession;
        cleanup(): void;
        onClientTick(): void;
        serverHasMod(): boolean;
        getMinimapInterface(): $MinimapInterface;
        getForcedFairPlay(): boolean;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        get minimapItem(): $Item;
        get minimapSize(): number;
        get caveModeDisplayed(): boolean;
        get FBOBufferSize(): number;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get entityRadar(): $MinimapRadar;
        get targetZoom(): number;
        set fairPlayOnlyMessageReceived(value: boolean);
        get radarSession(): $RadarSession;
        get minimapWriter(): $MinimapWriter;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        get session(): $MinimapSession;
        get minimapInterface(): $MinimapInterface;
        get forcedFairPlay(): boolean;
    }
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        /**
         * @deprecated
         */
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        constructor(arg0: $HudMod);
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
    }
}
