import { $Consumer_ } from "@package/java/util/function";
import { $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $PacketReceiveMode_ } from "@package/dev/ryanhcode/sable/network/packets";
import { $Record } from "@package/java/lang";
import { $ClientSubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/network/client" {
    export class $SubLevelSnapshotInterpolator$Snapshot extends $Record {
        gameTick(): number;
        pose(): $Pose3dc;
        constructor(gameTick: number, pose: $Pose3dc);
    }
    /**
     * Values that may be interpreted as {@link $SubLevelSnapshotInterpolator$Snapshot}.
     */
    export type $SubLevelSnapshotInterpolator$Snapshot_ = { gameTick?: number, pose?: $Pose3dc,  } | [gameTick?: number, pose?: $Pose3dc, ];
    export class $SubLevelSnapshotInterpolator {
        receiveSnapshot(arg0: number, arg1: $Pose3dc): void;
        setFirstPoses(arg0: $Pose3dc, arg1: $Pose3dc): void;
        tick(arg0: number): void;
        getInterpolatedPose(): $Pose3dc;
        receiveStop(): void;
        splitFrom(arg0: $SubLevelSnapshotInterpolator, arg1: $Pose3dc): void;
        getSampleAt(arg0: number, arg1: $Pose3d): void;
        buffer: $ObjectArrayList<$SubLevelSnapshotInterpolator$Snapshot>;
        constructor(arg0: $Pose3d);
        get interpolatedPose(): $Pose3dc;
    }
    export class $ClientSableInterpolationState {
        getInterpolationDelay(): number;
        receiveSnapshot(arg0: $ClientSubLevel, arg1: number, arg2: $Pose3dc, arg3: $PacketReceiveMode_): void;
        receiveInfo(arg0: number, arg1: number, arg2: boolean): void;
        addDebugInfo(arg0: $Consumer_<string>): void;
        tick(): void;
        getTickPointer(): number;
        isStopped(): boolean;
        mostRecentInterpolationTick: number;
        static RENDER_INTERPOLATION_BOUNDS: boolean;
        lastInterpolationTick: number;
        constructor();
        get interpolationDelay(): number;
        get tickPointer(): number;
        get stopped(): boolean;
    }
}
