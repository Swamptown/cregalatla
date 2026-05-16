import { $AnimationMetadataSection } from "@package/net/minecraft/client/resources/metadata/animation";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Pair, $Serializer } from "@package/com/supermartijn642/fusion/api/util";

declare module "@package/com/supermartijn642/fusion/api/texture" {
    export class $SpritePreparationContext {
    }
    export interface $SpritePreparationContext {
        getAnimationMetadata(): $AnimationMetadataSection;
        getOriginalFrameSize(): $Pair<number, number>;
        getTextureWidth(): number;
        getOriginalFrameWith(): number;
        getTextureHeight(): number;
        getOriginalFrameHeight(): number;
        getIdentifier(): $ResourceLocation;
        get animationMetadata(): $AnimationMetadataSection;
        get originalFrameSize(): $Pair<number, number>;
        get textureWidth(): number;
        get originalFrameWith(): number;
        get textureHeight(): number;
        get originalFrameHeight(): number;
        get identifier(): $ResourceLocation;
    }
    export class $SpriteCreationContext {
    }
    export interface $SpriteCreationContext {
        getTextureIdentifier(): $ResourceLocation;
        getAtlasWidth(): number;
        getAtlasHeight(): number;
        getSpritePositionX(): number;
        getSpritePositionY(): number;
        getTextureWidth(): number;
        getTextureHeight(): number;
        createOriginalSprite(): $TextureAtlasSprite;
        getTextureBuffers(): $NativeImage[];
        getSpriteWidth(): number;
        getSpriteHeight(): number;
        getMipmapLevels(): number;
        getAtlas(): $TextureAtlas;
        get textureIdentifier(): $ResourceLocation;
        get atlasWidth(): number;
        get atlasHeight(): number;
        get spritePositionX(): number;
        get spritePositionY(): number;
        get textureWidth(): number;
        get textureHeight(): number;
        get textureBuffers(): $NativeImage[];
        get spriteWidth(): number;
        get spriteHeight(): number;
        get mipmapLevels(): number;
        get atlas(): $TextureAtlas;
    }
    export class $TextureType<T> {
    }
    export interface $TextureType<T> extends $Serializer<T> {
        getFrameSize(context: $SpritePreparationContext, data: T): $Pair<number, number>;
        createSprite(context: $SpriteCreationContext, data: T): $TextureAtlasSprite;
    }
}
