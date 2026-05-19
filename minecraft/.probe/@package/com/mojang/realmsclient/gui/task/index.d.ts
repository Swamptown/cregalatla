import { $Duration_ } from "@package/java/time";
import { $Consumer_ } from "@package/java/util/function";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $Callable_, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $Record, $Exception } from "@package/java/lang";
import { $TimeSource_ } from "@package/net/minecraft/util";

declare module "@package/com/mojang/realmsclient/gui/task" {
    export class $DataFetcher$Subscription {
        forceUpdate(): void;
        tick(): void;
        reset(): void;
        subscribe<T>(arg0: $DataFetcher$Task<T>, arg1: $Consumer_<T>): void;
        constructor(arg0: $DataFetcher);
    }
    export class $DataFetcher {
        createSubscription(): $DataFetcher$Subscription;
        createTask<T>(arg0: string, arg1: $Callable_<T>, arg2: $Duration_, arg3: $RepeatedDelayStrategy): $DataFetcher$Task<T>;
        constructor(arg0: $Executor_, arg1: $TimeUnit_, arg2: $TimeSource_);
    }
    export class $DataFetcher$SuccessfulComputationResult<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataFetcher$SuccessfulComputationResult}.
     */
    export type $DataFetcher$SuccessfulComputationResult_<T> = { value?: any, time?: number,  } | [value?: any, time?: number, ];
    export class $DataFetcher$ComputationResult<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DataFetcher$ComputationResult}.
     */
    export type $DataFetcher$ComputationResult_<T> = { value?: $Either<any, $Exception>, time?: number,  } | [value?: $Either<any, $Exception>, time?: number, ];
    export class $DataFetcher$SubscribedTask<T> {
    }
    export class $RepeatedDelayStrategy {
        static exponentialBackoff(arg0: number): $RepeatedDelayStrategy;
        static CONSTANT: $RepeatedDelayStrategy;
    }
    export interface $RepeatedDelayStrategy {
        delayCyclesAfterSuccess(): number;
        delayCyclesAfterFailure(): number;
    }
    export class $DataFetcher$Task<T> {
        reset(): void;
    }
}
