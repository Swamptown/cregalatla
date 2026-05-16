import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $IContainerFactory } from "@package/net/neoforged/neoforge/network";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Executor } from "@package/java/util/concurrent";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List, $Map, $Set } from "@package/java/util";
import { $SimpleContainer, $Container } from "@package/net/minecraft/world";
import { $Supplier } from "@package/java/util/function";
import { $NonNullList } from "@package/net/minecraft/core";
import { $MenuAccess, $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Slot, $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Font } from "@package/net/minecraft/client/gui";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
export * as chest from "@package/dev/latvian/mods/kubejs/gui/chest";

declare module "@package/dev/latvian/mods/kubejs/gui" {
    export class $InventoryKJSSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        inventory: $InventoryKJS;
        invIndex: number;
        constructor(inventory: $InventoryKJS, invIndex: number, xPosition: number, yPosition: number);
    }
    export class $KubeJSMenu extends $AbstractContainerMenu {
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        static SLOT_CLICKED_OUTSIDE: number;
        guiData: $KubeJSGUI;
        ldlib2$modularUI: $ModularUI;
        menuType: $MenuType<never>;
        static FACTORY: $IContainerFactory<$KubeJSMenu>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        constructor(id: number, inventory: $Inventory, guiData: $KubeJSGUI);
        constructor(id: number, inventory: $Inventory, buf: $FriendlyByteBuf);
    }
    export class $KubeJSScreen extends $AbstractContainerScreen<$KubeJSMenu> implements $MenuAccess<$KubeJSMenu> {
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        containerRows: number;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        containerColumns: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $KubeJSMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(menu: $KubeJSMenu, inventory: $Inventory, component: $Component_);
    }
    export class $KubeJSGUI {
        write(buf: $FriendlyByteBuf): void;
        setInventory(inv: $InventoryKJS): void;
        playerSlotsY: number;
        playerSlotsX: number;
        inventoryHeight: number;
        width: number;
        inventoryLabelY: number;
        inventoryWidth: number;
        inventoryLabelX: number;
        title: $Component;
        inventory: $InventoryKJS;
        static EMPTY_CONTAINER: $SimpleContainer;
        height: number;
        constructor();
        constructor(buf: $FriendlyByteBuf);
    }
    export class $KubeJSMenus {
        static MENU: $Supplier<$MenuType<$KubeJSMenu>>;
        static REGISTRY: $DeferredRegister<$MenuType<never>>;
    }
    export interface $KubeJSMenus {
    }
}
