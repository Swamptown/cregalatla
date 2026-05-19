import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/preset" {
    export class $HudPreset {
        applyAndConfirm(): void;
        confirm(): void;
        getName(): $Component;
        apply(): void;
        getId(): $ResourceLocation;
        cancel(): void;
        get name(): $Component;
        get id(): $ResourceLocation;
    }
    export class $HudPresetManager {
        register(arg0: $HudPreset): void;
        getPresets(): $Iterable<$HudPreset>;
        constructor();
        get presets(): $Iterable<$HudPreset>;
    }
}
