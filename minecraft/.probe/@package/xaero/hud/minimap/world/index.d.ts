import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $HudMod } from "@package/xaero/common";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HashMap } from "@package/java/util";
import { $WaypointSet } from "@package/xaero/hud/minimap/waypoint/set";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as connection from "@package/xaero/hud/minimap/world/connection";
export * as io from "@package/xaero/hud/minimap/world/io";
export * as container from "@package/xaero/hud/minimap/world/container";
export * as state from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/world" {
    export class $MinimapDimensionHelper {
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        getDimensionDivision(arg0: $MinimapWorld): number;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        constructor();
    }
    export class $MinimapWorldManager {
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        hasCustomWaypoints(): boolean;
        getAutoRootContainer(): $MinimapWorldRootContainer;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        containerExists(arg0: $XaeroPath): boolean;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        getAutoWorld(): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get currentRootContainer(): $MinimapWorldRootContainer;
        get autoRootContainer(): $MinimapWorldRootContainer;
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        get autoWorld(): $MinimapWorld;
    }
    export class $MinimapWorld {
        getNode(): string;
        setNode(arg0: string): void;
        getDimId(): $ResourceKey<$Level>;
        addWaypointSet(arg0: string): void;
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        cleanupOnSave(arg0: $Path_): void;
        getLocalWorldKey(): $XaeroPath;
        removeWaypointSet(arg0: string): $WaypointSet;
        requestRemovalOnSave(arg0: string): void;
        hasSomethingToRemoveOnSave(): boolean;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        getSetCount(): number;
        setContainer(arg0: $MinimapWorldContainer): void;
        getContainer(): $MinimapWorldContainer;
        getFullPath(): $XaeroPath;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        getCurrentWaypointSetId(): string;
        setCurrentWaypointSetId(arg0: string): void;
        getCurrentWaypointSet(): $WaypointSet;
        getRootConfig(): $RootConfig;
        getSlimeChunkSeed(): number;
        setSlimeChunkSeed(arg0: number): void;
        getWaypointSet(arg0: string): $WaypointSet;
        get localWorldKey(): $XaeroPath;
        get setCount(): number;
        get fullPath(): $XaeroPath;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
        get rootConfig(): $RootConfig;
    }
}
