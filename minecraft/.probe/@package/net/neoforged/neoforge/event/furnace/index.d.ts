import { $RecipeType, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/neoforged/neoforge/event/furnace" {
    export class $FurnaceFuelBurnTimeEvent extends $Event implements $ICancellableEvent {
        setBurnTime(arg0: number): void;
        getBurnTime(): number;
        getRecipeType(): $RecipeType<never>;
        getItemStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $ItemStack_, arg1: number, arg2: $RecipeType_<never>);
        get recipeType(): $RecipeType<never>;
        get itemStack(): $ItemStack;
    }
}
