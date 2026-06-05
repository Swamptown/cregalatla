import { $Color, $Colorc } from "@package/foundry/veil/api/client/color";
import { $CullFrustum } from "@package/foundry/veil/api/client/render";
import { $Camera } from "@package/net/minecraft/client";
import { $LightTypeRegistry$LightType } from "@package/foundry/veil/api/client/registry";
import { $Vector3fc } from "@package/org/joml";

declare module "@package/foundry/veil/api/client/render/light/data" {
    export class $LightData {
        setBrightness(arg0: number): $LightData;
        setColor(arg0: $Colorc): $LightData;
        setColor(arg0: $Vector3fc): $LightData;
        setColor(arg0: number): $LightData;
        setColor(arg0: number, arg1: number, arg2: number): $LightData;
        getType(): $LightTypeRegistry$LightType<never>;
        isVisible(arg0: $CullFrustum): boolean;
        getBrightness(): number;
        getColor(): $Color;
        setTo(arg0: $Camera): $LightData;
        constructor();
        get type(): $LightTypeRegistry$LightType<never>;
        set to(value: $Camera);
    }
}
