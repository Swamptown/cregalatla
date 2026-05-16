import { $ServerLevelAccessor } from "@package/net/minecraft/world/level";
import { $Predicate, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Stream } from "@package/java/util/stream";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $List, $List_ } from "@package/java/util";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/blackgear/vanillabackport/common/api/variant/spawn" {
    export class $SpawnPrioritySelectors extends $Record {
        static single(condition: $SpawnCondition, priority: number): $SpawnPrioritySelectors;
        static fallback(priority: number): $SpawnPrioritySelectors;
        selectors(): $List<$PriorityProvider$Selector<$SpawnContext, $SpawnCondition>>;
        static CODEC: $Codec<$SpawnPrioritySelectors>;
        static EMPTY: $SpawnPrioritySelectors;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SpawnPrioritySelectors>;
        constructor(selectors: $List_<$PriorityProvider$Selector_<$SpawnContext_, $SpawnCondition>>);
    }
    /**
     * Values that may be interpreted as {@link $SpawnPrioritySelectors}.
     */
    export type $SpawnPrioritySelectors_ = { selectors?: $List_<$PriorityProvider$Selector_<$SpawnContext_, $SpawnCondition>>,  } | [selectors?: $List_<$PriorityProvider$Selector_<$SpawnContext_, $SpawnCondition>>, ];
    export class $PriorityProvider<Context, Condition extends $PriorityProvider$SelectorCondition<Context>> {
        static single<Context, Condition extends $PriorityProvider$SelectorCondition<Context>>(condition: Condition, priority: number): $List<$PriorityProvider$Selector<Context, Condition>>;
        static pick<C, T>(stream: $Stream<T>, _function: $Function_<T, $PriorityProvider<C, never>>, random: $RandomSource, context: C): (T) | undefined;
        static select<C, T>(stream: $Stream<T>, _function: $Function_<T, $PriorityProvider<C, never>>, context: C): $Stream<T>;
        static alwaysTrue<Context, Condition extends $PriorityProvider$SelectorCondition<Context>>(priority: number): $List<$PriorityProvider$Selector<Context, Condition>>;
    }
    export interface $PriorityProvider<Context, Condition extends $PriorityProvider$SelectorCondition<Context>> {
        selectors(): $List<$PriorityProvider$Selector<Context, Condition>>;
    }
    /**
     * Values that may be interpreted as {@link $PriorityProvider}.
     */
    export type $PriorityProvider_<Context, Condition> = (() => $List_<$PriorityProvider$Selector_<Context, Condition>>);
    export class $SpawnContext extends $Record {
        static create(level: $ServerLevelAccessor, pos: $BlockPos_): $SpawnContext;
        pos(): $BlockPos;
        level(): $ServerLevelAccessor;
        biome(): $Holder<$Biome>;
        constructor(pos: $BlockPos_, level: $ServerLevelAccessor, biome: $Holder_<$Biome>);
    }
    /**
     * Values that may be interpreted as {@link $SpawnContext}.
     */
    export type $SpawnContext_ = { biome?: $Holder_<$Biome>, level?: $ServerLevelAccessor, pos?: $BlockPos_,  } | [biome?: $Holder_<$Biome>, level?: $ServerLevelAccessor, pos?: $BlockPos_, ];
    export class $PriorityProvider$Selector<Context, Condition extends $PriorityProvider$SelectorCondition<Context>> extends $Record {
        priority(): number;
        condition(): (Condition) | undefined;
        static codec<Context, Condition extends $PriorityProvider$SelectorCondition<Context>>(codec: $Codec<Condition>): $Codec<$PriorityProvider$Selector<Context, Condition>>;
        constructor(condition: (Condition) | undefined, priority: number);
        constructor(priority: number);
        constructor(condition: Condition, priority: number);
    }
    /**
     * Values that may be interpreted as {@link $PriorityProvider$Selector}.
     */
    export type $PriorityProvider$Selector_<Context, Condition> = { priority?: number, condition?: (Condition) | undefined,  } | [priority?: number, condition?: (Condition) | undefined, ];
    export class $SpawnCondition {
        static CODEC: $Codec<$SpawnCondition>;
    }
    export interface $SpawnCondition extends $PriorityProvider$SelectorCondition<$SpawnContext> {
        codec(): $MapCodec<$SpawnCondition>;
    }
    export class $PriorityProvider$SelectorCondition<C> {
        static alwaysTrue<C>(): $PriorityProvider$SelectorCondition<C>;
    }
    export interface $PriorityProvider$SelectorCondition<C> extends $Predicate<C> {
    }
    /**
     * Values that may be interpreted as {@link $PriorityProvider$SelectorCondition}.
     */
    export type $PriorityProvider$SelectorCondition_<C> = (() => void);
}
