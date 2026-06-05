import { $JsonDeserializationContext_, $JsonObject_, $JsonDeserializer, $Gson, $JsonElement_ } from "@package/com/google/gson";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $BlockModelRotation, $ModelState, $BakedModel, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $List, $Map_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Direction$Axis_, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Type } from "@package/java/lang/reflect";
import { $ModelInstance } from "@package/com/supermartijn642/fusion/api/model";
import { $BakedQuadView } from "@package/net/caffeinemc/mods/sodium/client/model/quad";
import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $RuntimeException } from "@package/java/lang";
import { $Reader } from "@package/java/io";
import { $ItemStack_, $ItemDisplayContext_, $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $Logger } from "@package/org/slf4j";
import { $BlockGeometryBakingContext } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $BlockModelExtension } from "@package/com/supermartijn642/fusion/extensions";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $MultiPart } from "@package/net/minecraft/client/renderer/block/model/multipart";
import { $ExtraFaceData, $ExtraFaceData_ } from "@package/net/neoforged/neoforge/client/model";
import { $Stream } from "@package/java/util/stream";
import { $BakedQuadAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector3f } from "@package/org/joml";
export * as multipart from "@package/net/minecraft/client/renderer/block/model/multipart";

declare module "@package/net/minecraft/client/renderer/block/model" {
    export class $BlockElement {
        setFaceData(arg0: $ExtraFaceData_): void;
        getFaceData(): $ExtraFaceData;
        uvsByFace(arg0: $Direction_): number[];
        rotation: $BlockElementRotation;
        shade: boolean;
        from: $Vector3f;
        to: $Vector3f;
        faces: $Map<$Direction, $BlockElementFace>;
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Map_<$Direction_, $BlockElementFace_>, arg3: $BlockElementRotation_, arg4: boolean, arg5: $ExtraFaceData_);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Map_<$Direction_, $BlockElementFace_>, arg3: $BlockElementRotation_, arg4: boolean);
    }
    export class $BlockFaceUV {
        setMissingUv(arg0: number[]): void;
        getReverseIndex(arg0: number): number;
        getU(arg0: number): number;
        getV(arg0: number): number;
        uvs: number[];
        rotation: number;
        constructor(arg0: number[], arg1: number);
        set missingUv(value: number[]);
    }
    export class $FaceBakery {
        bakeQuad(arg0: $Vector3f, arg1: $Vector3f, arg2: $BlockElementFace_, arg3: $TextureAtlasSprite, arg4: $Direction_, arg5: $ModelState, arg6: $BlockElementRotation_, arg7: boolean): $BakedQuad;
        static recomputeUVs(arg0: $BlockFaceUV, arg1: $Direction_, arg2: $Transformation): $BlockFaceUV;
        static calculateFacing(arg0: number[]): $Direction;
        applyModelRotation(arg0: $Vector3f, arg1: $Transformation): void;
        static VERTEX_INT_SIZE: number;
        static UV_INDEX: number;
        static VERTEX_COUNT: number;
        constructor();
    }
    export class $ItemOverride$Predicate {
        getProperty(): $ResourceLocation;
        getValue(): number;
        constructor(arg0: $ResourceLocation_, arg1: number);
        get property(): $ResourceLocation;
        get value(): number;
    }
    export class $BlockModel$GuiLight extends $Enum<$BlockModel$GuiLight> {
        lightLikeBlock(): boolean;
        static values(): $BlockModel$GuiLight[];
        static valueOf(arg0: string): $BlockModel$GuiLight;
        static getByName(arg0: string): $BlockModel$GuiLight;
        getSerializedName(): string;
        static SIDE: $BlockModel$GuiLight;
        static FRONT: $BlockModel$GuiLight;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockModel$GuiLight}.
     */
    export type $BlockModel$GuiLight_ = "front" | "side";
    export class $BakedQuad implements $BakedQuadView, $BakedQuadAccess {
        getNormalFace(): $ModelQuadFacing;
        hasAO(): boolean;
        isShade(): boolean;
        hasShade(): boolean;
        hasAmbientOcclusion(): boolean;
        getLight(arg0: number): number;
        getFlags(): number;
        getY(arg0: number): number;
        getColor(arg0: number): number;
        isTinted(): boolean;
        getTintIndex(): number;
        getColorIndex(): number;
        getVertexNormal(arg0: number): number;
        getFaceNormal(): number;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        getLightFace(): $Direction;
        getVertices(): number[];
        getDirection(): $Direction;
        getX(arg0: number): number;
        getZ(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        calculateNormal(): number;
        getAccurateNormal(arg0: number): number;
        hasColor(): boolean;
        setVertices(arg0: number[]): void;
        tintIndex: number;
        vertices: number[];
        sprite: $TextureAtlasSprite;
        direction: $Direction;
        constructor(arg0: number[], arg1: number, arg2: $Direction_, arg3: $TextureAtlasSprite, arg4: boolean);
        constructor(arg0: number[], arg1: number, arg2: $Direction_, arg3: $TextureAtlasSprite, arg4: boolean, arg5: boolean);
        get normalFace(): $ModelQuadFacing;
        get shade(): boolean;
        get flags(): number;
        get tinted(): boolean;
        get colorIndex(): number;
        get faceNormal(): number;
        get lightFace(): $Direction;
    }
    export class $ItemOverride$Deserializer implements $JsonDeserializer<$ItemOverride> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ItemOverride;
        getPredicates(arg0: $JsonObject_): $List<$ItemOverride$Predicate>;
        constructor();
    }
    export class $ItemTransforms {
        hasTransform(arg0: $ItemDisplayContext_): boolean;
        getTransform(arg0: $ItemDisplayContext_): $ItemTransform;
        static NO_TRANSFORMS: $ItemTransforms;
        head: $ItemTransform;
        firstPersonLeftHand: $ItemTransform;
        moddedTransforms: $ImmutableMap<$ItemDisplayContext, $ItemTransform>;
        firstPersonRightHand: $ItemTransform;
        thirdPersonRightHand: $ItemTransform;
        thirdPersonLeftHand: $ItemTransform;
        gui: $ItemTransform;
        ground: $ItemTransform;
        fixed: $ItemTransform;
        constructor(arg0: $ItemTransform, arg1: $ItemTransform, arg2: $ItemTransform, arg3: $ItemTransform, arg4: $ItemTransform, arg5: $ItemTransform, arg6: $ItemTransform, arg7: $ItemTransform, arg8: $ImmutableMap<$ItemDisplayContext_, $ItemTransform>);
        constructor(arg0: $ItemTransforms);
        /**
         * @deprecated
         */
        constructor(arg0: $ItemTransform, arg1: $ItemTransform, arg2: $ItemTransform, arg3: $ItemTransform, arg4: $ItemTransform, arg5: $ItemTransform, arg6: $ItemTransform, arg7: $ItemTransform);
    }
    export class $BlockModel$LoopException extends $RuntimeException {
        constructor(arg0: string);
    }
    export class $ItemOverride {
        getPredicates(): $Stream<$ItemOverride$Predicate>;
        getModel(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$ItemOverride$Predicate>);
        get predicates(): $Stream<$ItemOverride$Predicate>;
        get model(): $ResourceLocation;
    }
    export class $BlockModel$Deserializer implements $JsonDeserializer<$BlockModel> {
        getAmbientOcclusion(arg0: $JsonObject_): boolean;
        getElements(arg0: $JsonDeserializationContext_, arg1: $JsonObject_): $List<$BlockElement>;
        getOverrides(arg0: $JsonDeserializationContext_, arg1: $JsonObject_): $List<$ItemOverride>;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockModel;
        constructor();
    }
    export class $BlockModel implements $UnbakedModel, $BlockModelExtension {
        getParentLocation(): $ResourceLocation;
        getGuiLight(): $BlockModel$GuiLight;
        bakeVanilla(arg0: $ModelBaker, arg1: $BlockModel, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: boolean): $BakedModel;
        getRootModel(): $BlockModel;
        static bakeFace(arg0: $BlockElement, arg1: $BlockElementFace_, arg2: $TextureAtlasSprite, arg3: $Direction_, arg4: $ModelState): $BakedQuad;
        hasTexture(arg0: string): boolean;
        static isTextureReference(arg0: string): boolean;
        findTextureEntry(arg0: string): $Either<$Material, string>;
        resolveParents(arg0: $Function_<$ResourceLocation, $UnbakedModel>): void;
        hasAmbientOcclusion(): boolean;
        /**
         * @deprecated
         */
        getElements(): $List<$BlockElement>;
        getTransforms(): $ItemTransforms;
        getMaterial(arg0: string): $Material;
        static fromStream(arg0: $Reader): $BlockModel;
        isResolved(): boolean;
        static fromString(arg0: string): $BlockModel;
        getOverrides(arg0: $ModelBaker, arg1: $BlockModel, arg2: $Function_<$Material, $TextureAtlasSprite>): $ItemOverrides;
        getOverrides(): $List<$ItemOverride>;
        getDependencies(): $Collection<$ResourceLocation>;
        getFusionModel(): $ModelInstance<any>;
        setFusionModel(fusionModel: $ModelInstance<any>): void;
        bake(arg0: $ModelBaker, arg1: $BlockModel, arg2: $Function_<$Material, $TextureAtlasSprite>, arg3: $ModelState, arg4: boolean): $BakedModel;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        parent: $BlockModel;
        parentLocation: $ResourceLocation;
        textureMap: $Map<string, $Either<$Material, string>>;
        guiLight: $BlockModel$GuiLight;
        transforms: $ItemTransforms;
        static GSON: $Gson;
        customData: $BlockGeometryBakingContext;
        overrides: $List<$ItemOverride>;
        static PARTICLE_TEXTURE_REFERENCE: string;
        elements: $List<$BlockElement>;
        name: string;
        static LOGGER: $Logger;
        constructor(arg0: $ResourceLocation_, arg1: $List_<$BlockElement>, arg2: $Map_<string, $Either<$Material, string>>, arg3: boolean, arg4: $BlockModel$GuiLight_, arg5: $ItemTransforms, arg6: $List_<$ItemOverride>);
        get rootModel(): $BlockModel;
        get resolved(): boolean;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $ItemModelGenerator$SpanFacing extends $Enum<$ItemModelGenerator$SpanFacing> {
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerator$SpanFacing}.
     */
    export type $ItemModelGenerator$SpanFacing_ = "up" | "down" | "left" | "right";
    export class $ItemTransform {
        apply(arg0: boolean, arg1: $PoseStack): void;
        static NO_TRANSFORM: $ItemTransform;
        rotation: $Vector3f;
        translation: $Vector3f;
        scale: $Vector3f;
        rightRotation: $Vector3f;
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f, arg3: $Vector3f);
    }
    export class $BlockModelDefinition {
        getMultiVariants(): $Set<$MultiVariant>;
        static fromJsonElement(arg0: $BlockModelDefinition$Context, arg1: $JsonElement_): $BlockModelDefinition;
        isMultiPart(): boolean;
        getMultiPart(): $MultiPart;
        hasVariant(arg0: string): boolean;
        static fromStream(arg0: $BlockModelDefinition$Context, arg1: $Reader): $BlockModelDefinition;
        getVariant(arg0: string): $MultiVariant;
        getVariants(): $Map<string, $MultiVariant>;
        constructor(arg0: $Map_<string, $MultiVariant>, arg1: $MultiPart);
        constructor(arg0: $List_<$BlockModelDefinition>);
        get multiVariants(): $Set<$MultiVariant>;
        get variants(): $Map<string, $MultiVariant>;
    }
    export class $ItemModelGenerator {
        generateBlockModel(arg0: $Function_<$Material, $TextureAtlasSprite>, arg1: $BlockModel): $BlockModel;
        processFrames(arg0: number, arg1: string, arg2: $SpriteContents): $List<$BlockElement>;
        static LAYERS: $List<string>;
        constructor();
    }
    export class $MultiVariant$Deserializer implements $JsonDeserializer<$MultiVariant> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $MultiVariant;
        constructor();
    }
    export class $BlockElementFace$Deserializer implements $JsonDeserializer<$BlockElementFace> {
        getTintIndex(arg0: $JsonObject_): number;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockElementFace;
        constructor();
    }
    export class $BlockElementFace extends $Record {
        texture(): string;
        uv(): $BlockFaceUV;
        cullForDirection(): $Direction;
        tintIndex(): number;
        faceData(): $ExtraFaceData;
        parent(): $MutableObject<$BlockElement>;
        static NO_TINT: number;
        constructor(cullForDirection: $Direction_, tintIndex: number, texture: string, uv: $BlockFaceUV, faceData: $ExtraFaceData_, parent: $MutableObject<$BlockElement>);
        constructor(arg0: $Direction_, arg1: number, arg2: string, arg3: $BlockFaceUV);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementFace}.
     */
    export type $BlockElementFace_ = { faceData?: $ExtraFaceData_, cullForDirection?: $Direction_, texture?: string, parent?: $MutableObject<$BlockElement>, tintIndex?: number, uv?: $BlockFaceUV,  } | [faceData?: $ExtraFaceData_, cullForDirection?: $Direction_, texture?: string, parent?: $MutableObject<$BlockElement>, tintIndex?: number, uv?: $BlockFaceUV, ];
    export class $ItemModelGenerator$Span {
    }
    export class $MultiVariant implements $UnbakedModel {
        resolveParents(arg0: $Function_<any, any>): void;
        getVariants(): $List<$Variant>;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState): $BakedModel;
        constructor(arg0: $List_<$Variant>);
        get variants(): $List<$Variant>;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $ItemOverrides$BakedOverride {
        test(arg0: number[]): boolean;
        model: $BakedModel;
        constructor(arg0: $ItemOverrides$PropertyMatcher[], arg1: $BakedModel);
    }
    export class $BlockModelDefinition$Deserializer implements $JsonDeserializer<$BlockModelDefinition> {
        getMultiPart(arg0: $JsonDeserializationContext_, arg1: $JsonObject_): $MultiPart;
        getVariants(arg0: $JsonDeserializationContext_, arg1: $JsonObject_): $Map<string, $MultiVariant>;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockModelDefinition;
        constructor();
    }
    export class $ItemOverrides$PropertyMatcher {
    }
    export class $ItemOverrides {
        resolve(arg0: $BakedModel, arg1: $ItemStack_, arg2: $ClientLevel, arg3: $LivingEntity, arg4: number): $BakedModel;
        getOverrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
        static NO_OVERRIDE: number;
        static EMPTY: $ItemOverrides;
        constructor();
        /**
         * @deprecated
         */
        constructor(arg0: $ModelBaker, arg1: $BlockModel, arg2: $List_<$ItemOverride>);
        constructor(arg0: $ModelBaker, arg1: $UnbakedModel, arg2: $List_<$ItemOverride>, arg3: $Function_<$Material, $TextureAtlasSprite>);
        get overrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
    }
    export class $BlockModelDefinition$MissingVariantException extends $RuntimeException {
    }
    export class $Variant$Deserializer implements $JsonDeserializer<$Variant> {
        getBlockRotation(arg0: $JsonObject_): $BlockModelRotation;
        getWeight(arg0: $JsonObject_): number;
        getModel(arg0: $JsonObject_): $ResourceLocation;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $Variant;
        static DEFAULT_Y_ROTATION: number;
        static DEFAULT_X_ROTATION: number;
        static DEFAULT_UVLOCK: boolean;
        static DEFAULT_WEIGHT: number;
        constructor();
    }
    export class $BlockElementRotation extends $Record {
        rescale(): boolean;
        origin(): $Vector3f;
        angle(): number;
        axis(): $Direction$Axis;
        constructor(arg0: $Vector3f, arg1: $Direction$Axis_, arg2: number, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementRotation}.
     */
    export type $BlockElementRotation_ = { origin?: $Vector3f, rescale?: boolean, axis?: $Direction$Axis_, angle?: number,  } | [origin?: $Vector3f, rescale?: boolean, axis?: $Direction$Axis_, angle?: number, ];
    export class $BlockFaceUV$Deserializer implements $JsonDeserializer<$BlockFaceUV> {
        getRotation(arg0: $JsonObject_): number;
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockFaceUV;
        constructor();
    }
    export class $ItemTransform$Deserializer implements $JsonDeserializer<$ItemTransform> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ItemTransform;
        static DEFAULT_SCALE: $Vector3f;
        static MAX_TRANSLATION: number;
        static DEFAULT_ROTATION: $Vector3f;
        static DEFAULT_TRANSLATION: $Vector3f;
        static MAX_SCALE: number;
        constructor();
    }
    export class $BlockModelDefinition$Context {
        setDefinition(arg0: $StateDefinition<$Block_, $BlockState_>): void;
        getDefinition(): $StateDefinition<$Block, $BlockState>;
        gson: $Gson;
        constructor();
    }
    export class $Variant implements $ModelState {
        isUvLocked(): boolean;
        getModelLocation(): $ResourceLocation;
        getWeight(): number;
        getRotation(): $Transformation;
        mayApplyArbitraryRotation(): boolean;
        constructor(arg0: $ResourceLocation_, arg1: $Transformation, arg2: boolean, arg3: number);
        get uvLocked(): boolean;
        get modelLocation(): $ResourceLocation;
        get weight(): number;
        get rotation(): $Transformation;
    }
    export class $ItemTransforms$Deserializer implements $JsonDeserializer<$ItemTransforms> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $ItemTransforms;
        constructor();
    }
    export class $BlockElement$Deserializer implements $JsonDeserializer<$BlockElement> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $BlockElement;
        constructor();
    }
}
