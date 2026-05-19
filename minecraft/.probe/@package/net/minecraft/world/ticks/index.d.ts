import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Tag_, $CompoundTag, $ListTag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Comparator, $List, $List_ } from "@package/java/util";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $LongPredicate_, $Consumer_, $BiConsumer_, $Predicate_, $Supplier_, $Function_, $Function } from "@package/java/util/function";
import { $LevelChunkTicksExtension } from "@package/dev/ryanhcode/sable/mixinterface/plot/serialization";
import { $Container } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/ticks" {
    export class $ContainerSingleItem {
    }
    export interface $ContainerSingleItem extends $Container {
        setItem(arg0: number, arg1: $ItemStack_): void;
        getTheItem(): $ItemStack;
        setTheItem(arg0: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        splitTheItem(arg0: number): $ItemStack;
        clearContent(): void;
        removeItem(arg0: number, arg1: number): $ItemStack;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        getContainerSize(): number;
        removeItemNoUpdate(arg0: number): $ItemStack;
        get empty(): boolean;
        get containerSize(): number;
    }
    export class $ScheduledTick<T> extends $Record {
        triggerTick(): number;
        subTickOrder(): number;
        priority(): $TickPriority;
        type(): T;
        static probe<T>(arg0: T, arg1: $BlockPos_): $ScheduledTick<T>;
        pos(): $BlockPos;
        static INTRA_TICK_DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$ScheduledTick<never>>;
        static DRAIN_ORDER: $Comparator<$ScheduledTick<never>>;
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: number);
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $ScheduledTick}.
     */
    export type $ScheduledTick_<T> = { subTickOrder?: number, type?: any, pos?: $BlockPos_, priority?: $TickPriority_, triggerTick?: number,  } | [subTickOrder?: number, type?: any, pos?: $BlockPos_, priority?: $TickPriority_, triggerTick?: number, ];
    export class $LevelTicks<T> implements $LevelTickAccess<T> {
        clearArea(arg0: $BoundingBox): void;
        copyAreaFrom(arg0: $LevelTicks<T>, arg1: $BoundingBox, arg2: $Vec3i): void;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        removeContainer(arg0: $ChunkPos): void;
        willTickThisTick(arg0: $BlockPos_, arg1: T): boolean;
        copyArea(arg0: $BoundingBox, arg1: $Vec3i): void;
        tick(arg0: number, arg1: number, arg2: $BiConsumer_<$BlockPos, T>): void;
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        addContainer(arg0: $ChunkPos, arg1: $LevelChunkTicks<T>): void;
        constructor(arg0: $LongPredicate_, arg1: $Supplier_<$ProfilerFiller>);
    }
    export class $TickPriority extends $Enum<$TickPriority> {
        static byValue(arg0: number): $TickPriority;
        static values(): $TickPriority[];
        static valueOf(arg0: string): $TickPriority;
        getValue(): number;
        static EXTREMELY_LOW: $TickPriority;
        static VERY_HIGH: $TickPriority;
        static HIGH: $TickPriority;
        static LOW: $TickPriority;
        static VERY_LOW: $TickPriority;
        static EXTREMELY_HIGH: $TickPriority;
        static NORMAL: $TickPriority;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $TickPriority}.
     */
    export type $TickPriority_ = "extremely_high" | "very_high" | "high" | "normal" | "low" | "very_low" | "extremely_low";
    export class $LevelTicks$PosAndContainerConsumer<T> {
    }
    export interface $LevelTicks$PosAndContainerConsumer<T> {
    }
    /**
     * Values that may be interpreted as {@link $LevelTicks$PosAndContainerConsumer}.
     */
    export type $LevelTicks$PosAndContainerConsumer_<T> = (() => void);
    export class $TickAccess<T> {
    }
    export interface $TickAccess<T> {
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
    }
    export class $BlackholeTickAccess {
        static emptyContainer<T>(): $TickContainerAccess<T>;
        static emptyLevelList<T>(): $LevelTickAccess<T>;
        constructor();
    }
    export class $WorldGenTickAccess<T> implements $LevelTickAccess<T> {
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        willTickThisTick(arg0: $BlockPos_, arg1: T): boolean;
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        constructor(arg0: $Function_<$BlockPos, $TickContainerAccess<T>>);
    }
    export class $LevelTickAccess<T> {
    }
    export interface $LevelTickAccess<T> extends $TickAccess<T> {
        willTickThisTick(arg0: $BlockPos_, arg1: T): boolean;
    }
    export class $LevelChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T>, $LevelChunkTicksExtension<any> {
        setOnTickAdded(arg0: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>>): void;
        sable$copy(arg0: $LevelChunkTicks<any>): void;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        getAll(): $Stream<$ScheduledTick<T>>;
        static load<T>(arg0: $ListTag_, arg1: $Function_<string, (T) | undefined>, arg2: $ChunkPos): $LevelChunkTicks<T>;
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        peek(): $ScheduledTick<T>;
        removeIf(arg0: $Predicate_<$ScheduledTick<T>>): void;
        poll(): $ScheduledTick<T>;
        unpack(arg0: number): void;
        save(arg0: number, arg1: $Function_<T, string>): $Tag;
        constructor();
        constructor(arg0: $List_<$SavedTick_<T>>);
        set onTickAdded(value: $BiConsumer_<$LevelChunkTicks<T>, $ScheduledTick<T>>);
        get all(): $Stream<$ScheduledTick<T>>;
    }
    export class $TickContainerAccess<T> {
    }
    export interface $TickContainerAccess<T> extends $TickAccess<T> {
    }
    export class $SerializableTickContainer<T> {
    }
    export interface $SerializableTickContainer<T> {
        save(arg0: number, arg1: $Function_<T, string>): $Tag;
    }
    /**
     * Values that may be interpreted as {@link $SerializableTickContainer}.
     */
    export type $SerializableTickContainer_<T> = ((arg0: number, arg1: $Function<T, string>) => $Tag_);
    export class $ProtoChunkTicks<T> implements $SerializableTickContainer<T>, $TickContainerAccess<T> {
        scheduledTicks(): $List<$SavedTick<T>>;
        hasScheduledTick(arg0: $BlockPos_, arg1: T): boolean;
        static load<T>(arg0: $ListTag_, arg1: $Function_<string, (T) | undefined>, arg2: $ChunkPos): $ProtoChunkTicks<T>;
        count(): number;
        schedule(arg0: $ScheduledTick_<T>): void;
        save(arg0: number, arg1: $Function_<T, string>): $Tag;
        constructor();
    }
    export class $ContainerSingleItem$BlockContainerSingleItem {
    }
    export interface $ContainerSingleItem$BlockContainerSingleItem extends $ContainerSingleItem {
        getContainerBlockEntity(): $BlockEntity;
        stillValid(arg0: $Player): boolean;
        get containerBlockEntity(): $BlockEntity;
    }
    export class $SavedTick<T> extends $Record {
        static saveTick(arg0: string, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_): $CompoundTag;
        static saveTick<T>(arg0: $ScheduledTick_<T>, arg1: $Function_<T, string>, arg2: number): $CompoundTag;
        static loadTickList<T>(arg0: $ListTag_, arg1: $Function_<string, (T) | undefined>, arg2: $ChunkPos, arg3: $Consumer_<$SavedTick<T>>): void;
        static loadTick<T>(arg0: $CompoundTag_, arg1: $Function_<string, (T) | undefined>): ($SavedTick<T>) | undefined;
        priority(): $TickPriority;
        type(): T;
        delay(): number;
        save(arg0: $Function_<T, string>): $CompoundTag;
        static probe<T>(arg0: T, arg1: $BlockPos_): $SavedTick<T>;
        pos(): $BlockPos;
        unpack(arg0: number, arg1: number): $ScheduledTick<T>;
        static UNIQUE_TICK_HASH: $Hash$Strategy<$SavedTick<never>>;
        constructor(arg0: T, arg1: $BlockPos_, arg2: number, arg3: $TickPriority_);
    }
    /**
     * Values that may be interpreted as {@link $SavedTick}.
     */
    export type $SavedTick_<T> = { priority?: $TickPriority_, pos?: $BlockPos_, delay?: number, type?: any,  } | [priority?: $TickPriority_, pos?: $BlockPos_, delay?: number, type?: any, ];
}
