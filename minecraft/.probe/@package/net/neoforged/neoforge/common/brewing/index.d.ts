import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $List_, $List } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/common/brewing" {
    export class $IBrewingRecipe {
    }
    export interface $IBrewingRecipe {
        isIngredient(arg0: $ItemStack_): boolean;
        isInput(arg0: $ItemStack_): boolean;
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
    }
    export class $BrewingRecipeRegistry extends $Record {
        isValidInput(arg0: $ItemStack_): boolean;
        hasOutput(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        isValidIngredient(arg0: $ItemStack_): boolean;
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        recipes(): $List<$IBrewingRecipe>;
        constructor(recipes: $List_<$IBrewingRecipe>);
    }
    /**
     * Values that may be interpreted as {@link $BrewingRecipeRegistry}.
     */
    export type $BrewingRecipeRegistry_ = { recipes?: $List_<$IBrewingRecipe>,  } | [recipes?: $List_<$IBrewingRecipe>, ];
    export class $BrewingRecipe implements $IBrewingRecipe {
        getIngredient(): $Ingredient;
        isIngredient(arg0: $ItemStack_): boolean;
        isInput(arg0: $ItemStack_): boolean;
        getInput(): $Ingredient;
        getOutput(arg0: $ItemStack_, arg1: $ItemStack_): $ItemStack;
        getOutput(): $ItemStack;
        constructor(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_);
    }
}
