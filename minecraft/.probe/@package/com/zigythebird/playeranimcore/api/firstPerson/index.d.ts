import { $Enum } from "@package/java/lang";

declare module "@package/com/zigythebird/playeranimcore/api/firstPerson" {
    export class $FirstPersonConfiguration {
        isShowRightArm(): boolean;
        isShowLeftArm(): boolean;
        isShowArmor(): boolean;
        setShowLeftArm(showLeftArm: boolean): $FirstPersonConfiguration;
        setShowRightArm(showRightArm: boolean): $FirstPersonConfiguration;
        setShowRightItem(showRightItem: boolean): $FirstPersonConfiguration;
        setShowArmor(showArmor: boolean): $FirstPersonConfiguration;
        setShowLeftItem(showLeftItem: boolean): $FirstPersonConfiguration;
        isShowRightItem(): boolean;
        isShowLeftItem(): boolean;
        constructor(showRightArm: boolean, showLeftArm: boolean, showRightItem: boolean, showLeftItem: boolean);
        constructor();
        constructor(showRightArm: boolean, showLeftArm: boolean, showRightItem: boolean, showLeftItem: boolean, showArmor: boolean);
    }
    export class $FirstPersonMode extends $Enum<$FirstPersonMode> {
        static isFirstPersonPass(): boolean;
        static values(): $FirstPersonMode[];
        static valueOf(name: string): $FirstPersonMode;
        isEnabled(): boolean;
        static setFirstPersonPass(newValue: boolean): void;
        static DISABLED: $FirstPersonMode;
        static THIRD_PERSON_MODEL: $FirstPersonMode;
        static VANILLA: $FirstPersonMode;
        static NONE: $FirstPersonMode;
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FirstPersonMode}.
     */
    export type $FirstPersonMode_ = "none" | "vanilla" | "third_person_model" | "disabled";
}
