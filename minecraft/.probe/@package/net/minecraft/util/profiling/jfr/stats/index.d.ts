import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $ColumnPos_, $ColumnPos } from "@package/net/minecraft/server/level";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $RecordedEvent } from "@package/jdk/jfr/consumer";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $Comparator, $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/util/profiling/jfr/stats" {
    export class $FileIOStat extends $Record {
        static summary(arg0: $Duration_, arg1: $List_<$FileIOStat_>): $FileIOStat$Summary;
        bytes(): number;
        duration(): $Duration;
        path(): string;
        constructor(arg0: $Duration_, arg1: string, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat}.
     */
    export type $FileIOStat_ = { path?: string, bytes?: number, duration?: $Duration_,  } | [path?: string, bytes?: number, duration?: $Duration_, ];
    export class $TimedStat {
    }
    export interface $TimedStat {
        duration(): $Duration;
    }
    /**
     * Values that may be interpreted as {@link $TimedStat}.
     */
    export type $TimedStat_ = (() => $Duration_);
    export class $IoSummary<T> {
        getSizePerSecond(): number;
        getCountsPerSecond(): number;
        largestSizeContributors(): $List<$Pair<T, $IoSummary$CountAndSize>>;
        getTotalSize(): number;
        getTotalCount(): number;
        constructor(arg0: $Duration_, arg1: $List_<$Pair<T, $IoSummary$CountAndSize_>>);
        get sizePerSecond(): number;
        get countsPerSecond(): number;
        get totalSize(): number;
        get totalCount(): number;
    }
    export class $ChunkGenStat extends $Record implements $TimedStat {
        level(): string;
        static from(arg0: $RecordedEvent): $ChunkGenStat;
        status(): $ChunkStatus;
        duration(): $Duration;
        chunkPos(): $ChunkPos;
        worldPos(): $ColumnPos;
        constructor(arg0: $Duration_, arg1: $ChunkPos, arg2: $ColumnPos_, arg3: $ChunkStatus_, arg4: string);
    }
    /**
     * Values that may be interpreted as {@link $ChunkGenStat}.
     */
    export type $ChunkGenStat_ = { level?: string, chunkPos?: $ChunkPos, status?: $ChunkStatus_, worldPos?: $ColumnPos_, duration?: $Duration_,  } | [level?: string, chunkPos?: $ChunkPos, status?: $ChunkStatus_, worldPos?: $ColumnPos_, duration?: $Duration_, ];
    export class $GcHeapStat$Timing extends $Enum<$GcHeapStat$Timing> {
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Timing}.
     */
    export type $GcHeapStat$Timing_ = "before_gc" | "after_gc";
    export class $IoSummary$CountAndSize extends $Record {
        averageSize(): number;
        totalSize(): number;
        add(arg0: $IoSummary$CountAndSize_): $IoSummary$CountAndSize;
        totalCount(): number;
        static SIZE_THEN_COUNT: $Comparator<$IoSummary$CountAndSize>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $IoSummary$CountAndSize}.
     */
    export type $IoSummary$CountAndSize_ = { totalCount?: number, totalSize?: number,  } | [totalCount?: number, totalSize?: number, ];
    export class $FileIOStat$Summary extends $Record {
        bytesPerSecond(): number;
        countsPerSecond(): number;
        topTenContributorsByTotalBytes(): $List<$Pair<string, number>>;
        timeSpentInIO(): $Duration;
        totalBytes(): number;
        counts(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Duration_, arg5: $List_<$Pair<string, number>>);
    }
    /**
     * Values that may be interpreted as {@link $FileIOStat$Summary}.
     */
    export type $FileIOStat$Summary_ = { topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, totalBytes?: number, countsPerSecond?: number, bytesPerSecond?: number, timeSpentInIO?: $Duration_, counts?: number,  } | [topTenContributorsByTotalBytes?: $List_<$Pair<string, number>>, totalBytes?: number, countsPerSecond?: number, bytesPerSecond?: number, timeSpentInIO?: $Duration_, counts?: number, ];
    export class $TimedStatSummary<T extends $TimedStat> extends $Record {
        totalDuration(): $Duration;
        percentilesNanos(): $Map<number, number>;
        fastest(): T;
        slowest(): T;
        secondSlowest(): T;
        static summary<T extends $TimedStat>(arg0: $List_<T>): $TimedStatSummary<T>;
        count(): number;
        constructor(arg0: T, arg1: T, arg2: T, arg3: number, arg4: $Map_<number, number>, arg5: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TimedStatSummary}.
     */
    export type $TimedStatSummary_<T> = { count?: number, percentilesNanos?: $Map_<number, number>, secondSlowest?: $TimedStat_, totalDuration?: $Duration_, slowest?: $TimedStat_, fastest?: $TimedStat_,  } | [count?: number, percentilesNanos?: $Map_<number, number>, secondSlowest?: $TimedStat_, totalDuration?: $Duration_, slowest?: $TimedStat_, fastest?: $TimedStat_, ];
    export class $ThreadAllocationStat extends $Record {
        static summary(arg0: $List_<$ThreadAllocationStat_>): $ThreadAllocationStat$Summary;
        totalBytes(): number;
        static from(arg0: $RecordedEvent): $ThreadAllocationStat;
        timestamp(): $Instant;
        threadName(): string;
        constructor(arg0: $Instant, arg1: string, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat}.
     */
    export type $ThreadAllocationStat_ = { threadName?: string, timestamp?: $Instant, totalBytes?: number,  } | [threadName?: string, timestamp?: $Instant, totalBytes?: number, ];
    export class $TickTimeStat extends $Record {
        currentAverage(): $Duration;
        static from(arg0: $RecordedEvent): $TickTimeStat;
        timestamp(): $Instant;
        constructor(arg0: $Instant, arg1: $Duration_);
    }
    /**
     * Values that may be interpreted as {@link $TickTimeStat}.
     */
    export type $TickTimeStat_ = { timestamp?: $Instant, currentAverage?: $Duration_,  } | [timestamp?: $Instant, currentAverage?: $Duration_, ];
    export class $GcHeapStat$Summary extends $Record {
        allocationRateBytesPerSecond(): number;
        totalGCs(): number;
        gcOverHead(): number;
        gcTotalDuration(): $Duration;
        duration(): $Duration;
        constructor(arg0: $Duration_, arg1: $Duration_, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat$Summary}.
     */
    export type $GcHeapStat$Summary_ = { duration?: $Duration_, gcTotalDuration?: $Duration_, allocationRateBytesPerSecond?: number, totalGCs?: number,  } | [duration?: $Duration_, gcTotalDuration?: $Duration_, allocationRateBytesPerSecond?: number, totalGCs?: number, ];
    export class $GcHeapStat extends $Record {
        heapUsed(): number;
        static summary(arg0: $Duration_, arg1: $List_<$GcHeapStat_>, arg2: $Duration_, arg3: number): $GcHeapStat$Summary;
        static from(arg0: $RecordedEvent): $GcHeapStat;
        timestamp(): $Instant;
        timing(): $GcHeapStat$Timing;
        constructor(arg0: $Instant, arg1: number, arg2: $GcHeapStat$Timing_);
    }
    /**
     * Values that may be interpreted as {@link $GcHeapStat}.
     */
    export type $GcHeapStat_ = { timestamp?: $Instant, heapUsed?: number, timing?: $GcHeapStat$Timing_,  } | [timestamp?: $Instant, heapUsed?: number, timing?: $GcHeapStat$Timing_, ];
    export class $ChunkIdentification extends $Record {
        dimension(): string;
        level(): string;
        x(): number;
        static from(arg0: $RecordedEvent): $ChunkIdentification;
        z(): number;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkIdentification}.
     */
    export type $ChunkIdentification_ = { level?: string, dimension?: string, x?: number, z?: number,  } | [level?: string, dimension?: string, x?: number, z?: number, ];
    export class $CpuLoadStat extends $Record {
        userJvm(): number;
        static from(arg0: $RecordedEvent): $CpuLoadStat;
        system(): number;
        jvm(): number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $CpuLoadStat}.
     */
    export type $CpuLoadStat_ = { jvm?: number, userJvm?: number, system?: number,  } | [jvm?: number, userJvm?: number, system?: number, ];
    export class $PacketIdentification extends $Record {
        protocolId(): string;
        packetId(): string;
        static from(arg0: $RecordedEvent): $PacketIdentification;
        direction(): string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $PacketIdentification}.
     */
    export type $PacketIdentification_ = { protocolId?: string, direction?: string, packetId?: string,  } | [protocolId?: string, direction?: string, packetId?: string, ];
    export class $ThreadAllocationStat$Summary extends $Record {
        allocationsPerSecondByThread(): $Map<string, number>;
        constructor(arg0: $Map_<string, number>);
    }
    /**
     * Values that may be interpreted as {@link $ThreadAllocationStat$Summary}.
     */
    export type $ThreadAllocationStat$Summary_ = { allocationsPerSecondByThread?: $Map_<string, number>,  } | [allocationsPerSecondByThread?: $Map_<string, number>, ];
}
