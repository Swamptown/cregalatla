import { $Sniffer$State } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Pose } from "@package/net/minecraft/world/entity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $UUID, $List, $List_, $OptionalInt } from "@package/java/util";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $VillagerData } from "@package/net/minecraft/world/entity/npc";
import { $CatVariant, $FrogVariant, $WolfVariant } from "@package/net/minecraft/world/entity/animal";
import { $ClassTreeIdRegistry } from "@package/net/minecraft/util";
import { $Armadillo$ArmadilloState } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $BlockPos, $GlobalPos, $Rotations, $Direction, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Record, $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/network/syncher" {
    export interface $EntityDataSerializer<T> extends RegistryMarked<RegistryTypes.NeoforgeEntityDataSerializersTag, RegistryTypes.NeoforgeEntityDataSerializers> {}
    export class $SyncedDataHolder {
    }
    export interface $SyncedDataHolder {
        onSyncedDataUpdated(arg0: $EntityDataAccessor_<never>): void;
        onSyncedDataUpdated(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
    }
    export class $EntityDataSerializer<T> {
        static forValueType<T>(arg0: $StreamCodec<$RegistryFriendlyByteBuf, T>): $EntityDataSerializer<T>;
    }
    export interface $EntityDataSerializer<T> {
        copy(arg0: T): T;
        createAccessor(arg0: number): $EntityDataAccessor<T>;
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSerializer}.
     */
    export type $EntityDataSerializer_<T> = RegistryTypes.NeoforgeEntityDataSerializers;
    export class $SynchedEntityData$DataItem<T> {
        value(): $SynchedEntityData$DataValue<T>;
        getValue(): T;
        setValue(arg0: T): void;
        getAccessor(): $EntityDataAccessor<T>;
        isDirty(): boolean;
        isSetToDefault(): boolean;
        setDirty(arg0: boolean): void;
        accessor: $EntityDataAccessor<T>;
        constructor(arg0: $EntityDataAccessor_<T>, arg1: T);
        get setToDefault(): boolean;
    }
    export class $EntityDataSerializers {
        /**
         * @deprecated
         */
        static registerSerializer(arg0: $EntityDataSerializer_<never>): void;
        static getSerializedId(arg0: $EntityDataSerializer_<never>): number;
        static getSerializer(arg0: number): $EntityDataSerializer<never>;
        static FLOAT: $EntityDataSerializer<number>;
        static PARTICLE: $EntityDataSerializer<$ParticleOptions>;
        static PARTICLES: $EntityDataSerializer<$List<$ParticleOptions>>;
        static BLOCK_STATE: $EntityDataSerializer<$BlockState>;
        static OPTIONAL_UUID: $EntityDataSerializer<($UUID) | undefined>;
        static VILLAGER_DATA: $EntityDataSerializer<$VillagerData>;
        static QUATERNION: $EntityDataSerializer<$Quaternionf>;
        static INT: $EntityDataSerializer<number>;
        static BLOCK_POS: $EntityDataSerializer<$BlockPos>;
        static SNIFFER_STATE: $EntityDataSerializer<$Sniffer$State>;
        static OPTIONAL_BLOCK_POS: $EntityDataSerializer<($BlockPos) | undefined>;
        static OPTIONAL_UNSIGNED_INT: $EntityDataSerializer<$OptionalInt>;
        static WOLF_VARIANT: $EntityDataSerializer<$Holder<$WolfVariant>>;
        static BYTE: $EntityDataSerializer<number>;
        static ITEM_STACK: $EntityDataSerializer<$ItemStack>;
        static OPTIONAL_BLOCK_STATE: $EntityDataSerializer<($BlockState) | undefined>;
        static COMPOUND_TAG: $EntityDataSerializer<$CompoundTag>;
        static LONG: $EntityDataSerializer<number>;
        static OPTIONAL_GLOBAL_POS: $EntityDataSerializer<($GlobalPos) | undefined>;
        static PAINTING_VARIANT: $EntityDataSerializer<$Holder<$PaintingVariant>>;
        static DIRECTION: $EntityDataSerializer<$Direction>;
        static BOOLEAN: $EntityDataSerializer<boolean>;
        static CAT_VARIANT: $EntityDataSerializer<$Holder<$CatVariant>>;
        static OPTIONAL_COMPONENT: $EntityDataSerializer<($Component) | undefined>;
        static POSE: $EntityDataSerializer<$Pose>;
        static ROTATIONS: $EntityDataSerializer<$Rotations>;
        static ARMADILLO_STATE: $EntityDataSerializer<$Armadillo$ArmadilloState>;
        static STRING: $EntityDataSerializer<string>;
        static COMPONENT: $EntityDataSerializer<$Component>;
        static FROG_VARIANT: $EntityDataSerializer<$Holder<$FrogVariant>>;
        static VECTOR3: $EntityDataSerializer<$Vector3f>;
    }
    export class $SynchedEntityData$Builder {
        build(): $SynchedEntityData;
        define<T>(arg0: $EntityDataAccessor_<T>, arg1: T): $SynchedEntityData$Builder;
        constructor(arg0: $SyncedDataHolder);
    }
    export class $EntityDataSerializer$ForValueType<T> {
    }
    export interface $EntityDataSerializer$ForValueType<T> extends $EntityDataSerializer<T> {
        copy(arg0: T): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSerializer$ForValueType}.
     */
    export type $EntityDataSerializer$ForValueType_<T> = (() => void);
    export class $SynchedEntityData$DataValue<T> extends $Record {
        value(): T;
        id(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static create<T>(arg0: $EntityDataAccessor_<T>, arg1: T): $SynchedEntityData$DataValue<T>;
        static read(arg0: $RegistryFriendlyByteBuf, arg1: number): $SynchedEntityData$DataValue<never>;
        serializer(): $EntityDataSerializer<T>;
        constructor(id: number, serializer: $EntityDataSerializer_<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $SynchedEntityData$DataValue}.
     */
    export type $SynchedEntityData$DataValue_<T> = { value?: any, serializer?: $EntityDataSerializer_<any>, id?: number,  } | [value?: any, serializer?: $EntityDataSerializer_<any>, id?: number, ];
    export class $EntityDataAccessor<T> extends $Record {
        id(): number;
        serializer(): $EntityDataSerializer<T>;
        constructor(arg0: number, arg1: $EntityDataSerializer_<T>);
    }
    /**
     * Values that may be interpreted as {@link $EntityDataAccessor}.
     */
    export type $EntityDataAccessor_<T> = { serializer?: $EntityDataSerializer_<any>, id?: number,  } | [serializer?: $EntityDataSerializer_<any>, id?: number, ];
    export class $SynchedEntityData {
        get<T>(arg0: $EntityDataAccessor_<T>): T;
        set<T>(arg0: $EntityDataAccessor_<T>, arg1: T): void;
        set<T>(arg0: $EntityDataAccessor_<T>, arg1: T, arg2: boolean): void;
        isDirty(): boolean;
        packDirty(): $List<$SynchedEntityData$DataValue<never>>;
        getNonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
        assignValues(arg0: $List_<$SynchedEntityData$DataValue_<never>>): void;
        static defineId<T>(arg0: $Class<$SyncedDataHolder>, arg1: $EntityDataSerializer_<T>): $EntityDataAccessor<T>;
        static ID_REGISTRY: $ClassTreeIdRegistry;
        constructor(arg0: $SyncedDataHolder, arg1: $SynchedEntityData$DataItem<never>[]);
        get dirty(): boolean;
        get nonDefaultValues(): $List<$SynchedEntityData$DataValue<never>>;
    }
}
