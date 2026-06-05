import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType, $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $BrainAccessor as $BrainAccessor$1 } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $MemoryModificationCounter } from "@package/net/caffeinemc/mods/lithium/common/ai";
import { $BrainAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/ai/useless_sensors";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $Object } from "@package/java/lang";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> implements $MemoryModificationCounter, $BrainAccessor<any>, $BrainAccessor$1<any> {
        getMemoryInternal<U>(arg0: $MemoryModuleType_<U>): (U) | undefined;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        createPriorityPairs(arg0: number, arg1: $ImmutableList<$BehaviorControl<$Object>>): $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>;
        addActivityAndRemoveMemoriesWhenStopped(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, arg2: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, arg3: $Set_<$MemoryModuleType_<never>>): void;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<any>;
        lithium$getModCount(): number;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        tick(arg0: $ServerLevel, arg1: $Object): void;
        hasMemoryValue(arg0: $MemoryModuleType_<never>): boolean;
        removeAllBehaviors(): void;
        isMemoryValue<U>(arg0: $MemoryModuleType_<U>, arg1: U): boolean;
        setCoreActivities(arg0: $Set_<$Activity_>): void;
        setDefaultActivity(arg0: $Activity_): void;
        useDefaultActivity(): void;
        addActivity(arg0: $Activity_, arg1: number, arg2: $ImmutableList<$BehaviorControl<$Object>>): void;
        addActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>): void;
        addActivityAndRemoveMemoryWhenStopped(arg0: $Activity_, arg1: number, arg2: $ImmutableList<$BehaviorControl<$Object>>, arg3: $MemoryModuleType_<never>): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        setActiveActivityToFirstValid(arg0: $List_<$Activity_>): void;
        stopAll(arg0: $ServerLevel, arg1: $Object): void;
        copyWithoutBehaviors(): $Brain<$Object>;
        setSchedule(arg0: $Schedule_): void;
        addActivityWithConditions(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, arg2: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        updateActivityFromSchedule(arg0: number, arg1: number): void;
        checkMemory(arg0: $MemoryModuleType_<never>, arg1: $MemoryStatus_): boolean;
        eraseMemory<U>(arg0: $MemoryModuleType_<U>): void;
        setActiveActivityIfPossible(arg0: $Activity_): void;
        getTimeUntilExpiry<U>(arg0: $MemoryModuleType_<U>): number;
        setMemoryWithExpiry<U>(arg0: $MemoryModuleType_<U>, arg1: U, arg2: number): void;
        static provider<E extends $LivingEntity>(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(arg0: $MemoryModuleType_<U>, arg1: U): void;
        setMemory<U>(arg0: $MemoryModuleType_<U>, arg1: (U) | undefined): void;
        isActive(arg0: $Activity_): boolean;
        setMemoryInternal<U>(arg0: $MemoryModuleType_<U>, arg1: ($ExpirableValue<never>) | undefined): void;
        clearMemories(): void;
        serializeStart<T>(arg0: $DynamicOps<T>): $DataResult<T>;
        getSchedule(): $Schedule;
        static codec<E extends $LivingEntity>(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        getMemory<U>(arg0: $MemoryModuleType_<U>): (U) | undefined;
        memories(): $Stream<$Brain$MemoryValue<never>>;
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
        getSensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        static LOGGER: $Logger;
        constructor(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<$Object>>>, arg2: $ImmutableList<$Brain$MemoryValue<never>>, arg3: $Supplier_<$Codec<$Brain<$Object>>>);
        get activeActivities(): $Set<$Activity>;
        get runningBehaviors(): $List<any>;
        set coreActivities(value: $Set_<$Activity_>);
        set defaultActivity(value: $Activity_);
        get activeNonCoreActivity(): ($Activity) | undefined;
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        set activeActivityIfPossible(value: $Activity_);
        get availableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
        get sensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(arg0: $Dynamic<never>): $Brain<E>;
        constructor(arg0: $Collection_<$MemoryModuleType_<never>>, arg1: $Collection_<$SensorType_<$Sensor<E>>>);
    }
}
