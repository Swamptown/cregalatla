import { $IMixinSpectatorGui } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $SpectatorPage } from "@package/net/minecraft/client/gui/spectator/categories";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener, $IMixinSpectatorGui {
        renderHotbar(arg0: $GuiGraphics): void;
        renderTooltip(arg0: $GuiGraphics): void;
        onHotbarSelected(arg0: number): void;
        onMouseMiddleClick(): void;
        isMenuActive(): boolean;
        onMouseScrolled(arg0: number): void;
        renderPage(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: $SpectatorPage): void;
        onSpectatorMenuClosed(arg0: $SpectatorMenu): void;
        invoke_getHotbarAlpha_FancyMenu(): number;
        get_menu_FancyMenu(): $SpectatorMenu;
        constructor(arg0: $Minecraft);
        get menuActive(): boolean;
        get _menu_FancyMenu(): $SpectatorMenu;
    }
}
