import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $List } from "@package/java/util";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Container } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder$Reference } from "@package/net/minecraft/core";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/api/contraption/storage/item" {
    export class $MountedItemStorageWrapper extends $CombinedInvWrapper {
        storages: $ImmutableMap<$BlockPos, $MountedItemStorage>;
        constructor(arg0: $ImmutableMap<$BlockPos_, $MountedItemStorage>);
    }
    export interface $MountedItemStorageType<T> extends RegistryMarked<RegistryTypes.CreateMountedItemStorageTypeTag, RegistryTypes.CreateMountedItemStorageType> {}
    export class $MountedItemStorage implements $IItemHandlerModifiable {
        wrapMethod$cnc000$offroad$wrapHandler(arg0: $StructureTemplate$StructureBlockInfo_, arg1: $Contraption, arg2: $Operation_<any>): $IItemHandlerModifiable;
        handleInteraction(arg0: $ServerPlayer, arg1: $Contraption, arg2: $StructureTemplate$StructureBlockInfo_): boolean;
        unmount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): void;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$self(): $IItemHandler;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getWidth(): number;
        getHeight(): number;
        setChanged(): void;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        isEmpty(): boolean;
        getSlots(): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        static CODEC: $Codec<$MountedItemStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
        get slots(): number;
    }
    export class $MountedItemStorageType<T extends $MountedItemStorage> {
        static mountedItemStorage<B extends $Block, P>(arg0: $RegistryEntry<$MountedItemStorageType_<never>, $MountedItemStorageType_<never>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): T;
        is(arg0: $TagKey_<$MountedItemStorageType<never>>): boolean;
        codec: $MapCodec<T>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
    }
    /**
     * Values that may be interpreted as {@link $MountedItemStorageType}.
     */
    export type $MountedItemStorageType_<T> = RegistryTypes.CreateMountedItemStorageType;
}
