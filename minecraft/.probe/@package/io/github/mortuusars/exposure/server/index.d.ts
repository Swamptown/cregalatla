import { $Enum } from "@package/java/lang";

declare module "@package/io/github/mortuusars/exposure/server" {
    export class $CameraInstance$ProjectionState extends $Enum<$CameraInstance$ProjectionState> {
        static values(): $CameraInstance$ProjectionState[];
        static valueOf(name: string): $CameraInstance$ProjectionState;
        static FAILED: $CameraInstance$ProjectionState;
        static SUCCESSFUL: $CameraInstance$ProjectionState;
        static TIMED_OUT: $CameraInstance$ProjectionState;
        static IDLE: $CameraInstance$ProjectionState;
        static WAITING: $CameraInstance$ProjectionState;
    }
    /**
     * Values that may be interpreted as {@link $CameraInstance$ProjectionState}.
     */
    export type $CameraInstance$ProjectionState_ = "idle" | "waiting" | "successful" | "failed" | "timed_out";
}
