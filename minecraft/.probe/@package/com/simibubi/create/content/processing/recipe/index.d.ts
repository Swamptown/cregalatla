import { $BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel_ } from "@package/com/simibubi/create/content/processing/burner";
import { $RecipeSerializer, $Ingredient, $Recipe, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ProcessingRecipeAccessor } from "@package/com/drmangotea/tfmg/mixin/accessor";
import { $KubeCreateOutput } from "@package/dev/latvian/mods/kubejs/create/wrapper";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List, $List_ } from "@package/java/util";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/processing/recipe" {
    export class $ProcessingOutput implements $KubeCreateOutput {
        rollOutput(arg0: $RandomSource): $ItemStack;
        getChance(): number;
        getStack(): $ItemStack;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$ProcessingOutput>;
        /**
         * @deprecated
         */
        static CODEC_OLD: $Codec<$ProcessingOutput>;
        static EMPTY: $ProcessingOutput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingOutput>;
        static CODEC_NEW: $Codec<$ProcessingOutput>;
        constructor(arg0: $ItemStack_, arg1: number);
        constructor(arg0: $Item_, arg1: number, arg2: number);
        constructor(arg0: $Item_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        get chance(): number;
        get stack(): $ItemStack;
    }
    export class $HeatCondition extends $Enum<$HeatCondition> implements $StringRepresentable {
        visualizeAsBlazeBurner(): $BlazeBurnerBlock$HeatLevel;
        testBlazeBurner(arg0: $BlazeBurnerBlock$HeatLevel_): boolean;
        getTranslationKey(): string;
        static values(): $HeatCondition[];
        static valueOf(arg0: string): $HeatCondition;
        getColor(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HeatCondition>;
        static HEATED: $HeatCondition;
        static SUPERHEATED: $HeatCondition;
        static NONE: $HeatCondition;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $HeatCondition>;
        get translationKey(): string;
        get color(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HeatCondition}.
     */
    export type $HeatCondition_ = "none" | "heated" | "superheated";
    export class $ProcessingRecipe$Factory<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>> {
    }
    export interface $ProcessingRecipe$Factory<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>> {
        create(arg0: P): R;
    }
    /**
     * Values that may be interpreted as {@link $ProcessingRecipe$Factory}.
     */
    export type $ProcessingRecipe$Factory_<P, R> = ((arg0: P) => R);
    export class $ProcessingRecipe<I extends $RecipeInput, P extends $ProcessingRecipeParams> implements $Recipe<I>, $ProcessingRecipeAccessor {
        getRollableResultsAsItemStacks(): $List<$ItemStack>;
        getRequiredHeat(): $HeatCondition;
        getProcessingDuration(): number;
        getRollableResults(): $List<$ProcessingOutput>;
        getFluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        getFluidResults(): $NonNullList<$FluidStack>;
        rollResults(arg0: $List_<$ProcessingOutput>, arg1: $RandomSource): $List<$ItemStack>;
        rollResults(arg0: $RandomSource): $List<$ItemStack>;
        enforceNextResult(arg0: $Supplier_<$ItemStack>): void;
        getSerializer(): $RecipeSerializer<never>;
        static streamCodec<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>>(arg0: $ProcessingRecipe$Factory_<P, R>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, P>): $StreamCodec<$RegistryFriendlyByteBuf, R>;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        assemble(arg0: I, arg1: $HolderLookup$Provider): $ItemStack;
        getTypeInfo(): $IRecipeTypeInfo;
        validate(): $List<string>;
        getType(): $RecipeType<never>;
        getParams(): P;
        static codec<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>>(arg0: $ProcessingRecipe$Factory_<P, R>, arg1: $MapCodec_<P>): $MapCodec<R>;
        getGroup(): string;
        isSpecial(): boolean;
        getToastSymbol(): $ItemStack;
        isIncomplete(): boolean;
        showNotification(): boolean;
        getRemainingItems(arg0: I): $NonNullList<$ItemStack>;
        tfmg$ingredients(): $NonNullList<$Ingredient>;
        tfmg$fluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        tfmg$results(): $NonNullList<$ProcessingOutput>;
        tfmg$fluidResults(): $NonNullList<$FluidStack>;
        tfmg$typeInfo(): $IRecipeTypeInfo;
        constructor(arg0: $IRecipeTypeInfo, arg1: P);
        get rollableResultsAsItemStacks(): $List<$ItemStack>;
        get requiredHeat(): $HeatCondition;
        get processingDuration(): number;
        get rollableResults(): $List<$ProcessingOutput>;
        get fluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        get fluidResults(): $NonNullList<$FluidStack>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get typeInfo(): $IRecipeTypeInfo;
        get type(): $RecipeType<never>;
        get params(): P;
        get group(): string;
        get special(): boolean;
        get toastSymbol(): $ItemStack;
        get incomplete(): boolean;
    }
    export class $ProcessingRecipeParams {
        static CODEC: $MapCodec<$ProcessingRecipeParams>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingRecipeParams>;
    }
}
