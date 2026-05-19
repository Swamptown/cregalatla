import { $Serializable } from "@package/java/io";
import { $Duration_ } from "@package/java/time";
import { $Consumer_, $BiConsumer_, $Supplier_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Queue, $List, $Map, $AbstractQueue, $Collection_ } from "@package/java/util";
import { $Thread, $Throwable, $Runnable_, $Enum, $Comparable, $Object, $AutoCloseable, $Runnable } from "@package/java/lang";
import { $ChronoUnit_, $ChronoUnit } from "@package/java/time/temporal";
export * as atomic from "@package/java/util/concurrent/atomic";

declare module "@package/java/util/concurrent" {
    export class $ThreadPoolExecutor extends $AbstractExecutorService {
        allowCoreThreadTimeOut(arg0: boolean): void;
        allowsCoreThreadTimeOut(): boolean;
        setThreadFactory(arg0: $ThreadFactory_): void;
        getThreadFactory(): $ThreadFactory;
        setRejectedExecutionHandler(arg0: $RejectedExecutionHandler_): void;
        getRejectedExecutionHandler(): $RejectedExecutionHandler;
        setCorePoolSize(arg0: number): void;
        getCorePoolSize(): number;
        prestartCoreThread(): boolean;
        prestartAllCoreThreads(): number;
        setMaximumPoolSize(arg0: number): void;
        getMaximumPoolSize(): number;
        setKeepAliveTime(arg0: number, arg1: $TimeUnit_): void;
        getKeepAliveTime(arg0: $TimeUnit_): number;
        getActiveCount(): number;
        getLargestPoolSize(): number;
        getTaskCount(): number;
        getCompletedTaskCount(): number;
        getPoolSize(): number;
        isTerminating(): boolean;
        purge(): void;
        remove(arg0: $Runnable_): boolean;
        getQueue(): $BlockingQueue<$Runnable>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>, arg5: $ThreadFactory_, arg6: $RejectedExecutionHandler_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>, arg5: $RejectedExecutionHandler_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>, arg5: $ThreadFactory_);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $TimeUnit_, arg4: $BlockingQueue<$Runnable_>);
        get activeCount(): number;
        get largestPoolSize(): number;
        get taskCount(): number;
        get completedTaskCount(): number;
        get poolSize(): number;
        get terminating(): boolean;
        get queue(): $BlockingQueue<$Runnable>;
    }
    export class $Delayed {
    }
    export interface $Delayed extends $Comparable<$Delayed> {
        getDelay(arg0: $TimeUnit_): number;
    }
    export class $CompletableFuture<T> implements $Future<T>, $CompletionStage<T> {
        static anyOf(...arg0: $CompletableFuture<never>[]): $CompletableFuture<$Object>;
        isCompletedExceptionally(): boolean;
        obtrudeValue(arg0: T): void;
        obtrudeException(arg0: $Throwable): void;
        getNumberOfDependents(): number;
        minimalCompletionStage(): $CompletionStage<T>;
        orTimeout(arg0: number, arg1: $TimeUnit_): $CompletableFuture<T>;
        completeOnTimeout(arg0: T, arg1: number, arg2: $TimeUnit_): $CompletableFuture<T>;
        static delayedExecutor(arg0: number, arg1: $TimeUnit_): $Executor;
        static delayedExecutor(arg0: number, arg1: $TimeUnit_, arg2: $Executor_): $Executor;
        static completedStage<U>(arg0: U): $CompletionStage<U>;
        static failedFuture<U>(arg0: $Throwable): $CompletableFuture<U>;
        static failedStage<U>(arg0: $Throwable): $CompletionStage<U>;
        defaultExecutor(): $Executor;
        complete(arg0: T): boolean;
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>, arg1: $Executor_): $CompletableFuture<U>;
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletableFuture<U>;
        static supplyAsync<U>(arg0: $Supplier_<U>, arg1: $Executor_): $CompletableFuture<U>;
        static supplyAsync<U>(arg0: $Supplier_<U>): $CompletableFuture<U>;
        isCancelled(): boolean;
        resultNow(): T;
        exceptionNow(): $Throwable;
        completeExceptionally(arg0: $Throwable): boolean;
        static allOf(...arg0: $CompletableFuture<never>[]): $CompletableFuture<void>;
        newIncompleteFuture<U>(): $CompletableFuture<U>;
        toCompletableFuture(): $CompletableFuture<T>;
        completeAsync(arg0: $Supplier_<T>, arg1: $Executor_): $CompletableFuture<T>;
        completeAsync(arg0: $Supplier_<T>): $CompletableFuture<T>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletableFuture<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>, arg1: $Executor_): $CompletableFuture<T>;
        exceptionally(arg0: $Function_<$Throwable, T>): $CompletableFuture<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>, arg1: $Executor_): $CompletableFuture<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>): $CompletableFuture<T>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>, arg1: $Executor_): $CompletableFuture<U>;
        thenCompose<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletableFuture<U>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletableFuture<void>;
        runAfterEither(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletableFuture<void>;
        acceptEither(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletableFuture<void>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletableFuture<void>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletableFuture<void>;
        runAfterBoth(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletableFuture<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>, arg2: $Executor_): $CompletableFuture<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletableFuture<void>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletableFuture<V>;
        thenRunAsync(arg0: $Runnable_): $CompletableFuture<void>;
        thenRun(arg0: $Runnable_): $CompletableFuture<void>;
        thenAcceptAsync(arg0: $Consumer_<T>, arg1: $Executor_): $CompletableFuture<void>;
        thenAccept(arg0: $Consumer_<T>): $CompletableFuture<void>;
        thenApplyAsync<U>(arg0: $Function_<T, U>, arg1: $Executor_): $CompletableFuture<U>;
        thenApply<U>(arg0: $Function_<T, U>): $CompletableFuture<U>;
        static runAsync(arg0: $Runnable_, arg1: $Executor_): $CompletableFuture<void>;
        static runAsync(arg0: $Runnable_): $CompletableFuture<void>;
        static completedFuture<U>(arg0: U): $CompletableFuture<U>;
        getNow(arg0: T): T;
        get(): T;
        get(arg0: number, arg1: $TimeUnit_): T;
        join(): T;
        state(): $Future$State;
        isDone(): boolean;
        cancel(arg0: boolean): boolean;
        copy(): $CompletableFuture<T>;
        handle<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletableFuture<U>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>, arg1: $Executor_): $CompletionStage<T>;
        exceptionallyCompose(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletionStage<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>): $CompletionStage<T>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletionStage<U>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletionStage<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>, arg2: $Executor_): $CompletionStage<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletionStage<void>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>, arg2: $Executor_): $CompletionStage<U>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        applyToEither<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        thenAcceptBoth<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletionStage<void>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>, arg2: $Executor_): $CompletionStage<V>;
        thenCombine<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletionStage<V>;
        thenRunAsync(arg0: $Runnable_, arg1: $Executor_): $CompletionStage<void>;
        thenAcceptAsync(arg0: $Consumer_<T>): $CompletionStage<void>;
        thenApplyAsync<U>(arg0: $Function_<T, U>): $CompletionStage<U>;
        whenComplete(arg0: $BiConsumer_<T, $Throwable>): $CompletionStage<T>;
        constructor();
        get completedExceptionally(): boolean;
        get numberOfDependents(): number;
        get cancelled(): boolean;
        get done(): boolean;
    }
    export class $BlockingQueue<E> {
    }
    export interface $BlockingQueue<E> extends $Queue<E> {
        drainTo(arg0: $Collection_<E>, arg1: number): number;
        drainTo(arg0: $Collection_<E>): number;
        offer(arg0: E, arg1: number, arg2: $TimeUnit_): boolean;
        offer(arg0: E): boolean;
        take(): E;
        remove(arg0: $Object): boolean;
        put(arg0: E): void;
        add(arg0: E): boolean;
        contains(arg0: $Object): boolean;
        poll(arg0: number, arg1: $TimeUnit_): E;
        remainingCapacity(): number;
    }
    export class $RejectedExecutionHandler {
    }
    export interface $RejectedExecutionHandler {
        rejectedExecution(arg0: $Runnable_, arg1: $ThreadPoolExecutor): void;
    }
    /**
     * Values that may be interpreted as {@link $RejectedExecutionHandler}.
     */
    export type $RejectedExecutionHandler_ = ((arg0: $Runnable, arg1: $ThreadPoolExecutor) => void);
    export class $ConcurrentLinkedQueue<E> extends $AbstractQueue<E> implements $Queue<E>, $Serializable {
        constructor();
        constructor(arg0: $Collection_<E>);
    }
    export class $ScheduledFuture<V> {
    }
    export interface $ScheduledFuture<V> extends $Delayed, $Future<V> {
    }
    export class $TimeUnit extends $Enum<$TimeUnit> {
        toMicros(arg0: number): number;
        toSeconds(arg0: number): number;
        toMinutes(arg0: number): number;
        toHours(arg0: number): number;
        toDays(arg0: number): number;
        timedWait(arg0: $Object, arg1: number): void;
        timedJoin(arg0: $Thread, arg1: number): void;
        toChronoUnit(): $ChronoUnit;
        static values(): $TimeUnit[];
        convert(arg0: number, arg1: $TimeUnit_): number;
        convert(arg0: $Duration_): number;
        static valueOf(arg0: string): $TimeUnit;
        static of(arg0: $ChronoUnit_): $TimeUnit;
        toNanos(arg0: number): number;
        toMillis(arg0: number): number;
        sleep(arg0: number): void;
        static MILLISECONDS: $TimeUnit;
        static MICROSECONDS: $TimeUnit;
        static HOURS: $TimeUnit;
        static SECONDS: $TimeUnit;
        static NANOSECONDS: $TimeUnit;
        static DAYS: $TimeUnit;
        static MINUTES: $TimeUnit;
    }
    /**
     * Values that may be interpreted as {@link $TimeUnit}.
     */
    export type $TimeUnit_ = "nanoseconds" | "microseconds" | "milliseconds" | "seconds" | "minutes" | "hours" | "days";
    export class $ExecutorService {
    }
    export interface $ExecutorService extends $Executor, $AutoCloseable {
        submit<T>(arg0: $Callable_<T>): $Future<T>;
        submit(arg0: $Runnable_): $Future<never>;
        submit<T>(arg0: $Runnable_, arg1: T): $Future<T>;
        awaitTermination(arg0: number, arg1: $TimeUnit_): boolean;
        shutdownNow(): $List<$Runnable>;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>): $List<$Future<T>>;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): $List<$Future<T>>;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): T;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>): T;
        shutdown(): void;
        isTerminated(): boolean;
        close(): void;
        isShutdown(): boolean;
        get terminated(): boolean;
    }
    export class $Executor {
    }
    export interface $Executor {
        execute(arg0: $Runnable_): void;
    }
    /**
     * Values that may be interpreted as {@link $Executor}.
     */
    export type $Executor_ = ((arg0: $Runnable) => void);
    export class $Future<V> {
    }
    export interface $Future<V> {
        isCancelled(): boolean;
        resultNow(): V;
        exceptionNow(): $Throwable;
        get(): V;
        get(arg0: number, arg1: $TimeUnit_): V;
        state(): $Future$State;
        isDone(): boolean;
        cancel(arg0: boolean): boolean;
        get cancelled(): boolean;
        get done(): boolean;
    }
    export class $AbstractExecutorService implements $ExecutorService {
        submit(arg0: $Runnable_): $Future<never>;
        submit<T>(arg0: $Runnable_, arg1: T): $Future<T>;
        submit<T>(arg0: $Callable_<T>): $Future<T>;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>): $List<$Future<T>>;
        invokeAll<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): $List<$Future<T>>;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>): T;
        invokeAny<T>(arg0: $Collection_<$Callable_<T>>, arg1: number, arg2: $TimeUnit_): T;
        close(): void;
        constructor();
    }
    export class $ConcurrentMap<K, V> {
    }
    export interface $ConcurrentMap<K, V> extends $Map<K, V> {
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replace(arg0: K, arg1: V): V;
        replaceAll(arg0: $BiFunction_<K, V, V>): void;
        merge(arg0: K, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        compute(arg0: K, arg1: $BiFunction_<K, V, V>): V;
        forEach(arg0: $BiConsumer_<K, V>): void;
        computeIfAbsent(arg0: K, arg1: $Function_<K, V>): V;
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: K, arg1: $BiFunction_<K, V, V>): V;
    }
    export class $CompletionStage<T> {
    }
    export interface $CompletionStage<T> {
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletionStage<U>;
        handleAsync<U>(arg0: $BiFunction_<T, $Throwable, U>, arg1: $Executor_): $CompletionStage<U>;
        toCompletableFuture(): $CompletableFuture<T>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>, arg1: $Executor_): $CompletionStage<T>;
        exceptionallyComposeAsync(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletionStage<T>;
        exceptionallyCompose(arg0: $Function_<$Throwable, $CompletionStage<T>>): $CompletionStage<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>): $CompletionStage<T>;
        exceptionallyAsync(arg0: $Function_<$Throwable, T>, arg1: $Executor_): $CompletionStage<T>;
        exceptionally(arg0: $Function_<$Throwable, T>): $CompletionStage<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>): $CompletionStage<T>;
        whenCompleteAsync(arg0: $BiConsumer_<T, $Throwable>, arg1: $Executor_): $CompletionStage<T>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletionStage<U>;
        thenComposeAsync<U>(arg0: $Function_<T, $CompletionStage<U>>, arg1: $Executor_): $CompletionStage<U>;
        thenCompose<U>(arg0: $Function_<T, $CompletionStage<U>>): $CompletionStage<U>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        runAfterEitherAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletionStage<void>;
        runAfterEither(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletionStage<void>;
        acceptEitherAsync(arg0: $CompletionStage<T>, arg1: $Consumer_<T>, arg2: $Executor_): $CompletionStage<void>;
        acceptEither(arg0: $CompletionStage<T>, arg1: $Consumer_<T>): $CompletionStage<void>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        applyToEitherAsync<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>, arg2: $Executor_): $CompletionStage<U>;
        applyToEither<U>(arg0: $CompletionStage<T>, arg1: $Function_<T, U>): $CompletionStage<U>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_, arg2: $Executor_): $CompletionStage<void>;
        runAfterBothAsync(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        runAfterBoth(arg0: $CompletionStage<never>, arg1: $Runnable_): $CompletionStage<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletionStage<void>;
        thenAcceptBothAsync<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>, arg2: $Executor_): $CompletionStage<void>;
        thenAcceptBoth<U>(arg0: $CompletionStage<U>, arg1: $BiConsumer_<T, U>): $CompletionStage<void>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>, arg2: $Executor_): $CompletionStage<V>;
        thenCombineAsync<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletionStage<V>;
        thenCombine<U, V>(arg0: $CompletionStage<U>, arg1: $BiFunction_<T, U, V>): $CompletionStage<V>;
        thenRunAsync(arg0: $Runnable_, arg1: $Executor_): $CompletionStage<void>;
        thenRunAsync(arg0: $Runnable_): $CompletionStage<void>;
        thenRun(arg0: $Runnable_): $CompletionStage<void>;
        thenAcceptAsync(arg0: $Consumer_<T>, arg1: $Executor_): $CompletionStage<void>;
        thenAcceptAsync(arg0: $Consumer_<T>): $CompletionStage<void>;
        thenAccept(arg0: $Consumer_<T>): $CompletionStage<void>;
        thenApplyAsync<U>(arg0: $Function_<T, U>, arg1: $Executor_): $CompletionStage<U>;
        thenApplyAsync<U>(arg0: $Function_<T, U>): $CompletionStage<U>;
        thenApply<U>(arg0: $Function_<T, U>): $CompletionStage<U>;
        handle<U>(arg0: $BiFunction_<T, $Throwable, U>): $CompletionStage<U>;
        whenComplete(arg0: $BiConsumer_<T, $Throwable>): $CompletionStage<T>;
    }
    export class $Flow$Subscription {
    }
    export interface $Flow$Subscription {
        request(arg0: number): void;
        cancel(): void;
    }
    export class $Flow$Subscriber<T> {
    }
    export interface $Flow$Subscriber<T> {
        onSubscribe(arg0: $Flow$Subscription): void;
        onNext(arg0: T): void;
        onComplete(): void;
        onError(arg0: $Throwable): void;
    }
    export class $ThreadFactory {
    }
    export interface $ThreadFactory {
        newThread(arg0: $Runnable_): $Thread;
    }
    /**
     * Values that may be interpreted as {@link $ThreadFactory}.
     */
    export type $ThreadFactory_ = ((arg0: $Runnable) => $Thread);
    export class $Flow$Publisher<T> {
    }
    export interface $Flow$Publisher<T> {
        subscribe(arg0: $Flow$Subscriber<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $Flow$Publisher}.
     */
    export type $Flow$Publisher_<T> = ((arg0: $Flow$Subscriber<T>) => void);
    export class $Future$State extends $Enum<$Future$State> {
        static values(): $Future$State[];
        static valueOf(arg0: string): $Future$State;
        static CANCELLED: $Future$State;
        static SUCCESS: $Future$State;
        static FAILED: $Future$State;
        static RUNNING: $Future$State;
    }
    /**
     * Values that may be interpreted as {@link $Future$State}.
     */
    export type $Future$State_ = "running" | "success" | "failed" | "cancelled";
    export class $ScheduledExecutorService {
    }
    export interface $ScheduledExecutorService extends $ExecutorService {
        schedule(arg0: $Runnable_, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<never>;
        schedule<V>(arg0: $Callable_<V>, arg1: number, arg2: $TimeUnit_): $ScheduledFuture<V>;
        scheduleWithFixedDelay(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
        scheduleAtFixedRate(arg0: $Runnable_, arg1: number, arg2: number, arg3: $TimeUnit_): $ScheduledFuture<never>;
    }
    export class $Callable<V> {
    }
    export interface $Callable<V> {
        call(): V;
    }
    /**
     * Values that may be interpreted as {@link $Callable}.
     */
    export type $Callable_<V> = (() => V);
}
