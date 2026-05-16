import { $AnimationController, $AnimationData } from "@package/com/zigythebird/playeranimcore/animation";
import { $KeyFrameData } from "@package/com/zigythebird/playeranimcore/animation/keyframe/event/data";
import { $EventResult_, $EventResult } from "@package/com/zigythebird/playeranimcore/event";
export * as data from "@package/com/zigythebird/playeranimcore/animation/keyframe/event/data";

declare module "@package/com/zigythebird/playeranimcore/animation/keyframe/event" {
    export class $CustomKeyFrameEvents$CustomKeyFrameHandler<T extends $KeyFrameData> {
    }
    export interface $CustomKeyFrameEvents$CustomKeyFrameHandler<T extends $KeyFrameData> {
        handle(arg0: number, arg1: $AnimationController, arg2: T, arg3: $AnimationData): $EventResult;
    }
    /**
     * Values that may be interpreted as {@link $CustomKeyFrameEvents$CustomKeyFrameHandler}.
     */
    export type $CustomKeyFrameEvents$CustomKeyFrameHandler_<T> = ((arg0: number, arg1: $AnimationController, arg2: T, arg3: $AnimationData) => $EventResult_);
}
