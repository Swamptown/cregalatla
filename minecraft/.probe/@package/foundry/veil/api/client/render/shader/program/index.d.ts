import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $ShaderTextureSource, $ShaderTextureSource$Context_ } from "@package/foundry/veil/api/client/render/shader/texture";
import { $GlStateManager$DestFactor, $GlStateManager$SourceFactor_, $GlStateManager$DestFactor_, $GlStateManager$SourceFactor } from "@package/com/mojang/blaze3d/platform";
import { $Map_, $Map, $Set, $Set_ } from "@package/java/util";
import { $ShaderFeature, $ShaderPreDefinitions, $ShaderFeature_ } from "@package/foundry/veil/api/client/render/shader";
import { $ShaderUniformAccess } from "@package/foundry/veil/api/client/render/shader/uniform";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormat, $VertexFormat$Mode_ } from "@package/com/mojang/blaze3d/vertex";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $AbstractTexture } from "@package/net/minecraft/client/renderer/texture";
import { $CharSequence, $Record } from "@package/java/lang";
import { $NativeResource } from "@package/org/lwjgl/system";
import { $Matrix4fc } from "@package/org/joml";
import { $CompiledShader } from "@package/foundry/veil/api/client/render/shader/compiler";

declare module "@package/foundry/veil/api/client/render/shader/program" {
    export class $TextureUniformAccess {
        static setFramebufferSamplers(arg0: $ShaderInstance, arg1: $AdvancedFbo): void;
    }
    export interface $TextureUniformAccess {
        clearSamplers(): void;
        setFramebufferSamplers(arg0: $AdvancedFbo): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_): void;
        setTexture(arg0: $CharSequence, arg1: number, arg2: number, arg3: number): void;
        setTexture(arg0: $CharSequence, arg1: $ResourceLocation_, arg2: number): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture): void;
        setTexture(arg0: $CharSequence, arg1: $AbstractTexture, arg2: number): void;
        bindSamplers(arg0: $ShaderTextureSource$Context_, arg1: number): void;
        bindSamplers(arg0: number): void;
        removeTexture(arg0: $CharSequence): void;
    }
    export class $ProgramDefinition extends $Record {
        definitionDefaults(): $Map<string, string>;
        tesselationControl(): $ResourceLocation;
        tesselationEvaluation(): $ResourceLocation;
        geometry(): $ResourceLocation;
        getMacros(arg0: $Set_<string>, arg1: $ShaderPreDefinitions): $Map<string, string>;
        shaders(): $Int2ObjectMap<$ResourceLocation>;
        blendMode(): $ShaderBlendMode;
        fragment(): $ResourceLocation;
        compute(): $ResourceLocation;
        definitions(): string[];
        requiredFeatures(): $ShaderFeature[];
        samplers(): $Map<string, $ShaderTextureSource>;
        vertex(): $ResourceLocation;
        constructor(vertex: $ResourceLocation_, tesselationControl: $ResourceLocation_, tesselationEvaluation: $ResourceLocation_, geometry: $ResourceLocation_, fragment: $ResourceLocation_, compute: $ResourceLocation_, definitions: string[], definitionDefaults: $Map_<string, string>, samplers: $Map_<string, $ShaderTextureSource>, shaders: $Int2ObjectMap<$ResourceLocation_>, requiredFeatures: $ShaderFeature_[], blendMode: $ShaderBlendMode_);
    }
    /**
     * Values that may be interpreted as {@link $ProgramDefinition}.
     */
    export type $ProgramDefinition_ = { vertex?: $ResourceLocation_, shaders?: $Int2ObjectMap<$ResourceLocation_>, compute?: $ResourceLocation_, tesselationControl?: $ResourceLocation_, definitions?: string[], geometry?: $ResourceLocation_, fragment?: $ResourceLocation_, samplers?: $Map_<string, $ShaderTextureSource>, requiredFeatures?: $ShaderFeature_[], definitionDefaults?: $Map_<string, string>, blendMode?: $ShaderBlendMode_, tesselationEvaluation?: $ResourceLocation_,  } | [vertex?: $ResourceLocation_, shaders?: $Int2ObjectMap<$ResourceLocation_>, compute?: $ResourceLocation_, tesselationControl?: $ResourceLocation_, definitions?: string[], geometry?: $ResourceLocation_, fragment?: $ResourceLocation_, samplers?: $Map_<string, $ShaderTextureSource>, requiredFeatures?: $ShaderFeature_[], definitionDefaults?: $Map_<string, string>, blendMode?: $ShaderBlendMode_, tesselationEvaluation?: $ResourceLocation_, ];
    export class $ShaderProgram {
        static unbind(): void;
    }
    export interface $ShaderProgram extends $NativeResource, $UniformAccess, $TextureUniformAccess {
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        hasTesselation(): boolean;
        getActiveDynamicBuffers(): number;
        getVertexShader(): $CompiledShader;
        getGeometryShader(): $CompiledShader;
        getTessellationControlShader(): $CompiledShader;
        hasVertex(): boolean;
        getTessellationEvaluationShader(): $CompiledShader;
        getFragmentShader(): $CompiledShader;
        getComputeShader(): $CompiledShader;
        hasGeometry(): boolean;
        hasFragment(): boolean;
        isCompute(): boolean;
        getDefinitionDependencies(): $Set<string>;
        getRequiredFeatures(): $Set<$ShaderFeature>;
        isValid(): boolean;
        bind(): void;
        getFormat(): $VertexFormat;
        getName(): $ResourceLocation;
        getDefinition(): $ProgramDefinition;
        getProgram(): number;
        setDefaultUniforms(arg0: $VertexFormat$Mode_): void;
        setDefaultUniforms(arg0: $VertexFormat$Mode_, arg1: $Matrix4fc, arg2: $Matrix4fc): void;
        /**
         * @deprecated
         */
        toShaderInstance(): $ShaderInstance;
        getShaders(): $Int2ObjectMap<$CompiledShader>;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
        get activeDynamicBuffers(): number;
        get vertexShader(): $CompiledShader;
        get geometryShader(): $CompiledShader;
        get tessellationControlShader(): $CompiledShader;
        get tessellationEvaluationShader(): $CompiledShader;
        get fragmentShader(): $CompiledShader;
        get computeShader(): $CompiledShader;
        get compute(): boolean;
        get definitionDependencies(): $Set<string>;
        get requiredFeatures(): $Set<$ShaderFeature>;
        get valid(): boolean;
        get format(): $VertexFormat;
        get name(): $ResourceLocation;
        get definition(): $ProgramDefinition;
        get program(): number;
        get shaders(): $Int2ObjectMap<$CompiledShader>;
    }
    export class $UniformAccess {
    }
    export interface $UniformAccess {
        setUniformBlock(arg0: $CharSequence, arg1: number): void;
        setStorageBlock(arg0: $CharSequence, arg1: number): void;
        getUniformBlock(arg0: $CharSequence): number;
        getStorageBlock(arg0: $CharSequence): number;
        hasUniformBlock(arg0: $CharSequence): boolean;
        hasStorageBlock(arg0: $CharSequence): boolean;
        getUniformSafe(arg0: $CharSequence): $ShaderUniformAccess;
        getUniformLocation(arg0: $CharSequence): number;
        hasUniform(arg0: $CharSequence): boolean;
        getUniform(arg0: $CharSequence): $ShaderUniformAccess;
    }
    export class $ShaderBlendMode extends $Record {
        srcColorFactor(): $GlStateManager$SourceFactor;
        dstColorFactor(): $GlStateManager$DestFactor;
        srcAlphaFactor(): $GlStateManager$SourceFactor;
        dstAlphaFactor(): $GlStateManager$DestFactor;
        hasEquation(): boolean;
        colorEquation(): $ShaderBlendMode$BlendEquation;
        alphaEquation(): $ShaderBlendMode$BlendEquation;
        apply(): void;
        static CODEC: $Codec<$ShaderBlendMode>;
        static DESTINATION_FACTOR_CODEC: $Codec<$GlStateManager$DestFactor>;
        static SOURCE_FACTOR_CODEC: $Codec<$GlStateManager$SourceFactor>;
        constructor(colorEquation: $ShaderBlendMode$BlendEquation, alphaEquation: $ShaderBlendMode$BlendEquation, srcColorFactor: $GlStateManager$SourceFactor_, dstColorFactor: $GlStateManager$DestFactor_, srcAlphaFactor: $GlStateManager$SourceFactor_, dstAlphaFactor: $GlStateManager$DestFactor_);
    }
    /**
     * Values that may be interpreted as {@link $ShaderBlendMode}.
     */
    export type $ShaderBlendMode_ = { alphaEquation?: $ShaderBlendMode$BlendEquation, dstColorFactor?: $GlStateManager$DestFactor_, dstAlphaFactor?: $GlStateManager$DestFactor_, srcColorFactor?: $GlStateManager$SourceFactor_, colorEquation?: $ShaderBlendMode$BlendEquation, srcAlphaFactor?: $GlStateManager$SourceFactor_,  } | [alphaEquation?: $ShaderBlendMode$BlendEquation, dstColorFactor?: $GlStateManager$DestFactor_, dstAlphaFactor?: $GlStateManager$DestFactor_, srcColorFactor?: $GlStateManager$SourceFactor_, colorEquation?: $ShaderBlendMode$BlendEquation, srcAlphaFactor?: $GlStateManager$SourceFactor_, ];
}
