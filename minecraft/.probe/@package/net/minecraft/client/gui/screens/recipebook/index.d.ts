import { $Ingredient, $Ingredient_, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $AbstractWidget, $WidgetTooltipHolder, $StateSwitchingButton, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $ClientRecipeBook, $RecipeBookCategories, $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $Iterator, $List, $Set, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $PlaceRecipe } from "@package/net/minecraft/recipebook";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $OverlayRecipeComponent$OverlayRecipeButton extends $AbstractWidget implements $PlaceRecipe<$Ingredient> {
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $RecipeBookComponent implements $PlaceRecipe<$Ingredient>, $Renderable, $GuiEventListener, $NarratableEntry, $RecipeShownListener {
        init(arg0: number, arg1: number, arg2: $Minecraft, arg3: boolean, arg4: $RecipeBookMenu<never, never>): void;
        tick(): void;
        updateScreenPosition(arg0: number, arg1: number): number;
        renderGhostRecipe(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
        hasClickedOutside(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        slotClicked(arg0: $Slot): void;
        recipesUpdated(): void;
        toggleVisibility(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        updateNarration(arg0: $NarrationElementOutput): void;
        narrationPriority(): $NarratableEntry$NarrationPriority;
        isMouseOver(arg0: number, arg1: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        setVisible(arg0: boolean): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isVisible(): boolean;
        setupGhostRecipe(arg0: $RecipeHolder_<never>, arg1: $List_<$Slot>): void;
        initVisuals(): void;
        initFilterButtonTextures(): void;
        getRecipeFilterName(): $Component;
        handler$dol000$emi$toggleOpen(info: $CallbackInfo): void;
        sendUpdateSettings(): void;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        addItemToSlot(arg0: $Ingredient_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        placeRecipe(arg0: number, arg1: number, arg2: number, arg3: $RecipeHolder_<never>, arg4: $Iterator<$Ingredient_>, arg5: number): void;
        getRectangle(): $ScreenRectangle;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        isActive(): boolean;
        getTabOrderGroup(): number;
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
        get recipeFilterName(): $Component;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $SmeltingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $AbstractFurnaceRecipeBookComponent extends $RecipeBookComponent {
        getFuelItems(): $Set<$Item>;
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
        get fuelItems(): $Set<$Item>;
    }
    export class $SmokingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $RecipeBookTabButton extends $StateSwitchingButton {
        startAnimation(arg0: $Minecraft): void;
        getCategory(): $RecipeBookCategories;
        updateVisibility(arg0: $ClientRecipeBook): boolean;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(arg0: $RecipeBookCategories_);
        get category(): $RecipeBookCategories;
    }
    export class $GhostRecipe {
        size(): number;
        get(arg0: number): $GhostRecipe$GhostIngredient;
        clear(): void;
        addIngredient(arg0: $Ingredient_, arg1: number, arg2: number): void;
        setRecipe(arg0: $RecipeHolder_<never>): void;
        getRecipe(): $RecipeHolder<never>;
        render(arg0: $GuiGraphics, arg1: $Minecraft, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        time: number;
        constructor();
    }
    export class $OverlayRecipeComponent$OverlayRecipeButton$Pos {
    }
    export class $OverlayRecipeComponent$OverlaySmeltingRecipeButton extends $OverlayRecipeComponent$OverlayRecipeButton {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $RecipeCollection {
        getDisplayRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        hasSingleResultItem(): boolean;
        getRecipes(): $List<$RecipeHolder<never>>;
        getRecipes(arg0: boolean): $List<$RecipeHolder<never>>;
        canCraft(arg0: $StackedContents, arg1: number, arg2: number, arg3: $RecipeBook): void;
        registryAccess(): $RegistryAccess;
        updateKnownRecipes(arg0: $RecipeBook): void;
        isCraftable(arg0: $RecipeHolder_<never>): boolean;
        hasCraftable(): boolean;
        hasFitting(): boolean;
        hasKnownRecipes(): boolean;
        constructor(arg0: $RegistryAccess, arg1: $List_<$RecipeHolder_<never>>);
    }
    export class $RecipeUpdateListener {
    }
    export interface $RecipeUpdateListener {
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $GhostRecipe$GhostIngredient {
        getY(): number;
        getItem(): $ItemStack;
        getX(): number;
        this$0: $GhostRecipe;
        constructor(arg0: $GhostRecipe, arg1: $Ingredient_, arg2: number, arg3: number);
        get y(): number;
        get item(): $ItemStack;
        get x(): number;
    }
    export class $RecipeBookPage {
        init(arg0: $Minecraft, arg1: number, arg2: number): void;
        getRecipeBook(): $RecipeBook;
        getMinecraft(): $Minecraft;
        addListener(arg0: $RecipeBookComponent): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setInvisible(): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        renderTooltip(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        updateCollections(arg0: $List_<$RecipeCollection>, arg1: boolean): void;
        getLastClickedRecipe(): $RecipeHolder<never>;
        getLastClickedRecipeCollection(): $RecipeCollection;
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
        listButtons(arg0: $Consumer_<$AbstractWidget>): void;
        static ITEMS_PER_PAGE: number;
        constructor();
        get recipeBook(): $RecipeBook;
        get minecraft(): $Minecraft;
        get lastClickedRecipe(): $RecipeHolder<never>;
        get lastClickedRecipeCollection(): $RecipeCollection;
    }
    export class $BlastingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $OverlayRecipeComponent implements $Renderable, $GuiEventListener {
        init(arg0: $Minecraft, arg1: $RecipeCollection, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        getRecipeCollection(): $RecipeCollection;
        getLastRecipeClicked(): $RecipeHolder<never>;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        setVisible(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        isVisible(): boolean;
        getRectangle(): $ScreenRectangle;
        nextFocusPath(arg0: $FocusNavigationEvent_): $ComponentPath;
        getCurrentFocusPath(): $ComponentPath;
        mouseMoved(arg0: number, arg1: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        charTyped(arg0: string, arg1: number): boolean;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getTabOrderGroup(): number;
        static CRAFTING_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        isFurnaceMenu: boolean;
        static FURNACE_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static BUTTON_SIZE: number;
        static CRAFTING_OVERLAY_SPRITE: $ResourceLocation;
        time: number;
        static FURNACE_OVERLAY_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        constructor();
        get recipeCollection(): $RecipeCollection;
        get lastRecipeClicked(): $RecipeHolder<never>;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $RecipeShownListener {
    }
    export interface $RecipeShownListener {
        recipesShown(arg0: $List_<$RecipeHolder_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeShownListener}.
     */
    export type $RecipeShownListener_ = ((arg0: $List<$RecipeHolder<never>>) => void);
    export class $RecipeButton extends $AbstractWidget {
        init(arg0: $RecipeCollection, arg1: $RecipeBookPage): void;
        getTooltipText(): $List<$Component>;
        getCollection(): $RecipeCollection;
        getRecipe(): $RecipeHolder<never>;
        isOnlyOption(): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static TICKS_TO_SWAP: number;
        height: number;
        constructor();
        get tooltipText(): $List<$Component>;
        get collection(): $RecipeCollection;
        get recipe(): $RecipeHolder<never>;
        get onlyOption(): boolean;
    }
}
