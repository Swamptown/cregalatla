import { $Enum } from "@package/java/lang";

declare module "@package/com/zigythebird/playeranimcore/event" {
    export class $EventResult extends $Enum<$EventResult> {
        static values(): $EventResult[];
        static valueOf(name: string): $EventResult;
        static SUCCESS: $EventResult;
        static PASS: $EventResult;
        static FAIL: $EventResult;
    }
    /**
     * Values that may be interpreted as {@link $EventResult}.
     */
    export type $EventResult_ = "pass" | "success" | "fail";
}
