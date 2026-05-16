import { $Function_, $Function } from "@package/java/util/function";
import { $RecipeTypeRegistryContext, $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $RecipeValidationContext, $RecipeComponent } from "@package/dev/latvian/mods/kubejs/recipe/component";

declare module "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing" {
    export class $RecipePostProcessorTypeRegistry {
    }
    export interface $RecipePostProcessorTypeRegistry {
        register(type: $RecipePostProcessorType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipePostProcessorTypeRegistry}.
     */
    export type $RecipePostProcessorTypeRegistry_ = ((type: $RecipePostProcessorType<never>) => void);
    export class $RecipePostProcessorType<T extends $RecipePostProcessor> extends $Record {
        id(): $ResourceLocation;
        mapCodec(): $Function<$RecipeTypeRegistryContext, $MapCodec<T>>;
        static CODEC: $Codec<$RecipePostProcessorType<never>>;
        static MAP: $Lazy<$Map<$ResourceLocation, $RecipePostProcessorType<never>>>;
        constructor(id: $ResourceLocation_, mapCodec: $Function_<$RecipeTypeRegistryContext, $MapCodec<T>>);
    }
    /**
     * Values that may be interpreted as {@link $RecipePostProcessorType}.
     */
    export type $RecipePostProcessorType_<T> = { id?: $ResourceLocation_, mapCodec?: $Function_<$RecipeTypeRegistryContext, $MapCodec<$RecipePostProcessor>>,  } | [id?: $ResourceLocation_, mapCodec?: $Function_<$RecipeTypeRegistryContext, $MapCodec<$RecipePostProcessor>>, ];
    export class $RecipePostProcessor {
    }
    export interface $RecipePostProcessor {
        type(): $RecipePostProcessorType<never>;
        process(ctx: $RecipeValidationContext, recipe: $KubeRecipe): void;
    }
    export class $KeyPatternCleanupPostProcessor extends $Record implements $RecipePostProcessor {
        type(): $RecipePostProcessorType<never>;
        component(): $RecipeComponent<never>;
        process(ctx: $RecipeValidationContext, recipe: $KubeRecipe): void;
        keyName(): string;
        patternName(): string;
        static TYPE: $RecipePostProcessorType<$KeyPatternCleanupPostProcessor>;
        constructor(patternName: string, keyName: string, component: $RecipeComponent<never>);
    }
    /**
     * Values that may be interpreted as {@link $KeyPatternCleanupPostProcessor}.
     */
    export type $KeyPatternCleanupPostProcessor_ = { component?: $RecipeComponent<never>, patternName?: string, keyName?: string,  } | [component?: $RecipeComponent<never>, patternName?: string, keyName?: string, ];
}
