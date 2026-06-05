import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $NavigationTableExtensionAccess, $NavigationTableMapResolver$ResolvedTarget, $NavigationTableExtensionAccess$RunState } from "@package/com/example/createthrusters/content/navigation";
import { $NavigationTarget } from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";
import { $Clearable } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SingleSlotContainer, $ContainerSlot } from "@package/dev/simulated_team/simulated/multiloader/inventory";
import { $INamedBlockEntity } from "@package/com/example/createthrusters/lib/discovery";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DirectionalAnalogSource, $DirectionalAnalogSnapshot } from "@package/com/example/createthrusters/lib/control";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $Quaterniond } from "@package/org/joml";
export * as navigation_target from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";

declare module "@package/dev/simulated_team/simulated/content/blocks/nav_table" {
    export class $NavTableInventory extends $SingleSlotContainer {
        maxStackSize: number;
        slot: $ContainerSlot;
        constructor(arg0: $NavTableBlockEntity);
    }
    export class $NavTableBlockEntity extends $SmartBlockEntity implements $Clearable, $DirectionalAnalogSource, $NavigationTableExtensionAccess, $INamedBlockEntity {
        getNavTableItem(): $NavigationTarget;
        distanceToTarget(): number;
        lastDistanceToTarget(): number;
        getDirectionalAnalogSnapshot(): $DirectionalAnalogSnapshot;
        dropHeldItem(): void;
        ct$getSelectedSlot(): number;
        ct$getMapInSlot(arg0: number): $ItemStack;
        ct$setMapInSlot(arg0: number, arg1: $ItemStack_): void;
        ct$setMapInSlot(arg0: number, arg1: $ItemStack_, arg2: $Player): void;
        ct$getRunState(): $NavigationTableExtensionAccess$RunState;
        ct$stopNavigation(): void;
        ct$setSelectedSlot(arg0: number): void;
        getTargetPosition(arg0: boolean): $Vec3;
        getProjectedSelfPos(): $Vec3;
        getClientTargetAngle(arg0: number): number;
        forceCurrentAngle(arg0: number): void;
        getSublevelRot(): $Quaterniond;
        setHeldItem(arg0: $ItemStack_): $ItemStack;
        getRelativeAngle(): number;
        ct$getResolvedTarget(arg0: number): $NavigationTableMapResolver$ResolvedTarget;
        ct$pauseNavigation(): void;
        ct$getTargetLabel(): string;
        ct$getRelativeAngleDeg(): number;
        ct$getDirectionalSnapshot(): $DirectionalAnalogSnapshot;
        isDirectionalAnalogActive(): boolean;
        ct$startNavigation(): void;
        getHeldItem(): $ItemStack;
        getRedstoneStrength(arg0: $Direction_): number;
        clearContent(): void;
        getCustomName(): string;
        setCustomName(arg0: string): void;
        worldPosition: $BlockPos;
        isPowering: boolean;
        currentTarget: $Vec3;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        inventory: $NavTableInventory;
        lerpedAngleDegrees: $LerpedFloat;
        subLevel: $SubLevel;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get navTableItem(): $NavigationTarget;
        get directionalAnalogSnapshot(): $DirectionalAnalogSnapshot;
        get projectedSelfPos(): $Vec3;
        get sublevelRot(): $Quaterniond;
        get relativeAngle(): number;
        get directionalAnalogActive(): boolean;
    }
}
