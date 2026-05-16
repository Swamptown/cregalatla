import { $FloatObjectPair } from "@package/it/unimi/dsi/fastutil/floats";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $IFrameValueHandler, $Animation, $Animation_, $AnimationRuntime } from "@package/com/lowdragmc/lowdraglib2/utils/animation";
import { $UIElement, $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $IEase_ } from "@package/com/lowdragmc/lowdraglib2/math/interpolate";
import { $Object, $Record } from "@package/java/lang";
import { $Property, $StyleOrigin_, $StyleBag } from "@package/com/lowdragmc/lowdraglib2/gui/ui/style";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/style/animation" {
    export class $TransitionAnimation<T> implements $IFrameValueHandler<T> {
        stop(): void;
        accept(arg0: $AnimationRuntime, arg1: T): void;
        getCurrentValue(): T;
        getTargetValue(): T;
        play(arg0: T, arg1: T): void;
        onFinished(arg0: $AnimationRuntime): void;
        getInitialValue(): T;
        getSubscription(): $ISubscription;
        styleBag: $StyleBag;
        property: $Property<T>;
        animation: $Animation;
        constructor(arg0: $StyleBag, arg1: $Property<T>, arg2: $Animation_);
        get currentValue(): T;
        get targetValue(): T;
        get initialValue(): T;
        get subscription(): $ISubscription;
    }
    export class $Transition extends $Record {
        animations(): $Map<$Property<never>, $Animation>;
        static CODEC: $Codec<$Transition>;
        static EMPTY: $Transition;
        constructor(animations: $Map_<$Property<never>, $Animation_>);
    }
    /**
     * Values that may be interpreted as {@link $Transition}.
     */
    export type $Transition_ = { animations?: $Map_<$Property<never>, $Animation_>,  } | [animations?: $Map_<$Property<never>, $Animation_>, ];
    export class $StyleAnimation {
        static of(arg0: $ModularUI): $StyleAnimation;
        start(): $ISubscription;
        duration(arg0: number): $StyleAnimation;
        delay(arg0: number): $StyleAnimation;
        origin(arg0: $StyleOrigin_): $StyleAnimation;
        style<T>(arg0: $Property<T>, ...arg1: $FloatObjectPair<any>[]): $StyleAnimation;
        style<T>(arg0: $Property<T>, arg1: T): $StyleAnimation;
        animationOrigin(arg0: $StyleOrigin_): $StyleAnimation;
        onInterpolate(arg0: $BiConsumer_<$AnimationRuntime, $UIElement>): $StyleAnimation;
        lss(arg0: string, arg1: $Object): $StyleAnimation;
        specificity(arg0: number): $StyleAnimation;
        ease(arg0: $IEase_): $StyleAnimation;
        select(arg0: $UIElement): $StyleAnimation;
        select(arg0: string): $StyleAnimation;
        sourceOrder(arg0: number): $StyleAnimation;
        onFinished(arg0: $Consumer_<$UIElement>): $StyleAnimation;
    }
}
