import { $SurfaceRuleManager$RuleCategory_, $RegionType_, $Region, $SurfaceRuleManager$RuleCategory } from "@package/terrablender/api";
import { $Holder_, $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $MultiNoiseBiomeSource, $Climate$RTree, $Climate$ParameterList, $Climate$TargetPoint_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $Cloneable } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/terrablender/worldgen" {
    export class $IExtendedMultiNoiseBiomeSource {
    }
    export interface $IExtendedMultiNoiseBiomeSource extends $Cloneable {
        clone(): $MultiNoiseBiomeSource;
    }
    /**
     * Values that may be interpreted as {@link $IExtendedMultiNoiseBiomeSource}.
     */
    export type $IExtendedMultiNoiseBiomeSource_ = (() => $MultiNoiseBiomeSource);
    export class $IExtendedParameterList<T> {
    }
    export interface $IExtendedParameterList<T> extends $Cloneable {
        clone(): $Climate$ParameterList<T>;
        getTree(arg0: number): $Climate$RTree<any>;
        getRegion(arg0: number): $Region;
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: $RegionType_, arg2: number): void;
        getTreeCount(): number;
        recreateUniqueness(): void;
        findValuePositional(arg0: $Climate$TargetPoint_, arg1: number, arg2: number, arg3: number): T;
        getUniqueness(arg0: number, arg1: number, arg2: number): number;
        isInitialized(): boolean;
        get treeCount(): number;
        get initialized(): boolean;
    }
    export class $IExtendedNoiseGeneratorSettings {
    }
    export interface $IExtendedNoiseGeneratorSettings {
        setRuleCategory(arg0: $SurfaceRuleManager$RuleCategory_): void;
        set ruleCategory(value: $SurfaceRuleManager$RuleCategory_);
    }
    /**
     * Values that may be interpreted as {@link $IExtendedNoiseGeneratorSettings}.
     */
    export type $IExtendedNoiseGeneratorSettings_ = ((arg0: $SurfaceRuleManager$RuleCategory) => void);
    export class $IExtendedBiomeSource {
    }
    export interface $IExtendedBiomeSource {
        appendDeferredBiomesList(arg0: $List_<$Holder_<$Biome>>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendedBiomeSource}.
     */
    export type $IExtendedBiomeSource_ = ((arg0: $List<$Holder<$Biome>>) => void);
    export class $IExtendedTheEndBiomeSource {
    }
    export interface $IExtendedTheEndBiomeSource {
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendedTheEndBiomeSource}.
     */
    export type $IExtendedTheEndBiomeSource_ = ((arg0: $RegistryAccess, arg1: number) => void);
}
