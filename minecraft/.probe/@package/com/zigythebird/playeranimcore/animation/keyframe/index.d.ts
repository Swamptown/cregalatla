import { $List_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Axis_ } from "@package/com/zigythebird/playeranimcore/enums";
import { $EasingType_, $EasingType } from "@package/com/zigythebird/playeranimcore/easing";
import { $Expression } from "@package/team/unnamed/mocha/parser/ast";
export * as event from "@package/com/zigythebird/playeranimcore/animation/keyframe/event";

declare module "@package/com/zigythebird/playeranimcore/animation/keyframe" {
    export class $KeyframeStack extends $Record {
        static from(otherStack: $KeyframeStack_): $KeyframeStack;
        getKeyFramesForAxis(axis: $Axis_): $List<$Keyframe>;
        xKeyframes(): $List<$Keyframe>;
        getLastKeyframeTime(): number;
        hasKeyframes(): boolean;
        getLastXAxisKeyframeTime(): number;
        getLastYAxisKeyframeTime(): number;
        getLastZAxisKeyframeTime(): number;
        yKeyframes(): $List<$Keyframe>;
        zKeyframes(): $List<$Keyframe>;
        constructor();
        constructor(xKeyframes: $List_<$Keyframe_>, yKeyframes: $List_<$Keyframe_>, zKeyframes: $List_<$Keyframe_>);
        get lastKeyframeTime(): number;
        get lastXAxisKeyframeTime(): number;
        get lastYAxisKeyframeTime(): number;
        get lastZAxisKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $KeyframeStack}.
     */
    export type $KeyframeStack_ = { xKeyframes?: $List_<$Keyframe_>, yKeyframes?: $List_<$Keyframe_>, zKeyframes?: $List_<$Keyframe_>,  } | [xKeyframes?: $List_<$Keyframe_>, yKeyframes?: $List_<$Keyframe_>, zKeyframes?: $List_<$Keyframe_>, ];
    export class $KeyframeLocation<T extends $Keyframe> extends $Record {
        keyframe(): T;
        startTick(): number;
        constructor(keyframe: T, startTick: number);
    }
    /**
     * Values that may be interpreted as {@link $KeyframeLocation}.
     */
    export type $KeyframeLocation_<T> = { keyframe?: $Keyframe_, startTick?: number,  } | [keyframe?: $Keyframe_, startTick?: number, ];
    export class $BoneAnimation extends $Record {
        rotationKeyFrames(): $KeyframeStack;
        positionKeyFrames(): $KeyframeStack;
        scaleKeyFrames(): $KeyframeStack;
        hasKeyframes(): boolean;
        bendKeyFrames(): $List<$Keyframe>;
        constructor();
        constructor(rotationKeyFrames: $KeyframeStack_, positionKeyFrames: $KeyframeStack_, scaleKeyFrames: $KeyframeStack_, bendKeyFrames: $List_<$Keyframe_>);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimation}.
     */
    export type $BoneAnimation_ = { scaleKeyFrames?: $KeyframeStack_, positionKeyFrames?: $KeyframeStack_, bendKeyFrames?: $List_<$Keyframe_>, rotationKeyFrames?: $KeyframeStack_,  } | [scaleKeyFrames?: $KeyframeStack_, positionKeyFrames?: $KeyframeStack_, bendKeyFrames?: $List_<$Keyframe_>, rotationKeyFrames?: $KeyframeStack_, ];
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
    export type $AnimationPoint_ = { easingArgs?: $List_<$List_<$Expression>>, animationEndValue?: number, animationStartValue?: number, easingType?: $EasingType_, currentTick?: number, transitionLength?: number,  } | [easingArgs?: $List_<$List_<$Expression>>, animationEndValue?: number, animationStartValue?: number, easingType?: $EasingType_, currentTick?: number, transitionLength?: number, ];
    export class $Keyframe extends $Record {
        length(): number;
        endValue(): $List<$Expression>;
        easingArgs(): $List<$List<$Expression>>;
        easingType(): $EasingType;
        static getLastKeyframeTime(list: $List_<$Keyframe_>): number;
        startValue(): $List<$Expression>;
        static getKeyframeAtTime(list: $List_<$Keyframe_>, tick: number): $Keyframe;
        constructor(length: number, startValue: $List_<$Expression>, endValue: $List_<$Expression>, easingType: $EasingType_, easingArgs: $List_<$List_<$Expression>>);
        constructor(length: number);
        constructor(length: number, startValue: $List_<$Expression>, endValue: $List_<$Expression>, easingType: $EasingType_);
        constructor(length: number, startValue: $List_<$Expression>, endValue: $List_<$Expression>);
    }
    /**
     * Values that may be interpreted as {@link $Keyframe}.
     */
    export type $Keyframe_ = { length?: number, endValue?: $List_<$Expression>, easingType?: $EasingType_, easingArgs?: $List_<$List_<$Expression>>, startValue?: $List_<$Expression>,  } | [length?: number, endValue?: $List_<$Expression>, easingType?: $EasingType_, easingArgs?: $List_<$List_<$Expression>>, startValue?: $List_<$Expression>, ];
}
