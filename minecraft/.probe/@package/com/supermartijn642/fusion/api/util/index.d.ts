import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";

declare module "@package/com/supermartijn642/fusion/api/util" {
    export class $Serializer<T> {
    }
    export interface $Serializer<T> {
        deserialize(json: $JsonObject_): T;
        serialize(data: T): $JsonObject;
    }
    export class $Pair<X, Y> {
        static of<X, Y>(left: X, right: Y): $Pair<X, Y>;
        apply(consumer: $BiConsumer_<X, Y>): void;
        map<R, S>(mapLeft: $Function_<X, R>, mapRight: $Function_<Y, S>): $Pair<R, S>;
        left(): X;
        right(): Y;
        flatMap<S>(mapper: $BiFunction_<X, Y, S>): S;
        mapLeft<S>(mapper: $Function_<X, S>): $Pair<S, Y>;
        mapRight<S>(mapper: $Function_<Y, S>): $Pair<X, S>;
    }
}
