import { $Level_ } from "@package/net/minecraft/world/level";
import { $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $PhysicsPipeline } from "@package/dev/ryanhcode/sable/api/physics";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $SubLevelRemovalReason_ } from "@package/dev/ryanhcode/sable/sublevel/storage";
import { $SubLevel, $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $UUID_ } from "@package/java/util";
import { $PhysicsConfigData } from "@package/dev/ryanhcode/sable/physics/config";
import { $PhysicsChunkTicketManager } from "@package/dev/ryanhcode/sable/sublevel/system/ticket";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Iterable } from "@package/java/lang";
import { $SubLevelObserver, $SubLevelTrackingPlugin, $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
export * as ticket from "@package/dev/ryanhcode/sable/sublevel/system/ticket";

declare module "@package/dev/ryanhcode/sable/sublevel/system" {
    export class $SubLevelPhysicsSystem implements $SubLevelObserver {
        getPipeline(): $PhysicsPipeline;
        wakeUpObjectsAt(arg0: number, arg1: number, arg2: number): void;
        getTicketManager(): $PhysicsChunkTicketManager;
        updatePose(arg0: $ServerSubLevel): void;
        onConfigUpdated(): void;
        getPartialPhysicsTick(): number;
        recoverSubLevel(arg0: $ServerSubLevel): boolean;
        static getCurrentlySteppingSystem(): $SubLevelPhysicsSystem;
        tryPunch(arg0: $UUID_, arg1: number): boolean;
        updateMassDataFromBlockChange(arg0: $SubLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: boolean): void;
        getPaused(): boolean;
        setPaused(arg0: boolean): void;
        getArbitraryObjects(): $Iterable<$ArbitraryPhysicsObject>;
        addObject(arg0: $ArbitraryPhysicsObject): void;
        getNextRuntimeID(): number;
        tick(arg0: $SubLevelContainer): void;
        handleBlockChange(arg0: $SectionPos, arg1: $LevelChunkSection, arg2: number, arg3: number, arg4: number, arg5: $BlockState_, arg6: $BlockState_): void;
        getPhysicsHandle(arg0: $ServerSubLevel): $RigidBodyHandle;
        getLevel(): $ServerLevel;
        static get(arg0: $Level_): $SubLevelPhysicsSystem;
        initialize(): void;
        removeObject(arg0: $ArbitraryPhysicsObject): void;
        getConfig(): $PhysicsConfigData;
        static require(arg0: $Level_): $SubLevelPhysicsSystem;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        onSubLevelAdded(arg0: $SubLevel): void;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        static USE_TICKETS_FOR_QUERIES: boolean;
        static DEFAULT_RESIDENT_CAPACITY: number;
        static currentlySteppingSystem: $SubLevelPhysicsSystem;
        constructor(arg0: $ServerLevel);
        get pipeline(): $PhysicsPipeline;
        get ticketManager(): $PhysicsChunkTicketManager;
        get partialPhysicsTick(): number;
        get arbitraryObjects(): $Iterable<$ArbitraryPhysicsObject>;
        get nextRuntimeID(): number;
        get level(): $ServerLevel;
        get config(): $PhysicsConfigData;
    }
    export class $SubLevelTrackingSystem implements $SubLevelObserver {
        addTrackingPlugin(arg0: $SubLevelTrackingPlugin): void;
        serverWidePlayerSink(arg0: $ServerSubLevel): $VeilPacketManager$PacketSink;
        getInterpolationTick(): number;
        tick(arg0: $SubLevelContainer): void;
        onSubLevelRemoved(arg0: $SubLevel, arg1: $SubLevelRemovalReason_): void;
        onSubLevelAdded(arg0: $SubLevel): void;
        constructor(arg0: $ServerLevel);
        get interpolationTick(): number;
    }
}
