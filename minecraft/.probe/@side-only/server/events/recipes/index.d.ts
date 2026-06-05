import { $CookingBookCategory_, $Ingredient_, $CraftingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $DamagedEntityIngredient } from "@package/fr/lucreeper74/createmetallurgy/content/blocks/industrial_crucible/foundry/recipes/base";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ThreeState, $FluidIngredient_ } from "@package/com/tom/createores/util";
import { $Map_, $List_ } from "@package/java/util";
import { $ProcessingOutput, $HeatCondition_ } from "@package/com/simibubi/create/content/processing/recipe";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $CastingOutput } from "@package/fr/lucreeper74/createmetallurgy/content/blocks/casting/recipe/base";
import { $ExtractorRecipeJS, $RandomSpreadStructurePlacementJS, $DrillingRecipeJS, $VeinRecipeJS } from "@package/com/tom/createores/kubejs";
import { $RandomSpreadType_, $StructurePlacement$FrequencyReductionMethod_ } from "@package/net/minecraft/world/level/levelgen/structure/placement";

declare module "@side-only/server/events/recipes" {
    export class Createmetallurgy$CastingInTable extends $KubeRecipe {
        result(result: $CastingOutput): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        moldConsumed(moldConsumed: boolean): this;
        moldConsumed(): this;
    }
    export class Create$Cutting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Createoreexcavation$Extracting extends $ExtractorRecipeJS {
        output(output: $FluidStack_): this;
        ticks(ticks: $TickDuration_): this;
        veinId(veinId: string): this;
        drill(drill: $Ingredient_): this;
        priority(priority: number): this;
        fluid(fluid: $FluidIngredient_): this;
        stress(stress: number): this;
        drill(arg0: $Ingredient_): this;
        stress(arg0: number): this;
        priority(arg0: number): this;
        fluid(arg0: $FluidIngredient_): this;
    }
    export class Create$Milling extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$MechanicalCrafting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        acceptMirrored(acceptMirrored: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Createmetallurgy$Grinding extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class DocumentedRecipes {
        minecraft: {
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
        }
        kubejs: {
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
        }
        createoreexcavation: {
            drilling(output: any, ticks: $TickDuration_, veinId: string, drill?: $Ingredient_, priority?: number, fluid?: $FluidIngredient_, stress?: number): Createoreexcavation$Drilling;
            extracting(output: $FluidStack_, ticks: $TickDuration_, veinId: string, drill?: $Ingredient_, priority?: number, fluid?: $FluidIngredient_, stress?: number): Createoreexcavation$Extracting;
            vein(name: $Component_, icon: $ItemStack_, placement: $RandomSpreadStructurePlacementJS, priority?: number, finite?: $ThreeState, amountMultiplierMin?: number, amountMultiplierMax?: number, biomeWhitelist?: string, biomeBlacklist?: string): Createoreexcavation$Vein;
        }
        createmetallurgy: {
            bulk_melting(results: $List_<any>, ingredients?: $List_<any>, processingTime?: $TickDuration_, minHeatRequirement?: number, maxHeatRequirement?: number): Createmetallurgy$BulkMelting;
            alloying(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createmetallurgy$Alloying;
            casting_in_basin(result: $CastingOutput, ingredients: $List_<any>, processingTime?: $TickDuration_, moldConsumed?: boolean): Createmetallurgy$CastingInBasin;
            grinding(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createmetallurgy$Grinding;
            entity_melting(results: $List_<any>, entity: $DamagedEntityIngredient, ingredients?: $List_<any>, processingTime?: $TickDuration_, minHeatRequirement?: number, maxHeatRequirement?: number): Createmetallurgy$EntityMelting;
            casting_in_table(result: $CastingOutput, ingredients: $List_<any>, processingTime?: $TickDuration_, moldConsumed?: boolean): Createmetallurgy$CastingInTable;
            melting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Createmetallurgy$Melting;
        }
        create: {
            emptying(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Emptying;
            sequenced_assembly(results: $List_<$ProcessingOutput>, ingredient: $Ingredient_, sequence: $List_<$KubeRecipe>, transitionalItem?: $ProcessingOutput, loops?: number): Create$SequencedAssembly;
            filling(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Filling;
            splashing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Splashing;
            haunting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Haunting;
            sandpaper_polishing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$SandpaperPolishing;
            pressing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Pressing;
            milling(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Milling;
            item_application(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$ItemApplication;
            conversion(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Conversion;
            deploying(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Deploying;
            crushing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Crushing;
            cutting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Cutting;
            mixing(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Mixing;
            compacting(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Compacting;
            mechanical_crafting(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>, acceptMirrored?: boolean): Create$MechanicalCrafting;
            basin(results: $List_<any>, ingredients: $List_<any>, processingTime?: $TickDuration_): Create$Basin;
        }
    }
    export class Create$Conversion extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Create$Crushing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Haunting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Createoreexcavation$Vein extends $VeinRecipeJS {
        name(name: $Component_): this;
        icon(icon: $ItemStack_): this;
        placement(placement: $RandomSpreadStructurePlacementJS): this;
        priority(priority: number): this;
        finite(finite: $ThreeState): this;
        amountMultiplierMin(amountMultiplierMin: number): this;
        amountMultiplierMax(amountMultiplierMax: number): this;
        biomeWhitelist(biomeWhitelist: string): this;
        biomeBlacklist(biomeBlacklist: string): this;
        alwaysInfinite(): this;
        alwaysFinite(): this;
        defaultFinite(): this;
        veinSize(arg0: number, arg1: number): this;
        biomeWhitelist(arg0: string): this;
        biomeBlacklist(arg0: string): this;
        placement(arg0: number, arg1: number, arg2: number): this;
        spread(arg0: $RandomSpreadType_): this;
        reduction(arg0: $StructurePlacement$FrequencyReductionMethod_): this;
        priority(arg0: number): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Createmetallurgy$BulkMelting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        minHeatRequirement(minHeatRequirement: number): this;
        maxHeatRequirement(maxHeatRequirement: number): this;
    }
    export class Createmetallurgy$Alloying extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Createoreexcavation$Drilling extends $DrillingRecipeJS {
        output(output: any): this;
        ticks(ticks: $TickDuration_): this;
        veinId(veinId: string): this;
        drill(drill: $Ingredient_): this;
        priority(priority: number): this;
        fluid(fluid: $FluidIngredient_): this;
        stress(stress: number): this;
        drill(arg0: $Ingredient_): this;
        stress(arg0: number): this;
        priority(arg0: number): this;
        fluid(arg0: $FluidIngredient_): this;
    }
    export class Create$Mixing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SandpaperPolishing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Createmetallurgy$EntityMelting extends $KubeRecipe {
        results(results: $List_<any>): this;
        entity(entity: $DamagedEntityIngredient): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        minHeatRequirement(minHeatRequirement: number): this;
        maxHeatRequirement(maxHeatRequirement: number): this;
    }
    export class Create$Filling extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Create$ItemApplication extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Pressing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Create$Emptying extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Compacting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Create$SequencedAssembly extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredient(ingredient: $Ingredient_): this;
        sequence(sequence: $List_<$KubeRecipe>): this;
        transitionalItem(transitionalItem: $ProcessingOutput): this;
        loops(loops: number): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Createmetallurgy$Melting extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Createmetallurgy$CastingInBasin extends $KubeRecipe {
        result(result: $CastingOutput): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        moldConsumed(moldConsumed: boolean): this;
        moldConsumed(): this;
    }
    export class Create$Deploying extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Splashing extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Basin extends $KubeRecipe {
        results(results: $List_<any>): this;
        ingredients(ingredients: $List_<any>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
}
