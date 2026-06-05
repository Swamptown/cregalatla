import { $Serializable } from "@package/java/io";
import { $Predicate, $Function_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $CharSequence, $StringBuilder, $StringBuffer } from "@package/java/lang";
import { $Map } from "@package/java/util";

declare module "@package/java/util/regex" {
    export class $Matcher implements $MatchResult {
        namedGroups(): $Map<string, number>;
        hitEnd(): boolean;
        hasMatch(): boolean;
        groupCount(): number;
        regionStart(): number;
        regionEnd(): number;
        requireEnd(): boolean;
        toMatchResult(): $MatchResult;
        usePattern(arg0: $Pattern): $Matcher;
        lookingAt(): boolean;
        static quoteReplacement(arg0: string): string;
        results(): $Stream<$MatchResult>;
        hasTransparentBounds(): boolean;
        useTransparentBounds(arg0: boolean): $Matcher;
        hasAnchoringBounds(): boolean;
        useAnchoringBounds(arg0: boolean): $Matcher;
        appendReplacement(arg0: $StringBuilder, arg1: string): $Matcher;
        appendReplacement(arg0: $StringBuffer, arg1: string): $Matcher;
        appendTail(arg0: $StringBuffer): $StringBuffer;
        appendTail(arg0: $StringBuilder): $StringBuilder;
        region(arg0: number, arg1: number): $Matcher;
        group(): string;
        group(arg0: number): string;
        group(arg0: string): string;
        reset(): $Matcher;
        reset(arg0: $CharSequence): $Matcher;
        end(arg0: number): number;
        end(arg0: string): number;
        end(): number;
        matches(): boolean;
        replaceFirst(arg0: string): string;
        replaceFirst(arg0: $Function_<$MatchResult, string>): string;
        replaceAll(arg0: $Function_<$MatchResult, string>): string;
        replaceAll(arg0: string): string;
        pattern(): $Pattern;
        find(): boolean;
        find(arg0: number): boolean;
        start(arg0: string): number;
        start(): number;
        start(arg0: number): number;
    }
    export class $MatchResult {
    }
    export interface $MatchResult {
        namedGroups(): $Map<string, number>;
        hasMatch(): boolean;
        groupCount(): number;
        group(): string;
        group(arg0: number): string;
        group(arg0: string): string;
        end(): number;
        end(arg0: number): number;
        end(arg0: string): number;
        start(): number;
        start(arg0: number): number;
        start(arg0: string): number;
    }
    export class $Pattern implements $Serializable {
        namedGroups(): $Map<string, number>;
        static quote(arg0: string): string;
        asPredicate(): $Predicate<string>;
        asMatchPredicate(): $Predicate<string>;
        splitAsStream(arg0: $CharSequence): $Stream<string>;
        flags(): number;
        static matches(arg0: string, arg1: $CharSequence): boolean;
        static compile(arg0: string): $Pattern;
        static compile(arg0: string, arg1: number): $Pattern;
        matcher(arg0: $CharSequence): $Matcher;
        split(arg0: $CharSequence): string[];
        split(arg0: $CharSequence, arg1: number): string[];
        splitWithDelimiters(arg0: $CharSequence, arg1: number): string[];
        pattern(): string;
        static DOTALL: number;
        static UNICODE_CASE: number;
        static LITERAL: number;
        static UNICODE_CHARACTER_CLASS: number;
        static CASE_INSENSITIVE: number;
        static CANON_EQ: number;
        static COMMENTS: number;
        static UNIX_LINES: number;
        static MULTILINE: number;
    }
}
