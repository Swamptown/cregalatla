import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ToIntFunction_ } from "@package/java/util/function";
import { $BlockColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $BlockColorsNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Reference2ReferenceMap, $ReferenceSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Map, $Set } from "@package/java/util";

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
    export class $BlockColors implements $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $BlockColorsExtension, $BlockColorsNeoForgeAccessor {
        getColoringProperties(arg0: $Block_): $Set<$Property<never>>;
        sodium$getProviders(): $Reference2ReferenceMap<any, any>;
        sodium$getOverridenVanillaBlocks(): $ReferenceSet<any>;
        get(arg0: $Block_): $BlockColor;
        /**
         * @deprecated
         */
        register(arg0: $BlockColor_, ...arg1: $Block_[]): void;
        getColor(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: number): number;
        getColor(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        static createDefault(): $BlockColors;
        puzzleslib$getBlockColors(): $Map<$Block, $BlockColor>;
        constructor();
    }
    export class $BlockTintCache$CacheData {
    }
    export class $BlockTintCache {
        getColor(arg0: $BlockPos_): number;
        invalidateAll(): void;
        invalidateForChunk(arg0: number, arg1: number): void;
        constructor(arg0: $ToIntFunction_<$BlockPos>);
    }
}
