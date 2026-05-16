import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $Predicate_ } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/ref" {
    export class $IRef<TYPE> {
    }
    export interface $IRef<TYPE> {
        update(): void;
        getKey(): $ManagedKey;
        getAccessor(): $IAccessor<TYPE>;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        writeRaw(arg0: TYPE): void;
        getPersistedPrefixName(): string;
        readRaw(): TYPE;
        isSyncDirty(): boolean;
        isPersistedDirty(): boolean;
        clearSyncDirty(): void;
        clearPersistedDirty(): void;
        markAsDirty(): void;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        setPersistedPrefixName(arg0: string): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        getPersistedKey(): string;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        get syncDirty(): boolean;
        get persistedDirty(): boolean;
        set onSyncListener(value: $BooleanConsumer_);
        set onPersistedListener(value: $BooleanConsumer_);
        set conditionalSynced(value: $Predicate_<TYPE>);
        get persistedKey(): string;
    }
}
