import { $FloatObjectPair } from "@package/it/unimi/dsi/fastutil/floats";
import { $Codec } from "@package/com/mojang/serialization";
import { $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $IEase, $IEase_, $Interpolator } from "@package/com/lowdragmc/lowdraglib2/math/interpolate";
import { $TreeSet } from "@package/java/util";
import { $IValueInterpolator_, $IValueInterpolator } from "@package/com/lowdragmc/lowdraglib2/gui/ui/style";
import { $Record } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/utils/animation" {
    export class $KFExecutor<T> extends $Record {
        keyFrames(): $KeyFrames<T>;
        apply(arg0: $AnimationRuntime, arg1: number): void;
        handler(): $IFrameValueHandler<T>;
        onFinished(arg0: $AnimationRuntime): void;
        constructor(keyFrames: $KeyFrames_<T>, handler: $IFrameValueHandler<T>);
    }
    /**
     * Values that may be interpreted as {@link $KFExecutor}.
     */
    export type $KFExecutor_<T> = { handler?: $IFrameValueHandler<any>, keyFrames?: $KeyFrames_<any>,  } | [handler?: $IFrameValueHandler<any>, keyFrames?: $KeyFrames_<any>, ];
    export class $Animation extends $Record {
        ease(): $IEase;
        duration(): number;
        delay(): number;
        static CODEC: $Codec<$Animation>;
        constructor(duration: number, delay: number, ease: $IEase_);
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = { ease?: $IEase_, duration?: number, delay?: number,  } | [ease?: $IEase_, duration?: number, delay?: number, ];
    export class $AnimationEngine {
        updateFrame(): void;
        getAppTime(): number;
        play(arg0: $KeyFrameAnimation_): $ISubscription;
        constructor();
        get appTime(): number;
    }
    export class $AnimationRuntime {
        isFinished(): boolean;
        update(arg0: number): void;
        getInterpolator(): $Interpolator;
        animation: $KeyFrameAnimation;
        constructor(arg0: number, arg1: $KeyFrameAnimation_);
        get finished(): boolean;
        get interpolator(): $Interpolator;
    }
    export class $IFrameValueHandler<T> {
    }
    export interface $IFrameValueHandler<T> {
        accept(arg0: $AnimationRuntime, arg1: T): void;
        onFinished(arg0: $AnimationRuntime): void;
    }
    export class $KeyFrameAnimation extends $Record {
        kfExecutors(): $KFExecutor<never>[];
        static of(arg0: $Animation_, ...arg1: $KFExecutor_<never>[]): $KeyFrameAnimation;
        animation(): $Animation;
        constructor(kfExecutors: $KFExecutor_<never>[], animation: $Animation_);
    }
    /**
     * Values that may be interpreted as {@link $KeyFrameAnimation}.
     */
    export type $KeyFrameAnimation_ = { animation?: $Animation_, kfExecutors?: $KFExecutor_<never>[],  } | [animation?: $Animation_, kfExecutors?: $KFExecutor_<never>[], ];
    export class $KeyFrames<T> extends $Record {
        keyframes(): $TreeSet<$FloatObjectPair<T>>;
        getValue(arg0: number): T;
        static of<T>(arg0: $IValueInterpolator_<T>, ...arg1: $FloatObjectPair<T>[]): $KeyFrames<T>;
        static of<T>(arg0: $IValueInterpolator_<T>, arg1: T, arg2: T): $KeyFrames<T>;
        interpolator(): $IValueInterpolator<T>;
        constructor(keyframes: $TreeSet<$FloatObjectPair<T>>, interpolator: $IValueInterpolator_<T>);
    }
    /**
     * Values that may be interpreted as {@link $KeyFrames}.
     */
    export type $KeyFrames_<T> = { interpolator?: $IValueInterpolator_<any>, keyframes?: $TreeSet<$FloatObjectPair<any>>,  } | [interpolator?: $IValueInterpolator_<any>, keyframes?: $TreeSet<$FloatObjectPair<any>>, ];
}
