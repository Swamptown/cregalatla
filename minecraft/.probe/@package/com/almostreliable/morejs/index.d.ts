import { $JsonElement_ } from "@package/com/google/gson";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $KubeIconTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/client/icon";
import { $Map_ } from "@package/java/util";
import { $CustomRecipeSchemaFunctionRegistry_, $RecipeSchemaFunctionRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
import { $EventGroupRegistry_ } from "@package/dev/latvian/mods/kubejs/event";
import { $RecipeComponentTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $HolderSet_, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $NameProvider$Registry_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { $ClassFilter, $KubeJSPlugin } from "@package/dev/latvian/mods/kubejs/plugin";
import { $RecipePostProcessorTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $RecipeMappingRegistry, $RecipeSchemaRegistry, $RecipeFactoryRegistry } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Object } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $DataComponentTypeInfoRegistry_, $BindingRegistry_, $TypeWrapperRegistry, $ScriptManager, $TypeDescriptionRegistry, $RecordDefaultsRegistry_ } from "@package/dev/latvian/mods/kubejs/script";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockEntityAttachmentRegistry_ } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $IngredientActionTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $KubeAssetGenerator, $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $LangKubeEvent_ } from "@package/dev/latvian/mods/kubejs/client";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataExport } from "@package/dev/latvian/mods/kubejs/server";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecipeViewerEntryType } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $ServerRegistryRegistry_, $BuilderTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/registry";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $TradeItem, $IntRange } from "@package/com/almostreliable/morejs/features/villager";
import { $LocalWebServer_, $LocalWebServerAPIRegistry_, $LocalWebServerRegistry } from "@package/dev/latvian/mods/kubejs/web";
import { $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $WeightedList$Builder, $WeightedList } from "@package/com/almostreliable/morejs/util";
export * as features from "@package/com/almostreliable/morejs/features";
export * as util from "@package/com/almostreliable/morejs/util";
export * as mixin from "@package/com/almostreliable/morejs/mixin";
export * as core from "@package/com/almostreliable/morejs/core";

declare module "@package/com/almostreliable/morejs" {
    export class $Debug {
        static ENCHANTMENT: boolean;
        constructor();
    }
    export class $ForgeEventLoaders {
        static load(arg0: $IEventBus): void;
        constructor();
    }
    export class $MoreJSBinding {
        static weightedList(): $WeightedList$Builder<$Object>;
        static findStructure(arg0: $BlockPos_, arg1: $ServerLevel, arg2: $HolderSet_<$Structure>, arg3: number): $BlockPos;
        static findBiome(arg0: $BlockPos_, arg1: $ServerLevel, arg2: $HolderSet_<$Biome>, arg3: number): $BlockPos;
        static ofTradeItem(arg1: $Object): $TradeItem;
        static ofWeightedList(arg0: $Object): $WeightedList<$Object>;
        static range(arg0: $Object): $IntRange;
        constructor();
    }
    export class $BuildConfig {
        static MOD_ID: string;
        static MOD_NAME: string;
        static MOD_VERSION: string;
    }
    export class $MoreJS {
        static DISABLED_TAG: string;
        static LOG: $Logger;
        constructor(arg0: $IEventBus);
    }
    export class $Plugin implements $KubeJSPlugin {
        registerTypeWrappers(arg0: $TypeWrapperRegistry): void;
        registerBindings(arg0: $BindingRegistry_): void;
        registerEvents(arg0: $EventGroupRegistry_): void;
        attachServerData(event: $AttachedData<$MinecraftServer>): void;
        registerRecordDefaults(registry: $RecordDefaultsRegistry_): void;
        /**
         * @deprecated
         */
        clearCaches(): void;
        beforeScriptsLoaded(manager: $ScriptManager): void;
        initStartup(): void;
        afterScriptsLoaded(manager: $ScriptManager): void;
        registerBuilderTypes(registry: $BuilderTypeRegistry_): void;
        registerServerRegistries(registry: $ServerRegistryRegistry_): void;
        registerTypeDescriptions(registry: $TypeDescriptionRegistry): void;
        registerRecipeFactories(registry: $RecipeFactoryRegistry): void;
        registerRecipeMappings(registry: $RecipeMappingRegistry): void;
        registerRecipeComponents(registry: $RecipeComponentTypeRegistry_): void;
        registerRecipeSchemas(registry: $RecipeSchemaRegistry): void;
        registerCustomRecipeSchemaFunctions(registry: $CustomRecipeSchemaFunctionRegistry_): void;
        registerRecipePostProcessors(registry: $RecipePostProcessorTypeRegistry_): void;
        registerBlockEntityAttachments(registry: $BlockEntityAttachmentRegistry_): void;
        registerIngredientActionTypes(registry: $IngredientActionTypeRegistry_): void;
        registerRecipeViewerEntryTypes(registry: $Consumer_<$RecipeViewerEntryType>): void;
        registerDataComponentTypeDescriptions(registry: $DataComponentTypeInfoRegistry_): void;
        registerLocalWebServerAPIs(registry: $LocalWebServerAPIRegistry_): void;
        registerLocalWebServer(registry: $LocalWebServerRegistry): void;
        registerClasses(filter: $ClassFilter): void;
        registerRecipeSchemaFunctionTypes(registry: $RecipeSchemaFunctionRegistry_): void;
        registerLocalWebServerWithAuth(registry: $LocalWebServerRegistry): void;
        localWebServerStarted(server: $LocalWebServer_): void;
        registerItemNameProviders(registry: $NameProvider$Registry_<$Item, $ItemStack>): void;
        registerIconTypes(registry: $KubeIconTypeRegistry_): void;
        generateData(generator: $KubeDataGenerator): void;
        generateAssets(generator: $KubeAssetGenerator): void;
        generateLang(event: $LangKubeEvent_): void;
        exportServerData(_export: $DataExport): void;
        beforeRecipeLoading(event: $RecipesKubeEvent, manager: $RecipeManagerKJS, recipeJsons: $Map_<$ResourceLocation_, $JsonElement_>): void;
        breakpoint(args: $Object[]): void;
        init(): void;
        attachPlayerData(event: $AttachedData<$Player>): void;
        attachLevelData(event: $AttachedData<$Level_>): void;
        afterInit(): void;
        constructor();
    }
}
