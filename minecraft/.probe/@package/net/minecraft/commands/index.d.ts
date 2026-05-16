import { $ServerFunctionManager, $MinecraftServer } from "@package/net/minecraft/server";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Message, $ResultConsumer, $Message_, $StringReader, $CommandDispatcher, $ParseResults } from "@package/com/mojang/brigadier";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Map_, $Collection_, $Collection, $Map, $Set } from "@package/java/util";
import { $TaskChainer_, $TaskChainer } from "@package/net/minecraft/util";
import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Predicate, $Supplier_, $Function_, $BinaryOperator_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $HolderLookup$Provider, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $CharPredicate_ } from "@package/net/minecraft";
import { $Dynamic2CommandExceptionType, $CommandSyntaxException, $DynamicCommandExceptionType, $CommandExceptionType, $SimpleCommandExceptionType, $BuiltInExceptionProvider } from "@package/com/mojang/brigadier/exceptions";
import { $ICommandSourceStackExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $LiteralArgumentBuilder, $RequiredArgumentBuilder } from "@package/com/mojang/brigadier/builder";
import { $Iterable_, $Enum, $Record, $Exception } from "@package/java/lang";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $Level } from "@package/net/minecraft/world/level";
import { $ExecutionContext, $TraceCallbacks } from "@package/net/minecraft/commands/execution";
import { $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $OutgoingChatMessage, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientCommandRegistrationEvent$ClientCommandSourceStack } from "@package/dev/architectury/event/events/client";
import { $EntityAnchorArgument$Anchor_, $EntityAnchorArgument$Anchor } from "@package/net/minecraft/commands/arguments";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard } from "@package/net/minecraft/world/scores";
import { $LazyComponentKJS_ } from "@package/dev/latvian/mods/kubejs/core";
import { $CommandFunction } from "@package/net/minecraft/commands/functions";
import { $Vec3, $Vec2, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ArgumentType_ } from "@package/com/mojang/brigadier/arguments";
export * as execution from "@package/net/minecraft/commands/execution";
export * as functions from "@package/net/minecraft/commands/functions";
export * as arguments from "@package/net/minecraft/commands/arguments";
export * as synchronization from "@package/net/minecraft/commands/synchronization";

