import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap, $Object2LongOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Path_ } from "@package/java/nio/file";
import { $Comparable } from "@package/java/lang";
import { $List, $Map_, $Set } from "@package/java/util";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $EmptyProfileResults implements $ProfileResults {
        getTimes(arg0: string): $List<$ResultField>;
        saveResults(arg0: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getTickDuration(): number;
        getNanoDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
        get tickDuration(): number;
        get nanoDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        push(arg0: string): void;
        push(arg0: $Supplier_<string>): void;
        pop(): void;
        startTick(): void;
        endTick(): void;
        incrementCounter(arg0: string, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        popPush(arg0: $Supplier_<string>): void;
        popPush(arg0: string): void;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: string): void;
        incrementCounter(arg0: $Supplier_<string>): void;
        constructor(arg0: $LongSupplier_, arg1: $IntSupplier_, arg2: boolean);
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        push(arg0: string): void;
        push(arg0: $Supplier_<string>): void;
        pop(): void;
        startTick(): void;
        endTick(): void;
        incrementCounter(arg0: string, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        popPush(arg0: string): void;
        popPush(arg0: $Supplier_<string>): void;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        markForCharting(arg0: $MetricCategory_): void;
        incrementCounter(arg0: string): void;
        incrementCounter(arg0: $Supplier_<string>): void;
        static INSTANCE: $InactiveProfiler;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getMaxDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getDuration(): number;
        getCount(): number;
        minDuration: number;
        counters: $Object2LongOpenHashMap<string>;
        count: number;
        maxDuration: number;
        accumulatedDuration: number;
        constructor();
        get duration(): number;
    }
    export class $ProfilerFiller {
        static tee(arg0: $ProfilerFiller, arg1: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        push(arg0: $Supplier_<string>): void;
        push(arg0: string): void;
        pop(): void;
        startTick(): void;
        endTick(): void;
        incrementCounter(arg0: string): void;
        incrementCounter(arg0: string, arg1: number): void;
        incrementCounter(arg0: $Supplier_<string>): void;
        incrementCounter(arg0: $Supplier_<string>, arg1: number): void;
        popPush(arg0: string): void;
        popPush(arg0: $Supplier_<string>): void;
        markForCharting(arg0: $MetricCategory_): void;
    }
    export class $ContinuousProfiler {
        enable(): void;
        isEnabled(): boolean;
        disable(): void;
        getFiller(): $ProfilerFiller;
        getResults(): $ProfileResults;
        constructor(arg0: $LongSupplier_, arg1: $IntSupplier_);
        get enabled(): boolean;
        get filler(): $ProfilerFiller;
        get results(): $ProfileResults;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getMaxDuration(): number;
        getCounters(): $Object2LongMap<string>;
        getDuration(): number;
        getCount(): number;
        get maxDuration(): number;
        get counters(): $Object2LongMap<string>;
        get duration(): number;
        get count(): number;
    }
    export class $SingleTickProfiler {
        static createTickProfiler(arg0: string): $SingleTickProfiler;
        startTick(): $ProfilerFiller;
        endTick(): void;
        static decorateFiller(arg0: $ProfilerFiller, arg1: $SingleTickProfiler): $ProfilerFiller;
        constructor(arg0: $LongSupplier_, arg1: string, arg2: number);
    }
    export class $ResultField implements $Comparable<$ResultField> {
        compareTo(arg0: $ResultField): number;
        getColor(): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(arg0: string, arg1: number, arg2: number, arg3: number);
        get color(): number;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTimes(arg0: string): $List<$ResultField>;
        getTickDuration(): number;
        saveResults(arg0: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getProfilerResults(arg0: number, arg1: number): string;
        getNanoDuration(): number;
        constructor(arg0: $Map_<string, $ProfilerPathEntry>, arg1: number, arg2: number, arg3: number, arg4: number);
        get tickDuration(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(arg0: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTimes(arg0: string): $List<$ResultField>;
        getTickDuration(): number;
        getNanoDuration(): number;
        saveResults(arg0: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        get tickDuration(): number;
        get nanoDuration(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getEntry(arg0: string): $ActiveProfiler$PathEntry;
        getResults(): $ProfileResults;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
    }
    export class $FilledProfileResults$CounterCollector {
    }
}
