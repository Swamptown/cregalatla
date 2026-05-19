import { $YogaValue } from "@package/org/appliedenergistics/yoga";
import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        static ofAuto(): $StyleLength;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        inexactEquals(arg0: $StyleLength): boolean;
        asYogaValue(): $YogaValue;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        static percent(arg0: number): $StyleLength;
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static undefined(): $StyleLength;
        isUndefined(): boolean;
        static points(arg0: number): $StyleLength;
        get auto(): boolean;
        get defined(): boolean;
    }
    export class $StyleSizeLength {
        static ofAuto(): $StyleSizeLength;
        isAuto(): boolean;
        isPercent(): boolean;
        isPoints(): boolean;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        isStretch(): boolean;
        static ofStretch(): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        asYogaValue(): $YogaValue;
        static ofMaxContent(): $StyleSizeLength;
        static ofFitContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        static percent(arg0: number): $StyleSizeLength;
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static undefined(): $StyleSizeLength;
        isUndefined(): boolean;
        static points(arg0: number): $StyleSizeLength;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get auto(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
        get stretch(): boolean;
        get defined(): boolean;
    }
}
