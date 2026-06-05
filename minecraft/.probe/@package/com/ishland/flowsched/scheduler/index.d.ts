import { $Consumer_ } from "@package/java/util/function";
import { $CompletableFuture, $CompletionStage, $Executor } from "@package/java/util/concurrent";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $Object, $IllegalStateException, $Throwable, $Runnable_, $Runnable } from "@package/java/lang";
import { $Completable, $Scheduler } from "@package/io/reactivex/rxjava3/core";

declare module "@package/com/ishland/flowsched/scheduler" {
    export class $ItemHolder<K, V, Ctx, UserData> {
        setStatus(status: $ItemStatus<K, V, Ctx>, isCancellation: boolean): boolean;
        executeCriticalSectionAndBusy(command: $Runnable_): void;
        addTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        removeTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        getFutureForStatus(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        isBusy(): boolean;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        isDependencyDirty(): boolean;
        holdsDependency(): boolean;
        upgradingStatusTo(): $ItemStatus<K, V, Ctx>;
        tryCancelUpgradeAction(): void;
        consolidateMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        subscribeOp(op: $Completable): void;
        getFutureForStatus0(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        getOpFuture(): $CompletableFuture<void>;
        submitOp(op: $CompletionStage<void>): void;
        submitUpgradeAction(signaller: $CancellationSignaller, status: $ItemStatus<K, V, Ctx>): void;
        addDependencyTicket(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>, key: K, status: $ItemStatus<K, V, Ctx>, callback: $Runnable_): void;
        removeDependencyTicket(key: K, status: $ItemStatus<K, V, Ctx>): void;
        tryMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): boolean;
        getCriticalSectionExecutor(): $Executor;
        cleanupDependencies(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        submitOpListener(runnable: $Runnable_): void;
        getCriticalSectionScheduler(): $Scheduler;
        markDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        getFlags(): number;
        getItem(): $AtomicReference<V>;
        getUserData(): $AtomicReference<UserData>;
        isOpen(): boolean;
        getKey(): K;
        getStatus(): $ItemStatus<K, V, Ctx>;
        getDependencies(status: $ItemStatus<K, V, Ctx>): $KeyStatusPair<K, V, Ctx>[];
        setDependencies(status: $ItemStatus<K, V, Ctx>, dependencies: $KeyStatusPair<K, V, Ctx>[]): void;
        clearFlag(flag: number): void;
        setFlag(flag: number): void;
        static FLAG_HAVE_RETRIED: number;
        static UNLOADED_EXCEPTION: $IllegalStateException;
        static FLAG_REMOVED: number;
        static FLAG_BROKEN: number;
        get busy(): boolean;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get dependencyDirty(): boolean;
        get opFuture(): $CompletableFuture<void>;
        get criticalSectionExecutor(): $Executor;
        get criticalSectionScheduler(): $Scheduler;
        get flags(): number;
        get item(): $AtomicReference<V>;
        get userData(): $AtomicReference<UserData>;
        get open(): boolean;
        get key(): K;
        set flag(value: number);
    }
    export class $ItemStatus<K, V, Ctx> {
        static EMPTY_DEPENDENCIES: $KeyStatusPair<any, any, any>[];
    }
    export interface $ItemStatus<K, V, Ctx> {
        getPrev(): $ItemStatus<K, V, Ctx>;
        getAllStatuses(): $ItemStatus<K, V, Ctx>[];
        upgradeToThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        postUpgradeToThis(arg0: Ctx): $Completable;
        preDowngradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        downgradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        getDependenciesToRemove(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getDependenciesToAdd(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getNext(): $ItemStatus<K, V, Ctx>;
        ordinal(): number;
        getDependencies(arg0: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        get prev(): $ItemStatus<K, V, Ctx>;
        get allStatuses(): $ItemStatus<K, V, Ctx>[];
        get next(): $ItemStatus<K, V, Ctx>;
    }
    export class $ItemTicket$TicketType {
        getDescription(): string;
        static DEPENDENCY: $ItemTicket$TicketType;
        static EXTERNAL: $ItemTicket$TicketType;
        constructor(description: string);
        get description(): string;
    }
    export class $StatusAdvancingScheduler<K, V, Ctx, UserData> {
        itemCount(): number;
        addTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        removeTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>): void;
        removeTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>): void;
        getHolder(key: K): $ItemHolder<K, V, Ctx, UserData>;
        static NO_OP: $Runnable;
    }
    export class $ItemTicket<K, V, Ctx> {
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        consumeCallback(): void;
        getSource(): $Object;
        getType(): $ItemTicket$TicketType;
        constructor(type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_);
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get source(): $Object;
        get type(): $ItemTicket$TicketType;
    }
    export class $CancellationSignaller {
        fireComplete(throwable: $Throwable): void;
        cancel(): void;
        addListener(callback: $Consumer_<$Throwable>): void;
        static COMPLETED: $CancellationSignaller;
        constructor(cancel: $Consumer_<$CancellationSignaller>);
    }
    export class $Cancellable {
        isCancelled(): boolean;
        cancel(): void;
        constructor();
        get cancelled(): boolean;
    }
    export class $KeyStatusPair<K, V, Ctx> {
        key(): K;
        status(): $ItemStatus<K, V, Ctx>;
        constructor(key: K, status: $ItemStatus<K, V, Ctx>);
    }
}
