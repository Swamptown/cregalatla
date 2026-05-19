import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $CreativeModeTab_, $Item_, $CreativeModeTab, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Set } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";
import { $ItemStackSet, $ItemPredicate } from "@package/dev/latvian/mods/kubejs/item";
import { $Predicate, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $IngredientType, $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@package/dev/latvian/mods/kubejs/ingredient" {
    export class $NamespaceIngredient extends $Record implements $KubeJSIngredient {
        namespace(): string;
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        asIngredient(): $Ingredient;
        getStacks(): $ItemStackSet;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getDisplayStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        isWildcard(): boolean;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$NamespaceIngredient>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $NamespaceIngredient>;
        constructor(namespace: string);
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get stackArray(): $ItemStack[];
        get displayStacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NamespaceIngredient}.
     */
    export type $NamespaceIngredient_ = { namespace?: string,  } | [namespace?: string, ];
    export class $KubeJSIngredient {
    }
    export interface $KubeJSIngredient extends $ICustomIngredient, $ItemPredicate {
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        test(stack: $ItemStack_): boolean;
        isSimple(): boolean;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
    }
    export class $KubeJSIngredients {
        static NAMESPACE: $Supplier<$IngredientType<$NamespaceIngredient>>;
        static WILDCARD: $Supplier<$IngredientType<$WildcardIngredient>>;
        static REGEX: $Supplier<$IngredientType<$RegExIngredient>>;
        static CREATIVE_TAB: $Supplier<$IngredientType<$CreativeTabIngredient>>;
        static REGISTRY: $DeferredRegister<$IngredientType<never>>;
    }
    export interface $KubeJSIngredients {
    }
    export class $CreativeTabIngredient extends $Record implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        tab(): $CreativeModeTab;
        getType(): $IngredientType<never>;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        asIngredient(): $Ingredient;
        getStacks(): $ItemStackSet;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getDisplayStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        isWildcard(): boolean;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$CreativeTabIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CreativeTabIngredient>;
        constructor(tab: $CreativeModeTab_);
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get stackArray(): $ItemStack[];
        get displayStacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CreativeTabIngredient}.
     */
    export type $CreativeTabIngredient_ = { tab?: $CreativeModeTab_,  } | [tab?: $CreativeModeTab_, ];
    export class $RegExIngredient extends $Record implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        pattern(): $Pattern;
        getType(): $IngredientType<never>;
        patternString(): string;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        asIngredient(): $Ingredient;
        getStacks(): $ItemStackSet;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getDisplayStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        isWildcard(): boolean;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$RegExIngredient>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RegExIngredient>;
        constructor(pattern: $Pattern);
        constructor(pattern: $Pattern, patternString: string);
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get stackArray(): $ItemStack[];
        get displayStacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get wildcard(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RegExIngredient}.
     */
    export type $RegExIngredient_ = { pattern?: $Pattern, patternString?: string,  } | [pattern?: $Pattern, patternString?: string, ];
    export class $WildcardIngredient implements $KubeJSIngredient {
        test(stack: $ItemStack_): boolean;
        getType(): $IngredientType<never>;
        kjs$canBeUsedForMatching(): boolean;
        getItems(): $Stream<$ItemStack>;
        isSimple(): boolean;
        toVanilla(): $Ingredient;
        getItemIds(): $Set<string>;
        getFirst(): $ItemStack;
        asIngredient(): $Ingredient;
        getStacks(): $ItemStackSet;
        getStackArray(): $ItemStack[];
        testItem(item: $Item_): boolean;
        getDisplayStacks(): $ItemStackSet;
        getItemStream(): $Stream<$Item>;
        getItemTypes(): $Set<$Item>;
        isWildcard(): boolean;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$WildcardIngredient>;
        static INSTANCE: $WildcardIngredient;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $WildcardIngredient>;
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
        get simple(): boolean;
        get itemIds(): $Set<string>;
        get first(): $ItemStack;
        get stacks(): $ItemStackSet;
        get stackArray(): $ItemStack[];
        get displayStacks(): $ItemStackSet;
        get itemStream(): $Stream<$Item>;
        get itemTypes(): $Set<$Item>;
        get wildcard(): boolean;
    }
}
