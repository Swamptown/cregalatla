import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Message_, $Message } from "@package/com/mojang/brigadier";
import { $Comparable } from "@package/java/lang";
import { $StringRange, $CommandContext } from "@package/com/mojang/brigadier/context";
import { $List_, $Collection_, $List } from "@package/java/util";

declare module "@package/com/mojang/brigadier/suggestion" {
    export class $SuggestionsBuilder {
        restart(): $SuggestionsBuilder;
        getRemainingLowerCase(): string;
        suggest(arg0: string, arg1: $Message_): $SuggestionsBuilder;
        suggest(arg0: string): $SuggestionsBuilder;
        suggest(arg0: number): $SuggestionsBuilder;
        suggest(arg0: number, arg1: $Message_): $SuggestionsBuilder;
        buildFuture(): $CompletableFuture<$Suggestions>;
        createOffset(arg0: number): $SuggestionsBuilder;
        getInput(): string;
        getRemaining(): string;
        add(arg0: $SuggestionsBuilder): $SuggestionsBuilder;
        build(): $Suggestions;
        getStart(): number;
        constructor(arg0: string, arg1: string, arg2: number);
        constructor(arg0: string, arg1: number);
        get remainingLowerCase(): string;
        get input(): string;
        get remaining(): string;
        get start(): number;
    }
    export class $Suggestions {
        getRange(): $StringRange;
        isEmpty(): boolean;
        static merge(arg0: string, arg1: $Collection_<$Suggestions>): $Suggestions;
        static empty(): $CompletableFuture<$Suggestions>;
        static create(arg0: string, arg1: $Collection_<$Suggestion>): $Suggestions;
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
        getTooltip(): $Message;
        getRange(): $StringRange;
        expand(arg0: string, arg1: $StringRange): $Suggestion;
        compareTo(arg0: $Suggestion): number;
        apply(arg0: string): string;
        compareToIgnoreCase(arg0: $Suggestion): number;
        getText(): string;
        constructor(arg0: $StringRange, arg1: string, arg2: $Message_);
        constructor(arg0: $StringRange, arg1: string);
        get tooltip(): $Message;
        get range(): $StringRange;
        get text(): string;
    }
}
