import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";
import { $Enum } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension {
        clear(arg0: boolean): void;
        resize(arg0: number, arg1: number, arg2: boolean): void;
        bindRead(): void;
        unbindRead(): void;
        handler$zlc000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        createBuffers(arg0: number, arg1: number, arg2: boolean): void;
        setFilterMode(arg0: number): void;
        handler$zll000$veil$createBuffers(arg0: $CallbackInfo): void;
        handler$zll000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$zll000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$ckc000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        handler$zlc000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        handler$zll000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        getDepthTextureId(): number;
        handler$zll000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        veil$getTexture(arg0: number): number;
        handler$zll000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        getColorTextureId(): number;
        setClearColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        checkStatus(): void;
        bindWrite(arg0: boolean): void;
        unbindWrite(): void;
        blitToScreen(arg0: number, arg1: number): void;
        blitToScreen(arg0: number, arg1: number, arg2: boolean): void;
        destroyBuffers(): void;
        copyDepthFrom(arg0: $RenderTarget): void;
        veil$clearColorBuffer(arg0: boolean): void;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: boolean);
        get depthTextureId(): number;
        get stencilEnabled(): boolean;
        get colorTextureId(): number;
        get clearChannels(): number[];
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(arg0: number, arg1: number);
    }
    export class $RenderPipeline {
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        canBeginRecording(): boolean;
        canBeginProcessing(): boolean;
        beginProcessing(): boolean;
        processRecordedQueue(): void;
        endProcessing(): void;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        beginRecording(): boolean;
        endRecording(): void;
        recordRenderCall(arg0: $RenderCall_): void;
        constructor();
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean);
    }
}
