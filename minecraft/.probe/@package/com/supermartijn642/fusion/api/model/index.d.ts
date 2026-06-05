import { $BlockModel } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Material, $ModelState, $BakedModel, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List, $Collection } from "@package/java/util";
import { $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/model" {
    export class $SpriteIdentifier {
        static of(atlas: $ResourceLocation_, texture: $ResourceLocation_): $SpriteIdentifier;
        static of(material: $Material): $SpriteIdentifier;
        static missing(): $SpriteIdentifier;
    }
    export interface $SpriteIdentifier {
        toMaterial(): $Material;
        getTexture(): $ResourceLocation;
        getAtlas(): $ResourceLocation;
        get texture(): $ResourceLocation;
        get atlas(): $ResourceLocation;
    }
    export class $ModelInstance<T> {
        static of<T>(modelType: $ModelType<T>, modelData: T): $ModelInstance<T>;
    }
    export interface $ModelInstance<T> {
        getParentModels(): $List<$ResourceLocation>;
        getAsVanillaModel(): $BlockModel;
        getModelDependencies(): $Collection<$ResourceLocation>;
        getModelType(): $ModelType<T>;
        getModelData(): T;
        bake(context: $ModelBakingContext): $BakedModel;
        get parentModels(): $List<$ResourceLocation>;
        get asVanillaModel(): $BlockModel;
        get modelDependencies(): $Collection<$ResourceLocation>;
        get modelType(): $ModelType<T>;
        get modelData(): T;
    }
    export class $ModelBakingContext {
    }
    export interface $ModelBakingContext {
        getBlockTexture(texture: $ResourceLocation_): $TextureAtlasSprite;
        getModelIdentifier(): $ResourceLocation;
        getModelBaker(): $ModelBaker;
        getTexture(identifier: $SpriteIdentifier): $TextureAtlasSprite;
        getTexture(atlas: $ResourceLocation_, texture: $ResourceLocation_): $TextureAtlasSprite;
        getModel(identifier: $ResourceLocation_): $ModelInstance<never>;
        getTransformation(): $ModelState;
        get modelIdentifier(): $ResourceLocation;
        get modelBaker(): $ModelBaker;
        get transformation(): $ModelState;
    }
    export class $ModelType<T> {
    }
    export interface $ModelType<T> extends $Serializer<T> {
        getParentModels(data: T): $List<$ResourceLocation>;
        getAsVanillaModel(data: T): $BlockModel;
        getModelDependencies(data: T): $Collection<$ResourceLocation>;
        bake(context: $ModelBakingContext, data: T): $BakedModel;
    }
}
