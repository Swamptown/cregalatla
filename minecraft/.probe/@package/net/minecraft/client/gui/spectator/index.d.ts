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
        selectItem(arg0: $SpectatorMenu): void;
        renderIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getName(): $Component;
        isEnabled(): boolean;
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
        selectSlot(arg0: number): void;
        getCurrentPage(): $SpectatorPage;
        getSelectedCategory(): $SpectatorMenuCategory;
        selectCategory(arg0: $SpectatorMenuCategory): void;
        getSelectedItem(): $SpectatorMenuItem;
        getItems(): $List<$SpectatorMenuItem>;
        getItem(arg0: number): $SpectatorMenuItem;
        exit(): void;
        getSelectedSlot(): number;
        static CLOSE_SPRITE: $ResourceLocation;
        static PREVIOUS_PAGE_TEXT: $Component;
        static SCROLL_RIGHT_SPRITE: $ResourceLocation;
        static NEXT_PAGE_TEXT: $Component;
        static EMPTY_SLOT: $SpectatorMenuItem;
        page: number;
        static CLOSE_MENU_TEXT: $Component;
        static SCROLL_LEFT_SPRITE: $ResourceLocation;
        constructor(arg0: $SpectatorMenuListener_);
        get currentPage(): $SpectatorPage;
        get selectedCategory(): $SpectatorMenuCategory;
        get selectedItem(): $SpectatorMenuItem;
        get items(): $List<$SpectatorMenuItem>;
        get selectedSlot(): number;
    }
    export class $SpectatorMenu$CloseSpectatorItem implements $SpectatorMenuItem {
    }
    export class $SpectatorMenuCategory {
    }
    export interface $SpectatorMenuCategory {
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
    export class $PlayerMenuItem implements $SpectatorMenuItem {
        selectItem(arg0: $SpectatorMenu): void;
        renderIcon(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getName(): $Component;
        isEnabled(): boolean;
        constructor(arg0: $GameProfile);
        get name(): $Component;
        get enabled(): boolean;
    }
    export class $RootSpectatorMenuCategory implements $SpectatorMenuCategory {
        getPrompt(): $Component;
        getItems(): $List<$SpectatorMenuItem>;
        constructor();
        get prompt(): $Component;
        get items(): $List<$SpectatorMenuItem>;
    }
}
