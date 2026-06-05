import { $InputStream, $Closeable } from "@package/java/io";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AspectRatio } from "@package/de/keksuccino/fancymenu/util/rendering";
export * as resources from "@package/de/keksuccino/fancymenu/util/resource/resources";

declare module "@package/de/keksuccino/fancymenu/util/resource" {
    export class $PlayableResource {
    }
    export interface $PlayableResource extends $Resource {
        stop(): void;
        play(): void;
        isPlaying(): boolean;
        pause(): void;
        isPaused(): boolean;
        get playing(): boolean;
        get paused(): boolean;
    }
    export class $Resource {
    }
    export interface $Resource extends $Closeable {
        isLoadingCompleted(): boolean;
        isLoadingFailed(): boolean;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        open(): $InputStream;
        isClosed(): boolean;
        waitForReady(arg0: number): void;
        isReady(): boolean;
        get loadingCompleted(): boolean;
        get loadingFailed(): boolean;
        get closed(): boolean;
        get ready(): boolean;
    }
    export class $RenderableResource {
        static MISSING_TEXTURE_LOCATION: $ResourceLocation;
        static FULLY_TRANSPARENT_TEXTURE: $ResourceLocation;
    }
    export interface $RenderableResource extends $Resource {
        getWidth(): number;
        getHeight(): number;
        reset(): void;
        getResourceLocation(): $ResourceLocation;
        getAspectRatio(): $AspectRatio;
        get width(): number;
        get height(): number;
        get resourceLocation(): $ResourceLocation;
        get aspectRatio(): $AspectRatio;
    }
}
