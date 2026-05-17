import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $DisplayTarget, $DisplaySource } from "@package/com/simibubi/create/api/behaviour/display";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as target from "@package/com/simibubi/create/content/redstone/displayLink/target";

declare module "@package/com/simibubi/create/content/redstone/displayLink" {
    export class $DisplayLinkContext {
        level(): $Level;
        getSourceBlockEntity(): $BlockEntity;
        getSourcePos(): $BlockPos;
        sourceConfig(): $CompoundTag;
        getTargetPos(): $BlockPos;
        getTargetBlockEntity(): $BlockEntity;
        blockEntity(): $DisplayLinkBlockEntity;
        flapDisplayContext: $Object;
        constructor(arg0: $Level_, arg1: $DisplayLinkBlockEntity);
        get sourceBlockEntity(): $BlockEntity;
        get sourcePos(): $BlockPos;
        get targetPos(): $BlockPos;
        get targetBlockEntity(): $BlockEntity;
    }
    export class $DisplayLinkBlockEntity extends $LinkWithBulbBlockEntity implements $TransformableBlockEntity {
        target(arg0: $BlockPos_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        getTargetPosition(): $BlockPos;
        getSourceConfig(): $CompoundTag;
        updateGatheredData(): void;
        setSourceConfig(arg0: $CompoundTag_): void;
        handler$fof001$sable$accountForSubLevels(arg0: $CallbackInfoReturnable<any>): void;
        tickSource(): void;
        onNoLongerPowered(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getDirection(): $Direction;
        getSourcePosition(): $BlockPos;
        worldPosition: $BlockPos;
        refreshTicks: number;
        level: $Level;
        targetLine: number;
        static ATTACHMENTS_NBT_KEY: string;
        activeTarget: $DisplayTarget;
        hasComparators: number;
        computerBehaviour: $AbstractComputerBehaviour;
        factoryPanelSupport: $FactoryPanelSupportBehaviour;
        activeSource: $DisplaySource;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get targetPosition(): $BlockPos;
        get direction(): $Direction;
        get sourcePosition(): $BlockPos;
    }
    export class $LinkWithBulbBlockEntity extends $SmartBlockEntity {
        pulse(): void;
        getGlow(arg0: number): number;
        sendPulseNextSync(): void;
        getBulbFacing(arg0: $BlockState_): $Direction;
        getBulbOffset(arg0: $BlockState_): $Vec3;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
