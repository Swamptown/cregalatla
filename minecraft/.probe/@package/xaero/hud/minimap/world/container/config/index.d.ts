import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort_, $WaypointsSort } from "@package/xaero/common/minimap/waypoints";
export * as io from "@package/xaero/hud/minimap/world/container/config/io";

declare module "@package/xaero/hud/minimap/world/container/config" {
    export class $RootConfig {
        setIgnoreHeightmaps(arg0: boolean): void;
        getSortType(): $WaypointsSort;
        isTeleportationEnabled(): boolean;
        isSortReversed(): boolean;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        resetSubWorldConnections(arg0: boolean): void;
        getServerTeleportCommandFormat(): string;
        getServerTeleportCommandRotationFormat(): string;
        isUsingDefaultTeleportCommand(): boolean;
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        setServerTeleportCommandFormat(arg0: string): void;
        setServerTeleportCommandRotationFormat(arg0: string): void;
        isUsingMultiworldDetection(): boolean;
        getDefaultMultiworldId(): string;
        setDefaultMultiworldId(arg0: string): void;
        setTeleportationEnabled(arg0: boolean): void;
        setSortType(arg0: $WaypointsSort_): void;
        toggleSortType(): void;
        setSortReversed(arg0: boolean): void;
        toggleSortReversed(): void;
        isIgnoreServerLevelId(): boolean;
        setIgnoreServerLevelId(arg0: boolean): void;
        setUsingMultiworldDetection(arg0: boolean): void;
        isIgnoreHeightmaps(): boolean;
        setLoaded(arg0: boolean): void;
        isLoaded(): boolean;
        loaded: boolean;
        constructor(arg0: boolean);
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
