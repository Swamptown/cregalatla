import { $Enum } from "@package/java/lang";

declare module "@package/com/zigythebird/playeranimcore/enums" {
    export class $Axis extends $Enum<$Axis> {
        static values(): $Axis[];
        static valueOf(name: string): $Axis;
        static X: $Axis;
        static Y: $Axis;
        static Z: $Axis;
    }
    /**
     * Values that may be interpreted as {@link $Axis}.
     */
    export type $Axis_ = "x" | "y" | "z";
    export class $FadeType extends $Enum<$FadeType> {
        static values(): $FadeType[];
        static valueOf(name: string): $FadeType;
        static FADE_OUT: $FadeType;
        static FADE_IN: $FadeType;
    }
    /**
     * Values that may be interpreted as {@link $FadeType}.
     */
    export type $FadeType_ = "fade_in" | "fade_out";
    export class $AnimationStage extends $Enum<$AnimationStage> {
        static values(): $AnimationStage[];
        static valueOf(name: string): $AnimationStage;
        static ANIMATION: $AnimationStage;
        static WAIT: $AnimationStage;
    }
    /**
     * Values that may be interpreted as {@link $AnimationStage}.
     */
    export type $AnimationStage_ = "wait" | "animation";
    export class $TransformType extends $Enum<$TransformType> {
        static values(): $TransformType[];
        static valueOf(name: string): $TransformType;
        static ROTATION: $TransformType;
        static POSITION: $TransformType;
        static BEND: $TransformType;
        static SCALE: $TransformType;
    }
    /**
     * Values that may be interpreted as {@link $TransformType}.
     */
    export type $TransformType_ = "position" | "rotation" | "bend" | "scale";
    export class $PlayState extends $Enum<$PlayState> {
        static values(): $PlayState[];
        static valueOf(name: string): $PlayState;
        static CONTINUE: $PlayState;
        static STOP: $PlayState;
    }
    /**
     * Values that may be interpreted as {@link $PlayState}.
     */
    export type $PlayState_ = "continue" | "stop";
    export class $State extends $Enum<$State> {
        static values(): $State[];
        static valueOf(name: string): $State;
        isActive(): boolean;
        static PAUSED: $State;
        static RUNNING: $State;
        static STOPPED: $State;
        get active(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $State}.
     */
    export type $State_ = "running" | "paused" | "stopped";
}
