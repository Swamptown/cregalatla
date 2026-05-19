import { $Consumer_ } from "@package/java/util/function";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WithConditions, $WithConditions_ } from "@package/net/neoforged/neoforge/common/conditions";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
export * as builtin from "@package/net/neoforged/neoforge/registries/datamaps/builtin";

declare module "@package/net/neoforged/neoforge/registries/datamaps" {
    export class $DataMapEntry$Removal<T, R> extends $Record {
        remover(): ($DataMapValueRemover<R, T>) | undefined;
        key(): $Either<$TagKey<R>, $ResourceKey<R>>;
        static codec<T, R>(arg0: $Codec<$Either<$TagKey_<R>, $ResourceKey_<R>>>, arg1: $DataMapType<R, T>): $Codec<$DataMapEntry$Removal<T, R>>;
        constructor(key: $Either<$TagKey_<R>, $ResourceKey_<R>>, remover: ($DataMapValueRemover_<R, T>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $DataMapEntry$Removal}.
     */
    export type $DataMapEntry$Removal_<T, R> = { key?: $Either<$TagKey_<any>, $ResourceKey_<any>>, remover?: ($DataMapValueRemover_<R, T>) | undefined,  } | [key?: $Either<$TagKey_<any>, $ResourceKey_<any>>, remover?: ($DataMapValueRemover_<R, T>) | undefined, ];
    export class $DataMapFile<T, R> extends $Record {
        values(): $Map<$Either<$TagKey<R>, $ResourceKey<R>>, ($WithConditions<$DataMapEntry<T>>) | undefined>;
        replace(): boolean;
        static codec<T, R>(arg0: $ResourceKey_<$Registry<R>>, arg1: $DataMapType<R, T>): $Codec<$DataMapFile<T, R>>;
        removals(): $List<$DataMapEntry$Removal<T, R>>;
        constructor(replace: boolean, values: $Map_<$Either<$TagKey_<R>, $ResourceKey_<R>>, ($WithConditions_<$DataMapEntry_<T>>) | undefined>, removals: $List_<$DataMapEntry$Removal_<T, R>>);
    }
    /**
     * Values that may be interpreted as {@link $DataMapFile}.
     */
    export type $DataMapFile_<T, R> = { removals?: $List_<$DataMapEntry$Removal_<any, any>>, replace?: boolean, values?: $Map_<$Either<$TagKey_<any>, $ResourceKey_<any>>, ($WithConditions_<$DataMapEntry_<T>>) | undefined>,  } | [removals?: $List_<$DataMapEntry$Removal_<any, any>>, replace?: boolean, values?: $Map_<$Either<$TagKey_<any>, $ResourceKey_<any>>, ($WithConditions_<$DataMapEntry_<T>>) | undefined>, ];
    export class $DataMapsUpdatedEvent extends $Event {
        ifRegistry<T>(arg0: $ResourceKey_<$Registry<T>>, arg1: $Consumer_<$Registry<T>>): void;
        getRegistryKey(): $ResourceKey<$Registry<never>>;
        getCause(): $DataMapsUpdatedEvent$UpdateCause;
        getRegistry(): $Registry<never>;
        getRegistries(): $RegistryAccess;
        constructor(arg0: $RegistryAccess, arg1: $Registry<never>, arg2: $DataMapsUpdatedEvent$UpdateCause_);
        get registryKey(): $ResourceKey<$Registry<never>>;
        get cause(): $DataMapsUpdatedEvent$UpdateCause;
        get registry(): $Registry<never>;
        get registries(): $RegistryAccess;
    }
    export class $AdvancedDataMapType<R, T, VR extends $DataMapValueRemover<R, T>> extends $DataMapType<R, T> {
        remover(): $Codec<VR>;
        merger(): $DataMapValueMerger<R, T>;
        static builder<T, R>(arg0: $ResourceLocation_, arg1: $ResourceKey_<$Registry<R>>, arg2: $Codec<T>): $AdvancedDataMapType$Builder<T, R, $DataMapValueRemover$Default<T, R>>;
    }
    export class $DataMapType<R, T> {
        mandatorySync(): boolean;
        networkCodec(): $Codec<T>;
        static builder<T, R>(arg0: $ResourceLocation_, arg1: $ResourceKey_<$Registry<R>>, arg2: $Codec<T>): $DataMapType$Builder<T, R>;
        id(): $ResourceLocation;
        codec(): $Codec<T>;
        registryKey(): $ResourceKey<$Registry<R>>;
    }
    export class $DataMapValueRemover<R, T> {
    }
    export interface $DataMapValueRemover<R, T> {
        remove(arg0: T, arg1: $Registry<R>, arg2: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg3: R): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $DataMapValueRemover}.
     */
    export type $DataMapValueRemover_<R, T> = ((arg0: T, arg1: $Registry<R>, arg2: $Either<$TagKey<R>, $ResourceKey<R>>, arg3: R) => (T) | undefined);
    export class $DataMapsUpdatedEvent$UpdateCause extends $Enum<$DataMapsUpdatedEvent$UpdateCause> {
        static values(): $DataMapsUpdatedEvent$UpdateCause[];
        static valueOf(arg0: string): $DataMapsUpdatedEvent$UpdateCause;
        static CLIENT_SYNC: $DataMapsUpdatedEvent$UpdateCause;
        static SERVER_RELOAD: $DataMapsUpdatedEvent$UpdateCause;
    }
    /**
     * Values that may be interpreted as {@link $DataMapsUpdatedEvent$UpdateCause}.
     */
    export type $DataMapsUpdatedEvent$UpdateCause_ = "client_sync" | "server_reload";
    export class $DataMapValueMerger<R, T> {
        static defaultMerger<T, R>(): $DataMapValueMerger<R, T>;
        static listMerger<T, R>(): $DataMapValueMerger<R, $List<T>>;
        static setMerger<T, R>(): $DataMapValueMerger<R, $Set<T>>;
        static mapMerger<K, V, R>(): $DataMapValueMerger<R, $Map<K, V>>;
    }
    export interface $DataMapValueMerger<R, T> {
        merge(arg0: $Registry<R>, arg1: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg2: T, arg3: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg4: T): T;
    }
    /**
     * Values that may be interpreted as {@link $DataMapValueMerger}.
     */
    export type $DataMapValueMerger_<R, T> = ((arg0: $Registry<R>, arg1: $Either<$TagKey<R>, $ResourceKey<R>>, arg2: T, arg3: $Either<$TagKey<R>, $ResourceKey<R>>, arg4: T) => T);
    export class $DataMapType$Builder<T, R> {
        synced(arg0: $Codec<T>, arg1: boolean): $DataMapType$Builder<T, R>;
        build(): $DataMapType<R, T>;
    }
    export class $AdvancedDataMapType$Builder<T, R, VR extends $DataMapValueRemover<R, T>> extends $DataMapType$Builder<T, R> {
        remover<VR1 extends $DataMapValueRemover<R, T>>(arg0: $Codec<VR1>): $AdvancedDataMapType$Builder<T, R, VR1>;
        merger(arg0: $DataMapValueMerger_<R, T>): $AdvancedDataMapType$Builder<T, R, VR>;
    }
    export class $RegisterDataMapTypesEvent extends $Event implements $IModBusEvent {
        register<T, R>(arg0: $DataMapType<R, T>): void;
        constructor(arg0: $Map_<$ResourceKey_<$Registry<never>>, $Map_<$ResourceLocation_, $DataMapType<never, never>>>);
    }
    export class $DataMapValueRemover$Default<T, R> implements $DataMapValueRemover<R, T> {
        static defaultRemover<T, R>(): $DataMapValueRemover$Default<T, R>;
        remove(arg0: T, arg1: $Registry<R>, arg2: $Either<$TagKey_<R>, $ResourceKey_<R>>, arg3: R): (T) | undefined;
        static codec<T, R>(): $Codec<$DataMapValueRemover$Default<T, R>>;
        static INSTANCE: $DataMapValueRemover$Default<never, never>;
    }
    export class $DataMapEntry<T> extends $Record {
        value(): T;
        replace(): boolean;
        static codec<T>(arg0: $DataMapType<never, T>): $Codec<$DataMapEntry<T>>;
        constructor(value: T, replace: boolean);
    }
    /**
     * Values that may be interpreted as {@link $DataMapEntry}.
     */
    export type $DataMapEntry_<T> = { replace?: boolean, value?: any,  } | [replace?: boolean, value?: any, ];
    export class $IWithData<R> {
    }
    export interface $IWithData<R> {
        getData<T>(arg0: $DataMapType<R, T>): T;
    }
}
