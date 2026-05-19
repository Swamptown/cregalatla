import { $LevelReader } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockPatternExtended } from "@package/net/caffeinemc/mods/lithium/common/world/block_pattern_matching";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LoadingCache, $CacheLoader } from "@package/com/google/common/cache";

declare module "@package/net/minecraft/world/level/block/state/pattern" {
    export class $BlockPattern$BlockCacheLoader extends $CacheLoader<$BlockPos, $BlockInWorld> {
    }
    export class $BlockPatternBuilder {
        where(arg0: string, arg1: $Predicate_<$BlockInWorld>): $BlockPatternBuilder;
        aisle(...arg0: string[]): $BlockPatternBuilder;
        static start(): $BlockPatternBuilder;
        build(): $BlockPattern;
    }
    export class $BlockInWorld {
        static hasState(arg0: $Predicate_<$BlockState>): $Predicate<$BlockInWorld>;
        getLevel(): $LevelReader;
        getEntity(): $BlockEntity;
        getState(): $BlockState;
        getPos(): $BlockPos;
        constructor(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean);
        get level(): $LevelReader;
        get entity(): $BlockEntity;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $BlockPattern implements $BlockPatternExtended {
        static createLevelCache(arg0: $LevelReader, arg1: boolean): $LoadingCache<$BlockPos, $BlockInWorld>;
        lithium$setRequiredBlock(arg0: $Block_, arg1: number): void;
        static translateAndRotate(arg0: $BlockPos_, arg1: $Direction_, arg2: $Direction_, arg3: number, arg4: number, arg5: number): $BlockPos;
        getPattern(): $Predicate<$BlockInWorld>[][][];
        getWidth(): number;
        getHeight(): number;
        matches(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_): $BlockPattern$BlockPatternMatch;
        find(arg0: $LevelReader, arg1: $BlockPos_): $BlockPattern$BlockPatternMatch;
        getDepth(): number;
        constructor(arg0: $Predicate_<$BlockInWorld>[][][]);
        get pattern(): $Predicate<$BlockInWorld>[][][];
        get width(): number;
        get height(): number;
        get depth(): number;
    }
    export class $BlockPattern$BlockPatternMatch {
        getFrontTopLeft(): $BlockPos;
        getUp(): $Direction;
        getForwards(): $Direction;
        getBlock(arg0: number, arg1: number, arg2: number): $BlockInWorld;
        getWidth(): number;
        getHeight(): number;
        getDepth(): number;
        constructor(arg0: $BlockPos_, arg1: $Direction_, arg2: $Direction_, arg3: $LoadingCache<$BlockPos_, $BlockInWorld>, arg4: number, arg5: number, arg6: number);
        get frontTopLeft(): $BlockPos;
        get up(): $Direction;
        get forwards(): $Direction;
        get width(): number;
        get height(): number;
        get depth(): number;
    }
}
