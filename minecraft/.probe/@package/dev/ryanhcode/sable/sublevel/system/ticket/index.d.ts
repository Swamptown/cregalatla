import { $Level_ } from "@package/net/minecraft/world/level";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $SectionPos } from "@package/net/minecraft/core";
import { $PhysicsPipeline } from "@package/dev/ryanhcode/sable/api/physics";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Iterable } from "@package/java/lang";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/sublevel/system/ticket" {
    export class $PhysicsChunkTicketManager {
        update(arg0: $ServerLevel, arg1: $ServerSubLevelContainer, arg2: $SubLevelPhysicsSystem, arg3: $PhysicsPipeline, arg4: number): void;
        wouldBeLoaded(arg0: $Level_, arg1: $ArbitraryPhysicsObject): boolean;
        static isChunkLoadedEnough(arg0: $ServerLevel, arg1: number, arg2: number): boolean;
        addTicketForSection(arg0: $ServerLevel, arg1: $SectionPos): void;
        addSectionIfNotTracked(arg0: $ServerLevel, arg1: $LevelChunkSection, arg2: $SectionPos, arg3: $PhysicsPipeline): void;
        queryIntersecting(arg0: $BoundingBox3dc): $Iterable<$SubLevel>;
        static MAX_PREDICTION_DISTANCE: number;
        constructor();
    }
}
