import { $RecipeType, $RecipeInput, $RecipeSerializer, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/simibubi/create/foundation/recipe" {
    export class $IRecipeTypeInfo {
    }
    export interface $IRecipeTypeInfo {
        getSerializer<T extends $RecipeSerializer<never>>(): T;
        getId(): $ResourceLocation;
        getType<I extends $RecipeInput, R extends $Recipe<I>>(): $RecipeType<R>;
        get serializer(): T;
        get id(): $ResourceLocation;
        get type(): $RecipeType<R>;
    }
}
