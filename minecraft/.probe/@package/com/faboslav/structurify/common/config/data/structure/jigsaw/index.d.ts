import { $Object, $Enum } from "@package/java/lang";
import { $Heightmap$Types, $Heightmap$Types_, $VerticalAnchor, $VerticalAnchor_ } from "@package/net/minecraft/world/level/levelgen";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";

declare module "@package/com/faboslav/structurify/common/config/data/structure/jigsaw" {
    export class $HeightProviderData {
        static fromHeightProvider(arg0: $HeightProvider): $HeightProviderData;
        setMinInclusive(arg0: $VerticalAnchorData): void;
        setPlateau(arg0: number): void;
        getMinInclusive(): $VerticalAnchorData;
        getMaxInclusive(): $VerticalAnchorData;
        getPlateau(): number;
        toHeightProvider(): $HeightProvider;
        setType(arg0: $HeightProviderData$Type_): void;
        clone(): $HeightProviderData;
        getValue(): $VerticalAnchorData;
        setValue(arg0: $VerticalAnchorData): void;
        getType(): $HeightProviderData$Type;
        setInner(arg0: number): void;
        getInner(): number;
        setMaxInclusive(arg0: $VerticalAnchorData): void;
        constructor(arg0: $HeightProviderData$Type_, arg1: $VerticalAnchorData, arg2: $VerticalAnchorData, arg3: $VerticalAnchorData, arg4: number, arg5: number);
    }
    export class $VerticalAnchorData {
        toVerticalAnchor(): $VerticalAnchor;
        static fromAnchor(arg0: $VerticalAnchor_): $VerticalAnchorData;
        setType(arg0: $VerticalAnchorData$Type_): void;
        clone(): $Object;
        getValue(): number;
        setValue(arg0: number): void;
        getType(): $VerticalAnchorData$Type;
        constructor(arg0: $VerticalAnchorData$Type_, arg1: number);
    }
    export class $HeightProviderData$Type extends $Enum<$HeightProviderData$Type> {
        static values(): $HeightProviderData$Type[];
        static valueOf(arg0: string): $HeightProviderData$Type;
        static VERY_BIASED_TO_BOTTOM: $HeightProviderData$Type;
        static BIASED_TO_BOTTOM: $HeightProviderData$Type;
        static UNIFORM: $HeightProviderData$Type;
        static CONSTANT: $HeightProviderData$Type;
        static TRAPEZOID: $HeightProviderData$Type;
    }
    /**
     * Values that may be interpreted as {@link $HeightProviderData$Type}.
     */
    export type $HeightProviderData$Type_ = "constant" | "uniform" | "trapezoid" | "biased_to_bottom" | "very_biased_to_bottom";
    export class $VerticalAnchorData$Type extends $Enum<$VerticalAnchorData$Type> {
        toDataType(): $VerticalAnchorData$Type;
        static fromDataType(arg0: $VerticalAnchorData$Type_): $VerticalAnchorData$Type;
        static values(): $VerticalAnchorData$Type[];
        static valueOf(arg0: string): $VerticalAnchorData$Type;
        static ABSOLUTE: $VerticalAnchorData$Type;
        static BELOW_TOP: $VerticalAnchorData$Type;
        static ABOVE_BOTTOM: $VerticalAnchorData$Type;
        static TOP: $VerticalAnchorData$Type;
        static BOTTOM: $VerticalAnchorData$Type;
    }
    /**
     * Values that may be interpreted as {@link $VerticalAnchorData$Type}.
     */
    export type $VerticalAnchorData$Type_ = "absolute" | "above_bottom" | "below_top" | "top" | "bottom";
    export class $ProjectStartToHeightmap extends $Enum<$ProjectStartToHeightmap> {
        static fromDataValue(arg0: ($Heightmap$Types_) | undefined): $ProjectStartToHeightmap;
        toDataValue(): ($Heightmap$Types) | undefined;
        static values(): $ProjectStartToHeightmap[];
        static valueOf(arg0: string): $ProjectStartToHeightmap;
        static OCEAN_FLOOR: $ProjectStartToHeightmap;
        static MOTION_BLOCKING_NO_LEAVES: $ProjectStartToHeightmap;
        static MOTION_BLOCKING: $ProjectStartToHeightmap;
        static WORLD_SURFACE: $ProjectStartToHeightmap;
        static OCEAN_FLOOR_WG: $ProjectStartToHeightmap;
        static NONE: $ProjectStartToHeightmap;
        static WORLD_SURFACE_WG: $ProjectStartToHeightmap;
    }
    /**
     * Values that may be interpreted as {@link $ProjectStartToHeightmap}.
     */
    export type $ProjectStartToHeightmap_ = "none" | "world_surface_wg" | "world_surface" | "ocean_floor_wg" | "ocean_floor" | "motion_blocking" | "motion_blocking_no_leaves";
}
