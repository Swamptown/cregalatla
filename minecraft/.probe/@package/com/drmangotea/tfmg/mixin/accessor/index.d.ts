import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $NonNullList } from "@package/net/minecraft/core";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";

declare module "@package/com/drmangotea/tfmg/mixin/accessor" {
    export class $ProcessingRecipeAccessor {
    }
    export interface $ProcessingRecipeAccessor {
        tfmg$ingredients(): $NonNullList<$Ingredient>;
        tfmg$fluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        tfmg$results(): $NonNullList<$ProcessingOutput>;
        tfmg$fluidResults(): $NonNullList<$FluidStack>;
        tfmg$typeInfo(): $IRecipeTypeInfo;
    }
    export class $TankSegmentAccessor {
    }
    export interface $TankSegmentAccessor {
        tfmg$tank(): $SmartFluidTank;
    }
    /**
     * Values that may be interpreted as {@link $TankSegmentAccessor}.
     */
    export type $TankSegmentAccessor_ = (() => $SmartFluidTank);
}
