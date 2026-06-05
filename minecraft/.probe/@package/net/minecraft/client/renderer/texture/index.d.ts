import { $AnimatedTextureDuck, $IPotentiallyInvisibleSpriteContents } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $TextureAtlasSpriteExtension, $SpriteContentsExtension as $SpriteContentsExtension$3 } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ITextureSize } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $TextureType } from "@package/com/supermartijn642/fusion/api/texture";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1, $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $SpriteExtension } from "@package/me/pepperbell/continuity/client/mixinterface";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $File_, $Closeable } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $TextureAtlasSpriteExtension as $TextureAtlasSpriteExtension$1, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/com/supermartijn642/fusion/extensions";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $HttpTextureAccessor } from "@package/dev/tr7zw/skinlayers/accessor";
import { $IMixinDynamicTexture } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpriteContentsExtension as $SpriteContentsExtension$1, $TickerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
import { $Pair } from "@package/com/supermartijn642/fusion/api/util";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(arg0: $Stitcher$Entry, arg1: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        static smallestFittingMinTexel(arg0: number, arg1: number): number;
        registerSprite(arg0: T): void;
        gatherSprites(arg0: $Stitcher$SpriteLoader_<T>): void;
        getWidth(): number;
        getHeight(): number;
        stitch(): void;
        constructor(arg0: number, arg1: number, arg2: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(arg0: number, arg1: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        setFilter(arg0: boolean, arg1: boolean): void;
        bind(): void;
        reset(arg0: $TextureManager, arg1: $ResourceManager, arg2: $ResourceLocation_, arg3: $Executor_): void;
        load(arg0: $ResourceManager): void;
        getId(): number;
        close(): void;
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        restoreLastBlurMipmap(): void;
        handler$zla000$veil$bind(arg0: $CallbackInfo): void;
        releaseId(): void;
        handler$zla000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor();
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static pack(arg0: number, arg1: number): number;
        static pack(arg0: number, arg1: boolean): number;
        static v(arg0: boolean): number;
        close(): void;
        static u(arg0: number): number;
        teardownOverlayColor(): void;
        setupOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $HttpTextureAccessor {
        getImage(): $NativeImage;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(arg0: $File_, arg1: string, arg2: $ResourceLocation_, arg3: boolean, arg4: $Runnable_);
        get image(): $NativeImage;
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        handler$clg000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
        uploadInterpolatedFrame(arg0: number, arg1: number, arg2: $SpriteContents$Ticker): void;
        close(): void;
        this$0: $SpriteContents;
        constructor(arg0: $SpriteContents);
    }
    export class $SpriteLoader$Preparations extends $Record {
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        width(): number;
        height(): number;
        missing(): $TextureAtlasSprite;
        mipLevel(): number;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>,  } | [width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(arg0: T, arg1: number);
        constructor(entry: T, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { entry?: $Stitcher$Entry, width?: number, height?: number,  } | [entry?: $Stitcher$Entry, width?: number, height?: number, ];
    export class $SpriteLoader {
        static runSpriteSuppliers(arg0: $SpriteResourceLoader_, arg1: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, arg2: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: number, arg3: $Executor_, arg4: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        static create(arg0: $TextureAtlas): $SpriteLoader;
        stitch(arg0: $List_<$SpriteContents>, arg1: number, arg2: $Executor_): $SpriteLoader$Preparations;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(arg0: T, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
        constructor(arg0: number, arg1: number);
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(arg0: $ResourceManager, arg1: $ResourceLocation_, arg2: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor, $TickerExtension {
        simulated$isPlaying(): boolean;
        simulated$setPlaying(arg0: boolean): void;
        handler$clf000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        close(): void;
        tickAndUpload(arg0: number, arg1: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getFrameTicks(): number;
        getFrameIndex(): number;
        subFrame: number;
        animationInfo: $SpriteContents$AnimatedTexture;
        frame: number;
        constructor(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData);
        get frameTicks(): number;
        get frameIndex(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$2, $SpriteContentsInvoker, $SpriteContentsExtension, $SpriteContentsAccessor, $SpriteContentsExtension$3, $SpriteContentsExtension$1, $IPotentiallyInvisibleSpriteContents {
        getOriginalImage(): $NativeImage;
        fusionTextureMetadata(): $Pair<any, any>;
        sodium$hasTranslucentPixels(): boolean;
        railways$shouldDoInvisibility(): boolean;
        increaseMipLevel(arg0: number): void;
        getFrameCount(): number;
        sodium$hasTransparentPixels(): boolean;
        getUniqueFrames(): $IntStream;
        isTransparent(arg0: number, arg1: number, arg2: number): boolean;
        clearFusionTextureMetadata(): void;
        sodium$setActive(arg0: boolean): void;
        sodium$hasAnimation(): boolean;
        sodium$isActive(): boolean;
        simulated$getTicker(): $SpriteContents$Ticker;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        railways$uploadFrame(arg0: boolean): void;
        railways$isVisible(): boolean;
        createTicker(): $SpriteTicker;
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        height(): number;
        metadata(): $ResourceMetadata;
        uploadFirstFrame(arg0: number, arg1: number): void;
        upload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
        invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
        getImages(): $NativeImage[];
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(arg0: $ResourceLocation_, arg1: $FrameSize_, arg2: $NativeImage, arg3: $ResourceMetadata_);
        get frameCount(): number;
        get uniqueFrames(): $IntStream;
        get images(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $IMixinDynamicTexture {
        getPixels(): $NativeImage;
        setPixels(arg0: $NativeImage): void;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        upload(): void;
        wrapOperation$hhl000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_<any>): void;
        wrapOperation$hhl000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        getPixelsKonkrete(): $NativeImage;
        setPixelsKonkrete(arg0: $NativeImage): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(arg0: number, arg1: number, arg2: boolean);
        constructor(arg0: $NativeImage);
    }
    export class $SpriteContents$AnimatedTexture implements $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureDuck {
        getFrameX(arg0: number): number;
        getFrameY(arg0: number): number;
        uploadFrame(arg0: number, arg1: number, arg2: number): void;
        getUniqueFrames(): $IntStream;
        railways$uploadWithVisibility(): void;
        createTicker(): $SpriteTicker;
        uploadFirstFrame(arg0: number, arg1: number): void;
        getFrameRowSize(): number;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        frames: $List<$SpriteContents$FrameInfo>;
        this$0: $SpriteContents;
        get uniqueFrames(): $IntStream;
        get frameRowSize(): number;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $ResourceTextureAtlasAccessor, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess {
        tick(): void;
        location(): $ResourceLocation;
        maxSupportedTextureSize(): number;
        fabric_spriteFinder(): $SpriteFinderImpl;
        clearTextureData(): void;
        redirect$zbn000$sodium_extra$sodiumExtra$tickAnimatedSprites(arg0: $TextureAtlasSprite): $TextureAtlasSprite$Ticker;
        dumpContents(arg0: $ResourceLocation_, arg1: $Path_): void;
        cycleAnimationFrames(): void;
        updateFilter(arg0: $SpriteLoader$Preparations_): void;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        upload(arg0: $SpriteLoader$Preparations_): void;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        getWidth(): number;
        getHeight(): number;
        getMipLevel(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        blur: boolean;
        id: number;
        constructor(arg0: $ResourceLocation_);
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get width(): number;
        get height(): number;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        getY(): number;
        add(arg0: $Stitcher$Holder_<T>): boolean;
        walk(arg0: $Stitcher$SpriteLoader_<T>): void;
        getX(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get y(): number;
        get x(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $ITextureSize {
        ldlib2$getImageWidth(): number;
        ldlib2$getImageHeight(): number;
        getTextureImage(arg0: $ResourceManager): $SimpleTexture$TextureImage;
        getWidth(): number;
        getHeight(): number;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(arg0: $ResourceLocation_);
        get width(): number;
        get height(): number;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $TextureManagerExtension, $IdentifiableResourceReloadListener {
        dumpAllSheets(arg0: $Path_): void;
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        bindForSetup(arg0: $ResourceLocation_): void;
        modify$zln000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        handler$zkg000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        tick(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        register(arg0: $ResourceLocation_, arg1: $AbstractTexture): void;
        register(arg0: string, arg1: $DynamicTexture): $ResourceLocation;
        close(): void;
        release(arg0: $ResourceLocation_): void;
        getTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture): $AbstractTexture;
        getTexture(arg0: $ResourceLocation_): $AbstractTexture;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        preload(arg0: $ResourceLocation_, arg1: $Executor_): $CompletableFuture<void>;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(arg0: $ResourceManager);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension$1, $TextureAtlasSpriteExtension, $SpriteExtension {
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        sodium$hasUnknownImageContents(): boolean;
        getUOffset(arg0: number): number;
        getVOffset(arg0: number): number;
        setFusionTextureType(type: $TextureType<any>): void;
        getFusionTextureType(): $TextureType<any>;
        uvShrinkRatio(): number;
        continuity$getEmissiveSprite(): $TextureAtlasSprite;
        continuity$setEmissiveSprite(sprite: $TextureAtlasSprite): void;
        createTicker(): $TextureAtlasSprite$Ticker;
        getY(): number;
        contents(): $SpriteContents;
        wrap(arg0: $VertexConsumer): $VertexConsumer;
        uploadFirstFrame(): void;
        getX(): number;
        atlasLocation(): $ResourceLocation;
        getU0(): number;
        getU1(): number;
        getV0(): number;
        getV1(): number;
        getU(arg0: number): number;
        getV(arg0: number): number;
        x: number;
        y: number;
        v0: number;
        u0: number;
        v1: number;
        u1: number;
        constructor(arg0: $ResourceLocation_, arg1: $SpriteContents, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
    }
    export class $MipmapGenerator {
        static generateMipLevels(arg0: $NativeImage[], arg1: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
