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
        cleanup(): void;
        getServerModNetworkVersion(): number;
        getTargetZoom(): number;
        isConsideringNetherFairPlayMessage(): boolean;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        getMinimapItem(): $Item;
        checkFBO(): void;
        getMinimapSize(): number;
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        isCaveModeDisplayed(): boolean;
        updateZoom(): void;
        canUseFrameBuffer(): boolean;
        getMinimapBufferSize(arg0: number): number;
        getFBOBufferSize(): number;
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
        setServerModNetworkVersion(arg0: number): void;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        getRadarSession(): $RadarSession;
        getMinimapWriter(): $MinimapWriter;
        isEnlargedMap(): boolean;
        isToResetImage(): boolean;
        setToResetImage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        static hasMinimapItem(arg0: $Player): boolean;
        updateMinimapItem(): void;
        onPlayerTick(): void;
        getSession(): $MinimapSession;
        onClientTick(): void;
        serverHasMod(): boolean;
        getMinimapInterface(): $MinimapInterface;
        getForcedFairPlay(): boolean;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        toggleManualCaveMode(): void;
        getNoMinimapMessageReceived(): boolean;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get targetZoom(): number;
        get entityRadar(): $MinimapRadar;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get minimapItem(): $Item;
        get minimapSize(): number;
        get caveModeDisplayed(): boolean;
        get FBOBufferSize(): number;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
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
        constructor(arg0: $HudMod);
    }
}
