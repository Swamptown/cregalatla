import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IDrawableBuilder, $IDrawable, $IDrawableAnimated, $IDrawableAnimated$StartDirection_, $IDrawableStatic } from "@package/mezz/jei/api/gui/drawable";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $ICraftingGridHelper } from "@package/mezz/jei/api/gui/ingredient";
import { $List, $Set, $List_ } from "@package/java/util";
import { $IIngredientVisibility, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Holder_ } from "@package/net/minecraft/core";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $ITypedIngredient, $IIngredientHelper } from "@package/mezz/jei/api/ingredients";
import { $Stream } from "@package/java/util/stream";
import { $IRecipeManager, $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Object, $Class } from "@package/java/lang";
import { $ITickTimer } from "@package/mezz/jei/api/gui";
import { $IScrollGridWidgetFactory, $IScrollBoxWidget, $IRecipeWidget } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/mezz/jei/api/helpers" {
    export class $ICodecHelper {
    }
    export interface $ICodecHelper {
        getRecipeHolderCodec<T extends $RecipeHolder<never>>(): $Codec<T>;
        getSlowRecipeCategoryCodec<T>(arg0: $IRecipeCategory<T>, arg1: $IRecipeManager): $Codec<T>;
        getIngredientTypeCodec(): $Codec<$IIngredientType<never>>;
        getRecipeTypeCodec(arg0: $IRecipeManager): $Codec<$RecipeType<never>>;
        getTypedIngredientCodec(): $MapCodec<$ITypedIngredient<never>>;
        getTypedIngredientCodec<T>(arg0: $IIngredientType_<T>): $Codec<$ITypedIngredient<T>>;
        get recipeHolderCodec(): $Codec<T>;
        get ingredientTypeCodec(): $Codec<$IIngredientType<never>>;
    }
    export class $IPlatformFluidHelper<T> {
    }
    export interface $IPlatformFluidHelper<T> {
        create(arg0: $Holder_<$Fluid>, arg1: number): T;
        create(arg0: $Holder_<$Fluid>, arg1: number, arg2: $DataComponentPatch_): T;
        getFluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
        bucketVolume(): number;
        get fluidIngredientType(): $IIngredientTypeWithSubtypes<$Fluid, T>;
    }
    export class $IStackHelper {
    }
    export interface $IStackHelper {
        getUidForStack(arg0: $ItemStack_, arg1: $UidContext_): $Object;
        getUidForStack(arg0: $ITypedIngredient<$ItemStack_>, arg1: $UidContext_): $Object;
        /**
         * @deprecated
         */
        getUniqueIdentifierForStack(arg0: $ItemStack_, arg1: $UidContext_): string;
        isEquivalent(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $UidContext_): boolean;
    }
    export class $IJeiHelpers {
    }
    export interface $IJeiHelpers {
        getRecipeType(arg0: $ResourceLocation_): ($RecipeType<never>) | undefined;
        getRecipeType<T>(arg0: $ResourceLocation_, arg1: $Class<T>): ($RecipeType<T>) | undefined;
        getIngredientManager(): $IIngredientManager;
        getColorHelper(): $IColorHelper;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getFocusFactory(): $IFocusFactory;
        getPlatformFluidHelper(): $IPlatformFluidHelper<never>;
        getAllRecipeTypes(): $Stream<$RecipeType<never>>;
        getIngredientVisibility(): $IIngredientVisibility;
        getStackHelper(): $IStackHelper;
        getModIdHelper(): $IModIdHelper;
        getCodecHelper(): $ICodecHelper;
        getGuiHelper(): $IGuiHelper;
        get ingredientManager(): $IIngredientManager;
        get colorHelper(): $IColorHelper;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get focusFactory(): $IFocusFactory;
        get platformFluidHelper(): $IPlatformFluidHelper<never>;
        get allRecipeTypes(): $Stream<$RecipeType<never>>;
        get ingredientVisibility(): $IIngredientVisibility;
        get stackHelper(): $IStackHelper;
        get modIdHelper(): $IModIdHelper;
        get codecHelper(): $ICodecHelper;
        get guiHelper(): $IGuiHelper;
    }
    export class $IColorHelper {
    }
    export interface $IColorHelper {
        getClosestColorName(arg0: number): string;
        getColors(arg0: $ItemStack_, arg1: number): $List<number>;
        getColors(arg0: $TextureAtlasSprite, arg1: number, arg2: number): $List<number>;
    }
    export class $IModIdHelper {
    }
    export interface $IModIdHelper {
        isDisplayingModNameEnabled(): boolean;
        getFormattedModNameForModId(arg0: string): string;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: $ITypedIngredient<T>): $List<$Component>;
        /**
         * @deprecated
         */
        addModNameToIngredientTooltip<T>(arg0: $List_<$Component_>, arg1: T, arg2: $IIngredientHelper<T>): $List<$Component>;
        getModNameForTooltip<T>(arg0: $ITypedIngredient<T>): ($Component) | undefined;
        getModNameForModId(arg0: string): string;
        getModAliases(arg0: string): $Set<string>;
        get displayingModNameEnabled(): boolean;
    }
    export class $IGuiHelper {
    }
    export interface $IGuiHelper {
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: number, arg2: $IDrawableAnimated$StartDirection_, arg3: boolean): $IDrawableAnimated;
        createAnimatedDrawable(arg0: $IDrawableStatic, arg1: $ITickTimer, arg2: $IDrawableAnimated$StartDirection_): $IDrawableAnimated;
        getRecipeFlameFilled(): $IDrawableStatic;
        getRecipeFlameEmpty(): $IDrawableStatic;
        /**
         * @deprecated
         */
        getScrollBoxScrollbarExtraWidth(): number;
        drawableBuilder(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableBuilder;
        getSlotDrawable(): $IDrawableStatic;
        createAnimatedRecipeArrow(arg0: number): $IDrawableAnimated;
        createAnimatedRecipeFlame(arg0: number): $IDrawableAnimated;
        createWidgetFromDrawable(arg0: $IDrawable, arg1: number, arg2: number): $IRecipeWidget;
        createBlankDrawable(arg0: number, arg1: number): $IDrawableStatic;
        createDrawableIngredient<V>(arg0: $ITypedIngredient<V>): $IDrawable;
        createDrawableIngredient<V>(arg0: $IIngredientType_<V>, arg1: V): $IDrawable;
        createCraftingGridHelper(): $ICraftingGridHelper;
        /**
         * @deprecated
         */
        createScrollGridFactory(arg0: number, arg1: number): $IScrollGridWidgetFactory<never>;
        /**
         * @deprecated
         */
        createScrollBoxWidget(arg0: $IDrawable, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createScrollBoxWidget(arg0: number, arg1: number, arg2: number, arg3: number): $IScrollBoxWidget;
        createTickTimer(arg0: number, arg1: number, arg2: boolean): $ITickTimer;
        createDrawable(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number): $IDrawableStatic;
        createDrawableItemStack(arg0: $ItemStack_): $IDrawable;
        createDrawableItemLike(arg0: $ItemLike_): $IDrawable;
        getOutputSlot(): $IDrawableStatic;
        getRecipeArrow(): $IDrawableStatic;
        getRecipeArrowFilled(): $IDrawableStatic;
        getRecipePlusSign(): $IDrawableStatic;
        get recipeFlameFilled(): $IDrawableStatic;
        get recipeFlameEmpty(): $IDrawableStatic;
        get scrollBoxScrollbarExtraWidth(): number;
        get slotDrawable(): $IDrawableStatic;
        get outputSlot(): $IDrawableStatic;
        get recipeArrow(): $IDrawableStatic;
        get recipeArrowFilled(): $IDrawableStatic;
        get recipePlusSign(): $IDrawableStatic;
    }
}
