import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $BakedModelManagerAccessor } from "@package/dev/emi/emi/mixin/accessor";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedModelMixin } from "@package/net/fabricmc/fabric/mixin/renderer/client";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Comparator, $Map, $List, $Map_, $Collection_, $List_, $Collection, $BitSet } from "@package/java/util";
import { $ResourceModelManagerAccessor, $ResourceAtlasSetAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $BlockModelShaper } from "@package/net/minecraft/client/renderer/block";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ModelBakeryAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $Supplier_, $Predicate_, $Function, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $SimpleBakedModelAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/platform/neoforge";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ChunkRenderTypeSet, $RenderTypeGroup_ } from "@package/net/neoforged/neoforge/client";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBakedModelExtension, $IModelBakerExtension, $ModelStateExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ModelLoaderExtension } from "@package/me/pepperbell/continuity/client/mixinterface";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockStatesLoaderHooks, $BlockStatesLoaderHooks$LoadingOverride_, $BakerImplHooks, $ModelLoadingEventDispatcher, $ModelLoaderHooks } from "@package/net/fabricmc/fabric/impl/client/model/loading";
import { $WeightedEntry$Wrapper_ } from "@package/net/minecraft/util/random";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $TextureAtlasSprite, $SpriteLoader$Preparations_, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $RuntimeException, $Comparable, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $FabricBakedModelManager } from "@package/net/fabricmc/fabric/api/client/model/loading/v1";
import { $ModelBakeryAccessor as $ModelBakeryAccessor$1 } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $BlockModel, $ItemOverrides, $BakedQuad, $ItemTransforms, $ItemModelGenerator, $BlockModelDefinition, $BlockModelDefinition$Context } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ModelWrappingHandler } from "@package/me/pepperbell/continuity/client/resource";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $IDynamicBakedModel } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation, $ResourceLocation_, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $RenderContext } from "@package/net/fabricmc/fabric/api/renderer/v1/render";
import { $OctahedralGroup, $Transformation } from "@package/com/mojang/math";
import { $FabricBakedModel } from "@package/net/fabricmc/fabric/api/renderer/v1/model";

