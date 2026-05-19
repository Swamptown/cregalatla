import { $Logger } from "@package/org/slf4j";
import { $Path_, $Path } from "@package/java/nio/file";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Object } from "@package/java/lang";
export * as neoforge from "@package/concerrox/emixx/neoforge";
export * as content from "@package/concerrox/emixx/content";
export * as gui from "@package/concerrox/emixx/gui";
export * as config from "@package/concerrox/emixx/config";
export * as util from "@package/concerrox/emixx/util";

declare module "@package/concerrox/emixx" {
    export class $EmiPlusPlus {
        getLOGGER$emixx_common(): $Logger;
        setLOGGER$emixx_common(<set-?>: $Logger): void;
        getPLATFORM$emixx_common(): $EmiPlusPlusPlatform;
        setPLATFORM$emixx_common(<set-?>: $EmiPlusPlusPlatform_): void;
        initializeClient(platform: $EmiPlusPlusPlatform_): void;
        initialize(platform: $EmiPlusPlusPlatform_): void;
        static PLATFORM: $EmiPlusPlusPlatform;
        static MOD_ID: string;
        static INSTANCE: $EmiPlusPlus;
    }
    export class $EmiPlusPlusPlatform {
    }
    export interface $EmiPlusPlusPlatform {
        getConfigDirectoryPath(): $Path;
        get configDirectoryPath(): $Path;
    }
    /**
     * Values that may be interpreted as {@link $EmiPlusPlusPlatform}.
     */
    export type $EmiPlusPlusPlatform_ = (() => $Path_);
    export class $EmiPlusPlusKt {
        static text(type: string, path: string): $MutableComponent;
        static text(path: string): $MutableComponent;
        static text(type: string, path: string, ...args: $Object[]): $MutableComponent;
        static res(path: string): $ResourceLocation;
        static getMinecraft(): $Minecraft;
        static get minecraft(): $Minecraft;
    }
}
