import { $PrintStream } from "@package/java/io";
import { $Level, $ILogger } from "@package/org/spongepowered/asm/logging";
import { $Throwable, $Object, $StackTraceElement } from "@package/java/lang";
import { $Map_, $Collection_ } from "@package/java/util";
export * as perf from "@package/org/spongepowered/asm/util/perf";

declare module "@package/org/spongepowered/asm/util" {
    export class $PrettyPrinter {
        addIndexed(arg0: $Object[]): $PrettyPrinter;
        addWithIndices(arg0: $Collection_<never>): $PrettyPrinter;
        hr(): $PrettyPrinter;
        hr(arg0: string): $PrettyPrinter;
        log(arg0: $ILogger, arg1: $Level): $PrettyPrinter;
        log(arg0: $Level): $PrettyPrinter;
        log(arg0: $ILogger): $PrettyPrinter;
        add(arg0: $Object, arg1: number): $PrettyPrinter;
        add(arg0: $Object): $PrettyPrinter;
        add(arg0: $Map_<never, never>): $PrettyPrinter;
        add(arg0: $Object[], arg1: string): $PrettyPrinter;
        add(arg0: $Object[]): $PrettyPrinter;
        add(arg0: string, ...arg1: $Object[]): $PrettyPrinter;
        add(arg0: string): $PrettyPrinter;
        add(): $PrettyPrinter;
        add(arg0: $StackTraceElement[], arg1: number): $PrettyPrinter;
        add(arg0: $Throwable, arg1: number): $PrettyPrinter;
        add(arg0: $Throwable): $PrettyPrinter;
        add(arg0: $PrettyPrinter$IPrettyPrintable): $PrettyPrinter;
        trace(arg0: $Level): $PrettyPrinter;
        trace(): $PrettyPrinter;
        trace(arg0: $ILogger): $PrettyPrinter;
        trace(arg0: string, arg1: $Level): $PrettyPrinter;
        trace(arg0: string): $PrettyPrinter;
        trace(arg0: $ILogger, arg1: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: string): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: $ILogger, arg2: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: $ILogger): $PrettyPrinter;
        trace(arg0: $PrintStream, arg1: string, arg2: $Level): $PrettyPrinter;
        trace(arg0: $PrintStream): $PrettyPrinter;
        static dumpStack(): void;
        print(): $PrettyPrinter;
        print(arg0: $PrintStream): $PrettyPrinter;
        static print(arg0: $Throwable): void;
        table(...arg0: string[]): $PrettyPrinter;
        table(): $PrettyPrinter;
        table(...arg0: $Object[]): $PrettyPrinter;
        th(): $PrettyPrinter;
        tr(...arg0: $Object[]): $PrettyPrinter;
        centre(): $PrettyPrinter;
        kv(arg0: string, arg1: string, ...arg2: $Object[]): $PrettyPrinter;
        kv(arg0: string, arg1: $Object): $PrettyPrinter;
        addWrapped(arg0: string, ...arg1: $Object[]): $PrettyPrinter;
        addWrapped(arg0: number, arg1: string, ...arg2: $Object[]): $PrettyPrinter;
        kvWidth(arg0: number): $PrettyPrinter;
        wrapTo(arg0: number): $PrettyPrinter;
        wrapTo(): number;
        spacing(arg0: number): $PrettyPrinter;
        constructor(arg0: number);
        constructor();
    }
    export class $ITokenProvider {
    }
    export interface $ITokenProvider {
        getToken(arg0: string): number;
    }
    /**
     * Values that may be interpreted as {@link $ITokenProvider}.
     */
    export type $ITokenProvider_ = ((arg0: string) => number);
}
