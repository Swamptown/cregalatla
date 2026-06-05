import { $IntComparator } from "@package/it/unimi/dsi/fastutil/ints";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/navigation" {
    export class $ScreenRectangle extends $Record {
        overlaps(arg0: $ScreenRectangle_): boolean;
        intersection(arg0: $ScreenRectangle_): $ScreenRectangle;
        bottom(): number;
        getLength(arg0: $ScreenAxis_): number;
        position(): $ScreenPosition;
        static of(arg0: $ScreenAxis_, arg1: number, arg2: number, arg3: number, arg4: number): $ScreenRectangle;
        static empty(): $ScreenRectangle;
        top(): number;
        left(): number;
        right(): number;
        step(arg0: $ScreenDirection_): $ScreenRectangle;
        width(): number;
        height(): number;
        getBorder(arg0: $ScreenDirection_): $ScreenRectangle;
        getBoundInDirection(arg0: $ScreenDirection_): number;
        overlapsInAxis(arg0: $ScreenRectangle_, arg1: $ScreenAxis_): boolean;
        getCenterInAxis(arg0: $ScreenAxis_): number;
        containsPoint(arg0: number, arg1: number): boolean;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $ScreenPosition_, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenRectangle}.
     */
    export type $ScreenRectangle_ = { position?: $ScreenPosition_, width?: number, height?: number,  } | [position?: $ScreenPosition_, width?: number, height?: number, ];
    export class $FocusNavigationEvent$InitialFocus implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        constructor();
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    export class $FocusNavigationEvent$ArrowNavigation extends $Record implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        direction(): $ScreenDirection;
        constructor(arg0: $ScreenDirection_);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$ArrowNavigation}.
     */
    export type $FocusNavigationEvent$ArrowNavigation_ = { direction?: $ScreenDirection_,  } | [direction?: $ScreenDirection_, ];
    export class $ScreenAxis extends $Enum<$ScreenAxis> {
        getNegative(): $ScreenDirection;
        static values(): $ScreenAxis[];
        static valueOf(arg0: string): $ScreenAxis;
        orthogonal(): $ScreenAxis;
        getPositive(): $ScreenDirection;
        getDirection(arg0: boolean): $ScreenDirection;
        static VERTICAL: $ScreenAxis;
        static HORIZONTAL: $ScreenAxis;
        get negative(): $ScreenDirection;
        get positive(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAxis}.
     */
    export type $ScreenAxis_ = "horizontal" | "vertical";
    export class $ScreenPosition extends $Record {
        getCoordinate(arg0: $ScreenAxis_): number;
        static of(arg0: $ScreenAxis_, arg1: number, arg2: number): $ScreenPosition;
        x(): number;
        y(): number;
        step(arg0: $ScreenDirection_): $ScreenPosition;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenPosition}.
     */
    export type $ScreenPosition_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $CommonInputs {
        static selected(arg0: number): boolean;
        constructor();
    }
    export class $FocusNavigationEvent$TabNavigation extends $Record implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        forward(): boolean;
        constructor(arg0: boolean);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$TabNavigation}.
     */
    export type $FocusNavigationEvent$TabNavigation_ = { forward?: boolean,  } | [forward?: boolean, ];
    export class $ScreenDirection extends $Enum<$ScreenDirection> {
        isPositive(): boolean;
        isAfter(arg0: number, arg1: number): boolean;
        isBefore(arg0: number, arg1: number): boolean;
        static values(): $ScreenDirection[];
        static valueOf(arg0: string): $ScreenDirection;
        coordinateValueComparator(): $IntComparator;
        getOpposite(): $ScreenDirection;
        getAxis(): $ScreenAxis;
        static DOWN: $ScreenDirection;
        static LEFT: $ScreenDirection;
        static RIGHT: $ScreenDirection;
        static UP: $ScreenDirection;
        get positive(): boolean;
        get opposite(): $ScreenDirection;
        get axis(): $ScreenAxis;
    }
    /**
     * Values that may be interpreted as {@link $ScreenDirection}.
     */
    export type $ScreenDirection_ = "up" | "down" | "left" | "right";
    export class $FocusNavigationEvent {
    }
    export interface $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent}.
     */
    export type $FocusNavigationEvent_ = (() => $ScreenDirection_);
}
