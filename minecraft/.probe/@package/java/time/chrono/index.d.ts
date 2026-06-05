import { $Serializable } from "@package/java/io";
import { $ZoneOffset, $LocalDate, $Period, $Instant, $ZoneId, $LocalDateTime, $ZonedDateTime, $Clock, $LocalTime } from "@package/java/time";
import { $DateTimeFormatter, $ResolverStyle_, $TextStyle_ } from "@package/java/time/format";
import { $Comparator, $List, $Map_, $Locale, $Set } from "@package/java/util";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $TemporalField, $TemporalAmount_, $Temporal, $ChronoField_, $TemporalUnit, $ValueRange, $TemporalQuery_, $TemporalAccessor, $TemporalAdjuster, $TemporalAmount, $TemporalAdjuster_ } from "@package/java/time/temporal";

declare module "@package/java/time/chrono" {
    export class $IsoEra extends $Enum<$IsoEra> implements $Era {
        static values(): $IsoEra[];
        static valueOf(arg0: string): $IsoEra;
        getValue(): number;
        static of(arg0: number): $IsoEra;
        adjustInto(arg0: $Temporal): $Temporal;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        static CE: $IsoEra;
        static BCE: $IsoEra;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $IsoEra}.
     */
    export type $IsoEra_ = "bce" | "ce";
    export class $ChronoZonedDateTime<D extends $ChronoLocalDate> {
        static timeLineOrder(): $Comparator<$ChronoZonedDateTime<never>>;
        static from(arg0: $TemporalAccessor): $ChronoZonedDateTime<never>;
    }
    export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<$ChronoZonedDateTime<never>> {
        withZoneSameInstant(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withZoneSameLocal(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withLaterOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        minus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        getZone(): $ZoneId;
        getChronology(): $Chronology;
        isAfter(arg0: $ChronoZonedDateTime<never>): boolean;
        isBefore(arg0: $ChronoZonedDateTime<never>): boolean;
        isEqual(arg0: $ChronoZonedDateTime<never>): boolean;
        toEpochSecond(): number;
        toInstant(): $Instant;
        get(arg0: $TemporalField): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoZonedDateTime<never>): number;
        getLong(arg0: $TemporalField): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        with(arg0: $TemporalAdjuster_): $ChronoZonedDateTime<D>;
        query<R>(arg0: $TemporalQuery_<R>): R;
        getOffset(): $ZoneOffset;
        range(arg0: $TemporalField): $ValueRange;
        plus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        toLocalDate(): D;
        toLocalDateTime(): $ChronoLocalDateTime<D>;
        toLocalTime(): $LocalTime;
        withEarlierOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        minus(arg0: number, arg1: $TemporalUnit): $Temporal;
        with(arg0: $TemporalField, arg1: number): $Temporal;
        plus(arg0: number, arg1: $TemporalUnit): $Temporal;
        get zone(): $ZoneId;
        get chronology(): $Chronology;
        get offset(): $ZoneOffset;
    }
    export class $AbstractChronology implements $Chronology {
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        compareTo(arg0: $Chronology): number;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        isIsoBased(): boolean;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        get isoBased(): boolean;
    }
    export class $ChronoPeriod {
        static between(arg0: $ChronoLocalDate, arg1: $ChronoLocalDate): $ChronoPeriod;
    }
    export interface $ChronoPeriod extends $TemporalAmount {
        isNegative(): boolean;
        minus(arg0: $TemporalAmount_): $ChronoPeriod;
        getChronology(): $Chronology;
        getUnits(): $List<$TemporalUnit>;
        negated(): $ChronoPeriod;
        multipliedBy(arg0: number): $ChronoPeriod;
        addTo(arg0: $Temporal): $Temporal;
        subtractFrom(arg0: $Temporal): $Temporal;
        normalized(): $ChronoPeriod;
        get(arg0: $TemporalUnit): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        plus(arg0: $TemporalAmount_): $ChronoPeriod;
        isZero(): boolean;
        get negative(): boolean;
        get chronology(): $Chronology;
        get units(): $List<$TemporalUnit>;
        get zero(): boolean;
    }
    export class $Era {
    }
    export interface $Era extends $TemporalAccessor, $TemporalAdjuster {
        adjustInto(arg0: $Temporal): $Temporal;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        getValue(): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $Era}.
     */
    export type $Era_ = (() => number);
    export class $ChronoLocalDateTime<D extends $ChronoLocalDate> {
        static timeLineOrder(): $Comparator<$ChronoLocalDateTime<never>>;
        static from(arg0: $TemporalAccessor): $ChronoLocalDateTime<never>;
    }
    export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDateTime<never>> {
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        minus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        getChronology(): $Chronology;
        adjustInto(arg0: $Temporal): $Temporal;
        isAfter(arg0: $ChronoLocalDateTime<never>): boolean;
        isBefore(arg0: $ChronoLocalDateTime<never>): boolean;
        atZone(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        isEqual(arg0: $ChronoLocalDateTime<never>): boolean;
        toEpochSecond(arg0: $ZoneOffset): number;
        toInstant(arg0: $ZoneOffset): $Instant;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDateTime<never>): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalUnit): boolean;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        plus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        toLocalDate(): D;
        toLocalTime(): $LocalTime;
        with(arg0: $TemporalAdjuster_): $Temporal;
        with(arg0: $TemporalField, arg1: number): $Temporal;
        get chronology(): $Chronology;
    }
    export class $Chronology {
        static ofLocale(arg0: $Locale): $Chronology;
        static getAvailableChronologies(): $Set<$Chronology>;
        static of(arg0: string): $Chronology;
        static from(arg0: $TemporalAccessor): $Chronology;
        static get availableChronologies(): $Set<$Chronology>;
    }
    export interface $Chronology extends $Comparable<$Chronology> {
        date(arg0: number, arg1: number, arg2: number): $ChronoLocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        date(arg0: $TemporalAccessor): $ChronoLocalDate;
        isLeapYear(arg0: number): boolean;
        eras(): $List<$Era>;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        eraOf(arg0: number): $Era;
        getCalendarType(): string;
        prolepticYear(arg0: $Era_, arg1: number): number;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateYearDay(arg0: number, arg1: number): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        dateEpochDay(arg0: number): $ChronoLocalDate;
        isIsoBased(): boolean;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $Chronology): number;
        getId(): string;
        range(arg0: $ChronoField_): $ValueRange;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        get calendarType(): string;
        get isoBased(): boolean;
        get id(): string;
    }
    export class $ChronoLocalDate {
        static timeLineOrder(): $Comparator<$ChronoLocalDate>;
        static from(arg0: $TemporalAccessor): $ChronoLocalDate;
    }
    export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDate> {
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        minus(arg0: $TemporalAmount_): $ChronoLocalDate;
        getEra(): $Era;
        isLeapYear(): boolean;
        getChronology(): $Chronology;
        lengthOfYear(): number;
        atTime(arg0: $LocalTime): $ChronoLocalDateTime<never>;
        adjustInto(arg0: $Temporal): $Temporal;
        isAfter(arg0: $ChronoLocalDate): boolean;
        isBefore(arg0: $ChronoLocalDate): boolean;
        isEqual(arg0: $ChronoLocalDate): boolean;
        lengthOfMonth(): number;
        toEpochDay(): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDate): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        with(arg0: $TemporalAdjuster_): $ChronoLocalDate;
        query<R>(arg0: $TemporalQuery_<R>): R;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        plus(arg0: $TemporalAmount_): $ChronoLocalDate;
        until(arg0: $ChronoLocalDate): $ChronoPeriod;
        until(arg0: $Temporal, arg1: $TemporalUnit): number;
        with(arg0: $TemporalField, arg1: number): $Temporal;
        get era(): $Era;
        get leapYear(): boolean;
        get chronology(): $Chronology;
    }
    export class $IsoChronology extends $AbstractChronology implements $Serializable {
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $LocalDate;
        date(arg0: number, arg1: number, arg2: number): $LocalDate;
        date(arg0: $TemporalAccessor): $LocalDate;
        localDateTime(arg0: $TemporalAccessor): $LocalDateTime;
        dateYearDay(arg0: number, arg1: number): $LocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $LocalDate;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ZonedDateTime;
        dateEpochDay(arg0: number): $LocalDate;
        period(arg0: number, arg1: number, arg2: number): $Period;
        static INSTANCE: $IsoChronology;
    }
}
