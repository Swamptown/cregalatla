import { $List_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Axis_ } from "@package/com/zigythebird/playeranimcore/enums";
import { $EasingType, $EasingType_ } from "@package/com/zigythebird/playeranimcore/easing";
import { $Expression } from "@package/team/unnamed/mocha/parser/ast";
export * as event from "@package/com/zigythebird/playeranimcore/animation/keyframe/event";

declare module "@package/com/zigythebird/playeranimcore/animation/keyframe" {
    export class $KeyframeStack extends $Record {
        getLastZAxisKeyframeTime(): number;
        hasKeyframes(): boolean;
        getLastXAxisKeyframeTime(): number;
        getLastYAxisKeyframeTime(): number;
        yKeyframes(): $List<$Keyframe>;
        zKeyframes(): $List<$Keyframe>;
        getKeyFramesForAxis(axis: $Axis_): $List<$Keyframe>;
        xKeyframes(): $List<$Keyframe>;
        getLastKeyframeTime(): number;
        static from(otherStack: $KeyframeStack_): $KeyframeStack;
        constructor(xKeyframes: $List_<$Keyframe_>, yKeyframes: $List_<$Keyframe_>, zKeyframes: $List_<$Keyframe_>);
        constructor();
        get lastZAxisKeyframeTime(): number;
        get lastXAxisKeyframeTime(): number;
        get lastYAxisKeyframeTime(): number;
        get lastKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $KeyframeStack}.
     */
    export type $KeyframeStack_ = { zKeyframes?: $List_<$Keyframe_>, yKeyframes?: $List_<$Keyframe_>, xKeyframes?: $List_<$Keyframe_>,  } | [zKeyframes?: $List_<$Keyframe_>, yKeyframes?: $List_<$Keyframe_>, xKeyframes?: $List_<$Keyframe_>, ];
    export class $KeyframeLocation<T extends $Keyframe> extends $Record {
        keyframe(): T;
        startTick(): number;
        constructor(keyframe: T, startTick: number);
    }
    /**
     * Values that may be interpreted as {@link $KeyframeLocation}.
     */
    export type $KeyframeLocation_<T> = { startTick?: number, keyframe?: $Keyframe_,  } | [startTick?: number, keyframe?: $Keyframe_, ];
    export class $BoneAnimation extends $Record {
        hasKeyframes(): boolean;
        bendKeyFrames(): $List<$Keyframe>;
        rotationKeyFrames(): $KeyframeStack;
        positionKeyFrames(): $KeyframeStack;
        scaleKeyFrames(): $KeyframeStack;
        constructor();
        constructor(rotationKeyFrames: $KeyframeStack_, positionKeyFrames: $KeyframeStack_, scaleKeyFrames: $KeyframeStack_, bendKeyFrames: $List_<$Keyframe_>);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimation}.
     */
    export type $BoneAnimation_ = { rotationKeyFrames?: $KeyframeStack_, bendKeyFrames?: $List_<$Keyframe_>, positionKeyFrames?: $KeyframeStack_, scaleKeyFrames?: $KeyframeStack_,  } | [rotationKeyFrames?: $KeyframeStack_, bendKeyFrames?: $List_<$Keyframe_>, positionKeyFrames?: $KeyframeStack_, scaleKeyFrames?: $KeyframeStack_, ];
    export class $AnimationPoint extends $Record {
        transitionLength(): number;
        animationEndValue(): number;
        animationStartValue(): number;
        easingArgs(): $List<$List<$Expression>>;
        easingType(): $EasingType;
        currentTick(): number;
        constructor(keyframe: $Keyframe_, currentTick: number, transitionLength: number, animationStartValue: number, animationEndValue: number);
        constructor(easingType: $EasingType_, easingArgs: $List_<$List_<$Expression>>, currentTick: number, transitionLength: number, animationStartValue: number, animationEndValue: number);
    }
    /**
     * Values that may be interpreted as {@link $AnimationPoint}.
     */
    export type $AnimationPoint_ = { transitionLength?: number, currentTick?: number, easingType?: $EasingType_, animationStartValue?: number, animationEndValue?: number, easingArgs?: $List_<$List_<$Expression>>,  } | [transitionLength?: number, currentTick?: number, easingType?: $EasingType_, animationStartValue?: number, animationEndValue?: number, easingArgs?: $List_<$List_<$Expression>>, ];
    export class $Keyframe extends $Record {
        static getKeyframeAtTime(list: $List_<$Keyframe_>, tick: number): $Keyframe;
        easingArgs(): $List<$List<$Expression>>;
        easingType(): $EasingType;
        static getLastKeyframeTime(list: $List_<$Keyframe_>): number;
        startValue(): $List<$Expression>;
        endValue(): $List<$Expression>;
        length(): number;
        constructor(length: number, startValue: $List_<$Expression>, endValue: $List_<$Expression>);
        constructor(length: number);
        constructor(length: number, startValue: $List_<$Expression>, endValue: $List_<$Expression>, easingType: $EasingType_);
        constructor(length: number, startValue: $List_<$Expression>, endValue: $List_<$Expression>, easingType: $EasingType_, easingArgs: $List_<$List_<$Expression>>);
    }
    /**
     * Values that may be interpreted as {@link $Keyframe}.
     */
    export type $Keyframe_ = { easingArgs?: $List_<$List_<$Expression>>, easingType?: $EasingType_, endValue?: $List_<$Expression>, length?: number, startValue?: $List_<$Expression>,  } | [easingArgs?: $List_<$List_<$Expression>>, easingType?: $EasingType_, endValue?: $List_<$Expression>, length?: number, startValue?: $List_<$Expression>, ];
}