declare module "@package/net/minecraft/client/resources/model" {
    export class $BakedModel {
    }
    export interface $BakedModel extends $IBakedModelExtension, $BakedModelMixin, $FabricBakedModel {
        /**
         * @deprecated
         */
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get particleIcon(): $TextureAtlasSprite;
    }
    export class $ModelBakery implements $ModelBakeryAccessor, $ModelBakeryAccessor$1, $ModelLoaderExtension, $ModelLoaderHooks {
        bakeModels(arg0: $ModelBakery$TextureGetter_): void;
        getModelGroups(): $Object2IntMap<$BlockState>;
        getBakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        registerModelAndLoadDependencies(arg0: $ModelResourceLocation_, arg1: $UnbakedModel): void;
        handler$epb000$platform$addModel(ci: $CallbackInfo): void;
        continuity$getModelWrappingHandler(): $ModelWrappingHandler;
        wrapOperation$bjb000$ldlib2$injectStateToModelLocation(arg0: $Logger, arg1: string, arg2: $Object[], arg3: $Operation_<any>): void;
        modifyExpressionValue$bjb000$ldlib2$changeLoadedModel(arg0: $Collection_<any>, arg1: $ModelResourceLocation_, arg2: $LocalRef<any>): $Collection<any>;
        continuity$setModelWrappingHandler(handler: $ModelWrappingHandler): void;
        fabric_getDispatcher(): $ModelLoadingEventDispatcher;
        fabric_getMissingModel(): $UnbakedModel;
        fabric_getOrLoadModel(arg0: $ResourceLocation_): $UnbakedModel;
        fabric_add(arg0: $ModelResourceLocation_, arg1: $UnbakedModel): void;
        callGetModel(arg0: $ResourceLocation_): $UnbakedModel;
        invokeGetModel(arg0: $ResourceLocation_): $UnbakedModel;
        getTopLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
        static BLOCK_ENTITY_MARKER: $BlockModel;
        static ITEM_MODEL_GENERATOR: $ItemModelGenerator;
        static NO_PATTERN_SHIELD: $Material;
        static DESTROY_STAGE_COUNT: number;
        static DESTROY_STAGES: $List<$ResourceLocation>;
        static BANNER_BASE: $Material;
        static GENERATION_MARKER: $BlockModel;
        static BREAKING_LOCATIONS: $List<$ResourceLocation>;
        static MISSING_MODEL_LOCATION: $ResourceLocation;
        static DESTROY_TYPES: $List<$RenderType>;
        static MISSING_MODEL_MESH: string;
        static FIRE_1: $Material;
        static LAVA_FLOW: $Material;
        bakedCache: $Map<$ModelBakery$BakedCacheKey, $BakedModel>;
        static SHIELD_BASE: $Material;
        static FIRE_0: $Material;
        static WATER_FLOW: $Material;
        static MODEL_LISTER: $FileToIdConverter;
        static WATER_OVERLAY: $Material;
        static MISSING_MODEL_VARIANT: $ModelResourceLocation;
        constructor(arg0: $BlockColors, arg1: $ProfilerFiller, arg2: $Map_<$ResourceLocation_, $BlockModel>, arg3: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>);
        get modelGroups(): $Object2IntMap<$BlockState>;
        get bakedTopLevelModels(): $Map<$ModelResourceLocation, $BakedModel>;
        get topLevelModels(): $Map<$ModelResourceLocation, $UnbakedModel>;
    }
    export class $UnbakedModel {
    }
    export interface $UnbakedModel {
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $BuiltInModel implements $BakedModel {
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        constructor(arg0: $ItemTransforms, arg1: $ItemOverrides, arg2: $TextureAtlasSprite, arg3: boolean);
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelState {
    }
    export interface $ModelState extends $ModelStateExtension {
        isUvLocked(): boolean;
        getRotation(): $Transformation;
        get uvLocked(): boolean;
        get rotation(): $Transformation;
    }
    export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ResourceModelManagerAccessor, $FabricBakedModelManager, $IdentifiableResourceReloadListener, $BakedModelManagerAccessor {
        close(): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getModelBakery(): $ModelBakery;
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        getModel(arg0: $ModelResourceLocation_): $BakedModel;
        getBlockModelShaper(): $BlockModelShaper;
        getMissingModel(): $BakedModel;
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        updateMaxMipLevel(arg0: number): void;
        requiresRender(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getName(): string;
        getModel(arg0: $ResourceLocation_): $BakedModel;
        getModels(): $Map<$ModelResourceLocation, $BakedModel>;
        getMaxMipmapLevels(): number;
        getAtlases(): $AtlasSet;
        bakedRegistry: $Map<$ModelResourceLocation, $BakedModel>;
        constructor(arg0: $TextureManager, arg1: $BlockColors, arg2: number);
        get modelBakery(): $ModelBakery;
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get blockModelShaper(): $BlockModelShaper;
        get missingModel(): $BakedModel;
        get name(): string;
        get models(): $Map<$ModelResourceLocation, $BakedModel>;
        get maxMipmapLevels(): number;
        get atlases(): $AtlasSet;
    }
    export class $WeightedBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel, $IBakedModelExtension {
        isVanillaAdapter(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getOverrides(): $ItemOverrides;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        useAmbientOcclusion(): boolean;
        getModelData(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_, modelData: $ModelData): $ModelData;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        isVanilla: boolean;
        constructor(arg0: $List_<$WeightedEntry$Wrapper_<$BakedModel>>);
        get vanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get transforms(): $ItemTransforms;
        get overrides(): $ItemOverrides;
        get gui3d(): boolean;
    }
    export class $WeightedBakedModel$Builder {
        add(arg0: $BakedModel, arg1: number): $WeightedBakedModel$Builder;
        build(): $BakedModel;
        constructor();
    }
    export class $ModelBaker {
    }
    export interface $ModelBaker extends $IModelBakerExtension {
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        /**
         * @deprecated
         */
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
    }
    export class $SimpleBakedModel$Builder {
        /**
         * @deprecated
         */
        build(): $BakedModel;
        build(arg0: $RenderTypeGroup_): $BakedModel;
        item(): $SimpleBakedModel$Builder;
        handler$hal000$ferritecore$deduplicate(arg0: $Direction_, arg1: $BakedQuad, arg2: $CallbackInfoReturnable<any>): void;
        handler$hal000$ferritecore$deduplicate(arg0: $BakedQuad, arg1: $CallbackInfoReturnable<any>): void;
        particle(arg0: $TextureAtlasSprite): $SimpleBakedModel$Builder;
        addUnculledFace(arg0: $BakedQuad): $SimpleBakedModel$Builder;
        addCulledFace(arg0: $Direction_, arg1: $BakedQuad): $SimpleBakedModel$Builder;
        constructor(arg0: $BlockModel, arg1: $ItemOverrides, arg2: boolean);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $ItemTransforms, arg4: $ItemOverrides);
    }
    export class $MultiPartBakedModel$Builder {
        add(arg0: $Predicate_<$BlockState>, arg1: $BakedModel): void;
        build(): $BakedModel;
        redirect$hai000$ferritecore$build(arg0: $List_<any>): $MultiPartBakedModel;
        constructor();
    }
    export class $Material {
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>): $VertexConsumer;
        buffer(arg0: $MultiBufferSource_, arg1: $Function_<$ResourceLocation, $RenderType>, arg2: boolean): $VertexConsumer;
        texture(): $ResourceLocation;
        renderType(arg0: $Function_<$ResourceLocation, $RenderType>): $RenderType;
        atlasLocation(): $ResourceLocation;
        sprite(): $TextureAtlasSprite;
        static COMPARATOR: $Comparator<$Material>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $BlockModelRotation extends $Enum<$BlockModelRotation> implements $ModelState {
        static values(): $BlockModelRotation[];
        static valueOf(arg0: string): $BlockModelRotation;
        actualRotation(): $OctahedralGroup;
        static by(arg0: number, arg1: number): $BlockModelRotation;
        getRotation(): $Transformation;
        isUvLocked(): boolean;
        mayApplyArbitraryRotation(): boolean;
        static X90_Y0: $BlockModelRotation;
        static X0_Y180: $BlockModelRotation;
        static X0_Y270: $BlockModelRotation;
        static X180_Y270: $BlockModelRotation;
        static X180_Y0: $BlockModelRotation;
        static X270_Y90: $BlockModelRotation;
        static X0_Y0: $BlockModelRotation;
        static X0_Y90: $BlockModelRotation;
        static X90_Y270: $BlockModelRotation;
        static X90_Y180: $BlockModelRotation;
        static X180_Y180: $BlockModelRotation;
        static X270_Y0: $BlockModelRotation;
        static X270_Y180: $BlockModelRotation;
        static X90_Y90: $BlockModelRotation;
        static X270_Y270: $BlockModelRotation;
        static X180_Y90: $BlockModelRotation;
        get rotation(): $Transformation;
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelRotation}.
     */
    export type $BlockModelRotation_ = "x0_y0" | "x0_y90" | "x0_y180" | "x0_y270" | "x90_y0" | "x90_y90" | "x90_y180" | "x90_y270" | "x180_y0" | "x180_y90" | "x180_y180" | "x180_y270" | "x270_y0" | "x270_y90" | "x270_y180" | "x270_y270";
    export class $AtlasSet$StitchResult {
        readyForUpload(): $CompletableFuture<void>;
        missing(): $TextureAtlasSprite;
        upload(): void;
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        constructor(arg0: $TextureAtlas, arg1: $SpriteLoader$Preparations_);
    }
    export class $BlockStateModelLoader$LoadedJson extends $Record {
        data(): $JsonElement;
        source(): string;
        parse(arg0: $ResourceLocation_, arg1: $BlockModelDefinition$Context): $BlockModelDefinition;
        constructor(arg0: string, arg1: $JsonElement_);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedJson}.
     */
    export type $BlockStateModelLoader$LoadedJson_ = { source?: string, data?: $JsonElement_,  } | [source?: string, data?: $JsonElement_, ];
    export class $ModelBakery$TextureGetter {
    }
    export interface $ModelBakery$TextureGetter {
        get(arg0: $ModelResourceLocation_, arg1: $Material): $TextureAtlasSprite;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$TextureGetter}.
     */
    export type $ModelBakery$TextureGetter_ = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite);
    export class $AtlasSet$AtlasEntry extends $Record implements $AutoCloseable {
        close(): void;
        atlasInfoLocation(): $ResourceLocation;
        atlas(): $TextureAtlas;
        constructor(arg0: $TextureAtlas, arg1: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $AtlasSet$AtlasEntry}.
     */
    export type $AtlasSet$AtlasEntry_ = { atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_,  } | [atlas?: $TextureAtlas, atlasInfoLocation?: $ResourceLocation_, ];
    export class $SimpleBakedModel implements $BakedModel, $SimpleBakedModelAccessor {
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource): $List<$BakedQuad>;
        isCustomRenderer(): boolean;
        getTransforms(): $ItemTransforms;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getOverrides(): $ItemOverrides;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        getParticleIcon(): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<$BakedQuad>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        isVanillaAdapter(): boolean;
        getBlockRenderTypes(): $ChunkRenderTypeSet;
        itemRenderTypes: $List<$RenderType>;
        fabulousItemRenderTypes: $List<$RenderType>;
        unculledFaces: $List<$BakedQuad>;
        culledFaces: $Map<$Direction, $List<$BakedQuad>>;
        particleIcon: $TextureAtlasSprite;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        blockRenderTypes: $ChunkRenderTypeSet;
        overrides: $ItemOverrides;
        /**
         * @deprecated
         */
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides);
        constructor(arg0: $List_<$BakedQuad>, arg1: $Map_<$Direction_, $List_<$BakedQuad>>, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $TextureAtlasSprite, arg6: $ItemTransforms, arg7: $ItemOverrides, arg8: $RenderTypeGroup_);
        get customRenderer(): boolean;
        get gui3d(): boolean;
        get vanillaAdapter(): boolean;
    }
    export class $ModelManager$ReloadState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ModelManager$ReloadState}.
     */
    export type $ModelManager$ReloadState_ = { atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, modelCache?: $Map_<$BlockState_, $BakedModel>, missingModel?: $BakedModel, modelBakery?: $ModelBakery, readyForUpload?: $CompletableFuture<void>,  } | [atlasPreparations?: $Map_<$ResourceLocation_, $AtlasSet$StitchResult>, modelCache?: $Map_<$BlockState_, $BakedModel>, missingModel?: $BakedModel, modelBakery?: $ModelBakery, readyForUpload?: $CompletableFuture<void>, ];
    export class $BlockStateModelLoader implements $BlockStatesLoaderHooks {
        static getValueHelper<T extends $Comparable<T>>(arg0: $Property<T>, arg1: string): T;
        getModelGroups(): $Object2IntMap<$BlockState>;
        loadAllBlockStates(): void;
        fabric_setLoadingOverride(arg0: $BlockStatesLoaderHooks$LoadingOverride_): void;
        static SINGLETON_MODEL_GROUP: number;
        static BLOCKSTATE_LISTER: $FileToIdConverter;
        constructor(arg0: $Map_<$ResourceLocation_, $List_<$BlockStateModelLoader$LoadedJson_>>, arg1: $ProfilerFiller, arg2: $UnbakedModel, arg3: $BlockColors, arg4: $BiConsumer_<$ModelResourceLocation, $UnbakedModel>);
        get modelGroups(): $Object2IntMap<$BlockState>;
    }
    export class $BlockStateModelLoader$LoadedModel extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$LoadedModel}.
     */
    export type $BlockStateModelLoader$LoadedModel_ = { key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel,  } | [key?: $Supplier_<$BlockStateModelLoader$ModelGroupKey>, model?: $UnbakedModel, ];
    export class $MultiPartBakedModel implements $BakedModel, $IDynamicBakedModel, $FabricBakedModel {
        getSelectors(arg0: $BlockState_): $BitSet;
        redirect$haj000$ferritecore$redirectCacheGet(arg0: $Map_<any, any>, arg1: $Object): $Object;
        redirect$haj000$ferritecore$redirectCachePut(arg0: $Map_<any, any>, arg1: $Object, arg2: $Object): $Object;
        isVanillaAdapter(): boolean;
        getQuads(arg0: $BlockState_, arg1: $Direction_, arg2: $RandomSource, arg3: $ModelData, arg4: $RenderType): $List<any>;
        isCustomRenderer(): boolean;
        /**
         * @deprecated
         */
        getTransforms(): $ItemTransforms;
        emitBlockQuads(arg0: $BlockAndTintGetter, arg1: $BlockState_, arg2: $BlockPos_, arg3: $Supplier_<any>, arg4: $RenderContext): void;
        emitItemQuads(arg0: $ItemStack_, arg1: $Supplier_<any>, arg2: $RenderContext): void;
        getRenderTypes(arg0: $BlockState_, arg1: $RandomSource, arg2: $ModelData): $ChunkRenderTypeSet;
        getOverrides(): $ItemOverrides;
        applyTransform(arg0: $ItemDisplayContext_, arg1: $PoseStack, arg2: boolean): $BakedModel;
        isGui3d(): boolean;
        usesBlockLight(): boolean;
        /**
         * @deprecated
         */
        getParticleIcon(): $TextureAtlasSprite;
        getParticleIcon(arg0: $ModelData): $TextureAtlasSprite;
        useAmbientOcclusion(): boolean;
        useAmbientOcclusion(arg0: $BlockState_, arg1: $ModelData, arg2: $RenderType): $TriState;
        getModelData(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ModelData): $ModelData;
        getRenderTypes(arg0: $ItemStack_, arg1: boolean): $List<$RenderType>;
        getRenderPasses(arg0: $ItemStack_, arg1: boolean): $List<$BakedModel>;
        particleIcon: $TextureAtlasSprite;
        isVanilla: boolean;
        hasAmbientOcclusion: boolean;
        transforms: $ItemTransforms;
        overrides: $ItemOverrides;
        constructor(arg0: $List_<$Pair<$Predicate_<$BlockState>, $BakedModel>>);
        get vanillaAdapter(): boolean;
        get customRenderer(): boolean;
        get gui3d(): boolean;
    }
    export class $ModelBakery$BakedCacheKey extends $Record {
        id(): $ResourceLocation;
        transformation(): $Transformation;
        isUvLocked(): boolean;
        constructor(id: $ResourceLocation_, transformation: $Transformation, isUvLocked: boolean);
        get uvLocked(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakery$BakedCacheKey}.
     */
    export type $ModelBakery$BakedCacheKey_ = { id?: $ResourceLocation_, isUvLocked?: boolean, transformation?: $Transformation,  } | [id?: $ResourceLocation_, isUvLocked?: boolean, transformation?: $Transformation, ];
    export class $BlockStateModelLoader$ModelGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockStateModelLoader$ModelGroupKey}.
     */
    export type $BlockStateModelLoader$ModelGroupKey_ = { models?: $List_<$UnbakedModel>, coloringValues?: $List_<$Object>,  } | [models?: $List_<$UnbakedModel>, coloringValues?: $List_<$Object>, ];
    export class $BlockStateModelLoader$BlockStateDefinitionException extends $RuntimeException {
    }
    export class $ModelResourceLocation extends $Record {
        id(): $ResourceLocation;
        static standalone(arg0: $ResourceLocation_): $ModelResourceLocation;
        getVariant(): string;
        variant(): string;
        static vanilla(arg0: string, arg1: string): $ModelResourceLocation;
        static inventory(arg0: $ResourceLocation_): $ModelResourceLocation;
        static INVENTORY_VARIANT: string;
        static STANDALONE_VARIANT: string;
        constructor(id: $ResourceLocation_, variant: string);
    }
    /**
     * Values that may be interpreted as {@link $ModelResourceLocation}.
     */
    export type $ModelResourceLocation_ = { id?: $ResourceLocation_, variant?: string,  } | [id?: $ResourceLocation_, variant?: string, ];
    export class $ModelBakery$ModelBakerImpl implements $ModelBaker, $BakerImplHooks {
        getModelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
        getModel(arg0: $ResourceLocation_): $UnbakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState): $BakedModel;
        bake(arg0: $ResourceLocation_, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        fabric_getTextureGetter(): $Function<any, any>;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState): $BakedModel;
        bakeUncached(arg0: $UnbakedModel, arg1: $ModelState, arg2: $Function_<$Material, $TextureAtlasSprite>): $BakedModel;
        getTopLevelModel(arg0: $ModelResourceLocation_): $UnbakedModel;
        this$0: $ModelBakery;
        constructor(arg0: $ModelBakery, arg1: $ModelBakery$TextureGetter_, arg2: $ModelResourceLocation_);
        get modelTextureGetter(): $Function<$Material, $TextureAtlasSprite>;
    }
    export class $AtlasSet implements $AutoCloseable, $ResourceAtlasSetAccessor {
        close(): void;
        scheduleLoad(arg0: $ResourceManager, arg1: number, arg2: $Executor_): $Map<$ResourceLocation, $CompletableFuture<$AtlasSet$StitchResult>>;
        getAtlas(arg0: $ResourceLocation_): $TextureAtlas;
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        constructor(arg0: $Map_<$ResourceLocation_, $ResourceLocation_>, arg1: $TextureManager);
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
}
