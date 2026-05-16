import { $Duration } from "@package/java/time";
import { $Predicate as $Predicate$1, $Predicate_, $Supplier as $Supplier$1, $Function as $Function$1 } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Object, $Iterable, $CharSequence } from "@package/java/lang";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Map } from "@package/java/util";

declare module "@package/com/google/common/base" {
    export class $Supplier<T> {
    }
    export interface $Supplier<T> extends $Supplier$1<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
    export class $Splitter$MapSplitter {
        split(sequence: $CharSequence): $Map<string, string>;
    }
    export class $Predicate<T> {
    }
    export interface $Predicate<T> extends $Predicate$1<T> {
        equals(object: $Object): boolean;
        test(input: T): boolean;
        apply(input: T): boolean;
    }
    export class $Splitter {
        split(sequence: $CharSequence): $Iterable<string>;
        limit(maxItems: number): $Splitter;
        static on(separatorPattern: $Pattern): $Splitter;
        static on(separatorMatcher: $CharMatcher): $Splitter;
        static on(separator: string): $Splitter;
        static on(separator: string): $Splitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        withKeyValueSeparator(keyValueSplitter: $Splitter): $Splitter$MapSplitter;
        withKeyValueSeparator(separator: string): $Splitter$MapSplitter;
        static onPattern(separatorPattern: string): $Splitter;
        omitEmptyStrings(): $Splitter;
        static fixedLength(length: number): $Splitter;
        trimResults(trimmer: $CharMatcher): $Splitter;
        trimResults(): $Splitter;
        splitToList(sequence: $CharSequence): $List<string>;
        splitToStream(sequence: $CharSequence): $Stream<string>;
    }
    export class $Ticker {
        read(): number;
        static systemTicker(): $Ticker;
    }
    export class $Function<F, T> {
    }
    export interface $Function<F, T> extends $Function$1<F, T> {
        equals(object: $Object): boolean;
        apply(input: F): F;
    }
    export class $Stopwatch {
        reset(): $Stopwatch;
        start(): $Stopwatch;
        stop(): $Stopwatch;
        elapsed(): $Duration;
        elapsed(desiredUnit: $TimeUnit_): number;
        isRunning(): boolean;
        static createStarted(): $Stopwatch;
        static createStarted(ticker: $Ticker): $Stopwatch;
        static createUnstarted(): $Stopwatch;
        static createUnstarted(ticker: $Ticker): $Stopwatch;
        get running(): boolean;
    }
    export class $CharMatcher implements $Predicate<string> {
        matches(c: string): boolean;
        /**
         * @deprecated
         */
        apply(character: string): boolean;
        static ascii(): $CharMatcher;
        static is(match: string): $CharMatcher;
        static noneOf(sequence: $CharSequence): $CharMatcher;
        /**
         * @deprecated
         */
        static digit(): $CharMatcher;
        static inRange(startInclusive: string, endInclusive: string): $CharMatcher;
        or(other: $CharMatcher): $CharMatcher;
        negate(): $CharMatcher;
        and(other: $CharMatcher): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLowerCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaUpperCase(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaDigit(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetter(): $CharMatcher;
        /**
         * @deprecated
         */
        static javaLetterOrDigit(): $CharMatcher;
        static any(): $CharMatcher;
        static whitespace(): $CharMatcher;
        static anyOf(sequence: $CharSequence): $CharMatcher;
        static none(): $CharMatcher;
        retainFrom(sequence: $CharSequence): string;
        removeFrom(sequence: $CharSequence): string;
        static breakingWhitespace(): $CharMatcher;
        static javaIsoControl(): $CharMatcher;
        /**
         * @deprecated
         */
        static invisible(): $CharMatcher;
        /**
         * @deprecated
         */
        static singleWidth(): $CharMatcher;
        static isNot(match: string): $CharMatcher;
        static forPredicate(predicate: $Predicate<string>): $CharMatcher;
        precomputed(): $CharMatcher;
        matchesAnyOf(sequence: $CharSequence): boolean;
        matchesAllOf(sequence: $CharSequence): boolean;
        matchesNoneOf(sequence: $CharSequence): boolean;
        indexIn(sequence: $CharSequence, start: number): number;
        indexIn(sequence: $CharSequence): number;
        lastIndexIn(sequence: $CharSequence): number;
        countIn(sequence: $CharSequence): number;
        replaceFrom(sequence: $CharSequence, replacement: $CharSequence): string;
        replaceFrom(sequence: $CharSequence, replacement: string): string;
        trimFrom(sequence: $CharSequence): string;
        trimLeadingFrom(sequence: $CharSequence): string;
        trimTrailingFrom(sequence: $CharSequence): string;
        collapseFrom(sequence: $CharSequence, replacement: string): string;
        trimAndCollapseFrom(sequence: $CharSequence, replacement: string): string;
        test(input: string): boolean;
        or(arg0: $Predicate_<string>): $Predicate$1<string>;
        and(arg0: $Predicate_<string>): $Predicate$1<string>;
    }
}
