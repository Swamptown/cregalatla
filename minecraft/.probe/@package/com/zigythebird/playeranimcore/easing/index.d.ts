import { $JsonElement_ } from "@package/com/google/gson";
import { $Float2FloatFunction_, $Float2FloatFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $MochaEngine } from "@package/team/unnamed/mocha";
import { $ObjectValue$FloatFunction3 } from "@package/team/unnamed/mocha/runtime/value";
import { $AnimationPoint_ } from "@package/com/zigythebird/playeranimcore/animation/keyframe";
import { $Enum } from "@package/java/lang";

declare module "@package/com/zigythebird/playeranimcore/easing" {
    export class $EasingType extends $Enum<$EasingType> implements $EasingTypeTransformer {
        static easeIn(_function: $Float2FloatFunction_): $Float2FloatFunction;
        static easeOut(_function: $Float2FloatFunction_): $Float2FloatFunction;
        static lerpWithOverride(env: $MochaEngine<never>, animationPoint: $AnimationPoint_, override: $EasingType_): number;
        buildTransformer(value: number): $Float2FloatFunction;
        static easeInOut(_function: $Float2FloatFunction_): $Float2FloatFunction;
        static quadratic(n: number): number;
        static cubic(n: number): number;
        static elastic(n: number): $Float2FloatFunction;
        static circle(n: number): number;
        static bounce(n: number): $Float2FloatFunction;
        static sine(n: number): number;
        static linear(n: number): number;
        static fromId(id: number): $EasingType;
        static back(n: number): $Float2FloatFunction;
        static values(): $EasingType[];
        static pow(n: number): $Float2FloatFunction;
        static exp(n: number): number;
        static valueOf(name: string): $EasingType;
        apply(startValue: number, endValue: number, lerpValue: number): number;
        apply(env: $MochaEngine<never>, animationPoint: $AnimationPoint_, easingValue: number, lerpValue: number): number;
        apply(env: $MochaEngine<never>, animationPoint: $AnimationPoint_): number;
        apply(startValue: number, endValue: number, easingValue: number, lerpValue: number): number;
        static step(n: number): $Float2FloatFunction;
        static fromJson(json: $JsonElement_): $EasingType;
        static fromString(name: string): $EasingType;
        static EASE_OUT_QUAD: $EasingType;
        static EASE_OUT_SINE: $EasingType;
        static CATMULLROM: $EasingType;
        static BEZIER: $EasingType;
        static EASE_OUT_ELASTIC: $EasingType;
        static EASE_OUT_QUART: $EasingType;
        static EASE_IN_OUT_QUAD: $EasingType;
        static EASE_IN_ELASTIC: $EasingType;
        static EASE_IN_CUBIC: $EasingType;
        static EASE_IN_QUINT: $EasingType;
        static EASE_IN_OUT_SINE: $EasingType;
        static EASE_IN_OUT_CIRC: $EasingType;
        static EASE_IN_EXPO: $EasingType;
        static EASE_OUT_CIRC: $EasingType;
        static BEZIER_AFTER: $EasingType;
        id: number;
        static EASE_IN_QUART: $EasingType;
        static EASE_OUT_CUBIC: $EasingType;
        static EASE_IN_OUT_BOUNCE: $EasingType;
        static EASE_IN_OUT_CUBIC: $EasingType;
        static EASE_IN_OUT_EXPO: $EasingType;
        static EASE_OUT_BACK: $EasingType;
        static EASE_IN_BOUNCE: $EasingType;
        static CONSTANT: $EasingType;
        static EASE_IN_OUT_BACK: $EasingType;
        static STEP: $EasingType;
        static EASE_IN_OUT_QUINT: $EasingType;
        static EASE_IN_OUT_ELASTIC: $EasingType;
        static EASE_IN_BACK: $EasingType;
        static EASE_OUT_BOUNCE: $EasingType;
        static EASE_IN_SINE: $EasingType;
        static EASE_IN_QUAD: $EasingType;
        static EASE_OUT_EXPO: $EasingType;
        static EASE_OUT_QUINT: $EasingType;
        static LINEAR: $EasingType;
        static EASE_IN_OUT_QUART: $EasingType;
        static EASE_IN_CIRC: $EasingType;
    }
    /**
     * Values that may be interpreted as {@link $EasingType}.
     */
    export type $EasingType_ = "linear" | "constant" | "step" | "ease_in_sine" | "ease_out_sine" | "ease_in_out_sine" | "ease_in_quad" | "ease_out_quad" | "ease_in_out_quad" | "ease_in_cubic" | "ease_out_cubic" | "ease_in_out_cubic" | "ease_in_quart" | "ease_out_quart" | "ease_in_out_quart" | "ease_in_quint" | "ease_out_quint" | "ease_in_out_quint" | "ease_in_expo" | "ease_out_expo" | "ease_in_out_expo" | "ease_in_circ" | "ease_out_circ" | "ease_in_out_circ" | "ease_in_back" | "ease_out_back" | "ease_in_out_back" | "ease_in_elastic" | "ease_out_elastic" | "ease_in_out_elastic" | "ease_in_bounce" | "ease_out_bounce" | "ease_in_out_bounce" | "catmullrom" | "bezier" | "bezier_after";
    export class $EasingTypeTransformer {
    }
    export interface $EasingTypeTransformer extends $ObjectValue$FloatFunction3 {
        buildTransformer(arg0: number): $Float2FloatFunction;
        apply(startValue: number, endValue: number, easingValue: number, lerpValue: number): number;
        apply(startValue: number, endValue: number, lerpValue: number): number;
        apply(env: $MochaEngine<never>, animationPoint: $AnimationPoint_, easingValue: number, lerpValue: number): number;
        apply(env: $MochaEngine<never>, animationPoint: $AnimationPoint_): number;
    }
    /**
     * Values that may be interpreted as {@link $EasingTypeTransformer}.
     */
    export type $EasingTypeTransformer_ = ((arg0: number) => $Float2FloatFunction);
}
