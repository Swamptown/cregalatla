import { $Enum } from "@package/java/lang";

declare module "@package/com/beansgalaxy/backpacks/network/serverbound" {
    export class $TraitMenuClick$Kind extends $Enum<$TraitMenuClick$Kind> {
        isShift(): boolean;
        isAction(): boolean;
        isDrop(): boolean;
        isRight(): boolean;
        static values(): $TraitMenuClick$Kind[];
        static valueOf(arg0: string): $TraitMenuClick$Kind;
        static SHIFT: $TraitMenuClick$Kind;
        static LEFT: $TraitMenuClick$Kind;
        static ACTION: $TraitMenuClick$Kind;
        static RIGHT: $TraitMenuClick$Kind;
        static DROP: $TraitMenuClick$Kind;
        get shift(): boolean;
        get action(): boolean;
        get drop(): boolean;
        get right(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TraitMenuClick$Kind}.
     */
    export type $TraitMenuClick$Kind_ = "left" | "right" | "shift" | "action" | "drop";
}
