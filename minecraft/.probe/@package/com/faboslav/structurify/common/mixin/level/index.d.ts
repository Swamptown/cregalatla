import { $VerticalAnchor } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/faboslav/structurify/common/mixin/level" {
    export class $VeryBiasedToBottomHeightAccessor {
    }
    export interface $VeryBiasedToBottomHeightAccessor {
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        getInner(): number;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
        get inner(): number;
    }
    export class $BiasedToBottomHeightAccessor {
    }
    export interface $BiasedToBottomHeightAccessor {
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        getInner(): number;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
        get inner(): number;
    }
    export class $TrapezoidHeightAccessor {
    }
    export interface $TrapezoidHeightAccessor {
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        getPlateau(): number;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
        get plateau(): number;
    }
    export class $UniformHeightAccessor {
    }
    export interface $UniformHeightAccessor {
        getMinInclusive(): $VerticalAnchor;
        getMaxInclusive(): $VerticalAnchor;
        get minInclusive(): $VerticalAnchor;
        get maxInclusive(): $VerticalAnchor;
    }
}
