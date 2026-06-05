import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";

declare module "@package/net/neoforged/neoforge/energy" {
    export class $IEnergyStorage {
    }
    export interface $IEnergyStorage {
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        canExtract(): boolean;
        canReceive(): boolean;
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $EmptyEnergyStorage implements $IEnergyStorage {
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        canExtract(): boolean;
        canReceive(): boolean;
        static INSTANCE: $EmptyEnergyStorage;
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $EnergyStorage implements $IEnergyStorage, $INBTSerializable<$Tag> {
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        canExtract(): boolean;
        canReceive(): boolean;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $Tag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $Tag;
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $ComponentEnergyStorage implements $IEnergyStorage {
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        canExtract(): boolean;
        canReceive(): boolean;
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number, arg3: number);
        constructor(arg0: $MutableDataComponentHolder, arg1: $DataComponentType_<number>, arg2: number);
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
}
