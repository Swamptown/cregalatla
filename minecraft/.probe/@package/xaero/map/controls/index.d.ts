import { $MapProcessor } from "@package/xaero/map";
import { $Minecraft, $KeyMapping } from "@package/net/minecraft/client";

declare module "@package/xaero/map/controls" {
    export class $ControlsHandler {
        static isKeyRepeat(arg0: $KeyMapping): boolean;
        handleKeyEvents(): void;
        keyUp(arg0: $KeyMapping, arg1: boolean): void;
        keyDown(arg0: $KeyMapping, arg1: boolean, arg2: boolean): void;
        onKeyInput(arg0: $Minecraft): void;
        constructor(arg0: $MapProcessor);
    }
}
