import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModBlocks$VibrantVaultColor, $ModBlocks$VibrantVaultColor_ } from "@package/net/zlt/create_vibrant_vaults/block";
import { $ModelBuilder } from "@package/net/neoforged/neoforge/client/model/generators";

declare module "@package/net/zlt/create_vibrant_vaults/duck" {
    export class $ModelBuilderMixinDuck<T extends $ModelBuilder<T>> {
    }
    export interface $ModelBuilderMixinDuck<T extends $ModelBuilder<T>> {
        createVibrantVaults$uncheckedTexture(arg0: string, arg1: $ResourceLocation_): T;
    }
    /**
     * Values that may be interpreted as {@link $ModelBuilderMixinDuck}.
     */
    export type $ModelBuilderMixinDuck_<T> = ((arg0: string, arg1: $ResourceLocation) => T);
    export class $FactoryPanelBlockEntityMixinDuck {
    }
    export interface $FactoryPanelBlockEntityMixinDuck {
        createVibrantVaults$getRestockerColor(): $ModBlocks$VibrantVaultColor;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlockEntityMixinDuck}.
     */
    export type $FactoryPanelBlockEntityMixinDuck_ = (() => $ModBlocks$VibrantVaultColor_);
}
