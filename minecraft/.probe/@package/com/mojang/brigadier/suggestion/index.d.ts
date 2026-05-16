import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Message_, $Message } from "@package/com/mojang/brigadier";
import { $Comparable } from "@package/java/lang";
import { $StringRange, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $List_, $Collection_, $List } from "@package/java/util";

declare module "@package/com/mojang/brigadier/suggestion" {
    export class $SuggestionsBuilder {
        add(arg0: $SuggestionsBuilder): $SuggestionsBuilder;
        build(): $Suggestions;
        getRemaining(): string;
        getInput(): string;
        restart(): $SuggestionsBuilder;
        createOffset(arg0: number): $SuggestionsBuilder;
        suggest(arg0: number, arg1: $Message_): $SuggestionsBuilder;
        suggest(arg0: number): $SuggestionsBuilder;
        suggest(arg0: string, arg1: $Message_): $SuggestionsBuilder;
        suggest(arg0: string): $SuggestionsBuilder;
        buildFuture(): $CompletableFuture<$Suggestions>;
        getRemainingLowerCase(): string;
        getStart(): number;
        constructor(arg0: string, arg1: string, arg2: number);
        constructor(arg0: string, arg1: number);
        get remaining(): string;
        get input(): string;
        get remainingLowerCase(): string;
        get start(): number;
    }
    export class $Suggestions {
        isEmpty(): boolean;
        static merge(arg0: string, arg1: $Collection_<$Suggestions>): $Suggestions;
        static empty(): $CompletableFuture<$Suggestions>;
        static create(arg0: string, arg1: $Collection_<$Suggestion>): $Suggestions;
        getRange(): $StringRange;
        getList(): $List<$Suggestion>;
        constructor(arg0: $StringRange, arg1: $List_<$Suggestion>);
        get range(): $StringRange;
        get list(): $List<$Suggestion>;
    }
    export class $SuggestionProvider<S> {
    }
    export interface $SuggestionProvider<S> {
        getSuggestions(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
    }
    /**
     * Values that may be interpreted as {@link $SuggestionProvider}.
     */
    export type $SuggestionProvider_<S> = ((arg0: $CommandContext<S>, arg1: $SuggestionsBuilder) => $CompletableFuture<$Suggestions>);
    export class $Suggestion implements $Comparable<$Suggestion> {
        expand(arg0: string, arg1: $StringRange): $Suggestion;
        compareTo(arg0: $Suggestion): number;
        apply(arg0: string): string;
        compareToIgnoreCase(arg0: $Suggestion): number;
        getText(): string;
        getRange(): $StringRange;
        getTooltip(): $Message;
        constructor(arg0: $StringRange, arg1: string);
        constructor(arg0: $StringRange, arg1: string, arg2: $Message_);
        get text(): string;
        get range(): $StringRange;
        get tooltip(): $Message;
    }
}
