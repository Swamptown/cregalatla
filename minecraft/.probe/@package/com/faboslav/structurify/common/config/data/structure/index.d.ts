import { $HeightProviderData, $ProjectStartToHeightmap_, $ProjectStartToHeightmap } from "@package/com/faboslav/structurify/common/config/data/structure/jigsaw";
import { $List_, $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
export * as jigsaw from "@package/com/faboslav/structurify/common/config/data/structure/jigsaw";

declare module "@package/com/faboslav/structurify/common/config/data/structure" {
    export class $FlatnessCheckData {
        defaultOverrideGlobalFlatnessCheck(arg0: boolean): void;
        overrideGlobalFlatnessCheck(arg0: boolean): void;
        defaultEnable(arg0: boolean): void;
        defaultIsOverridingGlobalFlatnessCheck(): boolean;
        areNonSolidBlocksAllowed(): boolean;
        isOverridingGlobalFlatnessCheck(): boolean;
        defaultIsEnabled(): boolean;
        allowNonSolidBlocks(arg0: boolean): void;
        isUsingDefaultValues(): boolean;
        enable(arg0: boolean): void;
        isEnabled(): boolean;
        static ALLOW_NON_SOLID_BLOCKS_DEFAULT_VALUE: boolean;
        static IS_ENABLED_DEFAULT_VALUE: boolean;
        static OVERRIDE_GLOBAL_FLATNESS_CHECK_DEFAULT_VALUE: boolean;
        constructor();
        get overridingGlobalFlatnessCheck(): boolean;
        get usingDefaultValues(): boolean;
        get enabled(): boolean;
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
        isUsingSize(): boolean;
        isUsingMaxDistanceFromCenter(): boolean;
        isUsingHeightProvider(): boolean;
        isUsingProjectStartToHeightmap(): boolean;
        isUsingDefaultSize(): boolean;
        isUsingDefaultMaxDistanceFromCenter(): boolean;
        isUsingDefaultHeightProvider(): boolean;
        isUsingDefaultProjectStartToHeightmap(): boolean;
        getDefaultSize(): number;
        getDefaultHorizontalMaxDistanceFromCenter(): number;
        getHorizontalMaxDistanceFromCenter(): number;
        setHorizontalMaxDistanceFromCenter(arg0: number): void;
        getDefaultVerticalMaxDistanceFromCenter(): number;
        setVerticalMaxDistanceFromCenter(arg0: number): void;
        getDefaultHeightProviderData(): $HeightProviderData;
        setHeightProviderData(arg0: $HeightProviderData): void;
        getDefaultProjectStartToHeightmap(): $ProjectStartToHeightmap;
        setProjectStartToHeightmap(arg0: $ProjectStartToHeightmap_): void;
        isUsingDefaultValues(): boolean;
        getHeightProviderData(): $HeightProviderData;
        getProjectStartToHeightmap(): $ProjectStartToHeightmap;
        getVerticalMaxDistanceFromCenter(): number;
        getSize(): number;
        setSize(arg0: number): void;
        static MIN_SIZE: number;
        static MAX_VERTICAL_MAX_DISTANCE_FROM_CENTER: number;
        static MAX_HORIZONTAL_MAX_DISTANCE_FROM_CENTER: number;
        static MAX_SIZE: number;
        static MIN_VERTICAL_MAX_DISTANCE_FROM_CENTER: number;
        static MIN_HORIZONTAL_MAX_DISTANCE_FROM_CENTER: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $HeightProviderData, arg4: $ProjectStartToHeightmap_);
        constructor();
        get usingSize(): boolean;
        get usingMaxDistanceFromCenter(): boolean;
        get usingHeightProvider(): boolean;
        get usingProjectStartToHeightmap(): boolean;
        get usingDefaultSize(): boolean;
        get usingDefaultMaxDistanceFromCenter(): boolean;
        get usingDefaultHeightProvider(): boolean;
        get usingDefaultProjectStartToHeightmap(): boolean;
        get defaultSize(): number;
        get defaultHorizontalMaxDistanceFromCenter(): number;
        get defaultVerticalMaxDistanceFromCenter(): number;
        get defaultHeightProviderData(): $HeightProviderData;
        get defaultProjectStartToHeightmap(): $ProjectStartToHeightmap;
        get usingDefaultValues(): boolean;
    }
    export class $DistanceFromWorldCenterCheckData {
        setMinDistanceFromWorldCenter(arg0: number): void;
        isOverridingGlobalDistanceFromWorldCenter(): boolean;
        setMaxDistanceFromWorldCenter(arg0: number): void;
        getMaxDistanceFromWorldCenter(): number;
        getMinDistanceFromWorldCenter(): number;
        overrideGlobalDistanceFromWorldCenter(arg0: boolean): void;
        isUsingDefaultValues(): boolean;
        isEnabled(): boolean;
        static OVERRIDE_GLOBAL_DISTANCE_FROM_WORLD_CENTER_DEFAULT_VALUE: boolean;
        static MIN_DISTANCE_FROM_WORLD_CENTER_DEFAULT_VALUE: number;
        static MAX_DISTANCE_FROM_WORLD_CENTER_DEFAULT_VALUE: number;
        constructor();
        get overridingGlobalDistanceFromWorldCenter(): boolean;
        get usingDefaultValues(): boolean;
        get enabled(): boolean;
    }
    export class $BiomeCheckData {
        defaultEnable(arg0: boolean): void;
        defaultOverrideGlobalBiomeCheck(arg0: boolean): void;
        overrideGlobalBiomeCheck(arg0: boolean): void;
        isOverridingGlobalBiomeCheck(): boolean;
        defaultIsOverridingGlobalBiomeCheck(): boolean;
        setBlacklistedBiomes(arg0: $List_<string>): void;
        defaultIsEnabled(): boolean;
        isUsingDefaultValues(): boolean;
        setMode(arg0: $BiomeCheckData$BiomeCheckMode_): void;
        getMode(): $BiomeCheckData$BiomeCheckMode;
        getBlacklistedBiomes(): $List<string>;
        enable(arg0: boolean): void;
        isEnabled(): boolean;
        static IS_ENABLED_DEFAULT_VALUE: boolean;
        static MODE_DEFAULT_VALUE: $BiomeCheckData$BiomeCheckMode;
        static BLACKLISTED_BIOMES_DEFAULT_VALUE: $List<string>;
        static OVERRIDE_GLOBAL_BIOME_CHECK_DEFAULT_VALUE: boolean;
        constructor();
        get overridingGlobalBiomeCheck(): boolean;
        get usingDefaultValues(): boolean;
        get enabled(): boolean;
    }
    export class $OverlapCheckData {
        defaultExcludeFromOverlapPrevention(arg0: boolean): void;
        excludeFromOverlapPrevention(arg0: boolean): void;
        isExcludedFromOverlapPrevention(): boolean;
        defaultIsExcludedFromOverlapPrevention(): boolean;
        isUsingDefaultValues(): boolean;
        static IS_EXCLUDED_FROM_OVERLAP_PREVENTION_DEFAULT_VALUE: boolean;
        constructor();
        get excludedFromOverlapPrevention(): boolean;
        get usingDefaultValues(): boolean;
    }
}
