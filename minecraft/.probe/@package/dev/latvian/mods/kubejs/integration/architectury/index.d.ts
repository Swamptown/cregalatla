import { $JsonElement_ } from "@package/com/google/gson";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $KubeIconTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/client/icon";
import { $Map_ } from "@package/java/util";
import { $CustomRecipeSchemaFunctionRegistry_, $RecipeSchemaFunctionRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
import { $EventGroupRegistry_ } from "@package/dev/latvian/mods/kubejs/event";
import { $RecipeComponentTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $Consumer_ } from "@package/java/util/function";
import { $AttachedData, $NameProvider$Registry_ } from "@package/dev/latvian/mods/kubejs/util";
import { $KubeJSPlugin, $ClassFilter } from "@package/dev/latvian/mods/kubejs/plugin";
import { $RecipePostProcessorTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $RecipeFactoryRegistry, $RecipeMappingRegistry, $RecipeSchemaRegistry } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Object } from "@package/java/lang";
import { $DataComponentTypeInfoRegistry_, $BindingRegistry_, $TypeDescriptionRegistry, $RecordDefaultsRegistry_, $TypeWrapperRegistry, $ScriptManager } from "@package/dev/latvian/mods/kubejs/script";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockEntityAttachmentRegistry_ } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $IngredientActionTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
import { $KubeAssetGenerator, $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $LangKubeEvent_ } from "@package/dev/latvian/mods/kubejs/client";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DataExport } from "@package/dev/latvian/mods/kubejs/server";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ServerRegistryRegistry_, $BuilderTypeRegistry_ } from "@package/dev/latvian/mods/kubejs/registry";
import { $RecipeViewerEntryType } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $LocalWebServer_, $LocalWebServerAPIRegistry_, $LocalWebServerRegistry } from "@package/dev/latvian/mods/kubejs/web";
import { $RecipeManagerKJS } from "@package/dev/latvian/mods/kubejs/core";

declare module "@package/dev/latvian/mods/kubejs/integration/architectury" {
    export class $ArchitecturyIntegration implements $KubeJSPlugin {
        static wrapArchFluid(o: $Object): $FluidStack;
        registerTypeWrappers(registry: $TypeWrapperRegistry): void;
        init(): void;
        breakpoint(args: $Object[]): void;
        registerServerRegistries(registry: $ServerRegistryRegistry_): void;
        registerBindings(bindings: $BindingRegistry_): void;
        registerTypeDescriptions(registry: $TypeDescriptionRegistry): void;
        registerRecipeFactories(registry: $RecipeFactoryRegistry): void;
        registerRecipeMappings(registry: $RecipeMappingRegistry): void;
        registerRecipeComponents(registry: $RecipeComponentTypeRegistry_): void;
        registerRecipeSchemas(registry: $RecipeSchemaRegistry): void;
        registerRecipeSchemaFunctionTypes(registry: $RecipeSchemaFunctionRegistry_): void;
        registerCustomRecipeSchemaFunctions(registry: $CustomRecipeSchemaFunctionRegistry_): void;
        registerRecipePostProcessors(registry: $RecipePostProcessorTypeRegistry_): void;
        registerBlockEntityAttachments(registry: $BlockEntityAttachmentRegistry_): void;
        registerIngredientActionTypes(registry: $IngredientActionTypeRegistry_): void;
        registerRecipeViewerEntryTypes(registry: $Consumer_<$RecipeViewerEntryType>): void;
        registerDataComponentTypeDescriptions(registry: $DataComponentTypeInfoRegistry_): void;
        registerLocalWebServerAPIs(registry: $LocalWebServerAPIRegistry_): void;
        registerLocalWebServer(registry: $LocalWebServerRegistry): void;
        registerLocalWebServerWithAuth(registry: $LocalWebServerRegistry): void;
        localWebServerStarted(server: $LocalWebServer_): void;
        registerItemNameProviders(registry: $NameProvider$Registry_<$Item, $ItemStack>): void;
        registerIconTypes(registry: $KubeIconTypeRegistry_): void;
        generateData(generator: $KubeDataGenerator): void;
        generateAssets(generator: $KubeAssetGenerator): void;
        generateLang(event: $LangKubeEvent_): void;
        exportServerData(_export: $DataExport): void;
        beforeRecipeLoading(event: $RecipesKubeEvent, manager: $RecipeManagerKJS, recipeJsons: $Map_<$ResourceLocation_, $JsonElement_>): void;
        registerBuilderTypes(registry: $BuilderTypeRegistry_): void;
        registerClasses(filter: $ClassFilter): void;
        attachServerData(event: $AttachedData<$MinecraftServer>): void;
        initStartup(): void;
        registerRecordDefaults(registry: $RecordDefaultsRegistry_): void;
        /**
         * @deprecated
         */
        clearCaches(): void;
        beforeScriptsLoaded(manager: $ScriptManager): void;
        afterScriptsLoaded(manager: $ScriptManager): void;
        afterInit(): void;
        attachPlayerData(event: $AttachedData<$Player>): void;
        attachLevelData(event: $AttachedData<$Level_>): void;
        registerEvents(registry: $EventGroupRegistry_): void;
        constructor();
    }
}
