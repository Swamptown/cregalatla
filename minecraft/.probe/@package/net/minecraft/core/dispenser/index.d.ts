import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Position } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack, $Item_, $ProjectileItem$DispenseConfig, $ItemStack_, $ProjectileItem } from "@package/net/minecraft/world/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ProjectileDispenseBehaviorAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Record } from "@package/java/lang";
import { $Boat$Type_ } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DispenserBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/core/dispenser" {
    export class $DefaultDispenseItemBehavior implements $DispenseItemBehavior {
        execute(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        dispense(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
        playAnimation(arg0: $BlockSource_, arg1: $Direction_): void;
        consumeWithRemainder(arg0: $BlockSource_, arg1: $ItemStack_, arg2: $ItemStack_): $ItemStack;
        static spawnItem(arg0: $Level_, arg1: $ItemStack_, arg2: number, arg3: $Direction_, arg4: $Position): void;
        playSound(arg0: $BlockSource_): void;
        constructor();
    }
    export class $ShulkerBoxDispenseBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $BoatDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        constructor(arg0: $Boat$Type_);
        constructor(arg0: $Boat$Type_, arg1: boolean);
    }
    export class $BlockSource extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        level(): $ServerLevel;
        center(): $Vec3;
        blockEntity(): $DispenserBlockEntity;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $DispenserBlockEntity);
    }
    /**
     * Values that may be interpreted as {@link $BlockSource}.
     */
    export type $BlockSource_ = { state?: $BlockState_, blockEntity?: $DispenserBlockEntity, pos?: $BlockPos_, level?: $ServerLevel,  } | [state?: $BlockState_, blockEntity?: $DispenserBlockEntity, pos?: $BlockPos_, level?: $ServerLevel, ];
    export class $ShearsDispenseItemBehavior extends $OptionalDispenseItemBehavior {
        constructor();
    }
    export class $OptionalDispenseItemBehavior extends $DefaultDispenseItemBehavior {
        setSuccess(arg0: boolean): void;
        isSuccess(): boolean;
        constructor();
    }
    export class $DispenseItemBehavior {
        static bootStrap(): void;
        static NOOP: $DispenseItemBehavior;
        static LOGGER: $Logger;
    }
    export interface $DispenseItemBehavior {
        dispense(arg0: $BlockSource_, arg1: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DispenseItemBehavior}.
     */
    export type $DispenseItemBehavior_ = ((arg0: $BlockSource, arg1: $ItemStack) => $ItemStack_);
    export class $ProjectileDispenseBehavior extends $DefaultDispenseItemBehavior implements $ProjectileDispenseBehaviorAccessor {
        create$getProjectileItem(): $ProjectileItem;
        create$getDispenseConfig(): $ProjectileItem$DispenseConfig;
        constructor(arg0: $Item_);
    }
}
