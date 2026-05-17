import { $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_, $Function } from "@package/java/util/function";
import { $Leashable$LeashData, $Entity, $Leashable } from "@package/net/minecraft/world/entity";
import { $List, $List_, $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/com/blackgear/vanillabackport/common/api/leash" {
    export class $LeashExtension$Wrench extends $Record {
        scale(factor: number): $LeashExtension$Wrench;
        force(): $Vec3;
        static accumulate(wrenches: $List_<$LeashExtension$Wrench_>): $LeashExtension$Wrench;
        torque(): number;
        constructor(force: $Vec3_, torque: number);
    }
    /**
     * Values that may be interpreted as {@link $LeashExtension$Wrench}.
     */
    export type $LeashExtension$Wrench_ = { torque?: number, force?: $Vec3_,  } | [torque?: number, force?: $Vec3_, ];
    export class $LeashDataExtension {
    }
    export interface $LeashDataExtension {
        angularMomentum(): number;
        setAngularMomentum(arg0: number): void;
    }
    export class $LeashExtension {
        static vb$angularFriction<E extends $Entity>(entity: E): number;
        static vb$computeElasticInteraction<E extends $Entity>(entity: E, holder: $Entity, attachmentPoints: $List_<$Vec3_>, holderAttachmentPoints: $List_<$Vec3_>): $List<$LeashExtension$Wrench>;
        static vb$getHolderMovement(entity: $Entity): $Vec3;
        static vb$getKnownMovement(entity: $Entity): $Vec3;
        static vb$createQuadLeashOffsets(entity: $Entity, forwardOffset: number, sideOffset: number, widthOffset: number, heightOffset: number): $Vec3[];
        static vb$leashableLeashedTo(entity: $Entity): $List<$Leashable>;
        static vb$leashableInArea(level: $Level_, pos: $Vec3_, filter: $Predicate_<$Leashable>): $List<$Leashable>;
        static vb$leashableInArea(entity: $Entity, filter: $Predicate_<$Leashable>): $List<$Leashable>;
        static vb$getPreciseBodyRotation(entity: $Entity, partialTicks: number): number;
        static QUAD_LEASH_OFFSETS: $Map<$Predicate<$Entity>, $Function<$Entity, $Vec3[]>>;
        static AXIS_SPECIFIC_ELASTICITY: $Vec3;
        static LEASHER_ATTACHMENT_POINT: $List<$Vec3>;
        static ENTITY_ATTACHMENT_POINT: $List<$Vec3>;
        static SHARED_QUAD_ATTACHMENT_POINTS: $List<$Vec3>;
    }
    export interface $LeashExtension {
        vb$leashDistanceTo(entity: $Entity): number;
        vb$whenLeashedTo(entity: $Entity): void;
        vb$leashSnapDistance(): number;
        vb$leashElasticDistance(): number;
        vb$checkElasticInteractions(entity: $Entity, data: $Leashable$LeashData): boolean;
        vb$onElasticLeashPull(): void;
        vb$canHaveALeashAttachedTo(target: $Entity): boolean;
        vb$notifyLeashHolder(leashable: $Leashable): void;
        vb$resetAngularMomentum(): void;
        vb$supportQuadLeashAsHolder(): boolean;
        vb$supportQuadLeash(): boolean;
        vb$getQuadLeashOffsets(): $Vec3[];
        vb$getQuadLeashHolderOffsets(): $Vec3[];
    }
}
