import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $BakedModel, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";

declare module "@package/me/pepperbell/continuity/client/resource" {
    export class $ModelWrappingHandler {
        wrap(model: $BakedModel, resourceId: $ResourceLocation_, topLevelId: $ModelResourceLocation_): $BakedModel;
        static init(): void;
        static create(wrapCtm: boolean, wrapEmissive: boolean): $ModelWrappingHandler;
    }
    export class $ResourceRedirectHandler {
        static get(resourceManager: $ResourceManager): $ResourceRedirectHandler;
        static parseHex(string: string, startIndex: number): number;
        redirect(id: $ResourceLocation_): $ResourceLocation;
        getSourceSpritePath(absolutePath: string): string;
        static toHex(i: number): string;
        static PATH_START: string;
        static HEX_END: number;
        static MIN_LENGTH: number;
        static HEX_LENGTH: number;
        static SPRITE_PATH_START: string;
        static PATH_START_LENGTH: number;
        static PATH_END: string;
        static PATH_END_LENGTH: number;
        constructor();
    }
}
