import { $ConcurrentMap, $Callable_, $Executor_ } from "@package/java/util/concurrent";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $Object, $Iterable_ } from "@package/java/lang";
import { $Function, $Supplier_ } from "@package/com/google/common/base";
import { $Map_, $Map } from "@package/java/util";
import { $ListenableFuture } from "@package/com/google/common/util/concurrent";

declare module "@package/com/google/common/cache" {
    export class $CacheLoader<K, V> {
        load(key: K): V;
        static from<K, V>(_function: $Function<K, V>): $CacheLoader<K, V>;
        static from<V>(supplier: $Supplier_<V>): $CacheLoader<$Object, V>;
        loadAll(keys: $Iterable_<K>): $Map<K, V>;
        reload(key: K, oldValue: V): $ListenableFuture<V>;
        static asyncReloading<K, V>(loader: $CacheLoader<K, V>, executor: $Executor_): $CacheLoader<K, V>;
    }
    export class $LoadingCache<K, V> {
    }
    export interface $LoadingCache<K, V> extends $Cache<K, V>, $Function<K, V> {
        get(key: K): V;
        /**
         * @deprecated
         */
        apply(key: K): V;
        getAll(keys: $Iterable_<K>): $ImmutableMap<K, V>;
        getUnchecked(key: K): V;
        asMap(): $ConcurrentMap<K, V>;
        refresh(key: K): void;
    }
    export class $CacheStats {
        minus(other: $CacheStats): $CacheStats;
        plus(other: $CacheStats): $CacheStats;
        totalLoadTime(): number;
        evictionCount(): number;
        requestCount(): number;
        hitRate(): number;
        missRate(): number;
        loadCount(): number;
        loadExceptionRate(): number;
        averageLoadPenalty(): number;
        loadSuccessCount(): number;
        loadExceptionCount(): number;
        missCount(): number;
        hitCount(): number;
        constructor(hitCount: number, missCount: number, loadSuccessCount: number, loadExceptionCount: number, totalLoadTime: number, evictionCount: number);
    }
    export class $Cache<K, V> {
    }
    export interface $Cache<K, V> {
        size(): number;
        get(key: K, loader: $Callable_<V>): V;
        put(key: K, value: V): void;
        putAll(m: $Map_<K, V>): void;
        invalidate(key: $Object): void;
        getIfPresent(key: $Object): V;
        getAllPresent(keys: $Iterable_<never>): $ImmutableMap<K, V>;
        cleanUp(): void;
        asMap(): $ConcurrentMap<K, V>;
        stats(): $CacheStats;
        invalidateAll(keys: $Iterable_<never>): void;
        invalidateAll(): void;
    }
}
