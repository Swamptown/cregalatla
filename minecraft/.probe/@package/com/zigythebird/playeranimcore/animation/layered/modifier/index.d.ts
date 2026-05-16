import { $FadeType_ } from "@package/com/zigythebird/playeranimcore/enums";
import { $IAnimation, $AnimationContainer, $IAnimation_ } from "@package/com/zigythebird/playeranimcore/animation/layered";
import { $EasingType_ } from "@package/com/zigythebird/playeranimcore/easing";

declare module "@package/com/zigythebird/playeranimcore/animation/layered/modifier" {
    export class $AbstractFadeModifier extends $AbstractModifier {
        static standardFadeIn(length: number, ease: $EasingType_): $AbstractFadeModifier;
        static standardFadeIn(length: number, ease: $EasingType_, easingVariable: number): $AbstractFadeModifier;
        static standardFade(length: number, ease: $EasingType_, easingVariable: number, fadeType: $FadeType_): $AbstractFadeModifier;
        static functionalFadeIn(length: number, _function: $AbstractFadeModifier$EasingFunction_): $AbstractFadeModifier;
        static functionalFade(length: number, _function: $AbstractFadeModifier$EasingFunction_, fadeType: $FadeType_): $AbstractFadeModifier;
        static standardFadeOut(length: number, ease: $EasingType_): $AbstractFadeModifier;
        static standardFadeOut(length: number, ease: $EasingType_, easingVariable: number): $AbstractFadeModifier;
        static functionalFadeOut(length: number, _function: $AbstractFadeModifier$EasingFunction_): $AbstractFadeModifier;
        setTransitionAnimation(transitionAnimation: $IAnimation_): void;
        set transitionAnimation(value: $IAnimation_);
    }
    export class $AbstractFadeModifier$EasingFunction {
    }
    export interface $AbstractFadeModifier$EasingFunction {
        ease(arg0: string, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $AbstractFadeModifier$EasingFunction}.
     */
    export type $AbstractFadeModifier$EasingFunction_ = ((arg0: string, arg1: number) => number);
    export class $AbstractModifier extends $AnimationContainer<$IAnimation> {
        setHost(host: $IAnimation_): void;
        constructor();
        set host(value: $IAnimation_);
    }
}
