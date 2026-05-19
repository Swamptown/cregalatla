import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $AquiferOverride } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/aquiferoverride";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/adaptations" {
    export class $LargeCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$LargeCarvedTopNoBeardAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
        constructor();
    }
    export class $NoneAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$NoneAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
        constructor();
    }
    export class $EnhancedTerrainAdaptationType<C extends $EnhancedTerrainAdaptation> {
        static register<C extends $EnhancedTerrainAdaptation>(arg0: $ResourceLocation_, arg1: $MapCodec_<C>): $EnhancedTerrainAdaptationType<C>;
        static ADAPTATION_TYPE_CODEC: $Codec<$EnhancedTerrainAdaptationType<never>>;
        static LARGE_CARVED_TOP_NO_BEARD: $EnhancedTerrainAdaptationType<$LargeCarvedTopNoBeardAdaptation>;
        static ADAPTATION_TYPES_BY_NAME: $Map<$ResourceLocation, $EnhancedTerrainAdaptationType<never>>;
        static NAME_BY_ADAPTATION_TYPES: $Map<$EnhancedTerrainAdaptationType<never>, $ResourceLocation>;
        static CUSTOM: $EnhancedTerrainAdaptationType<$CustomAdaptation>;
        static ADAPTATION_CODEC: $Codec<$EnhancedTerrainAdaptation>;
        static SMALL_CARVED_TOP_NO_BEARD: $EnhancedTerrainAdaptationType<$SmallCarvedTopNoBeardAdaptation>;
        static NONE: $EnhancedTerrainAdaptationType<$NoneAdaptation>;
    }
    export interface $EnhancedTerrainAdaptationType<C extends $EnhancedTerrainAdaptation> {
        codec(): $MapCodec<C>;
    }
    /**
     * Values that may be interpreted as {@link $EnhancedTerrainAdaptationType}.
     */
    export type $EnhancedTerrainAdaptationType_<C> = (() => $MapCodec_<C>);
    export class $EnhancedTerrainAdaptation$TerrainAction extends $Enum<$EnhancedTerrainAdaptation$TerrainAction> implements $StringRepresentable {
        getDensityModifier(): number;
        static values(): $EnhancedTerrainAdaptation$TerrainAction[];
        static valueOf(arg0: string): $EnhancedTerrainAdaptation$TerrainAction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EnhancedTerrainAdaptation$TerrainAction>;
        static BURY: $EnhancedTerrainAdaptation$TerrainAction;
        static NONE: $EnhancedTerrainAdaptation$TerrainAction;
        static CARVE: $EnhancedTerrainAdaptation$TerrainAction;
        get densityModifier(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnhancedTerrainAdaptation$TerrainAction}.
     */
    export type $EnhancedTerrainAdaptation$TerrainAction_ = "carve" | "bury" | "none";
    export class $EnhancedTerrainAdaptation$Padding extends $Record {
        bottom(): number;
        x(): number;
        z(): number;
        top(): number;
        static ZERO: $EnhancedTerrainAdaptation$Padding;
        static CODEC: $Codec<$EnhancedTerrainAdaptation$Padding>;
        constructor(x: number, top: number, bottom: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedTerrainAdaptation$Padding}.
     */
    export type $EnhancedTerrainAdaptation$Padding_ = { x?: number, top?: number, bottom?: number, z?: number,  } | [x?: number, top?: number, bottom?: number, z?: number, ];
    export class $SmallCarvedTopNoBeardAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$SmallCarvedTopNoBeardAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
        constructor();
    }
    export class $EnhancedTerrainAdaptation {
        getAquiferOverride(): $AquiferOverride;
        computeDensityFactor(arg0: number, arg1: number, arg2: number, arg3: number): number;
        topAction(): $EnhancedTerrainAdaptation$TerrainAction;
        bottomAction(): $EnhancedTerrainAdaptation$TerrainAction;
        getKernelSize(): number;
        getKernelDistance(): number;
        getBottomOffset(): number;
        getKernel(): number[];
        getKernelRadius(): number;
        getPadding(): $EnhancedTerrainAdaptation$Padding;
        type(): $EnhancedTerrainAdaptationType<never>;
        static NONE: $EnhancedTerrainAdaptation;
        get aquiferOverride(): $AquiferOverride;
        get kernelSize(): number;
        get kernelDistance(): number;
        get bottomOffset(): number;
        get kernel(): number[];
        get kernelRadius(): number;
        get padding(): $EnhancedTerrainAdaptation$Padding;
    }
    export class $CustomAdaptation extends $EnhancedTerrainAdaptation {
        static CODEC: $MapCodec<$CustomAdaptation>;
        static NONE: $EnhancedTerrainAdaptation;
    }
}
