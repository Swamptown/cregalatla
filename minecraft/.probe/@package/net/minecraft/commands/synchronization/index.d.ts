import { $JsonObject_, $JsonObject } from "@package/com/google/gson";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Map, $Set } from "@package/java/util";
import { $CommandNode } from "@package/com/mojang/brigadier/tree";
import { $SharedSuggestionProvider, $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Supplier_, $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $SuggestionProvider_, $SuggestionProvider } from "@package/com/mojang/brigadier/suggestion";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Class } from "@package/java/lang";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
export * as brigadier from "@package/net/minecraft/commands/synchronization/brigadier";

declare module "@package/net/minecraft/commands/synchronization" {
    export class $SingletonArgumentInfo<A extends $ArgumentType<never>> implements $ArgumentTypeInfo<A, $SingletonArgumentInfo$Template> {
        serializeToNetwork(arg0: $SingletonArgumentInfo$Template, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): $SingletonArgumentInfo$Template;
        serializeToJson(arg0: $SingletonArgumentInfo$Template, arg1: $JsonObject_): void;
        static contextFree<T extends $ArgumentType<never>>(arg0: $Supplier_<T>): $SingletonArgumentInfo<T>;
        static contextAware<T extends $ArgumentType<never>>(arg0: $Function_<$CommandBuildContext, T>): $SingletonArgumentInfo<T>;
        unpack(arg0: A): $SingletonArgumentInfo$Template;
    }
    export class $ArgumentTypeInfos {
        static registerByClass<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>, I extends $ArgumentTypeInfo<A, T>>(arg0: $Class<A>, arg1: I): I;
        static isClassRecognized(arg0: $Class<never>): boolean;
        static byClass<A extends $ArgumentType<never>>(arg0: A): $ArgumentTypeInfo<A, never>;
        static bootstrap(arg0: $Registry<$ArgumentTypeInfo_<never, never>>): $ArgumentTypeInfo<never, never>;
        static unpack<A extends $ArgumentType<never>>(arg0: A): $ArgumentTypeInfo$Template<A>;
        static BY_CLASS: $Map<$Class<never>, $ArgumentTypeInfo<never, never>>;
        constructor();
    }
    export class $SuggestionProviders$Wrapper implements $SuggestionProvider<$SharedSuggestionProvider> {
    }
    export interface $ArgumentTypeInfo<A, T> extends RegistryMarked<RegistryTypes.CommandArgumentTypeTag, RegistryTypes.CommandArgumentType> {}
    export class $ArgumentUtils {
        static findUsedArgumentTypes<T>(arg0: $CommandNode<T>): $Set<$ArgumentType<never>>;
        static serializeNodeToJson<S>(arg0: $CommandDispatcher<S>, arg1: $CommandNode<S>): $JsonObject;
        static createNumberFlags(arg0: boolean, arg1: boolean): number;
        static numberHasMin(arg0: number): boolean;
        static numberHasMax(arg0: number): boolean;
        constructor();
    }
    export class $ArgumentTypeInfo<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>> {
    }
    export interface $ArgumentTypeInfo<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>> {
        serializeToNetwork(arg0: T, arg1: $FriendlyByteBuf): void;
        deserializeFromNetwork(arg0: $FriendlyByteBuf): T;
        serializeToJson(arg0: T, arg1: $JsonObject_): void;
        unpack(arg0: A): T;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentTypeInfo}.
     */
    export type $ArgumentTypeInfo_<A, T> = RegistryTypes.CommandArgumentType;
    export class $ArgumentTypeInfo$Template<A extends $ArgumentType<never>> {
    }
    export interface $ArgumentTypeInfo$Template<A extends $ArgumentType<never>> {
        type(): $ArgumentTypeInfo<A, never>;
        instantiate(arg0: $CommandBuildContext): A;
    }
    export class $SingletonArgumentInfo$Template implements $ArgumentTypeInfo$Template<A> {
        type(): $ArgumentTypeInfo<A, never>;
        instantiate(arg0: $CommandBuildContext): A;
        this$0: $SingletonArgumentInfo<any>;
    }
    export class $SuggestionProviders {
        static safelySwap(arg0: $SuggestionProvider_<$SharedSuggestionProvider>): $SuggestionProvider<$SharedSuggestionProvider>;
        static getProvider(arg0: $ResourceLocation_): $SuggestionProvider<$SharedSuggestionProvider>;
        static getName(arg0: $SuggestionProvider_<$SharedSuggestionProvider>): $ResourceLocation;
        static register<S extends $SharedSuggestionProvider>(arg0: $ResourceLocation_, arg1: $SuggestionProvider_<$SharedSuggestionProvider>): $SuggestionProvider<S>;
        static AVAILABLE_SOUNDS: $SuggestionProvider<$CommandSourceStack>;
        static ALL_RECIPES: $SuggestionProvider<$CommandSourceStack>;
        static SUMMONABLE_ENTITIES: $SuggestionProvider<$CommandSourceStack>;
        static ASK_SERVER: $SuggestionProvider<$SharedSuggestionProvider>;
        constructor();
    }
}
