import { $YogaValue } from "@package/org/appliedenergistics/yoga";
import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        static ofAuto(): $StyleLength;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        asYogaValue(): $YogaValue;
        inexactEquals(arg0: $StyleLength): boolean;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        static percent(arg0: number): $StyleLength;
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static points(arg0: number): $StyleLength;
        static undefined(): $StyleLength;
        isUndefined(): boolean;
        get auto(): boolean;
        get defined(): boolean;
    }
    export class $StyleSizeLength {
        isMaxContent(): boolean;
        isStretch(): boolean;
        static ofAuto(): $StyleSizeLength;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        isFitContent(): boolean;
        static ofMaxContent(): $StyleSizeLength;
        asYogaValue(): $YogaValue;
        static ofFitContent(): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        static percent(arg0: number): $StyleSizeLength;
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static points(arg0: number): $StyleSizeLength;
        static undefined(): $StyleSizeLength;
        isUndefined(): boolean;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get maxContent(): boolean;
        get stretch(): boolean;
        get auto(): boolean;
        get fitContent(): boolean;
        get defined(): boolean;
    }
}
