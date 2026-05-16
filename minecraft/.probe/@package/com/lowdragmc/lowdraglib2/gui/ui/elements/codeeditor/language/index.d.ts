import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Style } from "@package/net/minecraft/network/chat";
import { $Set_, $List, $List_, $Map, $Set } from "@package/java/util";
import { $Pattern, $Matcher } from "@package/java/util/regex";
import { $Record } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor/language" {
    export class $StyleManager {
        getStyleMap(): $Map<string, $Style>;
        setDefaultStyle(arg0: $Style): void;
        getStyleForTokenType(arg0: $TokenType): $Style;
        getDefaultStyle(): $Style;
        defaultStyle: $Style;
        static DEFAULT: $StyleManager;
        constructor();
        get styleMap(): $Map<string, $Style>;
    }
    export class $SyntaxParser {
        parseLine(arg0: string): $List<$Token>;
        getLanguageDefinition(): $ILanguageDefinition;
        setLanguageDefinition(arg0: $ILanguageDefinition): void;
        constructor();
    }
    export class $Token extends $Record {
        type(): $TokenType;
        endIndex(): number;
        startIndex(): number;
        text(): string;
        constructor(text: string, type: $TokenType, startIndex: number, endIndex: number);
    }
    /**
     * Values that may be interpreted as {@link $Token}.
     */
    export type $Token_ = { type?: $TokenType, startIndex?: number, endIndex?: number, text?: string,  } | [type?: $TokenType, startIndex?: number, endIndex?: number, text?: string, ];
    export class $LanguageDefinition implements $ILanguageDefinition {
        getName(): string;
        compileTokenPattern(): $LanguageDefinition;
        getTokenPattern(): $Pattern;
        shouldIncreaseIndentation(arg0: string): boolean;
        getTypesInOrder(): $List<$TokenType>;
        getIndentations(): $Set<string>;
        getTokenType(arg0: $Matcher): $TokenType;
        constructor(arg0: string, arg1: $List_<$TokenType>, arg2: $Set_<string>);
        get name(): string;
        get tokenPattern(): $Pattern;
        get typesInOrder(): $List<$TokenType>;
        get indentations(): $Set<string>;
    }
    export class $Languages {
        static JAVASCRIPT: $LanguageDefinition;
        static XML: $LanguageDefinition;
        static LSS: $LanguageDefinition;
    }
    export class $TokenType implements $Predicate<$Matcher> {
        test(arg0: $Matcher): boolean;
        getMatcher(): $Predicate<$Matcher>;
        setMatcher(arg0: $Predicate_<$Matcher>): $TokenType;
        getPattern(): string;
        setPattern(arg0: string): $TokenType;
        hasPattern(): boolean;
        or(arg0: $Predicate_<$Matcher>): $Predicate<$Matcher>;
        negate(): $Predicate<$Matcher>;
        and(arg0: $Predicate_<$Matcher>): $Predicate<$Matcher>;
        name: string;
        constructor(arg0: string);
    }
    export class $ILanguageDefinition {
    }
    export interface $ILanguageDefinition {
        getName(): string;
        getTokenPattern(): $Pattern;
        shouldIncreaseIndentation(arg0: string): boolean;
        getTokenType(arg0: $Matcher): $TokenType;
        get name(): string;
        get tokenPattern(): $Pattern;
    }
}
