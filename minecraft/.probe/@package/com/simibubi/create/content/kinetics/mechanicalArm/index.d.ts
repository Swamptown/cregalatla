import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $List } from "@package/java/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/mechanicalArm" {
    export class $ArmInteractionPoint {
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: number, arg3: boolean): $ItemStack;
        extract(arg0: $ArmBlockEntity, arg1: number, arg2: boolean): $ItemStack;
        insert(arg0: $ArmBlockEntity, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getType(): $ArmInteractionPointType;
        static create(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        keepAlive(): void;
        isValid(): boolean;
        setLevel(arg0: $Level_): void;
        getLevel(): $Level;
        getSlotCount(arg0: $ArmBlockEntity): number;
        updateCachedState(): void;
        cycleMode(): void;
        getTargetAngles(arg0: $BlockPos_, arg1: boolean): $ArmAngleTarget;
        static transformPos(arg0: $CompoundTag_, arg1: $StructureTransform): void;
        static isInteractable(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getMode(): $ArmInteractionPoint$Mode;
        static deserialize(arg0: $CompoundTag_, arg1: $Level_, arg2: $BlockPos_): $ArmInteractionPoint;
        serialize(arg0: $BlockPos_): $CompoundTag;
        getPos(): $BlockPos;
        constructor(arg0: $ArmInteractionPointType_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_);
        get type(): $ArmInteractionPointType;
        get valid(): boolean;
        get mode(): $ArmInteractionPoint$Mode;
        get pos(): $BlockPos;
    }
    export class $ArmAngleTarget {
        constructor(arg0: $BlockPos_, arg1: $Vec3_, arg2: $Direction_, arg3: boolean);
    }
    export interface $ArmInteractionPointType extends RegistryMarked<RegistryTypes.CreateArmInteractionPointTypeTag, RegistryTypes.CreateArmInteractionPointType> {}
    export class $ArmBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeInteractionPoints(arg0: $CompoundTag_): void;
        redstoneUpdate(): void;
        static getRange(): number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        hasComparators: number;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        static get range(): number;
    }
    export class $ArmInteractionPoint$Mode extends $Enum<$ArmInteractionPoint$Mode> {
        static values(): $ArmInteractionPoint$Mode[];
        static valueOf(arg0: string): $ArmInteractionPoint$Mode;
        getTranslationKey(): string;
        getColor(): number;
        static TAKE: $ArmInteractionPoint$Mode;
        static DEPOSIT: $ArmInteractionPoint$Mode;
        get translationKey(): string;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPoint$Mode}.
     */
    export type $ArmInteractionPoint$Mode_ = "deposit" | "take";
    export class $ArmInteractionPointType {
        static init(): void;
        getPriority(): number;
        canCreatePoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        static getPrimaryType(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPointType;
        createPoint(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $ArmInteractionPoint;
        static SORTED_TYPES_VIEW: $List<$ArmInteractionPointType>;
        constructor();
        get priority(): number;
    }
    /**
     * Values that may be interpreted as {@link $ArmInteractionPointType}.
     */
    export type $ArmInteractionPointType_ = RegistryTypes.CreateArmInteractionPointType;
}
