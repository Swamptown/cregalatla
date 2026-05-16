import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $Level } from "@package/net/minecraft/world/level";
import { $List, $Map$Entry } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $WaypointsSort_, $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as config from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        getLastNode(): string;
        getSession(): $MinimapSession;
        setPath(arg0: $XaeroPath): void;
        getSubName(): string;
        getRootConfig(): $RootConfig;
        getFirstWorld(): $MinimapWorld;
        getDirectoryPath(): $Path;
        removeName(arg0: string): void;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        containsSubContainer(arg0: $XaeroPath): boolean;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getFullWorldName(arg0: string, arg1: string): string;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        getWorldsCopy(): $List<$MinimapWorld>;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        removeWorld(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        getServerWaypointManager(): $ServerWaypointManager;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get lastNode(): string;
        get session(): $MinimapSession;
        get subName(): string;
        get rootConfig(): $RootConfig;
        get firstWorld(): $MinimapWorld;
        get directoryPath(): $Path;
        get worldsCopy(): $List<$MinimapWorld>;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
        get worlds(): $Iterable<$MinimapWorld>;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get serverWaypointManager(): $ServerWaypointManager;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        isConfigLoaded(): boolean;
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        updateConnectionsField(arg0: $WaypointSession): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        updateDimensionType(arg0: $ClientLevel): void;
        renameOldContainer(arg0: $XaeroPath): void;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort_): void;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        get configLoaded(): boolean;
        get config(): $RootConfig;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        get subWorldConnections(): $MinimapWorldConnectionManager;
    }
}
