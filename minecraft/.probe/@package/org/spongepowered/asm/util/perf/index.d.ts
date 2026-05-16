import { $PrettyPrinter } from "@package/org/spongepowered/asm/util";
import { $Collection } from "@package/java/util";

declare module "@package/org/spongepowered/asm/util/perf" {
    export class $Profiler {
        reset(): void;
        get(arg0: string): $Profiler$Section;
        begin(arg0: number, ...arg1: string[]): $Profiler$Section;
        begin(arg0: number, arg1: string): $Profiler$Section;
        begin(...arg0: string[]): $Profiler$Section;
        begin(arg0: string): $Profiler$Section;
        mark(arg0: string): void;
        printer(arg0: boolean, arg1: boolean): $PrettyPrinter;
        static getProfiler(arg0: string): $Profiler;
        static setActive(arg0: boolean): void;
        static getProfilers(): $Collection<$Profiler>;
        getSections(): $Collection<$Profiler$Section>;
        static printAuditSummary(): void;
        printSummary(): void;
        static ROOT: number;
        static FINE: number;
        constructor(arg0: string);
        static set active(value: boolean);
        static get profilers(): $Collection<$Profiler>;
        get sections(): $Collection<$Profiler$Section>;
    }
    export class $Profiler$Section {
        getName(): string;
        next(arg0: string): $Profiler$Section;
        end(): $Profiler$Section;
        getCount(): number;
        getTime(): number;
        getSeconds(): number;
        getTotalSeconds(): number;
        isRoot(): boolean;
        getInfo(): string;
        getBaseName(): string;
        getTimes(): number[];
        getTotalAverageTime(): number;
        getTotalCount(): number;
        getTotalTime(): number;
        isFine(): boolean;
        getAverageTime(): number;
        setInfo(arg0: string): void;
        get name(): string;
        get count(): number;
        get time(): number;
        get seconds(): number;
        get totalSeconds(): number;
        get root(): boolean;
        get baseName(): string;
        get times(): number[];
        get totalAverageTime(): number;
        get totalCount(): number;
        get totalTime(): number;
        get fine(): boolean;
        get averageTime(): number;
    }
}