declare module "@package/net/minecraft/commands" {
    export class $CacheableFunction {
        get(arg0: $ServerFunctionManager): ($CommandFunction<$CommandSourceStack>) | undefined;
        getId(): $ResourceLocation;
        static CODEC: $Codec<$CacheableFunction>;
        constructor(arg0: $ResourceLocation_);
        get id(): $ResourceLocation;
    }
    export class $CommandBuildContext {
        static simple(arg0: $HolderLookup$Provider, arg1: $FeatureFlagSet): $CommandBuildContext;
    }
    export interface $CommandBuildContext extends $HolderLookup$Provider {
    }
    export class $SharedSuggestionProvider {
        static filterResources<T>(arg0: $Iterable_<T>, arg1: string, arg2: string, arg3: $Function_<T, $ResourceLocation>, arg4: $Consumer_<T>): void;
        static filterResources<T>(arg0: $Iterable_<T>, arg1: string, arg2: $Function_<T, $ResourceLocation>, arg3: $Consumer_<T>): void;
        static matchesSubStr(arg0: string, arg1: string): boolean;
        static suggest(arg0: $Iterable_<string>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest<T>(arg0: $Iterable_<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, string>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggest(arg0: string[], arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggest(arg0: $Stream<string>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Stream<$ResourceLocation_>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(arg0: $Iterable_<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, $ResourceLocation>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource<T>(arg0: $Stream<T>, arg1: $SuggestionsBuilder, arg2: $Function_<T, $ResourceLocation>, arg3: $Function_<T, $Message>): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Iterable_<$ResourceLocation>, arg1: $SuggestionsBuilder, arg2: string): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Stream<$ResourceLocation_>, arg1: $SuggestionsBuilder, arg2: string): $CompletableFuture<$Suggestions>;
        static suggestResource(arg0: $Iterable_<$ResourceLocation>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static suggestCoordinates(arg0: string, arg1: $Collection_<$SharedSuggestionProvider$TextCoordinates>, arg2: $SuggestionsBuilder, arg3: $Predicate_<string>): $CompletableFuture<$Suggestions>;
        static suggest2DCoordinates(arg0: string, arg1: $Collection_<$SharedSuggestionProvider$TextCoordinates>, arg2: $SuggestionsBuilder, arg3: $Predicate_<string>): $CompletableFuture<$Suggestions>;
    }
    export interface $SharedSuggestionProvider {
        levels(): $Set<$ResourceKey<$Level>>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        hasPermission(arg0: number): boolean;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getOnlinePlayerNames(): $Collection<string>;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get onlinePlayerNames(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
    }
    export class $CommandSource {
        static NULL: $CommandSource;
    }
    export interface $CommandSource {
        sendSystemMessage(arg0: $Component_): void;
        acceptsSuccess(): boolean;
        acceptsFailure(): boolean;
        shouldInformAdmins(): boolean;
        alwaysAccepts(): boolean;
    }
    export class $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        static resultConsumer<T extends $ExecutionCommandSource<T>>(): $ResultConsumer<T>;
    }
    export interface $ExecutionCommandSource<T extends $ExecutionCommandSource<T>> {
        clearCallbacks(): T;
        withCallback(arg0: $CommandResultCallback_): T;
        hasPermission(arg0: number): boolean;
        callback(): $CommandResultCallback;
        handleError(arg0: $CommandExceptionType, arg1: $Message_, arg2: boolean, arg3: $TraceCallbacks): void;
        handleError(arg0: $CommandSyntaxException, arg1: boolean, arg2: $TraceCallbacks): void;
        dispatcher(): $CommandDispatcher<T>;
        isSilent(): boolean;
        get silent(): boolean;
    }
    export class $CommandSigningContext$SignedArguments extends $Record implements $CommandSigningContext {
        arguments(): $Map<string, $PlayerChatMessage>;
        getArgument(arg0: string): $PlayerChatMessage;
        constructor(arg0: $Map_<string, $PlayerChatMessage_>);
    }
    /**
     * Values that may be interpreted as {@link $CommandSigningContext$SignedArguments}.
     */
    export type $CommandSigningContext$SignedArguments_ = { arguments?: $Map_<string, $PlayerChatMessage_>,  } | [arguments?: $Map_<string, $PlayerChatMessage_>, ];
    export class $CommandResultCallback {
        static chain(arg0: $CommandResultCallback_, arg1: $CommandResultCallback_): $CommandResultCallback;
        static EMPTY: $CommandResultCallback;
    }
    export interface $CommandResultCallback {
        onResult(arg0: boolean, arg1: number): void;
        onFailure(): void;
        onSuccess(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CommandResultCallback}.
     */
    export type $CommandResultCallback_ = ((arg0: boolean, arg1: number) => void);
    export class $CommandSourceStack implements $ExecutionCommandSource<$CommandSourceStack>, $SharedSuggestionProvider, $ICommandSourceStackExtension, $ClientCommandRegistrationEvent$ClientCommandSourceStack {
        getDisplayName(): $Component;
        levels(): $Set<$ResourceKey<$Level>>;
        getLevel(): $ServerLevel;
        getPosition(): $Vec3;
        withSource(arg0: $CommandSource): $CommandSourceStack;
        withMaximumPermission(arg0: number): $CommandSourceStack;
        withAnchor(arg0: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        withSigningContext(arg0: $CommandSigningContext_, arg1: $TaskChainer_): $CommandSourceStack;
        getTextName(): string;
        getEntityOrException(): $Entity;
        isPlayer(): boolean;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        arch$sendSuccess(message: $Supplier_<any>, broadcastToAdmins: boolean): void;
        arch$sendFailure(message: $Component_): void;
        arch$getPlayer(): $LocalPlayer;
        arch$getPosition(): $Vec3;
        arch$getRotation(): $Vec2;
        arch$getLevel(): $ClientLevel;
        sendSuccess(component: $Component_, broadcastToAdmins: boolean): void;
        sendSuccessLazy(component: $LazyComponentKJS_, broadcastToAdmins: boolean): void;
        getPlayerOrException(): $ServerPlayer;
        sendFailure(arg0: $Component_): void;
        getEntity(): $Entity;
        withEntity(arg0: $Entity): $CommandSourceStack;
        withRotation(arg0: $Vec2): $CommandSourceStack;
        getPlayer(): $ServerPlayer;
        sendChatMessage(arg0: $OutgoingChatMessage, arg1: boolean, arg2: $ChatType$Bound_): void;
        shouldFilterMessageTo(arg0: $ServerPlayer): boolean;
        withPosition(arg0: $Vec3_): $CommandSourceStack;
        withCallback(arg0: $CommandResultCallback_): $CommandSourceStack;
        withCallback(arg0: $CommandResultCallback_, arg1: $BinaryOperator_<$CommandResultCallback>): $CommandSourceStack;
        withPermission(arg0: number): $CommandSourceStack;
        hasPermission(arg0: number): boolean;
        getOnlinePlayerNames(): $Collection<string>;
        getSigningContext(): $CommandSigningContext;
        getChatMessageChainer(): $TaskChainer;
        customSuggestion(arg0: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        getAnchor(): $EntityAnchorArgument$Anchor;
        suggestRegistryElements(arg0: $ResourceKey_<$Registry<never>>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder, arg3: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        callback(): $CommandResultCallback;
        handleError(arg0: $CommandExceptionType, arg1: $Message_, arg2: boolean, arg3: $TraceCallbacks): void;
        dispatcher(): $CommandDispatcher<$CommandSourceStack>;
        withLevel(arg0: $ServerLevel): $CommandSourceStack;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        getRotation(): $Vec2;
        facing(arg0: $Vec3_): $CommandSourceStack;
        facing(arg0: $Entity, arg1: $EntityAnchorArgument$Anchor_): $CommandSourceStack;
        isSilent(): boolean;
        getServer(): $MinecraftServer;
        sendSystemMessage(arg0: $Component_): void;
        withSuppressedOutput(): $CommandSourceStack;
        clearCallbacks(): $CommandSourceStack;
        handleError(arg0: $CommandSyntaxException, arg1: boolean, arg2: $TraceCallbacks): void;
        getCustomTabSugggestions(): $Collection<string>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        suggestRegistryElements(arg0: $Registry<never>, arg1: $SharedSuggestionProvider$ElementSuggestionType_, arg2: $SuggestionsBuilder): void;
        getUnsidedLevel(): $Level;
        getAdvancement(arg0: $ResourceLocation_): $AdvancementHolder;
        getRecipeManager(): $RecipeManager;
        getScoreboard(): $Scoreboard;
        source: $CommandSource;
        static ERROR_NOT_ENTITY: $SimpleCommandExceptionType;
        static ERROR_NOT_PLAYER: $SimpleCommandExceptionType;
        constructor(arg0: $CommandSource, arg1: $Vec3_, arg2: $Vec2, arg3: $ServerLevel, arg4: number, arg5: string, arg6: $Component_, arg7: $MinecraftServer, arg8: $Entity);
        constructor(arg0: $CommandSource, arg1: $Vec3_, arg2: $Vec2, arg3: $ServerLevel, arg4: number, arg5: string, arg6: $Component_, arg7: $MinecraftServer, arg8: $Entity, arg9: boolean, arg10: $CommandResultCallback_, arg11: $EntityAnchorArgument$Anchor_, arg12: $CommandSigningContext_, arg13: $TaskChainer_);
        get displayName(): $Component;
        get level(): $ServerLevel;
        get position(): $Vec3;
        get textName(): string;
        get entityOrException(): $Entity;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get playerOrException(): $ServerPlayer;
        get entity(): $Entity;
        get onlinePlayerNames(): $Collection<string>;
        get signingContext(): $CommandSigningContext;
        get chatMessageChainer(): $TaskChainer;
        get allTeams(): $Collection<string>;
        get anchor(): $EntityAnchorArgument$Anchor;
        get rotation(): $Vec2;
        get silent(): boolean;
        get server(): $MinecraftServer;
        get customTabSugggestions(): $Collection<string>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get unsidedLevel(): $Level;
        get recipeManager(): $RecipeManager;
        get scoreboard(): $Scoreboard;
    }
    export class $SharedSuggestionProvider$ElementSuggestionType extends $Enum<$SharedSuggestionProvider$ElementSuggestionType> {
        static values(): $SharedSuggestionProvider$ElementSuggestionType[];
        static valueOf(arg0: string): $SharedSuggestionProvider$ElementSuggestionType;
        shouldSuggestTags(): boolean;
        shouldSuggestElements(): boolean;
        static ELEMENTS: $SharedSuggestionProvider$ElementSuggestionType;
        static ALL: $SharedSuggestionProvider$ElementSuggestionType;
        static TAGS: $SharedSuggestionProvider$ElementSuggestionType;
    }
    /**
     * Values that may be interpreted as {@link $SharedSuggestionProvider$ElementSuggestionType}.
     */
    export type $SharedSuggestionProvider$ElementSuggestionType_ = "tags" | "elements" | "all";
    export class $Commands$ParseFunction {
    }
    export interface $Commands$ParseFunction {
        parse(arg0: $StringReader): void;
    }
    /**
     * Values that may be interpreted as {@link $Commands$ParseFunction}.
     */
    export type $Commands$ParseFunction_ = ((arg0: $StringReader) => void);
    export class $Commands {
        static validate(): void;
        static argument<T>(arg0: string, arg1: $ArgumentType_<T>): $RequiredArgumentBuilder<$CommandSourceStack, T>;
        static literal(arg0: string): $LiteralArgumentBuilder<$CommandSourceStack>;
        static executeCommandInContext(arg0: $CommandSourceStack, arg1: $Consumer_<$ExecutionContext<$CommandSourceStack>>): void;
        static validateParseResults<S>(arg0: $ParseResults<S>): void;
        static getParseException<S>(arg0: $ParseResults<S>): $CommandSyntaxException;
        static createValidationContext(arg0: $HolderLookup$Provider): $CommandBuildContext;
        static mapSource<S>(arg0: $ParseResults<S>, arg1: $UnaryOperator_<S>): $ParseResults<S>;
        sendCommands(arg0: $ServerPlayer): void;
        performCommand(arg0: $ParseResults<$CommandSourceStack>, arg1: string): void;
        static createValidator(arg0: $Commands$ParseFunction_): $Predicate<string>;
        getDispatcher(): $CommandDispatcher<$CommandSourceStack>;
        performPrefixedCommand(arg0: $CommandSourceStack, arg1: string): void;
        static LEVEL_MODERATORS: number;
        static LEVEL_ALL: number;
        static LEVEL_ADMINS: number;
        static LEVEL_OWNERS: number;
        static LEVEL_GAMEMASTERS: number;
        constructor(arg0: $Commands$CommandSelection_, arg1: $CommandBuildContext);
        get dispatcher(): $CommandDispatcher<$CommandSourceStack>;
    }
    export class $FunctionInstantiationException extends $Exception {
        messageComponent(): $Component;
        constructor(arg0: $Component_);
    }
    export class $SharedSuggestionProvider$TextCoordinates {
        static DEFAULT_GLOBAL: $SharedSuggestionProvider$TextCoordinates;
        static DEFAULT_LOCAL: $SharedSuggestionProvider$TextCoordinates;
        x: string;
        y: string;
        z: string;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    export class $Commands$CommandSelection extends $Enum<$Commands$CommandSelection> {
        static values(): $Commands$CommandSelection[];
        static valueOf(arg0: string): $Commands$CommandSelection;
        static ALL: $Commands$CommandSelection;
        static INTEGRATED: $Commands$CommandSelection;
        static DEDICATED: $Commands$CommandSelection;
        includeIntegrated: boolean;
        includeDedicated: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Commands$CommandSelection}.
     */
    export type $Commands$CommandSelection_ = "all" | "dedicated" | "integrated";
    export class $CommandSigningContext {
        static ANONYMOUS: $CommandSigningContext;
    }
    export interface $CommandSigningContext {
        getArgument(arg0: string): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $CommandSigningContext}.
     */
    export type $CommandSigningContext_ = ((arg0: string) => $PlayerChatMessage_);
    export class $BrigadierExceptions implements $BuiltInExceptionProvider {
        doubleTooLow(): $Dynamic2CommandExceptionType;
        doubleTooHigh(): $Dynamic2CommandExceptionType;
        floatTooLow(): $Dynamic2CommandExceptionType;
        floatTooHigh(): $Dynamic2CommandExceptionType;
        integerTooLow(): $Dynamic2CommandExceptionType;
        integerTooHigh(): $Dynamic2CommandExceptionType;
        longTooLow(): $Dynamic2CommandExceptionType;
        longTooHigh(): $Dynamic2CommandExceptionType;
        literalIncorrect(): $DynamicCommandExceptionType;
        readerExpectedStartOfQuote(): $SimpleCommandExceptionType;
        readerExpectedEndOfQuote(): $SimpleCommandExceptionType;
        readerInvalidEscape(): $DynamicCommandExceptionType;
        readerInvalidBool(): $DynamicCommandExceptionType;
        readerInvalidInt(): $DynamicCommandExceptionType;
        readerExpectedInt(): $SimpleCommandExceptionType;
        readerInvalidLong(): $DynamicCommandExceptionType;
        readerExpectedLong(): $SimpleCommandExceptionType;
        readerInvalidDouble(): $DynamicCommandExceptionType;
        readerExpectedDouble(): $SimpleCommandExceptionType;
        readerInvalidFloat(): $DynamicCommandExceptionType;
        readerExpectedFloat(): $SimpleCommandExceptionType;
        readerExpectedBool(): $SimpleCommandExceptionType;
        readerExpectedSymbol(): $DynamicCommandExceptionType;
        dispatcherUnknownCommand(): $SimpleCommandExceptionType;
        dispatcherUnknownArgument(): $SimpleCommandExceptionType;
        dispatcherExpectedArgumentSeparator(): $SimpleCommandExceptionType;
        dispatcherParseException(): $DynamicCommandExceptionType;
        constructor();
    }
    export class $ParserUtils {
        static parseJson<T>(arg0: $HolderLookup$Provider, arg1: $StringReader, arg2: $Codec<T>): T;
        static readWhile(arg0: $StringReader, arg1: $CharPredicate_): string;
        constructor();
    }
}
