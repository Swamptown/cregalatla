import { $SpriteContents$FrameInfo, $SpriteContents$AnimatedTexture } from "@package/net/minecraft/client/renderer/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $List } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload" {
    export class $SpriteContentsFrameInfoAccessor {
    }
    export interface $SpriteContentsFrameInfoAccessor {
        getIndex(): number;
        getTime(): number;
        get index(): number;
        get time(): number;
    }
    export class $SpriteContentsTickerAccessor {
    }
    export interface $SpriteContentsTickerAccessor {
        getFrameIndex(): number;
        getFrameTicks(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        get frameIndex(): number;
        get frameTicks(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getImages(): $NativeImage[];
        get images(): $NativeImage[];
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAccessor}.
     */
    export type $SpriteContentsAccessor_ = (() => $NativeImage[]);
    export class $SpriteContentsAnimatedTextureAccessor {
    }
    export interface $SpriteContentsAnimatedTextureAccessor {
        getFrameRowSize(): number;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        get frameRowSize(): number;
        get frames(): $List<$SpriteContents$FrameInfo>;
    }
}
