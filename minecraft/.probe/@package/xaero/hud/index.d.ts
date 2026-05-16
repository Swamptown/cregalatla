import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $HudPresetManager } from "@package/xaero/hud/preset";
import { $ControlsHandler } from "@package/xaero/common/controls";
import { $HudMod } from "@package/xaero/common";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $PushboxManager } from "@package/xaero/hud/pushbox";
import { $ModuleSessionHandler, $ModuleSession, $HudModule, $ModuleManager } from "@package/xaero/hud/module";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $OldSystemCompatibility } from "@package/xaero/hud/compat";
import { $HudEventHandler } from "@package/xaero/hud/event";
import { $KeyMappingTickHandler } from "@package/xaero/hud/controls/key";
export * as minimap from "@package/xaero/hud/minimap";
export * as controls from "@package/xaero/hud/controls";
export * as category from "@package/xaero/hud/category";
export * as render from "@package/xaero/hud/render";
export * as module from "@package/xaero/hud/module";
export * as pushbox from "@package/xaero/hud/pushbox";
export * as preset from "@package/xaero/hud/preset";
export * as event from "@package/xaero/hud/event";
export * as path from "@package/xaero/hud/path";
export * as packet from "@package/xaero/hud/packet";
export * as io from "@package/xaero/hud/io";
export * as compat from "@package/xaero/hud/compat";

declare module "@package/xaero/hud" {
    export class $Hud {
        getOldSystemCompatibility(): $OldSystemCompatibility;
        getModuleManager(): $ModuleManager;
        getPushboxManager(): $PushboxManager;
        getPresetManager(): $HudPresetManager;
        getSessionHandler(): $ModuleSessionHandler;
        getEventHandler(): $HudEventHandler;
        constructor(arg0: $ModuleManager, arg1: $PushboxManager, arg2: $HudPresetManager, arg3: $HudEventHandler, arg4: $ModuleSessionHandler, arg5: $OldSystemCompatibility);
        get oldSystemCompatibility(): $OldSystemCompatibility;
        get moduleManager(): $ModuleManager;
        get pushboxManager(): $PushboxManager;
        get presetManager(): $HudPresetManager;
        get sessionHandler(): $ModuleSessionHandler;
        get eventHandler(): $HudEventHandler;
    }
    export class $HudSession {
        init(arg0: $ClientPacketListener): void;
        static getForPlayer(arg0: $LocalPlayer): $HudSession;
        getHudMod(): $HudMod;
        /**
         * @deprecated
         */
        getMultiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        tryCleanup(): void;
        getKeyMappingTickHandler(): $KeyMappingTickHandler;
        /**
         * @deprecated
         */
        getControls(): $ControlsHandler;
        getSession<MS extends $ModuleSession<MS>>(arg0: $HudModule<MS>): MS;
        static getCurrentSession(): $HudSession;
        constructor(arg0: $HudMod);
        get hudMod(): $HudMod;
        get multiTextureRenderTypeRenderers(): $MultiTextureRenderTypeRendererProvider;
        get keyMappingTickHandler(): $KeyMappingTickHandler;
        get controls(): $ControlsHandler;
        static get currentSession(): $HudSession;
    }
}
