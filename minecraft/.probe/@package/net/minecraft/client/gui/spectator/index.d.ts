import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";
import { $List } from "@package/java/util";
export * as categories from "@package/net/minecraft/client/gui/spectator/categories";

declare module "@package/net/minecraft/client/gui/spectator" {
    export class $SpectatorMenuItem {
    }
    export interface $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        selectItem(arg0: $SpectatorMenu): void;
        get name(): $Component;
        get enabled(): boolean;
    }
    export class $SpectatorMenu$ScrollMenuItem implements $SpectatorMenuItem {
    }
    export class $SpectatorMenuListener {
    }
    export interface $SpectatorMenuListener {
        onSpectatorMenuClosed(arg0: $SpectatorMenu): void;
    }
    /**
     * Values that may be interpreted as {@link $SpectatorMenuListener}.
     */
    export type $SpectatorMenuListener_ = ((arg0: $SpectatorMenu) => void);
    export class $SpectatorMenu {
        exit(): void;
        getItems(): $List<$SpectatorMenuItem>;
        getSelectedItem(): $SpectatorMenuItem;
        selectCategory(arg0: $SpectatorMenuCategory): void;
        getItem(arg0: number): $SpectatorMenuItem;
        selectSlot(arg0: number): void;
        getCurrentPage(): $SpectatorPage;
        getSelectedSlot(): number;
        getSelectedCategory(): $SpectatorMenuCategory;
        static CLOSE_SPRITE: $ResourceLocation;
        static PREVIOUS_PAGE_TEXT: $Component;
        static SCROLL_RIGHT_SPRITE: $ResourceLocation;
        static NEXT_PAGE_TEXT: $Component;
        static EMPTY_SLOT: $SpectatorMenuItem;
        page: number;
        static CLOSE_MENU_TEXT: $Component;
        static SCROLL_LEFT_SPRITE: $ResourceLocation;
        constructor(arg0: $SpectatorMenuListener_);
        get items(): $List<$SpectatorMenuItem>;
        get selectedItem(): $SpectatorMenuItem;
        get currentPage(): $SpectatorPage;
        get selectedSlot(): number;
        get selectedCategory(): $SpectatorMenuCategory;
    }
    export class $SpectatorMenu$CloseSpectatorItem implements $SpectatorMenuItem {
    }
    export class $SpectatorMenuCategory {
    }
    export interface $SpectatorMenuCategory {
        getItems(): $List<$SpectatorMenuItem>;
        getPrompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
        get prompt(): $Component;
    }
    export class $PlayerMenuItem implements $SpectatorMenuItem {
        getName(): $Component;
        isEnabled(): boolean;
        renderIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        selectItem(arg0: $SpectatorMenu): void;
        constructor(arg0: $GameProfile);
        get name(): $Component;
        get enabled(): boolean;
    }
    export class $RootSpectatorMenuCategory implements $SpectatorMenuCategory {
        getItems(): $List<$SpectatorMenuItem>;
        getPrompt(): $Component;
        constructor();
        get items(): $List<$SpectatorMenuItem>;
        get prompt(): $Component;
    }
}
