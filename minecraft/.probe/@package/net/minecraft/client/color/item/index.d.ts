import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $BlockColors } from "@package/net/minecraft/client/color/block";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $ItemColorsExtension {
        get(arg0: $ItemLike_): $ItemColor;
        /**
         * @deprecated
         */
        register(arg0: $ItemColor_, ...arg1: $ItemLike_[]): void;
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        getColor(arg0: $ItemStack_, arg1: number): number;
        static createDefault(arg0: $BlockColors): $ItemColors;
        constructor();
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(arg0: $ItemStack_, arg1: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
