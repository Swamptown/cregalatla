import { $Stream } from "@package/java/util/stream";
import { $Object, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
export * as commands from "@package/net/minecraft/util/parsing/packrat/commands";

declare module "@package/net/minecraft/util/parsing/packrat" {
    export class $ErrorEntry<S> extends $Record {
        reason(): $Object;
        cursor(): number;
        suggestions(): $SuggestionSupplier<S>;
        constructor(arg0: number, arg1: $SuggestionSupplier_<S>, arg2: $Object);
    }
    /**
     * Values that may be interpreted as {@link $ErrorEntry}.
     */
    export type $ErrorEntry_<S> = { reason?: $Object, suggestions?: $SuggestionSupplier_<any>, cursor?: number,  } | [reason?: $Object, suggestions?: $SuggestionSupplier_<any>, cursor?: number, ];
    export class $ParseState$CacheEntry<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ParseState$CacheEntry}.
     */
    export type $ParseState$CacheEntry_<T> = { mark?: number, value?: (T) | undefined,  } | [mark?: number, value?: (T) | undefined, ];
    export class $Dictionary<S> {
        get<T>(arg0: $Atom_<T>): $Rule<S, T>;
        put<T>(arg0: $Atom_<T>, arg1: $Rule_<S, T>): void;
        put<T>(arg0: $Atom_<T>, arg1: $Term_<S>, arg2: $Rule$SimpleRuleAction_<T>): void;
        put<T>(arg0: $Atom_<T>, arg1: $Term_<S>, arg2: $Rule$RuleAction_<S, T>): void;
        constructor();
    }
    export class $ErrorCollector$LongestOnly<S> implements $ErrorCollector<S> {
        store(arg0: number, arg1: $SuggestionSupplier_<S>, arg2: $Object): void;
        entries(): $List<$ErrorEntry<S>>;
        finish(arg0: number): void;
        cursor(): number;
        store(arg0: number, arg1: $Object): void;
        constructor();
    }
    export class $Atom<T> extends $Record {
        name(): string;
        static of<T>(arg0: string): $Atom<T>;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $Atom}.
     */
    export type $Atom_<T> = { name?: string,  } | [name?: string, ];
    export class $Term$Marker<S, T> extends $Record implements $Term<S> {
        name(): $Atom<T>;
        value(): T;
        parse(arg0: $ParseState<S>, arg1: $Scope, arg2: $Control_): boolean;
        constructor(arg0: $Atom_<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $Term$Marker}.
     */
    export type $Term$Marker_<S, T> = { name?: $Atom_<any>, value?: any,  } | [name?: $Atom_<any>, value?: any, ];
    export class $Term$Reference<S, T> extends $Record implements $Term<S> {
        name(): $Atom<T>;
        parse(arg0: $ParseState<S>, arg1: $Scope, arg2: $Control_): boolean;
        constructor(arg0: $Atom_<T>);
    }
    /**
     * Values that may be interpreted as {@link $Term$Reference}.
     */
    export type $Term$Reference_<S, T> = { name?: $Atom_<any>,  } | [name?: $Atom_<any>, ];
    export class $Term<S> {
        static empty<S>(): $Term<S>;
        static optional<S>(arg0: $Term_<S>): $Term<S>;
        static sequence<S>(...arg0: $Term_<S>[]): $Term<S>;
        static cut<S>(): $Term<S>;
        static alternative<S>(...arg0: $Term_<S>[]): $Term<S>;
        static named<S>(arg0: $Atom_<never>): $Term<S>;
        static marker<S, T>(arg0: $Atom_<T>, arg1: T): $Term<S>;
    }
    export interface $Term<S> {
        parse(arg0: $ParseState<S>, arg1: $Scope, arg2: $Control_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Term}.
     */
    export type $Term_<S> = ((arg0: $ParseState<S>, arg1: $Scope, arg2: $Control) => boolean);
    export class $Control {
        static UNBOUND: $Control;
    }
    export interface $Control {
        cut(): void;
    }
    /**
     * Values that may be interpreted as {@link $Control}.
     */
    export type $Control_ = (() => void);
    export class $Term$Sequence<S> extends $Record implements $Term<S> {
        elements(): $List<$Term<S>>;
        parse(arg0: $ParseState<S>, arg1: $Scope, arg2: $Control_): boolean;
        constructor(arg0: $List_<$Term_<S>>);
    }
    /**
     * Values that may be interpreted as {@link $Term$Sequence}.
     */
    export type $Term$Sequence_<S> = { elements?: $List_<$Term_<any>>,  } | [elements?: $List_<$Term_<any>>, ];
    export class $ErrorCollector<S> {
    }
    export interface $ErrorCollector<S> {
        store(arg0: number, arg1: $SuggestionSupplier_<S>, arg2: $Object): void;
        store(arg0: number, arg1: $Object): void;
        finish(arg0: number): void;
    }
    export class $Scope {
        get<T>(arg0: $Atom_<T>): T;
        put<T>(arg0: $Atom_<T>, arg1: T): void;
        putAll(arg0: $Scope): void;
        getOrDefault<T>(arg0: $Atom_<T>, arg1: T): T;
        getAnyOrThrow<T>(...arg0: $Atom_<T>[]): T;
        getAny<T>(...arg0: $Atom_<T>[]): T;
        getOrThrow<T>(arg0: $Atom_<T>): T;
        constructor();
    }
    export class $ParseState$CacheKey<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ParseState$CacheKey}.
     */
    export type $ParseState$CacheKey_<T> = { name?: $Atom_<any>, mark?: number,  } | [name?: $Atom_<any>, mark?: number, ];
    export class $ParseState<S> {
        parse<T>(arg0: $Atom_<T>): (T) | undefined;
        input(): S;
        mark(): number;
        parseTopRule<T>(arg0: $Atom_<T>): (T) | undefined;
        errorCollector(): $ErrorCollector<S>;
        restore(arg0: number): void;
        constructor(arg0: $Dictionary<S>, arg1: $ErrorCollector<S>);
    }
    export class $Rule$RuleAction<S, T> {
    }
    export interface $Rule$RuleAction<S, T> {
        run(arg0: $ParseState<S>, arg1: $Scope): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Rule$RuleAction}.
     */
    export type $Rule$RuleAction_<S, T> = ((arg0: $ParseState<S>, arg1: $Scope) => (T) | undefined);
    export class $Term$Alternative<S> extends $Record implements $Term<S> {
        elements(): $List<$Term<S>>;
        parse(arg0: $ParseState<S>, arg1: $Scope, arg2: $Control_): boolean;
        constructor(arg0: $List_<$Term_<S>>);
    }
    /**
     * Values that may be interpreted as {@link $Term$Alternative}.
     */
    export type $Term$Alternative_<S> = { elements?: $List_<$Term_<any>>,  } | [elements?: $List_<$Term_<any>>, ];
    export class $SuggestionSupplier<S> {
        static empty<S>(): $SuggestionSupplier<S>;
    }
    export interface $SuggestionSupplier<S> {
        possibleValues(arg0: $ParseState<S>): $Stream<string>;
    }
    /**
     * Values that may be interpreted as {@link $SuggestionSupplier}.
     */
    export type $SuggestionSupplier_<S> = ((arg0: $ParseState<S>) => $Stream<string>);
    export class $Rule<S, T> {
        static fromTerm<S, T>(arg0: $Term_<S>, arg1: $Rule$SimpleRuleAction_<T>): $Rule<S, T>;
        static fromTerm<S, T>(arg0: $Term_<S>, arg1: $Rule$RuleAction_<S, T>): $Rule<S, T>;
    }
    export interface $Rule<S, T> {
        parse(arg0: $ParseState<S>): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Rule}.
     */
    export type $Rule_<S, T> = ((arg0: $ParseState<S>) => (T) | undefined);
    export class $Rule$WrappedTerm<S, T> extends $Record implements $Rule<S, T> {
        action(): $Rule$RuleAction<S, T>;
        parse(arg0: $ParseState<S>): (T) | undefined;
        child(): $Term<S>;
        constructor(arg0: $Rule$RuleAction_<S, T>, arg1: $Term_<S>);
    }
    /**
     * Values that may be interpreted as {@link $Rule$WrappedTerm}.
     */
    export type $Rule$WrappedTerm_<S, T> = { action?: $Rule$RuleAction_<any, any>, child?: $Term_<any>,  } | [action?: $Rule$RuleAction_<any, any>, child?: $Term_<any>, ];
    export class $Rule$SimpleRuleAction<T> {
    }
    export interface $Rule$SimpleRuleAction<T> {
        run(arg0: $Scope): T;
    }
    /**
     * Values that may be interpreted as {@link $Rule$SimpleRuleAction}.
     */
    export type $Rule$SimpleRuleAction_<T> = ((arg0: $Scope) => T);
    export class $Term$Maybe<S> extends $Record implements $Term<S> {
        parse(arg0: $ParseState<S>, arg1: $Scope, arg2: $Control_): boolean;
        term(): $Term<S>;
        constructor(arg0: $Term_<S>);
    }
    /**
     * Values that may be interpreted as {@link $Term$Maybe}.
     */
    export type $Term$Maybe_<S> = { term?: $Term_<any>,  } | [term?: $Term_<any>, ];
}
