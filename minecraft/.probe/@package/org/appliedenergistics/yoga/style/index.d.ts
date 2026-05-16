import { $YogaValue } from "@package/org/appliedenergistics/yoga";
import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        static ofAuto(): $StyleLength;
        asYogaValue(): $YogaValue;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        inexactEquals(arg0: $StyleLength): boolean;
        static undefined(): $StyleLength;
        isUndefined(): boolean;
        static points(arg0: number): $StyleLength;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        isStretch(): boolean;
        static ofAuto(): $StyleSizeLength;
        asYogaValue(): $YogaValue;
        static ofMaxContent(): $StyleSizeLength;
        static ofFitContent(): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        static undefined(): $StyleSizeLength;
        isUndefined(): boolean;
        static points(arg0: number): $StyleSizeLength;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get auto(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
        get stretch(): boolean;
    }
}
