import { $EmiStack, $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EnumEntries } from "@package/kotlin/enums";
import { $EmiDrawContext } from "@package/dev/emi/emi/runtime";
import { $Object, $Enum } from "@package/java/lang";
import { $List, $List_, $Set } from "@package/java/util";
import { $EmiScreenManager$ScreenSpace } from "@package/dev/emi/emi/screen";
export * as stackgroup from "@package/concerrox/emixx/content/stackgroup";
export * as creativemodetab from "@package/concerrox/emixx/content/creativemodetab";

declare module "@package/concerrox/emixx/content" {
    export class $Layout$Tile {
        check$emixx_common(bit: $Layout$TileType_): boolean;
        static copy$default(arg0: $Layout$Tile, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Object): $Layout$Tile;
        component2(): number;
        getY(): number;
        setType(<set-?>: number): void;
        getType(): number;
        copy(x: number, y: number, type: number): $Layout$Tile;
        component3(): number;
        getX(): number;
        component1(): number;
        constructor(x: number, y: number, type: number);
        get y(): number;
        get x(): number;
    }
    export class $ScreenManager {
        setCustomIndexTitle$emixx_common(<set-?>: $Component_): void;
        setIndexScreenSpace(<set-?>: $EmiScreenManager$ScreenSpace): void;
        removeCustomIndexTitle(component: $Component_): void;
        getCustomIndexTitle$emixx_common(): $Component;
        onScreenInitialized(screen: $Screen): void;
        isSearching$emixx_common(): boolean;
        getIndexScreenSpace(): $EmiScreenManager$ScreenSpace;
        onIndexScreenSpaceCreated(indexScreenSpace: $EmiScreenManager$ScreenSpace): void;
        onMouseScrolled(mouseX: number, mouseY: number, amount: number): boolean;
        static INSTANCE: $ScreenManager;
        static ENTRY_SIZE: number;
        get searching$emixx_common(): boolean;
    }
    export class $Layout$TileType extends $Enum<$Layout$TileType> {
        static values(): $Layout$TileType[];
        static valueOf(value: string): $Layout$TileType;
        static getEntries(): $EnumEntries<$Layout$TileType>;
        getBit(): number;
        static TOP_LEFT: $Layout$TileType;
        static LEFT: $Layout$TileType;
        static TOP: $Layout$TileType;
        static BOTTOM_RIGHT: $Layout$TileType;
        static TOP_RIGHT: $Layout$TileType;
        static RIGHT: $Layout$TileType;
        static BOTTOM: $Layout$TileType;
        static BOTTOM_LEFT: $Layout$TileType;
        static get entries(): $EnumEntries<$Layout$TileType>;
        get bit(): number;
    }
    /**
     * Values that may be interpreted as {@link $Layout$TileType}.
     */
    export type $Layout$TileType_ = "left" | "top" | "right" | "bottom" | "top_left" | "top_right" | "bottom_left" | "bottom_right";
    export class $Layout {
        checkGridSize(tw: number, th: number): void;
        buildLayoutTiles(screenSpace: $EmiScreenManager$ScreenSpace, context: $EmiDrawContext): void;
        isClean(): boolean;
        setClean(<set-?>: boolean): void;
        isTextureDirty(): boolean;
        setTextureDirty(<set-?>: boolean): void;
        render(screenSpace: $EmiScreenManager$ScreenSpace, context: $EmiDrawContext): void;
        getStartIndex(): number;
        setStartIndex(<set-?>: number): void;
        static INSTANCE: $Layout;
    }
    export class $StackManager {
        onStackInteractionDeprecated(ingredient: $EmiIngredient): void;
        getIndexStacks$emixx_common(): $List<$EmiStack>;
        setIndexStacks$emixx_common(<set-?>: $List_<$EmiStack>): void;
        getSourceStacks$emixx_common(): $List<$EmiStack>;
        setSourceStacks$emixx_common(<set-?>: $List_<$EmiStack>): void;
        getSearchedStacks$emixx_common(): $List<$EmiStack>;
        setSearchedStacks$emixx_common(<set-?>: $List_<$EmiStack>): void;
        search$emixx_common(sourceStacks: $List_<$EmiStack>, keyword: string): void;
        buildStacks$emixx_common(searchedStacks: $List_<$EmiStack>, query: string): void;
        updateSourceStacks$emixx_common(sourceStacks: $List_<$EmiStack>): void;
        getDisplayedStacks$emixx_common(): $List<$EmiStack>;
        setDisplayedStacks$emixx_common(<set-?>: $List_<$EmiStack>): void;
        getExpandedStackGroups$emixx_common(): $Set<$ResourceLocation>;
        getStackGrid$emixx_common(): $EmiStack[][];
        setStackGrid$emixx_common(<set-?>: $EmiStack[][]): void;
        getStackTextureGrid$emixx_common(): $List<$Layout$Tile>;
        setStackTextureGrid$emixx_common(<set-?>: $List_<$Layout$Tile>): void;
        static buildStacks$emixx_common$default(arg0: $StackManager, arg1: $List_<any>, arg2: string, arg3: number, arg4: $Object): void;
        reload(): void;
        static INSTANCE: $StackManager;
        get expandedStackGroups$emixx_common(): $Set<$ResourceLocation>;
    }
}
