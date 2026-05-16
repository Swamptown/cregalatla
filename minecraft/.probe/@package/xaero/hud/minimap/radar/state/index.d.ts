import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $EntityRadarCategory, $EntityRadarCategoryManager } from "@package/xaero/hud/minimap/radar/category";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ObjectCategorySetting } from "@package/xaero/hud/category/setting";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparable, $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/radar/state" {
    export class $RadarState {
        getListsReversedOrder(): boolean;
        getListsGeneratedForConfig(): $EntityRadarCategory;
        getListsGeneratedForSyncedConfig(): $EntityRadarCategory;
        setListsGeneratedForSyncedConfig(arg0: $EntityRadarCategory): void;
        getRadarLists(): $Iterable<$RadarList>;
        constructor();
        get listsReversedOrder(): boolean;
        get listsGeneratedForConfig(): $EntityRadarCategory;
        get radarLists(): $Iterable<$RadarList>;
    }
    export class $RadarList implements $Comparable<$RadarList> {
        size(): number;
        get(arg0: number): $Entity;
        compareTo(arg0: $RadarList): number;
        add(arg0: $Entity): boolean;
        clearEntities(): void;
        setClientCategory(arg0: $EntityRadarCategory): $RadarList;
        getClientCategory(): $EntityRadarCategory;
        setSyncedCategory(arg0: $EntityRadarCategory): $RadarList;
        getSyncedCategory(): $EntityRadarCategory;
        getEffective<T>(arg0: $ObjectCategorySetting<T>): T;
        getEntities(): $Iterable<$Entity>;
        get entities(): $Iterable<$Entity>;
    }
    export class $RadarStateUpdater {
        update(arg0: $ClientLevel, arg1: $Entity, arg2: $Player): void;
        setLastRenderViewEntity(arg0: $Entity): void;
        constructor(arg0: $EntityRadarCategoryManager, arg1: $RadarState);
        set lastRenderViewEntity(value: $Entity);
    }
}
