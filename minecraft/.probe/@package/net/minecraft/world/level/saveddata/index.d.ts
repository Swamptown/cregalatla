import { $File_ } from "@package/java/io";
import { $Supplier, $Supplier_, $BiFunction, $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $DataFixTypes_, $DataFixTypes } from "@package/net/minecraft/util/datafix";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
export * as maps from "@package/net/minecraft/world/level/saveddata/maps";

declare module "@package/net/minecraft/world/level/saveddata" {
    export class $SavedData {
        setDirty(arg0: boolean): void;
        setDirty(): void;
        isDirty(): boolean;
        save(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        save(arg0: $File_, arg1: $HolderLookup$Provider): void;
        constructor();
    }
    export class $SavedData$Factory<T extends $SavedData> extends $Record {
        type(): $DataFixTypes;
        constructor(): $Supplier<T>;
        deserializer(): $BiFunction<$CompoundTag, $HolderLookup$Provider, T>;
        constructor(arg0: $Supplier_<T>, arg1: $BiFunction_<$CompoundTag, $HolderLookup$Provider, T>);
        constructor(constructor: $Supplier_<T>, deserializer: $BiFunction_<$CompoundTag, $HolderLookup$Provider, T>, type: $DataFixTypes_);
    }
    /**
     * Values that may be interpreted as {@link $SavedData$Factory}.
     */
    export type $SavedData$Factory_<T> = { type?: $DataFixTypes_, deserializer?: $BiFunction_<$CompoundTag, $HolderLookup$Provider, $SavedData>, constructor?: $Supplier_<$SavedData>,  } | [type?: $DataFixTypes_, deserializer?: $BiFunction_<$CompoundTag, $HolderLookup$Provider, $SavedData>, constructor?: $Supplier_<$SavedData>, ];
}
