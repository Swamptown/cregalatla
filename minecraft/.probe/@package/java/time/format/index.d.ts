import { $Period, $ZoneId } from "@package/java/time";
import { $Format, $ParsePosition } from "@package/java/text";
import { $Chronology } from "@package/java/time/chrono";
import { $Set_, $Locale, $Set } from "@package/java/util";
import { $Appendable, $CharSequence, $Enum } from "@package/java/lang";
import { $TemporalField, $TemporalQuery_, $TemporalAccessor, $TemporalQuery } from "@package/java/time/temporal";

declare module "@package/java/time/format" {
    export class $ResolverStyle extends $Enum<$ResolverStyle> {
        static values(): $ResolverStyle[];
        static valueOf(arg0: string): $ResolverStyle;
        static STRICT: $ResolverStyle;
        static LENIENT: $ResolverStyle;
        static SMART: $ResolverStyle;
    }
    /**
     * Values that may be interpreted as {@link $ResolverStyle}.
     */
    export type $ResolverStyle_ = "strict" | "smart" | "lenient";
    export class $TextStyle extends $Enum<$TextStyle> {
        asStandalone(): $TextStyle;
        asNormal(): $TextStyle;
        isStandalone(): boolean;
        static values(): $TextStyle[];
        static valueOf(arg0: string): $TextStyle;
        static SHORT_STANDALONE: $TextStyle;
        static NARROW_STANDALONE: $TextStyle;
        static FULL_STANDALONE: $TextStyle;
        static FULL: $TextStyle;
        static SHORT: $TextStyle;
        static NARROW: $TextStyle;
        get standalone(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextStyle}.
     */
    export type $TextStyle_ = "full" | "full_standalone" | "short" | "short_standalone" | "narrow" | "narrow_standalone";
    export class $DateTimeFormatter {
        withLocale(arg0: $Locale): $DateTimeFormatter;
        localizedBy(arg0: $Locale): $DateTimeFormatter;
        getDecimalStyle(): $DecimalStyle;
        withDecimalStyle(arg0: $DecimalStyle): $DateTimeFormatter;
        withChronology(arg0: $Chronology): $DateTimeFormatter;
        getResolverStyle(): $ResolverStyle;
        withResolverStyle(arg0: $ResolverStyle_): $DateTimeFormatter;
        getResolverFields(): $Set<$TemporalField>;
        withResolverFields(arg0: $Set_<$TemporalField>): $DateTimeFormatter;
        withResolverFields(...arg0: $TemporalField[]): $DateTimeFormatter;
        parseBest(arg0: $CharSequence, ...arg1: $TemporalQuery_<never>[]): $TemporalAccessor;
        parseUnresolved(arg0: $CharSequence, arg1: $ParsePosition): $TemporalAccessor;
        toFormat(): $Format;
        toFormat(arg0: $TemporalQuery_<never>): $Format;
        static ofLocalizedDate(arg0: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedTime(arg0: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedDateTime(arg0: $FormatStyle_, arg1: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedDateTime(arg0: $FormatStyle_): $DateTimeFormatter;
        static ofLocalizedPattern(arg0: string): $DateTimeFormatter;
        static parsedExcessDays(): $TemporalQuery<$Period>;
        static parsedLeapSecond(): $TemporalQuery<boolean>;
        getZone(): $ZoneId;
        getLocale(): $Locale;
        formatTo(arg0: $TemporalAccessor, arg1: $Appendable): void;
        getChronology(): $Chronology;
        format(arg0: $TemporalAccessor): string;
        parse<T>(arg0: $CharSequence, arg1: $TemporalQuery_<T>): T;
        parse(arg0: $CharSequence, arg1: $ParsePosition): $TemporalAccessor;
        parse(arg0: $CharSequence): $TemporalAccessor;
        static ofPattern(arg0: string, arg1: $Locale): $DateTimeFormatter;
        static ofPattern(arg0: string): $DateTimeFormatter;
        withZone(arg0: $ZoneId): $DateTimeFormatter;
        static ISO_OFFSET_TIME: $DateTimeFormatter;
        static ISO_LOCAL_DATE_TIME: $DateTimeFormatter;
        static RFC_1123_DATE_TIME: $DateTimeFormatter;
        static ISO_INSTANT: $DateTimeFormatter;
        static ISO_ZONED_DATE_TIME: $DateTimeFormatter;
        static ISO_OFFSET_DATE_TIME: $DateTimeFormatter;
        static ISO_DATE_TIME: $DateTimeFormatter;
        static ISO_DATE: $DateTimeFormatter;
        static ISO_TIME: $DateTimeFormatter;
        static ISO_LOCAL_TIME: $DateTimeFormatter;
        static ISO_OFFSET_DATE: $DateTimeFormatter;
        static ISO_ORDINAL_DATE: $DateTimeFormatter;
        static ISO_LOCAL_DATE: $DateTimeFormatter;
        static BASIC_ISO_DATE: $DateTimeFormatter;
        static ISO_WEEK_DATE: $DateTimeFormatter;
        get decimalStyle(): $DecimalStyle;
        get resolverStyle(): $ResolverStyle;
        get resolverFields(): $Set<$TemporalField>;
        get zone(): $ZoneId;
        get locale(): $Locale;
        get chronology(): $Chronology;
    }
    export class $DecimalStyle {
        static ofDefaultLocale(): $DecimalStyle;
        withZeroDigit(arg0: string): $DecimalStyle;
        withPositiveSign(arg0: string): $DecimalStyle;
        withNegativeSign(arg0: string): $DecimalStyle;
        withDecimalSeparator(arg0: string): $DecimalStyle;
        getPositiveSign(): string;
        getNegativeSign(): string;
        getZeroDigit(): string;
        getDecimalSeparator(): string;
        static getAvailableLocales(): $Set<$Locale>;
        static of(arg0: $Locale): $DecimalStyle;
        static STANDARD: $DecimalStyle;
        get positiveSign(): string;
        get negativeSign(): string;
        get zeroDigit(): string;
        get decimalSeparator(): string;
        static get availableLocales(): $Set<$Locale>;
    }
    export class $FormatStyle extends $Enum<$FormatStyle> {
        static values(): $FormatStyle[];
        static valueOf(arg0: string): $FormatStyle;
        static MEDIUM: $FormatStyle;
        static FULL: $FormatStyle;
        static LONG: $FormatStyle;
        static SHORT: $FormatStyle;
    }
    /**
     * Values that may be interpreted as {@link $FormatStyle}.
     */
    export type $FormatStyle_ = "full" | "long" | "medium" | "short";
}
