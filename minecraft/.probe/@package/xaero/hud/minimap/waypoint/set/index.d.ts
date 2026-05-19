import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $List_, $Collection_ } from "@package/java/util";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/waypoint/set" {
    export class $WaypointSet {
        getWaypoints(): $Iterable<$Waypoint>;
        addTo(arg0: $List_<$Waypoint>): void;
        getName(): string;
        remove(arg0: number): $Waypoint;
        remove(arg0: $Waypoint): void;
        size(): number;
        get(arg0: number): $Waypoint;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $Waypoint): void;
        add(arg0: $Waypoint, arg1: boolean): void;
        addAll(arg0: $Collection_<$Waypoint>): void;
        addAll(arg0: $Collection_<$Waypoint>, arg1: boolean): void;
        set(arg0: number, arg1: $Waypoint): $Waypoint;
        removeAll(arg0: $Collection_<$Waypoint>): void;
        get waypoints(): $Iterable<$Waypoint>;
        get name(): string;
        get empty(): boolean;
    }
}
