import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as fluid from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
export * as filtering from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
export * as scrollValue from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour" {
    export class $BlockEntityBehaviour {
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BehaviourType<T>): T;
        static get<T extends $BlockEntityBehaviour>(arg0: $BlockEntity, arg1: $BehaviourType<T>): T;
        initialize(): void;
        destroy(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getType(): $BehaviourType<never>;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        unload(): void;
        tick(): void;
        onBlockChanged(arg0: $BlockState_): void;
        getRequiredItems(): $ItemRequirement;
        onNeighborChanged(arg0: $BlockPos_): void;
        setLazyTickRate(arg0: number): void;
        lazyTick(): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isSafeNBT(): boolean;
        getWorld(): $Level;
        getPos(): $BlockPos;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity);
        get type(): $BehaviourType<never>;
        get requiredItems(): $ItemRequirement;
        set lazyTickRate(value: number);
        get safeNBT(): boolean;
        get world(): $Level;
        get pos(): $BlockPos;
    }
    export class $BehaviourType<T extends $BlockEntityBehaviour> {
        getName(): string;
        constructor(arg0: string);
        constructor();
        get name(): string;
    }
}
