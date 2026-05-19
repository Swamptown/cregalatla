import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Comparable, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/block/state/predicate" {
    export class $BlockPredicate implements $Predicate<$BlockState> {
        static forBlock(arg0: $Block_): $BlockPredicate;
        test(arg0: $BlockState_): boolean;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        constructor(arg0: $Block_);
    }
    export class $BlockStatePredicate implements $Predicate<$BlockState> {
        where<V extends $Comparable<V>>(arg0: $Property<V>, arg1: $Predicate_<$Object>): $BlockStatePredicate;
        applies<T extends $Comparable<T>>(arg0: $BlockState_, arg1: $Property<T>, arg2: $Predicate_<$Object>): boolean;
        static forBlock(arg0: $Block_): $BlockStatePredicate;
        test(arg0: $BlockState_): boolean;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        static ANY: $Predicate<$BlockState>;
    }
}
