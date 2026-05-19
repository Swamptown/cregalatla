import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $SuggestionProvider_, $SuggestionProvider } from "@package/com/mojang/brigadier/suggestion";
import { $Command_, $SingleRedirectModifier_, $Command, $RedirectModifier, $RedirectModifier_ } from "@package/com/mojang/brigadier";
import { $Collection } from "@package/java/util";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";
import { $ArgumentType, $ArgumentType_ } from "@package/com/mojang/brigadier/arguments";

declare module "@package/com/mojang/brigadier/builder" {
    export class $LiteralArgumentBuilder<S> extends $ArgumentBuilder<S, $LiteralArgumentBuilder<S>> {
        static literal<S>(arg0: string): $LiteralArgumentBuilder<S>;
        getLiteral(): string;
    }
    export class $ArgumentBuilder<S, T extends $ArgumentBuilder<S, T>> {
        getRedirect(): $CommandNode<S>;
        executes(arg0: $Command_<S>): T;
        getRequirement(): $Predicate<S>;
        isFork(): boolean;
        getRedirectModifier(): $RedirectModifier<S>;
        then(arg0: $ArgumentBuilder<S, never>): T;
        then(arg0: $CommandNode<S>): T;
        getCommand(): $Command<S>;
        fork(arg0: $CommandNode<S>, arg1: $RedirectModifier_<S>): T;
        redirect(arg0: $CommandNode<S>, arg1: $SingleRedirectModifier_<S>): T;
        redirect(arg0: $CommandNode<S>): T;
        requires(arg0: $Predicate_<S>): T;
        build(): $CommandNode<S>;
        getArguments(): $Collection<$CommandNode<S>>;
        forward(arg0: $CommandNode<S>, arg1: $RedirectModifier_<S>, arg2: boolean): T;
        constructor();
        get requirement(): $Predicate<S>;
        get redirectModifier(): $RedirectModifier<S>;
        get command(): $Command<S>;
        get arguments(): $Collection<$CommandNode<S>>;
    }
    export class $RequiredArgumentBuilder<S, T> extends $ArgumentBuilder<S, $RequiredArgumentBuilder<S, T>> {
        getName(): string;
        getType(): $ArgumentType<$RequiredArgumentBuilder<S, T>>;
        static argument<S, T>(arg0: string, arg1: $ArgumentType_<T>): $RequiredArgumentBuilder<S, T>;
        suggests(arg0: $SuggestionProvider_<S>): $RequiredArgumentBuilder<S, $RequiredArgumentBuilder<S, T>>;
        getSuggestionsProvider(): $SuggestionProvider<S>;
        get name(): string;
        get type(): $ArgumentType<$RequiredArgumentBuilder<S, T>>;
        get suggestionsProvider(): $SuggestionProvider<S>;
    }
}
