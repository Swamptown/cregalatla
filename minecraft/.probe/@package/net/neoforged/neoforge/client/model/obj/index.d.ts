import { $InputStream } from "@package/java/io";
import { $JsonDeserializationContext_, $JsonObject_ } from "@package/com/google/gson";
import { $ObjModelAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $IGeometryBakingContext, $SimpleUnbakedGeometry, $IGeometryLoader } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Material, $UnbakedModel, $ModelState, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $Set, $Set_, $Collection } from "@package/java/util";
import { $Function_ } from "@package/java/util/function";
import { $CompositeRenderable$PartBuilder, $CompositeRenderable } from "@package/net/neoforged/neoforge/client/model/renderable";
import { $Direction } from "@package/net/minecraft/core";
import { $IModelBuilder } from "@package/net/neoforged/neoforge/client/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Record, $AutoCloseable } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector4f } from "@package/org/joml";

declare module "@package/net/neoforged/neoforge/client/model/obj" {
    export class $ObjModel$ModelMesh {
    }
    export class $ObjModel extends $SimpleUnbakedGeometry<$ObjModel> implements $ObjModelAccessor {
        getRootComponentNames(): $Set<string>;
        bakeRenderable(arg0: $IGeometryBakingContext): $CompositeRenderable;
        static parse(arg0: $ObjTokenizer, arg1: $ObjModel$ModelSettings_): $ObjModel;
        invokeMakeQuad(arg0: number[][], arg1: number, arg2: $Vector4f, arg3: $Vector4f, arg4: $TextureAtlasSprite, arg5: $Transformation): $Pair<$BakedQuad, $Direction>;
        emissiveAmbient: boolean;
        automaticCulling: boolean;
        mtlOverride: string;
        modelLocation: $ResourceLocation;
        flipV: boolean;
        shadeQuads: boolean;
        get rootComponentNames(): $Set<string>;
    }
    export class $ObjMaterialLibrary {
        getMaterial(arg0: string): $ObjMaterialLibrary$Material;
        static EMPTY: $ObjMaterialLibrary;
        constructor(arg0: $ObjTokenizer);
    }
    export class $ObjTokenizer implements $AutoCloseable {
        readAndSplitLine(arg0: boolean): string[];
        close(): void;
        constructor(arg0: $InputStream);
    }
    export class $ObjModel$ModelObject {
        addQuads(arg0: $IGeometryBakingContext, arg1: $IModelBuilder<never>, arg2: $ModelBaker, arg3: $Function_<$Material, $TextureAtlasSprite>, arg4: $ModelState): void;
        name(): string;
        getTextures(arg0: $IGeometryBakingContext, arg1: $Function_<$ResourceLocation, $UnbakedModel>, arg2: $Set_<$Pair$1<string, string>>): $Collection<$Material>;
        bake(arg0: $CompositeRenderable$PartBuilder<never>, arg1: $IGeometryBakingContext): void;
    }
    export class $ObjModel$ModelGroup extends $ObjModel$ModelObject {
    }
    export class $ObjLoader implements $IGeometryLoader<$ObjModel>, $ResourceManagerReloadListener {
        loadMaterialLibrary(arg0: $ResourceLocation_): $ObjMaterialLibrary;
        loadModel(arg0: $ObjModel$ModelSettings_): $ObjModel;
        onResourceManagerReload(arg0: $ResourceManager): void;
        reload(arg0: $PreparableReloadListener$PreparationBarrier_, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor_, arg5: $Executor_): $CompletableFuture<void>;
        getName(): string;
        read(arg0: $JsonObject_, arg1: $JsonDeserializationContext_): $ObjModel;
        static INSTANCE: $ObjLoader;
        constructor();
        get name(): string;
    }
    export class $ObjModel$ModelSettings extends $Record {
        automaticCulling(): boolean;
        shadeQuads(): boolean;
        emissiveAmbient(): boolean;
        mtlOverride(): string;
        flipV(): boolean;
        modelLocation(): $ResourceLocation;
        constructor(modelLocation: $ResourceLocation_, automaticCulling: boolean, shadeQuads: boolean, flipV: boolean, emissiveAmbient: boolean, mtlOverride: string);
    }
    /**
     * Values that may be interpreted as {@link $ObjModel$ModelSettings}.
     */
    export type $ObjModel$ModelSettings_ = { modelLocation?: $ResourceLocation_, flipV?: boolean, shadeQuads?: boolean, emissiveAmbient?: boolean, automaticCulling?: boolean, mtlOverride?: string,  } | [modelLocation?: $ResourceLocation_, flipV?: boolean, shadeQuads?: boolean, emissiveAmbient?: boolean, automaticCulling?: boolean, mtlOverride?: string, ];
    export class $ObjMaterialLibrary$Material {
        ambientColorMap: string;
        ambientColor: $Vector4f;
        specularColor: $Vector4f;
        specularColorMap: string;
        diffuseColorMap: string;
        transparency: number;
        name: string;
        dissolve: number;
        diffuseColor: $Vector4f;
        specularHighlight: number;
        diffuseTintIndex: number;
        constructor(arg0: string);
    }
}
