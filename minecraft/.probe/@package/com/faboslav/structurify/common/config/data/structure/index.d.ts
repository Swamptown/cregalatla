import { $List_, $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";

declare module "@package/com/faboslav/structurify/common/config/data/structure" {
    export class $FlatnessCheckData {
        isEnabled(): boolean;
        enable(arg0: boolean): void;
        defaultOverrideGlobalFlatnessCheck(arg0: boolean): void;
        overrideGlobalFlatnessCheck(arg0: boolean): void;
        defaultEnable(arg0: boolean): void;
        allowNonSolidBlocks(arg0: boolean): void;
        isOverridingGlobalFlatnessCheck(): boolean;
        areNonSolidBlocksAllowed(): boolean;
        isUsingDefaultValues(): boolean;
        static ALLOW_NON_SOLID_BLOCKS_DEFAULT_VALUE: boolean;
        static IS_ENABLED_DEFAULT_VALUE: boolean;
        static OVERRIDE_GLOBAL_FLATNESS_CHECK_DEFAULT_VALUE: boolean;
        constructor();
        get enabled(): boolean;
        get overridingGlobalFlatnessCheck(): boolean;
        get usingDefaultValues(): boolean;
    }
    export class $BiomeCheckData$BiomeCheckMode extends $Enum<$BiomeCheckData$BiomeCheckMode> {
        static values(): $BiomeCheckData$BiomeCheckMode[];
        static valueOf(arg0: string): $BiomeCheckData$BiomeCheckMode;
        static STRICT: $BiomeCheckData$BiomeCheckMode;
        static BLACKLIST: $BiomeCheckData$BiomeCheckMode;
    }
    /**
     * Values that may be interpreted as {@link $BiomeCheckData$BiomeCheckMode}.
     */
    export type $BiomeCheckData$BiomeCheckMode_ = "strict" | "blacklist";
    export class $JigsawData {
        getSize(): number;
        setSize(arg0: number): void;
        getVerticalMaxDistanceFromCenter(): number;
        getDefaultSize(): number;
        getDefaultHorizontalMaxDistanceFromCenter(): number;
        setHorizontalMaxDistanceFromCenter(arg0: number): void;
        getDefaultVerticalMaxDistanceFromCenter(): number;
        setVerticalMaxDistanceFromCenter(arg0: number): void;
        isUsingDefaultValues(): boolean;
        getHorizontalMaxDistanceFromCenter(): number;
        static MIN_SIZE: number;
        static MAX_VERTICAL_MAX_DISTANCE_FROM_CENTER: number;
        static MAX_HORIZONTAL_MAX_DISTANCE_FROM_CENTER: number;
        static MAX_SIZE: number;
        static MIN_VERTICAL_MAX_DISTANCE_FROM_CENTER: number;
        static MIN_HORIZONTAL_MAX_DISTANCE_FROM_CENTER: number;
        constructor(arg0: number, arg1: number, arg2: number);
        get defaultSize(): number;
        get defaultHorizontalMaxDistanceFromCenter(): number;
        get defaultVerticalMaxDistanceFromCenter(): number;
        get usingDefaultValues(): boolean;
    }
    export class $DistanceFromWorldCenterCheckData {
        isEnabled(): boolean;
        overrideGlobalDistanceFromWorldCenter(arg0: boolean): void;
        isOverridingGlobalDistanceFromWorldCenter(): boolean;
        setMinDistanceFromWorldCenter(arg0: number): void;
        getMinDistanceFromWorldCenter(): number;
        setMaxDistanceFromWorldCenter(arg0: number): void;
        getMaxDistanceFromWorldCenter(): number;
        isUsingDefaultValues(): boolean;
        static OVERRIDE_GLOBAL_DISTANCE_FROM_WORLD_CENTER_DEFAULT_VALUE: boolean;
        static MIN_DISTANCE_FROM_WORLD_CENTER_DEFAULT_VALUE: number;
        static MAX_DISTANCE_FROM_WORLD_CENTER_DEFAULT_VALUE: number;
        constructor();
        get enabled(): boolean;
        get overridingGlobalDistanceFromWorldCenter(): boolean;
        get usingDefaultValues(): boolean;
    }
    export class $BiomeCheckData {
        isEnabled(): boolean;
        enable(arg0: boolean): void;
        defaultEnable(arg0: boolean): void;
        defaultOverrideGlobalBiomeCheck(arg0: boolean): void;
        overrideGlobalBiomeCheck(arg0: boolean): void;
        isOverridingGlobalBiomeCheck(): boolean;
        setBlacklistedBiomes(arg0: $List_<string>): void;
        isUsingDefaultValues(): boolean;
        getBlacklistedBiomes(): $List<string>;
        setMode(arg0: $BiomeCheckData$BiomeCheckMode_): void;
        getMode(): $BiomeCheckData$BiomeCheckMode;
        static IS_ENABLED_DEFAULT_VALUE: boolean;
        static MODE_DEFAULT_VALUE: $BiomeCheckData$BiomeCheckMode;
        static BLACKLISTED_BIOMES_DEFAULT_VALUE: $List<string>;
        static OVERRIDE_GLOBAL_BIOME_CHECK_DEFAULT_VALUE: boolean;
        constructor();
        get enabled(): boolean;
        get overridingGlobalBiomeCheck(): boolean;
        get usingDefaultValues(): boolean;
    }
    export class $OverlapCheckData {
        defaultExcludeFromOverlapPrevention(arg0: boolean): void;
        excludeFromOverlapPrevention(arg0: boolean): void;
        isExcludedFromOverlapPrevention(): boolean;
        isUsingDefaultValues(): boolean;
        static IS_EXCLUDED_FROM_OVERLAP_PREVENTION_DEFAULT_VALUE: boolean;
        constructor();
        get excludedFromOverlapPrevention(): boolean;
        get usingDefaultValues(): boolean;
    }
}
