import { $StructureSectionClaim } from "@package/com/faboslav/structurify/common/world/level/structure";
import { $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $StructureNamespaceData, $StructureData } from "@package/com/faboslav/structurify/common/config/data";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Map } from "@package/java/util";

declare module "@package/com/faboslav/structurify/common/api" {
    export class $StructurifyChunkGenerator {
    }
    export interface $StructurifyChunkGenerator {
        structurify$getStructureSectionClaims(): $Map<number, $StructureSectionClaim>;
        structurify$getStructureChecks(): $Map<number, boolean>;
        structurify$getFlatnessChecks(): $Map<number, boolean>;
        structurify$getBiomeChecks(): $Map<number, boolean>;
        structurify$getOverlapChecks(): $Map<number, boolean>;
    }
    export class $StructurifyStructurePlacement {
    }
    export interface $StructurifyStructurePlacement extends $StructurifyWithStructureSet {
        structurify$getOriginalSalt(): number;
        structurify$getOriginalFrequency(): number;
    }
    export class $StructurifyRandomSpreadStructurePlacement {
    }
    export interface $StructurifyRandomSpreadStructurePlacement extends $StructurifyStructurePlacement {
        structurify$getOriginalSpacing(): number;
        structurify$getOriginalSeparation(): number;
    }
    export class $StructurifyStructureSelectionEntry {
    }
    export interface $StructurifyStructureSelectionEntry extends $StructurifyWithStructureSet {
        structurify$getOriginalWeight(): number;
    }
    export class $StructurifyWithStructureSet {
    }
    export interface $StructurifyWithStructureSet {
        structurify$getStructureSetId(): string;
        structurify$setStructureSetId(arg0: string): void;
    }
    export class $StructurifyStructure {
    }
    export interface $StructurifyStructure {
        structurify$setStructureResourceLocation(arg0: $ResourceLocation_): void;
        structurify$getStructureResourceLocation(): $ResourceLocation;
        structurify$getGlobalStructureNamespaceData(): $StructureNamespaceData;
        structurify$getStructureNamespaceData(arg0: $ResourceLocation_): $StructureNamespaceData;
        structurify$getStructureNamespaceData(): $StructureNamespaceData;
        structurify$getStructureData(arg0: $ResourceLocation_): $StructureData;
        structurify$getStructureData(): $StructureData;
        structurify$setStructureBiomes(arg0: $HolderSet_<$Biome>): void;
        structurify$getStructureBiomes(): $HolderSet<$Biome>;
        structurify$setStructureBlacklistedBiomes(arg0: $HolderSet_<$Biome>): void;
        structurify$getStructureBlacklistedBiomes(): $HolderSet<$Biome>;
    }
}
