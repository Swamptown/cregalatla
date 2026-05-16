import { $JsonObject_ } from "@package/com/google/gson";
import { $ShaderInstanceAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $Logger } from "@package/org/slf4j";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map, $Set, $Set_, $Collection_ } from "@package/java/util";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexFormat } from "@package/com/mojang/blaze3d/vertex";
import { $Uniform, $Program } from "@package/com/mojang/blaze3d/shaders";
import { $Object, $AutoCloseable } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/client/shader" {
    export class $ILDShaderInstance {
    }
    export interface $ILDShaderInstance {
        onCreateShader(arg0: $ResourceProvider_, arg1: $ResourceLocation_, arg2: $VertexFormat, arg3: $JsonObject_): void;
        getShaderInstanceAccessor(): $ShaderInstanceAccessor;
        get shaderInstanceAccessor(): $ShaderInstanceAccessor;
    }
    export class $LDShaderInstance extends $ShaderInstance implements $ILDShaderInstance {
        static create(arg0: $ResourceLocation_, arg1: $VertexFormat): $LDShaderInstance;
        static create(arg0: $ResourceLocation_, arg1: $VertexFormat, arg2: $Set_<string>): $LDShaderInstance;
        applySamplers(): void;
        isSamplerCacheDirty(): boolean;
        getGeometry(): $Program;
        FOG_START: $Uniform;
        shaderLocation: $ResourceLocation;
        static lastProgramId: number;
        PROJECTION_MATRIX: $Uniform;
        static SHADER_PATH: string;
        TEXTURE_MATRIX: $Uniform;
        FOG_END: $Uniform;
        MODEL_VIEW_MATRIX: $Uniform;
        defines: $Set<string>;
        SCREEN_SIZE: $Uniform;
        GLINT_ALPHA: $Uniform;
        samplerLocations: $List<number>;
        COLOR_MODULATOR: $Uniform;
        LINE_WIDTH: $Uniform;
        static LOGGER: $Logger;
        uniformMap: $Map<string, $Uniform>;
        LIGHT0_DIRECTION: $Uniform;
        CHUNK_OFFSET: $Uniform;
        FOG_COLOR: $Uniform;
        FOG_SHAPE: $Uniform;
        GAME_TIME: $Uniform;
        LIGHT1_DIRECTION: $Uniform;
        get samplerCacheDirty(): boolean;
        get geometry(): $Program;
    }
    export class $LDShaderHolder implements $IConfigurable, $INBTSerializable<$CompoundTag>, $AutoCloseable {
        close(): void;
        static create(arg0: $ResourceLocation_, arg1: $VertexFormat): $LDShaderHolder;
        isBuiltinUniform(arg0: $Uniform, arg1: $ShaderInstance): boolean;
        serializeSampler(arg0: $Object): $CompoundTag;
        deserializeSampler(arg0: $CompoundTag_): $Object;
        isBuiltinSampler(arg0: string): boolean;
        removeDynamicSampler(arg0: string): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        getShaderInstance(): $LDShaderInstance;
        getShaderInstance(arg0: $Collection_<string>): $LDShaderInstance;
        addDynamicUniform(arg0: string, arg1: $Consumer_<$Uniform>): void;
        removeDynamicUniform(arg0: string): void;
        addDynamicSampler(arg0: string, arg1: $Supplier_<$Object>): void;
        static createSafe(arg0: $ResourceLocation_, arg1: $VertexFormat): $LDShaderHolder;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        baseInstance: $LDShaderInstance;
        shaderUid: string;
        static SHADER_UID_DEFINE: string;
        get configurableName(): string;
    }
}
