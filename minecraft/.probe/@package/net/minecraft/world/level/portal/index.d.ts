import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $BlockPos_, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $EntityDimensions_, $Entity } from "@package/net/minecraft/world/entity";
import { $Optional } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/portal" {
    export class $PortalForcer {
        findClosestPortalPosition(arg0: $BlockPos_, arg1: boolean, arg2: $WorldBorder): $Optional<any>;
        createPortal(arg0: $BlockPos_, arg1: $Direction$Axis_): ($BlockUtil$FoundRectangle) | undefined;
        level: $ServerLevel;
        static TICKET_RADIUS: number;
        constructor(arg0: $ServerLevel);
    }
    export class $DimensionTransition$PostDimensionTransition {
    }
    export interface $DimensionTransition$PostDimensionTransition {
        then(arg0: $DimensionTransition$PostDimensionTransition_): $DimensionTransition$PostDimensionTransition;
        onTransition(arg0: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransition$PostDimensionTransition}.
     */
    export type $DimensionTransition$PostDimensionTransition_ = ((arg0: $Entity) => void);
    export class $PortalShape {
        static findPortalShape(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Predicate_<$PortalShape>, arg3: $Direction$Axis_): ($PortalShape) | undefined;
        static findEmptyPortalShape(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$Axis_): ($PortalShape) | undefined;
        createPortalBlocks(): void;
        static findCollisionFreePosition(arg0: $Vec3_, arg1: $ServerLevel, arg2: $Entity, arg3: $EntityDimensions_): $Vec3;
        isValid(): boolean;
        isComplete(): boolean;
        static getRelativePosition(arg0: $BlockUtil$FoundRectangle, arg1: $Direction$Axis_, arg2: $Vec3_, arg3: $EntityDimensions_): $Vec3;
        static MAX_WIDTH: number;
        static MAX_HEIGHT: number;
        constructor(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$Axis_);
        get valid(): boolean;
        get complete(): boolean;
    }
    export class $DimensionTransition extends $Record {
        static missingRespawnBlock(arg0: $ServerLevel, arg1: $Entity, arg2: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        missingRespawnBlock(): boolean;
        newLevel(): $ServerLevel;
        pos(): $Vec3;
        speed(): $Vec3;
        xRot(): number;
        yRot(): number;
        postDimensionTransition(): $DimensionTransition$PostDimensionTransition;
        static PLACE_PORTAL_TICKET: $DimensionTransition$PostDimensionTransition;
        static PLAY_PORTAL_SOUND: $DimensionTransition$PostDimensionTransition;
        static DO_NOTHING: $DimensionTransition$PostDimensionTransition;
        constructor(arg0: $ServerLevel, arg1: $Entity, arg2: $DimensionTransition$PostDimensionTransition_);
        constructor(arg0: $ServerLevel, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: number, arg5: boolean, arg6: $DimensionTransition$PostDimensionTransition_);
        constructor(arg0: $ServerLevel, arg1: $Vec3_, arg2: $Vec3_, arg3: number, arg4: number, arg5: $DimensionTransition$PostDimensionTransition_);
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransition}.
     */
    export type $DimensionTransition_ = { missingRespawnBlock?: boolean, newLevel?: $ServerLevel, postDimensionTransition?: $DimensionTransition$PostDimensionTransition_, pos?: $Vec3_, speed?: $Vec3_, yRot?: number, xRot?: number,  } | [missingRespawnBlock?: boolean, newLevel?: $ServerLevel, postDimensionTransition?: $DimensionTransition$PostDimensionTransition_, pos?: $Vec3_, speed?: $Vec3_, yRot?: number, xRot?: number, ];
}
