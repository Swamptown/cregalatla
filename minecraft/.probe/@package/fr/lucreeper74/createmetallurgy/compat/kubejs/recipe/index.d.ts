import { $DamagedEntityIngredient } from "@package/fr/lucreeper74/createmetallurgy/content/blocks/industrial_crucible/foundry/recipes/base";
import { $CastingOutput } from "@package/fr/lucreeper74/createmetallurgy/content/blocks/casting/recipe/base";

declare module "@package/fr/lucreeper74/createmetallurgy/compat/kubejs/recipe" {
    export class $EntityIngredientWrapper {
        /**
         * Returns a EntityIngredient of the EntityType or EntityTag
         */
        static of(arg0: string): $DamagedEntityIngredient;
        /**
         * Returns a EntityIngredient of the EntityType or EntityTag with damage
         */
        static of(arg0: string, arg1: number): $DamagedEntityIngredient;
    }
    export interface $EntityIngredientWrapper {
    }
    export class $CastingOutputWrapper {
        /**
         * Returns a CastingOutput of the ItemStack or ItemTag
         */
        static of(arg0: string): $CastingOutput;
        /**
         * Returns a CastingOutput of the ItemStack or ItemTag with count
         */
        static of(arg0: string, arg1: number): $CastingOutput;
    }
    export interface $CastingOutputWrapper {
    }
}
