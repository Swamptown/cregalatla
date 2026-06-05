import { $Predicate, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder, $Registry, $HolderSet } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Object, $Record, $Class } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $ItemCost_ } from "@package/net/minecraft/world/item/trading";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/almostreliable/morejs/util" {
    export class $WeightedList<T> {
        roll(arg0: $RandomSource): T;
        roll(): T;
        map<T2>(arg0: $Function_<T, T2>): $WeightedList<T2>;
    }
    export class $Utils {
        static matchesIngredient(arg0: $Ingredient_, arg1: $Ingredient_): boolean;
        static matchesItemCost(arg0: $Ingredient_, arg1: $ItemCost_): boolean;
        static nullableCast<T>(arg0: $Object): T;
        static cast<T>(arg0: $Object, arg1: $Class<T>): (T) | undefined;
        static cast<T>(arg0: $Object): T;
        static format(arg0: string): string;
        static asList(arg0: $Object): $List<$Object>;
        constructor();
    }
    export class $TriConsumer<T1, T2, T3> {
    }
    export interface $TriConsumer<T1, T2, T3> {
        accept(arg0: T1, arg1: T2, arg2: T3): void;
    }
    /**
     * Values that may be interpreted as {@link $TriConsumer}.
     */
    export type $TriConsumer_<T1, T2, T3> = ((arg0: T1, arg1: T2, arg2: T3) => void);
    export class $ResourceOrTag<T> {
        asHolderSet(arg0: $Registry<T>): ($HolderSet<T>) | undefined;
        asHolderPredicate(): $Predicate<$Holder<T>>;
        getName(): $Component;
        static get<E>(arg0: string, arg1: $ResourceKey_<$Registry<E>>): $ResourceOrTag<E>;
        get name(): $Component;
    }
    export class $BlockPosFinder {
    }
    export interface $BlockPosFinder {
        findPosition(arg0: $ServerLevel, arg1: $Entity): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $BlockPosFinder}.
     */
    export type $BlockPosFinder_ = ((arg0: $ServerLevel, arg1: $Entity) => $BlockPos_);
    export class $WeightedList$Entry<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WeightedList$Entry}.
     */
    export type $WeightedList$Entry_<T> = { weight?: number, value?: any,  } | [weight?: number, value?: any, ];
    export class $WeightedList$Builder<T> {
        add(arg0: number, arg1: T): $WeightedList$Builder<T>;
        build(): $WeightedList<T>;
        constructor();
    }
}
