import { $FlatnessCheckData, $BiomeCheckData, $JigsawData, $DistanceFromWorldCenterCheckData, $OverlapCheckData } from "@package/com/faboslav/structurify/common/config/data/structure";
import { $List_, $List } from "@package/java/util";
import { $TerrainAdjustment_, $TerrainAdjustment } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GenerationStep$Decoration_, $GenerationStep$Decoration } from "@package/net/minecraft/world/level/levelgen";
export * as structure from "@package/com/faboslav/structurify/common/config/data/structure";

declare module "@package/com/faboslav/structurify/common/config/data" {
    export class $StructureLikeData {
        static IS_DISABLED_DEFAULT_VALUE: boolean;
    }
    export interface $StructureLikeData {
        getFlatnessCheckData(): $FlatnessCheckData;
        getBiomeCheckData(): $BiomeCheckData;
        getOverlapCheckData(): $OverlapCheckData;
        setOverlapCheckData(arg0: $OverlapCheckData): void;
        getDistanceFromWorldCenterCheckData(): $DistanceFromWorldCenterCheckData;
        setDistanceFromWorldCenterCheckData(arg0: $DistanceFromWorldCenterCheckData): void;
        setFlatnessCheckData(arg0: $FlatnessCheckData): void;
        setBiomeCheckData(arg0: $BiomeCheckData): void;
        setDisabled(arg0: boolean): void;
        isDisabled(): boolean;
    }
    export class $StructureNamespaceData implements $StructureLikeData {
        getFlatnessCheckData(): $FlatnessCheckData;
        getBiomeCheckData(): $BiomeCheckData;
        getOverlapCheckData(): $OverlapCheckData;
        setOverlapCheckData(arg0: $OverlapCheckData): void;
        getDistanceFromWorldCenterCheckData(): $DistanceFromWorldCenterCheckData;
        setDistanceFromWorldCenterCheckData(arg0: $DistanceFromWorldCenterCheckData): void;
        setFlatnessCheckData(arg0: $FlatnessCheckData): void;
        setBiomeCheckData(arg0: $BiomeCheckData): void;
        isUsingDefaultValues(): boolean;
        setDisabled(arg0: boolean): void;
        isDisabled(): boolean;
        static GLOBAL_NAMESPACE_IDENTIFIER: string;
        constructor();
        get usingDefaultValues(): boolean;
    }
    export class $StructureData implements $StructureLikeData {
        setBiomes(arg0: $List_<string>): void;
        isUsingDefaultIsDisabled(): boolean;
        isUsingDefaultStep(): boolean;
        isJigsawStructure(): boolean;
        setJigsawData(arg0: $JigsawData): void;
        getFlatnessCheckData(): $FlatnessCheckData;
        getBiomeCheckData(): $BiomeCheckData;
        getOverlapCheckData(): $OverlapCheckData;
        getDefaultBiomes(): $List<string>;
        getDefaultStep(): $GenerationStep$Decoration;
        getDefaultTerrainAdaptation(): $TerrainAdjustment;
        setTerrainAdaptation(arg0: $TerrainAdjustment_): void;
        setOverlapCheckData(arg0: $OverlapCheckData): void;
        getDistanceFromWorldCenterCheckData(): $DistanceFromWorldCenterCheckData;
        setDistanceFromWorldCenterCheckData(arg0: $DistanceFromWorldCenterCheckData): void;
        setFlatnessCheckData(arg0: $FlatnessCheckData): void;
        isUsingDefaultTerrainAdaptation(): boolean;
        setBiomeCheckData(arg0: $BiomeCheckData): void;
        isUsingDefaultValues(): boolean;
        getStep(): $GenerationStep$Decoration;
        setDisabled(arg0: boolean): void;
        getBiomes(): $List<string>;
        getTerrainAdaptation(): $TerrainAdjustment;
        getJigsawData(): $JigsawData;
        isDisabled(): boolean;
        setStep(arg0: $GenerationStep$Decoration_): void;
        constructor(arg0: $List_<string>, arg1: $GenerationStep$Decoration_, arg2: $TerrainAdjustment_);
        get usingDefaultIsDisabled(): boolean;
        get usingDefaultStep(): boolean;
        get jigsawStructure(): boolean;
        get defaultBiomes(): $List<string>;
        get defaultStep(): $GenerationStep$Decoration;
        get defaultTerrainAdaptation(): $TerrainAdjustment;
        get usingDefaultTerrainAdaptation(): boolean;
        get usingDefaultValues(): boolean;
    }
}
