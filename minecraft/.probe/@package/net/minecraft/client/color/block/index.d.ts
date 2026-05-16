import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ToIntFunction_ } from "@package/java/util/function";
import { $BlockColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Reference2ReferenceMap, $ReferenceSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/client/color/block" {
    export class $BlockTintCache$LatestCacheInfo {
    }
    export class $BlockColor {
    }
    export interface $BlockColor {
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockColor}.
     */
    export type $BlockColor_ = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: number) => number);
    export class $BlockColors implements $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $BlockColorsExtension {
        get(arg0: $Block_): $BlockColor;
        /**
         * @deprecated
         */
        register(arg0: $BlockColor_, ...arg1: $Block_[]): void;
        getColoringProperties(arg0: $Block_): $Set<$Property<never>>;
        sodium$getProviders(): $Reference2ReferenceMap<any, any>;
        sodium$getOverridenVanillaBlocks(): $ReferenceSet<any>;
        getColor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        static createDefault(): $BlockColors;
        constructor();
    }
    export class $BlockTintCache$CacheData {
    }
    export class $BlockTintCache {
        invalidateForChunk(arg0: number, arg1: number): void;
        getColor(arg0: $BlockPos_): number;
        invalidateAll(): void;
        constructor(arg0: $ToIntFunction_<$BlockPos>);
    }
}
