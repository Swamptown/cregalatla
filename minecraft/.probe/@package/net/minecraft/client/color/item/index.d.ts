import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $ItemColorsNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "@package/net/fabricmc/fabric/impl/client/rendering";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $Map } from "@package/java/util";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ColorProviderRegistryImpl$ColorMapperHolder<any, any>, $ItemColorsExtension, $ItemColorsNeoForgeAccessor {
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        get(arg0: $ItemLike_): $ItemColor;
        /**
         * @deprecated
         */
        register(arg0: $ItemColor_, ...arg1: $ItemLike_[]): void;
        getColor(arg0: $ItemStack_, arg1: number): number;
        static createDefault(arg0: $BlockColors): $ItemColors;
        puzzleslib$getItemColors(): $Map<$Item, $ItemColor>;
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
