import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Map_, $Map, $List } from "@package/java/util";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Font } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/de/keksuccino/konkrete/mixin/mixins/client" {
    export class $IMixinClientLanguage {
    }
    export interface $IMixinClientLanguage {
        getStorageKonkrete(): $Map<string, string>;
        get storageKonkrete(): $Map<string, string>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinClientLanguage}.
     */
    export type $IMixinClientLanguage_ = (() => $Map_<string, string>);
    export class $IMixinMouseHandler {
    }
    export interface $IMixinMouseHandler {
        getActiveButtonKonkrete(): number;
        get activeButtonKonkrete(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMouseHandler}.
     */
    export type $IMixinMouseHandler_ = (() => number);
    export class $IMixinEditBox {
    }
    export interface $IMixinEditBox {
        getIsEditableKonkrete(): boolean;
        getHightlightPosKonkrete(): number;
        getMaxLengthKonkrete(): number;
        onValueChangeKonkrete(arg0: string): void;
        get isEditableKonkrete(): boolean;
        get hightlightPosKonkrete(): number;
        get maxLengthKonkrete(): number;
    }
    export class $IMixinScreen {
    }
    export interface $IMixinScreen {
        setFontKonkrete(arg0: $Font): void;
        getRenderablesKonkrete(): $List<$Renderable>;
        getChildrenKonkrete(): $List<$GuiEventListener>;
        invokeAddWidgetKonkrete<T extends $GuiEventListener>(arg0: T): T;
        invokeAddRenderableWidgetKonkrete<T extends $GuiEventListener>(arg0: T): T;
        set fontKonkrete(value: $Font);
        get renderablesKonkrete(): $List<$Renderable>;
        get childrenKonkrete(): $List<$GuiEventListener>;
    }
    export class $IMixinAbstractWidget {
    }
    export interface $IMixinAbstractWidget {
        setHeightKonkrete(arg0: number): void;
        set heightKonkrete(value: number);
    }
    /**
     * Values that may be interpreted as {@link $IMixinAbstractWidget}.
     */
    export type $IMixinAbstractWidget_ = ((arg0: number) => void);
    export class $IMixinClientPacketListener {
    }
    export interface $IMixinClientPacketListener {
        getCommandsKonkrete(): $CommandDispatcher<$SharedSuggestionProvider>;
        setCommandsKonkrete(arg0: $CommandDispatcher<$SharedSuggestionProvider>): void;
    }
    export class $IMixinLocalPlayer {
    }
    export interface $IMixinLocalPlayer {
        getPermissionLevelKonkrete(): number;
        get permissionLevelKonkrete(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMixinLocalPlayer}.
     */
    export type $IMixinLocalPlayer_ = (() => number);
    export class $IMixinDynamicTexture {
    }
    export interface $IMixinDynamicTexture {
        getPixelsKonkrete(): $NativeImage;
        setPixelsKonkrete(arg0: $NativeImage): void;
    }
}
